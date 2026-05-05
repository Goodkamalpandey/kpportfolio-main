import KpHero from './KpHero'
import KpHeadlineImpact from './KpHeadlineImpact'
import KpAbout from './KpAbout'
import KpEducationCerts from './KpEducationCerts'
import KpExpertise from './KpExpertise'
import KpSkills from './KpSkills'
import KpPublications from './KpPublications'
import KpHonors from './KpHonors'
import KpCredStrip from './KpCredStrip'
import KpInitiatives from './KpInitiatives'
import KpBooks from './KpBooks'
import KpContact from './KpContact'

export default function KpHomeShell() {
  return (
    <main id="main-content" tabIndex={-1}>
      <KpHero />
      <KpHeadlineImpact />
      <KpAbout />
      <KpEducationCerts />
      <KpPublications />
      <KpHonors />
      <KpBooks />
      <KpExpertise />
      <KpSkills />
      <KpInitiatives />
      <KpCredStrip />
      <KpContact />
    </main>
  )
}
