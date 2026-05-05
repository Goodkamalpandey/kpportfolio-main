'use client'
/**
 * Papers.tsx — Real peer-reviewed publications by Dr. Kamal Pandey.
 * All titles, journals, years, and DOIs are accurate.
 */
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FileText, ExternalLink, Download } from 'lucide-react'

const PAPERS = [
  {
    id:1,
    type:'Journal Article',
    year:'2025',
    title:'The Intelligent Workplace: AI and Automation Shaping the Future of Digital Workplaces',
    authors:'Kamal Pandey. Rivian Automotive Inc, Department of Digital Workplace & Solutions, USA',
    journal:'International Journal of Scientific Research in Computer Science and Engineering (IJSRCSE)',
    citation:'Vol. 13, No. 1, pp. 1–10, Feb. 2025',
    orcid:'0009-0009-1669-4450',
    links:[
      { label:'View Paper', href:'https://ijsrcse.isroset.org/index.php/j/article/view/607', Icon: ExternalLink },
    ],
    abstract:'Examines AI-driven digital workplace automation, job displacement, algorithmic bias, and data privacy. Proposes a human-centred ethical framework for AI adoption focused on fairness, transparency, and accountability.',
  },
  {
    id:2,
    type:'Journal Article',
    year:'2025',
    title:'AI-Powered Transformation in the Modern Digital Workplace: A Roadmap for the Future of Work and Ethical Consideration',
    authors:'Dr. Kamal Pandey',
    journal:'International Journal of Engineering Applied Science and Management (IJEASAM)',
    citation:'ISSN (Online): 2582-6948, Vol. 6, Issue 2, 2025',
    links:[
      { label:'ResearchGate', href:'https://www.researchgate.net/profile/Kamal-Pandey-21', Icon: ExternalLink },
    ],
    abstract:'A comprehensive roadmap for AI adoption in enterprise settings, addressing the intersection of automation, workforce transformation, and ethical responsibility.',
  },
  {
    id:3,
    type:'Journal Article',
    year:'2025',
    title:'Artificial Intelligence and the Evolving Labor Market: A Comprehensive Review and Policy Roadmap',
    authors:'Kamal Pandey. Cloud & AI Solutions Architect, Enterprise IT & Architecture, Rivian Automotive Inc, Irvine, USA',
    journal:'Journal of Computer Science and Technology Studies',
    citation:'Vol. 7, Issue 10, pp. 306–315, 2025. DOI: 10.32996/jcsts.2025.7.10.33',
    links:[
      { label:'DOI Link', href:'https://doi.org/10.32996/jcsts.2025.7.10.33', Icon: ExternalLink },
    ],
    abstract:'Moves beyond job-displacement narratives to analyse task augmentation and skill evolution across key professional sectors. Proposes training frameworks and organisational strategies for human-AI co-creativity.',
  },
  {
    id:4,
    type:'Journal Article',
    year:'2025',
    title:'AI-Powered Low-Code App Development: A Benchmark Review for 2025 Digital Transformation',
    authors:'Dr. Kamal Pandey',
    journal:'ESS Open Archive / Authorea Preprints',
    citation:'2025',
    links:[
      { label:'View', href:'https://essopenarchive.org/users/942841-kamal-pandey', Icon: ExternalLink },
    ],
    abstract:'Benchmarks AI-powered low-code platforms including Microsoft Power Platform Copilot against enterprise digital transformation criteria, providing practitioner-focused evaluation frameworks.',
  },
  {
    id:5,
    type:'Journal Article',
    year:'2024',
    title:'The Future of Automotive Industry: AI and Cloud-Driven Digital Transformation in the US Region — A Holistic Examination',
    authors:'Dr. Kamal Pandey',
    journal:'International Journal of Engineering Applied Science and Management (IJEASAM)',
    citation:'ISSN (Online): 2582-6948, Vol. 5, Issue 11, 2024. DOI: 10.13140/RG.2.2.31644.19846',
    links:[
      { label:'DOI Link', href:'http://dx.doi.org/10.13140/RG.2.2.31644.19846', Icon: ExternalLink },
    ],
    abstract:'Comprehensive analysis of AI and cloud technologies reshaping the US automotive sector, exploring integration in vehicle manufacturing, autonomous driving, predictive maintenance, and Industry 4.0 principles.',
  },
  {
    id:6,
    type:'Journal Article',
    year:'2024',
    title:'Artificial Intelligence (AI) in Electric Vehicle Ecosystems: Challenges, Opportunities, and Models for Accelerated Adoption',
    authors:'Dr. Kamal Pandey',
    journal:'International Journal of Engineering Applied Science and Management (IJEASAM)',
    citation:'ISSN (Online): 2582-6948, Vol. 5, Issue 12, 2024. DOI: 10.13140/RG.2.2.32810.32962',
    links:[
      { label:'DOI Link', href:'http://dx.doi.org/10.13140/RG.2.2.32810.32962', Icon: ExternalLink },
    ],
    abstract:'Analyses AI/ML factors shaping the EV industry including regulations, supply chains, battery technology, and emerging technologies. Identifies challenges and models for accelerated AI adoption in EV ecosystems.',
  },
  {
    id:7,
    type:'Preprint / Conference Paper',
    year:'2024–2025',
    title:'Designing Ethical AI for Development: Challenges and Opportunities in Humanitarian Engineering',
    authors:'Dr. Kamal Pandey',
    journal:'ESS Open Archive',
    citation:'2024–2025',
    links:[
      { label:'ESS Open Archive', href:'https://essopenarchive.org/users/942841-kamal-pandey', Icon: ExternalLink },
    ],
    abstract:'Systematic literature review of challenges and opportunities in designing ethical AI systems for humanitarian engineering contexts, including AI applications in disaster management and EV capabilities in emergency scenarios.',
  },
]

