'use client';

import { useState } from 'react';
import { ArrowRight, CircleNotch, Check } from '@phosphor-icons/react';
import { motion } from 'motion/react';

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
    <div className={`border border-ink/15 bg-paper-raised p-6 md:p-9 ${className}`}>
      {!submitted ? (
        <>
          <div className="mb-8">
            <p className="eyebrow">{t.eyebrow}</p>
            <h3 className="mt-4 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-[-0.03em] text-ink">
              {resolvedTitle}
            </h3>
            {resolvedDescription ? (
              <p className="mt-3 max-w-xl text-[15px] leading-7 text-muted">{resolvedDescription}</p>
            ) : null}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor={`${formId}-name`} className="field-label">
                  {t.name}
                </label>
                <input
                  type="text"
                  id={`${formId}-name`}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="field"
                  placeholder={t.namePlaceholder}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor={`${formId}-contact`} className="field-label">
                  {t.contact}
                </label>
                <input
                  type="text"
                  id={`${formId}-contact`}
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="field"
                  placeholder={t.contactPlaceholder}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor={`${formId}-needs`} className="field-label">
                {t.needs}
              </label>
              <select
                id={`${formId}-needs`}
                name="needs"
                value={formData.needs}
                onChange={handleChange}
                className="field"
              >
                <option value="">{t.needsOptions.default}</option>
                <option value="web">{t.needsOptions.web}</option>
                <option value="app">{t.needsOptions.app}</option>
                <option value="ai">{t.needsOptions.ai}</option>
                <option value="other">{t.needsOptions.other}</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor={`${formId}-message`} className="field-label">
                {t.message}
              </label>
              <textarea
                id={`${formId}-message`}
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="field resize-none"
                placeholder={t.messagePlaceholder}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-2 bg-ink px-6 py-4 text-[15px] font-semibold text-paper transition-colors hover:bg-accent hover:text-accent-fg disabled:opacity-60 sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <CircleNotch className="animate-spin" size={18} weight="bold" />
                  {t.submitting}
                </>
              ) : (
                <>
                  {t.submit}
                  <ArrowRight size={18} weight="bold" />
                </>
              )}
            </button>
          </form>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-12 text-center"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center border border-accent bg-accent text-accent-fg">
            <Check size={26} weight="bold" />
          </div>
          <h3 className="mt-6 font-display text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.03em] text-ink">
            {t.successTitle}
          </h3>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-7 text-muted">{t.successDesc}</p>
        </motion.div>
      )}
    </div>
  );
}
