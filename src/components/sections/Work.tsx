'use client';

import { ArrowUpRight, ArrowRight } from '@phosphor-icons/react';

import type { Dict } from '../../data/i18n';
import { projects } from '../../data/site';
import { HorizontalPan } from '../motion/HorizontalPan';

interface WorkProps {
  t: Dict;
}

export function Work({ t }: WorkProps) {
  return (
    <HorizontalPan id="work" className="border-y border-ink/12 bg-paper-raised">
      {/* Intro panel */}
      <div className="flex h-[70vh] w-[78vw] shrink-0 snap-center flex-col justify-center sm:w-[52vw] md:w-[38vw] lg:w-[26vw] lg:max-w-[460px]">
        <p className="eyebrow">{t.projects.label}</p>
        <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.6rem)] font-bold leading-[1] tracking-[-0.035em] text-ink">
          {t.projects.title}
        </h2>
        <p className="mt-5 max-w-[40ch] text-[15px] leading-7 text-muted">{t.projects.description}</p>
        <ArrowRight size={28} weight="bold" className="mt-8 text-accent" aria-hidden="true" />
      </div>

      {/* Project panels */}
      {projects.map((project, i) => {
        const meta = t.projects.list[i];
        const external = project.href.startsWith('http');
        return (
          <a
            key={project.href}
            href={project.href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className="group flex h-[70vh] w-[86vw] shrink-0 snap-center flex-col bg-paper p-2 shadow-[0_40px_70px_-40px_rgba(0,0,0,0.45)] ring-1 ring-ink/10 transition-shadow duration-500 hover:shadow-[0_50px_90px_-40px_rgba(0,0,0,0.55)] sm:w-[64vw] md:w-[56vw] lg:w-[48vw] lg:max-w-[860px]"
          >
            <div className="relative flex-1 overflow-hidden bg-ink/5">
              <img
                src={project.image}
                alt={project.alt}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex items-end justify-between gap-5 px-3 pb-1.5 pt-4 md:px-4">
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center bg-accent font-mono text-[11px] font-bold text-accent-fg">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {meta.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="border border-ink/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="mt-3 font-display text-[clamp(1.5rem,2.6vw,2.2rem)] font-semibold tracking-[-0.03em] text-ink transition-colors group-hover:text-accent">
                  {meta.title}
                </h3>
                <p className="mt-2 line-clamp-2 max-w-[52ch] text-[14px] leading-6 text-muted">{meta.desc}</p>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-ink/20 text-ink transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-fg">
                <ArrowUpRight size={20} weight="bold" />
              </span>
            </div>
          </a>
        );
      })}
    </HorizontalPan>
  );
}
