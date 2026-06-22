'use client';

import type { ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
  target?: string;
  rel?: string;
  /** How strongly the element follows the cursor (0-1) */
  strength?: number;
}

/**
 * Magnetic CTA. The element drifts toward the cursor and springs back on leave.
 * Motivation: feedback — the primary actions feel physical and invite the click.
 * Uses motion values (not state) so it never re-renders the tree on pointer move.
 */
export function MagneticButton({
  children,
  className = '',
  href,
  onClick,
  ariaLabel,
  target,
  rel,
  strength = 0.3,
}: MagneticButtonProps) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const motionProps = {
    style: { x: sx, y: sy },
    onMouseMove: handleMove,
    onMouseLeave: reset,
    whileTap: reduce ? undefined : { scale: 0.97 },
    className,
  };

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} onClick={onClick} aria-label={ariaLabel} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" onClick={onClick} aria-label={ariaLabel} {...motionProps}>
      {children}
    </motion.button>
  );
}
