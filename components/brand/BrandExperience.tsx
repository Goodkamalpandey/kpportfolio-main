'use client'

import { useState } from 'react'
import Reveal from './Reveal'

type Ep = 'rivian' | 'sainexus' | 'kentron' | 'samsung' | 'goodyear' | 'lti'

const NAV: { id: Ep; label: string; sub: string }[] = [
  { id: 'rivian', label: 'Rivian', sub: 'Present' },
  { id: 'sainexus', label: 'SAInexus', sub: 'Founder' },
  { id: 'kentron', label: 'Kentron AI', sub: 'Founding CTO' },
  { id: 'samsung', label: 'Samsung SDS', sub: '2019–2021' },
  { id: 'goodyear', label: 'Goodyear', sub: '2015–2019' },
  { id: 'lti', label: 'LTI — L&T Infotech', sub: '2012–2015' },
]

export default function BrandExperience() {
  const [active, setActive] = useState<Ep>('rivian')

  return (
    <section id="experience">
      <div className="w si">
        <Reveal>
          <p className="s-eye">{`// 04 — Professional Journey`}</p>
        </Reveal>
        <Reveal delayClass="d1">
          <h2 className="s-h">
            Critical roles at
            <br />
            <em>distinguished organizations.</em>
          </h2>
        </Reveal>
        <Reveal delayClass="d2">
          <div className="s-rule" />
        </Reveal>
        <div className="exp-grid">
          <Reveal>
            <div className="exp-nav-wrap">
              {NAV.map((n) => (
                <div
                  key={n.id}
                  className={`en-item ${active === n.id ? 'act' : ''}`}
                  data-ep={n.id}
                  onClick={() => setActive(n.id)}
                  onKeyDown={(e) => e.key === 'Enter' && setActive(n.id)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="en-dot" />
                  <div>
                    <div className="en-label">{n.label}</div>
                  </div>
                  <div className="en-sub">{n.sub}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delayClass="d1">
            <div className={`ep ${active === 'rivian' ? 'act' : ''}`} id="ep-rivian">
              <div className="ep-row">
                <div className="ep-role">
                  Sr. Staff Software Architect
                  <br />
                  — Applied AI
                </div>
                <span className="ep-badge">Present · Critical Role</span>
              </div>
              <div className="ep-org">Rivian Automotive (NASDAQ: RIVN)</div>
              <div className="ep-per">2022 — Present · Los Angeles, CA</div>
              <p className="ep-body">
                The &quot;Sr. Staff&quot; designation at Rivian represents the apex of the individual contributor
                engineering ladder — held by fewer than 3–5% of the technical workforce whose architectural decisions
                carry company-wide consequence. Dr. Pandey designs the AI and intelligence architecture underpinning
                Rivian&apos;s Software-Defined Vehicle ecosystem: the systems that transform physical vehicles into
                continuously improving, software-governed platforms.
              </p>
              <p className="ep-body">
                His scope encompasses intelligent automation architecture, multi-cloud AI deployment, Edge computing
                frameworks operating in real-time within vehicle environments, and the broader digital strategy for
                Rivian&apos;s EV ecosystem.
              </p>
              <div className="ep-hi">
                <div className="ep-hc">
                  <div className="ep-hl">Scope</div>
                  <div className="ep-hv">Software-Defined Vehicle AI architecture</div>
                </div>
                <div className="ep-hc">
                  <div className="ep-hl">Platform</div>
                  <div className="ep-hv">Multi-cloud · Edge AI · Digital Twin</div>
                </div>
                <div className="ep-hc">
                  <div className="ep-hl">Grade</div>
                  <div className="ep-hv">Sr. Staff — top IC tier at Rivian</div>
                </div>
                <div className="ep-hc">
                  <div className="ep-hl">Domain</div>
                  <div className="ep-hv">Applied AI &amp; Solution Engineering</div>
                </div>
              </div>
            </div>

            <div className={`ep ${active === 'sainexus' ? 'act' : ''}`} id="ep-sainexus">
              <div className="ep-row">
                <div className="ep-role">Founder &amp; CTO</div>
                <span className="ep-badge">Global Operations</span>
              </div>
              <div className="ep-org">SAInexus</div>
              <div className="ep-per">Founded · Global · Asia · North America · Europe · Australia</div>
              <p className="ep-body">
                SAInexus is an autonomous intelligence platform for multi-cloud orchestration and secure signal
                ingestion at enterprise scale. Through it, Dr. Pandey has architected global transformation programs
                for Samsung, Goodyear, and Merck — organizations collectively operating across 200+ countries —
                consistently delivering outcomes in the top 1% of measurable innovation benchmarks.
              </p>
              <div className="ep-hi">
                <div className="ep-hc">
                  <div className="ep-hl">Clients</div>
                  <div className="ep-hv">Samsung · Goodyear · Merck</div>
                </div>
                <div className="ep-hc">
                  <div className="ep-hl">Platform</div>
                  <div className="ep-hv">Autonomous AI · Multi-cloud</div>
                </div>
                <div className="ep-hc">
                  <div className="ep-hl">Benchmark</div>
                  <div className="ep-hv">Top 1% innovation outcomes</div>
                </div>
                <div className="ep-hc">
                  <div className="ep-hl">Reach</div>
                  <div className="ep-hv">4 continents · 200+ countries</div>
                </div>
              </div>
            </div>

            <div className={`ep ${active === 'kentron' ? 'act' : ''}`} id="ep-kentron">
              <div className="ep-row">
                <div className="ep-role">Founding CTO</div>
                <span className="ep-badge">AI &amp; Custom Applications</span>
              </div>
              <div className="ep-org">Kentron AI</div>
              <div className="ep-per">Founding Role</div>
              <p className="ep-body">
                As Founding CTO of Kentron AI, Dr. Pandey led development of custom AI application solutions,
                specialising in enterprise-scale intelligent systems and autonomous innovation platforms — establishing
                his pattern of translating research-grade frameworks into production deployments.
              </p>
              <div className="ep-hi">
                <div className="ep-hc">
                  <div className="ep-hl">Specialisation</div>
                  <div className="ep-hv">Enterprise-scale intelligent systems</div>
                </div>
                <div className="ep-hc">
                  <div className="ep-hl">Focus</div>
                  <div className="ep-hv">Autonomous innovation platforms</div>
                </div>
              </div>
            </div>

            <div className={`ep ${active === 'samsung' ? 'act' : ''}`} id="ep-samsung">
              <div className="ep-row">
                <div className="ep-role">
                  Senior Consultant
                  <br />
                  — Productivity &amp; Enterprise Apps
                </div>
                <span className="ep-badge">2019–2021</span>
              </div>
              <div className="ep-org">Samsung SDS America</div>
              <div className="ep-per">2019 — 2021</div>
              <p className="ep-body">
                At Samsung SDS America — technology services arm of one of the world&apos;s largest conglomerates —
                Dr. Pandey led productivity and enterprise application strategy at senior consultant level, managing
                digital workplace transformation programs across Samsung&apos;s global enterprise footprint.
              </p>
              <div className="ep-hi">
                <div className="ep-hc">
                  <div className="ep-hl">Parent company</div>
                  <div className="ep-hv">Samsung — Top 5 global technology firm</div>
                </div>
                <div className="ep-hc">
                  <div className="ep-hl">Scope</div>
                  <div className="ep-hv">Enterprise apps · Digital workplace</div>
                </div>
              </div>
            </div>

            <div className={`ep ${active === 'goodyear' ? 'act' : ''}`} id="ep-goodyear">
              <div className="ep-row">
                <div className="ep-role">
                  Solution Architect &amp;
                  <br />
                  Technical Architect
                </div>
                <span className="ep-badge">2015–2019</span>
              </div>
              <div className="ep-org">The Goodyear Tire &amp; Rubber Company</div>
              <div className="ep-per">2015 — 2019 · Fortune 500 · 125 countries</div>
              <p className="ep-body">
                Over four years at Goodyear, Dr. Pandey progressed from Technical Architect to Solution Architect —
                designing the digital workplace, Azure cloud architecture, intranet, and custom application
                infrastructure for one of the world&apos;s most geographically distributed manufacturing companies.
              </p>
              <div className="ep-hi">
                <div className="ep-hc">
                  <div className="ep-hl">Company scale</div>
                  <div className="ep-hv">Fortune 500 · 125 countries</div>
                </div>
                <div className="ep-hc">
                  <div className="ep-hl">Platforms</div>
                  <div className="ep-hv">Azure · SharePoint · M365 · Power Platform</div>
                </div>
              </div>
            </div>

            <div className={`ep ${active === 'lti' ? 'act' : ''}`} id="ep-lti">
              <div className="ep-row">
                <div className="ep-role">
                  Technical Lead &amp;
                  <br />
                  Senior Software Engineer
                </div>
                <span className="ep-badge">2012–2015</span>
              </div>
              <div className="ep-org">LTI — Larsen &amp; Toubro Infotech</div>
              <div className="ep-per">2012 — 2015</div>
              <p className="ep-body">
                At LTI — the IT services arm of the Larsen &amp; Toubro conglomerate — Dr. Pandey progressed from
                Senior Software Engineer to Technical Lead, specialising in .NET, SharePoint, and RPA custom
                solutions for enterprise clients.
              </p>
              <div className="ep-hi">
                <div className="ep-hc">
                  <div className="ep-hl">Stack</div>
                  <div className="ep-hv">.NET · SharePoint · RPA</div>
                </div>
                <div className="ep-hc">
                  <div className="ep-hl">Parent</div>
                  <div className="ep-hv">Larsen &amp; Toubro Group</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
