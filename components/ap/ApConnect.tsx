import { EMAIL } from './content'

export default function ApConnect() {
  return (
    <section className="ap-section ap-section--narrow" id="connect" aria-labelledby="ap-connect-heading">
      <div className="ap-section-inner">
        <h2 id="ap-connect-heading" className="ap-h2 ap-h2--page">
          Contact
        </h2>
        <hr className="ap-rule ap-rule--section" />
        <p className="ap-sub">
          Available for strategic consulting, research inquiries, speaking, and high-trust architecture reviews — as on{' '}
          <a href="https://www.drkamalpandey.com/" target="_blank" rel="noopener noreferrer">
            drkamalpandey.com
          </a>
          .
        </p>
        <div className="ap-connect-actions">
          <a className="ap-btn" href={`mailto:${EMAIL}`}>
            Email Dr. Pandey
          </a>
          <a
            className="ap-btn ap-btn--outline"
            href="https://topmate.io/kamalpandey/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Topmate consultation
          </a>
        </div>
      </div>
    </section>
  )
}
