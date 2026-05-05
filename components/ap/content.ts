/** Public profile data — links are official profiles only; no secrets in client bundle. */

const SCHOLAR_USER = 'rA_dpyAAAAAJ'

export function scholarCitation(citationForViewSuffix: string) {
  return `https://scholar.google.com/citations?view_op=view_citation&hl=en&user=${SCHOLAR_USER}&citation_for_view=${SCHOLAR_USER}:${citationForViewSuffix}`
}

export const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Publications', href: '#publications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Teaching', href: '#teaching' },
  { label: 'CV', href: '#cv' },
  { label: 'Contact', href: '#connect' },
] as const

export const SOCIALS = [
  { label: 'Google Scholar', href: `https://scholar.google.com/citations?user=${SCHOLAR_USER}&hl=en` },
  { label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Kamal-Pandey-21' },
  { label: 'ORCID', href: 'https://orcid.org/0009-0009-1669-4450' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kamalkpandey' },
  { label: 'GitHub', href: 'https://github.com/kamalkpandey' },
] as const

/** Indexed works (Google Scholar corpus, mirrored here with stable Scholar citation links where available). */
export const PAPERS = [
  {
    title: 'Autonomous ASN Label Compliance Using a Hybrid YOLOV8—Vision-Language Framework and Florence-2',
    venue: 'IEEE SoutheastCon',
    year: '2026',
    href: scholarCitation('LGlY6t8CeOMC'),
  },
  {
    title: 'The Dynamic Reasoning Trace: Achieving Verifiable Faithfulness through Agentic Self-Correction',
    venue: 'Int. J. Sci. Res. in Computer Science and Engineering',
    year: '2025',
    href: scholarCitation('0CzhzZyukY4C'),
  },
  {
    title: 'The Intelligent Workplace: AI and Automation Shaping the Future of Digital Workplaces',
    venue: 'Int. J. Sci. Res. in Computer Science and Engineering',
    year: '2025',
    href: scholarCitation('r_AWSJRzSzQC'),
  },
  {
    title: 'Artificial Intelligence (AI) in Electric Vehicle Ecosystems: Challenges, Opportunities, and Models for Accelerated Adoption',
    venue: 'Int. J. Engineering Applied Science and Management',
    year: '2025',
    href: scholarCitation('BJbdYPG6LGMC'),
  },
  {
    title: 'Artificial Intelligence and the Evolving Labor Market: A Comprehensive Review and Policy Roadmap',
    venue: 'Journal of Computer Science and Technology Studies',
    year: '2025',
    href: scholarCitation('wKETBy42zhYC'),
  },
  {
    title: 'AI Powered Transformation in the Modern Digital Workplace: Roadmap for the Future of Work and Ethical Consideration',
    venue: 'Int. J. Engineering Applied Science and Management',
    year: '2025',
    href: scholarCitation('BmWJbWwHJAwC'),
  },
  {
    title: 'AI Powered Transformation in the Modern Digital Workplace: Roadmap for the Future of Work and Ethical Consideration',
    venue: 'Int. J. Engineering Applied Science and Management (earlier issue)',
    year: '2023',
    href: scholarCitation('4X0JR2_MtJMC'),
  },
  {
    title: 'The Agentic Enterprise: A Strategic Analysis of Advanced Agentic Workflows and Collaborative AI',
    venue: '3rd Int. Conf. on Foundation and Large Language Models (FLLM)',
    year: '2025',
    href: scholarCitation('YTuZlYwrTOUC'),
  },
  {
    title: 'Synthetic Reasoning: Verifiable AI by Modular Program Synthesis',
    venue: 'World Journal of AI & Robotics Research',
    year: '2025',
    href: scholarCitation('PVgj2kMGcgYC'),
  },
  {
    title: 'The Convergence of Artificial Intelligence and Low-Code/No-Code Platforms: Evolution, Applications, and Benchmarks',
    venue: 'IEEE Access',
    year: '2025',
    href: scholarCitation('hGdtkIFZdKAC'),
  },
  {
    title: 'AI-Powered Low-Code App Development: A Benchmark Review for 2025 Digital Transformation',
    venue: 'Int. J. Engineering Applied Sciences and Technology',
    year: '2024',
    href: scholarCitation('t-hv7AR41mYC'),
  },
  {
    title: 'Framework for Next-Generation Predictive Maintenance of Software-Defined Vehicles Using Cloud, Edge Computing and Modern AI',
    venue: 'Research article (indexed on Google Scholar)',
    year: '2024',
    href: scholarCitation('tH6gc1N1XXoC'),
  },
  {
    title: 'The Future of Automotive Industry: AI and Cloud-Driven Digital Transformation in the US Region — A Holistic Examination',
    venue: 'Int. J. Engineering Applied Science and Management',
    year: '2024',
    href: scholarCitation('LO7wyVUgiFcC'),
  },
  {
    title: 'Designing Ethical AI for Development: Challenges and Opportunities in Humanitarian Engineering and Electric Vehicles, Designed for Adventure',
    venue: 'Scholar-indexed manuscript',
    year: '2025',
    href: scholarCitation('lvd772isFD0C'),
  },
  {
    title: 'Principles of Building AI Agents, 1st Edition: The Next Generation Foreword: The Next Generation is Here',
    venue: 'ResearchGate / RG DOI 10.13140/RG.2.2.27011.57120',
    year: '2025',
    href: scholarCitation('6yz0xqPARnAC'),
  },
  {
    title: 'An Architectural Framework for AI-Driven Intelligent Commerce: The Data Nervous System',
    venue: 'Jana Nexus: Journal of Computer Science',
    year: '2025',
    href: scholarCitation('otzGkya1bYkC'),
  },
  {
    title: 'Journal contribution — Journal of Applied Mechanics Reviews and Reports',
    venue: 'Scholar-indexed entry',
    year: '2025',
    href: scholarCitation('RJOyoaXV5v8C'),
  },
] as const

export const COMPETENCIES = [
  {
    title: 'Enterprise AI architecture',
    text: 'Resilient, cloud-native platforms integrating LLMs and agentic AI into manufacturing and operational workflows — governance, security, and scale.',
  },
  {
    title: 'Cloud & digital strategy',
    text: 'Multi-cloud transformation, workplace modernization, rationalized tooling, and sustainable operating models across Google Cloud, Microsoft 365, and Azure.',
  },
  {
    title: 'SDV & predictive systems',
    text: 'Software-defined vehicle intelligence, edge and cloud patterns, digital twin concepts, and predictive maintenance frameworks for automotive programs.',
  },
] as const

export const PROJECTS = [
  {
    tag: 'Research monograph',
    title: 'AI-2050: Visions of Future',
    desc: 'Research monograph on advanced AI and global sustainability metrics — long-horizon systems thinking for policy and industry.',
    href: '#publications',
  },
  {
    tag: 'Platform',
    title: 'SAInexus innovation stack',
    desc: 'Autonomous intelligence and multi-cloud orchestration themes; global transformation architecture for enterprise signal ingestion and automation.',
    href: 'https://www.linkedin.com/in/kamalkpandey',
    external: true,
  },
  {
    tag: 'Startup',
    title: 'Kentron AI — founding CTO',
    desc: 'Custom enterprise AI applications, intelligent systems at scale, and autonomous innovation platforms — from zero to production patterns.',
    href: 'https://www.linkedin.com/in/kamalkpandey',
    external: true,
  },
  {
    tag: 'Spotlight',
    title: 'Verifiable reasoning & agentic self-correction',
    desc: 'Dynamic reasoning traces for faithfulness under audit — bridge from publication to Rivian-scale delivery.',
    href: scholarCitation('0CzhzZyukY4C'),
    external: true,
  },
  {
    tag: 'Research',
    title: 'Synthetic reasoning by modular program synthesis',
    desc: 'Structured, verifiable AI through compositional programs.',
    href: scholarCitation('PVgj2kMGcgYC'),
    external: true,
  },
  {
    tag: 'Computer vision',
    title: 'Hybrid YOLOv8 — vision-language ASN label compliance',
    desc: 'IEEE SoutheastCon track — Florence-2 and hybrid perception for regulated labeling workflows.',
    href: scholarCitation('LGlY6t8CeOMC'),
    external: true,
  },
  {
    tag: 'Profile',
    title: 'ORCID researcher record',
    desc: 'Persistent identifier for works and affiliations.',
    href: 'https://orcid.org/0009-0009-1669-4450',
    external: true,
  },
] as const

export const HONORS = [
  {
    title: 'Artificial Intelligence 150 (AI150)',
    org: 'Global AI influencers',
    year: '2025–2026',
    note: 'Named among global voices shaping the responsible future of AI.',
  },
  {
    title: 'National Geomatics Award',
    org: 'Indian Society of Geomatics (ISRO Campus)',
    year: '2022',
    note: 'Recognition in geomatics and spatial / engineering practice.',
  },
  {
    title: 'Senior Member grade',
    org: 'IEEE & IET',
    year: '—',
    note: 'Professional recognition for sustained contribution, publications, and technical leadership.',
  },
  {
    title: 'Most Valuable Resource Award',
    org: 'L&T Infotech',
    year: '2012',
    note: 'Consulting and delivery excellence in global programs.',
  },
  {
    title: 'Delivery R&R — Innovation Award',
    org: 'HCL Technologies',
    year: '2011',
    note: 'Innovation on SharePoint 2010, K2, and Dynamics CRM for rapid business value.',
  },
  {
    title: 'SharePoint 2010 SME Award',
    org: 'HCL Technologies',
    year: '2011',
    note: 'Subject-matter leadership in enterprise collaboration.',
  },
] as const

export const EXPERIENCE = [
  {
    role: 'Solutions Architect — Cloud, AI, RPA, digital workplace & EX',
    org: 'Rivian',
    window: 'Jul 2022 — Present',
    place: 'Irvine, California',
    bullets: [
      'Architecture for cloud, AI, digital workplace, RPA, and low-code — GenAI, Google Workspace & Vertex AI, Microsoft 365, SharePoint, Azure, Power Platform.',
      'Signature programs: DocuSign / Box, Workday & ICMS integrations, IronCloud migrations, enterprise content, agile delivery, CI/CD standardization, risk & ethics alignment with security partners.',
    ],
  },
  {
    role: 'Tech Lead Staff Engineer — digital workplace, automation, ECMS, collaboration',
    org: 'Rivian',
    window: 'Mar 2021 — Jun 2022',
    place: 'United States',
    bullets: [
      '20+ custom apps and 20+ Power Platform solutions; SharePoint hub architecture across 20+ business units; 50+ SPFx solutions; major cost takeout via ECM rationalization and subscription replacement.',
    ],
  },
  {
    role: 'Founder & CTO',
    org: 'SAInexus',
    window: 'Ongoing',
    place: 'Global operations',
    bullets: [
      'Transformation architecture for enterprises including Samsung, Goodyear, and Merck; agentic AI literacy and high-stakes delivery patterns.',
    ],
  },
  {
    role: 'Founding CTO',
    org: 'Kentron AI',
    window: '—',
    place: '—',
    bullets: [
      'Custom AI application solutions, enterprise-scale intelligent systems, and autonomous innovation platforms (per public biography).',
    ],
  },
  {
    role: 'Senior Consultant — blockchain & cloud solutions',
    org: 'Samsung SDS America',
    window: 'Nov 2019 — Feb 2021',
    place: 'United States',
    bullets: [
      'Samsung Cloud & Knox-aligned architectures; AWS cost and DevOps improvements; migration, DR, governance, and scaling patterns with measurable savings.',
    ],
  },
  {
    role: 'Solution architect — modern workplace, Power Platform, custom apps',
    org: 'Goodyear',
    window: 'Sep 2017 — Oct 2019',
    place: 'Global',
    bullets: [
      'Microsoft 365, SharePoint, Yammer, Power Platform at scale — 75k+ users; major ECM consolidation; 50+ portals and 300+ automations; leadership portal and HR portal highlights.',
    ],
  },
  {
    role: 'Technical architect — SharePoint, Microsoft 365, Azure',
    org: 'Goodyear',
    window: 'Jul 2015 — Oct 2017',
    place: 'North America retail & enterprise',
    bullets: [
      'Retail modernization for 700+ stores; cloud migrations; offshore partnerships (TCS, DXT, Capgemini).',
    ],
  },
  {
    role: 'Technical lead — .NET, SharePoint',
    org: 'Larsen & Toubro Infotech (LTI)',
    window: 'Sep 2013 — Jun 2015',
    place: 'Media & entertainment clients',
    bullets: [
      'HBO, Viacom, WSP, Warner Bros. — RFP wins, POCs, 20+ SharePoint farms, 500+ site migrations, ECMS strategy.',
    ],
  },
  {
    role: 'Senior lead software engineer',
    org: 'LTI',
    window: 'Mar 2012 — Sep 2013',
    place: '—',
    bullets: ['SharePoint, .NET, C#, SQL — delivery lead for enterprise programs.'],
  },
  {
    role: 'Lead software engineer',
    org: 'HCL Enterprise',
    window: 'Mar 2010 — Dec 2011',
    place: 'Australia & Singapore',
    bullets: ['Banking & financial services — SharePoint, C#, Power BI, SQL Server.'],
  },
  {
    role: 'Senior software engineer',
    org: 'IBM',
    window: 'Jan 2008 — Feb 2010',
    place: '—',
    bullets: ['Engineering and technical delivery at scale.'],
  },
] as const

export const CERTIFICATIONS = [
  { name: 'MCSE: Productivity Solutions Expert', issuer: 'Microsoft', year: '2017' },
  { name: 'TOGAF 9 Foundation', issuer: 'The Open Group', year: '2017' },
  { name: 'MCTS — SharePoint Developer 2016', issuer: 'Microsoft', year: '2016' },
  { name: 'Nintex Workflow Admin Master', issuer: 'Nintex', year: '2016' },
  { name: 'Scrum Fundamentals Certified', issuer: 'Scrum Alliance', year: '2015' },
  { name: 'MCSD — Web Applications', issuer: 'Microsoft', year: '2013' },
  { name: 'ITIL V4 Foundation', issuer: 'EXIN', year: '2012' },
  { name: 'MCSD', issuer: 'Microsoft', year: '2011' },
  { name: 'MCITP — SharePoint 2010', issuer: 'Microsoft', year: '2010' },
  { name: 'Microsoft Certified Professional', issuer: 'Microsoft', year: '2009' },
] as const

export const LANGUAGES = [
  { lang: 'English', level: 'Professional / native or bilingual' },
  { lang: 'Hindi', level: 'Native or bilingual' },
  { lang: 'French', level: 'Limited working proficiency' },
] as const

export const PORTFOLIO_PDF =
  'https://drive.google.com/file/d/1MgvnMC-dLEUwewv0rvUzd5CC49Tnwfnf/view?usp=sharing'

export const EMAIL = 'kamalkismca@gmail.com'
