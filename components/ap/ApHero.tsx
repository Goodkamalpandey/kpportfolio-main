import { SOCIALS } from './content'

export default function ApHero() {
  return (
    <section className="ap-home" id="home" aria-labelledby="ap-home-name">
      <div className="ap-banner" role="presentation" />
      <div className="ap-home-inner" id="main-content">
        <div className="ap-avatar" aria-hidden>
          KP
        </div>
        <h1 id="ap-home-name">Dr. Kamal Pandey</h1>
        <p className="ap-home-tagline">Architecting the future of agentic AI</p>
        <p className="ap-home-role">
          Solutions architect &amp; researcher — agentic &amp; applied AI · cloud · digital workplace · enterprise
          architecture
        </p>
        <hr className="ap-rule" />
        <p className="ap-home-affil">Rivian — Cloud, AI, RPA, digital workplace &amp; employee experience</p>
        <p className="ap-home-affil ap-home-affil--muted">
          Los Angeles metropolitan area · IEEE &amp; IET Senior Member · AI150 (2025–26) · Founder, SAInexus
        </p>
        <hr className="ap-rule" />
        <nav className="ap-social" aria-label="Scholarly and professional profiles">
          {SOCIALS.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  )
}
