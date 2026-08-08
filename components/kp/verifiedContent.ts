/** Verified publications, career, awards, skills — sourced from brief. Public URLs only. */

const RG = 'https://www.researchgate.net/profile/Kamal-Pandey-21'
const SCHOLAR_USER_ID = 'rA_dpyAAAAAJ'
const SCHOLAR = `https://scholar.google.com/citations?user=${SCHOLAR_USER_ID}&hl=en`
/** Full profile list sorted by publication date (matches Scholar “Sort by year”). */
export const SCHOLAR_WORKS_BY_PUBDATE = `https://scholar.google.com/citations?view_op=list_works&hl=en&user=${SCHOLAR_USER_ID}&sortby=pubdate`
const AUTHOREA = 'https://www.authorea.com/users/942841-dr-kamal-pandey'

/** Stable Google Scholar citation record URL (works when venue PDF is unavailable). */
function scholarCitationHref(citationSuffix: string) {
  return `https://scholar.google.com/citations?view_op=view_citation&hl=en&user=${SCHOLAR_USER_ID}&citation_for_view=${SCHOLAR_USER_ID}:${citationSuffix}`
}
/** IEEE Xplore — SoutheastCon 2026 (official record). */
const IEEE_ASN_FLORENCE = 'https://ieeexplore.ieee.org/abstract/document/11476575'
/** IEEE Xplore — 3rd IEEE FLLM: The Agentic Enterprise (2025). */
const IEEE_AGENTIC_ENTERPRISE_FLLM = 'https://ieeexplore.ieee.org/abstract/document/11390962'
/** JCSTS — labor market review (publisher PDF). */
const JCSTS_LABOR_MARKET_PDF =
  'https://al-kindipublishers.org/index.php/jcsts/article/download/11004/9927'
/** Preprints.org — SDV predictive maintenance framework (download). */
const PREPRINTS_SDV_PREDICTIVE_MAINTENANCE =
  'https://www.preprints.org/frontend/manuscript/1b8a62797f9505de59463457be38c2f2/download_pub'
/** ResearchGate — Intelligent Workplace (IJSRCSE) PDF. */
const INTELLIGENT_WORKPLACE_RG_PDF =
  'https://www.researchgate.net/profile/Kamal-Pandey-21/publication/389652520_The_Intelligent_Workplace_AI_and_Automation_Shaping_the_Future_of_Digital_Workplaces/links/67cb3262e62c604a0dd61c3d/The-Intelligent-Workplace-AI-and-Automation-Shaping-the-Future-of-Digital-Workplaces.pdf'
/** IJEASM — AI in EV ecosystems (Vol. 5 Issue 12, 2024) PDF. */
const IJEASM_EV_ECOSYSTEMS_PDF =
  'https://ijeasm.com/PublishedPaper/5Vol/Issue12/2024IJEASM520243659-ec9380bf-727b-44b1-b267-9a083bceba8957899.pdf'
/** TechRxiv — ethical AI / humanitarian engineering / EV (Designed for Adventure). */
const TECHRXIV_ETHICAL_AI_EV_PDF =
  'https://www.techrxiv.org/doi/pdf/10.36227/techrxiv.175339233.38524916'
/** TechRxiv — future of automotive / US AI & cloud transformation. */
const TECHRXIV_FUTURE_AUTOMOTIVE_US_PDF =
  'https://www.techrxiv.org/doi/pdf/10.36227/techrxiv.175339236.68743756'
/** ResearchGate — Dynamic Reasoning Trace (IJSRCSE 2025) PDF. */
const DYNAMIC_REASONING_TRACE_PDF =
  'https://www.researchgate.net/profile/Kamal-Pandey-21/publication/394535014_The_Dynamic_Reasoning_Trace_Achieving_Verifiable_Faithfulness_through_Agentic_Self-Correction/links/68a387176327cf7b63d7586e/The-Dynamic-Reasoning-Trace-Achieving-Verifiable-Faithfulness-through-Agentic-Self-Correction.pdf'
/** ResearchGate — Synthetic Reasoning (WJAIRR 2025) PDF. */
const SYNTHETIC_REASONING_PDF =
  'https://www.researchgate.net/profile/Kamal-Pandey-21/publication/395245321_Synthetic_Reasoning_Verifiable_AI_by_Modular_Program_Synthesis/links/68b91246d9261f6f51b132b9/Synthetic-Reasoning-Verifiable-AI-by-Modular-Program-Synthesis.pdf'
