'use client';

import type { Dict } from '../../data/i18n';
import { feedbackImages } from '../../data/feedbackImages';
import { Reveal } from '../motion/Reveal';
import { MaskText } from '../motion/MaskText';

interface TestimonialsProps {
  t: Dict;
}

const edgeMask = {
  maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
  WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
} as const;

export function Testimonials({ t }: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">{t.testimonials.label}</p>
          <MaskText
            text={t.testimonials.title}
            className="mt-4 max-w-[24ch] font-display text-[clamp(1.5rem,2.8vw,2.3rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink"
          />
          <p className="mt-4 max-w-[58ch] text-[15px] leading-7 text-muted">{t.testimonials.subtitle}</p>
        </Reveal>
      </div>

      <div className="mt-12 space-y-4">
        {/* Row 1: text reviews, looping horizontally */}
        <div className="relative overflow-hidden" style={edgeMask}>
          <div className="flex w-max animate-marquee gap-4 py-1 hover:[animation-play-state:paused]">
            {[...t.testimonials.items, ...t.testimonials.items].map((item, i) => (
              <figure
                key={`${item.author}-${i}`}
                className="w-[300px] shrink-0 border border-ink/12 bg-paper-raised p-5 sm:w-[360px]"
              >
                <blockquote className="line-clamp-4 text-[14px] leading-6 text-ink/85">
                  &ldquo;{item.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <span className="text-[13px] font-semibold text-ink">{item.author}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">{item.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Row 2: feedback bills, enlarged, looping the other way.
            Repeated x4 so the track always overflows the viewport (the -50% loop
            uses two identical halves) and never shows an empty gap with only 10 images. */}
        <div className="relative overflow-hidden" style={edgeMask}>
          <div
            className="flex w-max animate-marquee gap-3 py-1 hover:[animation-play-state:paused] md:gap-4"
            style={{ animationDirection: 'reverse', animationDuration: '60s' }}
          >
            {[...feedbackImages, ...feedbackImages, ...feedbackImages, ...feedbackImages].map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="h-72 shrink-0 overflow-hidden border border-ink/12 bg-paper-raised md:h-96"
              >
                <img
                  src={src}
                  alt="Client feedback screenshot for an Agency Yangai project"
                  loading="lazy"
                  className="h-full w-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
