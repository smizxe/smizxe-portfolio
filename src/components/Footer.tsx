import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { i18n } from '../data/i18n';
import { cn } from '../lib/utils'; // Assuming cn exists

interface FooterProps {
    lang: 'vi' | 'en';
}

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={cn(
                "fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-lg transition-all duration-300 z-40 hover:scale-110 hover:bg-primary/90",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
            )}
        >
            <ArrowUp className="w-6 h-6" />
        </button>
    );
}

export default function Footer({ lang }: FooterProps) {
    const t = i18n[lang].footer;


    return (
        <footer className="py-8 bg-black/50 border-t border-white/5 text-center">
            <div className="container mx-auto px-4">
                <p className="text-gray-400 text-sm mb-2">
                    © 2025 yangai, All Right Reserved.
                </p>
                <p className="text-gray-600 text-xs">
                    {t.disclaimer}
                </p>
            </div>
        </footer>
    );
}