/** ResearchGate — IEEE Access AI & low-code / no-code convergence (2025) PDF. */
const IEEE_AI_LOWCODE_CONVERGENCE_PDF =
  'https://www.researchgate.net/profile/Kamal-Pandey-21/publication/394170940_The_Convergence_of_Artificial_Intelligence_and_Low-CodeNo-_Code_Platforms_Evolution_Applications_and_Benchmarks/links/688beb4f12647e01a03aeb70/The-Convergence-of-Artificial-Intelligence-and-Low-Code-No-Code-Platforms-Evolution-Applications-and-Benchmarks.pdf'

export const PUBLICATIONS_FULL = [
  {
    year: '2026',
    title:
      'TurboVec: A Case Study in Cost-Efficient Private Retrieval for Enterprise RAG via Codebook-Oblivious Quantization',
    journal: 'N Shukla, K Pandey, O Tiwari · arXiv:2607.16973 · 2026',
    abstract:
      'Introduces TurboVec, an open-source index built on TurboQuant — a codebook-oblivious scalar quantizer that needs no corpus-dependent training. On DBpedia embeddings, 4-bit TurboQuant beats trained FAISS Product Quantization on Recall@5 and cuts query latency dramatically, while the codebook-oblivious design lowers membership-inference risk to near-random — cost-efficient, privacy-preserving retrieval for enterprise RAG.',
    href: 'https://arxiv.org/abs/2607.16973',
  },
  {
    year: '2026',
    // Venue/year inferred — verify against IEEE Xplore record 11609631.
    title:
      'Quantization-Induced Robustness Collapse in Edge-Deployed Language Models: Security and Governance Frameworks for 6G IoT Ecosystems',
    journal: 'IEEE Xplore · 2026',
    abstract:
      'Examines how quantization can induce robustness collapse in edge-deployed language models, and proposes security and governance frameworks for 6G IoT ecosystems.',
    href: 'https://ieeexplore.ieee.org/abstract/document/11609631',
  },
  {
    year: '2026',
    // Venue/year inferred — verify against IEEE Xplore record 11621263.
    title: 'The Novel Framework for Next-Gen Predictive Maintenance of Software-Defined Vehicles',
    journal: 'IEEE Xplore · 2026',
    abstract:
      'Presents a framework for next-generation predictive maintenance of software-defined vehicles.',
    href: 'https://ieeexplore.ieee.org/abstract/document/11621263',
  },
  {
    year: '2026',
    title:
      'Autonomous ASN Label Compliance Using a Hybrid YOLOV8—Vision-Language Framework and Florence-2',
    journal: 'K Pandey, SD Vallamsetti, N Tare · SoutheastCon 2026 · pp. 1–7',
    abstract:
      'Conference paper on autonomous compliance for ASN labeling using a hybrid YOLOv8 vision stack with a vision–language pathway and Florence-2 for robust field-ready inspection.',
    href: IEEE_ASN_FLORENCE,
  },
  {
    year: '2025',
    title:
      'The Dynamic Reasoning Trace: Achieving Verifiable Faithfulness through Agentic Self-Correction',
    journal: 'IJSRCSE (International Journal of Scientific Research in Computer Science and Engineering) · 2025',
    abstract:
      'Proposes verifiable reasoning traces as first-class computational artifacts — not post-hoc justifications.',
    href: DYNAMIC_REASONING_TRACE_PDF,
  },
  {
    year: '2025',
    title: 'Synthetic Reasoning: Verifiable AI by Modular Program Synthesis',
    journal:
      'World Journal of Artificial Intelligence and Robotics Research — Vol. 2(5) · September 2025 (submitted Aug 23, 2025; accepted Sep 1; published Sep 7, 2025)',
    abstract:
      'Resolves the LLM faithfulness gap by shifting from text generation to structured executable program synthesis.',
    href: SYNTHETIC_REASONING_PDF,
  },
  {
    year: '2025',
    title:
      'The Convergence of Artificial Intelligence and Low-Code/No-Code Platforms: Evolution, Applications, and Benchmarks',
    journal: 'IEEE Access · 2025',
    abstract:
      'Definitive empirical benchmarks across AI-augmented low-code platforms — the reference for enterprise adoption decisions.',
    href: IEEE_AI_LOWCODE_CONVERGENCE_PDF,
  },
  {
    year: '2025',
    title: 'An Architectural Framework for AI-Driven Intelligent Commerce: The Data Nervous System',
    journal: 'Jana Nexus: Journal of Computer Science · 2025 · pp. 15–29',
    abstract:
      'Novel quantitative framework for AI integration across financial, retail, and supply chain sectors. Confirms transformative impact via the “Data Nervous System” architecture.',
    href: scholarCitationHref('otzGkya1bYkC'),
  },
  {
    year: '2025',
    title: 'The Agentic Enterprise: A Strategic Analysis of Advanced Agentic Workflows and Collaborative AI',
    journal: '3rd IEEE Int. Conf. on Foundation and Large Language Models (FLLM) · 2025',
    abstract:
      'Strategic analysis of advanced agentic workflows and collaborative AI patterns for enterprise-scale deployment and governance.',
    href: IEEE_AGENTIC_ENTERPRISE_FLLM,
  },
  {
    year: '2025',
    title:
      'Principles of Building AI Agents, 1st Edition: The Next Generation Foreword: The Next Generation is Here',
    journal: 'ResearchGate · DOI 10.13140/RG.2.2.27011.57120 · 2025',
    abstract:
      'Foreword framing first-edition principles for building AI agents — architecture, lifecycle, and what “next generation” implies for practitioners.',
    href: scholarCitationHref('6yz0xqPARnAC'),
  },
  {
    year: '2025',
    title:
      'AI Powered Transformation in the Modern Digital Workplace: Roadmap for the Future of Work and Ethical Consideration',
    journal: 'International Journal of Engineering Applied Science and Management · Vol. 6 · 2025',
    abstract:
      'Enterprise roadmap for AI-powered workplace transformation — workforce implications, governance, and ethical adoption at scale.',
    href: 'https://www.researchgate.net/publication/389326069',
  },
  {
    year: '2025',
    title: 'AI-Powered Low-Code App Development: A Benchmark Review for 2025 Digital Transformation',
    journal: 'ESS Open Archive / Authorea · 2025',
    abstract: 'Benchmark review of AI-powered low-code platforms specifically for 2025 digital transformation contexts.',
    href: AUTHOREA,
  },
  {
    year: '2024',
    title:
      'Artificial Intelligence (AI) in Electric Vehicle Ecosystems: Challenges, Opportunities, and Models for Accelerated Adoption',
    journal: 'IJEASM — Vol. 5, Issue 12 · 2024 (Paper ID: 2024/IJEASM/8/2024/3658)',
    abstract:
      'Examines factors shaping the EV industry including AI, ML, emerging tech, and regulatory frameworks. Proposes models for accelerated EV adoption.',
    href: IJEASM_EV_ECOSYSTEMS_PDF,
  },
  {
    year: '2024',
    title:
      'The Future of Automotive Industry: AI and Cloud-Driven Digital Transformation in the US Region — A Holistic Examination',
    journal: 'IJEASM · 2024',
    abstract:
      'Examines AI/cloud integration in vehicle manufacturing, autonomous driving, predictive maintenance, and Industry 4.0.',
    href: TECHRXIV_FUTURE_AUTOMOTIVE_US_PDF,
  },
  {
    year: '2025',
    title:
      'Designing Ethical AI for Development: Challenges and Opportunities in Humanitarian Engineering and Electric Vehicles, Designed for Adventure',
    journal: 'TechRxiv · 2025',
    abstract:
      'Reviews AI ethics frameworks and EV integration in disaster management and humanitarian engineering contexts.',
    href: TECHRXIV_ETHICAL_AI_EV_PDF,
  },
  {
    year: '2025',
    title: 'The Intelligent Workplace: AI and Automation Shaping the Future of Digital Workplaces',
    journal: 'IJSRCSE — Vol. 13, No. 1 · February 2025',
    abstract:
      'Explores AI-driven digital workplace complexities, job displacement, algorithmic bias, and data privacy impacts.',
    href: INTELLIGENT_WORKPLACE_RG_PDF,
  },
  {
    year: '2025',
    title: 'Artificial Intelligence and the Evolving Labor Market: A Comprehensive Review and Policy Roadmap',
    journal: 'Journal of Computer Science and Technology Studies (JCSTS) · Vol. 7(10) · October 2025',
    abstract:
      'Policy-oriented review of AI’s impact on labor markets — wage dynamics, skill displacement, and augmentation pathways — with a concrete policy roadmap for governments and enterprises.',
    href: JCSTS_LABOR_MARKET_PDF,
  },
  {
    year: '2025',
    title: 'Human-AI Collaboration: Task Augmentation and Skill Evolution in the Age of Multimodal LLMs',
    journal: 'ResearchGate / ESS Open Archive · 2025',
    abstract:
      'Examines the emergent paradigm of human-AI collaboration across creative industries, software development, and scientific research — beyond job displacement narratives.',
    href: RG,
  },
  {
    year: '2024',
    title:
      'Framework for Next-Generation Predictive Maintenance of Software-Defined Vehicles Using Cloud, Edge Computing and Modern AI',
    journal: 'Preprints.org · 2024',
    abstract:
      'Framework for predictive maintenance in software-defined vehicles using cloud, edge computing, and modern AI for fleet-scale reliability.',
    href: PREPRINTS_SDV_PREDICTIVE_MAINTENANCE,
  },
] as const

