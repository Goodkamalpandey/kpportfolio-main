import Link from 'next/link'
import KpUiIcon from '@/components/kp/KpUiIcon'
import { createPageMetadata } from '@/components/kp/data'

export const metadata = createPageMetadata(
  '/consulting',
  'Consulting | Dr. Kamal Pandey',
  'Strategic AI consulting, architecture advisory, and executive-level technical partnership.'
)

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
        <div className="mt-12">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded bg-kp-accent px-5 py-3 text-sm font-semibold text-kp-navy transition hover:bg-kp-award">
            Start a conversation
            <KpUiIcon name="arrowUpRight" size={15} />
          </Link>
        </div>
      </div>
    </main>
  )
}
