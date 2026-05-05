'use client'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Linkedin, BookOpen, Globe, Send, CheckCircle, ExternalLink } from 'lucide-react'

const CHANNELS = [
  {
    Icon: Linkedin,
    label:'LinkedIn',
    value:'linkedin.com/in/kamalkpandey',
    href:'https://www.linkedin.com/in/kamalkpandey/',
    color:'#0077b5',
  },
  {
    Icon: BookOpen,
    label:'Google Scholar',
    value:'scholar.google.com — Cited by 68',
    href:'https://scholar.google.com/citations?user=rA_dpyAAAAAJ',
    color:'#18bc9c',
  },
  {
    Icon: Globe,
    label:'Website',
    value:'drkamalpandey.com',
    href:'https://drkamalpandey.com',
    color:'#60a5fa',
  },
  {
    Icon: Globe,
    label:'ResearchGate',
    value:'ResearchGate Profile',
    href:'https://www.researchgate.net/profile/Kamal-Pandey-21',
    color:'#00d2ff',
  },
]

type Form = { name:string; email:string; org:string; message:string }

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:'-60px' })
  const [form, setForm] = useState<Form>({ name:'',email:'',org:'',message:'' })
  const [sent, setSent]   = useState(false)
  const [busy, setBusy]   = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setBusy(true)
    await new Promise(r => setTimeout(r,1100))
    setBusy(false); setSent(true)
  }

  return (
    <section id="contact" className="section-card py-24">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div ref={ref}
          initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}}
          transition={{duration:.5}} className="text-center mb-16">
          <h2 className="section-title section-title-light">Get In Touch</h2>
          <div className="section-rule"/>
          <p className="text-gray-400 max-w-lg mx-auto text-sm">
            Open to speaking engagements, research collaborations, advisory roles,
            and conversations about AI, cloud, and digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left — channels */}
          <motion.div
            initial={{opacity:0,x:-28}} animate={inView?{opacity:1,x:0}:{}}
            transition={{duration:.55,delay:.15}}
            className="flex flex-col gap-6">

            <div className="space-y-4">
              {CHANNELS.map(({ Icon, label, value, href, color }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                                  transition-all duration-300 group-hover:scale-110"
                       style={{ background:`${color}15`, border:`1px solid ${color}25` }}>
                    <Icon size={17} style={{ color }}/>
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] font-heading uppercase tracking-widest">{label}</p>
                    <p className="text-white text-sm font-semibold group-hover:text-[#18bc9c] transition-colors">
                      {value}
                    </p>
                  </div>
                  <ExternalLink size={12} className="ml-auto text-gray-600 group-hover:text-[#18bc9c] transition-colors flex-shrink-0"/>
                </a>
              ))}
            </div>

            <div className="glass p-5 mt-2">
              <p className="text-[#18bc9c] font-heading font-bold text-xs uppercase tracking-widest mb-2">
                Speaking & Advisory
              </p>
              <p className="text-gray-400 text-xs leading-relaxed">
                Dr. Pandey is available for keynote speaking, panel participation, and advisory engagements
                on AI strategy, digital workplace transformation, ethical AI, and cloud architecture.
                As a Constellation Research AI 150 honouree, he brings a globally-recognised perspective
                to enterprise technology conversations.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{opacity:0,x:28}} animate={inView?{opacity:1,x:0}:{}}
            transition={{duration:.55,delay:.25}}>

            {sent ? (
              <motion.div initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}}
                className="flex flex-col items-center justify-center h-full gap-4 text-center py-16">
                <CheckCircle size={44} style={{ color:'var(--accent)' }}/>
                <h3 className="text-white font-heading font-bold text-xl">Message Received!</h3>
                <p className="text-gray-400 text-sm max-w-xs">
                  Thank you for reaching out. Dr. Pandey will respond at his earliest convenience.
                </p>
                <button onClick={() => { setSent(false); setForm({ name:'',email:'',org:'',message:'' }) }}
                  className="btn-ghost text-xs mt-2">Send Another</button>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                {[
                  { name:'name',    label:'Your Name',        type:'text',  placeholder:'Jane Smith' },
                  { name:'email',   label:'Email Address',    type:'email', placeholder:'jane@company.com' },
                  { name:'org',     label:'Organisation',     type:'text',  placeholder:'Company / Institution' },
                ].map(f => (
                  <div key={f.name}>
                    <label className="block text-gray-400 text-[10px] font-heading uppercase tracking-widest mb-1.5">
                      {f.label}{f.name!=='org' && <span className="text-[#18bc9c] ml-0.5">*</span>}
                    </label>
                    <input type={f.type} name={f.name}
                      value={(form as Record<string,string>)[f.name]}
                      onChange={onChange} placeholder={f.placeholder}
                      required={f.name!=='org'}
                      className="field text-sm"/>
                  </div>
                ))}
                <div>
                  <label className="block text-gray-400 text-[10px] font-heading uppercase tracking-widest mb-1.5">
                    Message <span className="text-[#18bc9c]">*</span>
                  </label>
                  <textarea name="message" value={form.message} onChange={onChange} rows={5}
                    placeholder="Hi Dr. Pandey, I'd like to discuss..."
                    required className="field text-sm resize-none"/>
                </div>
                <motion.button type="submit" disabled={busy}
                  className="btn-primary w-full justify-center py-3.5 disabled:opacity-60"
                  whileHover={{ scale: busy?1:1.02 }} whileTap={{ scale: busy?1:.97 }}>
                  {busy ? (
                    <><span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"/>Sending…</>
                  ) : (
                    <><Send size={14}/> Send Message</>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
