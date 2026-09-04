import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import './kp.css'
import KpCursor from '@/components/kp/KpCursor'
import KpNav from '@/components/kp/KpNav'
import KpFooter from '@/components/kp/KpFooter'
import KpScrollProgress from '@/components/kp/KpScrollProgress'
import { SITE } from '@/components/kp/data'

const inter = Inter({
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
  honorificSuffix: 'DBA, MCA',
  jobTitle: 'Sr. Staff Applied AI Engineer — Enterprise Applied AI',
  worksFor: {
    '@type': 'Organization',
    name: 'Rivian Automotive Inc.',
  },
  memberOf: [
    { '@type': 'Organization', name: 'IEEE', description: 'Senior Member' },
    { '@type': 'Organization', name: 'IET', description: 'Member' },
    { '@type': 'Organization', name: 'AAAI', description: 'Member' },
  ],
  description:
    'Artificial Intelligence 150 (AI150) by Constellation Research for 2025–2026 and 2026–2027. Senior Member IEEE and Member IET. Sr. Staff Applied AI Engineer for Enterprise Applied AI at Rivian. 69 Google Scholar citations, 70 ResearchGate citations, 19 indexed research works, 17+ years of global experience, and $125M+ in annual operational savings through Goodyear and Rivian digital workplace transformation.',
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
      name: 'IMET, USA',
      description: 'Doctor of Business Administration (DBA) in Computer Science (2023)',
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
    'Artificial Intelligence 150 (AI150) — 2025–2026 · Constellation Research Inc.',
    'Artificial Intelligence 150 (AI150) — 2026–2027 · Constellation Research Inc.',
    'BoxWorks Customer Award — Ecosystem Innovator (2025)',
    'Best Performing Project Award — L&T Infotech (2014)',
    'Valuable Contribution Award — L&T Infotech',
    'R&D Innovation Award — HCL Technologies (2011)',
    'Top 100 ADPList Mentor (2024)',
    'Excellence in Voluntary Activities Award — Goodyear',
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
    { media: '(prefers-color-scheme: light)', color: '#0F172A' },
    { media: '(prefers-color-scheme: dark)', color: '#0F172A' },
  ],
  /** Notched devices — full-bleed backgrounds respect safe areas in layout/CSS */
  viewportFit: 'cover',
}

const ogTitle = 'Dr. Kamal Pandey | Engineering Applied AI for Enterprise Transformation'
const ogDescription =
  'Sr. Staff Applied AI Engineer — Enterprise Applied AI @ Rivian. Artificial Intelligence 150 (AI150) by Constellation Research. IEEE Senior Member and IET Member. 69 Google Scholar citations, 70 ResearchGate citations, 19 indexed research works, and 17+ years across four continents.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: ogTitle,
  description: ogDescription,
  keywords: [
    'Dr. Kamal Pandey',
    'Agentic AI',
    'Agentic enterprise',
    'Rivian',
    'IEEE Senior Member',
    'IET Member',
    'AI150',
    'Synthetic Reasoning',
    'Vertex AI',
    'Amazon Bedrock',
  ],
  authors: [{ name: 'Dr. Kamal Pandey' }],
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    type: 'profile',
    url: SITE.domain,
    siteName: 'Dr. Kamal Pandey',
    locale: 'en_US',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: ogTitle }],
  },
  twitter: {
    card: 'summary_large_image',
    title: ogTitle,
    description: ogDescription,
    images: ['/opengraph-image'],
  },
  alternates: { canonical: SITE.domain },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
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
