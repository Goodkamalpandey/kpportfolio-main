import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { DM_Sans, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import './kp.css'
import KpCursor from '@/components/kp/KpCursor'
import KpNav from '@/components/kp/KpNav'
import KpFooter from '@/components/kp/KpFooter'
import KpScrollProgress from '@/components/kp/KpScrollProgress'
import { SITE } from '@/components/kp/data'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-kp-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-kp-serif',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-kp-mono',
  display: 'swap',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dr. Kamal Pandey',
  honorificPrefix: 'Dr.',
  honorificSuffix: 'PhD, DBA, MTech',
  jobTitle: 'Sr. Staff Software Architect — Applied AI & Solutions Engineering',
  worksFor: {
    '@type': 'Organization',
    name: 'Rivian Automotive Inc.',
  },
  description:
    'AI150 Global Influencer 2025-26. Global AI Leader 2025. Top 50 AI Researcher (Stanford). Senior Member IEEE. Fellow IET. 59+ citations. 25+ peer-reviewed publications. 16+ years. $100B projected AI operational impact (2022–2026).',
  url: SITE.domain,
  email: SITE.email,
   address: {
    '@type': 'PostalAddress',
    addressLocality: 'Los Angeles',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'Dakota State University',
      description: 'PhD in Information Systems (2025-2029)',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'IMET Worldwide Singapore',
      description: 'Doctor of Business Administration in AI and Cloud',
    },
  ],
  knowsAbout: [
    'Agentic AI',
    'Enterprise AI',
    'Large Language Models',
    'Synthetic Reasoning',
    'Digital Workplace',
    'Verifiable AI',
    'Enterprise Architecture',
    'Cloud Computing',
    'Software-Defined Vehicles',
    'MLOps',
    'Computer Vision',
    'Digital Transformation',
    'Amazon Bedrock',
    'Vertex AI',
    'PyTorch',
    'Open AI',
    'Claude AI',
    'TensorFlow',
    'LangChain',
    'AWS',
    'Azure',
    'GCP',
  ],
  award: [
    'AI150 Global AI Influencer 2025-2026',
    'Global AI Leader 2025',
    'Top 50 AI Researcher — Stanford University',
    'IEEE Senior Member',
    'IET Fellow',
    'Employee of the Year 2013 — L&T Infotech',
    'MVP 2014 — L&T Infotech',
    'Research & Innovation Awards — HCL Tech',
  ],
  sameAs: [
    SITE.linkedin,
    SITE.github,
    SITE.scholar,
    SITE.researchgate,
    SITE.medium,
    SITE.topmate,
    SITE.authorea,
    SITE.orcid,
    SITE.constellation,
  ],
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F6F7F9' },
    { media: '(prefers-color-scheme: dark)', color: '#070D1C' },
  ],
  /** Notched devices — full-bleed backgrounds respect safe areas in layout/CSS */
  viewportFit: 'cover',
}

const ogDescription =
  'Sr. Staff Architect — Applied AI @ Rivian. AI150 2025–26. Global AI Leader 2025. IEEE Senior Member. IET Fellow. 100+ Scholar citations. 25+ peer-reviewed publications. 16+ years.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: 'Dr. Kamal Pandey | Architecting the Future of Agentic Enterprise',
  description: ogDescription,
  keywords: [
    'Dr. Kamal Pandey',
    'Agentic AI',
    'Agentic enterprise',
    'Rivian',
    'IEEE Senior Member',
    'IET Fellow',
    'AI150',
    'Synthetic Reasoning',
    'Vertex AI',
    'Amazon Bedrock',
  ],
  authors: [{ name: 'Dr. Kamal Pandey' }],
  openGraph: {
    title: 'Dr. Kamal Pandey — AI Solutions Architect & Researcher',
    description: ogDescription,
    type: 'profile',
    url: SITE.domain,
    siteName: 'Dr. Kamal Pandey',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Kamal Pandey — AI Solutions Architect & Researcher',
    description: ogDescription,
  },
  alternates: { canonical: SITE.domain },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <body className="min-h-dvh bg-kp-bg pl-[env(safe-area-inset-left,0px)] pr-[env(safe-area-inset-right,0px)] font-sans text-base text-kp-ink antialiased dark:bg-dark-bg dark:text-dark-text">
        <a href="#main-content" className="kp-skip-link">
          Skip to main content
        </a>
        <Script
          id="ld-json-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <KpScrollProgress />
        <KpCursor />
        <KpNav />
        {children}
        <KpFooter />
      </body>
    </html>
  )
}
