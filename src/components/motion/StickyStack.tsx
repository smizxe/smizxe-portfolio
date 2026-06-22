'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

interface StickyStackProps {
  cards: ReactNode[];
  className?: string;
}

/**
 * Cards pin at the top of the viewport and physically stack as the next one
 * scrolls up over them.
 * Motivation: hierarchy + sequence — a process is steps in order, so the steps
 * literally arrive in order and the earlier one recedes.
 * Under reduced motion the cards render as a plain vertical list.
 */
export function StickyStack({ cards, className = '' }: StickyStackProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !ref.current) return;

    const ctx = gsap.context(() => {
      const cardEls = gsap.utils.toArray<HTMLElement>('.stack-card');
      cardEls.forEach((card, i) => {
        if (i === cardEls.length - 1) return;
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          endTrigger: cardEls[cardEls.length - 1],
          end: 'top top',
          pin: true,
          pinSpacing: false,
        });
        gsap.to(card, {
          scale: 0.94,
          opacity: 0.4,
          ease: 'none',
          scrollTrigger: {
            trigger: cardEls[i + 1],
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <div ref={ref} className={className}>
      {cards.map((card, i) => (
        <div
          key={i}
          className="stack-card flex min-h-[78vh] items-center justify-center will-change-transform"
        >
          {card}
        </div>
      ))}
    </div>
  );
}
