'use client';

import type { Dict } from '../../data/i18n';
import { Reveal } from '../motion/Reveal';
import { MaskText } from '../motion/MaskText';

interface ServicesProps {
  t: Dict;
}

export function Services({ t }: ServicesProps) {
  return (
    <section id="services" className="shell py-24 md:py-36">
      <Reveal>
        <p className="eyebrow">{t.services.label}</p>
        <MaskText
          text={t.services.title}
          className="mt-5 max-w-[20ch] font-display text-[clamp(2.1rem,5vw,4rem)] font-bold leading-[1] tracking-[-0.035em] text-ink"
        />
        <p className="mt-6 max-w-[58ch] text-[16px] leading-7 text-muted">{t.services.description}</p>
      </Reveal>

      <ul className="mt-14 border-t border-ink/12">
        {t.services.items.map((item, i) => {
          const chip = [
            'bg-accent text-accent-fg',
            'bg-cobalt text-white',
            'bg-ink text-paper',
          ][i % 3];
          return (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 0.06}
              className="group block border-b border-ink/12"
            >
              <div className="grid grid-cols-12 items-start gap-4 py-8 transition-colors md:gap-8 md:py-12">
                <span className="col-span-2 md:col-span-1">
                  <span
                    className={`inline-flex h-9 w-9 items-center justify-center font-mono text-[13px] font-bold ${chip}`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </span>
                <h3 className="col-span-10 font-display text-[clamp(1.5rem,3.4vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink transition-colors group-hover:text-accent md:col-span-5">
                  {item.title}
                </h3>
                <p className="col-span-12 max-w-[52ch] text-[15px] leading-7 text-muted md:col-span-6 md:text-[16px]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
