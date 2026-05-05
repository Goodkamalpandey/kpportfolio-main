'use client'
/**
 * About.tsx — Real biographical content for Dr. Kamal Pandey.
 * DBA, MTech, 16+ years global experience, Rivian Automotive, AI/ML Researcher.
 */
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Code2, Briefcase, Award, ExternalLink } from 'lucide-react'

const QUICK_LINKS = [
  { label:'Skills',          href:'#skills',   Icon: Code2 },
  { label:'Research Work',   href:'#projects', Icon: Briefcase },
  { label:'Publications',    href:'#papers',   Icon: BookOpen },
  { label:'Work Experience', href:'#timeline', Icon: Briefcase },
  { label:'Boards & Awards', href:'#boards',   Icon: Award },
]
const go = (id: string) =>
  document.getElementById(id.slice(1))?.scrollIntoView({ behavior:'smooth' })

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-80px' })

  return (
    <section id="about" className="section-light py-24">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div ref={ref}
          initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:.5 }} className="text-center mb-16">
          <h2 className="section-title section-title-dark">About</h2>
          <div className="section-rule"/>
          <p className="text-gray-500 max-w-lg mx-auto text-sm">
            Technical leader, researcher, and author driving the future of AI & Cloud.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* Photo */}
          <motion.div
            initial={{ opacity:0, x:-35 }} animate={inView?{opacity:1,x:0}:{}}
            transition={{ duration:.6, delay:.15 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl
                            ring-4 ring-[#18bc9c]/25">
              <Image src="/img/kamal_about.jpg" alt="Dr. Kamal Pandey" fill className="object-cover"
                onError={e => { (e.currentTarget as HTMLImageElement).style.display='none' }}/>
              <div className="absolute inset-0 -z-10 flex items-center justify-center text-8xl
                              font-heading font-black text-[#18bc9c]/50"
                   style={{ background:'linear-gradient(135deg,#0d1a2e,#0a1f35)' }}>KP</div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity:0, x:35 }} animate={inView?{opacity:1,x:0}:{}}
            transition={{ duration:.6, delay:.25 }}
            className="flex flex-col gap-5"
          >
            <div>
              <h3 className="text-2xl font-heading font-black text-[#1e2d45] mb-0.5">Dr. Kamal Pandey</h3>
              <p className="text-[#18bc9c] font-heading font-semibold text-xs uppercase tracking-widest">
                DBA · MTech · Solutions Architect — AI, Cloud & Digital Transformation · Rivian Automotive
              </p>
            </div>

            <div className="space-y-3.5 text-gray-600 leading-relaxed text-[0.93rem]">
              <p>
                Dr. Kamal Pandey is a seasoned technical leader with over <strong className="text-[#1e2d45]">16 years of global experience</strong> spanning
                enterprises across Asia, North America, Europe, and Australia. He currently serves as
                <strong className="text-[#18bc9c]"> Solutions Architect — Digital & Cloud Solutions, Generative AI, Digital Workplace & Automation</strong> at{' '}
                <strong className="text-[#1e2d45]">Rivian Automotive</strong>, driving AI-powered transformation of business operations and customer experiences.
              </p>
              <p>
                His expertise spans <strong className="text-[#1e2d45]">Microsoft Azure, Microsoft 365, SharePoint, Slack, Google Workspace, Power Platform, and RPA</strong> technologies.
                Known for strategic vision and innovation, he has led transformative cloud and AI projects across manufacturing, automotive, and enterprise sectors.
              </p>
              <p>
                As an active researcher, Dr. Pandey publishes in journals on AI ethics, the evolving labor market, digital
                workplace transformation, and EV ecosystems. He was named to
                <strong className="text-[#1e2d45]"> Constellation Research&apos;s Artificial Intelligence 150 (AI 150) 2025–2026</strong> — an elite global list alongside Marc Andreessen, Eric Schmidt, and Dr. Stuart Russell.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-2">
              {[
                'Doctor of Business Administration (DBA)',
                'Master of Technology (MTech) — Computer Science',
                'Master\'s & Bachelor\'s degrees in Computer Science',
              ].map(d => (
                <div key={d} className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background:'#18bc9c' }}/>
                  {d}
                </div>
              ))}
            </div>

            {/* ORCID */}
            <a href="https://orcid.org/0009-0009-1669-4450" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#18bc9c] transition-colors font-heading font-semibold">
              <ExternalLink size={11}/> ORCID: 0009-0009-1669-4450
            </a>

            {/* Quick-links */}
            <div className="mt-1">
              <p className="text-[#1e2d45] font-heading font-bold text-xs uppercase tracking-widest mb-3">
                Learn more about my:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {QUICK_LINKS.map(({ label, href, Icon }) => (
                  <button key={label} onClick={() => go(href)}
                    className="btn-ghost text-xs px-4 py-2 gap-1.5">
                    <Icon size={13}/>{label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
