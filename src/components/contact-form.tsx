import React from "react";
import EngageubForm from "@/components/engageub-form";

type ContactFormProps = Record<string, never>;

const ContactForm: React.FC<ContactFormProps> = () => {
  return (
    <section className="flex py-50 lg:py-100">
        <div className="flex w-full containers">
          <div className="flex w-full gap-50 lg:!flex-nowrap">
            <div className="flex w-full gap-40 flex-col max-w-[500px]">
              <h2 className="text-header-black">Get in touch</h2>
              <div className="flex flex-col gap-20 w-full">
                <EngageubForm />
              </div>
            </div>
            <div className="flex w-full max-w-[600px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15936.23346887744!2d101.591525!3d3.079093!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4c5d86ea0fa5%3A0x97b4f2f0e6637479!2sSoma%20Plastic%20Surgery%20%7C%20Liposuction%20%7C%20Facelift%20%7C%20Breast%20Reduction!5e0!3m2!1sen!2smy!4v1753252333268!5m2!1sen!2smy" 
                width="100%" 
                height="400" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[400px] md:h-[500px] lg:h-[594px] rounded-lg shadow-lg"
                title="Dr. Soma Clinical Aesthetics Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    
  );
};

export default ContactForm; 