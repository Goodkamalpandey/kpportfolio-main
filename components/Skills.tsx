'use client'
/**
 * Skills.tsx — Expandable accordion based on Dr Kamal Pandey's actual expertise:
 * Microsoft Azure, Microsoft 365, SharePoint, Power Platform, AI/ML, GenAI, RPA,
 * Digital Workplace, Cloud Architecture, Modern DevOps, Google Workspace.
 */
import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const SKILLS = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    badge: 'Core Expertise',
    summary: 'AI/ML research, GenAI deployment, ethical AI frameworks.',
    desc: `Dr. Pandey is a published AI/ML researcher with a Google Scholar profile cited 68 times. 
His research encompasses Generative AI, LLM integration into enterprise workflows, AI-driven 
digital workplace automation, and ethical AI frameworks for humanitarian and enterprise contexts. 
At Rivian, he leads Generative AI and automation initiatives that optimise business operations 
and employee experiences. He has published papers on AI's impact on labor markets, 
AI-powered low-code development, and autonomous intelligence in the modern workplace.`,
  },
  {
    title: 'Microsoft Azure & Cloud Architecture',
    badge: '12+ years',
    summary: 'End-to-end Azure solutions, hybrid cloud, enterprise architecture.',
    desc: `Over 12 years of hands-on Microsoft Azure experience covering compute, networking, 
identity (Azure AD/Entra), storage, serverless, and AI/Cognitive Services. Dr. Pandey has 
designed and implemented large-scale hybrid cloud architectures for Fortune 500 companies 
including Goodyear Tire & Rubber and Rivian Automotive. He is deeply experienced with 
Azure OpenAI Service, Azure Machine Learning, and Azure DevOps for enterprise deployments.`,
  },
  {
    title: 'Microsoft 365 & Modern Workplace',
    badge: '12+ years',
    summary: 'SharePoint, Teams, Power Platform, Viva, M365 governance.',
    desc: `Dr. Pandey is a recognised expert in Microsoft 365 and Modern Workplace transformation. 
He served as Senior Office 365 / Digital Solutions Architect at Goodyear, where he architected 
company-wide M365 rollouts encompassing SharePoint Online, Microsoft Teams, OneDrive, 
and Microsoft Viva. He specialises in governance frameworks, information architecture, 
and building employee experience solutions that bridge productivity and AI.`,
  },
  {
    title: 'SharePoint & Power Platform',
    badge: '10+ years',
    summary: 'SharePoint architecture, Power Apps, Power Automate, Power BI.',
    desc: `With over a decade of SharePoint expertise — from SharePoint 2010/2013/2016/Online — 
Dr. Pandey has designed intranet portals, document management systems, and custom business 
applications for global enterprises. On Power Platform, he has built hundreds of Power Apps 
and Power Automate flows for process automation, and Power BI dashboards for executive 
reporting across manufacturing and automotive industries.`,
  },
  {
    title: 'Digital Workplace & Automation (RPA)',
    badge: 'Strategic Specialisation',
    summary: 'Intelligent automation, RPA, digital employee experience, AI-driven workflows.',
    desc: `Digital Workplace transformation is Dr. Pandey's primary strategic focus. He has led 
organisation-wide digital workplace programmes combining RPA (UiPath, Power Automate), 
AI-driven chatbots, and self-service portals. His published research — including "The Intelligent 
Workplace: AI and Automation Shaping the Future of Digital Workplaces" (2025) — articulates 
frameworks for human-centred AI adoption balancing automation with workforce upskilling.`,
  },
  {
    title: 'Google Workspace & Slack',
    badge: 'Enterprise Deployment',
    summary: 'G-Suite / Google Workspace administration, Slack at enterprise scale.',
    desc: `Dr. Pandey has led Google Workspace (G-Suite) migrations and integrations in parallel 
with Microsoft 365 environments for large organisations. He has deep expertise in cross-platform 
identity federation, data migration, and productivity architecture. At Rivian — a company whose 
employee base spans digital-native tooling — he manages Slack and Google Workspace as first-class 
platforms alongside the Microsoft 365 ecosystem.`,
  },
  {
    title: 'Cloud AI & Generative AI Solutions',
    badge: 'Emerging / Cutting-Edge',
    summary: 'Azure OpenAI, Copilot, LLM integration, prompt engineering, RAG architectures.',
    desc: `At the frontier of enterprise AI, Dr. Pandey architects Generative AI solutions using 
Azure OpenAI Service (GPT-4, Embeddings), Microsoft Copilot integrations, and RAG 
(Retrieval-Augmented Generation) pipelines. He advises on responsible AI governance and 
co-authored research on AI-powered low-code development (2025). His work at Rivian positions 
Generative AI as a core operational capability rather than a proof-of-concept.`,
  },
  {
    title: 'Research, Publications & Thought Leadership',
    badge: 'Author · 68 Citations',
    summary: 'Peer-reviewed publications, Google Scholar profile, global conference speaking.',
    desc: `Dr. Pandey maintains an active research agenda with publications in international 
peer-reviewed journals. His Google Scholar profile (user=rA_dpyAAAAAJ) has accumulated 68+ 
citations. He publishes on AI ethics, the future of work, digital transformation in automotive, 
and EV ecosystems. He is a member of Constellation Research's AI 150 — alongside globally 
recognised leaders from JP Morgan, NASA, Walmart, Tesla, and the White House.`,
  },
]

export default function Skills() {
  const [openIdx, setOpenIdx] = useState<number|null>(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-60px' })

  return (
    <section id="skills" className="section-card py-24">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div ref={ref}
          initial={{ opacity:0,y:20 }} animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:.5 }} className="text-center mb-16">
          <h2 className="section-title section-title-light">Skills & Expertise</h2>
          <div className="section-rule"/>
          <p className="text-gray-400 max-w-lg mx-auto text-sm">
            16+ years of global expertise across cloud, AI, and digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {SKILLS.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity:0, y:18 }}
              animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ duration:.45, delay: i*.06 }}
              className="glass p-5 transition-all duration-300 cursor-pointer"
              onClick={() => setOpenIdx(openIdx===i ? null : i)}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-white font-heading font-bold text-sm leading-snug">
                      {s.title}
                    </h3>
                    <span className="chip text-[10px] flex-shrink-0">{s.badge}</span>
                  </div>
                  <p className="text-gray-400 text-xs leading-snug">{s.summary}</p>
                </div>
                <motion.div
                  animate={{ rotate: openIdx===i ? 180 : 0 }}
                  transition={{ duration:.22 }}
                  className="text-gray-500 flex-shrink-0 mt-0.5"
                >
                  <ChevronDown size={17}/>
                </motion.div>
              </div>

              {/* Expandable */}
              <AnimatePresence initial={false}>
                {openIdx===i && (
                  <motion.div
                    initial={{ height:0, opacity:0 }}
                    animate={{ height:'auto', opacity:1 }}
                    exit={{ height:0, opacity:0 }}
                    transition={{ duration:.28, ease:'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-300 text-xs leading-relaxed mt-4 pt-4 border-t border-white/[.07]">
                      {s.desc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
