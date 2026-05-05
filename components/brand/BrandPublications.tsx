import Reveal from './Reveal'

const SPOTLIGHT = [
  {
    title: 'The Dynamic Reasoning Trace: Achieving Verifiable Faithfulness through Agentic Self-Correction',
    venue: 'IJSRCSE',
    year: '2025',
    author: 'Kamal Pandey',
    href: 'https://www.researchgate.net/profile/Kamal-Pandey-21/publication/394535014_The_Dynamic_Reasoning_Trace_Achieving_Verifiable_Faithfulness_through_Agentic_Self-Correction/links/68a387176327cf7b63d7586e/The-Dynamic-Reasoning-Trace-Achieving-Verifiable-Faithfulness-through-Agentic-Self-Correction.pdf',
  },
  {
    title: 'Synthetic Reasoning: Verifiable AI by Modular Program Synthesis',
    venue: 'World Journal of AI & Robotics Research',
    year: '2025',
    author: 'Kamal Pandey',
    href: 'https://www.researchgate.net/profile/Kamal-Pandey-21/publication/395245321_Synthetic_Reasoning_Verifiable_AI_by_Modular_Program_Synthesis/links/68b91246d9261f6f51b132b9/Synthetic-Reasoning-Verifiable-AI-by-Modular-Program-Synthesis.pdf',
  },
  {
    title: 'The Convergence of AI and Low-Code Platforms: Evolution, Applications, and Benchmarks',
    venue: 'IEEE Access',
    year: '2025',
    author: 'Kamal Pandey',
    href: 'https://www.researchgate.net/profile/Kamal-Pandey-21/publication/394170940_The_Convergence_of_Artificial_Intelligence_and_Low-CodeNo-_Code_Platforms_Evolution_Applications_and_Benchmarks/links/688beb4f12647e01a03aeb70/The-Convergence-of-Artificial-Intelligence-and-Low-Code-No-Code-Platforms-Evolution-Applications-and-Benchmarks.pdf',
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
