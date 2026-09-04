import Link from 'next/link'
import KpReveal from './KpReveal'
import KpUiIcon from './KpUiIcon'
import type { KpUiIconName } from './KpUiIcon'
import { WORK_FLAGSHIP, WORK_PORTFOLIO, WORK_VISION } from './data'

type Platform = (typeof WORK_FLAGSHIP)[number] | (typeof WORK_PORTFOLIO)[number]

/**
 * Work — full Applied AI portfolio.
 * Flagship cards = agentic intelligence layer; portfolio grid = manufacturing, quality, SDV, supply chain.
 * KPI figures are design targets / modeled opportunities until production-validated.
 */
export default function KpCaseStudies({ compact = false }: { compact?: boolean }) {
  return (
    <section id="work" className="scroll-mt-24 bg-kp-bg py-16 dark:bg-dark-bg md:py-24">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <KpReveal>
          <p className="kp-section-eyebrow inline-flex items-center gap-2">
            <KpUiIcon name="cpu" size={15} className="text-kp-accent dark:text-kp-accent" />
            {WORK_VISION.eyebrow}
          </p>
          <h2 className="mt-4 max-w-4xl font-serif text-3xl font-light leading-[1.12] tracking-tight text-kp-ink dark:text-dark-text md:text-5xl md:leading-[1.08]">
            {WORK_VISION.title}
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-lg font-medium leading-snug tracking-[-0.015em] text-kp-ink dark:text-dark-text md:text-xl">
            {WORK_VISION.lead}
          </p>
          <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-kp-muted dark:text-kp-muted">
            {WORK_VISION.body}
          </p>
          <p className="mt-4 max-w-2xl text-pretty text-base font-medium leading-relaxed text-kp-ink/85 dark:text-dark-text/90">
            {WORK_VISION.closing}
          </p>
        </KpReveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {WORK_VISION.principles.map((p) => (
            <KpReveal key={p.label}>
              <div className="h-full rounded-lg border border-kp-line/60 bg-dark-card/70 px-4 py-4 dark:border-white/10 dark:bg-dark-card/50">
                <p className="font-mono text-caption2 font-semibold uppercase tracking-[0.12em] text-kp-accent dark:text-kp-accent">
                  {p.label}
                </p>
                <p className="mt-2 text-footnote leading-snug text-kp-muted dark:text-kp-muted">{p.detail}</p>
              </div>
            </KpReveal>
          ))}
        </div>

        <div className="mt-14 md:mt-16">
          <KpReveal>
            <p className="font-mono text-caption2 font-semibold uppercase tracking-[0.14em] text-kp-muted dark:text-kp-muted">
              Flagship · Agentic intelligence layer
            </p>
          </KpReveal>
          <div className="mt-5 space-y-6 md:space-y-8">
            {WORK_FLAGSHIP.map((p) => (
              <KpReveal key={p.name}>
                <FlagshipCard platform={p} />
              </KpReveal>
            ))}
          </div>
        </div>

        {compact ? (
          <div className="mt-10 flex justify-center">
            <Link href="/work" className="inline-flex items-center gap-2 rounded-full bg-kp-accent px-5 py-2.5 text-sm font-semibold text-kp-navy transition hover:bg-kp-award">
              View full systems portfolio
              <KpUiIcon name="arrowUpRight" size={15} />
            </Link>
          </div>
        ) : (
          <div className="mt-16 md:mt-20">
            <KpReveal>
              <p className="font-mono text-caption2 font-semibold uppercase tracking-[0.14em] text-kp-muted dark:text-kp-muted">
                Portfolio · Manufacturing, quality, SDV &amp; operations
              </p>
              <h3 className="mt-3 max-w-2xl font-serif text-2xl font-light tracking-tight text-kp-ink dark:text-dark-text md:text-3xl">
                One connected mission across the enterprise.
              </h3>
            </KpReveal>
            <div className="mt-8 grid gap-5 md:grid-cols-2 md:gap-6">
              {WORK_PORTFOLIO.map((p) => (
                <KpReveal key={p.name}>
                  <PortfolioCard platform={p} />
                </KpReveal>
              ))}
            </div>
          </div>
        )}

        <KpReveal>
          <p className="mt-10 max-w-3xl text-footnote leading-relaxed text-kp-muted dark:text-kp-muted md:mt-12">
            <span className="font-semibold text-kp-ink dark:text-dark-text">Publishing note. </span>
            KPI and ROI figures above are design targets or modeled value opportunities from platform criteria —
            presented as targets until validated with measured production results. Career timeline and prior roles:{' '}
            <Link href="/experience" className="font-medium text-kp-accent underline-offset-2 hover:underline dark:text-kp-accent">
              Experience
            </Link>
            .
          </p>
        </KpReveal>
      </div>
    </section>
  )
}

