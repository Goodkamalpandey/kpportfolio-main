import Reveal from './Reveal'

export default function BrandCredentials() {
  return (
    <section id="linkedin">
      <div className="w si">
        <Reveal>
          <p className="s-eye">{`// 05 — Credentials · Skills · Timeline`}</p>
        </Reveal>
        <Reveal delayClass="d1">
          <h2 className="s-h">
            Education, certifications
            <br />
            <em>&amp; technical skills.</em>
          </h2>
        </Reveal>
        <Reveal delayClass="d2">
          <div className="s-rule" />
        </Reveal>

        <Reveal delayClass="d1">
          <div className="rstat" style={{ marginBottom: '3.5rem' }}>
            <div className="rsc" style={{ ['--cc' as string]: 'var(--teal)' }}>
              <div className="rsn">16+</div>
              <div className="rsl">Years experience</div>
              <div className="rss">2008 — Present</div>
            </div>
            <div className="rsc" style={{ ['--cc' as string]: 'var(--gold)' }}>
              <div className="rsn">9</div>
              <div className="rsl">Roles held</div>
              <div className="rss">HCL → LTI → Goodyear → Samsung → Rivian</div>
            </div>
            <div className="rsc" style={{ ['--cc' as string]: 'var(--coral)' }}>
              <div className="rsn">4</div>
              <div className="rsl">Degrees earned</div>
              <div className="rss">DBA · MTech · MSc · BSc</div>
            </div>
            <div className="rsc" style={{ ['--cc' as string]: 'var(--purple)' }}>
              <div className="rsn">20+</div>
              <div className="rsl">Technical skills</div>
              <div className="rss">AI · Cloud · Engineering · Platform</div>
            </div>
          </div>
        </Reveal>

        <div className="li-grid">
          <Reveal>
            <p className="li-col-label" style={{ color: 'var(--teal)' }}>
              Career timeline
            </p>
            <div className="tl">
              {[
                {
                  dot: 'var(--teal)',
                  shadow: '0 0 8px rgba(223,255,79,.45)',
                  role: 'Sr. Staff Software Architect — Applied AI',
                  org: 'Rivian Automotive',
                  orgC: 'var(--teal)',
                  yr: '2022 — Present · Los Angeles, CA',
                },
                {
                  dot: 'rgba(223,255,79,.22)',
                  border: '1px solid rgba(223,255,79,.38)',
                  role: 'Technical Lead — Digital Workplace, RPA, AI',
                  org: 'Rivian Automotive',
                  orgC: 'var(--t2)',
                  yr: '2021 — 2022',
                },
                {
                  dot: 'rgba(223,255,79,.12)',
                  border: '1px solid rgba(223,255,79,.28)',
                  role: 'Staff Software Engineer — Digital Workplace',
                  org: 'Rivian Automotive',
                  orgC: 'var(--t2)',
                  yr: '2021',
                },
                {
                  dot: 'rgba(201,168,76,.25)',
                  border: '1px solid rgba(201,168,76,.4)',
                  role: 'Senior Consultant — Productivity & Enterprise Apps',
                  org: 'Samsung SDS America',
                  orgC: 'var(--gold)',
                  yr: '2019 — 2021',
                },
                {
                  dot: 'rgba(232,114,74,.25)',
                  border: '1px solid rgba(232,114,74,.4)',
                  role: 'Solution Architect — Digital Workplace, Power Platform',
                  org: 'Goodyear Tire & Rubber',
                  orgC: 'var(--coral)',
                  yr: '2017 — 2019 · Fortune 500',
                },
                {
                  dot: 'rgba(232,114,74,.15)',
                  border: '1px solid rgba(232,114,74,.3)',
                  role: 'Technical Architect — SharePoint Online, Azure, M365',
                  org: 'Goodyear Tire & Rubber',
                  orgC: 'var(--t2)',
                  yr: '2015 — 2017',
                },
                {
                  dot: 'rgba(167,139,250,.25)',
                  border: '1px solid rgba(167,139,250,.4)',
                  role: 'Technical Lead — .Net, SharePoint, RPA',
                  org: 'LTI — Larsen & Toubro Infotech',
                  orgC: 'var(--purple)',
                  yr: '2013 — 2015',
                },
                {
                  dot: 'rgba(167,139,250,.15)',
                  border: '1px solid rgba(167,139,250,.3)',
                  role: 'Senior Software Engineer — SharePoint, .Net',
                  org: 'LTI — Larsen & Toubro Infotech',
                  orgC: 'var(--t2)',
                  yr: '2012 — 2013',
                },
                {
                  dot: 'rgba(90,88,104,.3)',
                  border: '1px solid rgba(90,88,104,.5)',
                  role: 'Lead Software Engineer',
                  org: 'HCL Enterprise',
                  orgC: 'var(--t2)',
                  yr: '2010 — 2011',
                  last: true,
                },
              ].map((t) => (
                <div key={t.yr} className="tl-item" style={t.last ? { marginBottom: 0 } : undefined}>
                  <div
                    className="tl-dot"
                    style={{
                      background: t.dot,
                      ...(t.shadow ? { boxShadow: t.shadow } : {}),
                      ...(t.border ? { border: t.border } : {}),
                    }}
                  />
                  <div>
                    <div className="tl-role">{t.role}</div>
                    <div className="tl-org" style={{ color: t.orgC }}>
                      {t.org}
                    </div>
                    <div className="tl-yr">{t.yr}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delayClass="d1">
            <p className="li-col-label" style={{ color: 'var(--gold)' }}>
              Education
            </p>
            <div style={{ marginBottom: '2rem' }}>
              <div className="edu-item" style={{ borderLeft: '2px solid var(--gold)' }}>
                <div className="edu-title">Doctor of Business Administration (DBA)</div>
                <div className="edu-inst" style={{ color: 'var(--gold)' }}>
                  Westcliff University
                </div>
                <div className="edu-yr">2021 — 2023 · Irvine, CA</div>
              </div>
              <div className="edu-item" style={{ borderLeft: '2px solid rgba(201,168,76,.5)' }}>
                <div className="edu-title">Master of Technology (MTech) — Computer Science</div>
                <div className="edu-inst" style={{ color: 'var(--t2)' }}>
                  Advanced Degree
                </div>
                <div className="edu-yr">Computer Science &amp; Engineering</div>
              </div>
              <div className="edu-item" style={{ borderLeft: '2px solid rgba(201,168,76,.3)' }}>
                <div className="edu-title">Master of Science — Computer Science</div>
                <div className="edu-inst" style={{ color: 'var(--t2)' }}>
                  Graduate Degree
                </div>
                <div className="edu-yr">Artificial Intelligence &amp; Machine Learning</div>
              </div>
              <div className="edu-item" style={{ borderLeft: '2px solid rgba(90,88,104,.5)' }}>
                <div className="edu-title">Bachelor of Science — Computer Science</div>
                <div className="edu-inst" style={{ color: 'var(--t2)' }}>
                  Undergraduate Degree
                </div>
                <div className="edu-yr">Foundation · CS &amp; Engineering</div>
              </div>
            </div>

            <p className="li-col-label" style={{ color: 'var(--purple)' }}>
              Certifications
            </p>
            <a href="https://www.linkedin.com/in/kamalkpandey" target="_blank" rel="noopener noreferrer" className="cert-item">
              <div className="cert-dot" style={{ background: 'var(--purple)', boxShadow: '0 0 6px rgba(167,139,250,.5)' }} />
              <div>
                <div className="cert-title">Professional Machine Learning Engineer</div>
                <div className="cert-issuer">Google Cloud · Certified</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/kamalkpandey" target="_blank" rel="noopener noreferrer" className="cert-item">
              <div className="cert-dot" style={{ background: 'rgba(167,139,250,.5)' }} />
              <div>
                <div className="cert-title">Microsoft Azure Solutions Architect Expert</div>
                <div className="cert-issuer">Microsoft · Expert Level</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/kamalkpandey" target="_blank" rel="noopener noreferrer" className="cert-item">
              <div className="cert-dot" style={{ background: 'rgba(167,139,250,.4)' }} />
              <div>
                <div className="cert-title">Microsoft 365 Certified: Enterprise Administrator</div>
                <div className="cert-issuer">Microsoft · Expert Level</div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/kamalkpandey"
              target="_blank"
              rel="noopener noreferrer"
              className="cert-item"
              style={{ border: '1px dashed rgba(167,139,250,.2)', justifyContent: 'space-between' }}
            >
              <span style={{ fontFamily: 'var(--mono)', fontSize: '.62rem', color: 'var(--t3)' }}>
                View all on LinkedIn
              </span>
              <span style={{ color: 'var(--purple)' }}>↗</span>
            </a>
          </Reveal>

          <Reveal delayClass="d2">
            <p className="li-col-label" style={{ color: 'var(--coral)' }}>
              Technical skills
            </p>
            <div className="skill-group">
              <div className="sg-label">AI &amp; Machine Learning</div>
              <div className="pills">
                {['Generative AI', 'LLMs / Agentic AI', 'Machine Learning', 'Deep Learning', 'NLP'].map((x) => (
                  <span key={x} className="pill" style={{ background: 'var(--tdim)', borderColor: 'var(--tbrd)', color: 'var(--teal)' }}>
                    {x}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-group">
              <div className="sg-label">Cloud &amp; Platform</div>
              <div className="pills">
                {['Microsoft Azure', 'Google Cloud', 'Microsoft 365', 'Google Workspace', 'SharePoint Online', 'Slack'].map((x) => (
                  <span key={x} className="pill" style={{ background: 'var(--gdim)', borderColor: 'var(--gbrd)', color: 'var(--gold)' }}>
                    {x}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-group">
              <div className="sg-label">Engineering</div>
              <div className="pills">
                {['Full-Stack Dev', 'RPA', 'Edge Computing', 'Digital Twin', '.NET / C#', 'Power Platform'].map((x) => (
                  <span key={x} className="pill" style={{ background: 'var(--cdim)', borderColor: 'var(--cbrd)', color: 'var(--coral)' }}>
                    {x}
                  </span>
                ))}
              </div>
            </div>

            <p className="li-col-label" style={{ color: 'var(--purple)', marginTop: '1.75rem' }}>
              LinkedIn activity
            </p>
            <a
              href="https://www.linkedin.com/posts/kamalkpandey_evindustry-digitalworkplace-googleworkspace-activity-7333890055251361796-09I6"
              target="_blank"
              rel="noopener noreferrer"
              className="activity-item"
            >
              <div className="act-type" style={{ color: 'var(--purple)' }}>
                Post · 2025
              </div>
              <div className="act-title">How Google Workspace AI helps Rivian innovate in EV</div>
              <div className="act-tags">#EVIndustry #DigitalWorkplace #GoogleWorkspace</div>
            </a>
            <a
              href="https://www.linkedin.com/posts/kamalkpandey_gorivian-ai-digitaltransformation-activity-7372690243004780544-_85L"
              target="_blank"
              rel="noopener noreferrer"
              className="activity-item"
            >
              <div className="act-type" style={{ color: 'var(--purple)' }}>
                Post · 2025
              </div>
              <div className="act-title">AI &amp; Digital Transformation at Rivian</div>
              <div className="act-tags">#GoRivian #AI #DigitalTransformation</div>
            </a>
            <a
              href="https://www.linkedin.com/posts/kamalkpandey_professional-machine-learning-engineer-certification-activity-7283603914556370944-ehzg"
              target="_blank"
              rel="noopener noreferrer"
              className="activity-item"
            >
              <div className="act-type" style={{ color: 'var(--teal)' }}>
                Achievement · Certification
              </div>
              <div className="act-title">Professional Machine Learning Engineer — Google Cloud</div>
              <div className="act-tags">Verified credential · Google Cloud</div>
            </a>
            <a
              href="https://www.linkedin.com/in/kamalkpandey"
              target="_blank"
              rel="noopener noreferrer"
              className="activity-item"
              style={{ border: '1px dashed var(--b1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
              <span style={{ fontFamily: 'var(--mono)', fontSize: '.62rem', color: 'var(--t3)' }}>
                View full LinkedIn profile &amp; activity ↗
              </span>
              <span style={{ color: 'var(--purple)' }}>→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
