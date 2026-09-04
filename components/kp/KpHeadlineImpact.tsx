'use client'

import Link from 'next/link'
import KpCountUp from './KpCountUp'
import { HOME_IMPACT_STATS } from './data'

export default function KpHeadlineImpact() {
  return (
    <section id="impact" className="scroll-mt-24 border-y border-kp-line/70 bg-kp-strip/80 py-16 dark:border-white/10 dark:bg-dark-card/30 md:py-20">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <p className="kp-section-eyebrow text-center">Measured outcomes</p>
        <h2 className="mt-3 text-center font-serif text-2xl font-light tracking-tight text-kp-ink dark:text-dark-text md:text-3xl">
          Scale you can measure
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {HOME_IMPACT_STATS.map((s) => {
            const fmt = 'format' in s && s.format === 'comma' ? 'comma' : 'default'
            return (
              <div
                key={s.label}
                className="rounded-lg border border-kp-line/60 bg-dark-card/92 p-5 shadow-kp-soft transition-[box-shadow,transform,border-color] duration-300 ease-out-soft hover:border-kp-accent/20 dark:border-white/10 dark:bg-dark-card/70 dark:shadow-none dark:hover:border-kp-accent/25 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-kp-elevated"
              >
                <p className="font-serif text-2xl font-light tabular-nums text-kp-ink dark:text-dark-text md:text-3xl">
                  <KpCountUp end={s.value} suffix={s.suffix} format={fmt} duration={1400} />
                </p>
                <p className="mt-2 text-xs font-medium leading-snug text-kp-muted dark:text-kp-muted">{s.label}</p>
              </div>
            )
          })}
        </div>
        <p className="mt-6 text-center text-footnote text-kp-muted dark:text-kp-muted">
          Full impact ledger on{' '}
          <Link href="/recognition" className="font-medium text-kp-accent underline-offset-2 hover:underline dark:text-kp-accent">
            Recognition
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
