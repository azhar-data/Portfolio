'use client';

import { motion } from 'framer-motion';
import { BarChart3, Brain, Sparkles, Wrench } from 'lucide-react';
import { skillGroups } from '@/data/content';
import SectionHeading from './SectionHeading';
import Card from './ui/Card';
import Badge from './ui/Badge';

const iconMap: Record<string, React.ReactNode> = {
  BarChart3: <BarChart3 size={24} />,
  Brain:     <Brain size={24} />,
  Sparkles:  <Sparkles size={24} />,
  Wrench:    <Wrench size={24} />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="01 · Technical Expertise"
          title="My Technical Arsenal"
          subtitle="The tools and technologies I use to build intelligent systems"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
            >
              <Card className="h-full">
                {/* Group header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-accent-blue/10 text-accent-blue">
                    {iconMap[group.icon] ?? <Sparkles size={24} />}
                  </div>
                  <h3 className="text-lg font-semibold font-display text-strong">
                    {group.title}
                  </h3>
                </div>

                {/* Skill chips with hover tooltips */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="group relative">
                      <Badge>{skill.name}</Badge>

                      {/* Tooltip */}
                      <div
                        role="tooltip"
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-navy-700 text-xs text-strong rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 border border-white/10"
                      >
                        {skill.tooltip}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-navy-700" />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
