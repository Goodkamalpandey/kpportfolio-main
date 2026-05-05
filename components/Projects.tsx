'use client'
/**
 * Projects.tsx — Research & professional initiatives based on Dr Kamal Pandey's
 * published work and documented career. Includes EV AI research, workplace automation,
 * ethical AI frameworks, etc.
 */
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, FileText } from 'lucide-react'

export const PROJECTS = [
  {
    id:1,
    title:'AI & Cloud Digital Transformation — Rivian Automotive',
    short:'Driving GenAI, cloud, and digital workplace evolution at Rivian.',
    thumb:'/img/proj_rivian.png',
    tags:['GenAI','Azure','Digital Workplace','Automation'],
    link:'https://rivian.com',
    detail:`As Solutions Architect at Rivian Automotive, Dr. Pandey leads the design and deployment 
of AI-powered cloud and digital workplace solutions across the organisation. This includes 
architecting Generative AI integrations (Azure OpenAI), automating business processes with 
Power Automate and RPA, and building employee-experience platforms on Microsoft 365 and 
Google Workspace. His work directly supports Rivian's mission of sustainable transport 
through operational efficiency powered by intelligent cloud infrastructure.`,
  },
  {
    id:2,
    title:'AI-Powered Transformation of the Modern Digital Workplace',
    short:'Research roadmap for ethical, human-centred AI adoption in enterprises.',
    thumb:'/img/proj_workplace.png',
    tags:['AI Ethics','Digital Workplace','Research','Policy'],
    link:'https://doi.org/10.13140/RG.2.2.31644.19846',
    detail:`Published in the International Journal of Engineering Applied Science and Management (2025), 
this research paper presents a comprehensive roadmap for AI adoption in modern workplaces. 
Dr. Pandey examines job displacement, algorithmic bias, and data privacy through a mixed-methods 
approach combining qualitative interviews and quantitative surveys. The paper proposes a 
human-centred ethical framework focused on fairness, transparency, and accountability — 
directly informing enterprise AI governance strategies.`,
  },
  {
    id:3,
    title:'AI in Electric Vehicle Ecosystems — Challenges & Opportunities',
    short:'Analysis of AI/ML adoption in EV supply chains, manufacturing, and autonomy.',
    thumb:'/img/proj_ev.png',
    tags:['AI','EV','Automotive','Machine Learning'],
    link:'https://doi.org/10.13140/RG.2.2.32810.32962',
    detail:`Published in the International Journal of Engineering Applied Science and Management (2024), 
this paper analyses the role of AI and machine learning across the electric vehicle lifecycle — 
from manufacturing and predictive maintenance to autonomous driving and customer experience. 
Drawing from his work at Rivian, Dr. Pandey identifies regulatory, infrastructure, and talent 
challenges while modelling pathways for accelerated AI adoption in the EV industry. 
This paper has been downloaded and cited in industry-adjacent research communities.`,
  },
  {
    id:4,
    title:'Goodyear Digital Workplace Transformation',
    short:'Led enterprise-wide M365 and SharePoint modernisation at a Fortune 500.',
    thumb:'/img/proj_goodyear.png',
    tags:['SharePoint','Microsoft 365','Power Platform','Enterprise'],
    link:'https://goodyear.com',
    detail:`During his four-year tenure at The Goodyear Tire & Rubber Company (2015–2019), Dr. Pandey 
served as Senior Digital Solutions Architect and led one of the largest Microsoft 365 
transformations in the manufacturing sector. His work encompassed migrating SharePoint 
on-premises to SharePoint Online, deploying Microsoft Teams globally, building Power Apps 
business solutions, and establishing an enterprise information architecture framework 
spanning dozens of global subsidiaries. This transformation improved employee collaboration 
productivity and reduced IT operational overhead significantly.`,
  },
  {
    id:5,
    title:'Designing Ethical AI for Humanitarian Engineering',
    short:'Framework for responsible AI in disaster management and humanitarian contexts.',
    thumb:'/img/proj_ethics.png',
    tags:['Ethical AI','Humanitarian','Research','Frameworks'],
    link:'https://essopenarchive.org/users/942841-kamal-pandey',
    detail:`This paper — available on ESS Open Archive — presents a systematic literature review of 
ethical AI design challenges in humanitarian engineering contexts, including disaster 
management and emergency response. Dr. Pandey synthesises AI ethics frameworks, integrates 
EV capabilities in emergency scenarios, and proposes governance models for deploying AI 
where human impact is highest. The work is particularly relevant given his dual expertise 
in automotive AI (Rivian) and broader societal applications of intelligent systems.`,
  },
  {
    id:6,
    title:'AI & the Evolving Labor Market — Policy Roadmap',
    short:"Comprehensive review of AI's workforce impact with actionable policy recommendations.",
    thumb:'/img/proj_labor.png',
    tags:['Labor Market','Policy','AI Research','Future of Work'],
    link:'https://doi.org/10.32996/jcsts.2025.7.10.33',
    detail:`Published in the Journal of Computer Science and Technology Studies (2025), this paper 
examines how rapid proliferation of LLMs and agentic AI is reshaping global employment. 
Dr. Pandey moves beyond job-displacement narratives to analyse human-AI collaboration, 
task augmentation, and skill evolution across creative industries, software development, 
and scientific research. The paper synthesises labor market data and case studies to 
propose training frameworks and organisational strategies for the AI-first economy.`,
  },
  {
    id:7,
    title:'AI-Powered Low-Code App Development Benchmark (2025)',
    short:'Benchmarking AI-assisted low-code platforms for enterprise digital transformation.',
    thumb:'/img/proj_lowcode.png',
    tags:['Low-Code','GenAI','Power Platform','Benchmark'],
    link:'https://essopenarchive.org/users/942841-kamal-pandey',
    detail:`This 2025 research benchmark evaluates leading AI-powered low-code platforms — including 
Microsoft Power Platform Copilot, Google AppSheet, and emerging GenAI-native builders — 
against enterprise readiness criteria. Dr. Pandey applies his extensive Power Platform and 
digital workplace architecture experience to create a practitioner-focused evaluation 
framework, helping enterprise architects and IT leaders select the right low-code platform 
for AI-first digital transformation programmes.`,
  },
  {
    id:8,
    title:'Enterprise Content Management & Collaboration @ LTI',
    short:'Technical lead for ECM and SharePoint solutions serving global clients.',
    thumb:'/img/proj_lti.png',
    tags:['SharePoint','ECM','Collaboration','Enterprise'],
    link:'https://lntinfotech.com',
    detail:`At Larsen & Toubro Infotech (LTI) from 2013–2015, Dr. Pandey served as Technical Lead 
for Enterprise Content Management and Collaboration. He designed and delivered SharePoint-based 
ECM solutions for global clients across manufacturing, financial services, and utilities. 
This role established his foundational expertise in enterprise information architecture, 
governance, and large-scale SharePoint deployments that would define his subsequent career 
at Goodyear and Rivian.`,
  },
]

