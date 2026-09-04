'use client'

import { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import KpUiIcon from './KpUiIcon'
import { CONTACT_HEADLINE_LINES, CONTACT_SUBTEXT, SITE } from './data'

type Intent = 'consulting' | 'speaking' | 'research' | 'other'

const INTENTS: { value: Intent; label: string }[] = [
  { value: 'consulting', label: 'Consulting / advisory' },
  { value: 'speaking', label: 'Speaking' },
  { value: 'research', label: 'Research collaboration' },
  { value: 'other', label: 'Other' },
]

/**
 * Contact CTAs + mailto form (opens the visitor’s mail client).
 * No server storage — message body is built client-side only; nothing is logged.
 */
export default function KpContact({ page = false }: { page?: boolean }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [intent, setIntent] = useState<Intent>('consulting')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'ready'>('idle')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`[drkamalpandey.com] ${intent} — ${name.trim() || 'Inquiry'}`)
    const body = encodeURIComponent(
      [
        `Name: ${name.trim() || '(not provided)'}`,
        `Reply-to: ${email.trim() || '(not provided)'}`,
        `Intent: ${intent}`,
        '',
        message.trim() || '(no message)',
      ].join('\n')
    )
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
    setStatus('ready')
  }

  return (
    <section
      {...(!page ? { id: 'contact' } : {})}
      className={`bg-gradient-to-b from-kp-bg via-dark-card/40 to-kp-bg py-16 dark:from-dark-bg dark:via-dark-card/25 dark:to-dark-bg md:py-24 ${page ? '' : 'scroll-mt-24'}`}
    >
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="text-center">
          <p className="kp-section-eyebrow">Contact</p>
          <motion.h2
            className="mt-3 font-serif text-4xl font-light leading-[1.1] tracking-tight text-kp-ink dark:text-dark-text md:text-6xl md:leading-[1.08]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {CONTACT_HEADLINE_LINES[0]}
            <br />
            {CONTACT_HEADLINE_LINES[1]}
          </motion.h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed tracking-[-0.01em] text-kp-muted dark:text-kp-muted md:text-lg">
            {CONTACT_SUBTEXT}
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-14 max-w-xl rounded-lg border border-kp-line/70 bg-dark-card/90 p-6 shadow-kp-soft dark:border-white/10 dark:bg-dark-card/80 dark:shadow-none md:p-8"
          noValidate
        >
          <p className="font-serif text-xl font-light text-kp-ink dark:text-dark-text">Send a short brief</p>
          <p className="mt-2 text-sm text-kp-muted dark:text-kp-muted">
            Opens your email app with a pre-filled message — nothing is stored on this site.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block text-left text-footnote font-medium text-kp-ink dark:text-dark-text">
              Name
              <input
                type="text"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-kp-line/80 bg-dark-card px-3 py-2.5 text-sm text-kp-ink outline-none ring-kp-accent/40 transition focus:ring-2 dark:border-white/15 dark:bg-dark-bg dark:text-dark-text"
              />
            </label>
            <label className="block text-left text-footnote font-medium text-kp-ink dark:text-dark-text">
              Email
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-kp-line/80 bg-dark-card px-3 py-2.5 text-sm text-kp-ink outline-none ring-kp-accent/40 transition focus:ring-2 dark:border-white/15 dark:bg-dark-bg dark:text-dark-text"
              />
            </label>
          </div>

          <fieldset className="mt-4 text-left">
            <legend className="text-footnote font-medium text-kp-ink dark:text-dark-text">Intent</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {INTENTS.map((opt) => (
                <label
                  key={opt.value}
                  className={`inline-flex cursor-pointer items-center rounded-full border px-3 py-1.5 text-caption2 font-medium transition ${
                    intent === opt.value
                      ? 'border-kp-accent bg-kp-accent/10 text-kp-accent dark:border-kp-accent dark:text-kp-accent'
                      : 'border-kp-line/80 text-kp-muted hover:border-kp-accent/40 dark:border-white/15 dark:text-kp-muted'
                  }`}
                >
                  <input
                    type="radio"
                    name="intent"
                    value={opt.value}
                    checked={intent === opt.value}
                    onChange={() => setIntent(opt.value)}
                    className="sr-only"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="mt-4 block text-left text-footnote font-medium text-kp-ink dark:text-dark-text">
            Message
            <textarea
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What should we talk about?"
              className="mt-1.5 w-full resize-y rounded-xl border border-kp-line/80 bg-dark-card px-3 py-2.5 text-sm text-kp-ink outline-none ring-kp-accent/40 transition focus:ring-2 dark:border-white/15 dark:bg-dark-bg dark:text-dark-text"
            />
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded bg-kp-accent px-5 py-3 text-sm font-semibold text-kp-navy transition hover:bg-kp-award dark:bg-kp-accent dark:hover:bg-kp-award"
          >
            <KpUiIcon name="send" size={14} className="text-kp-navy" />
            Open email draft
          </button>
          {status === 'ready' ? (
            <p className="mt-3 text-center text-footnote text-kp-muted dark:text-kp-muted" role="status">
              If your mail app did not open, email{' '}
              <a href={`mailto:${SITE.email}`} className="font-medium text-kp-accent dark:text-kp-accent">
                {SITE.email}
              </a>{' '}
              directly.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
