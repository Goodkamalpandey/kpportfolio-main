import KpCaseStudies from '@/components/kp/KpCaseStudies'
import { createPageMetadata } from '@/components/kp/data'

export const metadata = createPageMetadata(
  '/work',
  'Applied AI Systems Portfolio | Dr. Kamal Pandey',
  'Applied AI, manufacturing intelligence, enterprise productivity, quality, supply-chain, and software-defined vehicle systems.'
)

export default function WorkPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <h1 className="sr-only">Applied AI systems portfolio</h1>
      <KpCaseStudies />
    </main>
  )
}
