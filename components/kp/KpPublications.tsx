'use client'

import Link from 'next/link'
import { useState, type KeyboardEvent } from 'react'
import KpReveal from './KpReveal'
import KpUiIcon from './KpUiIcon'
import KpBooks from './KpBooks'
import { BOOKS, PUBLICATIONS_FULL, PUBLICATIONS_MOVES_FIELD, SITE } from './data'

const JOURNAL_TITLES = new Set([
  'The Dynamic Reasoning Trace: Achieving Verifiable Faithfulness through Agentic Self-Correction',
  'Synthetic Reasoning: Verifiable AI by Modular Program Synthesis',
  'The Convergence of Artificial Intelligence and Low-Code/No-Code Platforms: Evolution, Applications, and Benchmarks',
  'An Architectural Framework for AI-Driven Intelligent Commerce: The Data Nervous System',
  'AI Powered Transformation in the Modern Digital Workplace: Roadmap for the Future of Work and Ethical Consideration',
  'Artificial Intelligence (AI) in Electric Vehicle Ecosystems: Challenges, Opportunities, and Models for Accelerated Adoption',
  'The Future of Automotive Industry: AI and Cloud-Driven Digital Transformation in the US Region — A Holistic Examination',
  'The Intelligent Workplace: AI and Automation Shaping the Future of Digital Workplaces',
  'Artificial Intelligence and the Evolving Labor Market: A Comprehensive Review and Policy Roadmap',
])

const CONFERENCE_TITLES = new Set([
  'Quantization-Induced Robustness Collapse in Edge-Deployed Language Models: Security and Governance Frameworks for 6G IoT Ecosystems',
  'The Novel Framework for Next-Gen Predictive Maintenance of Software-Defined Vehicles',
  'Autonomous ASN Label Compliance Using a Hybrid YOLOV8—Vision-Language Framework and Florence-2',
  'The Agentic Enterprise: A Strategic Analysis of Advanced Agentic Workflows and Collaborative AI',
])

const BOOK_CHAPTER_TITLES = new Set([
  'Principles of Building AI Agents, 1st Edition: The Next Generation Foreword: The Next Generation is Here',
])

const FEATURED_TITLES = new Set(PUBLICATIONS_MOVES_FIELD.map((publication) => publication.title))
const JOURNAL_ARTICLES = PUBLICATIONS_FULL.filter((publication) => JOURNAL_TITLES.has(publication.title))
const CONFERENCE_PROCEEDINGS = PUBLICATIONS_FULL.filter((publication) => CONFERENCE_TITLES.has(publication.title))
const BOOK_CHAPTERS = PUBLICATIONS_FULL.filter((publication) => BOOK_CHAPTER_TITLES.has(publication.title))
const FEATURED_PUBLICATIONS = PUBLICATIONS_FULL.filter((publication) => FEATURED_TITLES.has(publication.title))
const OTHER_SCHOLARLY_WORKS = PUBLICATIONS_FULL.filter(
  (publication) =>
    !JOURNAL_TITLES.has(publication.title) &&
    !CONFERENCE_TITLES.has(publication.title) &&
    !BOOK_CHAPTER_TITLES.has(publication.title)
)

type Publication = (typeof PUBLICATIONS_FULL)[number]
type FilterId = 'all' | 'featured' | 'journals' | 'books' | 'conferences' | 'other'

const FILTERS: readonly { id: FilterId; label: string; count: number }[] = [
  { id: 'all', label: 'All Publications', count: PUBLICATIONS_FULL.length + BOOKS.length },
  { id: 'featured', label: 'Featured Publications', count: FEATURED_PUBLICATIONS.length },
  { id: 'journals', label: 'Journal Articles', count: JOURNAL_ARTICLES.length },
  { id: 'books', label: 'Books and Book Chapters', count: BOOKS.length + BOOK_CHAPTERS.length },
  { id: 'conferences', label: 'Conference Proceedings', count: CONFERENCE_PROCEEDINGS.length },
  { id: 'other', label: 'Preprints & Other Scholarly Works', count: OTHER_SCHOLARLY_WORKS.length },
]

function publicationsFor(filter: FilterId) {
  if (filter === 'featured') return FEATURED_PUBLICATIONS
  if (filter === 'journals') return JOURNAL_ARTICLES
  if (filter === 'books') return BOOK_CHAPTERS
  if (filter === 'conferences') return CONFERENCE_PROCEEDINGS
  if (filter === 'other') return OTHER_SCHOLARLY_WORKS
  return PUBLICATIONS_FULL
}

