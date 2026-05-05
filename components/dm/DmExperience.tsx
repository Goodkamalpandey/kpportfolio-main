export default function DmExperience() {
  return (
    <section className="dm-section" id="experience" aria-labelledby="dm-exp-title">
      <div className="dm-section-inner">
        <div className="dm-section-head">
          <div>
            <p className="dm-section-label">Experience</p>
            <h2 id="dm-exp-title" className="dm-section-title">
              Select roles across mobility, devices, and life sciences
            </h2>
          </div>
        </div>
        <ul className="dm-list" style={{ borderTop: 'none' }}>
          <li>
            <div style={{ padding: '20px 0', display: 'grid', gap: '8px' }}>
              <span className="dm-list-date">Present</span>
              <span className="dm-list-title" style={{ gridColumn: '1 / -1' }}>
                Sr. Staff Software Architect — Applied AI, Rivian Automotive
              </span>
              <span className="dm-list-cat" style={{ gridColumn: '1 / -1' }}>
                Architecture for AI-driven systems at automotive scale.
              </span>
            </div>
          </li>
          <li>
            <div style={{ padding: '20px 0', display: 'grid', gap: '8px' }}>
              <span className="dm-list-date">Prior</span>
              <span className="dm-list-title" style={{ gridColumn: '1 / -1' }}>
                Samsung · Goodyear · Merck — engineering and architecture leadership
              </span>
              <span className="dm-list-cat" style={{ gridColumn: '1 / -1' }}>
                Enterprise platforms, connected products, and global delivery.
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
