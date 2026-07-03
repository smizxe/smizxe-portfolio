'use client';

/*
  Print-material layer: a static, tiling film-grain texture fixed over the whole
  page. Makes the flat poster color blocks read like printed matter instead of
  digital fills. Static SVG noise on a fixed pointer-events-none element, so it
  costs nothing on scroll (no repaints, no animation).
*/
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[80] opacity-[0.05] mix-blend-multiply dark:opacity-[0.07] dark:mix-blend-screen"
      style={{ backgroundImage: NOISE_SVG, backgroundSize: '180px 180px' }}
    />
  );
}
