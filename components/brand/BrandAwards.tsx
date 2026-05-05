import Reveal from './Reveal'

export default function BrandAwards() {
  return (
    <section id="awards">
      <div className="w si">
        <Reveal>
          <p className="s-eye">{`// Honors & recognition`}</p>
        </Reveal>
        <Reveal delayClass="d1">
          <h2 className="s-h">
            Recognized by
            <br />
            <em>independent institutions.</em>
          </h2>
        </Reveal>
        <Reveal delayClass="d2">
          <div className="s-rule" />
        </Reveal>
        <Reveal delayClass="d1">
        <div className="awards-grid">
          <div className="afeat">
            <div className="afeat-l">
              <div className="ayear">2025 — 2026</div>
              <div className="aicon">◈</div>
              <div className="atitle">
                Artificial Intelligence 150
                <br />
                (AI150)
              </div>
              <div className="aorg">Constellation Research · Global</div>
            </div>
            <div className="afeat-r">
              <p className="adesc" style={{ fontSize: '1.05rem', marginBottom: '1.2rem' }}>
                The AI150 is compiled annually by Constellation Research — a globally recognized technology research
                and advisory firm serving Fortune 500 CXOs. The 2025–2026 cohort represents the{' '}
                <strong style={{ color: 'var(--t1)', fontWeight: 400 }}>
                  150 individuals worldwide
                </strong>{' '}
                whose work has most materially advanced Artificial Intelligence. Dr. Pandey was selected in
                recognition of his architectural contributions at Rivian and his published theoretical research in
                Agentic AI.
              </p>
              <a
                href="https://www.constellationr.com/artificial-intelligence-150-2025-2026/speakers/dr-kamal-pandey"
                target="_blank"
                rel="noopener noreferrer"
                className="afeat-link"
              >
                View AI150 Profile ↗
              </a>
            </div>
          </div>
          <div className="acard">
            <div className="ayear">2022</div>
            <div className="aicon" style={{ color: 'var(--gold)' }}>
              ◇
            </div>
            <div className="atitle">National Geomatics Award</div>
            <div className="aorg">Indian Society of Geomatics · ISRO Campus</div>
            <p className="adesc">
              National recognition for outstanding contributions to geomatics and applied technology — conferred at
              the Indian Space Research Organisation campus.
            </p>
          </div>
          <div className="acard">
            <div className="ayear">Senior Member Grade</div>
            <div className="aicon" style={{ color: 'var(--teal)' }}>
              ◉
            </div>
            <div className="atitle">IEEE Senior Member</div>
            <div className="aorg">Institute of Electrical &amp; Electronics Engineers</div>
            <p className="adesc">
              Conferred on fewer than 10% of IEEE members worldwide following independent peer review of technical
              contributions and professional standing.
            </p>
          </div>
          <div className="acard">
            <div className="ayear">Senior Member Grade</div>
            <div className="aicon" style={{ color: 'var(--teal)' }}>
              ◉
            </div>
            <div className="atitle">IET Senior Member</div>
            <div className="aorg">Institution of Engineering &amp; Technology</div>
            <p className="adesc">
              Senior Membership of one of the world&apos;s largest engineering professional bodies — recognizing
              sustained distinguished contributions. Dr. Pandey holds Senior Member status in both IEEE and IET
              simultaneously.
            </p>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  )
}
