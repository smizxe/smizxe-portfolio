'use client';

import type { Dict, Lang } from '../../data/i18n';
import LeadForm from '../LeadForm';
import ContactLinks from '../ContactLinks';
import { Reveal } from '../motion/Reveal';
import { MaskText } from '../motion/MaskText';

interface ContactProps {
  t: Dict;
  lang: Lang;
}

export function Contact({ t, lang }: ContactProps) {
  return (
    <section id="contact" className="shell py-24 md:py-36">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">{t.nav.contact}</p>
          <MaskText
            text={t.contact.title}
            className="mt-5 max-w-[16ch] font-display text-[clamp(2.1rem,4.6vw,3.8rem)] font-bold leading-[1] tracking-[-0.035em] text-ink"
          />
          <p className="mt-6 max-w-[48ch] text-[16px] leading-7 text-muted">{t.contact.subtitle}</p>

          <div className="mt-10 border-t border-ink/12 pt-8">
            <p className="font-display text-[15px] font-semibold text-ink">{t.contact.noteTitle}</p>
            <p className="mt-2 max-w-[44ch] text-[14px] leading-6 text-muted">{t.contact.noteDescription}</p>
            <ContactLinks lang={lang} className="mt-6" mobileLayout="vertical" />
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-7">
          <LeadForm lang={lang} />
        </Reveal>
      </div>
    </section>
  );
}
