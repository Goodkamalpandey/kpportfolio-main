'use client'

import KpReveal from './KpReveal'
import KpUiIcon from './KpUiIcon'
import { EXPERTISE_CELLS } from './data'

export default function KpExpertise() {
  return (
    <section
      id="expertise"
      className="scroll-mt-24 bg-kp-navy pb-10 pt-12 text-white md:pb-12 md:pt-14 dark:bg-dark-bg"
    >
      <div className="mx-auto max-w-content px-5 md:px-8">
        <KpReveal>
          <p className="kp-section-eyebrow inline-flex items-center gap-2 text-kp-emerald dark:text-emerald-400">
            <KpUiIcon name="cpu" size={15} className="text-kp-emerald dark:text-emerald-400" />
            Core competencies
          </p>
          <h2 className="mt-4 max-w-xl font-serif text-4xl font-light leading-tight tracking-tight md:text-5xl">
            Where 17 years of hard problems live.
          </h2>
        </KpReveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:mt-10 lg:grid-cols-3">
          {EXPERTISE_CELLS.map((cell) => (
            <KpReveal
              key={cell.n}
              className="rounded-2xl border border-white/[0.12] bg-white/[0.045] p-6 shadow-sm transition duration-200 ease-out-soft motion-safe:hover:-translate-y-0.5 hover:border-kp-accent/50 md:p-7"
            >
              <div className="flex items-start gap-3">
                <KpUiIcon name={cell.icon} className="mt-0.5 text-kp-accent dark:text-blue-400" size={22} />
                <div className="min-w-0 flex-1">
                  <span className="font-mono text-sm text-kp-accent dark:text-blue-400">{cell.n}</span>
                  <h3 className="mt-2 text-xl font-medium">{cell.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/[0.62]">{cell.body}</p>
                </div>
              </div>
            </KpReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
