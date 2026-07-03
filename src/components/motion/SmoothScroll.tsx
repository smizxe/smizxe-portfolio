'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { setLenis } from '../../lib/lenis';

gsap.registerPlugin(ScrollTrigger);

/**
 * Inertial smooth scrolling for the whole page.
 * Motivation: feel — scroll momentum makes the pinned GSAP sections and reveals
 * read as one continuous cinematic motion instead of stepped browser scroll.
 * Driven by the GSAP ticker so ScrollTrigger pins stay perfectly in sync.
 * Skipped entirely under prefers-reduced-motion.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({ lerp: 0.115 });
    setLenis(lenis);

    lenis.on('scroll', ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Re-measure pinned sections once the smooth scroller is in charge.
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return null;
}
