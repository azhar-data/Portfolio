'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '@/data/content';
import SectionHeading from './SectionHeading';
import Card from './ui/Card';

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="07 · Education"
          title="Academic Foundation"
          subtitle="The formal training behind the engineering"
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue/50 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {education.map((edu, idx) => (
              <motion.div
                key={`${edu.institution}-${idx}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex gap-6 sm:gap-8"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-navy-800 border border-white/5 flex items-center justify-center text-accent-blue">
                    <GraduationCap size={24} />
                  </div>
                </div>

                {/* Card */}
                <Card className="flex-1">
                  <h3 className="text-lg font-semibold font-display text-strong mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-accent-blue font-medium mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-muted mb-3">{edu.dates}</p>
                  <p className="text-sm text-muted leading-relaxed">
                    {edu.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