/**
 * Homepage “Research that moves the field” — mirrors Google Scholar profile sorted by publication date
 * (latest first). One Scholar row (“Journal of Applied Mechanics…”) is a metadata artefact; replaced here with
 * Synthetic Reasoning, the next substantive work in the same ordering.
 */
const PUBLICATIONS_MOVES_FIELD_ORDER = [
  'TurboVec: A Case Study in Cost-Efficient Private Retrieval for Enterprise RAG via Codebook-Oblivious Quantization',
  'Quantization-Induced Robustness Collapse in Edge-Deployed Language Models: Security and Governance Frameworks for 6G IoT Ecosystems',
  'The Novel Framework for Next-Gen Predictive Maintenance of Software-Defined Vehicles',
  'Autonomous ASN Label Compliance Using a Hybrid YOLOV8—Vision-Language Framework and Florence-2',
  'The Agentic Enterprise: A Strategic Analysis of Advanced Agentic Workflows and Collaborative AI',
  'Artificial Intelligence and the Evolving Labor Market: A Comprehensive Review and Policy Roadmap',
  'Principles of Building AI Agents, 1st Edition: The Next Generation Foreword: The Next Generation is Here',
  'Framework for Next-Generation Predictive Maintenance of Software-Defined Vehicles Using Cloud, Edge Computing and Modern AI',
  'The Dynamic Reasoning Trace: Achieving Verifiable Faithfulness through Agentic Self-Correction',
  'The Intelligent Workplace: AI and Automation Shaping the Future of Digital Workplaces',
  'AI Powered Transformation in the Modern Digital Workplace: Roadmap for the Future of Work and Ethical Consideration',
  'An Architectural Framework for AI-Driven Intelligent Commerce: The Data Nervous System',
  'Synthetic Reasoning: Verifiable AI by Modular Program Synthesis',
] as const

