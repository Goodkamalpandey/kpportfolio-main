import Link from 'next/link'
import KpReveal from './KpReveal'
import KpUiIcon from './KpUiIcon'
import { CASE_STUDIES } from './data'

/**
 * Proof-of-work section — Problem → Approach → Outcome, with the metric as the hero of each card.
 * DRAFT: copy is drafted from Dr. Pandey's own CAREER_ROLES bullets. Verify wording/metrics and
 * point each `href` at a real write-up before publishing.
 */
export default function KpCaseStudies() {
  return (
    <section id="work" className="scroll-mt-24 bg-kp-bg py-16 dark:bg-dark-bg md:py-20">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <KpReveal>
          <p className="kp-section-eyebrow inline-flex items-center gap-2">
            <KpUiIcon name="rocket" size={15} className="text-kp-accent dark:text-blue-400" />
            Selected work
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-light leading-tight tracking-tight text-kp-ink dark:text-dark-text md:text-5xl">
            Proof, not just publications.
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-kp-muted dark:text-kp-line">
            A few systems shipped into production at industrial scale — the problem, the approach, and
            the measurable outcome.
          </p>
        </KpReveal>

        {/* Bento: first card featured (spans both columns), the rest in a 2-up grid. */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
          {CASE_STUDIES.map((c) => (
            <KpReveal key={c.title} className={c.featured ? 'md:col-span-2' : ''}>
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-kp-line/70 bg-white/90 p-8 shadow-kp-soft transition duration-300 ease-out-soft hover:-translate-y-0.5 hover:border-kp-accent/40 hover:shadow-kp-elevated dark:border-white/10 dark:bg-dark-card/80 dark:shadow-none dark:hover:border-blue-400/40 ${
                  c.featured ? 'md:flex-row md:items-center md:gap-10' : ''
                }`}
              >
                {/* cursor-agnostic sheen on hover */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      'radial-gradient(600px circle at 100% 0, rgba(29,78,216,0.06), transparent 45%)',
                  }}
                  aria-hidden
                />
                <div className="relative min-w-0 flex-1">
                  <p className="font-mono text-caption2 font-semibold uppercase tracking-wider text-kp-accent dark:text-blue-300">
                    {c.org} · {c.domain}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-normal text-kp-ink dark:text-dark-text md:text-[1.75rem]">
                    {c.title}
                  </h3>
                  <dl className="mt-4 space-y-2 text-sm leading-relaxed text-kp-muted dark:text-kp-line">
                    <div>
                      <dt className="inline font-semibold text-kp-ink dark:text-dark-text">Problem. </dt>
                      <dd className="inline">{c.problem}</dd>
                    </div>
                    <div>
                      <dt className="inline font-semibold text-kp-ink dark:text-dark-text">Approach. </dt>
                      <dd className="inline">{c.approach}</dd>
                    </div>
                  </dl>
                  <Link
                    href={c.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-kp-accent transition-[gap] duration-200 hover:gap-3 dark:text-blue-300"
                  >
                    Discuss this work
                    <KpUiIcon name="arrowUpRight" size={16} />
                  </Link>
                </div>

                <div
                  className={`relative mt-6 shrink-0 border-t border-kp-line/70 pt-6 dark:border-white/10 ${
                    c.featured ? 'md:mt-0 md:w-56 md:border-l md:border-t-0 md:pl-8 md:pt-0' : ''
                  }`}
                >
                  <p className="font-sans text-4xl font-medium leading-none tracking-tight text-kp-ink tabular-nums dark:text-dark-text md:text-5xl">
                    {c.metric}
                  </p>
                  <p className="mt-2 text-xs font-medium leading-snug text-kp-muted dark:text-kp-line">
                    {c.metricLabel}
                  </p>
                </div>
              </article>
            </KpReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
