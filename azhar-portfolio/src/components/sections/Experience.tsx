'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'

const experiences = [
  {
    initials: 'NS',
    role: 'Full-Stack AI Engineer (Trainee)',
    company: 'NexSkill',
    location: 'Lahore, Pakistan',
    startDate: '2024',
    endDate: 'Present',
    current: true,
    bullets: [
      'Completed intensive full-stack AI engineering covering the entire ML/DL/NLP stack',
      'Built end-to-end AI pipelines from data ingestion to model deployment',
      'Developed LLM-powered applications using LangChain and OpenAI APIs',
      'Studied and implemented agentic AI architectures and multi-agent orchestration patterns',
    ],
    techs: ['Python', 'Machine Learning', 'Deep Learning', 'NLP', 'LLMs', 'RAG', 'AI Agents', 'LangChain'],
  },
  {
    initials: 'FR',
    role: 'Freelance AI Developer',
    company: 'Independent',
    location: 'Remote',
    startDate: '2024',
    endDate: 'Present',
    current: true,
    bullets: [
      'Delivered custom ML and data analysis solutions for clients',
      'Built Streamlit dashboards and FastAPI backends',
      'Consulted on AI technology selection and implementation strategy',
    ],
    techs: ['Python', 'scikit-learn', 'Streamlit', 'FastAPI', 'Pandas'],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* subtle grid bg */}
      <div className="grid-bg absolute inset-0 opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <SectionHeading eyebrow="08 · EXPERIENCE" title="Where I've Built" />

        <motion.div
          className="relative mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Centre line — desktop only */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-cyan-400/40 to-transparent" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp) => (
              <motion.div
                key={exp.role}
                variants={itemVariants}
                className="flex flex-col md:flex-row gap-6 md:gap-8"
              >
                {/* Avatar circle */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30 ring-4 ring-[#0A0F1C]">
                    <span className="text-white font-bold font-display text-sm tracking-wide">
                      {exp.initials}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 glass rounded-2xl p-6 border border-white/10 hover:border-blue-500/40 transition-colors duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display font-semibold text-[#F8FAFC] text-lg leading-tight">
                        {exp.role}
                      </h3>
                      <p className="text-[#94A3B8] text-sm mt-1">
                        {exp.company} · {exp.location} · {exp.startDate} – {exp.endDate}
                      </p>
                    </div>

                    {exp.current && (
                      <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 rounded-full px-3 py-1 mt-0.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                        </span>
                        Present
                      </span>
                    )}
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-[#94A3B8] text-sm leading-relaxed">
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