export const PUBLICATIONS_MOVES_FIELD = PUBLICATIONS_MOVES_FIELD_ORDER.map((title) => {
  const p = PUBLICATIONS_FULL.find((x) => x.title === title)
  if (!p) throw new Error(`PUBLICATIONS_MOVES_FIELD: missing "${title}"`)
  return p
})

export const GLOBAL_RECOGNITION = [
  'AI150 Global AI Influencer — 2025–2026 & 2026–2027 (Constellation Research · constellationr.com)',
  'Global AI Leader Award — 2025',
  'Top 50 AI Researcher & Reviewer — Stanford University recognition',
  'Guest Lecturer & Research Student Mentor — California State University, Fullerton',
  'IEEE Conference Judge, Chair & Research Contributor — USA, UK, Europe & Asia',
  'Speaker — IEEE, September 2025',
] as const

export const SPEAKING_DETAIL = [
  'IEEE SusTech 2026',
  'California State University, Fullerton — ECS Diversity and Leadership Summit 2026 (keynote, panelist, mentor)',
  'IEEE FLLM 2025, IEEE AIMS 2025, IEEE SNAMS 2025 — Expert Panel (Nov 25–28, 2025 · Vienna, Austria)',
  'Constellation AI150 Summit — 2025–2026',
  'IEEE New Era AI World Leaders Summit — Dec 5–7, 2025 · Seattle/Bothell, WA (Expert Panel & Keynote)',
  'IEEE Orange County',
  'AI4 NA — 2025',
  'Box BoxWorks — 2025',
  'SharePoint Saturday Pittsburgh — 2019',
  'Microsoft 365 Virtual Marathon — 2021 & 2022 (digital transformation, modern workplace)',
  'Microsoft 365 Community Conference — Speaker 2021, 2022',
  'Microsoft Cloud Conference — Speaker 2019',
  'Robotic Process Automation Conference — Expert & Keynote 2021, 2022',
  'Constellation AI Forum — September 2025',
  'PechaKucha events · Hackathons · Microsoft Ignite · M365 conferences',
] as const

