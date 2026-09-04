import Link from 'next/link'
import { Star } from 'lucide-react'
import KpReveal from './KpReveal'
import KpUiIcon from './KpUiIcon'

const HONORS = [
  {
    honor: 'Artificial Intelligence 150 (AI150) — 2025–2026',
    issuer: 'Constellation Research Inc.',
    date: '2025',
  },
  {
    honor: 'Artificial Intelligence 150 (AI150) — 2026–2027',
    issuer: 'Constellation Research Inc.',
    date: '2026',
  },
  {
    honor: 'BoxWorks Customer Award — Ecosystem Innovator',
    issuer: 'Box, Inc.',
    date: 'Sep 11, 2025',
  },
  {
    honor: 'Best Performing Project Award',
    issuer: 'L&T Infotech',
    date: 'Sep 19, 2014',
  },
  {
    honor: 'Valuable Contribution Award',
    issuer: 'L&T Infotech',
    date: 'Undated',
  },
  {
    honor: 'Top 100 ADPList Mentor',
    issuer: 'ADPList',
    date: 'Oct–Dec 2024',
  },
  {
    honor: 'R&D Innovation Award',
    issuer: 'HCL Technologies',
    date: '2011',
  },
] as const

const PROFESSIONAL_ROLES = [
  {
    role: 'Co-Founder, CTO & Adviser',
    organization: 'Kentron.ai',
    period: '2024',
    href: 'https://www.kentron.ai/',
  },
  {
    role: 'Senior Member',
    organization: 'IEEE',
    period: '2022–Present',
  },
  {
    role: 'Member',
    organization: 'IET',
    period: '2023–Present',
  },
] as const

export default function KpHonors() {
  return (
    <section id="honors" className="scroll-mt-24 bg-gradient-to-b from-kp-strip to-kp-bg pb-12 pt-12 dark:from-dark-card dark:to-dark-bg md:pb-16 md:pt-14">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <KpReveal>
          <p className="kp-section-eyebrow inline-flex items-center gap-2">
            <Star className="h-4 w-4 text-kp-award" strokeWidth={1.5} aria-hidden />
            Recognition
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light tracking-tight text-kp-ink dark:text-dark-text md:text-5xl">
            Honors &amp; Awards
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-kp-muted dark:text-kp-muted md:text-base">
            Individual honors presented with their issuing organization and date.
          </p>
        </KpReveal>

        <KpReveal className="mt-8 overflow-hidden rounded-lg border border-kp-line/70 bg-dark-card/75 shadow-kp-soft dark:border-white/10 dark:bg-dark-card md:mt-10">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left">
              <thead className="border-b border-kp-line/70 bg-kp-bg/65 dark:border-white/10">
                <tr>
                  {['Honor', 'Issuer', 'Date'].map((heading) => (
                    <th key={heading} scope="col" className="px-5 py-4 font-mono text-caption2 font-semibold uppercase tracking-[0.12em] text-kp-accent">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-kp-line/60 dark:divide-white/10">
                {HONORS.map((item) => (
                  <tr key={item.honor} className="align-top transition-colors hover:bg-kp-bg/35">
                    <th scope="row" className="w-1/2 px-5 py-5 text-sm font-semibold leading-relaxed text-kp-ink dark:text-dark-text">{item.honor}</th>
                    <td className="w-[30%] px-5 py-5 text-sm leading-relaxed text-kp-muted dark:text-kp-muted">{item.issuer}</td>
                    <td className="w-1/5 px-5 py-5 font-mono text-xs leading-relaxed text-kp-muted dark:text-kp-muted">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </KpReveal>

        <KpReveal className="mt-14 md:mt-16">
          <p className="kp-section-eyebrow">Professional service &amp; leadership</p>
          <h3 className="mt-3 max-w-4xl font-serif text-3xl font-light tracking-tight text-kp-ink dark:text-dark-text md:text-4xl">
            Boards, Advisory Committees, Professional Organizations
          </h3>
          <div className="mt-8 divide-y divide-kp-line/60 overflow-hidden rounded-lg border border-kp-line/70 bg-dark-card/75 shadow-kp-soft dark:divide-white/10 dark:border-white/10 dark:bg-dark-card">
            {PROFESSIONAL_ROLES.map((item) => (
              <div key={`${item.organization}-${item.role}`} className="grid gap-2 px-5 py-5 transition-colors hover:bg-kp-bg/35 md:grid-cols-[1fr_14rem_10rem] md:items-center md:px-6">
                <p className="font-semibold text-kp-ink dark:text-dark-text">{item.role}</p>
                <p className="text-sm text-kp-muted dark:text-kp-muted">
                  {'href' in item ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-medium text-kp-accent hover:underline">
                      {item.organization}
                      <KpUiIcon name="externalLink" size={14} />
                    </a>
                  ) : (
                    item.organization
                  )}
                </p>
                <p className="font-mono text-xs text-kp-muted dark:text-kp-muted">{item.period}</p>
              </div>
            ))}
          </div>
        </KpReveal>

        <KpReveal>
          <p className="mt-6 rounded-lg border border-kp-line/60 bg-dark-card/50 px-5 py-4 text-sm leading-relaxed text-kp-muted dark:border-white/10 dark:text-kp-muted">
            <span className="font-semibold text-kp-ink dark:text-dark-text">Team recognition:</span> L&amp;T Infotech Team Performance Award — HBO SharePoint Team. Presented as team context, not as an individual honor.
          </p>
        </KpReveal>

        <div className="mt-10 flex justify-center">
          <Link href="/recognition" className="inline-flex items-center gap-2 rounded-full border border-kp-line/70 bg-dark-card/80 px-5 py-2.5 text-sm font-semibold text-kp-ink shadow-sm transition hover:border-kp-accent/40 hover:text-kp-accent dark:border-white/15 dark:bg-dark-card/[0.06] dark:text-dark-text dark:hover:border-kp-accent/40 dark:hover:text-kp-accent">
            Full recognition &amp; standing
            <KpUiIcon name="arrowUpRight" size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
