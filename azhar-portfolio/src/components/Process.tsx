'use client';

import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';
import { processSteps } from '@/data/content';
import SectionHeading from './SectionHeading';

const iconMap: Record<string, React.ReactNode> = {
  Search:  <Search size={24} />,
  PenTool: <PenTool size={24} />,
  Code:    <Code size={24} />,
  Rocket:  <Rocket size={24} />,
};

export default function Process() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="04 · Process"
          title="How I Work"
          subtitle="A structured approach to building AI systems that deliver results"
        />

        <div className="relative">
          {/* Vertical connector line */}
          <div
            className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue/50 via-accent-cyan/50 to-transparent hidden sm:block"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-6 sm:gap-8"
              >
                {/* Step icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-navy-800 border border-white/5 flex items-center justify-center text-accent-blue">
                    {iconMap[step.icon] ?? <Code size={24} />}
                  </div>
                </div>

                {/* Step content */}
                <div className="pt-2">
                  <span className="text-xs font-display font-bold text-accent-blue tracking-wider">
                    STEP {step.number}
                  </span>
                  <h3 className="text-xl font-semibold font-display text-strong mb-2 mt-1">
                    {step.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
