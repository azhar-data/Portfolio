'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText, Download, Eye,
  Briefcase, GraduationCap, FolderOpen, User,
} from 'lucide-react';
import { resumeData, experience, education, projects } from '@/data/content';
import SectionHeading from './SectionHeading';
import Card from './ui/Card';
import Button from './ui/Button';

const tabs = [
  { id: 'overview',   label: 'Overview',    icon: <User size={16} /> },
  { id: 'experience', label: 'Experience',  icon: <Briefcase size={16} /> },
  { id: 'education',  label: 'Education',   icon: <GraduationCap size={16} /> },
  { id: 'projects',   label: 'Projects',    icon: <FolderOpen size={16} /> },
];

export default function Resume() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section id="resume" className="py-24 sm:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="08 · Resume"
          title="My Professional Summary"
          subtitle="A quick overview of my qualifications and experience"
        />

        <Card glass className="overflow-hidden">
          {/* Header with download buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-accent-blue/10 text-accent-blue">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-display text-strong">
                  Resume
                </h3>
                <p className="text-sm text-muted">Muhammad Azhar — AI Engineer</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button href={resumeData.resumeUrl} variant="outline" size="sm" external>
                <Eye size={16} />
                View Resume
              </Button>
              <Button href={resumeData.resumeUrl} size="sm" external>
                <Download size={16} />
                Download PDF
              </Button>
            </div>
          </div>

          {/* Tab bar */}
          <div
            className="flex gap-1 mb-6 p-1 bg-navy-950 rounded-xl overflow-x-auto"
            role="tablist"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-navy-800 text-strong shadow-sm'
                    : 'text-muted hover:text-strong'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-[200px]"
            role="tabpanel"
          >
            {activeTab === 'overview' && (
              <p className="text-muted leading-relaxed">{resumeData.overview}</p>
            )}

            {activeTab === 'experience' && (
              <div className="space-y-4">
                {experience.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-navy-950 rounded-xl border border-white/5"
                  >
                    <h4 className="font-semibold text-strong text-sm">{exp.role}</h4>
                    <p className="text-xs text-accent-blue">
                      {exp.company} · {exp.dates}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-navy-950 rounded-xl border border-white/5"
                  >
                    <h4 className="font-semibold text-strong text-sm">{edu.degree}</h4>
                    <p className="text-xs text-accent-blue">
                      {edu.institution} · {edu.dates}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-4">
                {projects.slice(0, 4).map((proj) => (
                  <div
                    key={proj.id}
                    className="p-4 bg-navy-950 rounded-xl border border-white/5"
                  >
                    <h4 className="font-semibold text-strong text-sm">{proj.title}</h4>
                    <p className="text-xs text-muted mt-1">{proj.description}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </Card>
      </div>
    </section>
  );
}
