'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

type Tag = 'div' | 'li' | 'ul' | 'span' | 'section' | 'article' | 'figure';

interface RevealProps {
  as?: Tag;
  /** Stagger delay in seconds */
  delay?: number;
  /** Initial vertical offset in px */
  y?: number;
  className?: string;
  children: ReactNode;
}

/**
 * Lightweight scroll-reveal. Content fades + rises once as it enters the viewport.
 * Motivation: hierarchy — content arrives in reading order instead of all at once.
 * Collapses to a static render under prefers-reduced-motion.
 */
export function Reveal({ as = 'div', delay = 0, y = 26, className, children }: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] as const }}
      className={className}
    >
      {children}
    </Comp>
  );
}
