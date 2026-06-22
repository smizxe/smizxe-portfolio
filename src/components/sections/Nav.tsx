'use client';

import { useEffect, useState } from 'react';
import { List, X, Sun, Moon } from '@phosphor-icons/react';

import type { Dict, Lang } from '../../data/i18n';
import { scrollToId } from '../../lib/scroll';

type Theme = 'light' | 'dark';

interface NavProps {
  t: Dict;
  lang: Lang;
  setLang: (lang: Lang) => void;
  theme: Theme;
  toggleTheme: () => void;
}

const SECTIONS = ['services', 'work', 'story', 'testimonials', 'contact'] as const;

export function Nav({ t, lang, setLang, theme, toggleTheme }: NavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-sm">
      <div className="shell flex h-[68px] items-center justify-between">
        <button
          onClick={() => go('top')}
          className="flex items-center gap-2.5 text-left"
          aria-label="Agency Yangai, back to top"
        >
          <img src="/logo-black.png" alt="Yangai" className="h-9 w-auto dark:hidden" />
          <img src="/logo.png" alt="Yangai" className="hidden h-9 w-auto dark:block" />
          <span className="hidden h-3.5 w-px bg-ink/25 sm:block" />
          <span className="hidden font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted sm:block">
            AI Agency
          </span>
        </button>

        <nav className="hidden items-center gap-9 lg:flex">
          {SECTIONS.map((id) => (
            <button
              key={id}
              onClick={() => go(id)}
              className="text-[14px] text-muted transition-colors hover:text-ink"
            >
              {t.nav[id]}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <div className="hidden items-center font-mono text-[12px] tracking-wide sm:flex">
            <button
              onClick={() => setLang('en')}
              className={lang === 'en' ? 'text-ink' : 'text-muted hover:text-ink'}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
            <span className="mx-1.5 text-ink/30">/</span>
            <button
              onClick={() => setLang('vi')}
              className={lang === 'vi' ? 'text-ink' : 'text-muted hover:text-ink'}
              aria-pressed={lang === 'vi'}
            >
              VI
            </button>
          </div>

          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center border border-ink/15 text-ink transition-colors hover:border-ink/40"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={16} weight="bold" /> : <Moon size={16} weight="bold" />}
          </button>

          <button
            onClick={() => go('contact')}
            className="hidden bg-ink px-5 py-2.5 text-[13px] font-semibold text-paper transition-colors hover:bg-accent hover:text-accent-fg md:inline-flex"
          >
            {t.hero.secondaryCta}
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center border border-ink/15 text-ink lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-ink/10 bg-paper lg:hidden">
          <nav className="shell flex flex-col py-4">
            {SECTIONS.map((id) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="border-b border-ink/10 py-3.5 text-left font-display text-xl font-semibold text-ink"
              >
                {t.nav[id]}
              </button>
            ))}
            <div className="mt-4 flex items-center gap-4 font-mono text-sm">
              <button onClick={() => setLang('en')} className={lang === 'en' ? 'text-ink' : 'text-muted'}>
                EN
              </button>
              <button onClick={() => setLang('vi')} className={lang === 'vi' ? 'text-ink' : 'text-muted'}>
                VI
              </button>
            </div>
            <button
              onClick={() => go('contact')}
              className="mt-4 bg-ink px-5 py-3 text-center text-sm font-semibold text-paper"
            >
              {t.hero.secondaryCta}
            </button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
