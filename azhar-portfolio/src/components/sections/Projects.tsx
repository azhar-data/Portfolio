'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '@/components/ui/ProjectCard';
import type { ProjectType } from '@/types';

// ── Hardcoded project data ────────────────────────────────────────────────────
const PROJECTS: ProjectType[] = [
  {
    id: '1',
    slug: 'university-entrepreneurship-analysis',
    number: '01',
    title: 'University Entrepreneurship Feasibility Analysis',
    category: 'Machine Learning',
    status: 'Completed',
    shortDesc: 'End-to-end ML + DL pipeline analyzing startup feasibility from university research data.',
    description:
      'A comprehensive machine-learning and deep-learning pipeline that ingests university research outputs and predicts the commercial feasibility of spin-out ventures, complete with feature-importance dashboards.',
    tags: ['ml', 'deep-learning', 'feasibility'],
    techs: ['Python', 'TensorFlow', 'scikit-learn', 'Pandas', 'Seaborn'],
    codeUrl: '#',
    caseStudyUrl: '/work/university-entrepreneurship-analysis',
  },
  {
    id: '2',
    slug: 'real-estate-sentiment',
    number: '02',
    title: 'Real Estate Market Sentiment Analysis',
    category: 'NLP',
    status: 'Completed',
    shortDesc: "Custom NLP pipeline building a proprietary sentiment index for Pakistan's real estate market.",
    description:
      "Scraped and processed thousands of property listings and news articles to build a domain-specific sentiment index that tracks buyer confidence across Pakistan's major cities.",
    tags: ['nlp', 'sentiment', 'real-estate'],
    techs: ['Python', 'NLTK', 'Transformers', 'Pandas', 'Streamlit'],
    codeUrl: '#',
    caseStudyUrl: '/work/real-estate-sentiment',
  },
  {
    id: '3',
    slug: 'intelligent-automation-tool',
    number: '03',
    title: 'Intelligent Automation Tool',
    category: 'Agentic Systems',
    status: 'In Progress',
    shortDesc: 'An agentic workflow automation system combining ML classification, NLP, and rule-based logic.',
    description:
      'An end-to-end agentic system that routes incoming business tasks through a combination of LLM reasoning, ML classifiers, and deterministic rules — drastically reducing manual overhead.',
    tags: ['agents', 'automation', 'langchain'],
    techs: ['Python', 'LangChain', 'FastAPI', 'scikit-learn', 'OpenAI'],
    codeUrl: '#',
    caseStudyUrl: '/work/intelligent-automation-tool',
  },
  {
    id: '4',
    slug: 'rag-knowledge-system',
    number: '04',
    title: 'RAG Knowledge Management System',
    category: 'Agentic Systems',
    status: 'In Progress',
    shortDesc: 'Production-ready RAG system enabling organizations to query private document repositories.',
    description:
      'A retrieval-augmented generation platform that lets organisations chat with their internal document corpus — built with chunking strategies, hybrid search, and an answer-grading loop for quality control.',
    tags: ['rag', 'llm', 'vector-db'],
    techs: ['Python', 'LangChain', 'Pinecone', 'OpenAI', 'FastAPI', 'Next.js'],
    codeUrl: '#',
    caseStudyUrl: '/work/rag-knowledge-system',
  },
  {
    id: '5',
    slug: 'ml-credit-risk',
    number: '05',
    title: 'Credit Risk Scoring Engine',
    category: 'Machine Learning',
    status: 'Completed',
    shortDesc: 'Gradient-boosted credit risk model for micro-lending institutions with explainability.',
    description:
      'An XGBoost-based credit-risk engine tailored for micro-lending, featuring SHAP-driven explanations so loan officers can understand and trust every decision the model makes.',
    tags: ['ml', 'fintech', 'xgboost', 'shap'],
    techs: ['Python', 'XGBoost', 'SHAP', 'Pandas', 'Streamlit'],
    codeUrl: '#',
    caseStudyUrl: '/work/ml-credit-risk',
  },
  {
    id: '6',
    slug: 'ai-content-pipeline',
    number: '06',
    title: 'AI-Powered Content Generation Pipeline',
    category: 'NLP',
    status: 'Completed',
    shortDesc: 'Multi-step LLM pipeline for structured content generation with quality scoring.',
    description:
      'A multi-stage LLM pipeline that generates structured long-form content — briefs → outlines → drafts — with an automated quality-scoring layer that rejects or refines outputs below threshold.',
    tags: ['nlp', 'llm', 'content', 'pipeline'],
    techs: ['Python', 'OpenAI', 'LangChain', 'FastAPI', 'PostgreSQL'],
    codeUrl: '#',
    caseStudyUrl: '/work/ai-content-pipeline',
  },
];

// ── Filter categories ─────────────────────────────────────────────────────────
const FILTERS = ['All', 'Machine Learning', 'Agentic Systems', 'NLP', 'Full-Stack'] as const;
type Filter = (typeof FILTERS)[number];

// ── SectionHeading (inline to avoid import issues) ────────────────────────────
function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center mb-12">
      <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#94A3B8] mb-3">
        {eyebrow}
      </p>
      <h2
        className="text-3xl sm:text-4xl font-bold text-[#F8FAFC]"
        style={{ fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)' }}
      >
        {title}
      </h2>
    </div>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All');

  const filtered =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0F1C] overflow-hidden"
    >
      {/* subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading eyebrow="04 · SELECTED WORK" title="Projects That Shipped" />

        {/* ── Filter tabs ──────────────────────────────────────────────────── */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2 sm:justify-center scrollbar-none">
          {FILTERS.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileTap={{ scale: 0.96 }}
                className={`whitespace-nowrap text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/20'
                    : 'text-[#94A3B8] border border-white/10 hover:border-white/20 hover:text-[#F8FAFC] bg-transparent'
                }`}
              >
                {filter}
              </motion.button>
            );
          })}
        </div>

        {/* ── Project grid ─────────────────────────────────────────────────── */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-[#94A3B8] mt-12"
          >
            No projects in this category yet.
          </motion.p>
        )}
      </div>
    </section>
  );
}
