import Reveal from './Reveal'

export default function BrandContact() {
  return (
    <section id="contact">
      <div className="w si">
        <div className="contact-grid">
          <Reveal>
            <h2 className="cxl">
              Connect
              <br />
              <em>with purpose.</em>
            </h2>
            <p className="cbody">
              Available for strategic consulting, research collaboration, and high-level technical discourse — spanning
              agentic AI, SDV intelligence, and enterprise transformation at Rivian-class scale.
            </p>
            <div className="clinks">
              <a href="https://topmate.io/kamalpandey/" target="_blank" rel="noopener noreferrer" className="clink">
                <span className="cl-label">Book Consultation</span>
                <span className="cl-val">topmate.io/kamalpandey ↗</span>
              </a>
              <a href="mailto:kamalkismca@gmail.com" className="clink">
                <span className="cl-label">Email</span>
                <span className="cl-val">kamalkismca@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/kamalkpandey" target="_blank" rel="noopener noreferrer" className="clink">
                <span className="cl-label">LinkedIn</span>
                <span className="cl-val">linkedin.com/in/kamalkpandey ↗</span>
              </a>
              <a href="https://medium.com/@kamalkismca" target="_blank" rel="noopener noreferrer" className="clink">
                <span className="cl-label">Blog</span>
                <span className="cl-val">medium.com/@kamalkismca ↗</span>
              </a>
              <a
                href="https://scholar.google.com/citations?user=rA_dpyAAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="clink"
              >
                <span className="cl-label">Google Scholar</span>
                <span className="cl-val">59 citations ↗</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1MgvnMC-dLEUwewv0rvUzd5CC49Tnwfnf/view"
                target="_blank"
                rel="noopener noreferrer"
                className="clink"
              >
                <span className="cl-label">Download CV</span>
                <span className="cl-val">Full portfolio PDF ↗</span>
              </a>
            </div>
          </Reveal>
          <Reveal delayClass="d2">
            <p className="s-eye" style={{ marginBottom: '1.5rem' }}>
              Inquiry types
            </p>
            <div className="inq-types">
              <div className="inq">
                <div className="inq-t">Strategic AI Consulting</div>
                <div className="inq-d">
                  Architecture review, AI transformation strategy, and enterprise AI roadmap development for
                  organizations navigating the shift to intelligent, software-defined operations.
                </div>
              </div>
              <div className="inq">
                <div className="inq-t">Research Collaboration</div>
                <div className="inq-d">
                  Joint research in Agentic AI, Synthetic Reasoning, AI safety, and SDV intelligence. Open to
                  partnerships with universities, national labs, and research institutions.
                </div>
              </div>
              <div className="inq">
                <div className="inq-t">Speaking &amp; Expert Commentary</div>
                <div className="inq-d">
                  Keynotes, conference sessions, podcast appearances, and expert commentary on Agentic AI, enterprise
                  transformation, and software-defined automotive systems.
                </div>
              </div>
              <div className="inq">
                <div className="inq-t">Expert Witness &amp; Legal Review</div>
                <div className="inq-d">
                  Technical expert witness for immigration, IP, and technology litigation. EB-1A extraordinary ability
                  matters welcome. Contact directly for legal team inquiries.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
