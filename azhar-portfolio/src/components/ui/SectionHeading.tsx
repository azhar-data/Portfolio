'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  align = 'center',
}: SectionHeadingProps) {
  const alignClass = align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <div className={cn('flex flex-col gap-3', alignClass, className)}>
      {/* Eyebrow */}
      <motion.p
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="text-xs font-semibold tracking-[0.25em] uppercase bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent"
      >
        {eyebrow}
      </motion.p>

      {/* Title */}
      <motion.h2
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8FAFC] leading-tight"
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-lg text-[#94A3B8] max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

export default SectionHeading;
