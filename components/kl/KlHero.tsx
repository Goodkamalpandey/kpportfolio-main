import KlReveal from './KlReveal'

export default function KlHero() {
  return (
    <section className="kl-hero" id="main-content" aria-labelledby="kl-hero-name">
      <div className="kl-hero-copy">
        <span className="kl-hero-accent" aria-hidden />
        <p className="kl-hero-eyebrow">Applied AI · Architecture · Research</p>
        <h1 id="kl-hero-name" className="kl-hero-name">
          Dr. Kamal Pandey
        </h1>
        <p className="kl-hero-lead">
          A portfolio without the usual noise — clear, warm, and confident. Frontier AI, made understandable and
          deployable.
        </p>
        <p className="kl-hero-meta">
          IEEE &amp; IET Senior Member · AI150 2025–26 · 21 publications · Founder, SAInexus
        </p>
        <div className="kl-hero-actions">
          <a
            className="kl-pill"
            href="https://topmate.io/Kamalpandey"
            target="_blank"
            rel="noopener noreferrer"
          >
            Collaborate
          </a>
          <a className="kl-pill kl-pill--ghost" href="#expertise">
            View expertise
          </a>
        </div>
      </div>
      <KlReveal delay="d1" className="kl-hero-aside">
        <p>Simple ideas. Significant outcomes.</p>
        <span>Editorial ethos · inspired by award-winning studio work</span>
      </KlReveal>
    </section>
  )
}
