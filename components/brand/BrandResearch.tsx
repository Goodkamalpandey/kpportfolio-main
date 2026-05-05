'use client'

import { useMemo, useState } from 'react'
import Reveal from './Reveal'
import CountUpSpan from './CountUpSpan'

type Cluster = 'safety' | 'enterprise' | 'auto' | 'workplace'
type Filter = 'all' | Cluster

type Row =
  | { k: 'y'; year: string; right: string }
  | { k: 'f' }
  | {
      k: 'p'
      c: Cluster
      href: string
      label: string
      journal: string
      cy: string
      title: string
      ab: string
      badge: string
      co?: string
    }

const ROWS: Row[] = [
  { k: 'f' },
  { k: 'y', year: '2025', right: '16 papers' },
  {
    k: 'p',
    c: 'safety',
    href: 'https://doi.org/10.63620/MK.WJAIRR.2025',
    label: 'AI Safety',
    journal: 'World Journal of AI & Robotics Research',
    cy: '2025',
    title: 'Synthetic Reasoning: Verifiable AI by Modular Program Synthesis',
    ab: 'A paradigm shift from generative to synthetic reasoning — using modular program synthesis to produce verifiable, auditable, and traceable AI outputs. Addresses the LLM faithfulness gap at a foundational level.',
    badge: 'WJAIRR',
  },
  {
    k: 'p',
    c: 'safety',
    href: 'https://www.researchgate.net/profile/Kamal-Pandey-21',
    label: 'AI Safety',
    journal: 'IJSRCSE',
    cy: '2025',
    title: 'The Dynamic Reasoning Trace: Achieving Verifiable Faithfulness through Agentic Self-Correction',
    ab: 'Introduces Agentic Self-Correction — AI agents that monitor and correct their own reasoning traces against verifiable ground truth in real time. Direct applications to safety-critical automotive environments.',
    badge: 'IJSRCSE',
  },
  {
    k: 'p',
    c: 'safety',
    href: 'https://www.researchgate.net/profile/Kamal-Pandey-21',
    label: 'AI Safety',
    journal: 'ResearchGate · 2025',
    cy: '2025',
    title: 'ReAct-MRST: Extending Neuro-Symbolic Reasoning with Reactive Agentic Traces',
    ab: 'One-shot neuro-symbolic models like MRST generate executable programs but suffer from opacity. ReAct-MRST introduces reactive agentic traces — combining the verifiability of symbolic methods with agentic adaptability.',
    badge: 'Preprint',
  },
  {
    k: 'p',
    c: 'enterprise',
    href: 'https://www.researchgate.net/profile/Kamal-Pandey-21',
    label: 'Enterprise AI',
    journal: 'Jana Nexus: Journal of Computer Science · Sep 2025',
    cy: '2025',
    title: 'An Architectural Framework for AI-Driven Intelligent Commerce: Reshaping Finance, Retail, and Supply Chains',
    ab: 'Introduces the Data Nervous System — a novel architecture for integrating AI across financial, retail, and supply chain operations — with quantitative empirical evaluation and measurable transformation benchmarks.',
    badge: 'Jana Nexus',
  },
  {
    k: 'p',
    c: 'enterprise',
    href: 'https://essopenarchive.org/users/942841-kamal-pandey',
    label: 'Enterprise AI',
    journal: 'ESS Open Archive · 2025',
    cy: '2025',
    title: 'AI-Powered Low-Code App Development: A Benchmark Review for 2025 Digital Transformation',
    ab: 'A comprehensive benchmark review of AI-powered low-code development platforms for enterprise digital transformation — evaluating performance, scalability, and governance readiness across leading platforms.',
    badge: 'Open Archive',
  },
  {
    k: 'p',
    c: 'workplace',
    href: 'https://www.researchgate.net/publication/389326069',
    label: 'Digital Workplace',
    journal: 'IJEASM Vol.6 Issue 2',
    cy: 'Feb 2025',
    title: 'AI-Powered Transformation in the Modern Digital Workplace: A Roadmap for the Future of Work and Ethical Consideration',
    ab: 'Mixed-methods study: 450 employee surveys + 20 interviews across diverse industries. Proposes a human-centred ethical framework for AI adoption covering fairness, transparency, and accountability.',
    badge: 'IJEASM',
    co: 'Co-authored with Anoop Narang · Rivian Automotive',
  },
  {
    k: 'p',
    c: 'workplace',
    href: 'https://ijsrcse.isroset.org/index.php/j/article/view/607',
    label: 'Digital Workplace',
    journal: 'IJSRCSE · 2025',
    cy: '2025',
    title: 'The Intelligent Workplace: AI and Automation Shaping the Future of Digital Workplaces',
    ab: 'Explores AI-driven digital workplace transformations and workforce effects using a mixed-methods approach — proposing a human-centred ethical framework for responsible AI adoption.',
    badge: 'IJSRCSE',
  },
  {
    k: 'p',
    c: 'workplace',
    href: 'https://essopenarchive.org/users/942841-kamal-pandey',
    label: 'Digital Workplace',
    journal: 'ESS Open Archive / Authorea · 2025',
    cy: '2025',
    title: 'Human-AI Collaboration: Beyond Job Displacement — Task Augmentation and Skill Evolution in the Age of LLMs',
    ab: 'Examines human-AI collaboration across creative industries, software development, and scientific research — identifying adoption patterns and advocating for co-creativity frameworks over displacement narratives.',
    badge: 'Preprint',
  },
  {
    k: 'p',
    c: 'workplace',
    href: 'https://doi.org/10.32996/jcsts.2025.7.10.33',
    label: 'Digital Workplace',
    journal: 'Journal of CS & Technology Studies · Vol. 7(10)',
    cy: 'Oct 2025',
    title: 'Artificial Intelligence and the Evolving Labor Market: A Comprehensive Review and Policy Roadmap',
    ab: "Policy-oriented review of AI's impact on labor markets globally — synthesising evidence on wage dynamics, skill displacement, and augmentation pathways — proposing a concrete policy roadmap for governments and enterprises.",
    badge: 'JCSTS',
  },
  {
    k: 'p',
    c: 'auto',
    href: 'https://essopenarchive.org/users/942841-kamal-pandey',
    label: 'Automotive & EV',
    journal: 'ESS Open Archive · 2025',
    cy: '2025',
    title: 'Designing Ethical AI for Development: Challenges and Opportunities in Humanitarian Engineering and Electric Vehicles',
    ab: 'Systematic literature review synthesising AI ethics frameworks and EV applications in disaster management and humanitarian contexts — proposing an integrated ethical framework for EV and AI deployment.',
    badge: 'ESS Archive',
  },
  { k: 'y', year: '2024', right: '5 papers' },
  {
    k: 'p',
    c: 'auto',
    href: 'https://www.researchgate.net/publication/388010118',
    label: 'Automotive & EV',
    journal: 'IJEASM Vol.5 Issue 11',
    cy: 'Nov 2024',
    title: 'The Future of Automotive Industry: AI and Cloud-Driven Digital Transformation in the US Region — A Holistic Examination',
    ab: 'Comprehensive analysis of AI and cloud computing reshaping the US automotive sector — covering autonomous driving, predictive maintenance, connected cars, and Industry 4.0 adoption.',
    badge: 'IJEASM',
    co: 'Co-authored with Dr. Trilok Singh PhD',
  },
  {
    k: 'p',
    c: 'auto',
    href: 'https://www.researchgate.net/profile/Kamal-Pandey-21',
    label: 'Automotive & EV',
    journal: 'IJEASM Vol.5 Issue 12',
    cy: 'Dec 2024',
    title: 'Artificial Intelligence (AI) in Electric Vehicle Ecosystems: Challenges, Opportunities, and Models for Accelerated Adoption',
    ab: 'Examines the multi-factor landscape shaping EV industry AI adoption — regulations, supply chains, software, and emerging technologies — proposing evidence-based models for accelerating AI integration.',
    badge: 'IJEASM',
  },
  {
    k: 'p',
    c: 'enterprise',
    href: 'https://www.researchgate.net/profile/Kamal-Pandey-21',
    label: 'Enterprise AI',
    journal: 'ResearchGate · 2024',
    cy: '2024',
    title: 'Artificial Intelligence (AI) and Electric Vehicles (EV): Opportunities, Challenges, and Strategic Frameworks for Industry Leaders',
    ab: 'Strategic framework paper for enterprise leaders navigating the AI–EV convergence — evaluating competitive dynamics and providing actionable roadmaps for AI-driven EV strategy at enterprise scale.',
    badge: 'ResearchGate',
  },
  {
    k: 'p',
    c: 'workplace',
    href: 'https://www.researchgate.net/profile/Kamal-Pandey-21',
    label: 'Digital Workplace',
    journal: 'ResearchGate · 2024',
    cy: '2024',
    title: 'Generative AI in the Enterprise: Adoption Patterns, Risk Governance, and Competitive Implications',
    ab: 'Examines enterprise-level GenAI adoption across Fortune 500 organizations — assessing risk governance frameworks, regulatory readiness, and the competitive dynamics of early vs. late adoption.',
    badge: 'Preprint',
  },
]

