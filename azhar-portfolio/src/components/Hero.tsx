'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Github, Linkedin, MessageCircle,
  FileText, Sparkles, Mail,
} from 'lucide-react';
import Image from 'next/image';
import { hero, socialLinks } from '@/data/content';
import Button from './ui/Button';
import Badge from './ui/Badge';

// Map icon-name strings from content data to actual components
const socialIcons: Record<string, React.ReactNode> = {
  Github:        <Github size={20} />,
  Linkedin:      <Linkedin size={20} />,
  MessageCircle: <MessageCircle size={20} />,
  Mail:          <Mail size={20} />,
};

// Framer Motion stagger config
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  // Rotating tag animation
  const [tagIndex, setTagIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTagIndex((prev) => (prev + 1) % hero.rotatingTags.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Text column ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1"
          >
            {/* Availability badge */}
            <motion.div variants={item}>
              <Badge variant="accent" className="mb-6">
                <Sparkles size={14} className="mr-1.5" />
                {hero.availabilityBadge}
              </Badge>
            </motion.div>

            {/* Name & headline */}
            <motion.div variants={item}>
              <p className="text-lg text-muted mb-2 font-display">{hero.name}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display text-strong leading-[1.1] mb-4">
                {hero.headline}
              </h1>
            </motion.div>

            {/* Rotating tags */}
            <motion.div variants={item} className="h-8 mb-6 overflow-hidden">
              <motion.span
                key={tagIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-block text-lg font-display gradient-text font-semibold"
              >
                {hero.rotatingTags[tagIndex]}
              </motion.span>
            </motion.div>

            {/* Intro */}
            <motion.p
              variants={item}
              className="text-lg text-muted leading-relaxed mb-8 max-w-xl"
            >
              {hero.intro}
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-3 mb-8">
              <Button href="#projects" size="lg">
                Explore My Projects
                <ArrowRight size={18} />
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Let&apos;s Connect
              </Button>
              <Button href="/resume/Resume.pdf" variant="outline" size="lg" external>
                <FileText size={18} />
                View Resume
              </Button>
            </motion.div>

            {/* Social icons */}
            <motion.div variants={item} className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-2.5 rounded-xl bg-navy-800 border border-white/5 text-muted hover:text-accent-blue hover:border-accent-blue/30 transition-all"
                >
                  {socialIcons[link.icon] ?? <Github size={20} />}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Portrait column ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow ring behind portrait */}
              <div
                className="absolute inset-0 rounded-full bg-accent-gradient opacity-20 blur-2xl scale-110"
                aria-hidden="true"
              />

              {/* Portrait circle */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-white/10">
                <Image
                  src="/images/portrait-placeholder.jpg"
                  alt={`Portrait of ${hero.name}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </div>

              {/* Floating title badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-2 text-sm font-medium text-strong"
              >
                <span className="gradient-text">{hero.title}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
