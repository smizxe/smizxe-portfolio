import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  Globe,
  Layers3,
  MonitorPlay,
  MoveRight,
  Sparkles,
  Workflow,
} from 'lucide-react';

import storyImage from './assets/smizxe-ngoi.jpg';
import LeadForm from './components/LeadForm';
import ContactLinks from './components/ContactLinks';
import { feedbackImages } from './data/feedbackImages';
import { i18n } from './data/i18n';
import { FluidParticlesBackground } from './components/ui/fluid-particles-background';

const heroVideos = [
  new URL('../video hero/2026-03-21 23-22-14.mp4', import.meta.url).href,
  new URL('../video hero/2026-03-21 23-22-49.mp4', import.meta.url).href,
  new URL('../video hero/2026-03-21 23-24-13.mp4', import.meta.url).href,
  new URL('../video hero/2026-03-21 23-24-43.mp4', import.meta.url).href,
  new URL('../video hero/2026-03-21 23-25-48.mp4', import.meta.url).href,
];

const projectMeta = [
  {
    image: '/images/rentino-preview.png',
    href: 'https://rentino.vn',
  },
  {
    image: '/images/educhill-preview.png',
    href: 'https://educhill.net',
  },
  {
    image: '/images/personal-agent-preview.png',
    href: '#',
  },
  {
    image: '/images/lasante-preview.png',
    href: 'https://lasante.vercel.app',
  },
];

