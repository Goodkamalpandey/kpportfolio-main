import KlReveal from './KlReveal'

export default function KlExperience() {
  return (
    <section className="kl-section kl-section--paper" id="path" aria-labelledby="kl-path-title">
      <div className="kl-section-inner">
        <div className="kl-sec-head">
          <div>
            <p className="kl-sec-label">Path</p>
            <h2 id="kl-path-title" className="kl-sec-title">
              Select roles &amp; industries
            </h2>
          </div>
        </div>
        <KlReveal>
          <ul className="kl-path">
            <li>
              <span className="kl-path-when">Present</span>
              <span className="kl-path-role">Sr. Staff Software Architect — Applied AI, Rivian Automotive</span>
              <p className="kl-path-note">
                Fleet-scale architecture, OTA-aware programs, and AI systems aligned to automotive safety culture.
              </p>
            </li>
            <li>
              <span className="kl-path-when">Prior</span>
              <span className="kl-path-role">Samsung · Goodyear · Merck</span>
              <p className="kl-path-note">
                Engineering and architecture leadership across devices, materials science platforms, and life-sciences
                technology — a consistent thread of trustworthy delivery.
              </p>
            </li>
          </ul>
        </KlReveal>
      </div>
    </section>
  )
}
