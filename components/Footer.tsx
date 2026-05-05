'use client'
import { ExternalLink, ArrowUp } from 'lucide-react'

const NAV = [
  { label:'About',    href:'#about' },
  { label:'Skills',   href:'#skills' },
  { label:'Research', href:'#projects' },
  { label:'Papers',   href:'#papers' },
  { label:'Timeline', href:'#timeline' },
  { label:'Boards',   href:'#boards' },
  { label:'Contact',  href:'#contact' },
]
const SOCIALS = [
  { label:'LinkedIn',       href:'https://www.linkedin.com/in/kamalkpandey/' },
  { label:'Google Scholar', href:'https://scholar.google.com/citations?user=rA_dpyAAAAAJ' },
  { label:'ResearchGate',   href:'https://www.researchgate.net/profile/Kamal-Pandey-21' },
  { label:'ORCID',          href:'https://orcid.org/0009-0009-1669-4450' },
  { label:'Website',        href:'https://drkamalpandey.com' },
]
const go = (id: string) =>
  document.getElementById(id.slice(1))?.scrollIntoView({ behavior:'smooth' })

export default function Footer() {
  return (
    <footer style={{ background:'#080d15', borderTop:'1px solid rgba(255,255,255,0.04)' }}
            className="py-10">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Brand */}
          <button onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
            className="font-heading font-black text-white text-base hover:text-[#18bc9c] transition-colors">
            Dr. Kamal Pandey
          </button>

          {/* Nav */}
          <nav className="flex flex-wrap items-center gap-5 justify-center">
            {NAV.map(l => (
              <button key={l.label} onClick={() => go(l.href)}
                className="text-gray-500 hover:text-[#18bc9c] text-[11px] font-heading font-bold
                           uppercase tracking-widest transition-colors">
                {l.label}
              </button>
            ))}
          </nav>

          {/* Social */}
          <div className="flex flex-wrap items-center gap-3 justify-center">
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-[#18bc9c] text-[11px] font-heading
                            font-semibold flex items-center gap-1 transition-colors">
                <ExternalLink size={10}/>{s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/[.04] pt-6 flex flex-col md:flex-row
                        items-center justify-between gap-3">
          <p className="text-gray-700 text-xs">
            Copyright © Dr. Kamal Pandey {new Date().getFullYear()} · AI/ML Researcher, Architect, Technical Leader
          </p>
          <button onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
            className="flex items-center gap-1.5 text-gray-600 hover:text-[#18bc9c] text-xs
                       transition-colors group font-heading font-semibold">
            Back to top
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform"/>
          </button>
        </div>
      </div>
    </footer>
  )
}
