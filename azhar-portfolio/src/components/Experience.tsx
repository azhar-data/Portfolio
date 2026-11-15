'use client';

import { motion } from 'framer-motion';
import { experience } from '@/data/content';
import SectionHeading from './SectionHeading';
import Badge from './ui/Badge';

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="06 · Experience"
          title="Where I've Contributed"
          subtitle="Professional experience and roles"
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue/50 via-accent-cyan/30 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${idx}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex gap-6 sm:gap-8"
              >
                {/* Company initials avatar */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-navy-800 border border-white/5 flex items-center justify-center">
                    <span className="text-sm sm:text-base font-bold font-display gradient-text">
                      {exp.initials}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-semibold font-display text-strong">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-accent-blue font-medium mb-1">
                    {exp.company}
                  </p>
                  <p className="text-xs text-muted mb-4">{exp.dates}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="text-sm text-muted flex items-start gap-2"
                      >
                        <span
                          className="w-1 h-1 rounded-full bg-accent-blue mt-2 flex-shrink-0"
                          aria-hidden="true"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.techChips.map((chip) => (
                      <Badge key={chip}>{chip}</Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
