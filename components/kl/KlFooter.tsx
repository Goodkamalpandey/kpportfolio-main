export default function KlFooter() {
  return (
    <footer className="kl-footer">
      <div className="kl-footer-inner">
        <nav className="kl-footer-links" aria-label="Social and profiles">
          <a href="https://www.linkedin.com/in/kamalkpandey" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://scholar.google.com/citations?user=rA_dpyAAAAAJ" target="_blank" rel="noopener noreferrer">
            Google Scholar
          </a>
          <a href="https://www.researchgate.net/profile/Kamal-Pandey-21" target="_blank" rel="noopener noreferrer">
            ResearchGate
          </a>
          <a href="#page-top">Back to top</a>
        </nav>
        <p className="kl-footer-copy">© {new Date().getFullYear()} Dr. Kamal Pandey. All rights reserved.</p>
      </div>
    </footer>
  )
}
