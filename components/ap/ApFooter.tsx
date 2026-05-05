export default function ApFooter() {
  const y = new Date().getFullYear()
  return (
    <footer className="ap-footer" id="footer">
      <div className="ap-footer-grid">
        <div>
          <p className="ap-footer-brand">Dr. Kamal Pandey</p>
          <p className="ap-footer-copy">Applied AI architecture, research, and standards-aligned practice.</p>
        </div>
        <div className="ap-footer-col">
          <h4>Site</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#competencies">Competencies</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#honors">Honors</a>
            </li>
            <li>
              <a href="#publications">Publications</a>
            </li>
            <li>
              <a href="https://scholar.google.com/citations?user=rA_dpyAAAAAJ" target="_blank" rel="noopener noreferrer">
                Google Scholar
              </a>
            </li>
          </ul>
        </div>
        <div className="ap-footer-col">
          <h4>Profiles</h4>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/kamalkpandey" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.researchgate.net/profile/Kamal-Pandey-21" target="_blank" rel="noopener noreferrer">
                ResearchGate
              </a>
            </li>
            <li>
              <a href="https://orcid.org/0009-0009-1669-4450" target="_blank" rel="noopener noreferrer">
                ORCID
              </a>
            </li>
            <li>
              <a href="https://scholar.google.com/citations?user=rA_dpyAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                Google Scholar
              </a>
            </li>
            <li>
              <a href="https://github.com/kamalkpandey" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className="ap-footer-col">
          <h4>Connect</h4>
          <ul>
            <li>
              <a href="#connect">Collaborate</a>
            </li>
            <li>
              <a href="https://topmate.io/kamalpandey/" target="_blank" rel="noopener noreferrer">
                Topmate
              </a>
            </li>
            <li>
              <a href="#page-top">Back to top</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="ap-footer-legal">© {y} Dr. Kamal Pandey. All rights reserved.</p>
    </footer>
  )
}
