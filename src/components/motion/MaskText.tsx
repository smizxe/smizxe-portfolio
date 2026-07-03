'use client';

import { Fragment } from 'react';
import { motion, useReducedMotion } from 'motion/react';

type Tag = 'h1' | 'h2' | 'h3' | 'p' | 'span';

interface MaskTextProps {
  text: string;
  as?: Tag;
  className?: string;
  /** Extra delay before the stagger starts, in seconds */
  delay?: number;
}

const container = {
  hidden: {},
  show: (delay: number) => ({
    transition: { staggerChildren: 0.04, delayChildren: delay },
  }),
};

const word = {
  hidden: { y: '115%' },
  show: { y: '0%', transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

/**
 * Editorial masked type reveal: each word rises out of its own overflow mask
 * when the heading scrolls into view.
 * Motivation: hierarchy — headlines announce themselves in reading order.
 * The mask wrappers reserve top/bottom padding so Vietnamese diacritics and
 * descenders are never clipped. Renders static under prefers-reduced-motion.
 */
export function MaskText({ text, as = 'h2', className, delay = 0 }: MaskTextProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as];

  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{text}</Plain>;
  }

  return (
    <Comp
      className={className}
      aria-label={text}
      variants={container}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      {text.split(' ').map((w, i, arr) => (
        <Fragment key={`${w}-${i}`}>
          <span
            aria-hidden="true"
            className="-mb-[0.14em] -mt-[0.14em] inline-block overflow-hidden pb-[0.14em] pt-[0.14em] align-bottom"
          >
            <motion.span className="inline-block" variants={word}>
              {w}
            </motion.span>
          </span>
          {i < arr.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </Comp>
  );
}
