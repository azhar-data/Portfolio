'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, MessageCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const ROTATING_HEADLINES = [
  'I Build AI Systems That Turn Data Into Decisions.',
  'I Engineer Intelligence From Raw Data.',
  'I Deploy AI That Actually Ships.',
];

const TAGS = ['AI Agents', 'Generative AI', 'Machine Learning', 'Deep Learning', 'LLMs', 'RAG Systems'];

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/azhar-data',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammad-azhar-ai-engin',
    icon: Linkedin,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/92XXXXXXXXXX',
    icon: MessageCircle,
  },
];

/* ─── Animation Variants ────────────────────────────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: 0.6 + i * 0.07, ease: 'easeOut' },
  }),
};

/* ─── Portrait Component ────────────────────────────────────────────────────── */

function Portrait() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[26rem] lg:h-[26rem] mx-auto">
      {/* Outer glow ring */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] opacity-20 blur-2xl scale-110"
      />
      {/* Rotating dashed border */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30 animate-spin"
        style={{ animationDuration: '20s' }}
      />

      {/* Portrait or Fallback */}
      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10">
        {imgError ? (
          /* Fallback gradient initials */
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1D2E55] to-[#0A1628]">
            <span className="font-display font-bold text-6xl bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent select-none">
              MA
            </span>
          </div>
        ) : (
          <Image
            src="/images/portrait.jpg"
            alt="Muhammad Azhar – AI Engineer"
            fill
            sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 416px"
            className="object-cover"
            priority
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Floating badge — "Available" */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-2 bg-[#111827] border border-white/10 rounded-full px-4 py-2 text-xs font-medium text-[#94A3B8] shadow-xl">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        Available for hire
      </div>
    </div>
  );
}

/* ─── Hero Component ─────────────────────────────────────────────────────────── */

export function Hero() {
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((i) => (i + 1) % ROTATING_HEADLINES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* ── Background decorations ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#94A3B8 1px, transparent 1px), linear-gradient(to right, #94A3B8 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Gradient blob – left */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-500/10 blur-3xl" />
        {/* Gradient blob – right */}
        <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cyan-500/15 to-blue-600/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Portrait column (left on desktop, below text on mobile) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="order-2 lg:order-1 flex justify-center"
          >
            <Portrait />
          </motion.div>

          {/* ── Text column ── */}
          <motion.div
            className="order-1 lg:order-2 flex flex-col gap-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* 1. AI Engineer badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                AI Engineer
              </span>
            </motion.div>

            {/* 2. Name */}
            <motion.h1
              variants={fadeUp}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#F8FAFC] leading-[1.1]"
            >
              Muhammad{' '}
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                Azhar
              </span>
            </motion.h1>

            {/* 3. Rotating headline */}
            <motion.div
              variants={fadeUp}
              className="h-16 sm:h-14 flex items-center overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={headlineIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: 'easeInOut' }}
                  className="text-lg sm:text-xl font-semibold text-[#94A3B8] leading-snug"
                >
                  {ROTATING_HEADLINES[headlineIndex]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* 4. Intro */}
            <motion.p variants={fadeUp} className="text-[#94A3B8] text-base leading-relaxed">
              Specializing in Machine Learning, Deep Learning, and Agentic AI systems
              that solve real-world problems at scale. I turn complex data into production-grade
              intelligence.
            </motion.p>

            {/* 5. Availability badge */}
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Open to Remote Opportunities, Internships &amp; Freelance Projects
              </div>
            </motion.div>

            {/* 6. Tag pills */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {TAGS.map((tag, i) => (
                <motion.span
                  key={tag}
                  custom={i}
                  variants={tagVariants}
                  initial="hidden"
                  animate="visible"
                  className="px-3 py-1 text-xs font-medium rounded-full bg-[#111827] border border-white/10 text-[#94A3B8] hover:border-blue-500/40 hover:text-blue-400 transition-colors duration-200"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* 7. CTA buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {/* Primary */}
              <Link
                href="#projects"
                className={cn(
                  'inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white',
                  'bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]',
                  'shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 hover:shadow-xl hover:scale-[1.03]',
                  'ring-1 ring-inset ring-white/20',
                  'transition-all duration-300',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F1C]',
                )}
              >
                Explore My Projects
                <ArrowRight size={16} aria-hidden />
              </Link>

              {/* Outline */}
              <Link
                href="#contact"
                className={cn(
                  'inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold',
                  'border border-blue-500/60 text-blue-400 bg-transparent',
                  'hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-300',
                  'transition-all duration-300',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F1C]',
                )}
              >
                Let&apos;s Connect
              </Link>

              {/* Ghost / subtle */}
              <a
                href="/resume/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium',
                  'text-[#94A3B8] bg-transparent hover:bg-white/5 hover:text-[#F8FAFC]',
                  'transition-all duration-300',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F1C]',
                )}
              >
                View Resume
                <ExternalLink size={14} aria-hidden />
              </a>
            </motion.div>

            {/* 8. Social icons */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${label}`}
                  className={cn(
                    'flex items-center justify-center w-10 h-10 rounded-xl',
                    'bg-[#111827] border border-white/10 text-[#94A3B8]',
                    'hover:border-blue-500/40 hover:text-blue-400 hover:bg-blue-500/10',
                    'transition-all duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
                  )}
                >
                  <Icon size={18} aria-hidden />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
