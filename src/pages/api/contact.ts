import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  option: z.string().min(1),
  comments: z.string().min(2),
  save: z.boolean().optional(),
});

const mailgun = new Mailgun(formData);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ success: false, message: 'Invalid form data', errors: result.error.issues });
  }

  const { name, email, phone, option, comments } = result.data;
  const optionLabels: Record<string, string> = {
    want: "I want to*",
    appointment: "Arrange for an Appointment",
    enquiry: "Make a Enquiry",
    feedback: "Comments/Feedback",
  };
  const optionLabel = optionLabels[option] || option;

  // Get recipients from env as comma-separated list
  const recipients = process.env.CONTACT_FORM_RECIPIENTS?.split(',').map(e => e.trim()).filter(Boolean);
  if (!recipients || recipients.length === 0) {
    return res.status(500).json({ success: false, message: 'Recipient email not configured' });
  }

  const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY || '',
  });

  try {
    await mg.messages.create(process.env.MAILGUN_DOMAIN || '', {
      from: `Website Contact Form <no-reply@${process.env.MAILGUN_DOMAIN}>`,
      to: recipients,
      subject: 'New Contact Form Submission',
      text: `You have received a new message from the website contact form.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nRequest Type: ${optionLabel}\nComments:\n${comments}\n`,
      html: `
    <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 24px;">
      <h2 style="color: #EA622F;">New Contact Form Submission</h2>
      <table style="width: 100%; max-width: 500px; background: #fff; border-radius: 8px; border-collapse: collapse; box-shadow: 0 2px 8px #0001;">
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; color: #222; width: 140px;">Name:</td>
          <td style="padding: 8px 12px; color: #333;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; color: #222;">Email:</td>
          <td style="padding: 8px 12px; color: #333;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; color: #222;">Phone:</td>
          <td style="padding: 8px 12px; color: #333;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; color: #222;">Request Type:</td>
          <td style="padding: 8px 12px; color: #333;">${optionLabel}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; font-weight: bold; color: #222; vertical-align: top;">Comments:</td>
          <td style="padding: 8px 12px; color: #333; white-space: pre-line;">${comments}</td>
        </tr>
      </table>
      <p style="color: #888; font-size: 13px; margin-top: 24px;">This message was sent from the website contact form.</p>
    </div>
  `,
    });
    return res.status(200).json({ success: true, message: 'Your message has been sent!' });
  } catch (error: unknown) {
    return res.status(500).json({ success: false, message: error instanceof Error ? error.message : 'Failed to send email' });
  }
} 