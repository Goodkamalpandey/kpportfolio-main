'use client'
/**
 * Hero.tsx — Full-screen landing with Dr Kamal Pandey's real title,
 * AI-150 recognition badge, and company logos strip.
 */
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronDown, Star } from 'lucide-react'

// Real organisations Dr Kamal Pandey has been associated with
const ORGS = [
  { name: 'Rivian',     src: '/img/rivian.png',     href: 'https://rivian.com' },
  { name: 'Goodyear',   src: '/img/goodyear.png',   href: 'https://goodyear.com' },
  { name: 'LTI',        src: '/img/lti.png',         href: 'https://lntinfotech.com' },
  { name: 'Microsoft Azure', src: '/img/azure.png', href: 'https://azure.microsoft.com' },
  { name: 'Google',     src: '/img/google.png',     href: 'https://google.com' },
  { name: 'Constellation Research', src: '/img/constellation.png', href: 'https://constellationr.com' },
]

const stagger = {
  hidden:{},
  visible:{ transition:{ staggerChildren:.14, delayChildren:.25 } },
}
const item = {
  hidden:{ opacity:0, y:28 },
  visible:{ opacity:1, y:0, transition:{ duration:.55, ease:'easeOut' } },
}

export default function Hero() {
  const toAbout = () => document.getElementById('about')?.scrollIntoView({ behavior:'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background:'linear-gradient(140deg,#070d16 0%,#0d1a2e 55%,#0a1f35 100%)' }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:'linear-gradient(#18bc9c 1px,transparent 1px),linear-gradient(90deg,#18bc9c 1px,transparent 1px)',
          backgroundSize:'72px 72px',
        }}
      />
      {/* Radial glow behind photo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{ background:'radial-gradient(circle,rgba(24,188,156,.12) 0%,transparent 70%)' }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
        variants={stagger} initial="hidden" animate="visible"
      >
        {/* AI-150 recognition badge */}
        <motion.div variants={item} className="mb-6">
          <span className="badge-gold">
            <Star size={12} fill="currentColor"/> Constellation Research — AI 150 (2025–2026)
          </span>
        </motion.div>

        {/* Profile Photo */}
        <motion.div variants={item} className="mb-7">
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden
                          border-4 border-[#18bc9c] shadow-2xl shadow-[#18bc9c]/20">
            <Image
              src="/img/kamal_profile.jpg"
              alt="Dr. Kamal Pandey"
              fill
              className="object-cover"
              priority
              onError={e => { (e.currentTarget as HTMLImageElement).style.display='none' }}
            />
            {/* Initials fallback */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center
                            text-4xl font-heading font-black text-[#18bc9c]"
                 style={{ background:'linear-gradient(135deg,#0d1a2e,#0a1f35)' }}>
              KP
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={item}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-3 tracking-tight">
          Dr. Kamal Pandey
        </motion.h1>

        {/* Credentials row */}
        <motion.p variants={item}
          className="text-sm md:text-base text-[#18bc9c] font-heading font-bold tracking-widest uppercase mb-4">
          DBA · MTech · Computer Science
        </motion.p>

        {/* Role */}
        <motion.p variants={item}
          className="text-base md:text-xl text-gray-300 font-light max-w-2xl leading-relaxed mb-3">
          Solutions Architect — AI, Cloud, Digital Workplace & Automation
          <span className="text-[#18bc9c] font-semibold"> @ Rivian Automotive</span>
        </motion.p>

        {/* Sub-tags */}
        <motion.div variants={item} className="flex flex-wrap justify-center gap-2 mb-9">
          {['AI/ML Researcher','Innovation Advocate','Author','Technical Leader','16+ yrs Global Experience'].map(t => (
            <span key={t} className="chip text-xs">{t}</span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-wrap gap-4 justify-center">
          <button onClick={toAbout} className="btn-primary">Enter Portfolio</button>
          <a href="https://scholar.google.com/citations?user=rA_dpyAAAAAJ"
             target="_blank" rel="noopener noreferrer"
             className="btn-ghost">Google Scholar</a>
        </motion.div>
      </motion.div>

      {/* Org logos */}
      <motion.div
        className="relative z-10 mt-16 w-full max-w-5xl mx-auto px-6"
        initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
        transition={{ delay:1.1, duration:.7 }}
      >
        <div className="border-t border-white/[.06] pt-8 flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {ORGS.map(org => (
            <a key={org.name} href={org.href} target="_blank" rel="noopener noreferrer" title={org.name}>
              <div className="relative h-8 w-24 flex items-center justify-center">
                <Image src={org.src} alt={org.name} fill className="object-contain org-logo-img"
                  onError={e => {
                    const p = (e.currentTarget as HTMLImageElement).parentElement
                    if(p) p.innerHTML = `<span class="text-white/30 text-[10px] font-heading font-bold tracking-wider">${org.name}</span>`
                  }}
                />
              </div>
            </a>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button onClick={toAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/25 hover:text-[#18bc9c] transition-colors"
        animate={{ y:[0,8,0] }} transition={{ repeat:Infinity, duration:2, ease:'easeInOut' }}>
        <ChevronDown size={30}/>
      </motion.button>
    </section>
  )
}
