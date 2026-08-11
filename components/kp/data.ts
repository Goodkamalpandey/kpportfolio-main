/** Site config + re-exports from verified corpus. */

import { PUBLICATIONS_FULL, SCHOLAR_WORKS_BY_PUBDATE, HERO_STATS, CAREER_ROLES } from './verifiedContent'

export const SITE = {
  name: 'Dr. Kamal Pandey',
  nameWithCredentials: 'Dr. Kamal Pandey, PhD (in progress), DBA (Doctor of Business Administration), MCA, BCA',
  tagline: 'Architecting the Future of Agentic Enterprise',
  heroSubheadline:
    '17 years. Four continents. $100M+ in measured annual operational impact from AI systems in production. Turning frontier AI research into systems that survive contact with reality at industrial scale.',
  position:
    'Principal AI Architect — Applied & Agentic AI @ Rivian Automotive Inc. · Orange County / Los Angeles, CA',
  email: 'kamalkismca@gmail.com',
  /** Creator page — https://topmate.io/kamalpandey/ */
  topmate: 'https://topmate.io/kamalpandey/',
  linkedin: 'https://www.linkedin.com/in/kamalkpandey/',
  github: 'https://github.com/Goodkamalpandey',
  scholar: 'https://scholar.google.com/citations?user=rA_dpyAAAAAJ&hl=en&authuser=1',
  /** All works on Scholar, newest first — same as profile “Sort by year”. */
  scholarWorksByPubDate: SCHOLAR_WORKS_BY_PUBDATE,
  researchgate: 'https://www.researchgate.net/profile/Kamal-Pandey-21',
  medium: 'https://medium.com/@kamalkismca',
  orcid: 'https://orcid.org/0009-0009-1669-4450',
  authorea: 'https://www.authorea.com/users/942841-dr-kamal-pandey',
  constellation: 'https://www.constellationr.com/user/dr-kamal-pandey',
  domain: 'https://www.drkamalpandey.com',
  /** Hero portrait — `public/kp/…` (e.g. conference stage). */
  heroPortraitSrc: '/kp/kamal-speaking-ai4-2025.png',
  heroPortraitAlt: 'Dr. Kamal Pandey speaking at Ai4 2025',
} as const

/** Hero identity strip — structured for editorial hierarchy (credentials → role → place → honors). */
export const HERO_IDENTITY = {
  displayName: 'Dr. Kamal Pandey',
  degrees: 'PhD (in progress), DBA (Doctor of Business Administration), MCA, BCA',
  roleTitle: 'Principal AI Architect — Applied & Agentic AI',
  employer: 'Rivian Automotive Inc.',
  location: 'Orange County / Los Angeles, CA',
  memberships: ['Senior Member IEEE', 'Fellow IET', 'Member AAAI'] as const,
  /** Full list — Recognition page + schema. */
  recognition: [
    'AI150 Global AI Influencer 2025–2026 & 2026–2027',
    'Global AI Leader 2025',
    'Top 50 AI Researcher (Stanford recognition)',
  ] as const,
  /** Hero shows one primary honor; remainder live on /recognition. */
  heroPrimaryRecognition: 'AI150 Global AI Influencer 2025–2026 & 2026–2027',
} as const

export const ABOUT_P1 =
  'Dr. Kamal Pandey has spent 17 years at the exact intersection where AI research becomes industrial reality. At Rivian, he serves as Principal AI Architect — Applied & Agentic AI — leading the design and deployment of advanced agentic systems using Amazon Bedrock, Vertex AI, PyTorch, and LangChain that are driving $100M+ in measured annual operational impact from AI systems. He is the technical architect for the Rivian–Volkswagen JV digital transformation, building the Foundry-style AI infrastructure for next-generation EV development.'

export const ABOUT_P2 =
  'His research advances some of the hardest problems in AI: making reasoning verifiable through Agentic Self-Correction, resolving the LLM faithfulness gap through Synthetic Reasoning and Modular Program Synthesis, and advancing human-AI collaboration frameworks for the multimodal LLM era. With 100+ citations, 25+ peer-reviewed publications (2023–2026), and papers including IEEE SoutheastCon, IEEE Access, and the World Journal of AI & Robotics Research, his research directly informs the safety and reliability of every production system he builds at scale.'

export const ABOUT_P3 =
  'Named to the AI150 Global Influencer list 2025–26, recognized as a Top 50 AI Researcher by Stanford University, elected Senior Member of IEEE and Fellow of IET, and honored as Global AI Leader 2025, Dr. Pandey brings what almost no one else does: the rigor of an active peer-reviewed researcher, the delivery record of an enterprise architect across four continents (Asia, North America, Europe, and Australia), and the technical depth of someone who has coded, shipped, and scaled AI systems from first principles across Rivian, Samsung, Goodyear, and the Fortune 100.'

/** Two-line hero contact headline (Section K). */
export const CONTACT_HEADLINE_LINES = ["Let's build something", "the world hasn't seen yet."] as const

export const CONTACT_SUBTEXT =
  'Available for strategic AI consulting, architecture advisory, research collaboration, speaking engagements, and peer review.'

