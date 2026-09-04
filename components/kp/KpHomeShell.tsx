import KpHero from './KpHero'
import KpCaseStudies from './KpCaseStudies'
import KpHeadlineImpact from './KpHeadlineImpact'
import KpAbout from './KpAbout'
import KpEducationCerts from './KpEducationCerts'
import KpExpertise from './KpExpertise'
import KpPublications from './KpPublications'
import KpHonors from './KpHonors'
import KpCredStrip from './KpCredStrip'
import KpBooks from './KpBooks'
import KpContact from './KpContact'

export default function KpHomeShell() {
  return (
    <main id="main-content" tabIndex={-1}>
      <KpHero />
      <KpCredStrip />
      <KpAbout />
      <KpHeadlineImpact />
      <KpCaseStudies />
      <KpExpertise />
      <KpPublications />
      <KpHonors />
      <KpBooks />
      <KpEducationCerts />
      <KpContact />
    </main>
  )
}
