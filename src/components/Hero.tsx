import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { i18n } from '../data/i18n';

interface HeroProps {
    lang: 'vi' | 'en';
}

export default function Hero({ lang }: HeroProps) {
    const t = i18n[lang].hero;

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="hero" className="min-h-screen relative flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-dark z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
            </div>

            <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm md:text-base text-secondary mb-6">
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                            Available for new projects
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6"
                    >
                        {t.headline.split(',')[0]}
                        <span className="block text-gradient">
                            {t.headline.split(',').slice(1).join(',')}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl lg:mx-0 mx-auto"
                    >
                        {t.subheadline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                    >
                        <button
                            onClick={() => scrollTo('projects')}
                            className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
                        >
                            {t.ctaPrimary}
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scrollTo('contact')}
                            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-semibold transition-all hover:scale-105"
                        >
                            {t.ctaSecondary}
                        </button>
                    </motion.div>
                </div>

                {/* Right Content - Interactive Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden lg:block relative"
                >
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative z-10 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl max-w-md mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-500"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl font-bold">
                                VG
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Vuong Hoang Giang</h3>
                                <p className="text-sm text-gray-400">Frontend Developer</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-white/5 p-4 rounded-xl flex items-center justify-between">
                                <span className="text-gray-400">Delivery</span>
                                <span className="font-medium text-secondary">{t.stats.delivery}</span>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl flex items-center justify-between">
                                <span className="text-gray-400">Tech Stack</span>
                                <span className="font-medium text-primary">{t.stats.tech}</span>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl flex items-center justify-between">
                                <span className="text-gray-400">Quality</span>
                                <div className="flex items-center gap-1 text-yellow-400">
                                    <Sparkles className="w-4 h-4 fill-current" />
                                    <span className="font-medium text-white">{t.stats.quality}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Decorative shapes behind card */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full z-0 animate-[spin_10s_linear_infinite]" />
                    <div className="absolute top-10 right-0 w-20 h-20 bg-primary/30 rounded-full blur-xl animate-bounce" />
                    <div className="absolute bottom-10 left-0 w-16 h-16 bg-secondary/30 rounded-full blur-xl animate-pulse" />
                </motion.div>
            </div>
        </section>
    );
}
