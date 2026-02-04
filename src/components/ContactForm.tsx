
import { motion } from 'framer-motion';
import LeadForm from './LeadForm';
import ContactLinks from './ContactLinks';

import { i18n } from '../data/i18n';

interface ContactFormProps {
    lang: 'vi' | 'en';
    onOpenMenu?: () => void;
}

export default function ContactForm({ lang, onOpenMenu }: ContactFormProps) {
    const t = i18n[lang].contact;

    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-transparent to-neutral-900/50 scroll-mt-0">
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6 whitespace-pre-line">
                        {t.title}
                    </h2>
                    <p className="text-secondary text-lg font-light">
                        {t.subtitle}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <LeadForm lang={lang} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <ContactLinks
                        lang={lang}
                        className="mt-12 border-t border-white/5 pt-8"
                        mobileLayout="vertical"
                        onOpenMenu={onOpenMenu}
                    />
                </motion.div>
            </div>
        </section>
    );
}