function visibleRows(f: Filter): Row[] {
  if (f === 'all') return ROWS
  const out: Row[] = []
  for (let i = 0; i < ROWS.length; i++) {
    const e = ROWS[i]
    if (e.k === 'y') {
      let j = i + 1
      let ok = false
      while (j < ROWS.length && ROWS[j].k !== 'y') {
        const r = ROWS[j]
        if ((r.k === 'p' || r.k === 'f') && (r.k === 'f' ? 'enterprise' === f : r.c === f)) ok = true
        j++
      }
      if (ok) out.push(e)
    } else if (e.k === 'f') {
      if (f === 'enterprise') out.push(e)
    } else if (e.c === f) {
      out.push(e)
    }
  }
  return out
}

function ResearchMap({ onPick }: { onPick: (c: Cluster) => void }) {
  return (
    <div className="rsb-map">
      <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <radialGradient id="gs">
            <stop offset="0%" stopColor="var(--teal)" stopOpacity=".25" />
            <stop offset="100%" stopColor="var(--teal)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ge">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity=".25" />
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ga">
            <stop offset="0%" stopColor="#E8724A" stopOpacity=".25" />
            <stop offset="100%" stopColor="#E8724A" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="gw">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity=".25" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
          </radialGradient>
        </defs>
        <line x1="80" y1="80" x2="160" y2="80" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <line x1="80" y1="80" x2="80" y2="160" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <line x1="160" y1="80" x2="160" y2="160" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <line x1="80" y1="160" x2="160" y2="160" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <line x1="80" y1="80" x2="160" y2="160" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        <line x1="160" y1="80" x2="80" y2="160" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        <circle cx="80" cy="80" r="44" fill="url(#gs)" />
        <circle cx="160" cy="80" r="44" fill="url(#ge)" />
        <circle cx="80" cy="160" r="44" fill="url(#gw)" />
        <circle cx="160" cy="160" r="44" fill="url(#ga)" />
        <circle
          className="mapnode"
          role="button"
          tabIndex={0}
          cx="80"
          cy="80"
          r="18"
          fill="rgba(223,255,79,.14)"
          stroke="var(--teal)"
          strokeWidth="1"
          style={{ cursor: 'pointer' }}
          onClick={() => onPick('safety')}
          onKeyDown={(e) => e.key === 'Enter' && onPick('safety')}
        />
        <circle
          className="mapnode"
          role="button"
          tabIndex={0}
          cx="160"
          cy="80"
          r="18"
          fill="rgba(201,168,76,.12)"
          stroke="#C9A84C"
          strokeWidth="1"
          style={{ cursor: 'pointer' }}
          onClick={() => onPick('enterprise')}
          onKeyDown={(e) => e.key === 'Enter' && onPick('enterprise')}
        />
        <circle
          className="mapnode"
          role="button"
          tabIndex={0}
          cx="80"
          cy="160"
          r="18"
          fill="rgba(167,139,250,.12)"
          stroke="#A78BFA"
          strokeWidth="1"
          style={{ cursor: 'pointer' }}
          onClick={() => onPick('workplace')}
          onKeyDown={(e) => e.key === 'Enter' && onPick('workplace')}
        />
        <circle
          className="mapnode"
          role="button"
          tabIndex={0}
          cx="160"
          cy="160"
          r="18"
          fill="rgba(232,114,74,.12)"
          stroke="#E8724A"
          strokeWidth="1"
          style={{ cursor: 'pointer' }}
          onClick={() => onPick('auto')}
          onKeyDown={(e) => e.key === 'Enter' && onPick('auto')}
        />
        <text x="80" y="84" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="var(--teal)">
          AI
        </text>
        <text x="80" y="94" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="var(--teal)">
          SAFETY
        </text>
        <text x="160" y="84" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="#C9A84C">
          ENTER
        </text>
        <text x="160" y="94" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="#C9A84C">
          PRISE
        </text>
        <text x="80" y="163" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#A78BFA">
          WORK
        </text>
        <text x="80" y="173" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#A78BFA">
          PLACE
        </text>
        <text x="160" y="163" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#E8724A">
          AUTO
        </text>
        <text x="160" y="173" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#E8724A">
          MOTIVE
        </text>
        <circle cx="120" cy="120" r="6" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.1)" strokeWidth="1" />
        <circle cx="120" cy="120" r="2" fill="rgba(255,255,255,.3)" />
      </svg>
      <p
        style={{
          textAlign: 'center',
          marginTop: '.75rem',
          fontFamily: 'var(--mono)',
          fontSize: '.58rem',
          letterSpacing: '.12em',
          color: 'var(--t3)',
          textTransform: 'uppercase',
        }}
      >
        21 papers · 4 clusters · click to filter
      </p>
    </div>
  )
}

