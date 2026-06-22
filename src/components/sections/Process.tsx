'use client';

import type { Dict } from '../../data/i18n';
import { Reveal } from '../motion/Reveal';
import { StickyStack } from '../motion/StickyStack';

interface ProcessProps {
  t: Dict;
}

export function Process({ t }: ProcessProps) {
  // Poster-style flat color blocks, one per step, locked palette.
  const blocks = [
    { bg: 'bg-accent', heading: 'text-accent-fg', body: 'text-accent-fg/85', num: 'text-accent-fg/35' },
    { bg: 'bg-cobalt', heading: 'text-white', body: 'text-white/85', num: 'text-white/30' },
    { bg: 'bg-ink', heading: 'text-paper', body: 'text-paper/80', num: 'text-paper/25' },
  ];

  const cards = t.process.steps.map((step, i) => {
    const c = blocks[i % blocks.length];
    return (
      <div key={step.title} className="shell w-full">
        <div className={`${c.bg} p-8 md:p-14 lg:p-20`}>
          <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-12">
            <span
              className={`col-span-12 font-display text-[clamp(4.5rem,13vw,12rem)] font-extrabold leading-[0.78] tracking-[-0.05em] ${c.num} lg:col-span-4`}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="col-span-12 lg:col-span-8">
              <h3
                className={`max-w-[20ch] font-display text-[clamp(1.7rem,3.4vw,2.8rem)] font-bold leading-[1.05] tracking-[-0.03em] ${c.heading}`}
              >
                {step.title}
              </h3>
              <p className={`mt-6 max-w-[54ch] text-[16px] leading-7 ${c.body} md:text-[17px]`}>
                {step.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section id="process" className="py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <h2 className="max-w-[20ch] font-display text-[clamp(2rem,4.5vw,3.6rem)] font-bold leading-[1] tracking-[-0.035em] text-ink">
            {t.process.title}
          </h2>
          <p className="mt-6 max-w-[58ch] text-[16px] leading-7 text-muted">{t.process.description}</p>
        </Reveal>
      </div>

      <StickyStack cards={cards} className="mt-10" />
    </section>
  );
}
