'use client';

import type { Dict } from '../../data/i18n';
import { scrollToId } from '../../lib/scroll';
import { MaskText } from '../motion/MaskText';

interface FooterProps {
  t: Dict;
}

export function Footer({ t }: FooterProps) {
  return (
    <footer className="overflow-hidden border-t border-ink/12">
      {/* Statement wordmark — the page signs off like a poster */}
      <div className="shell pb-8 pt-14 md:pb-0 md:pt-20">
        <button
          onClick={() => scrollToId('top')}
          aria-label="Yangai, back to top"
          className="group block w-full text-left"
        >
          <MaskText
            as="span"
            text="YANGAI"
            className="block select-none font-display text-[clamp(4.5rem,17vw,15rem)] font-extrabold leading-[0.82] tracking-[-0.04em] text-ink transition-colors duration-500 group-hover:text-accent"
          />
        </button>
      </div>

      <div className="shell flex flex-col gap-4 border-t border-ink/12 py-8 md:mt-14 md:flex-row md:items-center md:justify-between">
        <p className="text-[13px] text-muted">{t.footer.copyright}</p>
        <span>
          <img src="/logo-black.png" alt="Yangai" className="h-7 w-auto dark:hidden" />
          <img src="/logo.png" alt="Yangai" className="hidden h-7 w-auto dark:block" />
        </span>
      </div>
    </footer>
  );
}
