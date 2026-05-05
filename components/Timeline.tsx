'use client'
/**
 * Timeline.tsx — Real work experience from Dr. Kamal Pandey's career:
 * Rivian Automotive, Goodyear Tire & Rubber, Larsen & Toubro Infotech.
 * 16+ years spanning Asia, North America, Europe, Australia.
 */
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { MapPin } from 'lucide-react'

const TIMELINE = [
  {
    id:1,
    period:'2019 – Present',
    title:'Solutions Architect — Digital & Cloud Solutions, GenAI, Digital Workplace & Automation',
    org:'Rivian Automotive Inc.',
    orgUrl:'https://rivian.com',
    location:'Irvine / Los Angeles, CA, USA',
    logo:'/img/rivian_sq.png',
    desc:`At Rivian, Dr. Pandey architects and leads the company's Cloud AI, Generative AI, and Digital Workplace strategy. He drives the adoption of Microsoft Azure, Azure OpenAI, Microsoft 365, Google Workspace, Slack, and RPA/Power Platform to optimise operations and employee experiences. His work aligns digital workplace technology with Rivian's mission of sustainable electric transportation, enabling the company's rapid scale-up with intelligent, cloud-native infrastructure.`,
  },
  {
    id:2,
    period:'2017 – 2019',
    title:'Senior Office 365 / Digital Solutions Architect',
    org:'The Goodyear Tire & Rubber Company',
    orgUrl:'https://goodyear.com',
    location:'Akron, Ohio, USA',
    logo:'/img/goodyear_sq.png',
    desc:`Promoted to Senior Architect, Dr. Pandey led Goodyear's global Microsoft 365 and Digital Workplace transformation. Responsibilities included architecting SharePoint Online migration for global subsidiaries, deploying Microsoft Teams enterprise-wide, building Power Apps and Power Automate solutions, and establishing information governance frameworks across a multinational organisation.`,
  },
  {
    id:3,
    period:'2015 – 2017',
    title:'Office 365 / SharePoint Architect',
    org:'The Goodyear Tire & Rubber Company',
    orgUrl:'https://goodyear.com',
    location:'Akron, Ohio, USA',
    logo:'/img/goodyear_sq.png',
    desc:`Joining Goodyear as SharePoint Architect, Dr. Pandey designed and implemented enterprise SharePoint solutions across global operations spanning 22 countries. He introduced structured information architecture practices, established SharePoint governance policies, and delivered custom business applications on SharePoint and the emerging Office 365 platform — building the foundation for Goodyear's subsequent digital workplace transformation.`,
  },
  {
    id:4,
    period:'2013 – 2015',
    title:'Technical Lead — Enterprise Content Management & Collaboration (SharePoint)',
    org:'Larsen & Toubro Infotech Ltd (LTI)',
    orgUrl:'https://lntinfotech.com',
    location:'India (Global Delivery)',
    logo:'/img/lti_sq.png',
    desc:`At LTI, Dr. Pandey served as Technical Lead for ECM and SharePoint practices, designing and delivering enterprise solutions for global clients across manufacturing, BFSI, and utilities verticals. He led teams of developers, managed client relationships, and established delivery frameworks for SharePoint 2010/2013 and Office 365 implementation projects spanning Asia, Europe, and North America — developing the global enterprise delivery skills that define his career.`,
  },
  {
    id:5,
    period:'Pre-2013',
    title:'Early Career — Enterprise Technology Roles',
    org:'Various Enterprise Organisations',
    orgUrl:'#',
    location:'Asia, Australia, Europe',
    logo:'/img/global_sq.png',
    desc:`Dr. Pandey's early career spans enterprise technology roles across Asia, Australia, and Europe — accumulating over 16 years of global experience in enterprise software, collaboration platforms, and digital transformation. This international exposure across diverse industries and cultures informs his strategic, globally-minded approach to technology architecture and research.`,
  },
]

