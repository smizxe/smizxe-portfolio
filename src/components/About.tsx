import { motion } from 'framer-motion';
import { i18n } from '../data/i18n';
import { portfolio } from '../data/portfolio';
import Section from './Section';

interface AboutProps {
    lang: 'vi' | 'en';
}

export default function About({ lang }: AboutProps) {
    const t = i18n[lang].about;
    const { about } = portfolio;

    return (
        <Section id="about" className="bg-dark text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient">
                    {t.title}
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Bio & Image */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-primary to-secondary p-1">
                            <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
                                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-primary to-secondary">
                                    {about.avatar}
                                </span>
                            </div>
                        </div>

                        <p className="text-lg text-gray-300 leading-relaxed">
                            {t.description}
                        </p>

                        <ul className="space-y-3">
                            {about.strengths.map((str, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                    {str}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Skills */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold mb-6">{t.skills}</h3>
                        <div className="space-y-4">
                            {about.skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                                        <span className="text-sm font-medium text-primary">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-white/10 rounded-full h-2.5">
                                        <motion.div
                                            className="bg-primary h-2.5 rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
