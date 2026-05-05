'use client'

import { motion } from 'framer-motion'
import KpUiIcon from './KpUiIcon'
import { CONTACT_HEADLINE_LINES, CONTACT_SUBTEXT, SITE } from './data'

export default function KpContact({ page = false }: { page?: boolean }) {
  return (
    <section
      {...(!page ? { id: 'contact' } : {})}
      className={`bg-gradient-to-b from-kp-bg via-white/40 to-kp-bg py-16 dark:from-dark-bg dark:via-dark-card/25 dark:to-dark-bg md:py-24 ${page ? '' : 'scroll-mt-24'}`}
    >
      <div className="mx-auto max-w-content px-5 text-center md:px-8">
        <p className="kp-section-eyebrow">Contact</p>
        <motion.h2
          className="mt-3 font-serif text-4xl font-light leading-[1.1] tracking-tight text-kp-ink dark:text-dark-text md:text-6xl md:leading-[1.08]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {CONTACT_HEADLINE_LINES[0]}
          <br />
          {CONTACT_HEADLINE_LINES[1]}
        </motion.h2>
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed tracking-[-0.01em] text-kp-muted dark:text-kp-line md:text-lg">
          {CONTACT_SUBTEXT}
        </p>
        <div className="kp-grouped-inset mx-auto mt-10 flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex min-h-12 w-full flex-1 items-center justify-center gap-2 rounded-2xl bg-kp-accent px-5 py-3 text-sm font-semibold leading-tight text-white shadow-kp-primary transition duration-200 ease-out-soft hover:bg-kp-accent/92 active:scale-[0.98] motion-safe:hover:brightness-[1.02] motion-reduce:active:scale-100 sm:min-w-[10.5rem] sm:w-auto"
          >
            <KpUiIcon name="mail" size={14} className="text-white" />
            Email Dr. Pandey
          </a>
          <a
            href={SITE.topmate}
            target="_blank"
            rel="noopener noreferrer"
            className="kp-topmate-cta inline-flex min-h-12 w-full flex-1 items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold leading-tight transition duration-200 ease-out-soft active:scale-[0.98] motion-safe:hover:brightness-[1.04] motion-reduce:active:scale-100 sm:min-w-[10.5rem] sm:w-auto"
          >
            <KpUiIcon name="calendarDays" size={14} className="text-white" />
            Book on Topmate
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full flex-1 items-center justify-center gap-2 rounded-2xl border border-kp-accent px-5 py-3 text-sm font-semibold leading-tight text-kp-accent transition duration-200 ease-out-soft hover:bg-kp-accent hover:text-white active:scale-[0.98] dark:border-blue-400 dark:text-blue-300 dark:hover:bg-kp-accent dark:hover:text-white motion-reduce:active:scale-100 sm:min-w-[10.5rem] sm:w-auto"
          >
            <KpUiIcon name="linkedin" size={14} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
