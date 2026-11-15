'use client';

import { motion } from 'framer-motion';
import {
  Bot, BarChart3, Cpu, MessageSquare, Zap, Layout, ArrowRight,
} from 'lucide-react';
import { services } from '@/data/content';
import SectionHeading from './SectionHeading';
import Card from './ui/Card';
import Badge from './ui/Badge';
import Button from './ui/Button';

const iconMap: Record<string, React.ReactNode> = {
  Bot:           <Bot size={28} />,
  BarChart3:     <BarChart3 size={28} />,
  Cpu:           <Cpu size={28} />,
  MessageSquare: <MessageSquare size={28} />,
  Zap:           <Zap size={28} />,
  Layout:        <Layout size={28} />,
};

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="03 · What I Do"
          title="Services & Solutions"
          subtitle="End-to-end AI development — from idea to production"
        />

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, idx) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-accent-blue/10 text-accent-blue">
                    {iconMap[service.icon] ?? <Cpu size={28} />}
                  </div>
                  <span className="text-4xl font-bold font-display text-white/5">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold font-display text-strong mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {service.techChips.map((chip) => (
                    <Badge key={chip}>{chip}</Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-accent-gradient opacity-10" aria-hidden="true" />
          <div className="relative glass rounded-2xl p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-strong mb-4">
              Have a Complex AI Problem?
            </h3>
            <p className="text-muted mb-6 max-w-lg mx-auto">
              Let&apos;s build the solution together. I bring the technical expertise
              — you bring the vision.
            </p>
            <Button href="#contact" size="lg">
              Start a Conversation
              <ArrowRight size={18} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
