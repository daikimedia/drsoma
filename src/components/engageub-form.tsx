import React, { useEffect, useMemo, useRef, useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const DEFAULT_API_TOKEN = process.env.NEXT_PUBLIC_CMS_API_KEY;
const DEFAULT_FORM_ID = process.env.NEXT_PUBLIC_ENGAGEUB_FORM_ID;

type EngageubFieldOption = string | { label: string; value: string };

interface EngageubField {
  name: string;
  label?: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  options?: EngageubFieldOption[];
}

interface EngageubFormDefinition {
  id?: string;
  name?: string;
  description?: string;
  fields: EngageubField[];
}

interface EngageubFormProps {
  formId?: string;
  apiToken?: string; // optional; falls back to env token used across site
  className?: string;
}

const normalizeOption = (opt: EngageubFieldOption) =>
  typeof opt === 'string' ? { label: opt, value: opt } : opt;

// Manages checkbox values as string[], others as string
type FormValues = Record<string, string | string[]>;

const EngageubForm: React.FC<EngageubFormProps> = ({ formId, apiToken, className }) => {
  const [formDef, setFormDef] = useState<EngageubFormDefinition | null>(null);
  const [formValues, setFormValues] = useState<FormValues>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  type Status = { type: 'success' | 'error'; text: string } | null;
  const [status, setStatus] = useState<Status>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const isSubmittingRef = useRef<boolean>(false);

  const tokenToUse = useMemo(() => apiToken || DEFAULT_API_TOKEN, [apiToken]);
  const formIdToUse = useMemo(() => formId || DEFAULT_FORM_ID, [formId]);

  useEffect(() => {
    let isMounted = true;
    const fetchForm = async () => {
      if (!API_URL || !tokenToUse) {
        console.warn('API_URL or API token missing; cannot load Engageub form');
        if (isMounted) setLoading(false);
        return;
      }
      if (!formIdToUse) {
        console.warn('Form ID not provided; set NEXT_PUBLIC_ENGAGEUB_FORM_ID or pass formId prop');
        if (isMounted) {
          setStatus({ type: 'error', text: 'Form is not configured. Please try again later.' });
          setLoading(false);
        }
        return;
      }
      setLoading(true);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
      try {
        // Prefer formId-based endpoint with Bearer token
        const primaryUrl = `${API_URL}/private-api/forms/form/${formIdToUse}`;

        const res = await fetch(primaryUrl, {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${tokenToUse}`,
          },
          signal: controller.signal,
        });
        clearTimeout(timeoutId);


        if (!res.ok) throw new Error(`Failed to load form: ${res.status}`);
        const json = await res.json();
        const def: EngageubFormDefinition = json?.data || json;
        if (def && Array.isArray(def.fields)) {
          if (isMounted) setFormDef(def);
        } else {
          throw new Error('Invalid form definition');
        }
      } catch (err) {
        console.error('Failed to load Engageub form:', err);
        if (isMounted) setStatus({ type: 'error', text: 'Unable to load the form at the moment. Please try again later.' });
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchForm();
    return () => {
      isMounted = false;
    };
  }, [tokenToUse, formIdToUse, refreshKey]);

  // Auto-hide alerts after 5 seconds and refresh on success
  useEffect(() => {
    if (!status) return;
    const timer = setTimeout(() => {
      setStatus(null);
      if (status.type === 'success') {
        setRefreshKey(k => k + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [status]);

  const handleTextChange = (name: string, value: string) => {
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, value: string, checked: boolean) => {
    setFormValues(prev => {
      const existing = Array.isArray(prev[name]) ? (prev[name] as string[]) : [];
      const next = checked ? Array.from(new Set([...existing, value])) : existing.filter(v => v !== value);
      return { ...prev, [name]: next };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!API_URL || !tokenToUse || !formIdToUse) return;
    if (isSubmittingRef.current) return; // guard against double submits
    isSubmittingRef.current = true;
    setIsSubmitting(true);
    setStatus(null);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);
    try {
      const payload: Record<string, unknown> = { ...formValues };
      if (formIdToUse) payload.formId = formIdToUse;
      // Prefer formId-based endpoint
      const submitUrl = `${API_URL}/private-api/forms/form/${formIdToUse}/submit`
      const res = await fetch(submitUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokenToUse}`,
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);
      if (!res.ok) {
        try {
          const errJson = await res.json();
          const apiMsg = errJson?.message || errJson?.error || `Submission failed: ${res.status}`;
          throw new Error(apiMsg);
        } catch {
          throw new Error(`Submission failed: ${res.status}`);
        }
      }
      setStatus({ type: 'success', text: 'Thank you! Your submission has been received.' });
      setFormValues({});
    } catch (err) {
      console.error('Engageub form submission error:', err);
      const text = err instanceof Error ? err.message : 'Sorry, there was an error submitting your form. Please try again.';
      setStatus({ type: 'error', text });
    } finally {
      setIsSubmitting(false);
      isSubmittingRef.current = false;
    }
  };

  if (loading) return <div>Loading form...</div>;
  if (!formDef) return null;

  return (
    <form onSubmit={handleSubmit} className={className ?? 'w-full'}>
      <div className="flex flex-col gap-20 w-full">
        {status && (
          <div className="w-full">
            <div
              className={`mx-auto max-w-[500px] text-center mb-2 p-3 rounded border ${
                status.type === 'success'
                  ? 'text-green-700 bg-green-50 border-green-200'
                  : 'text-red-700 bg-red-50 border-red-200'
              }`}
            >
              {status.text}
            </div>
          </div>
        )}
        {formDef.fields.map((field, index) => {
          const value = formValues[field.name];
          const options = (field.options || []).map(normalizeOption);

          if (field.type === 'textarea') {
            return (
              <div key={`${field.name}-${index}`} className="flex flex-col w-full">
                {field.label && (
                  <label className="block text-para-black text-sm mb-2">
                    {field.label}{field.required ? ' *' : ''}
                  </label>
                )}
                <div className="flex w-full border border-para-black p-10 rounded-[5px] flex-col relative">
                  <textarea
                    name={field.name}
                    rows={3}
                    required={!!field.required}
                    placeholder={field.placeholder}
                    className="w-full bg-transparent outline-none text-para-input placeholder:text-para-input"
                    value={(value as string) || ''}
                    onChange={e => handleTextChange(field.name, e.target.value)}
                  />
                </div>
              </div>
            );
          }

          if (field.type === 'select') {
            return (
              <div key={`${field.name}-${index}`} className="flex w-full border-b border-b-para-black p-10 flex-col relative">
                {field.label && (
                  <label className="block text-para-black text-sm mb-2">
                    {field.label}{field.required ? ' *' : ''}
                  </label>
                )}
                <select
                  name={field.name}
                  required={!!field.required}
                  value={(value as string) || ''}
                  onChange={e => handleTextChange(field.name, e.target.value)}
                  className="w-full bg-transparent outline-none text-para-input placeholder:text-para-input"
                >
                  <option value="">Select an option</option>
                  {options.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            );
          }

          if (field.type === 'radio') {
            return (
              <div key={`${field.name}-${index}`} className="flex w-full flex-col gap-2">
                {field.label && (
                  <label className="block text-para-black text-sm mb-2">
                    {field.label}{field.required ? ' *' : ''}
                  </label>
                )}
                <div className="flex flex-col">
                  {options.map(opt => (
                    <label key={opt.value} className="flex items-center mb-2">
                      <input
                        type="radio"
                        name={field.name}
                        value={opt.value}
                        required={!!field.required}
                        checked={value === opt.value}
                        onChange={e => handleTextChange(field.name, e.target.value)}
                        className="mr-2"
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>
            );
          }

          if (field.type === 'checkbox') {
            const checkedValues = Array.isArray(value) ? (value as string[]) : [];
            return (
              <div key={`${field.name}-${index}`} className="flex w-full flex-col gap-2">
                {field.label && (
                  <label className="block text-para-black text-sm mb-2">
                    {field.label}{field.required ? ' *' : ''}
                  </label>
                )}
                <div className="flex flex-col">
                  {options.map(opt => {
                    const isChecked = checkedValues.includes(opt.value);
                    return (
                      <label key={opt.value} className="flex items-center mb-2">
                        <input
                          type="checkbox"
                          name={field.name}
                          value={opt.value}
                          required={!!field.required && checkedValues.length === 0}
                          checked={isChecked}
                          onChange={e => handleCheckboxChange(field.name, opt.value, e.target.checked)}
                          className="mr-2"
                        />
                        {opt.label}
                      </label>
                    );
                  })}
                </div>
              </div>
            );
          }

          // Default input (text, email, tel, number, etc.)
          return (
            <div key={`${field.name}-${index}`} className="flex w-full border-b border-b-para-black p-10 flex-col relative">
              {field.label && (
                <label className="block text-para-black text-sm mb-2">
                  {field.label}{field.required ? ' *' : ''}
                </label>
              )}
              <input
                type={field.type}
                name={field.name}
                required={!!field.required}
                placeholder={field.placeholder}
                className="w-full bg-transparent outline-none text-para-input placeholder:text-para-input"
                value={(value as string) || ''}
                onChange={e => handleTextChange(field.name, e.target.value)}
              />
            </div>
          );
        })}

        <div className="flex justify-end w-full">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn py-10 px-[20px] w-fit bg-primary text-para-white rounded-[2.5px] disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default EngageubForm;


