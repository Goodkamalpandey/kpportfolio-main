export default function BrandFooter() {
  return (
    <footer>
      <div className="fl">
        <strong>Dr. Kamal Pandey</strong> &nbsp;·&nbsp; Sr. Staff Software Architect, Applied AI · Rivian &nbsp;·&nbsp;
        © {new Date().getFullYear()} All rights reserved.
      </div>
      <div className="flinks">
        <a href="https://www.drkamalpandey.com/" className="flink">
          Site
        </a>
        <a href="https://scholar.google.com/citations?user=rA_dpyAAAAAJ" target="_blank" rel="noopener noreferrer" className="flink">
          Scholar
        </a>
        <a href="https://www.researchgate.net/profile/Kamal-Pandey-21" target="_blank" rel="noopener noreferrer" className="flink">
          ResearchGate
        </a>
        <a href="https://orcid.org/0009-0009-1669-4450" target="_blank" rel="noopener noreferrer" className="flink">
          ORCID
        </a>
        <a href="https://medium.com/@kamalkismca" target="_blank" rel="noopener noreferrer" className="flink">
          Blog
        </a>
        <a href="https://topmate.io/Kamalpandey" target="_blank" rel="noopener noreferrer" className="flink">
          Consult
        </a>
        <a href="https://www.linkedin.com/in/kamalkpandey" target="_blank" rel="noopener noreferrer" className="flink">
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
