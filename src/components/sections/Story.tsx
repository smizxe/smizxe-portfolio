'use client';

import type { Dict } from '../../data/i18n';
import { Reveal } from '../motion/Reveal';
import { MaskText } from '../motion/MaskText';
import GlowHorizon from '../ui/glow-horizon';

interface StoryProps {
  t: Dict;
}

export function Story({ t }: StoryProps) {
  return (
    <section id="story" className="theme-dark relative overflow-hidden bg-paper py-24 md:py-36">
      {/* Brand-colored glow horizon, bounded to the upper band so it stays atmospheric */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[88vh]">
        <GlowHorizon variant="top" />
      </div>

      <div className="shell relative z-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Founder portrait — vertically centered, framed on an offset color block */}
        <Reveal as="figure" className="lg:col-span-5 lg:self-center">
          <div className="relative">
            <div
              className="absolute -bottom-3 -left-3 right-3 top-3 -z-0 hidden bg-cobalt sm:block"
              aria-hidden="true"
            />
            <div className="relative z-10 border border-ink/15 bg-paper p-2">
              <div className="overflow-hidden bg-ink/5">
                <img
                  src="/images/smizxe-ngoi.jpg"
                  alt="Vuong Hoang Giang, founder and developer of Agency Yangai"
                  loading="lazy"
                  width={720}
                  height={900}
                  className="aspect-[4/5] w-full object-cover object-center transition-transform duration-[1200ms] ease-out hover:scale-[1.04]"
                />
              </div>
            </div>
          </div>
          <figcaption className="relative z-10 mt-5 flex items-baseline justify-between border-t border-ink/12 pt-3">
            <span className="font-display text-[15px] font-semibold text-ink">{t.story.name}</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              {t.story.overlay}
            </span>
          </figcaption>
        </Reveal>

        {/* Narrative + timeline */}
        <div className="lg:col-span-7">
          <Reveal>
            <MaskText
              text={t.story.title}
              className="max-w-[18ch] font-display text-[clamp(2rem,4.4vw,3.6rem)] font-bold leading-[1.02] tracking-[-0.035em] text-ink"
            />
            <p className="mt-6 max-w-[56ch] text-[16px] leading-7 text-muted">{t.story.description}</p>
          </Reveal>

          <ol className="mt-12 border-t border-ink/12">
            {t.story.timeline.map((item, i) => (
              <Reveal as="li" key={`${item.year}-${i}`} delay={i * 0.05} className="border-b border-ink/12">
                <div className="grid grid-cols-12 gap-4 py-6">
                  <span className="col-span-3 font-mono text-[13px] font-medium text-accent md:col-span-2">
                    {item.year}
                  </span>
                  <div className="col-span-9 md:col-span-10">
                    <h3 className="font-display text-[17px] font-semibold leading-snug tracking-[-0.01em] text-ink md:text-[19px]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[60ch] text-[14px] leading-6 text-muted md:text-[15px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
