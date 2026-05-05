import Reveal from './Reveal'
import CountUpSpan from './CountUpSpan'

export default function BrandAbout() {
  return (
    <section id="about">
      <div className="w si">
        <Reveal>
          <p className="s-eye">{`// Professional profile`}</p>
        </Reveal>
        <Reveal delayClass="d1">
          <h2 className="s-h">
            Research-grade depth.
            <br />
            <em>Industrial execution.</em>
          </h2>
        </Reveal>
        <Reveal delayClass="d2">
          <div className="s-rule" />
        </Reveal>
        <div className="about-grid">
          <Reveal delayClass="d1">
            <div>
              <p className="abody">
                Dr. Kamal Pandey is a <strong>technology strategist with over 16 years of leadership</strong> in
                Artificial Intelligence, Cloud Computing, and Digital Transformation. At{' '}
                <strong>Rivian Automotive</strong>, he drives the digital strategy for the electric vehicle ecosystem
                — focusing on intelligent automation, applied AI architecture, and software-defined vehicle platforms.
              </p>
              <p className="abody">
                A recognised global influencer, he was named to the{' '}
                <strong>Artificial Intelligence 150 (AI150)</strong> for 2025–2026. His work transitions complex
                theoretical models — <strong>Agentic Self-Correction</strong> and <strong>Synthetic Reasoning</strong>{' '}
                — into robust industrial applications, including flagship venues such as IEEE Access and peer-reviewed
                international journals.
              </p>
              <p className="abody">
                As <strong>Founder of SAInexus</strong>, he has architected global transformation programs for Samsung,
                Goodyear, and Merck — consistently delivering outcomes at the top 1% of measurable innovation
                benchmarks in high-stakes environments. He holds a <strong>Doctorate</strong> and advanced degrees in
                Computer Science, and is a <strong>Senior Member of the IEEE and IET</strong> — reflecting a career-long
                commitment to technical excellence and ethical AI governance.
              </p>
              <div className="statrow">
                <div className="scell">
                  <div className="sn">
                    <CountUpSpan target={16} />
                  </div>
                  <div className="sl">Years leadership</div>
                </div>
                <div className="scell">
                  <div className="sn">
                    <CountUpSpan target={21} />
                  </div>
                  <div className="sl">Publications</div>
                </div>
                <div className="scell">
                  <div className="sn">
                    <CountUpSpan target={57} />
                  </div>
                  <div className="sl">Citations</div>
                </div>
                <div className="scell">
                  <div className="sn">
                    <CountUpSpan target={5156} />
                  </div>
                  <div className="sl">RG reads</div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delayClass="d2">
            <div className="complist">
              <div className="comp">
                <div className="ctag">Core competency 01</div>
                <div className="ctitle">Enterprise AI architecture</div>
                <div className="cdesc">
                  Engineering resilient, cloud-native platforms that integrate LLMs and agentic AI into manufacturing
                  and operational workflows — with governance, observability, and scale as first-class concerns.
                </div>
              </div>
              <div className="comp">
                <div className="ctag">Core competency 02</div>
                <div className="ctitle">Cloud &amp; digital strategy</div>
                <div className="cdesc">
                  Leading multi-cloud transformation initiatives across Azure, SaaS, and hybrid estates — prioritising
                  security, sustainability, and measurable business outcomes for global enterprises.
                </div>
              </div>
              <div className="comp">
                <div className="ctag">Core competency 03</div>
                <div className="ctitle">SDV &amp; predictive systems</div>
                <div className="cdesc">
                  Next-generation frameworks for software-defined vehicles — edge intelligence, digital twins, and
                  predictive systems that close the loop between fleet data, product experience, and continuous
                  improvement.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
