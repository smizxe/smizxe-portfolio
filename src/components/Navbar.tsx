import { useState, useEffect, useMemo } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { i18n } from '../data/i18n';

interface NavbarProps {
    lang: 'vi' | 'en';
    setLang: (lang: 'vi' | 'en') => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const t = i18n[lang].nav;

    const menuItems = useMemo(() => [
        { id: 'about', label: t.about },
        { id: 'services', label: t.services },
        { id: 'projects', label: t.projects },
        { id: 'process', label: t.process },
        { id: 'testimonials', label: t.testimonials },
        { id: 'pricing', label: t.pricing },
        { id: 'faq', label: t.faq },
        { id: 'contact', label: t.contact },
    ], [t]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = menuItems.map(item => item.id);
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [menuItems]);

    const scrollTo = (id: string) => {
        setIsOpen(false);
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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <a href="#" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }} className="text-2xl font-bold font-sans text-gradient">
                    Giang.dev
                </a>

                {/* Desktop Menu */}
                <div className="hidden xl:flex items-center gap-6">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                activeSection === item.id ? "text-primary" : "text-gray-300"
                            )}
                        >
                            {item.label}
                        </button>
                    ))}

                    <button
                        onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
                        className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white"
                    >
                        <Globe className="w-4 h-4" />
                        {lang.toUpperCase()}
                    </button>

                    <button
                        onClick={() => scrollTo('contact')}
                        className="px-4 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-medium rounded-full transition-colors"
                    >
                        {t.bookCall}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 xl:hidden">
                    <button
                        onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
                        className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white"
                    >
                        <Globe className="w-4 h-4" />
                        {lang.toUpperCase()}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-gray-300 hover:text-white"
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="xl:hidden bg-dark border-b border-white/10 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {menuItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollTo(item.id)}
                                    className={cn(
                                        "text-left text-base font-medium py-2 transition-colors",
                                        activeSection === item.id ? "text-primary" : "text-gray-300"
                                    )}
                                >
                                    {item.label}
                                </button>
                            ))}
                            <button
                                onClick={() => scrollTo('contact')}
                                className="w-full py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg text-center mt-2"
                            >
                                {t.bookCall}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
