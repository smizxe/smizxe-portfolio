import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { i18n } from '../data/i18n';
import { portfolio } from '../data/portfolio';
import Section from './Section';
import { cn } from '../lib/utils';
import CaseStudyModal from '@/components/CaseStudyModal';

interface ProjectsProps {
    lang: 'vi' | 'en';
}

export default function Projects({ lang }: ProjectsProps) {
    const t = i18n[lang].projects;
    const { projects } = portfolio;
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const selectedProject = projects.find(p => p.id === selectedId);

    return (
        <Section id="projects" className="bg-dark">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient">
                    {t.title}
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            layoutId={project.id}
                            key={project.id}
                            onClick={() => setSelectedId(project.id)}
                            className="group cursor-pointer rounded-2xl overflow-hidden bg-white/5 border border-white/5 hover:border-primary/50 transition-colors"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Thumbnail Placeholder */}
                            <div className={cn("h-48 w-full bg-gradient-to-br", project.color)} />

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                                        <span className="text-sm text-gray-400">{project.category}</span>
                                    </div>
                                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">
                                        {project.stats.timeline}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map(tech => (
                                        <span key={tech} className="text-xs px-2 py-1 rounded bg-dark border border-white/10 text-gray-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-2 text-primary font-medium text-sm">
                                    {t.caseStudy} <ExternalLink className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedId && selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        <motion.div
                            layoutId={selectedId}
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-dark border border-white/10 rounded-3xl shadow-2xl custom-scrollbar"
                        >
                            <button
                                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-white/20 z-10 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <CaseStudyModal project={selectedProject} lang={lang} t={t} />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </Section>
    );
}