/** Author pages on Amazon — fixed URLs only. */
export const BOOKS = [
  {
    kind: 'Monograph',
    title: 'AI-2050: Visions of Future Sustainability',
    blurb:
      'The long arc of advanced intelligence — sustainability, governance, and how societies navigate the decades ahead.',
    href: 'https://www.amazon.com/AI-2050-Visions-Future-Sustainability/dp/B0FV3W41W2',
  },
  {
    kind: 'Enterprise architecture',
    title: 'Agentic Enterprise Architecture: Structuring Augmentation',
    blurb:
      'How to structure agentic AI inside large organizations — augmentation patterns, guardrails, and delivery at enterprise scale.',
    href: 'https://www.amazon.com/Agentic-Enterprise-Architecture-Structuring-Augmentation/dp/B0GLHXDVK1',
  },
] as const

export const PUBLICATIONS_HOME = PUBLICATIONS_FULL

export {
  PUBLICATIONS_FULL,
  PUBLICATIONS_MOVES_FIELD,
  SCHOLAR_WORKS_BY_PUBDATE,
  HERO_STATS,
  HEADLINE_IMPACT_STATS,
  HOME_IMPACT_STATS,
  CAREER_ROLES,
  INITIATIVES,
  EDUCATION,
  CERTIFICATIONS,
  SKILLS_BLOCKS,
  GLOBAL_RECOGNITION,
  SPEAKING_DETAIL,
  EMPLOYER_RECOGNITION,
} from './verifiedContent'

export const EXPERTISE_CELLS = [
  {
    n: '01',
    icon: 'bot' as const,
    title: 'Agentic AI architecture',
    body: 'Multi-agent systems with self-correction, tool use, and verifiable reasoning — Bedrock, Vertex AI, LangChain, from paper to production.',
  },
  {
    n: '02',
    icon: 'cloud' as const,
    title: 'Enterprise cloud & MLOps',
    body: 'Multi-cloud transformation, Terraform, Kubernetes, CI/CD — AWS, Azure, GCP at Rivian, Samsung, and Fortune 100 scale.',
  },
  {
    n: '03',
    icon: 'car' as const,
    title: 'Software-defined vehicles & OEM',
    body: 'EV ecosystem AI, computer vision defect detection, digital twins, and intelligent automation for next-generation programs.',
  },
  {
    n: '04',
    icon: 'network' as const,
    title: 'LLM systems & synthetic reasoning',
    body: 'Synthetic reasoning, modular program synthesis, RAG, and faithful computation beyond post-hoc rationalization.',
  },
  {
    n: '05',
    icon: 'scale' as const,
    title: 'AI governance, ethics & standards',
    body: 'IEEE Senior Member; ISO 42001, NIST RMF, SAIL lifecycle; published on ethical AI in EV and humanitarian contexts.',
  },
  {
    n: '06',
    icon: 'usersRound' as const,
    title: 'Technical leadership at scale',
    body: 'Design Thinking, global delivery, platform engineering, and stakeholder alignment across Asia, North America, Europe, and Australia.',
  },
] as const

export const STATS = HERO_STATS

/**
 * Selected work — Problem → Approach → Outcome.
 * Metrics drawn from CAREER_ROLES (self-reported production outcomes). Featured card spans two columns.
 */
export const CASE_STUDIES = [
  {
    featured: true,
    org: 'Rivian',
    domain: 'Agentic AI · Compliance',
    title: 'Cognitive automation for compliance & legal review',
    problem:
      'Compliance and legal review ran on manual document handling — 200+ processes, roughly 15 days per cycle.',
    approach:
      'Built agentic LLM pipelines (Amazon Bedrock, CrewAI, Google ADK, LangChain) for extraction, summarization, and Q&A, turned into a repeatable enterprise capability.',
    metric: '~15 days → <30 min',
    metricLabel: 'Cycle time · 200+ processes automated (career record)',
    href: '/experience',
  },
  {
    featured: false,
    org: 'Rivian',
    domain: 'Computer Vision · Manufacturing',
    title: 'Production defect detection',
    problem:
      'Manual inspection was slow and inconsistent, capping line throughput and letting defects reach later stages.',
    approach:
      'Architected and personally built a computer-vision detection system wired into the production line, on fault-tolerant infra (Kubernetes/Terraform).',
    metric: '~40% → 97%',
    metricLabel: 'Detection accuracy (career record)',
    href: '/experience',
  },
  {
    featured: false,
    org: 'Goodyear',
    domain: 'Conversational AI · Revenue',
    title: 'Customer-facing sales assistant',
    problem:
      'High-intent visitors lacked guided, real-time answers at the exact moment of the purchase decision.',
    approach:
      'Personally designed and built a customer-facing AI chatbot and its backend APIs, integrated into the commerce funnel with conversion tracking.',
    metric: '~$2.3M',
    metricLabel: 'Attributed revenue · ~17% conversion lift (career record)',
    href: '/experience',
  },
] as const

/** Legacy `/experience` page — condensed. */
export const EXPERIENCE = CAREER_ROLES.map((c) => ({
  window: c.period,
  role: c.roles[0]?.title ?? c.org,
  org: `${c.org} · ${c.location}`,
  bullets: [...c.bullets],
}))

export const RESEARCH_PAGE_PAPERS = [...PUBLICATIONS_FULL]
