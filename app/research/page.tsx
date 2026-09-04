import KpPublications from '@/components/kp/KpPublications'
import { createPageMetadata } from '@/components/kp/data'

export const metadata = createPageMetadata(
  '/research',
  'Research & Publications | Dr. Kamal Pandey',
  'Categorized publications in agentic AI, synthetic reasoning, SDV systems, and enterprise AI architecture.'
)

export default function ResearchPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <KpPublications page />
    </main>
  )
}
