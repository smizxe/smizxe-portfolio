'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

interface HorizontalPanProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

/**
 * Vertical scroll drives a horizontal pan across a pinned track.
 * Motivation: storytelling — the viewer is walked through the portfolio one frame
 * at a time instead of skimming a grid.
 * Under reduced motion (or touch where pinning is fragile), falls back to a plain
 * horizontal scroll-snap strip.
 */
export function HorizontalPan({ children, className = '', id }: HorizontalPanProps) {
  const wrap = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !wrap.current || !track.current) return;
    // Pinning + scrub is unreliable on small touch screens; let it scroll natively.
    if (window.matchMedia('(max-width: 1023px)').matches) return;

    const ctx = gsap.context(() => {
      const getDistance = () => track.current!.scrollWidth - window.innerWidth;
      gsap.to(track.current, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: wrap.current,
          start: 'top top',
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, wrap);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section id={id} ref={wrap} className={`relative overflow-hidden ${className}`}>
      <div
        ref={track}
        className="flex h-[100dvh] items-center gap-6 px-6 max-lg:h-auto max-lg:snap-x max-lg:snap-mandatory max-lg:overflow-x-auto max-lg:py-4 md:gap-10 md:px-10 lg:px-14"
      >
        {children}
      </div>
    </section>
  );
}
