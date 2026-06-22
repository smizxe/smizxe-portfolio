'use client';

/*
  Animated line-field background.
  Performance-first: the 36 strokes per layer are STATIC (rendered once), and the
  only animation is a single cheap GPU transform drifting the whole layer. This
  avoids per-path JS animation (which made the hero lag) while keeping the field
  alive. `currentColor` via `text-ink` themes it in light/dark. The drift stops
  under prefers-reduced-motion (handled globally in index.css).
*/
function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 44 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${
      312 - i * 5 * position
    } ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${
      470 - i * 6
    } ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.4 + i * 0.018,
    opacity: 0.05 + i * 0.011,
  }));

  return (
    <div
      className="pointer-events-none absolute inset-0 will-change-transform"
      style={{
        animation:
          position > 0
            ? 'bg-pan-a 22s ease-in-out infinite'
            : 'bg-pan-b 28s ease-in-out infinite',
      }}
    >
      <svg className="h-full w-full text-ink" viewBox="0 0 696 316" fill="none" aria-hidden="true">
        {paths.map((path) => (
          <path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            strokeLinecap="round"
          />
        ))}
      </svg>
    </div>
  );
}

/** Subtle animated line-field. Drop it into a `relative` container. */
export function BackgroundPaths({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  );
}
