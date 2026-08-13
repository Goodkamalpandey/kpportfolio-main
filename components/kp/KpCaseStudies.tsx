import Link from 'next/link'
import KpReveal from './KpReveal'
import KpUiIcon from './KpUiIcon'
import { APPLIED_AI_PLATFORMS, WORK_VISION } from './data'

/**
 * Work — intelligence-layer platforms (AISDLC, CLUE AI, Rivian Agentic Platform).
 * KPI figures are design targets / modeled opportunities until production-validated.
 */
export default function KpCaseStudies() {
  return (
    <section id="work" className="scroll-mt-24 bg-kp-bg py-16 dark:bg-dark-bg md:py-24">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <KpReveal>
          <p className="kp-section-eyebrow inline-flex items-center gap-2">
            <KpUiIcon name="cpu" size={15} className="text-kp-accent dark:text-blue-400" />
            {WORK_VISION.eyebrow}
          </p>
          <h2 className="mt-4 max-w-4xl font-serif text-3xl font-light leading-[1.12] tracking-tight text-kp-ink dark:text-dark-text md:text-5xl md:leading-[1.08]">
            {WORK_VISION.title}
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-lg font-medium leading-snug tracking-[-0.015em] text-kp-ink dark:text-dark-text md:text-xl">
            {WORK_VISION.lead}
          </p>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-kp-muted dark:text-kp-line">
            {WORK_VISION.body}
          </p>
        </KpReveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {WORK_VISION.principles.map((p) => (
            <KpReveal key={p.label}>
              <div className="h-full rounded-2xl border border-kp-line/60 bg-white/70 px-4 py-4 dark:border-white/10 dark:bg-dark-card/50">
                <p className="font-mono text-caption2 font-semibold uppercase tracking-[0.12em] text-kp-accent dark:text-blue-300">
                  {p.label}
                </p>
                <p className="mt-2 text-footnote leading-snug text-kp-muted dark:text-kp-line">{p.detail}</p>
              </div>
            </KpReveal>
          ))}
        </div>

        <div className="mt-12 space-y-6 md:mt-14 md:space-y-8">
          {APPLIED_AI_PLATFORMS.map((p) => (
            <KpReveal key={p.name}>
              <article className="group relative overflow-hidden rounded-[1.35rem] border border-kp-line/70 bg-gradient-to-br from-white via-white to-kp-strip/40 shadow-kp-soft transition duration-300 ease-out-soft hover:border-kp-accent/35 hover:shadow-kp-elevated dark:border-white/10 dark:from-dark-card dark:via-dark-card dark:to-dark-bg dark:shadow-none dark:hover:border-blue-400/35">
                <div
                  className="pointer-events-none absolute -right-8 -top-10 font-sans text-[7.5rem] font-medium leading-none tracking-tighter text-kp-ink/[0.035] dark:text-white/[0.04] md:text-[9rem]"
                  aria-hidden
                >
                  {p.n}
                </div>

                <div className="relative grid gap-0 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.85fr)]">
                  <div className="border-b border-kp-line/60 p-7 md:p-9 lg:border-b-0 lg:border-r dark:border-white/10">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-kp-line/80 bg-white/80 px-2.5 py-1 font-mono text-caption2 font-semibold uppercase tracking-wider text-kp-muted dark:border-white/10 dark:bg-white/[0.04] dark:text-kp-line">
                        <KpUiIcon name={p.icon} size={12} className="text-kp-accent dark:text-blue-300" />
                        {p.org} · {p.domain}
                      </span>
                      <span className="rounded-full bg-kp-accent/10 px-2.5 py-1 text-caption2 font-semibold text-kp-accent dark:bg-blue-500/15 dark:text-blue-300">
                        {p.role}
                      </span>
                    </div>

                    <h3 className="mt-5 font-serif text-3xl font-normal tracking-tight text-kp-ink dark:text-dark-text md:text-4xl">
                      {p.name}
                    </h3>
                    <p className="mt-2 max-w-xl text-base font-medium leading-snug text-kp-ink/80 dark:text-dark-text/85">
                      {p.tagline}
                    </p>

                    <div className="mt-7 grid gap-5 sm:grid-cols-3">
                      {(
                        [
                          ['Problem', p.problem],
                          ['Solution', p.solution],
                          ['My contribution', p.contribution],
                        ] as const
                      ).map(([label, text]) => (
                        <div key={label} className="min-w-0">
                          <p className="font-mono text-caption2 font-semibold uppercase tracking-[0.11em] text-kp-muted dark:text-kp-line">
                            {label}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-kp-muted dark:text-kp-line">{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between bg-kp-navy p-7 text-white md:p-9 dark:bg-[#0a1224]">
                    <div>
                      <p className="font-mono text-caption2 font-semibold uppercase tracking-[0.14em] text-blue-300/90">
                        Design target
                      </p>
                      <p className="mt-3 font-sans text-4xl font-medium leading-none tracking-tight tabular-nums md:text-5xl">
                        {p.metric}
                      </p>
                      <p className="mt-3 text-sm leading-snug text-white/65">{p.metricLabel}</p>

                      <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                        {p.targets.map((t) => (
                          <li key={t} className="flex gap-2 text-footnote leading-snug text-white/70">
                            <KpUiIcon name="badgeCheck" size={14} className="mt-0.5 shrink-0 text-emerald-400/90" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={p.href}
                      className="mt-8 inline-flex items-center gap-2 self-start text-sm font-semibold text-white transition-[gap] duration-200 hover:gap-3"
                    >
                      Discuss this platform
                      <KpUiIcon name="arrowUpRight" size={16} className="text-blue-300" />
                    </Link>
                  </div>
                </div>
              </article>
            </KpReveal>
          ))}
        </div>

        <KpReveal>
          <p className="mt-10 max-w-3xl text-footnote leading-relaxed text-kp-muted dark:text-kp-line md:mt-12">
            <span className="font-semibold text-kp-ink dark:text-dark-text">Publishing note. </span>
            KPI and ROI figures above are design targets or modeled value opportunities from platform criteria —
            presented as targets until validated with measured production results. Earlier production systems live on{' '}
            <Link href="/experience" className="font-medium text-kp-accent underline-offset-2 hover:underline dark:text-blue-300">
              Experience
            </Link>
            .
          </p>
        </KpReveal>
      </div>
    </section>
  )
}
