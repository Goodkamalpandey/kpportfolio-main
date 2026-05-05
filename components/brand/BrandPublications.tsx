import Reveal from './Reveal'

const SPOTLIGHT = [
  {
    title: 'The Dynamic Reasoning Trace: Achieving Verifiable Faithfulness through Agentic Self-Correction',
    venue: 'IJSRCSE',
    year: '2025',
    author: 'Kamal Pandey',
    href: 'https://www.researchgate.net/profile/Kamal-Pandey-21',
  },
  {
    title: 'Synthetic Reasoning: Verifiable AI by Modular Program Synthesis',
    venue: 'World Journal of AI & Robotics Research',
    year: '2025',
    author: 'Kamal Pandey',
    href: 'https://doi.org/10.63620/MK.WJAIRR.2025',
  },
  {
    title: 'The Convergence of AI and Low-Code Platforms: Evolution, Applications, and Benchmarks',
    venue: 'IEEE Access',
    year: '2025',
    author: 'Kamal Pandey',
    href: 'https://www.researchgate.net/publication/394170940',
  },
  {
    title: 'An Architectural Framework for AI-Driven Intelligent Commerce: The Data Nervous System',
    venue: 'Jana Nexus: Journal of Computer Science',
    year: '2025',
    author: 'Kamal Pandey',
    href: 'https://www.researchgate.net/profile/Kamal-Pandey-21',
  },
]

export default function BrandPublications() {
  return (
    <section id="publications">
      <div className="w si">
        <Reveal>
          <p className="s-eye">{`// Selected scholarly works`}</p>
        </Reveal>
        <Reveal delayClass="d1">
          <h2 className="s-h">
            Flagship research
            <br />
            <em>with industrial relevance.</em>
          </h2>
        </Reveal>
        <Reveal delayClass="d2">
          <div className="s-rule" />
        </Reveal>
        <Reveal delayClass="d1">
          <p className="pub-intro">
            Peer-reviewed work spanning agentic self-correction, synthetic reasoning, IEEE Access systems research,
            and intelligent commerce architecture — the same themes that inform applied AI at Rivian scale.
          </p>
        </Reveal>
        <div className="pub-grid">
          {SPOTLIGHT.map((p, i) => (
            <Reveal key={p.title} delayClass={i % 2 ? 'd2' : 'd1'}>
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="pub-card">
                <span className="pub-venue">{p.venue}</span>
                <span className="pub-year">{p.year}</span>
                <h3 className="pub-title">{p.title}</h3>
                <span className="pub-author">{p.author}</span>
                <span className="pub-cta">View paper →</span>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal delayClass="d2">
          <a href="#research" className="pub-more">
            Full research catalogue &amp; metrics ↓
          </a>
        </Reveal>
      </div>
    </section>
  )
}
