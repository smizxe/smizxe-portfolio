'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from '@phosphor-icons/react';

import type { Dict } from '../../data/i18n';
import { heroVideos } from '../../data/site';
import { scrollToId } from '../../lib/scroll';
import { MagneticButton } from '../motion/MagneticButton';
import { BackgroundPaths } from '../ui/background-paths';

interface HeroProps {
  t: Dict;
}

export function Hero({ t }: HeroProps) {
  const reduce = useReducedMotion();
  const [videoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setVideoIndex((i) => (i + 1) % heroVideos.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pb-14 pt-28"
    >
      <BackgroundPaths className="opacity-70" />

      <div className="shell relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Compact headline + value prop */}
        <div className="lg:col-span-5">
          <motion.h1
            className="font-display font-extrabold leading-[1.02] tracking-[-0.035em] text-ink"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <span className="block text-[clamp(2.2rem,4.6vw,3.7rem)]">
              Web. App. <span className="text-accent">AI.</span>
            </span>
            <span className="mt-2 block max-w-[16ch] text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-ink/85">
              {t.hero.titleTail}
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-[42ch] text-[15px] leading-7 text-muted md:text-[16px]"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: reduce ? 0 : 0.35 }}
          >
            {t.hero.lead}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: reduce ? 0 : 0.45 }}
          >
            <MagneticButton
              onClick={() => scrollToId('work')}
              className="group inline-flex cursor-pointer items-center gap-2 bg-ink px-6 py-3.5 text-[15px] font-semibold text-paper transition-colors hover:bg-accent hover:text-accent-fg"
            >
              {t.hero.primaryCta}
              <ArrowRight size={18} weight="bold" className="transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton
              onClick={() => scrollToId('contact')}
              strength={0.2}
              className="inline-flex cursor-pointer items-center border border-ink/25 px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:border-ink"
            >
              {t.hero.secondaryCta}
            </MagneticButton>
          </motion.div>
        </div>

        {/* Full-frame showreel — landscape, uncropped */}
        <motion.div
          className="lg:col-span-7"
          initial={reduce ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: reduce ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="relative">
            {/* Offset flat color block — poster-style layering behind the reel */}
            <div
              className="absolute inset-0 -bottom-4 -right-4 left-4 top-4 -z-0 hidden bg-accent sm:block"
              aria-hidden="true"
            />
            <figure className="relative z-10 border border-ink/15 bg-paper p-2">
              <div className="relative aspect-video w-full overflow-hidden bg-ink/10">
              <AnimatePresence mode="popLayout">
                <motion.video
                  key={heroVideos[videoIndex]}
                  src={heroVideos[videoIndex]}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-label={t.hero.reelLabel}
                  className="absolute inset-0 h-full w-full object-contain"
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduce ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.8 }}
                />
              </AnimatePresence>
            </div>
            <figcaption className="flex items-center justify-between px-1 pb-0.5 pt-2.5">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted">
                {t.hero.reelLabel}
              </span>
              <span className="flex gap-1.5" aria-hidden="true">
                {heroVideos.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setVideoIndex(i)}
                    aria-label={`Show reel ${i + 1}`}
                    className={`h-1.5 w-1.5 rounded-full transition-colors ${
                      i === videoIndex ? 'bg-accent' : 'bg-ink/20 hover:bg-ink/40'
                    }`}
                  />
                ))}
              </span>
            </figcaption>
            </figure>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
