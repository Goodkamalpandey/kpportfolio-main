import type { Metadata } from 'next'
import Link from 'next/link'
import KpUiIcon from '@/components/kp/KpUiIcon'
import { SITE } from '@/components/kp/data'

export const metadata: Metadata = {
  title: 'Consulting | Dr. Kamal Pandey',
  description: 'Strategic AI consulting, architecture advisory, and executive-level technical partnership.',
}

export default function ConsultingPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-h-screen bg-gradient-to-b from-kp-bg to-dark-card/40 pb-24 pt-28 dark:from-dark-bg dark:to-dark-bg md:pb-28 md:pt-32"
    >
      <div className="mx-auto max-w-content px-5 md:px-8">
        <h1 className="inline-flex items-center gap-3 font-serif text-4xl font-light text-kp-ink dark:text-dark-text md:text-5xl">
          <KpUiIcon name="calendarDays" size={30} className="text-kp-accent dark:text-kp-accent" />
          Consulting
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-kp-muted dark:text-kp-muted">
          Executive-level partnership through an Enterprise Applied AI and solution architecture lens: agentic AI
          strategy, reference architectures, digital employee experience, software-defined vehicle programs, and
          research-to-production governance — with explicit outcomes and clear decision records for leadership teams.
        </p>
        <ul className="mt-10 max-w-2xl list-disc space-y-3 pl-5 text-kp-muted dark:text-kp-muted">
          <li>Enterprise architecture reviews and reference designs (multi-cloud, M365, Google Workspace, GenAI)</li>
          <li>AI-DLC and delivery governance for cross-functional executive programs</li>
          <li>Research collaboration on verifiable reasoning and enterprise deployment</li>
          <li>Speaking and workshop formats for C-suite, board, and engineering leadership audiences</li>
        </ul>
        <div className="mt-12 flex flex-wrap gap-1.5 sm:gap-2">
          <a
            href={SITE.topmate}
            target="_blank"
            rel="noopener noreferrer"
            className="kp-topmate-cta inline-flex items-center justify-center gap-1 rounded px-3 py-1.5 text-caption2 font-semibold leading-tight"
          >
            <KpUiIcon name="calendarDays" size={12} className="text-kp-navy" />
            Book on Topmate
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center justify-center gap-1 rounded-full border border-kp-line px-3 py-1.5 text-caption2 font-semibold leading-tight text-kp-ink dark:border-white/10 dark:text-dark-text"
          >
            <KpUiIcon name="mail" size={12} className="text-kp-accent dark:text-kp-accent" />
            Email
          </a>
        </div>
        <p className="mt-12">
          <Link href="/#contact" className="text-sm font-semibold text-kp-accent hover:underline dark:text-kp-accent">
            ← Contact on home
          </Link>
        </p>
      </div>
    </main>
  )
}
