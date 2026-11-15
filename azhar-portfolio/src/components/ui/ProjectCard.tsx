'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';
import type { ProjectType } from '@/types';

// ── Category → gradient mapping ──────────────────────────────────────────────
const CATEGORY_GRADIENT: Record<string, string> = {
  'Machine Learning': 'from-blue-900/40 to-indigo-900/40',
  'NLP':              'from-purple-900/40 to-pink-900/40',
  'Agentic Systems':  'from-cyan-900/40 to-teal-900/40',
  'Full-Stack':       'from-green-900/40 to-emerald-900/40',
};

const CATEGORY_ACCENT: Record<string, string> = {
  'Machine Learning': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  'NLP':              'text-purple-400 bg-purple-400/10 border-purple-400/20',
  'Agentic Systems':  'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  'Full-Stack':       'text-green-400 bg-green-400/10 border-green-400/20',
};

// ── Subtle SVG dashboard pattern ─────────────────────────────────────────────
function DashboardPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" className="text-white/30" />
      {/* abstract bar chart */}
      <rect x="10%" y="55%" width="8%" height="30%" fill="currentColor" className="text-white/10" rx="2" />
      <rect x="22%" y="40%" width="8%" height="45%" fill="currentColor" className="text-white/10" rx="2" />
      <rect x="34%" y="65%" width="8%" height="20%" fill="currentColor" className="text-white/10" rx="2" />
      <rect x="46%" y="30%" width="8%" height="55%" fill="currentColor" className="text-white/10" rx="2" />
      <rect x="58%" y="50%" width="8%" height="35%" fill="currentColor" className="text-white/10" rx="2" />
      {/* abstract line */}
      <polyline
        points="10,70 30,55 50,65 70,40 90,50"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-white/20"
        transform="translate(0,0) scale(2.4,1)"
      />
    </svg>
  );
}

// ── Props ─────────────────────────────────────────────────────────────────────
interface ProjectCardProps {
  project: ProjectType;
  index: number;
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function ProjectCard({ project, index }: ProjectCardProps) {
  const gradient = CATEGORY_GRADIENT[project.category] ?? 'from-gray-900/40 to-slate-900/40';
  const accentClass = CATEGORY_ACCENT[project.category] ?? 'text-slate-400 bg-slate-400/10 border-slate-400/20';
  const isCodeDisabled = !project.codeUrl || project.codeUrl === '#';

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16, scale: 0.97 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col rounded-2xl border border-white/10 bg-[#111827] overflow-hidden
                 hover:border-blue-400/30 hover:shadow-[0_0_30px_-6px_rgba(59,130,246,0.25)]
                 transition-shadow duration-300"
    >
      {/* ── Top visual mockup ───────────────────────────────────────────────── */}
      <div className={`relative h-44 bg-gradient-to-br ${gradient} overflow-hidden`}>
        <DashboardPattern />

        {/* Large faded project number */}
        <span className="absolute top-3 right-14 font-bold text-5xl text-white/8 select-none pointer-events-none leading-none">
          {project.number}
        </span>

        {/* Category tag — top-left */}
        <span className={`absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded-full border ${accentClass}`}>
          {project.category}
        </span>

        {/* Status badge — absolute top-right */}
        <span
          className={`absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded-full ${
            project.status === 'Completed'
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
              : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
          }`}
        >
          {project.status}
        </span>
      </div>

      {/* ── Body ────────────────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Number + category row */}
        <p className="text-xs text-[#94A3B8] tracking-widest uppercase">
          {project.number} &middot; {project.category}
        </p>

        {/* Title */}
        <h3 className="font-semibold text-lg text-[#F8FAFC] leading-snug" style={{ fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)' }}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#94A3B8] line-clamp-2 leading-relaxed">
          {project.shortDesc}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-2 py-0.5 rounded-full border border-white/10 text-[#94A3B8] bg-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <div className="flex gap-2 px-5 pb-5">
        {/* View Case Study */}
        <Link
          href={`/work/${project.slug}`}
          className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg border border-blue-400/40
                     text-blue-400 hover:bg-blue-400/10 transition-colors duration-200"
        >
          <BookOpen size={13} />
          View Case Study
        </Link>

        {/* Code link */}
        {isCodeDisabled ? (
          <span
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg border border-white/10
                       text-[#94A3B8]/40 cursor-not-allowed select-none"
            title="Code not publicly available"
          >
            <ExternalLink size={13} />
            Code
          </span>
        ) : (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg border border-white/10
                       text-[#94A3B8] hover:text-[#F8FAFC] hover:border-white/20 transition-colors duration-200"
          >
            <ExternalLink size={13} />
            Code
          </a>
        )}
      </div>
    </motion.article>
  );
}
