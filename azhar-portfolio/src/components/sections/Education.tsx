'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const education = [
  {
    degree: 'Full-Stack AI Engineering Program',
    institution: 'NexSkill Institute',
    location: 'Lahore, Pakistan',
    startDate: '2024',
    endDate: 'Present',
    current: true,
    description:
      'Intensive program covering Python, Machine Learning, Deep Learning, NLP, LLMs, RAG systems, and Agentic AI from fundamentals to production deployment.',
  },
  {
    degree: '[Your Degree — e.g. BSc Computer Science]',
    institution: '[Your University]',
    location: '[City, Pakistan]',
    startDate: '[Year]',
    endDate: '[Year]',
    current: false,
    description:
      '[Replace with your academic background, degree name, major, and notable coursework or achievements.]',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Education() {
  return (
    <section id="education" className="relative py-24 overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <SectionHeading eyebrow="09 · EDUCATION" title="My Learning Journey" />

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {education.map((edu) => (
            <motion.div
              key={edu.degree}
              variants={cardVariants}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-blue-500/40 transition-colors duration-300 flex flex-col gap-5"
            >
              {/* Icon + dates badge row */}
              <div className="flex items-start justify-between gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>

                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full border ${
                    edu.current
                      ? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30'
                      : 'text-[#94A3B8] bg-white/5 border-white/10'
                  }`}
                >
                  {edu.startDate} – {edu.endDate}
                </span>
              </div>

              {/* Text */}
              <div>
                <h3 className="font-display font-semibold text-[#F8FAFC] text-lg leading-snug mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm text-[#94A3B8] mb-1">
                  {edu.institution} · {edu.location}
                </p>
                <p className="text-sm text-[#94A3B8]/80 leading-relaxed mt-3">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
