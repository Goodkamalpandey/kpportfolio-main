'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Research', href: '#projects' },
  { label: 'Papers',   href: '#papers' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Boards',   href: '#boards' },
  { label: 'Contact',  href: '#contact' },
]

const go = (id: string) =>
  document.getElementById(id.slice(1))?.scrollIntoView({ behavior: 'smooth' })

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [solid, setSolid]     = useState(false)
  const [active, setActive]   = useState('')

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = LINKS.map(l => l.href.slice(1))
    const obs = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const o = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      o.observe(el)
      return o
    })
    return () => obs.forEach(o => o?.disconnect())
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid ? 'bg-[#0d1117]/95 backdrop-blur-md shadow-xl shadow-black/30' : 'bg-transparent'
      }`}
      style={{ height: 'var(--nav-h)' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
          className="font-heading font-black text-white text-lg tracking-wide hover:text-[#18bc9c] transition-colors"
        >
          Dr. Kamal Pandey
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {LINKS.map(l => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className={`nav-link text-white ${active===l.href.slice(1) ? 'active' : ''}`}
            >
              {l.label}
            </button>
          ))}
          <a
            href="/doc/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs px-5 py-2.5"
          >
            Resume
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white p-2 hover:text-[#18bc9c] transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity:0, y:-8 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-8 }}
            transition={{ duration:.2 }}
            className="md:hidden bg-[#0d1117]/98 backdrop-blur-md border-t border-white/5"
          >
            <div className="flex flex-col px-6 py-5 gap-4">
              {LINKS.map(l => (
                <button
                  key={l.href}
                  onClick={() => { go(l.href); setOpen(false) }}
                  className="nav-link text-white text-left py-1"
                >
                  {l.label}
                </button>
              ))}
              <a href="/doc/resume.pdf" target="_blank" rel="noopener noreferrer"
                className="btn-primary text-xs text-center mt-1">
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
