import { useState, useEffect, useMemo } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { i18n } from '../data/i18n';

interface NavbarProps {
    lang: 'vi' | 'en';
}

export default function Navbar({ lang }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const t = i18n[lang].nav;

    const menuItems = useMemo(() => [
        { id: 'about', label: t.about },
        { id: 'projects', label: t.projects },
        { id: 'testimonials', label: t.testimonials },
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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <a href="#" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }} className="flex items-center gap-3 group">
                    <img src={`${import.meta.env.BASE_URL}logo.png`} alt="yangai" className="h-10 w-auto group-hover:scale-105 transition-transform" />
                    <div className="hidden sm:flex flex-col items-start leading-none">
                        <span className="text-white font-bold text-sm tracking-tight group-hover:text-primary transition-colors">Vương Hoàng Giang</span>
                        <span className="text-[10px] font-mono text-indigo-400 mt-1 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            yangai
                        </span>
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden xl:flex items-center gap-10">
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
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 xl:hidden">

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
                        className="xl:hidden bg-background/95 border-b border-white/5 overflow-hidden"
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
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
