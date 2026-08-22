/** Site config + re-exports from verified corpus. */

import { PUBLICATIONS_FULL, SCHOLAR_WORKS_BY_PUBDATE, HERO_STATS, CAREER_ROLES } from './verifiedContent'

export const SITE = {
  name: 'Dr. Kamal Pandey',
  nameWithCredentials: 'Dr. Kamal Pandey, Ph.D. in Computer Science (AI/ML), DBA (Doctor of Business Administration), MCA, BCA',
  tagline: 'Architecting the Future of Agentic Enterprise',
  heroSubheadline:
    'Distinguished Engineer and Chief Architect for Applied & Agentic AI. 17 years. Four continents. $100M+ in measured annual operational impact from AI systems in production — research that ships at industrial scale.',
  position:
    'Distinguished Engineer — Architect, Applied & Agentic AI @ Rivian Automotive Inc. · Orange County / Los Angeles, CA',
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
  degrees: 'Ph.D. in Computer Science (AI/ML -In Progress), DBA (Doctor of Business Administration), MCA, BCA',
  roleTitle: 'Sr Staff Software — Architect, Applied & Agentic AI',
  employer: 'Rivian Automotive Inc.',
  location: 'Orange County / Los Angeles, CA',
  memberships: ['Senior Member IEEE', 'Senior Member IET', 'Member AAAI'] as const,
  /** Full list — Recognition page + schema. */
  recognition: [
    'AI150 Global AI Influencer 2026–2027',
    'Global AI Leader 2025-2026',
    'Senior Member of IEEE (Senior Member)',
    'Member of AAAI (Member)',
    'IEEE SoutheastCon Best Paper Award 2025',
    'IEEE Access Best Paper Award 2025',
    'Box Work (AI) Award 2025',   
    'Top 50 AI Researcher (Stanford recognition)',
    'Top 100 AI Reviewer (IEEE)',
    'Top 100 AI Reviewer (ACM)',
   
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
  body: "I'm building a new operating model for software, product, and enterprise decision-making—one where AI understands context, reasons across fragmented information, validates its work, and keeps humans in control of the decisions that matter. The portfolio spans AISDLC, CLUE AI, and the Rivian Agentic Platform through manufacturing intelligence, computer vision, quality platforms, supply-chain automation, and in-vehicle voice.",
  closing:
    'The future of AI is not autonomous output. It is trusted intelligence—grounded in context, bounded by controls, and designed to move real work forward.',
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
    tier: 'flagship' as const,
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
    tier: 'flagship' as const,
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
    tier: 'flagship' as const,
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
  {
    n: '04',
    tier: 'portfolio' as const,
    icon: 'cpu' as const,
    org: 'Rivian',
    domain: 'Manufacturing Intelligence',
    name: 'Weld PDM AI',
    tagline: 'From reactive alerts to predictive weld intelligence',
    role: 'Architect & Technical Lead',
    problem:
      'Weld monitoring was reactive and fragmented — limited visibility into wire-feed degradation, clogged liners, arc instability, and process drift until failure made the issue visible.',
    solution:
      'Governed monitoring of weld trends, threshold alerts, fault visibility, and maintenance tracking — with a path to AI anomaly detection, diagnostics, and quality forecasting.',
    contribution:
      'Shaped data ingestion, platform architecture, machine-inventory mapping, analytical data design, dashboard direction, and the roadmap to AI-enabled weld diagnostics.',
    metric: '30–50%',
    metricLabel: 'Target downtime reduction (400+ min / month)',
    targets: [
      'MVP surfaced detections including a feeder-liner defect',
      'Target MTTA: ~45 min → <1 min',
      'Target: 100% virtual inspection · up to 30% OpEx reduction',
    ],
    href: '/#contact',
  },
  {
    n: '05',
    tier: 'portfolio' as const,
    icon: 'fileText' as const,
    org: 'Rivian',
    domain: 'Perceived Quality',
    name: 'PQ Apps',
    tagline: 'The digital source of truth for perceived quality',
    role: 'Technical Lead & Solution Architect',
    problem:
      'Excel- and email-based design-quality workflows do not scale — evidence disconnects from owners, approvals, and decisions.',
    solution:
      'A secure web source of truth for interface records, measurements, images, issues, actions, approvals, and 2D/3D section-map context in one traceable workflow.',
    contribution:
      'Shaped application architecture, identity and access, cloud environment, security direction, and the technical ownership model for the platform.',
    metric: '~5,500 hrs',
    metricLabel: 'Target annual capacity release · ~$1.2M modeled avoidance',
    targets: [
      'MVP live with high-accuracy legacy migration',
      'Target: 35% faster design cycle · 40% less manual effort',
    ],
    href: '/#contact',
  },
  {
    n: '06',
    tier: 'portfolio' as const,
    icon: 'cloud' as const,
    org: 'Rivian',
    domain: 'Manufacturing Data',
    name: 'ShimLog AI',
    tagline: 'AI-ready foundation for manufacturing fixture intelligence',
    role: 'Solution Architect & Technical Lead',
    problem:
      'Engineers rely on static 2D snapshots and disconnected historical files — hard to compare versions, validate entries, or trace decisions.',
    solution:
      'Interactive, searchable, version-aware 3D fixture experience with shim/spacer data, validation rules, history, file management, and reporting — a knowledge layer for future AI assistants.',
    contribution:
      'Shaped migration and exit strategy, requirements, solution design, architecture, integrations, knowledge transfer, and go-live readiness.',
    metric: '10–15%',
    metricLabel: 'Target productivity lift for designated workflows',
    targets: [
      'Production launch with release, smoke, integration, and access checks',
      'Foundation for AI-assisted troubleshooting and fixture-change analysis',
    ],
    href: '/#contact',
  },
  {
    n: '07',
    tier: 'portfolio' as const,
    icon: 'car' as const,
    org: 'Rivian',
    domain: 'Computer Vision · Quality',
    name: 'Paint Defect Detection AI',
    tagline: 'Computer vision for consistent surface quality',
    role: 'AI Strategy & Use-Case Architecture',
    problem:
      'Manual paint inspection is subjective, inconsistent, and hard to scale — defects are missed and recurring patterns stay invisible.',
    solution:
      'Controlled imaging plus computer vision to classify and trend paint conditions (blemishes, inclusions, thin paint), supporting review, analytics, and repair workflows with humans in the loop.',
    contribution:
      'Contributed AI strategy and use-case architecture for vision-based quality inspection and how visual intelligence supports manufacturing decisions.',
    metric: '~$1.5M',
    metricLabel: 'Modeled annual value · 40% inspection-time target',
    targets: [
      'Target first-time-yield improvement: 15%',
      'Business-case model: potential two-year payback',
    ],
    href: '/#contact',
  },
  {
    n: '08',
    tier: 'portfolio' as const,
    icon: 'shoppingBag' as const,
    org: 'Rivian',
    domain: 'Supply Chain',
    name: 'Supply Chain Automation',
    tagline: 'From manual reporting to resilient operations',
    role: 'Solution Design & AI Roadmap Author',
    problem:
      'Manual SAP reporting consumes expert time, creates error risk, and delays response to shortages, inventory shifts, and supplier risk.',
    solution:
      'Governed automation for recurring SAP reports, scheduling, monitoring, and exceptions — with a roadmap to forecasting, supplier-risk monitoring, and intelligent supplier communications.',
    contribution:
      'Authored the reporting solution design and the broader enterprise AI roadmap connecting automation, operational intelligence, and agent-based decision support.',
    metric: '~$2.5k/wk',
    metricLabel: 'Modeled automation opportunity (defined reporting workflow)',
    targets: [
      'Target: 10%+ OEE · 15% lower AI-detected warranty costs',
      'Target: 25%+ critical-asset downtime reduction · 300%+ 3-yr modeled return',
    ],
    href: '/#contact',
  },
  {
    n: '09',
    tier: 'portfolio' as const,
    icon: 'bot' as const,
    org: 'Rivian',
    domain: 'Software-Defined Vehicle',
    name: 'Rivian Voice Assist',
    tagline: 'A natural interface for the software-defined vehicle',
    role: 'Architect',
    problem:
      'As vehicles grow more capable, finding controls and learning features becomes complex — drivers need safer, hands-free interaction without diverting attention from the road.',
    solution:
      'Speech recognition, NLU, retrieval-grounded Owner’s Guide knowledge, voice responses, and deep vehicle integration — with safety guardrails, privacy controls, and confirmation for higher-risk actions.',
    contribution:
      'Architected design and delivery across AI orchestration, vehicle-system integration, platform connectivity, UX flows, and production-grade release requirements.',
    metric: 'OTA live',
    metricLabel: 'In-vehicle experience via over-the-air release',
    targets: [
      'Target: 30% of drivers use ≥1× per trip within 6 months',
      'Target: 50% prefer voice for some interactions · NPS 90',
    ],
    href: '/#contact',
  },
] as const

export const WORK_FLAGSHIP = APPLIED_AI_PLATFORMS.filter((p) => p.tier === 'flagship')
export const WORK_PORTFOLIO = APPLIED_AI_PLATFORMS.filter((p) => p.tier === 'portfolio')

/** @deprecated Prefer APPLIED_AI_PLATFORMS — kept for any legacy imports. */
export const CASE_STUDIES = APPLIED_AI_PLATFORMS.map((p) => ({
  featured: p.tier === 'flagship',
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
