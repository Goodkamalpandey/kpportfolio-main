/** Site config + re-exports from verified corpus. */

import { PUBLICATIONS_FULL, SCHOLAR_WORKS_BY_PUBDATE, HERO_STATS, CAREER_ROLES } from './verifiedContent'

export const SITE = {
  name: 'Dr. Kamal Pandey',
  nameWithCredentials: 'Dr. Kamal Pandey, PhD (in progress), DBA (Doctor of Business Administration), MCA, BCA',
  tagline: 'Architecting the Future of Agentic Enterprise',
  heroSubheadline:
    'Distinguished Engineer and Chief Architect for Applied & Agentic AI. 17 years. Four continents. $100M+ in measured annual operational impact from AI systems in production — research that ships at industrial scale.',
  position:
    'Distinguished Engineer — Chief Architect, Applied & Agentic AI @ Rivian Automotive Inc. · Orange County / Los Angeles, CA',
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
  roleTitle: 'Distinguished Engineer — Chief Architect, Applied & Agentic AI',
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
  'Dr. Kamal Pandey has spent 17 years at the exact intersection where AI research becomes industrial reality. As Distinguished Engineer — Chief Architect, Applied & Agentic AI at Rivian, he leads the design and deployment of advanced agentic systems using Amazon Bedrock, Vertex AI, PyTorch, and LangChain that are driving $100M+ in measured annual operational impact from AI systems. He is the technical architect for the Rivian–Volkswagen JV digital transformation, building the Foundry-style AI infrastructure for next-generation EV development.'

export const ABOUT_P2 =
  'His research advances some of the hardest problems in AI: making reasoning verifiable through Agentic Self-Correction, resolving the LLM faithfulness gap through Synthetic Reasoning and Modular Program Synthesis, and advancing human-AI collaboration frameworks for the multimodal LLM era. With 100+ citations, 25+ peer-reviewed publications (2023–2026), and papers including IEEE SoutheastCon, IEEE Access, and the World Journal of AI & Robotics Research, his research directly informs the safety and reliability of every production system he builds at scale.'

export const ABOUT_P3 =
  'Named to the AI150 Global Influencer list 2025–26, recognized as a Top 50 AI Researcher by Stanford University, elected Senior Member of IEEE and Fellow of IET, and honored as Global AI Leader 2025, Dr. Pandey operates at the executive–technical seam: peer-reviewed research rigor, enterprise architecture leadership across four continents (Asia, North America, Europe, and Australia), and hands-on delivery of AI systems from first principles across Rivian, Samsung, Goodyear, and the Fortune 100.'

/** Two-line hero contact headline (Section K). */
export const CONTACT_HEADLINE_LINES = ["Let's build something", "the world hasn't seen yet."] as const

export const CONTACT_SUBTEXT =
  'Engagements for executive teams: agentic AI strategy, chief-architect advisory, research-to-production governance, speaking, and board-level technical partnership.'

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

/** Work section — intelligence-layer platforms (KPI figures are design targets until production-validated). */
export const WORK_VISION = {
  eyebrow: 'Applied AI platforms',
  title: 'Building the Intelligence Layer for the AI-Native Enterprise',
  lead: 'I design AI platforms that turn complexity into momentum.',
  body: 'AISDLC, CLUE AI, and the Rivian Agentic Platform form one connected mission: governed, traceable, scalable enterprise intelligence — where AI understands context, produces real work products, validates quality, and keeps humans in control of consequential decisions.',
  principles: [
    { label: 'Context-first', detail: 'Not prompt-first — assemble the business and technical context the work requires.' },
    { label: 'Work products', detail: 'Architecture packages, investigation summaries, decision records — not chat demos.' },
    { label: 'Governance in-product', detail: 'Approvals, audit trails, versioning, and validation gates are first-class.' },
    { label: 'Trust as engineering', detail: 'Completeness, faithfulness, freshness, and precision as design criteria.' },
  ],
} as const

export const APPLIED_AI_PLATFORMS = [
  {
    n: '01',
    icon: 'layers2' as const,
    org: 'Rivian',
    domain: 'AI Software Delivery',
    name: 'AISDLC',
    tagline: 'AI-powered software delivery with governance built in',
    role: 'Solution Architect',
    problem:
      'Meaning fractures between requirement and implementation — designs drift, reviews arrive late, and teams duplicate work.',
    solution:
      'A coordinated multi-agent lifecycle that turns requirements into architecture, design, validation, and delivery-ready artifacts with approvals, version history, and end-to-end traceability.',
    contribution:
      'Shaped platform architecture, owned key intelligence and validation capabilities, contributed to gate-control logic, and defined how architecture decisions become traceable implementation work.',
    metric: '8-day',
    metricLabel: 'Target PRD → engineering cycle (14-day max)',
    targets: [
      '99.5% orchestration availability (monthly target)',
      '85%+ completeness · 90%+ precision on designated outputs',
      'Usable architecture packages in ≥2 of 3 pilot projects',
    ],
    href: '/#contact',
  },
  {
    n: '02',
    icon: 'microscope' as const,
    org: 'Rivian',
    domain: 'Product Integrity · Defense',
    name: 'CLUE AI',
    tagline: 'Turning fragmented case intelligence into action',
    role: 'Principal / Lead Architect',
    problem:
      'Investigators and legal teams assemble a complete picture from many systems before they can act — slow, repetitive, hard to scale, and inconsistent.',
    solution:
      'A governed retrieval and synthesis platform for citation-backed summaries, report generation, vehicle/case-scoped evidence, audit trails, and human confirmation before consequential updates.',
    contribution:
      'Shaped and stress-tested the architecture; established secure retrieval, AI analysis patterns, and human-reviewed workflow automation for high-stakes product-integrity work.',
    metric: '<5 min',
    metricLabel: 'Target VIN research (from 2–4 hours)',
    targets: [
      'Report prep target: 4–8 hrs → ~30 min',
      'Capacity target: ~33 → 200+ VINs / day',
      '>$1.1M modeled annualized value opportunity',
    ],
    href: '/#contact',
  },
  {
    n: '03',
    icon: 'network' as const,
    org: 'Rivian',
    domain: 'Agentic Runtime',
    name: 'Rivian Agentic Platform',
    tagline: 'The foundation for scalable, governable AI agents',
    role: 'Applied AI Agentic Solutions Architect',
    problem:
      'One useful assistant is easy; a family of reliable agents is hard — lost context, stale answers, unbounded loops, and inconsistent behavior across environments.',
    solution:
      'A control plane for agentic work: event-driven orchestration, explicit handoffs, bounded validation loops, versioned outputs, concurrency controls, and operational observability.',
    contribution:
      'Contributed to platform architecture, agent design, deployment coordination, access and infrastructure planning, and the control patterns that make agentic systems governable at enterprise scale.',
    metric: '5 agents',
    metricLabel: 'Target coordinated stages · ≤3 validation cycles / gate',
    targets: [
      '48-hour max for bounded validation workflows',
      'Phase 1: up to 10 concurrent pipeline instances',
      'Freshness-stamped, versioned, traceable outputs',
    ],
    href: '/#contact',
  },
] as const

/** @deprecated Prefer APPLIED_AI_PLATFORMS — kept for any legacy imports. */
export const CASE_STUDIES = APPLIED_AI_PLATFORMS.map((p) => ({
  featured: p.n === '01',
  org: p.org,
  domain: p.domain,
  title: `${p.name}: ${p.tagline}`,
  problem: p.problem,
  approach: p.solution,
  metric: p.metric,
  metricLabel: p.metricLabel,
  href: p.href,
}))

/** Legacy `/experience` page — condensed. */
export const EXPERIENCE = CAREER_ROLES.map((c) => ({
  window: c.period,
  role: c.roles[0]?.title ?? c.org,
  org: `${c.org} · ${c.location}`,
  bullets: [...c.bullets],
}))

export const RESEARCH_PAGE_PAPERS = [...PUBLICATIONS_FULL]
