
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowDownRight, Layers, Cpu, Lightbulb, Search, Zap,
    HeartHandshake, Monitor, Check, Bot, ArrowUpRight,
    Smartphone, Globe
} from 'lucide-react';
import avatar from './assets/smizxe-chu-tich.jpg';

import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import LeadForm from './components/LeadForm';
import BackgroundDecoration from './components/BackgroundDecoration';
import ContactLinks from './components/ContactLinks';
import Story from './components/Story';
import Navbar from './components/Navbar';
import { i18n } from './data/i18n';

const heroVideos = [
    new URL('../video hero/2026-03-21 23-22-14.mp4', import.meta.url).href,
    new URL('../video hero/2026-03-21 23-22-49.mp4', import.meta.url).href,
    new URL('../video hero/2026-03-21 23-24-13.mp4', import.meta.url).href,
    new URL('../video hero/2026-03-21 23-24-43.mp4', import.meta.url).href,
    new URL('../video hero/2026-03-21 23-25-48.mp4', import.meta.url).href,
];

function App() {
    const [lang, setLang] = useState<'vi' | 'en'>('vi');
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [glitchBeat, setGlitchBeat] = useState(0);
    const t = i18n[lang];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const transitionGapMs = 6400;
        let timeoutIds: number[] = [];

        const cycleVideo = () => {
            [1, 2, 3, 4, 5].forEach((beat, index) => {
                const timeoutId = window.setTimeout(() => {
                    setGlitchBeat(beat);
                }, index * 85);
                timeoutIds.push(timeoutId);
            });

            timeoutIds.push(window.setTimeout(() => {
                setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
            }, 260));

            timeoutIds.push(window.setTimeout(() => {
                setGlitchBeat(0);
            }, 720));
        };

        const intervalId = window.setInterval(cycleVideo, transitionGapMs);

        return () => {
            window.clearInterval(intervalId);
            timeoutIds.forEach((id) => window.clearTimeout(id));
        };
    }, []);

    return (
        <div className="bg-background text-primary font-sans antialiased selection:bg-white/20 selection:text-white min-h-screen">

            {/* Background Grid Effect */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.07] bg-grid bg-grid-pattern"></div>

            {/* Global Scattered Shapes */}
            <BackgroundDecoration />

            {/* Navbar */}
            <Navbar lang={lang} />

            {/* Floating Language Switcher */}
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
                className="fixed bottom-6 right-6 z-50 p-3 bg-neutral-900/80 border border-white/10 backdrop-blur-md rounded-full shadow-2xl hover:bg-neutral-800 transition-all group"
                aria-label="Switch Language"
            >
                <div className="flex items-center justify-center w-6 h-6 relative">
                    <Globe width={24} className="text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {lang === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
                </div>
            </motion.button>

            {/* Hero Section */}
            <main className="relative z-10 pt-24 pb-16 md:pt-36 md:pb-24 px-6 overflow-hidden">
                <div className="max-w-6xl mx-auto relative">

                    {/* Abstract Deco Element */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none mix-blend-screen"></div>
                    <div className="absolute top-40 -left-20 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none mix-blend-screen"></div>

                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex-1 text-center md:text-left"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs tracking-wide text-secondary mb-8">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                {t.hero.status}
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-white leading-[1.1] mb-8 text-glow">
                                {t.hero.headline}
                            </h1>

                            <p className="text-base md:text-lg text-secondary font-light max-w-2xl leading-relaxed mb-10 md:pr-10 mx-auto md:mx-0">
                                {t.hero.subheadline}
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                                <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="w-full sm:w-auto px-6 py-3 bg-white text-black text-sm font-medium rounded hover:bg-white/90 transition-colors flex items-center justify-center gap-2">
                                    {t.hero.ctaProjects}
                                    <ArrowDownRight width={16} strokeWidth={2} />
                                </a>
                                <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="w-full sm:w-auto px-6 py-3 border border-white/10 text-white text-sm font-medium rounded hover:bg-white/5 transition-colors text-center">
                                    {t.hero.ctaContact}
                                </a>
                            </div>
                        </motion.div>

                        {/* Hero Display Area */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex-1 relative flex justify-center md:justify-end"
                        >
                            <div className="hidden">
                                <img
                                    src={avatar}
                                    alt="Vương Hoàng Giang"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                            </div>
                            <div className="hero-monitor-shell relative w-[330px] md:w-[520px]">
                                <div className={`hero-monitor ${glitchBeat > 0 ? `hero-monitor--glitch hero-monitor--beat-${glitchBeat}` : ''}`}>
                                    <div className="hero-monitor__header">
                                        <div className="hero-monitor__traffic">
                                            <span className="bg-[#ff5f57]" />
                                            <span className="bg-[#ffbd2f]" />
                                            <span className="bg-[#28c840]" />
                                        </div>
                                        <div className="hero-monitor__camera" />
                                        <div className="hero-monitor__label">yangai.display</div>
                                    </div>

                                    <div className="hero-monitor__screen">
                                        <video
                                            key={heroVideos[currentVideoIndex]}
                                            src={heroVideos[currentVideoIndex]}
                                            autoPlay
                                            muted
                                            playsInline
                                            loop
                                            preload="auto"
                                            className="hero-monitor__video"
                                            aria-label="Hero showcase reel"
                                        />
                                        <div className="hero-monitor__overlay" />
                                        <div className="hero-monitor__scanlines" />
                                        <div className="hero-monitor__noise" />
                                        <div className="hero-monitor__glow" />
                                    </div>

                                    <div className="hero-monitor__chin">
                                        <span>Demos & Projects</span>
                                        <span>{String(currentVideoIndex + 1).padStart(2, '0')}/{String(heroVideos.length).padStart(2, '0')}</span>
                                    </div>
                                </div>

                                <div className="hero-monitor__stand" aria-hidden="true">
                                    <div className="hero-monitor__neck" />
                                    <div className="hero-monitor__base" />
                                </div>
                            </div>
                            {/* Deco circles around hero display */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full -z-10 animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-white/5 rounded-full -z-10 animate-[spin_15s_linear_infinite_reverse]"></div>
                        </motion.div>
                    </div>

                    {/* Quick Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-16 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs md:text-sm text-secondary"
                    >
                        <div className="flex items-center gap-3 justify-start">
                            <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-white shrink-0">
                                <Layers width={16} strokeWidth={1.5} />
                            </div>
                            <span>{t.hero.trust.fullPackage}</span>
                        </div>
                        <div className="flex items-center gap-3 justify-start">
                            <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-white shrink-0">
                                <Cpu width={16} strokeWidth={1.5} />
                            </div>
                            <span>{t.hero.trust.cost}</span>
                        </div>
                        <div className="flex items-center gap-3 justify-start">
                            <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-white shrink-0">
                                <Lightbulb width={16} strokeWidth={1.5} />
                            </div>
                            <span>{t.hero.trust.support}</span>
                        </div>
                    </motion.div>

                    {/* Quick Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-16"
                    >
                        <LeadForm
                            lang={lang}
                            className="max-w-3xl mx-auto"
                            title={t.leadForm.title}
                            description={t.leadForm.description}
                        />
                        <ContactLinks lang={lang} className="mt-8" />
                    </motion.div>
                </div>
            </main>

            {/* Why Choose Me Section */}
            <section className="py-20 bg-surface border-y border-white/5 relative">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="md:sticky md:top-32"
                        >
                            <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">{t.whyChoose.title}</h2>
                            <p className="text-secondary font-light text-sm md:text-base leading-relaxed mb-6">
                                {t.whyChoose.description}
                            </p>
                            <div className="h-px w-20 bg-white/20"></div>
                        </motion.div>

                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                whileHover={{ scale: 1.02 }}
                                className="group hover:bg-white/5 p-6 rounded-lg transition-all duration-300 border border-transparent hover:border-white/5"
                            >
                                <Search className="text-white mb-4" width={24} strokeWidth={1.5} />
                                <h3 className="text-lg font-medium text-white mb-2">{t.whyChoose.items[0].title}</h3>
                                <p className="text-sm text-secondary leading-relaxed">{t.whyChoose.items[0].desc}</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="group hover:bg-white/5 p-6 rounded-lg transition-all duration-300 border border-transparent hover:border-white/5"
                            >
                                <Zap className="text-white mb-4" width={24} strokeWidth={1.5} />
                                <h3 className="text-lg font-medium text-white mb-2">{t.whyChoose.items[1].title}</h3>
                                <p className="text-sm text-secondary leading-relaxed">{t.whyChoose.items[1].desc}</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                whileHover={{ scale: 1.02 }}
                                className="group hover:bg-white/5 p-6 rounded-lg transition-all duration-300 border border-transparent hover:border-white/5"
                            >
                                <HeartHandshake className="text-white mb-4" width={24} strokeWidth={1.5} />
                                <h3 className="text-lg font-medium text-white mb-2">{t.whyChoose.items[2].title}</h3>
                                <p className="text-sm text-secondary leading-relaxed">{t.whyChoose.items[2].desc}</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About & Services Grid (Bento Style) */}
            <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-min">

                    {/* About Block */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 bg-surface border border-border p-8 md:p-10 rounded-xl flex flex-col justify-between"
                    >
                        <div>
                            <h2 className="text-xs font-medium uppercase tracking-widest text-secondary mb-6">{t.aboutServices.aboutTitle}</h2>
                            <p className="text-lg md:text-xl font-light text-white/90 leading-relaxed mb-6">
                                {t.aboutServices.aboutDesc}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/5">
                            <div className="text-xs text-secondary">
                                <span className="block text-white font-medium mb-1">{t.aboutServices.metrics.cost.label}</span>
                                {t.aboutServices.metrics.cost.value}
                            </div>
                            <div className="text-xs text-secondary">
                                <span className="block text-white font-medium mb-1">{t.aboutServices.metrics.time.label}</span>
                                {t.aboutServices.metrics.time.value}
                            </div>
                            <div className="text-xs text-secondary">
                                <span className="block text-white font-medium mb-1">{t.aboutServices.metrics.support.label}</span>
                                {t.aboutServices.metrics.support.value}
                            </div>
                        </div>
                    </motion.div>

                    {/* Service 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        whileHover={{ y: -5 }}
                        className="lg:col-span-5 bg-neutral-900 border border-border p-8 rounded-xl hover:border-white/20 transition-colors group"
                    >
                        <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-colors">
                            <Monitor width={20} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2">{t.aboutServices.services[0].title}</h3>
                        <ul className="space-y-2 mt-4 text-sm text-secondary">
                            {t.aboutServices.services[0].items.map((item, i) => (
                                <li key={i} className="flex items-center gap-2"><Check width={14} /> {item}</li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Service 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ y: -5 }}
                        className="lg:col-span-6 bg-neutral-900 border border-border p-8 rounded-xl hover:border-indigo-500/30 transition-colors group relative overflow-hidden"
                    >
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-colors"></div>
                        <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white mb-6 relative z-10 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                            <Smartphone width={20} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2 relative z-10">{t.aboutServices.services[1].title}</h3>
                        <ul className="space-y-2 mt-4 text-sm text-secondary relative z-10">
                            {t.aboutServices.services[1].items.map((item, i) => (
                                <li key={i} className="flex items-center gap-2"><Check width={14} /> {item}</li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Service 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ y: -5 }}
                        className="lg:col-span-6 bg-neutral-900 border border-border p-8 rounded-xl hover:border-emerald-500/30 transition-colors group relative overflow-hidden"
                    >
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors"></div>
                        <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white mb-6 relative z-10 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                            <Bot width={20} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2 relative z-10">{t.aboutServices.services[2].title}</h3>
                        <ul className="space-y-2 mt-4 text-sm text-secondary relative z-10">
                            {t.aboutServices.services[2].items.map((item, i) => (
                                <li key={i} className="flex items-center gap-2"><Check width={14} /> {item}</li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-background border-t border-white/5">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                    >
                        <div>
                            <h2 className="text-3xl font-medium tracking-tight text-white mb-4">{t.projects.title}</h2>
                            <p className="text-secondary text-sm max-w-lg">
                                {t.projects.description}
                            </p>
                        </div>
                        <div className="hidden md:block h-px flex-1 bg-white/10 mx-8 mb-2"></div>
                        <span className="text-xs font-mono text-secondary/50 border border-white/10 px-2 py-1 rounded">{t.projects.label}</span>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Project 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="group cursor-pointer"
                            onClick={() => window.open('https://rentino.vn', '_blank')}
                        >
                            <div className="h-64 bg-surface rounded-lg border border-white/5 overflow-hidden relative mb-6">
                                <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500">
                                    <img
                                        src="/images/rentino-preview.png"
                                        alt="Rentino"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Overlay gradient for better text contrast if needed, but image is cover */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-medium text-white group-hover:text-orange-500 transition-colors">{t.projects.list[0].title}</h3>
                                    <p className="text-sm text-secondary mt-1">{t.projects.list[0].desc}</p>
                                </div>
                                <ArrowUpRight className="text-white/30 group-hover:text-white transition-colors" width={20} />
                            </div>
                            <div className="flex gap-2 mt-3">
                                <span className="text-[10px] uppercase tracking-wider border border-white/10 px-2 py-0.5 rounded text-secondary">Fintech</span>
                                <span className="text-[10px] uppercase tracking-wider border border-orange-500/20 px-2 py-0.5 rounded text-orange-500">AI Integration</span>
                            </div>
                        </motion.div>

                        {/* Project 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="group cursor-pointer"
                            onClick={() => window.open('https://educhill.net', '_blank')}
                        >
                            <div className="h-64 bg-surface rounded-lg border border-white/5 overflow-hidden relative mb-6">
                                <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500">
                                    <img
                                        src="/images/educhill-preview.png"
                                        alt="Educhill"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-medium text-white group-hover:text-indigo-400 transition-colors">{t.projects.list[1].title}</h3>
                                    <p className="text-sm text-secondary mt-1">{t.projects.list[1].desc}</p>
                                </div>
                                <ArrowUpRight className="text-white/30 group-hover:text-white transition-colors" width={20} />
                            </div>
                            <div className="flex gap-2 mt-3">
                                <span className="text-[10px] uppercase tracking-wider border border-white/10 px-2 py-0.5 rounded text-secondary">Web App</span>
                                <span className="text-[10px] uppercase tracking-wider border border-indigo-500/20 px-2 py-0.5 rounded text-indigo-400">AI Agent</span>
                            </div>
                        </motion.div>

                        {/* Project 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="group cursor-pointer"
                        >
                            <div className="h-64 bg-surface rounded-lg border border-white/5 overflow-hidden relative mb-6">
                                <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500">
                                    <img
                                        src="/images/personal-agent-preview.png"
                                        alt="Personal Life AI Agent"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">{t.projects.list[2].title}</h3>
                                    <p className="text-sm text-secondary mt-1">{t.projects.list[2].desc}</p>
                                </div>
                                <ArrowUpRight className="text-white/30 group-hover:text-white transition-colors" width={20} />
                            </div>
                            <div className="flex gap-2 mt-3">
                                <span className="text-[10px] uppercase tracking-wider border border-white/10 px-2 py-0.5 rounded text-secondary">n8n</span>
                                <span className="text-[10px] uppercase tracking-wider border border-blue-500/20 px-2 py-0.5 rounded text-blue-400">OpenAI</span>
                            </div>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="group cursor-pointer"
                            onClick={() => window.open('https://lasante.vercel.app', '_blank')}
                        >
                            <div className="h-64 bg-surface rounded-lg border border-white/5 overflow-hidden relative mb-6">
                                <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500">
                                    <img
                                        src="/images/lasante-preview.png"
                                        alt="Lasante"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-medium text-white group-hover:text-amber-400 transition-colors">{t.projects.list[3].title}</h3>
                                    <p className="text-sm text-secondary mt-1">{t.projects.list[3].desc}</p>
                                </div>
                                <ArrowUpRight className="text-white/30 group-hover:text-white transition-colors" width={20} />
                            </div>
                            <div className="flex gap-2 mt-3">
                                <span className="text-[10px] uppercase tracking-wider border border-white/10 px-2 py-0.5 rounded text-secondary">3D Landing</span>
                                <span className="text-[10px] uppercase tracking-wider border border-amber-500/20 px-2 py-0.5 rounded text-amber-400">Luxury Brand</span>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>


            {/* Story Section (Replaces Process) */}
            <Story lang={lang} />

            {/* Testimonials */}
            <Testimonials lang={lang} />

            {/* CTA / Contact Section */}
            <ContactForm lang={lang} />

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="py-12 px-6 border-t border-white/5 bg-black text-center md:text-left"
            >
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <p className="text-xs text-white/40 uppercase tracking-widest font-medium mb-2">yangai</p>
                        <p className="text-xs text-secondary">{t.footer.copyright}</p>
                    </div>
                    <div className="text-xs text-secondary/50 max-w-md text-center md:text-right">
                        <p>{t.footer.disclaimer}</p>
                    </div>
                </div>
            </motion.footer>

        </div >
    );
}

export default App;
