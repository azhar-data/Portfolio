'use client'

import { motion } from 'framer-motion'
import { Search, Layers, Code2, Rocket } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const steps = [
  {
    number: '01',
    label: 'Scope',
    icon: Search,
    desc: 'Deep-dive into your problem. I ask the uncomfortable questions, map your data landscape, and define what success looks like before writing a line of code.',
  },
  {
    number: '02',
    label: 'Architect',
    icon: Layers,
    desc: 'Design the system: data pipelines, model choices, agent workflows, and API contracts. Architecture decisions made upfront save weeks of refactoring later.',
  },
  {
    number: '03',
    label: 'Build',
    icon: Code2,
    desc: 'Iterative development with regular check-ins. I ship working prototypes early so you can validate direction before the full build.',
  },
  {
    number: '04',
    label: 'Ship & Support',
    icon: Rocket,
    desc: 'Production deployment, documentation, and a handoff that actually makes sense. Post-launch monitoring and support included.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const stepVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

const stepVariantsMobile = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

export function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading eyebrow="06 · HOW I WORK" title="My Engineering Process" />

        {/* ── DESKTOP timeline (lg+) ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative mt-20 hidden lg:flex lg:items-start lg:gap-0"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon
            const isLast = idx === steps.length - 1
            return (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="relative flex flex-1 flex-col items-center text-center"
              >
                {/* Connector line (before the circle, skip on first) */}
                {idx !== 0 && (
                  <div
                    className="absolute left-0 top-[2.75rem] h-px w-1/2 -translate-x-0"
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(59,130,246,0.6), rgba(6,182,212,0.6))',
                    }}
                  />
                )}
                {/* Connector line (after the circle, skip on last) */}
                {!isLast && (
                  <div
                    className="absolute right-0 top-[2.75rem] h-px w-1/2"
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(59,130,246,0.6), rgba(6,182,212,0.6))',
                    }}
                  />
                )}

                {/* Icon */}
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[#06B6D4]">
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                {/* Circle node */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                  <span className="font-display text-xs font-bold text-white">{step.number}</span>
                </div>

                {/* Content */}
                <div className="mt-5 max-w-[200px]">
                  <h3 className="font-display text-base font-semibold text-[#F8FAFC]">
                    {step.number} · {step.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">{step.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* ── MOBILE timeline (below lg) ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="relative mt-16 flex flex-col gap-0 lg:hidden"
        >
          {/* Vertical line */}
          <div
            className="absolute left-6 top-6 bottom-6 w-px"
            style={{
              background:
                'linear-gradient(180deg, rgba(59,130,246,0.6), rgba(6,182,212,0.6))',
            }}
          />

          {steps.map((step) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                variants={stepVariantsMobile}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                {/* Circle node */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] shadow-[0_0_16px_rgba(59,130,246,0.35)]">
                  <Icon size={16} strokeWidth={2} className="text-white" />
                  <span className="font-display text-[9px] font-bold text-white/80 leading-none mt-0.5">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-1">
                  <h3 className="font-display text-base font-semibold text-[#F8FAFC]">
                    {step.number} · {step.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">{step.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
