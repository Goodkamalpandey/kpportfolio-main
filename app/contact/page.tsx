import type { Metadata } from 'next'
import Link from 'next/link'
import KpContact from '@/components/kp/KpContact'

export const metadata: Metadata = {
  title: 'Contact | Dr. Kamal Pandey',
  description: 'Reach Dr. Kamal Pandey for consulting, research, and speaking.',
}

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-kp-bg dark:bg-dark-bg">
      <div className="mx-auto max-w-content px-5 pt-24 md:px-8">
        <Link href="/" className="text-sm font-medium text-kp-accent hover:underline dark:text-kp-accent">
          ← Home
        </Link>
      </div>
      <KpContact page />
    </main>
  )
}
