'use client'

import { motion } from 'framer-motion'
import { Compass, Cpu, CheckCircle2, Github, Quote } from 'lucide-react'
import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'

const journey = [
  {
    icon: Compass,
    stage: 'Explore',
    desc: 'Started with curiosity about how data could reveal hidden patterns. Dove into Python, statistics, and the mathematics of machine learning.',
  },
  {
    icon: Cpu,
    stage: 'Engineer',
    desc: 'Moved from understanding to building. Developed real ML pipelines, NLP systems, and AI agents that solve tangible problems for real users.',
  },
  {
    icon: CheckCircle2,
    stage: 'Deliver',
    desc: 'Now focused on shipping production-grade AI systems — not just models, but complete solutions that integrate, scale, and sustain.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading eyebrow="07 · THE ENGINEER" title="The Engineer Behind the Systems" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16"
        >
          {/* ── LEFT: Journey cards ── */}
          <div className="flex flex-col gap-5">
            {journey.map(({ icon: Icon, stage, desc }, idx) => (
              <motion.div
                key={stage}
                variants={fadeUp}
                className="group flex gap-5 rounded-2xl border border-white/10 bg-[#111827] p-6 transition-all duration-300 hover:border-blue-400/30 hover:shadow-[0_0_24px_rgba(59,130,246,0.1)]"
              >
                {/* Step number + icon column */}
                <div className="flex shrink-0 flex-col items-center gap-2">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] shadow-[0_0_14px_rgba(59,130,246,0.35)]">
                    <Icon size={20} strokeWidth={1.8} className="text-white" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-[#94A3B8]">
                    0{idx + 1}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-display text-base font-semibold text-[#F8FAFC]">{stage}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── RIGHT: Bio + Quote + CTA ── */}
          <div className="flex flex-col gap-7">
            {/* Bio */}
            <motion.p variants={fadeUp} className="text-base leading-relaxed text-[#94A3B8]">
              I&apos;m{' '}
              <span className="font-semibold text-[#F8FAFC]">Muhammad Azhar</span>, an AI
              Engineer based in Lahore, Pakistan. I build intelligent systems that sit at the
              intersection of data science, machine learning, and software engineering. My work
              spans from crafting NLP pipelines and training deep learning models to orchestrating
              multi-agent AI systems that automate complex workflows.
            </motion.p>

            {/* Philosophy quote card */}
            <motion.blockquote
              variants={fadeUp}
              className="relative overflow-hidden rounded-xl border-l-4 border-[#3B82F6] bg-[#111827]/80 px-6 py-5 backdrop-blur-sm"
              style={{
                boxShadow: 'inset 0 0 40px rgba(59,130,246,0.04)',
              }}
            >
              {/* Decorative quote mark */}
              <Quote
                size={36}
                className="absolute right-4 top-3 text-white/5"
                strokeWidth={1}
              />

              <p className="relative text-sm leading-relaxed text-[#94A3B8] italic">
                &ldquo;I believe the best AI isn&apos;t the most complex — it&apos;s the one that
                ships, scales, and genuinely solves a problem a human needed solved.&rdquo;
              </p>
              <footer className="mt-3 text-xs font-semibold text-[#F8FAFC]">
                — Muhammad Azhar
              </footer>
            </motion.blockquote>

            {/* GitHub CTA */}
            <motion.div variants={fadeUp}>
              <Link
                href="https://github.com/azhar-data"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-[#F8FAFC] transition-all duration-300 hover:border-blue-400/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
              >
                <Github size={18} strokeWidth={1.8} />
                Explore My Code
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
