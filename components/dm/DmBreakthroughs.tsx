import { BREAKTHROUGHS } from './content'

export default function DmBreakthroughs() {
  return (
    <section className="dm-section" id="breakthroughs" aria-labelledby="dm-breakthroughs-title">
      <div className="dm-section-inner">
        <div className="dm-section-head">
          <div>
            <p className="dm-section-label">Breakthroughs</p>
            <h2 id="dm-breakthroughs-title" className="dm-section-title">
              Explore innovations in agentic AI and systems at scale
            </h2>
          </div>
          <a className="dm-section-link" href="#publications">
            View publications →
          </a>
        </div>
      </div>
      <div className="dm-rail-wrap" role="region" aria-label="Breakthrough cards" tabIndex={0}>
        <div className="dm-rail">
          {BREAKTHROUGHS.map((b) => (
            <a
              key={b.title}
              href={b.href}
              className="dm-card"
              {...('external' in b && b.external ? { target: '_blank' as const, rel: 'noopener noreferrer' as const } : {})}
            >
              <p className="dm-card-kicker">{b.kicker}</p>
              <h3 className="dm-card-title">{b.title}</h3>
              <p className="dm-card-blurb">{b.blurb}</p>
              <span className="dm-card-cta">Learn more →</span>
            </a>
          ))}
        </div>
      </div>
      <div className="dm-section-inner">
        <p className="dm-rail-hint">Scroll horizontally to see more cards.</p>
      </div>
    </section>
  )
}
