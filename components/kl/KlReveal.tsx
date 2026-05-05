'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

type Props = { children: ReactNode; className?: string; delay?: 'd1' | 'd2' | 'd3' }

export default function KlReveal({ children, className = '', delay }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const d = delay ? `kl-rev--${delay}` : ''
  return (
    <div ref={ref} className={`kl-rev ${on ? 'kl-rev--on' : ''} ${d} ${className}`.trim()}>
      {children}
    </div>
  )
}
