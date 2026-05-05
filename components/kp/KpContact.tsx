'use client'

import { motion } from 'framer-motion'
import KpUiIcon from './KpUiIcon'
import { CONTACT_HEADLINE_LINES, CONTACT_SUBTEXT, SITE } from './data'

export default function KpContact({ page = false }: { page?: boolean }) {
  return (
    <section
      {...(!page ? { id: 'contact' } : {})}
      className={`bg-gradient-to-b from-kp-bg via-white/30 to-kp-bg py-16 dark:from-dark-bg dark:via-dark-card/20 dark:to-dark-bg md:py-24 ${page ? '' : 'scroll-mt-24'}`}
    >
      <div className="mx-auto max-w-content px-5 text-center md:px-8">
        <motion.h2
          className="font-serif text-4xl font-light leading-[1.1] tracking-tight text-kp-ink dark:text-dark-text md:text-6xl md:leading-[1.08]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {CONTACT_HEADLINE_LINES[0]}
          <br />
          {CONTACT_HEADLINE_LINES[1]}
        </motion.h2>
        <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-kp-muted dark:text-kp-line">
          {CONTACT_SUBTEXT}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3 md:gap-3">
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex min-h-11 min-w-[11rem] items-center justify-center gap-2 rounded-full bg-kp-accent px-5 py-2.5 text-xs font-semibold leading-tight text-white shadow-kp-primary transition duration-200 ease-out-soft motion-safe:hover:-translate-y-0.5 hover:bg-kp-accent/90 active:scale-[0.98] motion-reduce:active:scale-100"
          >
            <KpUiIcon name="mail" size={12} className="text-white" />
            Email Dr. Pandey
          </a>
          <a
            href={SITE.topmate}
            target="_blank"
            rel="noopener noreferrer"
            className="kp-topmate-cta inline-flex min-h-11 min-w-[11rem] items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold leading-tight transition duration-200 ease-out-soft motion-safe:hover:-translate-y-0.5 active:scale-[0.98] motion-reduce:active:scale-100"
          >
            <KpUiIcon name="calendarDays" size={12} className="text-white" />
            Book on Topmate
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 min-w-[11rem] items-center justify-center gap-2 rounded-full border border-kp-accent px-5 py-2.5 text-xs font-semibold leading-tight text-kp-accent transition duration-200 ease-out-soft motion-safe:hover:-translate-y-0.5 hover:bg-kp-accent hover:text-white active:scale-[0.98] dark:border-blue-400 dark:text-blue-300 dark:hover:bg-kp-accent dark:hover:text-white motion-reduce:active:scale-100"
          >
            <KpUiIcon name="linkedin" size={12} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