export default function BrandResearch() {
  const [filter, setFilter] = useState<Filter>('all')

  const rows = useMemo(() => visibleRows(filter), [filter])

  const hasPapers = useMemo(() => rows.some((r) => r.k === 'p' || r.k === 'f'), [rows])

  const scrollResearch = () => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })

  const pick = (c: Cluster) => {
    setFilter(c)
    scrollResearch()
  }

  const badges: { f: Filter; label: string; dot: string }[] = [
    { f: 'all', label: 'All papers', dot: 'var(--t2)' },
    { f: 'safety', label: 'AI Safety & Interpretability', dot: 'var(--teal)' },
    { f: 'enterprise', label: 'Enterprise AI', dot: 'var(--gold)' },
    { f: 'auto', label: 'Automotive & EV', dot: 'var(--coral)' },
    { f: 'workplace', label: 'Digital Workplace', dot: 'var(--purple)' },
  ]

  return (
    <section id="research">
      <div className="w si">
        <Reveal>
          <p className="s-eye">{`// Full research body · metrics · clusters`}</p>
        </Reveal>
        <Reveal delayClass="d1">
          <h2 className="s-h">
            Advancing the field
            <br />
            <em>from first principles.</em>
          </h2>
        </Reveal>
        <Reveal delayClass="d2">
          <div className="s-rule" />
        </Reveal>

        <Reveal delayClass="d1">
          <div className="rstat">
            <div className="rsc" style={{ ['--cc' as string]: 'var(--gold)' }}>
              <div className="rsn">
                <CountUpSpan target={21} />
              </div>
              <div className="rsl">Total publications</div>
              <div className="rss">ResearchGate · 2024–2025</div>
            </div>
            <div className="rsc" style={{ ['--cc' as string]: 'var(--teal)' }}>
              <div className="rsn">
                <CountUpSpan target={57} />
              </div>
              <div className="rsl">Citations</div>
              <div className="rss">ResearchGate · verified @rivian.com</div>
            </div>
            <div className="rsc" style={{ ['--cc' as string]: 'var(--coral)' }}>
              <div className="rsn">
                <CountUpSpan target={5156} />
              </div>
              <div className="rsl">RG Reads</div>
              <div className="rss">Global reach 2024–2025</div>
            </div>
            <div className="rsc" style={{ ['--cc' as string]: 'var(--purple)' }}>
              <div className="rsn">7+</div>
              <div className="rsl">Peer-reviewed venues</div>
              <div className="rss">IEEE · IJSRCSE · IJEASM · WJAIRR · JCSTS</div>
            </div>
          </div>
        </Reveal>

        <Reveal delayClass="d2">
          <div className="filter-row">
            {badges.map((b) => (
              <button
                key={b.f}
                type="button"
                className={`fbadge ${filter === b.f ? 'on' : ''}`}
                data-f={b.f}
                onClick={() => setFilter(b.f)}
              >
                <span className="fd" style={{ background: b.dot }} />
                {b.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="rl">
          <aside className="rsb">
            <Reveal>
              <p className="rsb-label">Research map</p>
              <ResearchMap onPick={pick} />
              <p className="rsb-label">Metrics</p>
              <div className="rsb-metrics">
                <div className="rsb-m">
                  <span className="rsb-ml">Publications</span>
                  <span className="rsb-mv" style={{ color: 'var(--gold)' }}>
                    21
                  </span>
                </div>
                <div className="rsb-m">
                  <span className="rsb-ml">RG Citations</span>
                  <span className="rsb-mv" style={{ color: 'var(--teal)' }}>
                    57
                  </span>
                </div>
                <div className="rsb-m">
                  <span className="rsb-ml">GS Citations</span>
                  <span className="rsb-mv">59</span>
                </div>
                <div className="rsb-m">
                  <span className="rsb-ml">RG Reads</span>
                  <span className="rsb-mv">5,156</span>
                </div>
                <div className="rsb-m">
                  <span className="rsb-ml">2025 papers</span>
                  <span className="rsb-mv">16</span>
                </div>
                <div className="rsb-m">
                  <span className="rsb-ml">IEEE flagship</span>
                  <span className="rsb-mv" style={{ color: 'var(--gold)' }}>
                    1
                  </span>
                </div>
                <div className="rsb-m">
                  <span className="rsb-ml">Affiliation</span>
                  <span className="rsb-mv">Rivian</span>
                </div>
              </div>
              <p className="rsb-label" style={{ marginTop: '1.5rem' }}>
                Profiles
              </p>
              <div className="rsb-links">
                <a
                  href="https://scholar.google.com/citations?user=rA_dpyAAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rsb-link"
                >
                  <span className="rsb-ln">Google Scholar</span>
                  <span className="rsb-la">↗</span>
                </a>
                <a
                  href="https://www.researchgate.net/profile/Kamal-Pandey-21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rsb-link"
                >
                  <span className="rsb-ln">ResearchGate</span>
                  <span className="rsb-la">↗</span>
                </a>
                <a
                  href="https://orcid.org/0009-0009-1669-4450"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rsb-link"
                >
                  <span className="rsb-ln">ORCID</span>
                  <span className="rsb-la">↗</span>
                </a>
                <a
                  href="https://www.authorea.com/users/942841-dr-kamal-pandey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rsb-link"
                >
                  <span className="rsb-ln">Authorea</span>
                  <span className="rsb-la">↗</span>
                </a>
              </div>
            </Reveal>
          </aside>

          <div className="plist">
            {rows.map((row, idx) => {
              if (row.k === 'y') {
                return (
                  <div key={`${row.year}-${idx}`} className="ydiv">
                    <span className="yl">{row.year}</span>
                    <div className="yline" />
                    <span className="yl">{row.right}</span>
                  </div>
                )
              }
              if (row.k === 'f') {
                return (
                  <a
                    key="feat"
                    className="pfeat"
                    href="https://www.researchgate.net/publication/394170940"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-c="enterprise"
                  >
                    <div className="pfeat-in">
                      <div>
                        <div className="pf-tag">★ &nbsp;Flagship · IEEE Access</div>
                        <div className="pf-j">IEEE Access · 2025</div>
                        <div className="pf-t">
                          The Convergence of Artificial Intelligence and Low-Code / No-Code Platforms: Evolution,
                          Applications, and Benchmarks
                        </div>
                        <p className="pf-a">
                          A systematic evaluation framework for the convergence of AI and low-code/no-code development
                          — proposing a novel benchmark methodology and research agenda with direct industrial relevance.
                          Published in IEEE Access, the highest-impact open-access journal of the world&apos;s largest
                          technical engineering organisation.
                        </p>
                        <div className="pf-meta">
                          <span className="pf-yr">2025</span>
                          <span className="pf-badge">IEEE · Flagship</span>
                          <span className="pf-link">Read paper ↗</span>
                        </div>
                      </div>
                      <div className="pf-side">
                        <div className="pf-ib">
                          <div className="pib-l">Journal</div>
                          <div className="pib-v">IEEE</div>
                          <div className="pib-s">Access · Open</div>
                        </div>
                      </div>
                    </div>
                  </a>
                )
              }
              return (
                <a
                  key={`${row.title}-${idx}`}
                  className="pc"
                  href={row.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-c={row.c}
                >
                  <div className="pc-stripe" />
                  <div className="pc-body">
                    <div>
                      <div className="pc-top">
                        <span className="pclabel">{row.label}</span>
                        <span className="pc-j">{row.journal}</span>
                        <span className="pc-y">{row.cy}</span>
                      </div>
                      <div className="pc-t">{row.title}</div>
                      <div className="pc-ab">{row.ab}</div>
                      {row.co ? <div className="pc-co">{row.co}</div> : null}
                    </div>
                    <div className="pc-r">
                      <span className="pc-badge">{row.badge}</span>
                      <span className="pc-arr">→</span>
                    </div>
                  </div>
                </a>
              )
            })}
            <div className="empty" style={{ display: hasPapers ? 'none' : 'block' }}>
              No papers match this filter.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