function App() {
  const [lang, setLang] = useState<'vi' | 'en'>('en');
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [glitchBeat, setGlitchBeat] = useState(0);
  const t = i18n[lang];

  useEffect(() => {
    const transitionGapMs = 6400;
    let timeoutIds: number[] = [];

    const cycleVideo = () => {
      [1, 2, 3, 4, 5].forEach((beat, index) => {
        const timeoutId = window.setTimeout(() => {
          setGlitchBeat(beat);
        }, index * 85);
        timeoutIds.push(timeoutId);
      });

      timeoutIds.push(
        window.setTimeout(() => {
          setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
        }, 260),
      );

      timeoutIds.push(
        window.setTimeout(() => {
          setGlitchBeat(0);
        }, 720),
      );
    };

    const intervalId = window.setInterval(cycleVideo, transitionGapMs);

    return () => {
      window.clearInterval(intervalId);
      timeoutIds.forEach((id) => window.clearTimeout(id));
    };
  }, []);


  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }

    const offset = 92;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const position = elementRect - bodyRect - offset;

    window.scrollTo({ top: position, behavior: 'smooth' });
  };

  return (
    <div className="agency-page min-h-screen overflow-x-hidden text-white">
      <div className="agency-background" aria-hidden="true">
        <FluidParticlesBackground className="bg-transparent absolute inset-0 h-full" particleCount={1200} forceDark />
        <div className="background-glow-field">
          <div className="background-line" />
          <div className="background-orb background-orb--center" />
          <div className="background-ring background-ring--outer" />
          <div className="background-ring background-ring--inner" />
          <div className="background-orb background-orb--left" />
          <div className="background-orb background-orb--right" />
        </div>
      </div>

      <header className="fixed inset-x-0 top-0 z-50 px-6 pt-6 md:px-12">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between rounded-full border border-white/10 bg-black/45 px-5 py-3 backdrop-blur-md">
          <button
            onClick={() => scrollToId('top')}
            className="flex items-center gap-3 text-left transition-opacity hover:opacity-85"
          >
            <img
              src="/logo.png"
              alt="Yangai logo"
              className="h-10 w-10 object-contain sm:h-11 sm:w-11"
            />
            <div className="hidden sm:block">
              <p className="font-display text-base tracking-tight text-white">Yangai</p>
              <p className="text-xs text-zinc-400">{t.nav.brandTagline}</p>
            </div>
          </button>

          <nav className="hidden items-center gap-10 text-sm text-zinc-400 lg:flex">
            <button onClick={() => scrollToId('services')} className="nav-link">
              {t.nav.services}
            </button>
            <button onClick={() => scrollToId('work')} className="nav-link">
              {t.nav.work}
            </button>
            <button onClick={() => scrollToId('story')} className="nav-link">
              {t.nav.story}
            </button>
            <button onClick={() => scrollToId('testimonials')} className="nav-link">
              {t.nav.testimonials}
            </button>
            <button onClick={() => scrollToId('contact')} className="nav-link">
              {t.nav.contact}
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-black/30 p-1">
              <button
                onClick={() => setLang('en')}
                className={`lang-switch ${lang === 'en' ? 'lang-switch--active' : ''}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('vi')}
                className={`lang-switch ${lang === 'vi' ? 'lang-switch--active' : ''}`}
              >
                VI
              </button>
            </div>
            <button
              onClick={() => scrollToId('contact')}
              className="nav-cta hidden md:inline-flex"
            >
              {t.hero.secondaryCta}
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="relative z-10">
        <section className="mx-auto flex max-w-[1320px] flex-col justify-center px-6 pb-14 pt-32 md:px-12 md:pb-18">
          <div className="grid min-h-[72vh] grid-cols-1 items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="flex max-w-[540px] flex-col gap-7"
            >
              <h1 className="hero-title hero-title--refined">{t.hero.title}</h1>

              <p className="hero-description hero-description--compact">
                {t.hero.description}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollToId('work')}
                  className="hero-cta hero-cta--primary"
                >
                  {t.hero.primaryCta}
                  <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => scrollToId('contact')}
                  className="hero-cta hero-cta--secondary"
                >
                  {t.hero.secondaryCta}
                </button>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="hero-stage hero-stage--clean"
            >
              <div className="hero-stage__monitor-glow" aria-hidden="true" />
              <div className="hero-monitor-shell hero-monitor-shell--centered">
                <div
                  className={`hero-monitor ${
                    glitchBeat > 0
                      ? `hero-monitor--glitch hero-monitor--beat-${glitchBeat}`
                      : ''
                  }`}
                >
                  <div className="hero-monitor__header">
                    <div className="hero-monitor__traffic">
                      <span className="bg-[#ff5f57]" />
                      <span className="bg-[#ffbd2f]" />
                      <span className="bg-[#28c840]" />
                    </div>
                    <div className="hero-monitor__camera" />
                    <div className="hero-monitor__label">agency.yangai</div>
                  </div>

                  <div className="hero-monitor__screen">
                    <video
                      key={heroVideos[currentVideoIndex]}
                      src={heroVideos[currentVideoIndex]}
                      autoPlay
                      muted
                      playsInline
                      loop
                      preload="auto"
                      className="hero-monitor__video"
                      aria-label="Agency Yangai showcase reel"
                    />
                    <div className="hero-monitor__overlay" />
                    <div className="hero-monitor__scanlines" />
                    <div className="hero-monitor__noise" />
                    <div className="hero-monitor__glow" />
                  </div>

                  <div className="hero-monitor__chin">
                    <span>{t.hero.reelLabel}</span>
                    <span>
                      {String(currentVideoIndex + 1).padStart(2, '0')}/
                      {String(heroVideos.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <div className="hero-monitor__stand" aria-hidden="true">
                  <div className="hero-monitor__neck" />
                  <div className="hero-monitor__base" />
                </div>
              </div>
            </motion.div>
          </div>

        </section>

        <section id="services" className="mx-auto max-w-[1320px] px-6 py-16 md:px-12 md:py-20">
          <div className="section-head">
            <p className="section-label">{t.services.label}</p>
            <h2 className="section-title">{t.services.title}</h2>
            <p className="section-copy">{t.services.description}</p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { icon: <MonitorPlay size={22} />, ...t.services.items[0] },
              { icon: <Layers3 size={22} />, ...t.services.items[1] },
              { icon: <Bot size={22} />, ...t.services.items[2] },
            ].map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="surface-card surface-card--feature"
              >
                <div className="surface-icon">{item.icon}</div>
                <h3 className="surface-card__title">{item.title}</h3>
                <p className="surface-card__copy">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="work" className="mx-auto max-w-[1320px] px-6 py-16 md:px-12 md:py-20">
          <div className="section-head section-head--split">
            <div>
              <p className="section-label">{t.projects.label}</p>
              <h2 className="section-title">{t.projects.title}</h2>
              <p className="section-copy">{t.projects.description}</p>
            </div>
            <div className="section-meta">2024 - 2026</div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {t.projects.list.map((project, index) => (
              <motion.a
                key={project.title}
                href={projectMeta[index].href}
                target={projectMeta[index].href.startsWith('http') ? '_blank' : undefined}
                rel={projectMeta[index].href.startsWith('http') ? 'noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="surface-card project-card group"
              >
                <div className="project-card__media">
                  <img
                    src={projectMeta[index].image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="project-card__veil" />
                </div>
                <div className="project-card__body">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="surface-card__title">{project.title}</h3>
                      <p className="surface-card__copy">{project.desc}</p>
                    </div>
                    <MoveRight className="mt-1 shrink-0 text-white/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <section id="story" className="mx-auto max-w-[1320px] px-6 py-16 md:px-12 md:py-20">
          <div className="story-shell">
            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.04 }}
              className="story-media"
            >
              <div className="story-card__image-wrap">
                <img src={storyImage} alt={t.story.title} className="story-card__image" />
                <div className="story-card__overlay">
                  <p className="story-card__name">{t.story.name}</p>
                  <p className="story-card__role">{t.story.overlay}</p>
                </div>
              </div>
            </motion.figure>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="story-narrative"
            >
              <div className="story-content">
                <p className="section-label">{t.story.label}</p>
                <h2 className="story-title">{t.story.title}</h2>
                <p className="story-copy">{t.story.description}</p>
              </div>

              <div className="story-timeline-wrap">
                <div className="story-timeline">
                  {t.story.timeline.map((item, index) => (
                    <div key={item.year} className="story-timeline__item">
                      <div
                        className={`story-timeline__dot ${
                          index === t.story.timeline.length - 1
                            ? 'story-timeline__dot--active'
                            : ''
                        }`}
                      />
                      <div>
                        <div className="story-timeline__header">
                          <span className="story-timeline__year">{item.year}</span>
                          <h3 className="line-item__title">{item.title}</h3>
                        </div>
                        <p className="line-item__copy">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-[1320px] px-6 py-16 md:px-12 md:py-20">
          <div className="surface-card surface-card--large">
            <div className="section-head">
              <p className="section-label">{t.process.label}</p>
              <h2 className="section-title section-title--compact">{t.process.title}</h2>
              <p className="section-copy section-copy--compact">{t.process.description}</p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                { icon: <Sparkles size={18} />, ...t.process.steps[0] },
                { icon: <Workflow size={18} />, ...t.process.steps[1] },
                { icon: <Globe size={18} />, ...t.process.steps[2] },
              ].map((step, index) => (
                <div key={step.title} className="process-column">
                  <div className="surface-icon">{step.icon}</div>
                  <div className="process-line__eyebrow mt-5">
                    {t.process.stepPrefix} 0{index + 1}
                  </div>
                  <h3 className="line-item__title mt-3">{step.title}</h3>
                  <p className="line-item__copy">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="mx-auto max-w-[1320px] px-6 py-16 md:px-12 md:py-20"
        >
          <div className="section-head">
            <p className="section-label">{t.testimonials.label}</p>
            <h2 className="section-title">{t.testimonials.title}</h2>
            <p className="section-copy">{t.testimonials.subtitle}</p>
          </div>

          <div className="mt-8 space-y-5">
            <div className="marquee-shell">
              <div className="animate-marquee flex min-w-max gap-5 py-2 hover:[animation-play-state:paused]">
                {[...t.testimonials.items, ...t.testimonials.items].map((item, index) => (
                  <article key={`${item.author}-${index}`} className="surface-card quote-card">
                    <p className="quote-card__copy">{item.text}</p>
                    <div className="quote-card__footer">
                      <p className="quote-card__author">{item.author}</p>
                      <p className="quote-card__role">{item.role}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="marquee-shell">
              <div
                className="animate-marquee flex min-w-max gap-4 py-2 hover:[animation-play-state:paused]"
                style={{ animationDirection: 'reverse' }}
              >
                {[...feedbackImages, ...feedbackImages].map((src, index) => (
                  <div key={`${src}-${index}`} className="proof-image">
                    <img
                      src={src}
                      alt="Client feedback proof"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-[1320px] px-6 pb-20 pt-16 md:px-12 md:pb-24 md:pt-20"
        >
          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="surface-card surface-card--large"
            >
              <p className="section-label">{t.nav.contact}</p>
              <h2 className="section-title section-title--compact">{t.contact.title}</h2>
              <p className="section-copy section-copy--compact">{t.contact.subtitle}</p>

              <div className="contact-subpanel">
                <p className="contact-subpanel__title">{t.contact.noteTitle}</p>
                <p className="contact-subpanel__copy">{t.contact.noteDescription}</p>
                <ContactLinks lang={lang} className="mt-6" mobileLayout="vertical" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <LeadForm lang={lang} />
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/8 px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-4 text-sm text-white/45 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display uppercase tracking-[0.28em] text-white/85">
              Agency Yangai
            </p>
            <p className="mt-2">{t.footer.copyright}</p>
          </div>
          <p className="max-w-2xl leading-7">{t.footer.disclaimer}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
