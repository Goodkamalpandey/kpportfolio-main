import Link from 'next/link'
import { externalLinkProps } from '@/components/externalLinkProps'
import { createPageMetadata } from '@/components/kp/data'

const MEDIUM = 'https://medium.com/@kamalkismca'

export const metadata = createPageMetadata('/blog', 'Blog | Dr. Kamal Pandey', 'Essays and articles on Medium.')

export default function BlogPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-kp-bg px-5 pb-24 pt-28 dark:bg-dark-bg md:pt-32">
      <div className="mx-auto max-w-content md:px-8">
        <h1 className="font-serif text-3xl font-light text-kp-ink dark:text-dark-text md:text-4xl">Writing on Medium</h1>
        <p className="mt-4 max-w-xl text-kp-muted dark:text-kp-muted">
          Long-form posts live on Medium. Open the profile in a new tab, or return home.
        </p>
        <p className="mt-8">
          <a
            href={MEDIUM}
            {...externalLinkProps}
            className="inline-flex items-center gap-2 rounded bg-kp-accent px-6 py-3 text-sm font-semibold text-kp-navy hover:bg-kp-award"
          >
            Open Medium in new tab
          </a>
        </p>
        <p className="mt-6">
          <Link href="/" className="text-sm font-semibold text-kp-accent hover:underline dark:text-kp-accent">
            ← Back to home
          </Link>
        </p>
      </div>
    </main>
  )
}
