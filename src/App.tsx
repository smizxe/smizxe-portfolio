'use client';

import { useEffect, useState } from 'react';

import { i18n, type Dict, type Lang } from './data/i18n';
import { SmoothScroll } from './components/motion/SmoothScroll';
import { GrainOverlay } from './components/ui/grain-overlay';
import { Nav } from './components/sections/Nav';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Work } from './components/sections/Work';
import { Story } from './components/sections/Story';
import { Process } from './components/sections/Process';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

type Theme = 'light' | 'dark';

function App() {
  const [lang, setLang] = useState<Lang>('vi');
  const [theme, setTheme] = useState<Theme>('light');

  // Language: query param wins, then browser preference. (Behavior preserved.)
  // Synced after mount so the SSR markup and first client render match (no hydration mismatch).
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get('lang');
    const next: Lang =
      queryLang === 'en' || queryLang === 'vi'
        ? queryLang
        : (navigator.language?.toLowerCase() ?? '').startsWith('vi')
          ? 'vi'
          : 'en';
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing state to the URL/locale after mount
    setLang(next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Theme is applied pre-paint by the inline script in layout.tsx; mirror it into React state.
  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    if (current !== 'dark' && current !== 'light') return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- mirroring the pre-paint theme attribute
    setTheme(current);
  }, []);

  // Theme toggle with a circular wipe (View Transitions API) expanding from the
  // toggle button. Falls back to the plain CSS color transition where the API is
  // unavailable or reduced motion is requested.
  const toggleTheme = (origin?: { x: number; y: number }) => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    const apply = () => document.documentElement.setAttribute('data-theme', next);

    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => { ready: Promise<void> };
    };
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (doc.startViewTransition && origin && !reduce) {
      const transition = doc.startViewTransition(apply);
      transition.ready.then(() => {
        const r = Math.hypot(
          Math.max(origin.x, window.innerWidth - origin.x),
          Math.max(origin.y, window.innerHeight - origin.y),
        );
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${origin.x}px ${origin.y}px)`,
              `circle(${r}px at ${origin.x}px ${origin.y}px)`,
            ],
          },
          { duration: 550, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', pseudoElement: '::view-transition-new(root)' },
        );
      });
    } else {
      apply();
    }

    setTheme(next);
    try {
      localStorage.setItem('yangai-theme', next);
    } catch {
      /* ignore storage failures (private mode) */
    }
  };

  const t = i18n[lang] as Dict;

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <SmoothScroll />
      <GrainOverlay />
      <Nav t={t} lang={lang} setLang={setLang} theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero t={t} />
        <Services t={t} />
        <Work t={t} />
        <Story t={t} />
        <Process t={t} />
        <Testimonials t={t} />
        <Contact t={t} lang={lang} />
      </main>
      <Footer t={t} />
    </div>
  );
}

export default App;
