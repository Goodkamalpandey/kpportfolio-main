import KpHero from './KpHero'
import KpCaseStudies from './KpCaseStudies'
import KpHeadlineImpact from './KpHeadlineImpact'
import KpAbout from './KpAbout'
import KpEducationCerts from './KpEducationCerts'
import KpExpertise from './KpExpertise'
import KpPublications from './KpPublications'
import KpHonors from './KpHonors'

export default function KpHomeShell() {
  return (
    <main id="main-content" tabIndex={-1}>
      <KpHero />
      <KpAbout />
      <KpEducationCerts />
      <KpHeadlineImpact />
      <KpExpertise />
      <KpPublications compact />
      <KpHonors />
      <KpCaseStudies compact />
    </main>
  )
}
