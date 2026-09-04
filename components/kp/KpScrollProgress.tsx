'use client'

import { useEffect, useState } from 'react'

export default function KpScrollProgress() {
  const [p, setP] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrollable = doc.scrollHeight - doc.clientHeight
      const next = scrollable > 0 ? doc.scrollTop / scrollable : 0
      setP(Math.min(1, Math.max(0, next)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-[env(safe-area-inset-top,0px)] z-[100] h-[3px] bg-transparent"
      aria-hidden
    >
      <div
        className="h-full origin-left will-change-transform bg-kp-accent/90 dark:bg-kp-accent/95"
        style={{ transform: `scaleX(${p})` }}
      />
    </div>
  )
}
