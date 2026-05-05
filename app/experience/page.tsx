import type { Metadata } from 'next'
import Link from 'next/link'
import KpUiIcon from '@/components/kp/KpUiIcon'
import { EXPERIENCE, SITE } from '@/components/kp/data'

export const metadata: Metadata = {
  title: 'Experience | Dr. Kamal Pandey',
  description:
    'Full career spine: Rivian, Samsung SDS America, Goodyear, LTI, Singtel Optus, HCL Technologies, IBM — architecture, AI, and digital workplace at global scale.',
}

export default function ExperiencePage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-h-screen bg-gradient-to-b from-white to-kp-bg/80 pb-24 pt-28 dark:from-dark-bg dark:to-dark-bg md:pb-28 md:pt-32"
    >
      <div className="mx-auto max-w-content px-5 md:px-8">
        <h1 className="inline-flex items-center gap-3 font-serif text-4xl font-light text-kp-ink dark:text-dark-text md:text-5xl">
          <KpUiIcon name="briefcase" size={30} className="text-kp-accent dark:text-blue-300" />
          Experience
        </h1>
        <p className="mt-6 max-w-2xl text-kp-muted dark:text-kp-line">
          Detailed roles and measurable outcomes live on{' '}
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-kp-accent hover:underline dark:text-blue-300"
          >
            LinkedIn
            <KpUiIcon name="linkedin" size={15} className="text-kp-accent dark:text-blue-300" />
          </a>
          . Below is the same spine as the home timeline, expanded for reading.
        </p>
        <ol className="mt-14 space-y-12 border-l-2 border-kp-accent pl-8 dark:border-blue-400 md:pl-12">
          {EXPERIENCE.map((x) => (
            <li key={x.role + x.window} className="relative">
              <span className="absolute -left-[9px] top-1.5 h-3 w-3 rounded-full border-2 border-kp-accent bg-white dark:border-blue-400 dark:bg-dark-bg md:-left-[13px]" />
              <p className="font-mono text-xs uppercase tracking-wider text-kp-accent dark:text-blue-300">{x.window}</p>
              <h2 className="mt-2 text-2xl font-semibold text-kp-ink dark:text-dark-text">{x.role}</h2>
              <p className="text-kp-muted dark:text-kp-line">{x.org}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-kp-muted dark:text-kp-line">
                {x.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <p className="mt-12">
          <Link href="/#trusted" className="text-sm font-semibold text-kp-accent hover:underline dark:text-blue-300">
            ← Back to home
          </Link>
        </p>
      </div>
    </main>
  )
}
