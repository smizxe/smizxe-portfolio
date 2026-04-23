'use client';

import { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

import { i18n } from '../data/i18n';

const LEAD_FORM_ENDPOINT = process.env.NEXT_PUBLIC_LEAD_FORM_ENDPOINT;

interface LeadFormProps {
  lang: 'vi' | 'en';
  className?: string;
  title?: string;
  description?: string;
  formId?: string;
}

export default function LeadForm({
  lang,
  className = '',
  title,
  description,
  formId = 'lead-form',
}: LeadFormProps) {
  const t = i18n[lang].leadForm;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    needs: '',
    message: '',
  });

  const resolvedTitle = title ?? t.title;
  const resolvedDescription = description ?? t.description;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('contact', formData.contact);
      data.append('needs', formData.needs);
      data.append('message', formData.message);
      data.append('timestamp', new Date().toISOString());

      if (!LEAD_FORM_ENDPOINT) {
        throw new Error('Missing NEXT_PUBLIC_LEAD_FORM_ENDPOINT');
      }

      await fetch(LEAD_FORM_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        body: data,
      });

      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(
        lang === 'vi'
          ? 'Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau.'
          : 'Something went wrong while sending your brief. Please try again later.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`agency-form-panel ${className}`}>
      {!submitted ? (
        <>
          <div className="mb-8">
            <p className="section-label">{t.eyebrow}</p>
            <h3 className="mt-5 font-display text-3xl tracking-[-0.05em] text-white">{resolvedTitle}</h3>
            {resolvedDescription ? (
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/58 md:text-base">{resolvedDescription}</p>
            ) : null}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor={`${formId}-name`} className="text-sm text-white/62">
                  {t.name}
                </label>
                <input
                  type="text"
                  id={`${formId}-name`}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="agency-field"
                  placeholder={t.namePlaceholder}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor={`${formId}-contact`} className="text-sm text-white/62">
                  {t.contact}
                </label>
                <input
                  type="text"
                  id={`${formId}-contact`}
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="agency-field"
                  placeholder={t.contactPlaceholder}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor={`${formId}-needs`} className="text-sm text-white/62">
                {t.needs}
              </label>
              <select
                id={`${formId}-needs`}
                name="needs"
                value={formData.needs}
                onChange={handleChange}
                className="agency-select"
              >
                <option value="" className="bg-[#0a0a0a]">
                  {t.needsOptions.default}
                </option>
                <option value="web" className="bg-[#0a0a0a]">
                  {t.needsOptions.web}
                </option>
                <option value="app" className="bg-[#0a0a0a]">
                  {t.needsOptions.app}
                </option>
                <option value="ai" className="bg-[#0a0a0a]">
                  {t.needsOptions.ai}
                </option>
                <option value="other" className="bg-[#0a0a0a]">
                  {t.needsOptions.other}
                </option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor={`${formId}-message`} className="text-sm text-white/62">
                {t.message}
              </label>
              <textarea
                id={`${formId}-message`}
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="agency-textarea resize-none"
                placeholder={t.messagePlaceholder}
              />
            </div>

            <button type="submit" disabled={isSubmitting} className="agency-form-submit">
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  {t.submitting}
                </>
              ) : (
                <>
                  {t.submit}
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-10 text-center"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/12 bg-white/8">
            <ArrowRight className="rotate-[-40deg] text-white" size={26} />
          </div>
          <h3 className="mt-6 font-display text-3xl tracking-[-0.05em] text-white">{t.successTitle}</h3>
          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/60 md:text-base">{t.successDesc}</p>
        </motion.div>
      )}
    </div>
  );
}