function FlagshipCard({ platform: p }: { platform: Platform }) {
  return (
    <article className="group relative overflow-hidden rounded-lg border border-kp-line/70 bg-gradient-to-br from-dark-card via-dark-card to-kp-strip/40 shadow-kp-soft transition duration-300 ease-out-soft hover:border-kp-accent/35 hover:shadow-kp-elevated dark:border-white/10 dark:from-dark-card dark:via-dark-card dark:to-dark-bg dark:shadow-none dark:hover:border-kp-accent/35">
      <div
        className="pointer-events-none absolute -right-8 -top-10 font-sans text-[7.5rem] font-medium leading-none tracking-tighter text-kp-ink/[0.035] dark:text-white/[0.04] md:text-[9rem]"
        aria-hidden
      >
        {p.n}
      </div>

      <div className="relative grid gap-0 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.85fr)]">
        <div className="border-b border-kp-line/60 p-7 md:p-9 lg:border-b-0 lg:border-r dark:border-white/10">
          <PlatformMeta p={p} />
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
                <p className="font-mono text-caption2 font-semibold uppercase tracking-[0.11em] text-kp-muted dark:text-kp-muted">
                  {label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-kp-muted dark:text-kp-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <TargetPanel p={p} />
      </div>
    </article>
  )
}

function PortfolioCard({ platform: p }: { platform: Platform }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-kp-line/70 bg-dark-card/95 shadow-kp-soft transition duration-300 ease-out-soft hover:-translate-y-0.5 hover:border-kp-accent/30 hover:shadow-kp-elevated dark:border-white/10 dark:bg-dark-card/85 dark:shadow-none dark:hover:border-kp-accent/30">
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <PlatformMeta p={p} />
        <div className="mt-4 flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-2xl font-normal tracking-tight text-kp-ink dark:text-dark-text">{p.name}</h3>
          <span className="shrink-0 font-mono text-caption2 text-kp-muted dark:text-kp-muted">{p.n}</span>
        </div>
        <p className="mt-1.5 text-sm font-medium leading-snug text-kp-ink/75 dark:text-dark-text/80">{p.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-kp-muted dark:text-kp-muted">
          <span className="font-semibold text-kp-ink dark:text-dark-text">Problem. </span>
          {p.problem}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-kp-muted dark:text-kp-muted">
          <span className="font-semibold text-kp-ink dark:text-dark-text">Solution. </span>
          {p.solution}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-kp-muted dark:text-kp-muted">
          <span className="font-semibold text-kp-ink dark:text-dark-text">Contribution. </span>
          {p.contribution}
        </p>
      </div>
      <div className="border-t border-kp-line/60 bg-kp-navy px-6 py-5 text-white dark:border-white/10 dark:bg-[#0a1224] md:px-7">
        <p className="font-mono text-caption2 font-semibold uppercase tracking-[0.12em] text-kp-accent/90">
          Design target
        </p>
        <p className="mt-2 font-sans text-3xl font-medium leading-none tracking-tight tabular-nums">{p.metric}</p>
        <p className="mt-2 text-footnote leading-snug text-white/65">{p.metricLabel}</p>
        <ul className="mt-4 space-y-1.5">
          {p.targets.map((t) => (
            <li key={t} className="flex gap-2 text-caption2 leading-snug text-white/70">
              <KpUiIcon name="badgeCheck" size={12} className="mt-0.5 shrink-0 text-emerald-400/90" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <Link
          href={p.href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-[gap] duration-200 hover:gap-3"
        >
          Discuss
          <KpUiIcon name="arrowUpRight" size={14} className="text-kp-accent" />
        </Link>
      </div>
    </article>
  )
}

function PlatformMeta({ p }: { p: Platform }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-kp-line/80 bg-dark-card/80 px-2.5 py-1 font-mono text-caption2 font-semibold uppercase tracking-wider text-kp-muted dark:border-white/10 dark:bg-dark-card/[0.04] dark:text-kp-muted">
        <KpUiIcon name={p.icon as KpUiIconName} size={12} className="text-kp-accent dark:text-kp-accent" />
        {p.org} · {p.domain}
      </span>
      <span className="rounded-full bg-kp-accent/10 px-2.5 py-1 text-caption2 font-semibold text-kp-accent dark:bg-kp-accent/15 dark:text-kp-accent">
        {p.role}
      </span>
    </div>
  )
}

function TargetPanel({ p }: { p: Platform }) {
  return (
    <div className="flex flex-col justify-between bg-kp-navy p-7 text-white md:p-9 dark:bg-[#0a1224]">
      <div>
        <p className="font-mono text-caption2 font-semibold uppercase tracking-[0.14em] text-kp-accent/90">
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
        <KpUiIcon name="arrowUpRight" size={16} className="text-kp-accent" />
      </Link>
    </div>
  )
}
