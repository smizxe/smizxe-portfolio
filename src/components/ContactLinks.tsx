'use client';

import { useState } from 'react';
import { Phone, EnvelopeSimple, ChatCircleDots, FacebookLogo, X } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'motion/react';

import { i18n } from '../data/i18n';

interface ContactLinksProps {
  lang: 'vi' | 'en';
  className?: string;
  mobileLayout?: 'default' | 'vertical';
}

const linkClass =
  'group inline-flex items-center gap-2.5 text-[14px] text-ink transition-colors hover:text-accent';
const iconClass =
  'flex h-8 w-8 items-center justify-center border border-ink/15 text-ink transition-colors group-hover:border-accent group-hover:text-accent';

export default function ContactLinks({
  lang,
  className = '',
  mobileLayout = 'default',
}: ContactLinksProps) {
  const t = i18n[lang].contact;
  const [isZaloOpen, setIsZaloOpen] = useState(false);

  return (
    <>
      <div
        className={`flex ${
          mobileLayout === 'vertical'
            ? 'flex-col items-start gap-4 sm:flex-row sm:flex-wrap'
            : 'flex-wrap items-center gap-4'
        } ${className}`}
      >
        <a href="tel:0388307551" className={linkClass}>
          <span className={iconClass}>
            <Phone size={15} weight="bold" />
          </span>
          <span>0388 307 551</span>
        </a>

        <a
          href="https://www.facebook.com/smizxe/"
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          <span className={iconClass}>
            <FacebookLogo size={15} weight="bold" />
          </span>
          <span>Facebook</span>
        </a>

        <button onClick={() => setIsZaloOpen(true)} className={linkClass} type="button">
          <span className={iconClass}>
            <ChatCircleDots size={15} weight="bold" />
          </span>
          <span>Zalo</span>
        </button>

        <a href="mailto:vuonghoanggiang0811@gmail.com" className={linkClass}>
          <span className={iconClass}>
            <EnvelopeSimple size={15} weight="bold" />
          </span>
          <span>vuonghoanggiang0811@gmail.com</span>
        </a>
      </div>

      <AnimatePresence>
        {isZaloOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
            onClick={() => setIsZaloOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              className="relative w-full max-w-sm border border-ink/15 bg-paper-raised p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsZaloOpen(false)}
                className="absolute right-4 top-4 text-muted transition-colors hover:text-ink"
                type="button"
                aria-label="Close"
              >
                <X size={18} weight="bold" />
              </button>

              <p className="eyebrow">Zalo</p>
              <h3 className="mt-4 font-display text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.03em] text-ink">
                {t.zalo.title}
              </h3>
              <p className="mt-2 text-[14px] leading-7 text-muted">{t.zalo.instruction}</p>

              <div className="mt-6 overflow-hidden border border-ink/12">
                <img
                  src="/images/anh-zalo.jpg"
                  alt="Zalo QR code to contact Agency Yangai at 0388 307 551"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mt-5 text-center font-mono text-[15px] font-semibold tracking-[0.16em] text-ink">
                0388 307 551
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
