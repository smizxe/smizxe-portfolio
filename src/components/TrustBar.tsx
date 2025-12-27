import { motion } from 'framer-motion';
import { i18n } from '../data/i18n';

interface TrustBarProps {
    lang: 'vi' | 'en';
}

export default function TrustBar({ lang }: TrustBarProps) {
    const t = i18n[lang].trust;
    const badges = ["Cafe", "Spa", "Course Landing", "E-commerce"];

    return (
        <div className="py-8 bg-white/5 border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                    <span className="text-gray-400 font-medium">{t.label}</span>
                    <div className="flex flex-wrap justify-center gap-4">
                        {badges.map((badge, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-gray-300 hover:text-white hover:border-primary/50 transition-colors cursor-default"
                            >
                                {badge}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
