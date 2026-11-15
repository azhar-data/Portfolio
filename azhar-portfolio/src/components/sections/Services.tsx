'use client'

import { motion } from 'framer-motion'
import { Bot, BarChart3, Brain, MessageSquare, Zap, Layout, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'

const services = [
  {
    number: '01',
    title: 'Custom AI Agents',
    icon: Bot,
    desc: 'Design and deploy autonomous multi-agent systems that handle complex, multi-step tasks without constant human intervention. From research agents to workflow orchestrators.',
    techs: ['Python', 'LangChain', 'OpenAI', 'FastAPI'],
  },
  {
    number: '02',
    title: 'Data Analysis & Dashboards',
    icon: BarChart3,
    desc: 'Transform raw, messy data into strategic insights. I build automated analysis pipelines and interactive dashboards that surface the metrics that matter.',
    techs: ['Pandas', 'Seaborn', 'Streamlit', 'SQL'],
  },
  {
    number: '03',
    title: 'Machine Learning Models',
    icon: Brain,
    desc: 'End-to-end ML development: data collection, feature engineering, model selection, training, evaluation, and production deployment with monitoring.',
    techs: ['scikit-learn', 'XGBoost', 'TensorFlow', 'MLflow'],
  },
  {
    number: '04',
    title: 'NLP & Intelligent Chatbots',
    icon: MessageSquare,
    desc: 'Build context-aware NLP systems and chatbots that understand language nuance, user intent, and domain-specific vocabulary.',
    techs: ['Transformers', 'LangChain', 'BERT', 'Rasa'],
  },
  {
    number: '05',
    title: 'Workflow Automation',
    icon: Zap,
    desc: 'Automate repetitive knowledge-work processes using intelligent document routing, classification, extraction, and escalation pipelines.',
    techs: ['Python', 'FastAPI', 'LangChain', 'Webhooks'],
  },
  {
    number: '06',
    title: 'Full-Stack AI Applications',
    icon: Layout,
    desc: 'Production-ready AI-powered web applications with modern frontends, robust Python backends, and AI features woven throughout the user journey.',
    techs: ['Next.js', 'FastAPI', 'PostgreSQL', 'Docker'],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

function ServiceCard({
  number,
  title,
  icon: Icon,
  desc,
  techs,
}: (typeof services)[number]) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#111827] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
    >
      {/* Number */}
      <span className="bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-xs font-semibold tracking-widest text-transparent">
        {number}
      </span>

      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-[#06B6D4] transition-colors duration-300 group-hover:bg-blue-500/10">
        <Icon size={26} strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="font-display text-lg font-semibold text-[#F8FAFC]">{title}</h3>

      {/* Description */}
      <p className="flex-1 text-sm leading-relaxed text-[#94A3B8]">{desc}</p>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-2">
        {techs.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-[#94A3B8]"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading eyebrow="05 · WHAT I DO" title="Services I Offer" />

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="relative mt-16 overflow-hidden rounded-2xl p-px"
          style={{
            background: 'linear-gradient(135deg, #3B82F6, #06B6D4, #3B82F6)',
          }}
        >
          <div className="glass relative flex flex-col items-center gap-6 rounded-2xl bg-[#0A0F1C]/90 px-8 py-12 text-center backdrop-blur-xl sm:flex-row sm:justify-between sm:text-left">
            {/* Headline */}
            <div className="space-y-2">
              <p className="text-lg font-medium text-[#F8FAFC]">Have a Complex AI Problem?</p>
              <p className="bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-2xl font-bold text-transparent font-display sm:text-3xl">
                Let&apos;s Build the Solution.
              </p>
              <p className="mt-1 max-w-xl text-sm text-[#94A3B8]">
                Whether it&apos;s an intelligent agent, an ML model, or a full-stack AI app — I&apos;m ready.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
              >
                Start a Project
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-[#F8FAFC] transition-colors hover:border-white/40 hover:bg-white/10"
              >
                View My Work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
