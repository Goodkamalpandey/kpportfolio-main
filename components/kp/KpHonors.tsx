import Link from 'next/link'
import { Star } from 'lucide-react'
import KpReveal from './KpReveal'
import KpUiIcon from './KpUiIcon'

const HIGHLIGHTS = [
  {
    year: '2025–2026 · 2026–2027',
    border: 'border-t-kp-award',
    title: 'Artificial Intelligence 150 (AI150) by Constellation Research',
    body: 'Constellation Research — constellationr.com — among the world’s most visible AI leaders shaping research and industry.',
  },
  {
    year: '2025',
    border: 'border-t-kp-emerald',
    title: 'Global AI Leader Award',
    body: 'Recognition for sustained delivery of enterprise AI programs at Fortune-scale impact.',
  },

] as const

export default function KpHonors() {
  return (
    <section
      id="honors"
      className="scroll-mt-24 bg-gradient-to-b from-kp-strip to-kp-bg pb-12 pt-12 dark:from-dark-card dark:to-dark-bg md:pb-16 md:pt-14"
    >
      <div className="mx-auto max-w-content px-5 md:px-8">
        <KpReveal>
          <p className="kp-section-eyebrow inline-flex items-center gap-2">
            <Star className="h-4 w-4 text-kp-award" strokeWidth={1.5} aria-hidden />
            Recognition
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light tracking-tight text-kp-ink dark:text-dark-text md:text-5xl">
            Awards, institutions, and stages
          </h2>
        </KpReveal>

        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2 md:gap-8">
          {HIGHLIGHTS.map((c) => (
            <KpReveal key={c.title}>
              <div
                className={`flex h-full flex-col rounded-lg border border-kp-line/70 border-t-[3px] bg-dark-card p-8 shadow-kp-soft dark:border-white/10 dark:bg-dark-card dark:shadow-none ${c.border}`}
              >
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-kp-muted dark:text-kp-muted">
                  {c.year}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-kp-ink dark:text-dark-text">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-kp-muted dark:text-kp-muted">{c.body}</p>
              </div>
            </KpReveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/recognition"
            className="inline-flex items-center gap-2 rounded-full border border-kp-line/70 bg-dark-card/80 px-5 py-2.5 text-sm font-semibold text-kp-ink shadow-sm transition hover:border-kp-accent/40 hover:text-kp-accent dark:border-white/15 dark:bg-dark-card/[0.06] dark:text-dark-text dark:hover:border-kp-accent/40 dark:hover:text-kp-accent"
          >
            Full recognition &amp; standing
            <KpUiIcon name="arrowUpRight" size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
