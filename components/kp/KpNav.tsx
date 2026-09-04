'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import KpUiIcon from './KpUiIcon'
import type { KpUiIconName } from './KpUiIcon'

type NavItem = {
  label: string
  href: string
  match: string
  icon: KpUiIconName
  /** When set, active highlight uses pathname instead of scroll-spy. */
  page?: boolean
}

/** Six primary destinations — remainder live in page sections / footer. */
const DESKTOP: readonly NavItem[] = [
  { label: 'Work', href: '/#work', match: 'work', icon: 'briefcase' },
  { label: 'About', href: '/#about', match: 'about', icon: 'userRound' },
  { label: 'Research', href: '/research', match: 'research', icon: 'library', page: true },
  { label: 'Recognition', href: '/recognition', match: 'recognition', icon: 'award', page: true },
  { label: 'Consulting', href: '/consulting', match: 'consulting', icon: 'network', page: true },
  { label: 'Contact', href: '/#contact', match: 'contact', icon: 'mail' },
]

const MOBILE = DESKTOP.map(({ label, href, icon }) => ({ label, href, icon }))

/** Home scroll-spy — document order in KpHomeShell */
const SECTION_IDS = [
  'about',
  'education',
  'impact',
  'expertise',
  'publications',
  'honors',
  'work',
  'contact',
] as const

const MOBILE_MENU_ID = 'kp-site-menu'

export default function KpNav() {
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const mobilePanelRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  const closeMenu = useCallback(() => {
    setOpen(false)
    queueMicrotask(() => menuButtonRef.current?.focus())
  }, [])

  const openMenu = useCallback(() => {
    setOpen(true)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (pathname !== '/') return
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (vis[0]?.target?.id) setActive(vis[0].target.id)
      },
      { rootMargin: '-38% 0px -42% 0px', threshold: [0, 0.08, 0.2] }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [pathname])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const t = window.requestAnimationFrame(() => {
      const first = mobilePanelRef.current?.querySelector<HTMLElement>('a[href]')
      first?.focus()
    })
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        closeMenu()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.cancelAnimationFrame(t)
      document.body.style.overflow = ''
    }
  }, [open, closeMenu])

  const isActive = (item: NavItem) => {
    if (item.page) return pathname === item.href
    if (pathname !== '/') return false
    if (item.match === 'about' && ['about', 'education'].includes(active)) return true
    if (item.match === 'work' && ['work', 'impact'].includes(active)) return true
    return active === item.match
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-[background,backdrop-filter,border-color,box-shadow] duration-300 ease-out-soft ${
          scrolled
            ? 'border-b border-kp-line/60 bg-kp-bg/88 shadow-kp-nav backdrop-blur-xl supports-[backdrop-filter]:bg-kp-bg/80 dark:border-white/10 dark:bg-dark-bg/90 dark:supports-[backdrop-filter]:bg-dark-bg/80'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-content items-center justify-between px-5 py-3 md:px-8 md:py-3.5">
          <Link
            href="/"
            className="rounded-lg px-2 py-2 font-serif text-lg font-semibold tracking-[0.02em] text-kp-accent transition-[opacity,transform] duration-200 ease-out-soft hover:opacity-80 active:scale-[0.98] dark:text-kp-accent motion-reduce:active:scale-100"
          >
            Dr. Kamal Pandey
          </Link>
          <nav className="hidden items-center gap-1 lg:flex xl:gap-2" aria-label="Primary">
            {DESKTOP.map((item) => {
              const activeItem = isActive(item)
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`kp-nav-link inline-flex min-h-[40px] items-center gap-2 rounded-lg px-2 py-2 text-xs font-semibold uppercase tracking-[0.07em] transition-colors duration-200 ease-out-soft xl:px-2.5 ${
                    activeItem
                      ? 'is-active text-kp-accent dark:text-kp-accent'
                      : 'text-kp-muted hover:text-kp-ink dark:text-kp-muted/90 dark:hover:text-dark-text'
                  }`}
                >
                  <KpUiIcon
                    name={item.icon}
                    size={15}
                    className={`shrink-0 ${activeItem ? 'opacity-100' : 'opacity-80'}`}
                  />
                  <span>{item.label}</span>
                </Link>
              )
            })}
            <Link
              href="/contact"
              className="ml-2 inline-flex min-h-[40px] items-center gap-1.5 rounded bg-kp-accent px-4 py-2 text-xs font-semibold text-kp-navy shadow-kp-primary transition-[background-color,transform] duration-200 ease-out-soft hover:bg-kp-award active:scale-[0.98] dark:bg-kp-accent dark:hover:bg-kp-award motion-reduce:active:scale-100"
            >
              <KpUiIcon name="send" size={14} className="text-kp-navy" />
              Let&apos;s talk
            </Link>
          </nav>
          <button
            ref={menuButtonRef}
            type="button"
            className="min-h-[44px] min-w-[44px] rounded-xl px-3 py-2 font-mono text-footnote font-medium text-kp-ink transition-[color,transform] duration-200 ease-out-soft hover:text-kp-accent active:scale-[0.97] lg:hidden dark:text-dark-text dark:hover:text-kp-accent motion-reduce:active:scale-100"
            aria-expanded={open}
            aria-controls={open ? MOBILE_MENU_ID : undefined}
            aria-haspopup="dialog"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => (open ? closeMenu() : openMenu())}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>
      <div
        className="h-[calc(4.25rem+env(safe-area-inset-top,0px))] md:h-[calc(4.5rem+env(safe-area-inset-top,0px))]"
        aria-hidden
      />

      <AnimatePresence>
        {open && (
          <motion.div
            ref={mobilePanelRef}
            id={MOBILE_MENU_ID}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-kp-navy lg:hidden dark:bg-dark-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.22 }}
          >
            <nav className="flex max-h-[70vh] flex-col items-center gap-8 overflow-y-auto px-6" aria-label="Mobile">
              {MOBILE.map((l, idx) => (
                <motion.div
                  key={`${l.href}-${l.label}`}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduceMotion ? 0 : idx * 0.05, duration: reduceMotion ? 0.01 : 0.28 }}
                >
                  <Link
                    href={l.href}
                    className="inline-flex items-center gap-4 font-serif text-3xl font-light text-white transition-opacity hover:opacity-90"
                    onClick={closeMenu}
                  >
                    <KpUiIcon name={l.icon} size={28} className="shrink-0 text-white/85" strokeWidth={1.5} />
                    <span>{l.label}</span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                key="experience-page"
                initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduceMotion ? 0 : MOBILE.length * 0.05, duration: reduceMotion ? 0.01 : 0.28 }}
              >
                <Link
                  href="/experience"
                  className="inline-flex items-center gap-4 font-serif text-3xl font-light text-white transition-opacity hover:opacity-90"
                  onClick={closeMenu}
                >
                  <KpUiIcon name="briefcase" size={28} className="shrink-0 text-white/85" strokeWidth={1.5} />
                  <span>Experience</span>
                </Link>
              </motion.div>
            </nav>
            <button
              type="button"
              className="mt-12 rounded-lg px-4 py-2 font-mono text-sm text-white/80 transition-colors hover:bg-dark-card/10 hover:text-white"
              onClick={closeMenu}
              aria-label="Close navigation menu"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
