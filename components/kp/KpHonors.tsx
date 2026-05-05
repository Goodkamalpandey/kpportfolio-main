import { Star } from 'lucide-react'
import KpReveal from './KpReveal'
import KpUiIcon from './KpUiIcon'
import { EMPLOYER_RECOGNITION, GLOBAL_RECOGNITION, SPEAKING_DETAIL } from './data'

const HIGHLIGHTS = [
  {
    year: '2025–2026',
    border: 'border-t-kp-award',
    title: 'AI150 Global AI Influencer',
    body: 'Constellation Research — constellationr.com — among the world’s most visible AI leaders shaping research and industry.',
  },
  {
    year: '2025',
    border: 'border-t-kp-emerald',
    title: 'Global AI Leader Award',
    body: 'Recognition for sustained delivery of enterprise AI programs at Fortune-scale impact.',
  },
  {
    year: '2025',
    border: 'border-t-kp-accent dark:border-t-blue-400',
    title: 'Top 50 AI Researcher & Reviewer',
    body: 'Stanford University recognition — research, peer review, and field leadership.',
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

        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-3 md:gap-8">
          {HIGHLIGHTS.map((c) => (
            <KpReveal key={c.title}>
              <div
                className={`flex h-full flex-col rounded-[14px] border border-kp-line/70 border-t-[3px] bg-white p-8 shadow-kp-soft dark:border-white/10 dark:bg-dark-card dark:shadow-none ${c.border}`}
              >
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-kp-muted dark:text-kp-line">
                  {c.year}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-kp-ink dark:text-dark-text">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-kp-muted dark:text-kp-line">{c.body}</p>
              </div>
            </KpReveal>
          ))}
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-12">
            <KpReveal>
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-kp-ink dark:text-dark-text">
                <KpUiIcon name="globe2" size={16} className="shrink-0 text-kp-accent dark:text-blue-300" />
                Global recognition
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-kp-muted dark:text-kp-line">
                {GLOBAL_RECOGNITION.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </KpReveal>
            <KpReveal>
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-kp-ink dark:text-dark-text">
                <KpUiIcon name="briefcase" size={16} className="shrink-0 text-kp-accent dark:text-blue-300" />
                Employer recognition
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-kp-muted dark:text-kp-line">
                {EMPLOYER_RECOGNITION.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </KpReveal>
          </div>
          <KpReveal>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-kp-ink dark:text-dark-text">
              <KpUiIcon name="calendarDays" size={16} className="shrink-0 text-kp-accent dark:text-blue-300" />
              Speaking &amp; forums
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-kp-muted dark:text-kp-line">
              {SPEAKING_DETAIL.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </KpReveal>
        </div>
      </div>
    </section>
  )
}
