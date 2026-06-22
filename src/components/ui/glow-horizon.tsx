'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

const EASE = [0.16, 1, 0.3, 1] as const;
const DURATION = 2;

export type GlowHorizonVariant = 'top' | 'bottom' | 'left' | 'right';

const VARIANTS: Record<
  GlowHorizonVariant,
  { axis: 'x' | 'y'; scaleAxis: 'scaleX' | 'scaleY'; enterPct: string; restPct: string }
> = {
  top: { axis: 'y', scaleAxis: 'scaleY', enterPct: '-100%', restPct: '-50%' },
  bottom: { axis: 'y', scaleAxis: 'scaleY', enterPct: '100%', restPct: '50%' },
  left: { axis: 'x', scaleAxis: 'scaleX', enterPct: '100%', restPct: '50%' },
  right: { axis: 'x', scaleAxis: 'scaleX', enterPct: '-100%', restPct: '-50%' },
};

export interface GlowHorizonProps {
  className?: string;
  variant?: GlowHorizonVariant;
}

export default function GlowHorizon({ className, variant = 'top' }: GlowHorizonProps) {
  const { axis, scaleAxis, enterPct, restPct } = VARIANTS[variant];
  const reduce = useReducedMotion();
  // Static sentinel for viewport detection (the animated layers are translated
  // off-screen at rest, so they can't detect their own entry).
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const play = reduce || inView;

  const rest = { [axis]: restPct, [scaleAxis]: 1, opacity: 1, filter: 'blur(0px)' };
  const start = { [axis]: enterPct, [scaleAxis]: 1.5, opacity: 0, filter: 'blur(15px)' };

  return (
    <div ref={ref} className={'absolute h-full w-full ' + (className ?? '')}>
      <motion.div
        className="absolute h-full w-full"
        style={{ isolation: 'isolate' }}
        initial={reduce ? false : start}
        animate={play ? rest : start}
        transition={{ duration: reduce ? 0 : DURATION, ease: EASE }}
      >
        <Arc variant={variant} color="#FFFFFF" size="132%" boxShadow="0px -4px 23px 0px #ffffffb5" delay={1.2} play={play} reduce={!!reduce} />
        <Arc variant={variant} color="#FF5A2C" size="120%" initialOffset="10%" blur={31} delay={0.6} play={play} reduce={!!reduce} />
        <Arc variant={variant} color="#2E40D8" size="124%" initialOffset="10%" blur={21} delay={0} play={play} reduce={!!reduce} />
        <Arc variant={variant} color="#000000" size="120%" initialOffset="10%" blur={51} delay={0} play={play} reduce={!!reduce} />
      </motion.div>
    </div>
  );
}

function Arc({
  variant,
  color,
  size,
  initialOffset,
  blur,
  boxShadow,
  delay,
  play,
  reduce,
}: {
  variant: GlowHorizonVariant;
  color: string;
  size: string;
  initialOffset?: string;
  blur?: number;
  boxShadow?: string;
  delay: number;
  play: boolean;
  reduce: boolean;
}) {
  const scale = parseFloat(size) / 100;
  const { axis, enterPct } = VARIANTS[variant];
  const sign = enterPct.startsWith('-') ? -1 : 1;
  const startPct = initialOffset ? `${sign * Math.abs(parseFloat(initialOffset) - 50)}%` : undefined;
  const animated = startPct && !reduce;

  return (
    <motion.div
      aria-hidden
      className="absolute inset-0 rounded-[100%]"
      style={{
        scale,
        background: color,
        ...(blur !== undefined && { filter: `blur(${blur}px)` }),
        ...(boxShadow && { boxShadow }),
      }}
      initial={animated ? { [axis]: startPct } : false}
      animate={animated ? { [axis]: play ? 0 : startPct } : undefined}
      transition={{ duration: reduce ? 0 : DURATION, ease: EASE, delay }}
    />
  );
}
