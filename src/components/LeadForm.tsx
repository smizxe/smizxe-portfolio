import { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Replace this with your actual Google Apps Script Web App URL
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbz6dakmk79skVct-ppVYdQ804EsbtjHsTeC50p-RVHx-_AuqyhBG4hL_RUC0ULG7qhX/exec";

import { i18n } from '../data/i18n';

interface LeadFormProps {
    lang: 'vi' | 'en';
    className?: string;
    title?: string;
    description?: string;
    formId?: string;
}

export default function LeadForm({ lang, className, title, description, formId = 'lead-form' }: LeadFormProps) {
    const t = i18n[lang].leadForm;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        needs: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
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
            // Add a timestamp for convenience
            data.append('timestamp', new Date().toISOString());

            await fetch(GOOGLE_SHEET_URL, {
                method: 'POST',
                mode: 'no-cors', // Important for Google Sheets
                body: data
            });

            // Since we use no-cors, we assume success if no network error
            setSubmitted(true);
        } catch (error) {
            console.error("Error submitting form:", error);
            alert(lang === 'vi' ? "Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau." : "An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={`bg-surface/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl ${className}`}>
            {title && (
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-medium text-white mb-2">{title}</h3>
                    {description && <p className="text-secondary text-sm leading-relaxed">{description}</p>}
                </div>
            )}

            {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor={`${formId}-name`} className="text-sm font-medium text-secondary">{t.name}</label>
                            <input
                                type="text"
                                id={`${formId}-name`}
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20"
                                placeholder={t.namePlaceholder}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor={`${formId}-contact`} className="text-sm font-medium text-secondary">{t.contact}</label>
                            <input
                                type="text"
                                id={`${formId}-contact`}
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                required
                                className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20"
                                placeholder={t.contactPlaceholder}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor={`${formId}-needs`} className="text-sm font-medium text-secondary">{t.needs}</label>
                        <select
                            id={`${formId}-needs`}
                            name="needs"
                            value={formData.needs}
                            onChange={handleChange}
                            className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none"
                        >
                            <option value="" className="bg-neutral-900">{t.needsOptions.default}</option>
                            <option value="web" className="bg-neutral-900">{t.needsOptions.web}</option>
                            <option value="app" className="bg-neutral-900">{t.needsOptions.app}</option>
                            <option value="ai" className="bg-neutral-900">{t.needsOptions.ai}</option>
                            <option value="other" className="bg-neutral-900">{t.needsOptions.other}</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor={`${formId}-message`} className="text-sm font-medium text-secondary">{t.message}</label>
                        <textarea
                            id={`${formId}-message`}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20 resize-none"
                            placeholder={t.messagePlaceholder}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-white text-black font-medium py-4 rounded-lg hover:bg-white/90 transition-all flex items-center justify-center gap-2 mt-4 group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <> <Loader2 className="animate-spin" width={20} /> {t.submitting} </>
                        ) : (
                            <> {t.submit} <ArrowRight width={18} className="group-hover:translate-x-1 transition-transform" /> </>
                        )}
                    </button>
                </form>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                >
                    <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                        <ArrowRight width={32} className="rotate-[-45deg]" />
                    </div>
                    <h3 className="text-2xl font-medium text-white">{t.successTitle}</h3>
                    <p className="text-secondary max-w-md mx-auto">
                        {t.successDesc}
                    </p>
                </motion.div>
            )}
        </div>
    );
}
