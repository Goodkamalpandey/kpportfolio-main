'use client'
/**
 * Boards.tsx — Recognition, Awards & Professional Memberships.
 * Constellation Research AI 150 (2025–2026), ORCID, professional affiliations.
 * This mirrors the "Boards" section referenced in drkamalpandey.com/#Boards.
 */
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Award, Users, BookOpen, ExternalLink } from 'lucide-react'

const RECOGNITIONS = [
  {
    id:1,
    icon: Star,
    badge:'2025 – 2026',
    title:'Constellation Research — Artificial Intelligence 150 (AI 150)',
    org:'Constellation Research Inc.',
    orgUrl:'https://www.constellationr.com/communities/artificial-intelligence-150/ai150-executives/2025-2026',
    color:'#f59e0b',
    desc:`Named to Constellation Research's elite AI 150 list — one of the world's most influential executives leading AI transformation. Dr. Pandey is recognised alongside global peers including Marc Andreessen (a16z), Eric Schmidt (Schmidt Sciences), Dr. Stuart Russell (Berkeley), the White House AI Policy Advisor, CDOs from JP Morgan, NASA, Walmart, Tesla, Mastercard, and IBM Research. This recognition positions him among the pioneers, practitioners, and policy shapers accelerating AI transformation worldwide.`,
    links:[
      { label:'View AI 150 Listing', href:'https://www.constellationr.com/communities/artificial-intelligence-150/ai150-executives/2025-2026' },
      { label:'Kamal\'s Profile', href:'https://www.constellationr.com/user/dr-kamal-pandey' },
    ],
  },
  {
    id:2,
    icon: BookOpen,
    badge:'Active Researcher',
    title:'Google Scholar — AI/ML Researcher & Author',
    org:'Google Scholar',
    orgUrl:'https://scholar.google.com/citations?user=rA_dpyAAAAAJ',
    color:'#18bc9c',
    desc:`Dr. Pandey maintains an active Google Scholar profile with research cited 68+ times across AI, Machine Learning, Cloud, and Modern Digital AI Workplace domains. His published work spans international peer-reviewed journals and open-archive preprints, with co-citation connections to leading researchers from Google Brain, OpenAI, UC Berkeley, and the University of Montreal.`,
    links:[
      { label:'Google Scholar Profile', href:'https://scholar.google.com/citations?user=rA_dpyAAAAAJ' },
    ],
  },
  {
    id:3,
    icon: Award,
    badge:'Registered Researcher',
    title:'ORCID — Open Researcher & Contributor ID',
    org:'ORCID',
    orgUrl:'https://orcid.org/0009-0009-1669-4450',
    color:'#4ade80',
    desc:`Dr. Pandey holds an ORCID iD (0009-0009-1669-4450) — an internationally recognised persistent digital identifier that distinguishes him as a researcher and ensures attribution of his published work across journals, preprint servers, and academic databases worldwide.`,
    links:[
      { label:'ORCID Profile', href:'https://orcid.org/0009-0009-1669-4450' },
    ],
  },
  {
    id:4,
    icon: Users,
    badge:'Publication Archive',
    title:'ESS Open Archive & Authorea — Open Research',
    org:'ESS Open Archive / Authorea',
    orgUrl:'https://essopenarchive.org/users/942841-kamal-pandey',
    color:'#60a5fa',
    desc:`Dr. Pandey shares research openly through ESS Open Archive and Authorea, making his work on AI ethics, digital transformation, and EV ecosystems accessible to practitioners and researchers globally. This commitment to open research reflects his belief that knowledge about responsible AI should be widely available to those shaping the future of work and technology.`,
    links:[
      { label:'ESS Open Archive', href:'https://essopenarchive.org/users/942841-kamal-pandey' },
      { label:'Authorea Profile', href:'https://www.authorea.com/users/942841-dr-kamal-pandey' },
      { label:'ResearchGate', href:'https://www.researchgate.net/profile/Kamal-Pandey-21' },
    ],
  },
]

export default function Boards() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-60px' })

  return (
    <section id="boards" className="section-dark py-24">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div ref={ref}
          initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}}
          transition={{duration:.5}} className="text-center mb-16">
          <h2 className="section-title section-title-light">Recognition & Affiliations</h2>
          <div className="section-rule"/>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Professional recognition, academic affiliations, and community memberships.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {RECOGNITIONS.map((r,i) => {
            const Icon = r.icon
            return (
              <motion.div key={r.id}
                initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}}
                transition={{duration:.45,delay:i*.1}}
                className="glass p-6 flex flex-col gap-4 hover:border-[var(--border-accent)] transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                       style={{ background:`${r.color}15`, border:`1px solid ${r.color}30` }}>
                    <Icon size={20} style={{ color: r.color }}/>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="badge-gold text-[10px] mb-1.5 inline-flex items-center gap-1">
                      <Star size={9} fill="currentColor"/>{r.badge}
                    </span>
                    <h3 className="text-white font-heading font-bold text-sm leading-snug">{r.title}</h3>
                    <a href={r.orgUrl} target="_blank" rel="noopener noreferrer"
                       className="text-gray-500 hover:text-[#18bc9c] text-xs transition-colors font-heading font-semibold">
                      {r.org}
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-xs leading-relaxed">{r.desc}</p>

                {/* Links */}
                <div className="flex flex-wrap gap-3 pt-1 border-t border-white/[.06]">
                  {r.links.map(l => (
                    <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-1 text-[#18bc9c] hover:text-white text-[11px]
                                  font-heading font-semibold transition-colors">
                      <ExternalLink size={10}/> {l.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* AI-150 Context Box */}
        <motion.div
          initial={{opacity:0,y:16}} animate={inView?{opacity:1,y:0}:{}}
          transition={{delay:.55}}
          className="mt-10 glass p-6 border-l-4"
          style={{ borderLeftColor:'var(--gold)' }}
        >
          <div className="flex items-start gap-4">
            <Star size={22} className="flex-shrink-0 mt-0.5" style={{ color:'var(--gold)' }} fill="currentColor"/>
            <div>
              <p className="text-white font-heading font-bold text-sm mb-1">
                Constellation Research AI 150 — Global Elite Recognition
              </p>
              <p className="text-gray-400 text-xs leading-relaxed">
                The AI 150 is an elite global list recognising the most influential executives leading AI transformation
                across entertainment, financial services, healthcare, government, retail, and automotive sectors.
                Dr. Pandey is one of a select group of industry practitioners — alongside CTOs, CDOs, and researchers
                from the world&apos;s most influential organisations — recognised for inspiring others to accelerate AI
                transformation and address the key technology challenges of this generation.
              </p>
              <a href="https://www.constellationr.com/communities/artificial-intelligence-150"
                 target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-1.5 mt-3 text-[#f59e0b] hover:text-white
                            text-xs font-heading font-bold transition-colors">
                <ExternalLink size={11}/> Learn about the AI 150 Programme
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
