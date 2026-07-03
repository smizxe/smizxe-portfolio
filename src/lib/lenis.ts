import type Lenis from 'lenis';

/** Module-level handle so scrollToId can drive the smooth scroller when active. */
let instance: Lenis | null = null;

export function setLenis(lenis: Lenis | null) {
  instance = lenis;
}

export function getLenis() {
  return instance;
}
