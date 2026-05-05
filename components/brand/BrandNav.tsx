'use client'

import { useEffect, useRef, useState } from 'react'

const SECTIONS = [
  { href: '#about', label: 'About' },
  { href: '#publications', label: 'Publications' },
  { href: '#awards', label: 'Honors' },
  { href: '#initiatives', label: 'Initiatives' },
  { href: '#research', label: 'Research' },
  { href: '#experience', label: 'Experience' },
  { href: '#linkedin', label: 'Expertise' },
  { href: '#contact', label: 'Contact' },
]

const BLOG = { href: 'https://medium.com/@kamalkismca', label: 'Blog' }

function scrollToHash(hash: string) {
  const id = hash.replace('#', '')
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function BrandNav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const prevOverflow = useRef<string | null>(null)

  useEffect(() => {
    if (!mobileOpen) return undefined
    prevOverflow.current = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow.current ?? ''
      prevOverflow.current = null
      document.removeEventListener('keydown', onKey)
    }
  }, [mobileOpen])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const y = window.scrollY
      let cur = ''
      for (const { href } of SECTIONS) {
        const id = href.slice(1)
        const el = document.getElementById(id)
        if (el && y >= el.offsetTop - 120) cur = id
      }
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav id="nav" className={scrolled ? 'scrolled' : ''}>
        <a
          href="#hero"
          className="nlogo"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Dr. <span>Kamal Pandey</span>
        </a>
        <ul className="nlinks">
          {SECTIONS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.href.slice(1) ? 'act' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToHash(l.href)
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li key={BLOG.href}>
            <a href={BLOG.href} target="_blank" rel="noopener noreferrer" className="nav-ext">
              {BLOG.label}
            </a>
          </li>
        </ul>
        <a
          href="https://topmate.io/Kamalpandey"
          target="_blank"
          rel="noopener noreferrer"
          className="ncta"
        >
          Consult
        </a>
        <button
          type="button"
          className="nmobile-toggle"
          aria-expanded={mobileOpen}
          aria-controls="site-mobile-nav"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </nav>
      <div
        id="site-mobile-nav"
        className={`nmobile-panel ${mobileOpen ? 'open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        {SECTIONS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={(e) => {
              e.preventDefault()
              scrollToHash(l.href)
              setMobileOpen(false)
            }}
          >
            {l.label}
          </a>
        ))}
        <a
          href={BLOG.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileOpen(false)}
        >
          Blog
        </a>
        <a
          href="https://topmate.io/Kamalpandey"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileOpen(false)}
        >
          Consult
        </a>
      </div>
    </>
  )
}
