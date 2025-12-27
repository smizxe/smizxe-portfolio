import { motion } from 'framer-motion';
import { i18n } from '../data/i18n';
import Section from './Section';

interface ProcessProps {
    lang: 'vi' | 'en';
}

export default function Process({ lang }: ProcessProps) {
    const t = i18n[lang].process;

    return (
        <Section id="process" className="bg-dark">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient">
                    {t.title}
                </h2>

                <div className="relative max-w-4xl mx-auto">
                    {/* Connector Line */}
                    <div className="absolute top-[50%] left-0 w-full h-1 bg-white/10 -translate-y-1/2 hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {t.steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="relative z-10 flex flex-col items-center text-center group"
                            >
                                <div className="w-12 h-12 rounded-full bg-dark border-2 border-primary text-primary flex items-center justify-center font-bold text-lg mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                    {index + 1}
                                </div>
                                <h3 className="font-semibold text-white/90 group-hover:text-white transition-colors">
                                    {step}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
