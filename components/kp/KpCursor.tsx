'use client'

import { useEffect, useState } from 'react'

export default function KpCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [on, setOn] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarse = window.matchMedia('(pointer: coarse)').matches
    if (prefersReduced || coarse) return

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setOn(true)
    }
    const leave = () => setOn(false)
    window.addEventListener('mousemove', move)
    document.body.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.body.removeEventListener('mouseleave', leave)
    }
  }, [])

  return (
    <div
      className={`kp-cursor-dot ${on ? 'is-on' : ''}`}
      style={{ left: pos.x, top: pos.y }}
      aria-hidden
    />
  )
}
