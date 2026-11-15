'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

/** Reusable section header with numbered eyebrow, title, and optional subtitle. */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent-blue mb-4 font-display">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-strong mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
