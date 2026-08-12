import type { Metadata } from 'next'
import Link from 'next/link'
import KpUiIcon from '@/components/kp/KpUiIcon'
import { GLOBAL_RECOGNITION, HERO_IDENTITY, HEADLINE_IMPACT_STATS, SITE } from '@/components/kp/data'

export const metadata: Metadata = {
  title: 'Recognition & Distinction | Dr. Kamal Pandey',
  description:
    'Global recognition, elite professional memberships, peer-review judging, quantified enterprise impact, and pioneering agentic-AI research by Dr. Kamal Pandey.',
}

/** Signature original contributions — sourced from Dr. Pandey's peer-reviewed corpus. */
const SIGNATURE_CONTRIBUTIONS = [
  {
    title: 'Agentic Self-Correction',
    body: 'Reframing model reasoning traces as first-class, verifiable computational artifacts rather than post-hoc rationalizations — “The Dynamic Reasoning Trace.”',
  },
  {
    title: 'Synthetic Reasoning',
    body: 'Closing the LLM faithfulness gap by shifting from free-text generation to modular, executable program synthesis (World Journal of AI & Robotics Research).',
  },
  {
    title: 'Private, cost-efficient retrieval',
    body: 'TurboVec — codebook-oblivious quantization for enterprise RAG: higher recall and far lower latency than trained baselines, with membership-inference risk reduced to near-random (arXiv, 2026).',
  },
  {
    title: 'Trustworthy edge & vehicle AI',
    body: 'Security and governance frameworks for quantized edge LLMs in 6G IoT, and a next-generation predictive-maintenance framework for software-defined vehicles (IEEE, 2026).',
  },
] as const

function formatStat(s: (typeof HEADLINE_IMPACT_STATS)[number]) {
  const prefix = 'prefix' in s ? s.prefix : ''
  const value = 'format' in s && s.format === 'comma' ? s.value.toLocaleString('en-US') : String(s.value)
  return `${prefix}${value}${s.suffix}`
}

function PillarHeading({ n, eyebrow, title }: { n: string; eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="kp-section-eyebrow inline-flex items-center gap-2 text-kp-accent dark:text-blue-300">
        <span className="font-mono">{n}</span>
        {eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-kp-ink dark:text-dark-text md:text-4xl">
        {title}
      </h2>
    </div>
  )
}

export default function RecognitionPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-h-screen bg-gradient-to-b from-kp-bg to-white/40 pb-24 pt-28 dark:from-dark-bg dark:to-dark-bg md:pb-28 md:pt-32"
    >
      <div className="mx-auto max-w-content px-5 md:px-8">
        {/* Header */}
        <p className="kp-section-eyebrow inline-flex items-center gap-2 text-kp-award">
          <KpUiIcon name="award" size={15} className="text-kp-award" />
          Recognition &amp; distinction
        </p>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl font-light leading-tight text-kp-ink dark:text-dark-text md:text-6xl">
          Standing in the field.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-kp-muted dark:text-kp-line md:text-lg">
          A convergence of independent recognition — from the profession&apos;s senior engineering bodies, from
          global analyst indices, and from the peer-review community — alongside quantified enterprise impact and
          original, published research in agentic AI.
        </p>

        {/* Pillar 1 — Global acclaim */}
        <section className="mt-16 md:mt-20">
          <PillarHeading n="01" eyebrow="Global acclaim" title="Recognized among the leaders of the field." />

          <div className="grid gap-6 md:grid-cols-3">
            {HERO_IDENTITY.recognition.map((r) => (
              <div
                key={r}
                className="rounded-2xl border border-kp-line/70 border-t-[3px] border-t-kp-award bg-white p-7 shadow-kp-soft dark:border-white/10 dark:border-t-kp-award dark:bg-dark-card dark:shadow-none"
              >
                <KpUiIcon name="award" size={18} className="text-kp-award" />
                <p className="mt-3 text-base font-semibold leading-snug text-kp-ink dark:text-dark-text">{r}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-kp-ink dark:text-dark-text">
                <KpUiIcon name="badgeCheck" size={16} className="shrink-0 text-kp-accent dark:text-blue-300" />
                Elite professional memberships
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {HERO_IDENTITY.memberships.map((m) => (
                  <li
                    key={m}
                    className="inline-flex rounded-full border border-kp-line/80 bg-white px-3.5 py-1.5 text-sm font-medium text-kp-ink dark:border-white/10 dark:bg-dark-card dark:text-dark-text"
                  >
                    {m}
                  </li>
                ))}
              </ul>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-kp-muted dark:text-kp-line">
                Senior grades conferred only on members with demonstrated outstanding achievement, adjudged by
                expert peer panels.
              </p>
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-kp-ink dark:text-dark-text">
                <KpUiIcon name="globe2" size={16} className="shrink-0 text-kp-accent dark:text-blue-300" />
                Recognition &amp; peer-review leadership
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-kp-muted dark:text-kp-line">
                {GLOBAL_RECOGNITION.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Pillar 2 — Impact at scale */}
        <section className="mt-16 md:mt-20">
          <PillarHeading n="02" eyebrow="Impact at scale" title="Research translated into industrial reality." />
          <p className="-mt-4 mb-8 max-w-2xl text-sm leading-relaxed text-kp-muted dark:text-kp-line md:text-base">
            As Sr Staff Software Architect at Rivian and technical architect for the Rivian–Volkswagen JV AI
            transformation, delivering measurable enterprise outcomes at scale.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {HEADLINE_IMPACT_STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-kp-line/60 bg-white/92 p-5 shadow-kp-soft dark:border-white/10 dark:bg-dark-card/70 dark:shadow-none"
              >
                <p className="font-serif text-2xl font-light tabular-nums text-kp-ink dark:text-dark-text md:text-3xl">
                  {formatStat(s)}
                </p>
                <p className="mt-2 text-xs font-medium leading-snug text-kp-muted dark:text-kp-line">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pillar 3 — Pioneering research */}
        <section className="mt-16 md:mt-20">
          <PillarHeading n="03" eyebrow="Pioneering research" title="Original contributions to trustworthy AI." />
          <div className="grid gap-6 md:grid-cols-2">
            {SIGNATURE_CONTRIBUTIONS.map((c) => (
              <article
                key={c.title}
                className="rounded-2xl border border-kp-line/70 bg-white p-7 shadow-kp-soft dark:border-white/10 dark:bg-dark-card dark:shadow-none"
              >
                <KpUiIcon name="microscope" size={18} className="text-kp-emerald dark:text-emerald-400" />
                <h3 className="mt-3 font-serif text-xl font-normal text-kp-ink dark:text-dark-text">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-kp-muted dark:text-kp-line">{c.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="text-sm text-kp-muted dark:text-kp-line">
              <strong className="text-kp-ink dark:text-dark-text">25+</strong> peer-reviewed publications ·{' '}
              <strong className="text-kp-ink dark:text-dark-text">100+</strong> Scholar citations ·{' '}
              <strong className="text-kp-ink dark:text-dark-text">100+</strong> peer reviews
            </span>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 text-sm font-semibold text-kp-accent hover:underline dark:text-blue-300"
            >
              Browse publications
              <KpUiIcon name="arrowUpRight" size={15} />
            </Link>
            <a
              href={SITE.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-kp-accent hover:underline dark:text-blue-300"
            >
              Google Scholar
              <KpUiIcon name="externalLink" size={15} />
            </a>
          </div>
        </section>

        <p className="mt-16">
          <Link href="/" className="text-sm font-semibold text-kp-accent hover:underline dark:text-blue-300">
            ← Back to home
          </Link>
        </p>
      </div>
    </main>
  )
}
