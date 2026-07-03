import { getLenis } from './lenis';

/** Smooth-scroll to a section id, accounting for the fixed nav height. */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(el, { offset: -80 });
    return;
  }

  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: 'smooth' });
}