export default function KpPublications({ compact = false, page = false }: { compact?: boolean; page?: boolean }) {
  const [activeFilter, setActiveFilter] = useState<FilterId>('all')
  const publications = publicationsFor(activeFilter)
  const showBooks = activeFilter === 'all' || activeFilter === 'books'
  const Heading = page ? 'h1' : 'h2'

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    const nextIndex =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? FILTERS.length - 1
          : (index + (event.key === 'ArrowRight' ? 1 : -1) + FILTERS.length) % FILTERS.length
    const nextFilter = FILTERS[nextIndex]
    setActiveFilter(nextFilter.id)
    requestAnimationFrame(() => document.getElementById(`publication-tab-${nextFilter.id}`)?.focus())
  }

  if (compact) {
    return (
      <section id="publications" className="scroll-mt-24 bg-dark-card py-16 dark:bg-dark-bg md:py-20">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <KpReveal>
            <p className="kp-section-eyebrow">Research &amp; scholarship</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-light tracking-tight text-kp-ink dark:text-dark-text md:text-5xl">
              Selected work advancing trustworthy enterprise AI
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-kp-muted dark:text-kp-muted">
              Featured publications spanning agentic systems, verifiable reasoning, retrieval, and software-defined vehicles.
            </p>
          </KpReveal>
          <PublicationList publications={FEATURED_PUBLICATIONS.slice(0, 3)} />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/research" className="inline-flex items-center gap-2 rounded-full bg-kp-accent px-5 py-2.5 text-sm font-semibold text-kp-navy transition hover:bg-kp-award">
              Explore all publications
              <KpUiIcon name="arrowUpRight" size={15} />
            </Link>
            <a href={SITE.scholarWorksByPubDate} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-kp-line/70 px-5 py-2.5 text-sm font-semibold text-kp-ink transition hover:border-kp-accent/40 hover:text-kp-accent dark:border-white/15 dark:text-dark-text">
              Google Scholar
              <KpUiIcon name="externalLink" size={15} />
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="publications" className="scroll-mt-24 bg-dark-card pb-16 pt-16 dark:bg-dark-bg md:pb-24 md:pt-20">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <KpReveal>
          <p className="kp-section-eyebrow">Research &amp; authorship</p>
          <Heading className="mt-4 font-serif text-5xl font-light tracking-tight text-kp-ink dark:text-dark-text md:text-6xl">
            All Publications
          </Heading>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-kp-muted dark:text-kp-muted">
            Scholarly research, conference proceedings, books, and long-form contributions across applied AI, enterprise architecture, and digital transformation.
          </p>
          <p className="mt-4 inline-flex flex-wrap items-center gap-2 text-sm text-kp-muted dark:text-kp-muted">
            <KpUiIcon name="badgeCheck" size={16} className="text-kp-emerald dark:text-emerald-400" />
            <span>Article read 6,246 times on ResearchGate · 100+ peer-reviewed manuscripts reviewed</span>
          </p>
        </KpReveal>

        <div className="mt-10 border-b border-kp-line/70 dark:border-white/10" role="tablist" aria-label="Publication categories">
          <div className="flex gap-1 overflow-x-auto pb-px">
            {FILTERS.map((filter) => {
              const active = activeFilter === filter.id
              return (
                <button
                  key={filter.id}
                  id={`publication-tab-${filter.id}`}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls="publication-panel"
                  tabIndex={active ? 0 : -1}
                  onClick={() => setActiveFilter(filter.id)}
                  onKeyDown={(event) => onTabKeyDown(event, FILTERS.indexOf(filter))}
                  className={`relative shrink-0 px-4 py-3 text-left text-sm font-medium transition-colors ${
                    active ? 'text-kp-accent' : 'text-kp-muted hover:text-kp-ink'
                  }`}
                >
                  {filter.label} <span className="font-mono text-xs opacity-70">({filter.count})</span>
                  {active ? <span className="absolute inset-x-2 bottom-0 h-0.5 bg-kp-accent" aria-hidden /> : null}
                </button>
              )
            })}
          </div>
        </div>

        <div id="publication-panel" role="tabpanel" aria-labelledby={`publication-tab-${activeFilter}`} tabIndex={0}>
          {publications.length ? <PublicationList publications={publications} /> : null}
          {showBooks ? <KpBooks embedded /> : null}
        </div>

        <p className="mt-10 flex flex-wrap justify-center">
          <a
            href={SITE.scholarWorksByPubDate}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-kp-line/70 bg-dark-card/80 px-5 py-2.5 text-sm font-semibold text-kp-ink shadow-sm hover:border-kp-accent/40 hover:text-kp-accent dark:border-white/15 dark:bg-dark-card/[0.06] dark:text-dark-text dark:hover:border-kp-accent/40 dark:hover:text-kp-accent"
          >
            View Google Scholar profile
            <KpUiIcon name="externalLink" size={15} />
          </a>
        </p>
      </div>
    </section>
  )
}

function PublicationList({ publications }: { publications: readonly Publication[] }) {
  return (
    <ul className="mt-8 divide-y divide-kp-line/80 overflow-hidden rounded-lg border border-kp-line/60 bg-kp-bg/40 shadow-kp-soft dark:divide-white/10 dark:border-white/[0.09] dark:bg-dark-card/[0.04] dark:shadow-none">
      {publications.map((publication) => (
        <li
          key={publication.title}
          className="bg-dark-card/65 px-5 py-9 transition-colors first:rounded-t-2xl last:rounded-b-2xl hover:bg-dark-card/95 dark:bg-transparent dark:hover:bg-dark-card/[0.06] md:px-8"
        >
          <div className="grid gap-6 md:grid-cols-[minmax(0,80px)_1fr] md:items-start">
            <span className="inline-flex h-9 w-14 shrink-0 items-center justify-center rounded-md bg-emerald-50 font-mono text-xs font-semibold text-kp-emerald dark:bg-emerald-950/40 dark:text-emerald-300">
              {publication.year}
            </span>
            <div>
              <a
                href={publication.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-lg font-medium text-kp-ink dark:text-dark-text"
              >
                <span className="kp-nav-link inline bg-gradient-to-r from-kp-accent to-kp-accent bg-[length:0%_1px] bg-bottom bg-no-repeat transition-all group-hover:bg-[length:100%_1px] dark:from-kp-accent dark:to-kp-accent">
                  {publication.title}
                </span>
              </a>
              <p className="mt-2 font-mono text-caption2 font-semibold uppercase tracking-[0.12em] text-kp-muted dark:text-kp-muted">
                {publication.journal}
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-kp-muted dark:text-kp-muted">{publication.abstract}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