export const EMPLOYER_RECOGNITION = [
  'Rivian CPO Recognition — COVID management & EHS app development',
  'Rivian CIO Recognition — Google Workspace + Microsoft/Google Cloud AI',
  'Goodyear CIO Recognition — modern global IT, HR & enterprise intranet; first responsive SharePoint portal (“GO” intranet rollout)',
  'L&T Infotech — Employee of the Year 2015 (client service excellence & contribution)',
  'HCL Technologies — R&D Innovation Delivery Individual Award (Tyco project)',
  'Goodyear — Excellence in Voluntary Activities Award (Food Bank, United Way, LeBron James Family Foundation)',
] as const

export const EDUCATION = [
  {
    degree: 'PhD in Information Systems',
    school: 'Dakota State University',
    years: '2025–2029',
    note: 'In progress',
  },
  {
    degree: 'Doctor of Business Administration (DBA) in Computer Science',
    school: 'Westcliff University, USA',
    years: '2023',
  },
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'I.K. Gujral Punjab Technical University, India',
    years: '2007',
  },
  {
    degree: 'Bachelor of Computer Science & Engineering',
    school: 'Awadhesh Pratap Singh University, India',
    years: '',
  },
] as const

export const CERTIFICATIONS = {
  aiArch: [
    'Google AI Solutions Architect',
    'AWS Cloud Solution Architect (Azure + AWS)',
    'Microsoft Azure Cloud Solution Architect',
    'Google Cloud Solution Architect',
    'SAFe® 6 Architect',
    'The Open Group Architecture Framework (TOGAF)',
    'PMP (Project Management Professional)',
    'Microsoft Power Platform Solution Architect',
  ],
  agile: [
    'Certified ScrumMaster (CSM)',
    'ITIL V4 Foundation Certified Professional',
    'Six Sigma — Green, Yellow, and Black Belt',
  ],
  microsoft: [
    'Microsoft 365 Certified: Teams Administrator Associate',
    'Microsoft 365 Certified: Enterprise Administrator Expert',
    'Microsoft 365 Certified: Office 365 Enterprise Administrator Expert',
    'MCSE — SharePoint Online & Microsoft Office 365 Solutions',
    'MCSE — Productivity Solutions Expert',
    'MCSA — Windows Server 2012',
    'MCPD — SharePoint',
    'MCTEM — SharePoint 2013 App Development',
    'MCITP — Microsoft Certified IT Professional',
  ],
  note: '30+ total AI & cloud certifications across architecture, cloud, agile, and Microsoft platforms.',
} as const

export const SKILLS_BLOCKS = [
  {
    title: 'AI, ML & agentic systems',
    icon: 'bot' as const,
    lines: [
      'LLMs: GPT-4/5, Claude, Gemini, LLaMA',
      'Frameworks: PyTorch, TensorFlow, JAX, Hugging Face',
      'Agentic: LangChain, LangGraph, CrewAI, Google ADK',
      'Platforms: Amazon Bedrock, AWS SageMaker, Vertex AI, Azure ML',
      'Techniques: RAG, knowledge graphs, multimodal learning, RL, diffusion, computer vision, OCR, defect detection, digital twins, NLP',
      'Automation: agentic workflows, UI automation',
    ],
  },
  {
    title: 'Cloud & infrastructure',
    icon: 'cloud' as const,
    lines: [
      'AWS: Bedrock, SageMaker, Lambda, S3, CodePipeline, WorkSpaces',
      'GCP: Vertex AI, BigQuery, Cloud Run, Colab, Google AI Platform',
      'Azure: Functions, Synapse, AKS, Logic Apps, Azure ML',
      'IaC: Terraform, Kubernetes, Docker, Helm',
      'MLOps: CI/CD, GitHub, GitLab, Bitbucket, Jenkins',
    ],
  },
  {
    title: 'Development',
    icon: 'network' as const,
    lines: [
      'Languages: Python, C#, TypeScript, JavaScript, PowerShell',
      'Frontend: React, Angular, Node.js, SPFx, Fluent UI',
      'Backend: .NET Core, FastAPI, Flask, Django',
      'APIs: Microsoft Graph, REST, CSOM, JSOM, SPFx; Vertex AI, ChatGPT, OpenAI, Gemini APIs',
    ],
  },
  {
    title: 'Platforms & workplace',
    icon: 'usersRound' as const,
    lines: [
      'Microsoft: M365, SharePoint, Teams, Power Platform, Dynamics 365, ServiceNow, ADFS',
      'Google: Workspace, Gemini, AppSheet, AppScript, Glean',
      'Collaboration: Slack, Box, Citrix ShareFile, AWS Workspaces',
      'Low-code: OutSystems, Appian, Power Platform',
      'RPA: UiPath, Power Automate RPA, Samsung Brity RPA',
    ],
  },
  {
    title: 'Governance & security',
    icon: 'scale' as const,
    lines: [
      'Frameworks: NIST RMF, ISO 42001, TOGAF, Zachman, ITIL, SAFe',
      'Security: IAM, DLP, CASB, eDiscovery, compliance automation, Splunk',
      'Responsible AI: SAIL lifecycle',
    ],
  },
] as const