function Modal({ p, onClose }: { p: typeof PROJECTS[0]; onClose: () => void }) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if(e.key==='Escape') onClose() }
    window.addEventListener('keydown',h)
    return () => window.removeEventListener('keydown',h)
  },[onClose])

  return (
    <motion.div className="modal-bg" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
      onClick={onClose}>
      <motion.div
        className="relative rounded-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto shadow-2xl"
        style={{ background:'var(--bg-card)' }}
        initial={{opacity:0,scale:.92,y:24}} animate={{opacity:1,scale:1,y:0}}
        exit={{opacity:0,scale:.92,y:24}} transition={{duration:.28}}
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors">
          <X size={20}/>
        </button>

        {/* Thumb */}
        <div className="relative h-44 rounded-t-2xl overflow-hidden"
             style={{ background:'linear-gradient(135deg,#0d1a2e,#0a1f35)' }}>
          <Image src={p.thumb} alt={p.title} fill className="object-cover opacity-50"
            onError={e=>{(e.currentTarget as HTMLImageElement).style.display='none'}}/>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)]"/>
        </div>

        <div className="p-7">
          <h3 className="text-white font-heading font-bold text-lg leading-snug mb-3">{p.title}</h3>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {p.tags.map(t => <span key={t} className="chip text-[10px]">{t}</span>)}
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">{p.detail}</p>
          <div className="flex gap-3">
            <a href={p.link} target="_blank" rel="noopener noreferrer"
               className="btn-primary text-xs px-5 py-2.5">
              <ExternalLink size={13}/> View Resource
            </a>
            <a href="https://scholar.google.com/citations?user=rA_dpyAAAAAJ"
               target="_blank" rel="noopener noreferrer"
               className="btn-ghost text-xs px-5 py-2.5">
              <FileText size={13}/> Google Scholar
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [sel, setSel] = useState<typeof PROJECTS[0]|null>(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-60px' })

  return (
    <section id="projects" className="section-light py-24">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div ref={ref}
          initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}}
          transition={{duration:.5}} className="text-center mb-16">
          <p className="text-[#18bc9c] font-heading font-bold uppercase tracking-widest text-xs mb-3">
            Portfolio
          </p>
          <h2 className="section-title section-title-dark">Research & Professional Work</h2>
          <div className="section-rule"/>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Key research projects and enterprise initiatives across AI, cloud, and digital transformation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROJECTS.map((p,i) => (
            <motion.div key={p.id}
              initial={{opacity:0,y:22}} animate={inView?{opacity:1,y:0}:{}}
              transition={{duration:.4,delay:i*.06}}
              className="proj-card bg-[#1e2840] rounded-xl shadow cursor-pointer"
              onClick={() => setSel(p)}
              whileHover={{ y:-4, transition:{duration:.2} }}
            >
              <div className="relative h-32 rounded-t-xl overflow-hidden"
                   style={{ background:'linear-gradient(135deg,#0d1a2e,#0a1f35)' }}>
                <Image src={p.thumb} alt={p.title} fill className="object-cover opacity-60"
                  onError={e=>{(e.currentTarget as HTMLImageElement).style.display='none'}}/>
                <div className="proj-overlay rounded-t-xl">
                  <p className="text-white font-heading font-bold text-xs text-center px-3">View Details</p>
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-white font-heading font-bold text-xs leading-tight mb-1.5">{p.title}</h4>
                <p className="text-gray-400 text-[11px] leading-snug">{p.short}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{opacity:0}} animate={inView?{opacity:1}:{}}
          transition={{delay:.7}} className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">View all publications and research:</p>
          <a href="https://scholar.google.com/citations?user=rA_dpyAAAAAJ"
             target="_blank" rel="noopener noreferrer"
             className="btn-primary">
            <FileText size={15}/> Google Scholar Profile
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {sel && <Modal p={sel} onClose={() => setSel(null)}/>}
      </AnimatePresence>
    </section>
  )
}
