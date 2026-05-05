import KlReveal from './KlReveal'

export default function KlRecognition() {
  return (
    <section className="kl-section kl-section--paper" id="recognition" aria-labelledby="kl-rec-title">
      <div className="kl-section-inner">
        <div className="kl-sec-head">
          <div>
            <p className="kl-sec-label">Recognition</p>
            <h2 id="kl-rec-title" className="kl-sec-title">
              Standing built on substance
            </h2>
          </div>
          <a
            className="kl-sec-link"
            href="https://scholar.google.com/citations?user=rA_dpyAAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Scholar profile →
          </a>
        </div>
        <KlReveal>
          <div className="kl-stats">
            <div className="kl-stat">
              <strong>21</strong>
              <span>Peer-reviewed publications across AI systems and architecture themes.</span>
            </div>
            <div className="kl-stat">
              <strong>AI150</strong>
              <span>Global Influencer 2025–26 — among voices shaping responsible AI.</span>
            </div>
            <div className="kl-stat">
              <strong>IEEE</strong>
              <span>Senior Member (IET Senior Member) — technical leadership and contribution at grade.</span>
            </div>
          </div>
        </KlReveal>
      </div>
    </section>
  )
}
