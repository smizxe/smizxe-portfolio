import { Github, ExternalLink, Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

// Types derived from portfolio.ts structure (simplified for here)
interface Project {
    id: string;
    title: string;
    category: string;
    color: string;
    stats: { role: string; timeline: string };
    highlights: string[];
    caseStudy: {
        problem: string;
        solution: string;
        features: string[];
        outcome: string;
    };
    links: { demo: string; source: string };
}

interface CaseStudyModalProps {
    project: Project;
    lang: 'vi' | 'en';
    t: Record<string, string>;
}

export default function CaseStudyModal({ project, t }: CaseStudyModalProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        // Mock functionality
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col">
            {/* Hero format within modal */}
            {/* Hero format within modal */}
            <div className={cn("h-64 sm:h-80 w-full bg-gradient-to-br flex items-end p-8 relative overflow-hidden", project.color)}>
                {(project as any).image && (
                    <img
                        src={(project as any).image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
                    />
                )}
                <div className="w-full relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{project.title}</h2>
                    <p className="text-white/80 text-xl">{project.category}</p>
                </div>
            </div>

            <div className="p-6 md:p-8 space-y-8 bg-dark">
                {/* Quick Actions */}
                <div className="flex flex-wrap gap-4">
                    <a href="#" className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        {t.liveDemo}
                    </a>
                    <a href="#" className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-medium transition-colors">
                        <Github className="w-4 h-4" />
                        {t.viewSource}
                    </a>
                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-medium transition-colors ml-auto sm:ml-0"
                    >
                        {copied ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                        {t.copyBrief}
                    </button>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h3 className="text-xl font-bold mb-3 text-white">The Problem</h3>
                            <p className="text-gray-300 leading-relaxed">{project.caseStudy.problem}</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-3 text-white">The Solution</h3>
                            <p className="text-gray-300 leading-relaxed">{project.caseStudy.solution}</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-3 text-white">Key Outcomes</h3>
                            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400">
                                <p className="font-medium">{project.caseStudy.outcome}</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Project Details</h4>
                            <div className="space-y-4">
                                <div>
                                    <span className="block text-xs text-gray-500 mb-1">Role</span>
                                    <span className="font-medium">{project.stats.role}</span>
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-500 mb-1">Timeline</span>
                                    <span className="font-medium">{project.stats.timeline}</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Features</h4>
                            <ul className="space-y-2">
                                {project.caseStudy.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
