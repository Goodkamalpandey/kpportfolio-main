export default function DmFooter() {
  return (
    <footer className="dm-footer">
      <div className="dm-footer-inner">
        <div className="dm-footer-links">
          <a href="https://www.linkedin.com/in/kamalkpandey" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://scholar.google.com/citations?user=rA_dpyAAAAAJ" target="_blank" rel="noopener noreferrer">
            Scholar
          </a>
          <a href="https://www.researchgate.net/profile/Kamal-Pandey-21" target="_blank" rel="noopener noreferrer">
            ResearchGate
          </a>
          <a href="https://orcid.org/0009-0009-1669-4450" target="_blank" rel="noopener noreferrer">
            ORCID
          </a>
          <a href="#page-top">Back to top</a>
        </div>
        <p className="dm-footer-copy">© {new Date().getFullYear()} Dr. Kamal Pandey. All rights reserved.</p>
      </div>
    </footer>
  )
}
