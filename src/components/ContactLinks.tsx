import { useState } from 'react';
import { Facebook, Mail, MessageCircle, Phone, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import zaloQr from '../assets/anh-zalo.jpg';
import { i18n } from '../data/i18n';

interface ContactLinksProps {
  lang: 'vi' | 'en';
  className?: string;
  mobileLayout?: 'default' | 'vertical';
}

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
        <a href="tel:0388307551" className="contact-link">
          <span className="contact-link__icon">
            <Phone size={16} />
          </span>
          <span>0388 307 551</span>
        </a>

        <a href="mailto:vuonghoanggiang0811@gmail.com" className="contact-link">
          <span className="contact-link__icon">
            <Mail size={16} />
          </span>
          <span>vuonghoanggiang0811@gmail.com</span>
        </a>

        <button
          onClick={() => setIsZaloOpen(true)}
          className="contact-link border-0 bg-transparent p-0"
          type="button"
        >
          <span className="contact-link__icon">
            <MessageCircle size={16} />
          </span>
          <span>Zalo</span>
        </button>

        <a
          href="https://www.facebook.com/smizxe/"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <span className="contact-link__icon">
            <Facebook size={16} />
          </span>
          <span>Facebook</span>
        </a>
      </div>

      <AnimatePresence>
        {isZaloOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl"
            onClick={() => setIsZaloOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              className="relative w-full max-w-sm rounded-[2rem] border border-white/10 bg-[#0b0b0b]/90 p-6 shadow-[0_40px_80px_rgba(0,0,0,0.45)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsZaloOpen(false)}
                className="absolute right-5 top-5 text-white/55 transition-colors hover:text-white"
                type="button"
              >
                <X size={18} />
              </button>

              <p className="section-label">Zalo</p>
              <h3 className="mt-5 font-display text-3xl tracking-[-0.05em] text-white">{t.zalo.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/58">{t.zalo.instruction}</p>

              <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/8">
                <img src={zaloQr} alt="Zalo QR" className="h-full w-full object-cover" />
              </div>

              <p className="mt-5 text-center text-base font-semibold tracking-[0.18em] text-white/88">
                0388 307 551
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
