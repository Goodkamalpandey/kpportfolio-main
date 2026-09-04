import type { Metadata } from 'next'
import Link from 'next/link'
import KpUiIcon from '@/components/kp/KpUiIcon'
import { RESEARCH_PAGE_PAPERS, SITE } from '@/components/kp/data'

export const metadata: Metadata = {
  title: 'Research & Publications | Dr. Kamal Pandey',
  description: 'Indexed publications in agentic AI, synthetic reasoning, SDV systems, and enterprise AI architecture.',
}

export default function ResearchPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-h-screen bg-gradient-to-b from-kp-bg to-dark-card/40 pb-24 pt-28 dark:from-dark-bg dark:to-dark-bg md:pb-28 md:pt-32"
    >
      <div className="mx-auto max-w-content px-5 md:px-8">
        <p className="kp-section-eyebrow inline-flex items-center gap-2 text-kp-emerald dark:text-emerald-400">
          <KpUiIcon name="fileText" size={15} className="text-kp-emerald dark:text-emerald-400" />
          Research index
        </p>
        <h1 className="mt-4 inline-flex items-center gap-3 font-serif text-4xl font-light text-kp-ink dark:text-dark-text md:text-5xl">
          <KpUiIcon name="bookOpen" size={28} className="hidden text-kp-emerald sm:block" />
          <span>Publications &amp; scholarly work</span>
        </h1>
        <div className="mt-6 max-w-2xl space-y-2 text-kp-muted dark:text-kp-muted">
          <p>
            <a
              href={SITE.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-kp-accent hover:underline dark:text-kp-accent"
            >
              69 citations on Google Scholar
            </a>{' '}
            ·{' '}
            <a
              href={SITE.researchgate}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-kp-accent hover:underline dark:text-kp-accent"
            >
              70 citations on ResearchGate
            </a>{' '}
            · 20+ peer-reviewed publications.
          </p>
          <p>Featured research: five selected publications. One ResearchGate article has been read 6,246 times.</p>
        </div>
        <ul className="mt-14 space-y-4">
          {RESEARCH_PAGE_PAPERS.map((p) => (
            <li key={p.title} className="rounded-lg border border-kp-line bg-dark-card dark:border-white/10 dark:bg-dark-card">
              <details className="group p-6">
                <summary className="cursor-pointer list-none font-medium text-kp-ink marker:content-none dark:text-dark-text [&::-webkit-details-marker]:hidden">
                  <span className="mr-3 inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 font-mono text-xs text-kp-emerald dark:bg-emerald-950/50">
                    {p.year}
                  </span>
                  {p.title}
                </summary>
                <div className="mt-4 border-t border-kp-line pt-4 text-sm dark:border-white/10">
                  <p className="font-mono text-caption2 uppercase tracking-wider text-kp-muted dark:text-kp-muted">
                    {p.journal}
                  </p>
                  <p className="mt-3 text-kp-muted dark:text-kp-muted">{p.abstract}</p>
                  <p className="mt-3 text-xs text-kp-muted dark:text-kp-muted">
                    <strong className="text-kp-ink dark:text-dark-text">Venue link:</strong> opens the indexed listing
                    or DOI resolver for this work.
                  </p>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-kp-accent hover:underline dark:text-kp-accent"
                  >
                    Open publication
                    <KpUiIcon name="externalLink" size={15} />
                  </a>
                </div>
              </details>
            </li>
          ))}
        </ul>
        <p className="mt-12">
          <Link href="/#publications" className="text-sm font-semibold text-kp-accent hover:underline dark:text-kp-accent">
            ← Back to home
          </Link>
        </p>
      </div>
    </main>
  )
}