function TLItem({ item, idx, inView }: { item: typeof TIMELINE[0]; idx: number; inView: boolean }) {
  const even = idx % 2 === 0

  return (
    <>
      {/* ── Mobile layout ─────────────────────────────────────────────────── */}
      <motion.div className="md:hidden flex gap-4 mb-8"
        initial={{opacity:0,x:-16}} animate={inView?{opacity:1,x:0}:{}}
        transition={{duration:.45,delay:idx*.1}}>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0
                          border-2 bg-[#161d2b]" style={{ borderColor:'var(--accent)' }}>
            <Image src={item.logo} alt={item.org} width={28} height={28} className="object-contain"
              onError={e=>{(e.currentTarget as HTMLImageElement).style.display='none'}}/>
          </div>
          {idx < TIMELINE.length-1 && (
            <div className="w-0.5 flex-1 mt-2" style={{ background:'rgba(24,188,156,.2)' }}/>
          )}
        </div>
        <div className="pb-4">
          <span className="text-[#18bc9c] text-[10px] font-heading font-bold uppercase tracking-widest">
            {item.period}
          </span>
          <h3 className="text-white font-heading font-bold text-sm mt-0.5 leading-snug">{item.title}</h3>
          <a href={item.orgUrl} target="_blank" rel="noopener noreferrer"
             className="text-gray-300 font-semibold text-xs hover:text-[#18bc9c] transition-colors">
            {item.org}
          </a>
          <div className="flex items-center gap-1 text-gray-500 text-[10px] mt-0.5 mb-2">
            <MapPin size={10}/>{item.location}
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
        </div>
      </motion.div>

      {/* ── Desktop alternating ───────────────────────────────────────────── */}
      <div className="hidden md:grid grid-cols-2 gap-0 relative mb-10">
        {even ? (
          <>
            {/* Left text */}
            <motion.div className="pr-14 text-right"
              initial={{opacity:0,x:-25}} animate={inView?{opacity:1,x:0}:{}}
              transition={{duration:.45,delay:idx*.1}}>
              <span className="text-[#18bc9c] text-[10px] font-heading font-bold uppercase tracking-widest">
                {item.period}
              </span>
              <h3 className="text-white font-heading font-bold text-base mt-0.5 leading-snug">{item.title}</h3>
              <a href={item.orgUrl} target="_blank" rel="noopener noreferrer"
                 className="text-gray-300 font-semibold text-sm hover:text-[#18bc9c] transition-colors">
                {item.org}
              </a>
              <div className="flex items-center gap-1 text-gray-500 text-[10px] mt-0.5 mb-2 justify-end">
                <MapPin size={10}/>{item.location}
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
            {/* Right: dot */}
            <div className="pl-14 flex items-start">
              <motion.div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center
                                     -ml-6 flex-shrink-0 border-2 bg-[#161d2b]"
                style={{ borderColor:'var(--accent)' }}
                initial={{opacity:0,scale:.5}} animate={inView?{opacity:1,scale:1}:{}}
                transition={{duration:.35,delay:idx*.1+.1}}>
                <Image src={item.logo} alt={item.org} width={32} height={32} className="object-contain"
                  onError={e=>{(e.currentTarget as HTMLImageElement).style.display='none'}}/>
              </motion.div>
            </div>
          </>
        ) : (
          <>
            {/* Left: dot */}
            <div className="pr-14 flex items-start justify-end">
              <motion.div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center
                                     -mr-6 flex-shrink-0 border-2 bg-[#161d2b]"
                style={{ borderColor:'var(--accent)' }}
                initial={{opacity:0,scale:.5}} animate={inView?{opacity:1,scale:1}:{}}
                transition={{duration:.35,delay:idx*.1+.1}}>
                <Image src={item.logo} alt={item.org} width={32} height={32} className="object-contain"
                  onError={e=>{(e.currentTarget as HTMLImageElement).style.display='none'}}/>
              </motion.div>
            </div>
            {/* Right text */}
            <motion.div className="pl-14"
              initial={{opacity:0,x:25}} animate={inView?{opacity:1,x:0}:{}}
              transition={{duration:.45,delay:idx*.1}}>
              <span className="text-[#18bc9c] text-[10px] font-heading font-bold uppercase tracking-widest">
                {item.period}
              </span>
              <h3 className="text-white font-heading font-bold text-base mt-0.5 leading-snug">{item.title}</h3>
              <a href={item.orgUrl} target="_blank" rel="noopener noreferrer"
                 className="text-gray-300 font-semibold text-sm hover:text-[#18bc9c] transition-colors">
                {item.org}
              </a>
              <div className="flex items-center gap-1 text-gray-500 text-[10px] mt-0.5 mb-2">
                <MapPin size={10}/>{item.location}
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          </>
        )}
      </div>
    </>
  )
}

export default function Timeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-60px' })

  return (
    <section id="timeline" className="section-card py-24">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div ref={ref}
          initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}}
          transition={{duration:.5}} className="text-center mb-16">
          <h2 className="section-title section-title-light">Career Timeline</h2>
          <div className="section-rule"/>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            16+ years of global enterprise technology leadership across three continents.
          </p>
        </motion.div>

        <div className="relative">
          {/* Central line — desktop only */}
          <div className="hidden md:block tl-line opacity-30"/>
          {TIMELINE.map((item,i) => (
            <TLItem key={item.id} item={item} idx={i} inView={inView}/>
          ))}
        </div>
      </div>
    </section>
  )
}
