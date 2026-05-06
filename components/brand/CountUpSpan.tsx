'use client'

import { useEffect, useRef, useState } from 'react'

type Props = { target: number; className?: string }

export default function CountUpSpan({ target, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const [val, setVal] = useState(0)
  const done = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el || done.current) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || done.current) return
        done.current = true
        const dur = 1600
        let t0: number | null = null
        const tick = (ts: number) => {
          if (t0 === null) t0 = ts
          const p = Math.min((ts - t0) / dur, 1)
          setVal(Math.floor(p * target))
          if (p < 1) requestAnimationFrame(tick)
          else setVal(target)
        }
        requestAnimationFrame(tick)
        obs.disconnect()
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return (
    <span ref={ref} className={className}>
      {val.toLocaleString()}
    </span>
  )
}