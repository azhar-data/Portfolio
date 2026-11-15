'use client'

import { motion } from 'framer-motion'
import { BarChart2, Brain, Sparkles, Wrench } from 'lucide-react'
import SkillChip from '@/components/ui/SkillChip'

// Try to import from data layer; fall back to hardcoded groups below
let SKILL_GROUPS: SkillGroup[]
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const content = require('@/data/content')
  SKILL_GROUPS = content.SKILL_GROUPS
} catch {
  SKILL_GROUPS = []
}

interface SkillGroup {
  label: string
  icon: React.ElementType
  color: string
  skills: { name: string; tooltip?: string }[]
}

const HARDCODED_GROUPS: SkillGroup[] = [
  {
    label: 'Data & ML',
    icon: BarChart2,
    color: '#3B82F6',
    skills: [
      { name: 'Python', tooltip: 'Primary language for all ML workflows' },
      { name: 'Pandas', tooltip: 'Data manipulation & analysis' },
      { name: 'NumPy', tooltip: 'Numerical computing' },
      { name: 'Seaborn', tooltip: 'Statistical data visualisation' },
      { name: 'scikit-learn', tooltip: 'Classical ML algorithms & pipelines' },
    ],
  },
  {
    label: 'Deep Learning',
    icon: Brain,
    color: '#8B5CF6',
    skills: [
      { name: 'TensorFlow', tooltip: 'Production-grade deep learning' },
      { name: 'Keras', tooltip: 'High-level neural network API' },
      { name: 'PyTorch', tooltip: 'Research-focused deep learning' },
      { name: 'NLP', tooltip: 'Natural Language Processing' },
    ],
  },
  {
    label: 'AI & LLMs',
    icon: Sparkles,
    color: '#06B6D4',
    skills: [
      { name: 'LLMs', tooltip: 'Large Language Models' },
      { name: 'RAG', tooltip: 'Retrieval-Augmented Generation' },
      { name: 'Prompt Engineering', tooltip: 'Crafting effective LLM prompts' },
      { name: 'Agentic AI', tooltip: 'Autonomous AI agent systems' },
      { name: 'Generative AI', tooltip: 'Text, image & multimodal generation' },
      { name: 'LangChain', tooltip: 'LLM application framework' },
    ],
  },
  {
    label: 'Tools & Infra',
    icon: Wrench,
    color: '#10B981',
    skills: [
      { name: 'Git/GitHub', tooltip: 'Version control & collaboration' },
      { name: 'Jupyter', tooltip: 'Interactive notebooks' },
      { name: 'Streamlit', tooltip: 'Rapid ML app deployment' },
      { name: 'FastAPI', tooltip: 'High-performance Python APIs' },
      { name: 'Claude Code', tooltip: 'AI-powered coding assistant' },
    ],
  },
]

// Use imported groups if available, else hardcoded
const groups: SkillGroup[] =
  Array.isArray(SKILL_GROUPS) && SKILL_GROUPS.length > 0
    ? SKILL_GROUPS
    : HARDCODED_GROUPS

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: i * 0.1,
    },
  }),
}

export default function TechnicalExpertise() {
  return (
    <section
      id="skills"
      className="relative py-20 overflow-hidden"
      style={{ background: '#0A0F1C' }}
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#94A3B8 1px, transparent 1px), linear-gradient(90deg, #94A3B8 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
            02 · TECHNICAL EXPERTISE
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#F8FAFC]" style={{ fontFamily: 'var(--font-display, inherit)' }}>
            My Technical Arsenal
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {groups.map((group, i) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.label}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl p-6 backdrop-blur-sm cursor-default"
                style={{
                  background: '#111827',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 32px ${group.color}22`
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
                }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-xl"
                    style={{ background: `${group.color}18` }}
                  >
                    <Icon size={20} style={{ color: group.color }} />
                  </div>
                  <span
                    className="font-semibold text-[#F8FAFC] text-base"
                    style={{ fontFamily: 'var(--font-display, inherit)' }}
                  >
                    {group.label}
                  </span>
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <SkillChip
                      key={skill.name}
                      name={skill.name}
                      tooltip={skill.tooltip}
                    />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
