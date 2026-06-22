'use client';

import { useEffect, useState } from 'react';

import { i18n, type Dict, type Lang } from './data/i18n';
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

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try {
        localStorage.setItem('yangai-theme', next);
      } catch {
        /* ignore storage failures (private mode) */
      }
      return next;
    });
  };

  const t = i18n[lang] as Dict;

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
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