/** Section B — headline metrics for impact strip + hero subset */
export const HEADLINE_IMPACT_STATS = [
  { value: 17, suffix: '+', label: 'Years of global experience' },
  { value: 100, suffix: '+', label: 'Google Scholar citations' },
  { value: 25, suffix: '+', label: 'Peer-reviewed publications (2023–2026)' },
  { value: 100, suffix: '+', label: 'Peer reviews (verified reviewer)' },
  { value: 30, suffix: '+', label: 'Technical certifications (AI, cloud, architecture)' },
  { value: 7, suffix: '', label: 'Continents delivered (Asia, N. America, Europe, Australia)' },
  { prefix: '$', value: 100, suffix: 'M+', label: 'Measured annual operational impact from AI systems' },
  { prefix: '$', value: 200, suffix: 'M+', label: 'Annual operational savings driven (Samsung SDS)' },
  { prefix: '$', value: 50, suffix: 'M', label: 'Annual cost savings (Workspace migration)' },
  { value: 50, suffix: '+', label: 'Agentic AI systems architected' },
  { value: 20, suffix: '+', label: 'Design Thinking sessions facilitated' },
  { value: 1000, suffix: '+', label: 'Applications on Microsoft + Google Cloud', format: 'comma' as const },
  { value: 1000, suffix: '+', label: 'Petabytes migrated to cloud', format: 'comma' as const },
  { value: 5, suffix: 'M', label: 'Associates served globally' },
  { value: 3, suffix: 'M', label: 'Users on platforms architected' },
] as const

/** Hero sidebar — six flagship numbers */
export const HERO_STATS = [
  { value: 17, suffix: '+', label: 'Years', sub: 'Global experience', icon: 'clock' as const },
  { value: 100, suffix: '+', label: 'Citations', sub: 'Google Scholar', icon: 'bookmark' as const },
  { value: 25, suffix: '+', label: 'Publications', sub: 'Peer-reviewed 2023–26', icon: 'library' as const },
  { value: 100, suffix: '+', label: 'Peer reviews & Judge', sub: 'Verified reviewer', icon: 'badgeCheck' as const },
  { value: 7, suffix: '', label: 'Continents', sub: 'Delivered', icon: 'globe2' as const },
  { value: 30, suffix: '+', label: 'Certifications', sub: 'AI & cloud', icon: 'graduationCap' as const },
] as const

export const INITIATIVES = [
  {
    tag: 'Research monograph',
    tagTone: 'emerald' as const,
    title: 'AI-2050: Visions of Future',
    body: 'Explores the long-arc intersection of advanced AI and global sustainability metrics across governance and society.',
    cta: 'View on Amazon',
    href: 'https://www.amazon.com/AI-2050-Visions-Future-Sustainability/dp/B0FV3W41W2',
  },
  {
    tag: 'Autonomous intelligence platform',
    tagTone: 'blue' as const,
    title: 'SAInexus innovation platform',
    body: 'Multi-cloud orchestration and secure signal ingestion — transformation programs for Samsung, Goodyear, and Merck.',
    cta: 'Contact to learn more',
    href: '/#contact',
  },
  {
    tag: 'Enterprise AI program',
    tagTone: 'blue' as const,
    title: 'Rivian–Volkswagen JV AI transformation',
    body: 'Foundry-style AI infrastructure for next-generation EV development — technical architect.',
    cta: 'Read publications',
    href: '/#publications',
  },
  {
    tag: 'Applied R&D',
    tagTone: 'emerald' as const,
    title: 'Rivian OEM OS platform',
    body: 'OEM OS integrating deep learning, NLP, computer vision, and pattern recognition for next-gen OEM workplace.',
    cta: 'Core competencies',
    href: '/#expertise',
  },
] as const

