'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import { projects, projectCategories } from '@/data/content';
import SectionHeading from './SectionHeading';
import Card from './ui/Card';
import Badge from './ui/Badge';
import Button from './ui/Button';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="02 · Selected Work"
          title="Projects That Solve Real Problems"
          subtitle="From concept to deployment — here's what I've been building"
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeFilter === cat
                  ? 'bg-accent-blue text-white'
                  : 'bg-navy-800 text-muted hover:text-strong border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col">
                  {/* Concept visual */}
                  <div className="h-40 rounded-xl bg-navy-950 border border-white/5 mb-6 flex items-center justify-center overflow-hidden relative group">
                    <div className="absolute inset-0 bg-accent-gradient opacity-5 group-hover:opacity-10 transition-opacity" />
                    <div className="text-center p-4">
                      <div className="text-3xl font-bold font-display gradient-text mb-1">
                        {project.number}
                      </div>
                      <p className="text-xs text-muted">Concept View</p>
                    </div>
                  </div>

                  {/* Number & status */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted font-display">
                      {project.number} / {String(projects.length).padStart(2, '0')}
                    </span>
                    <Badge
                      variant={project.status === 'Completed' ? 'success' : 'warning'}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {/* Category label */}
                  <p className="text-xs text-accent-blue font-medium uppercase tracking-wider mb-2">
                    {project.category}
                  </p>

                  {/* Title & description */}
                  <h3 className="text-lg font-semibold font-display text-strong mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted mb-4 line-clamp-2 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs bg-navy-950 text-muted rounded-md border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2 mt-auto">
                    <Button
                      href={project.caseStudyUrl}
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      View Case Study
                      <ArrowUpRight size={14} />
                    </Button>
                    <Button href={project.codeUrl} variant="ghost" size="sm" external>
                      <Github size={16} />
                      Code
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
