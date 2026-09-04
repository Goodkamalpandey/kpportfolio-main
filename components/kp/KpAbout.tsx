import KpReveal from './KpReveal'
import KpUiIcon from './KpUiIcon'
import { ABOUT_P1, ABOUT_P2, SITE } from './data'

const TIMELINE_ROWS = [
  {
    period: 'Current',
    title: 'Sr. Staff Applied AI Engineer — Enterprise Applied AI',
    org: 'Rivian Automotive Inc.',
  },
  {
    period: 'Previous',
    title: 'Solutions Architect — Enterprise Applied AI & Software Engineering',
    org: 'Rivian Automotive Inc.',
  },
  {
    period: '2020–2021',
    title: 'Solutions Consulting Architect',
    org: 'Samsung SDS America & Krish Service Group',
  },
  {
    period: '2015–2019',
    title: 'Sr. Architect — Digital Workplace, M365, Future of Work',
    org: 'The Goodyear Tire & Rubber Company',
  },
  {
    period: '2008–2015',
    title: 'Progressive Engineering & Architecture Roles',
    org: 'IBM · HCL Technologies · Singtel Optus · LTI',
  },
] as const

export default function KpAbout() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-gradient-to-b from-kp-bg via-dark-card/40 to-kp-bg py-16 pb-12 dark:from-dark-bg dark:via-dark-card/25 dark:to-dark-bg md:py-20 md:pb-14"
    >
      <div className="mx-auto grid max-w-content items-start gap-10 px-5 md:grid-cols-12 md:gap-14 md:px-8 lg:gap-16">
        <KpReveal className="md:col-span-5">
          <p className="kp-section-eyebrow">About</p>
          <blockquote className="mt-4 font-serif text-2xl font-normal italic leading-snug text-kp-accent dark:text-kp-accent md:text-[1.85rem] md:leading-snug lg:text-[2rem]">
            The value of AI is not the demo. It is the trusted system that changes how work gets done.
          </blockquote>
          <ol className="relative mt-10 border-l-2 border-kp-accent/70 pl-8 dark:border-kp-accent/70">
            {TIMELINE_ROWS.map((row) => (
              <li key={`${row.period}-${row.title}`} className="relative pb-9 last:pb-0">
                <span className="absolute -left-[2.55rem] top-0.5 flex h-4 w-4 items-center justify-center rounded-full border border-kp-accent/70 bg-kp-strip shadow-[0_0_0_4px_rgba(212,175,55,0.08)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-kp-accent" />
                </span>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-kp-accent">{row.period}</p>
                <h3 className="mt-2 text-base font-semibold leading-snug text-kp-ink dark:text-dark-text">{row.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-kp-muted dark:text-kp-muted">{row.org}</p>
              </li>
            ))}
          </ol>
        </KpReveal>
        <KpReveal className="md:col-span-7">
          <div className="space-y-6 rounded-lg border border-kp-line/70 bg-dark-card/90 p-8 text-base leading-[1.8] text-kp-muted shadow-kp-soft md:p-10 dark:border-white/10 dark:bg-dark-card dark:shadow-none dark:text-kp-muted">
            <p className="text-kp-ink dark:text-dark-text">{ABOUT_P1}</p>
            <p>{ABOUT_P2}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={SITE.orcid}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-kp-line/90 bg-kp-bg/80 px-4 py-2 text-xs font-medium text-kp-ink shadow-sm transition hover:border-kp-accent dark:border-white/10 dark:bg-dark-card/[0.06] dark:text-dark-text"
            >
              <KpUiIcon name="externalLink" size={14} className="text-kp-accent dark:text-kp-accent" />
              ORCID
            </a>
          </div>
        </KpReveal>
      </div>
    </section>
  )
}
