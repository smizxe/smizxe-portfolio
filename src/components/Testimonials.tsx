


import { feedbackImages } from "../data/feedbackImages";
import { motion } from 'framer-motion';
import { i18n } from '../data/i18n';

interface TestimonialsProps {
    lang: 'vi' | 'en';
}

export default function Testimonials({ lang }: TestimonialsProps) {
    const t = i18n[lang].testimonials;
    return (
        <section className="py-24 bg-surface border-b border-white/5 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto px-6 mb-16 text-center"
            >
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
                    {t.title}
                </h2>
                <p className="text-secondary text-base md:text-lg font-light">
                    {t.subtitle}
                </p>
            </motion.div>

            {/* Text Testimonials Marquee */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative flex overflow-x-hidden group mb-12"
            >
                {/* Gradient Masks */}
                <div className="absolute top-0 bottom-0 left-0 w-32 z-10 bg-gradient-to-r from-surface to-transparent pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-32 z-10 bg-gradient-to-l from-surface to-transparent pointer-events-none"></div>

                <div className="py-4 animate-marquee whitespace-nowrap flex gap-6 group-hover:[animation-play-state:paused]">
                    {[...t.items, ...t.items].map((item, idx) => ( // Duplicate for seamless loop
                        <div key={idx} className="w-[350px] md:w-[450px] flex-shrink-0 p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/20 transition-all duration-300 hover:bg-white/5 whitespace-normal flex flex-col justify-between h-auto min-h-[220px]">
                            <div className="mb-6">
                                <div className="flex gap-1 mb-3">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <svg key={star} className="w-4 h-4 text-yellow-500 fill-yellow-500" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    ))}
                                </div>
                                <p className="text-white/90 text-sm md:text-base font-light italic leading-relaxed">
                                    &quot;{item.text}&quot;
                                </p>
                            </div>

                            <div className="pt-4 border-t border-white/5">
                                <div>
                                    <h4 className="text-white font-medium text-sm">{item.author}</h4>
                                    <p className="text-secondary text-xs">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Image Evidence Marquee */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative flex overflow-x-hidden group"
            >
                {/* Gradient Masks */}
                <div className="absolute top-0 bottom-0 left-0 w-32 z-10 bg-gradient-to-r from-surface to-transparent pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-32 z-10 bg-gradient-to-l from-surface to-transparent pointer-events-none"></div>

                <div className="py-4 animate-marquee whitespace-nowrap flex gap-4 group-hover:[animation-play-state:paused]" style={{ animationDirection: 'reverse' }}>
                    {/* Using a subset or duplicating to fill screen. With 47 images, simpler to just map them all. */}
                    {[...feedbackImages, ...feedbackImages].map((src, idx) => (
                        <div key={idx} className="w-[180px] flex-shrink-0 rounded-xl overflow-hidden relative">
                            <img
                                src={src}
                                alt="Feedback proof"
                                className="w-full h-auto object-cover opacity-60 hover:opacity-100 transition-opacity duration-300"
                                loading="lazy"
                            />
                            {/* Inner shadow for feathering effect */}
                            <div className="absolute inset-0 shadow-[inset_0_0_20px_5px_#171717] pointer-events-none rounded-xl"></div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
