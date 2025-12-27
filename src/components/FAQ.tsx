import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { i18n } from '../data/i18n';
import { portfolio } from '../data/portfolio';
import Section from './Section';
import { cn } from '../lib/utils';

interface FAQProps {
    lang: 'vi' | 'en';
}

export default function FAQ({ lang }: FAQProps) {
    const t = i18n[lang].faq;
    const { faq } = portfolio;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <Section id="faq" className="bg-dark/50">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
                    {t.title}
                </h2>

                <div className="space-y-4">
                    {faq.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-xl bg-white/5 border border-white/5 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="font-medium pr-8">{item.q}</span>
                                <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", openIndex === index ? "rotate-180" : "rotate-0")} />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                                            {item.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
