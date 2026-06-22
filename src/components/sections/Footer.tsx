'use client';

import type { Dict } from '../../data/i18n';
import { scrollToId } from '../../lib/scroll';

interface FooterProps {
  t: Dict;
}

export function Footer({ t }: FooterProps) {
  return (
    <footer className="border-t border-ink/12">
      <div className="shell flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <button onClick={() => scrollToId('top')} className="text-left" aria-label="Back to top">
          <img src="/logo-black.png" alt="Yangai" className="h-12 w-auto dark:hidden" />
          <img src="/logo.png" alt="Yangai" className="hidden h-12 w-auto dark:block" />
        </button>

        <p className="text-[13px] text-muted">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
