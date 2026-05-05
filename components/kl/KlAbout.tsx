import KlReveal from './KlReveal'

export default function KlAbout() {
  return (
    <section className="kl-section" id="about" aria-labelledby="kl-about-title">
      <div className="kl-section-inner">
        <div className="kl-sec-head">
          <div>
            <p className="kl-sec-label">About</p>
            <h2 id="kl-about-title" className="kl-sec-title">
              Principal architect for applied AI
            </h2>
          </div>
          <a className="kl-sec-link" href="https://orcid.org/0009-0009-1669-4450" target="_blank" rel="noopener noreferrer">
            ORCID →
          </a>
        </div>
        <KlReveal>
          <div className="kl-split">
            <p className="kl-split-lead">
              Sixteen years across Rivian, Samsung, Goodyear, and Merck — translating research into systems that pass
              safety, governance, and scale.
            </p>
            <div className="kl-prose">
              <p>
                Dr. Pandey leads with a calm, confident voice: peer-reviewed depth where it matters, and plain
                language where it helps teams align. His work spans agentic self-correction, synthetic reasoning, and
                software-defined vehicle intelligence.
              </p>
              <p>
                He holds a Doctor of Business Administration (Westcliff University), founded SAInexus for AI
                literacy, and serves the profession as an IEEE and IET Senior Member.
              </p>
            </div>
          </div>
        </KlReveal>
      </div>
    </section>
  )
}