export type CareerRole = {
  period: string
  org: string
  location: string
  roles: readonly { title: string; dates: string }[]
  bullets: readonly string[]
  tags: readonly string[]
  icon: 'briefcase' | 'cloud' | 'landmark' | 'rocket' | 'cpu' | 'globe2'
}

export const CAREER_ROLES: readonly CareerRole[] = [
  {
    period: 'February 2021 – Present',
    org: 'Rivian Automotive Inc.',
    location: 'Orange County / Los Angeles, CA',
    roles: [
      { title: 'Principal AI Architect — Applied & Agentic AI', dates: 'Jan 2023 – Present' },
      { title: 'Principal Engineer / Technical Lead', dates: 'Oct 2022 – Dec 2023' },
      { title: 'Staff Software Engineer — Digital Workplace & Automation', dates: 'Feb 2021 – Sep 2022' },
    ],
    bullets: [
      'Partnered with CIO/CPO as technical architect for $50M AI budget.',
      '$100M+ measured annual operational impact from AI systems.',
      'Led Rivian–Volkswagen JV digital transformation (Foundry-style AI).',
      'Architected 50+ agentic AI systems using Gemini and Claude → throughput +75%.',
      'Paint defect detection: accuracy 40% → 98% (computer vision / PyTorch).',
      'MLOps (Terraform + Vertex AI): deployment time −70%; ~30ms inference latency.',
      '$6M+ direct savings via license rationalization.',
      '$50M+ annual savings via unified agentic workflows (Workday, SAP, SharePoint, Slack, Salesforce).',
      '$15.7M annual Digital Workspace budget delivered; 33% productivity boost.',
      'Migrated 20,000 users from M365 to Google Workspace + Gemini → $12M annual cost reduction.',
      '15,000+ manual hours eliminated annually via autonomous AI portfolio.',
      '1000+ applications delivered on Microsoft + Google Cloud.',
      '5,000+ SharePoint sites, 16,000+ OneDrives, 7,000 sites migrated.',
      'Employee onboarding automation: 250 employees/week.',
      'Network re-engineering: incidents reduced 90%.',
      '$1.2M modern intranet built.',
      'App rationalization: $700K operational savings.',
      'RPA (UiPath): lifecycle time reduced 78%.',
      '1000+ petabytes migrated; 16 legacy apps retired.',
      '20+ Design Thinking sessions facilitated.',
      'Custom Glean connectors: collaboration +40%.',
      '400+ Power Platform apps modernized to AppScript/AppSheet.',
      'EHS + COVID management app: recognized by CPO.',
    ],
    tags: ['AWS', 'Vertex AI', 'Gemini', 'Claude', 'LangChain', 'PyTorch', 'MLOps', 'Agentic AI', 'EV'],
    icon: 'briefcase',
  },
  {
    period: 'March 2020 – March 2021',
    org: 'Samsung SDS America, Inc.',
    location: 'New Jersey',
    roles: [
      {
        title: 'Cloud Solutions Consulting Architect / Solutions Architect, Product Development & Research',
        dates: 'Mar 2020 – Mar 2021',
      },
    ],
    bullets: [
      '50+ production-grade AI applications deployed globally.',
      '$200M+ annual operational savings driven.',
      'ML anomaly detection: false alerts −45%; MTTR halved.',
      'Infrastructure optimization: solution delivery 40% faster.',
      'CI/CD (Jenkins, AWS CodePipeline, GitLab): release cycles +89%.',
      'Global team ~15 engineers; $1.3M project budget.',
      '$800K saved consolidating 3 platforms + 7 workplace tools.',
      'Led M365/Teams/SharePoint migrations for Marsh & McLennan.',
      '60% YoY business growth through partnerships & BD.',
      'Brity RPA + Nexledger blockchain product development.',
      'AWS cloud rollout and configuration for Samsung SDS products.',
    ],
    tags: ['AWS', 'Brity RPA', 'Nexledger', 'M365', 'CI/CD'],
    icon: 'cloud',
  },
  {
    period: 'August 2015 – October 2019',
    org: 'The Goodyear Tire & Rubber Company',
    location: 'Akron, OH',
    roles: [
      { title: 'Sr. Architect — Digital Workplace, M365, Future of Work', dates: '2015–2019' },
      { title: 'SharePoint Architect — Microsoft M365 & SharePoint', dates: '2015–2019' },
    ],
    bullets: [
      '$600K annually saved — modern workplace for 65,000 associates + 11,000 contractors globally.',
      '“GO” multilingual intranet; deprecated legacy Tridion CMS → $500K direct savings; Office 365 ROI +56%.',
      '$600K YoY direct cost elimination (3 CMS products, 10,000+ apps).',
      '$400K annual savings + 40% productivity via enterprise Teams chatbot.',
      '$1M SharePoint + Tridion CMS migration (transit authority).',
      'Goodyear.com chatbot: $2.3M revenue; 17% conversion.',
      '23 custom Angular/React/TypeScript apps integrating SAP + Power BI → $800K annual savings.',
      'Modernized 89% B2B apps + 100% workplace tools.',
      '69% EMEA ad sales automated → sales collaboration +56%.',
      '16-language intranet metadata/navigation (jQuery, JS, Bootstrap).',
      'Lotus Notes + SharePoint migrations at enterprise scale.',
      'Training: 24 sessions, 7 countries, 9 departments → 150% ROI YoY.',
      '100+ custom web parts and SAP/Oracle integrations.',
    ],
    tags: ['M365', 'SharePoint', 'Teams', 'SAP', 'Power BI', 'Azure'],
    icon: 'landmark',
  },
  {
    period: 'March 2012 – July 2015',
    org: 'Larsen & Toubro Infotech (LTI / LTIMindtree)',
    location: 'India & USA',
    roles: [
      { title: 'Project Lead', dates: '2013–2015' },
      { title: 'Senior Software Engineer', dates: '2012–2013' },
    ],
    bullets: [
      'Consultant for HOB, Viacom, Warner Bros, WSP Global (~$5M projects).',
      'Won $1.5M contract — blended digital content + intranet solution.',
      'Automated 69.35% of Viacom Ad Sales and Nickelodeon processes.',
      'Viacom Ad Sales site: +30% sales; +56% sales collaboration.',
      'Data input redundancy −30%; reporting time −90%.',
      'New site development time −80% via reusable templates.',
      'Process automation: due diligence efficiency +45%.',
      'Completed project 2 weeks ahead of schedule.',
      'Employee of the Year 2015.',
    ],
    tags: ['SharePoint', 'Digital workplace', 'Media'],
    icon: 'rocket',
  },
  {
    period: 'December 2011 – March 2012',
    org: 'Singtel Optus Pty Limited',
    location: 'Sydney, Australia',
    roles: [{ title: 'Consultant', dates: 'Dec 2011 – Mar 2012' }],
    bullets: ['Enterprise collaboration and cloud workplace consulting.'],
    tags: ['Australia', 'Consulting'],
    icon: 'globe2',
  },
  {
    period: 'May 2010 – December 2011',
    org: 'HCL Technologies Ltd',
    location: 'India, Singapore, Australia',
    roles: [{ title: 'Lead Engineer, Enterprise Content Management', dates: 'May 2010 – Dec 2011' }],
    bullets: [
      'Enterprise search for Commonwealth Bank (55K associates) → adoption +37%.',
      '50,000+ SharePoint sites migrated for SGX, Commonwealth Bank, Fonterra, CITI.',
      'Won $1.5M business process automation project (Tyco).',
      'R&D Innovation Delivery Individual Award from HCL Tech.',
    ],
    tags: ['SharePoint', 'ECM', 'Migration'],
    icon: 'cpu',
  },
  {
    period: 'February 2008 – April 2010',
    org: 'IBM / Shriram Value Services',
    location: 'Chennai, India',
    roles: [{ title: 'Senior Software Engineer', dates: 'Feb 2008 – Apr 2010' }],
    bullets: ['Enterprise software engineering and solution delivery.'],
    tags: ['IBM', 'Enterprise'],
    icon: 'cpu',
  },
] as const
