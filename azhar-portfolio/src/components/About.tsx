'use client';

import { motion } from 'framer-motion';
import { Github, ArrowRight, Quote } from 'lucide-react';
import { about } from '@/data/content';
import SectionHeading from './SectionHeading';
import Card from './ui/Card';
import Button from './ui/Button';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="05 · About"
          title="The Engineer Behind the Systems"
          subtitle="My journey from data curiosity to building production AI"
        />

        {/* 3-stage journey cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {about.journey.map((phase, idx) => (
            <motion.div
              key={phase.stage}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <Card className="text-center h-full">
                <div className="text-4xl font-bold font-display gradient-text mb-3">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-semibold font-display text-strong mb-2">
                  {phase.stage}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {phase.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-lg text-muted leading-relaxed max-w-3xl">
            {about.bio}
          </p>
        </motion.div>

        {/* Philosophy quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card glass className="relative overflow-hidden">
            <div className="absolute top-4 left-6 text-accent-blue/20" aria-hidden="true">
              <Quote size={48} />
            </div>
            <blockquote className="relative z-10 text-xl sm:text-2xl font-display text-strong/90 italic leading-relaxed pl-4">
              {about.philosophy}
            </blockquote>
          </Card>
        </motion.div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button href={about.githubUrl} variant="secondary" size="lg" external>
            <Github size={20} />
            Explore My GitHub
            <ArrowRight size={16} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