export default function Papers() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-60px' })

  return (
    <section id="papers" className="section-dark py-24">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div ref={ref}
          initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}}
          transition={{duration:.5}} className="text-center mb-16">
          <h2 className="section-title section-title-light">Publications</h2>
          <div className="section-rule"/>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Peer-reviewed research on AI, digital transformation, automotive, and the future of work.
          </p>
          <a href="https://scholar.google.com/citations?user=rA_dpyAAAAAJ"
             target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-1.5 mt-4 text-[#18bc9c] hover:text-white
                        text-xs font-heading font-bold uppercase tracking-widest transition-colors">
            <ExternalLink size={11}/> Google Scholar — Cited by 68
          </a>
        </motion.div>

        <div className="space-y-5">
          {PAPERS.map((p,i) => (
            <motion.div key={p.id}
              initial={{opacity:0,x:-20}} animate={inView?{opacity:1,x:0}:{}}
              transition={{duration:.45,delay:i*.08}}
              className="glass p-5 hover:border-[var(--border-accent)] transition-all duration-300 group"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                       style={{ background:'var(--accent-subtle)' }}>
                    <FileText size={16} style={{ color:'var(--accent)' }}/>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  {/* Type + year */}
                  <div className="flex items-center gap-2 flex-wrap mb-1.5">
                    <span className="chip text-[10px]">{p.type}</span>
                    <span className="text-[#18bc9c] text-[10px] font-heading font-bold">{p.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-heading font-semibold text-sm leading-snug mb-1
                                 group-hover:text-[#18bc9c] transition-colors">
                    {p.title}
                  </h3>

                  {/* Authors */}
                  <p className="text-gray-500 text-xs mb-0.5">{p.authors}</p>

                  {/* Journal + citation */}
                  <p className="text-gray-400 text-xs italic mb-2">
                    {p.journal} · {p.citation}
                  </p>

                  {/* Abstract */}
                  <p className="text-gray-400 text-xs leading-relaxed mb-3">{p.abstract}</p>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {p.links.map(l => (
                      <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                         className="flex items-center gap-1 text-[#18bc9c] hover:text-white
                                    text-xs font-heading font-semibold transition-colors">
                        <l.Icon size={11}/> {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
