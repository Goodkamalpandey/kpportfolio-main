'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

type Props = { children: ReactNode; className?: string; delayClass?: 'd1' | 'd2' | 'd3' | 'd4' }

export default function Reveal({ children, className = '', delayClass }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const delay = delayClass ?? ''
  return (
    <div ref={ref} className={`rv ${vis ? 'vis' : ''} ${delay} ${className}`.trim()}>
      {children}
    </div>
  )
}
