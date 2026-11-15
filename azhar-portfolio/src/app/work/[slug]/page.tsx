import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft, Github, ExternalLink, CheckCircle2,
  AlertTriangle, Cpu, Layers, Sparkles, ArrowRight
} from 'lucide-react';
import { projects } from '@/data/content';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

interface CaseStudyProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: CaseStudyProps): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study by Muhammad Azhar`,
      description: project.description,
      type: 'article',
    },
  };
}

export default function CaseStudyPage({ params }: CaseStudyProps) {
  const projectIndex = projects.findIndex((p) => p.slug === params.slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-20 relative">
        {/* Background glow effects */}
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Navigation Link */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Selected Work
          </Link>

          {/* Hero Header */}
          <div className="mb-12 border-b border-white/5 pb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-sm font-display font-semibold text-accent-blue tracking-widest uppercase">
                Case Study · {project.number}
              </span>
              <span className="text-white/20">|</span>
              <span className="text-sm text-muted uppercase tracking-wider">
                {project.category}
              </span>
              <Badge variant={project.status === 'Completed' ? 'success' : 'warning'}>
                {project.status}
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-strong mb-6 leading-tight">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-muted leading-relaxed mb-8 max-w-3xl">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href={project.codeUrl} variant="primary" size="md" target="_blank">
                <Github size={18} />
                View Source Code
              </Button>
              <Button href="/#contact" variant="outline" size="md">
                Discuss Similar Project
              </Button>
            </div>
          </div>

          {/* Architecture / Visual Concept Preview Mockup */}
          <div className="mb-16">
            <Card glass className="p-2 sm:p-4 overflow-hidden border border-white/10">
              <div className="bg-navy-950 rounded-xl p-6 sm:p-10 border border-white/5">
                {/* Fake browser / terminal chrome */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-xs font-mono text-muted/60 bg-navy-800 px-3 py-1 rounded-md">
                    architecture_preview // {project.slug}.ts
                  </div>
                  <div className="w-12" />
                </div>

                {/* Conceptual Architecture View */}
                <div className="grid md:grid-cols-3 gap-4 text-center py-6">
                  <div className="p-4 rounded-xl bg-navy-800/80 border border-white/5">
                    <div className="text-accent-blue mb-2 flex justify-center">
                      <Layers size={28} />
                    </div>
                    <div className="text-xs font-mono text-muted mb-1">STAGE 1: INPUT</div>
                    <div className="text-sm font-semibold text-strong">Data Ingestion & ETL</div>
                    <div className="text-xs text-muted/80 mt-1">Cleaning, tokenization, embeddings</div>
                  </div>

                  <div className="p-4 rounded-xl bg-navy-800/80 border border-accent-blue/30 relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-accent-blue text-[10px] text-white rounded font-mono font-bold">
                      CORE AI ENGINE
                    </div>
                    <div className="text-accent-cyan mb-2 flex justify-center">
                      <Cpu size={28} />
                    </div>
                    <div className="text-xs font-mono text-muted mb-1">STAGE 2: MODEL</div>
                    <div className="text-sm font-semibold text-strong">Inference & Reasoning</div>
                    <div className="text-xs text-muted/80 mt-1">Classification, RAG & agents</div>
                  </div>

                  <div className="p-4 rounded-xl bg-navy-800/80 border border-white/5">
                    <div className="text-emerald-400 mb-2 flex justify-center">
                      <Sparkles size={28} />
                    </div>
                    <div className="text-xs font-mono text-muted mb-1">STAGE 3: OUTPUT</div>
                    <div className="text-sm font-semibold text-strong">Interactive Delivery</div>
                    <div className="text-xs text-muted/80 mt-1">FastAPI, dashboards, metrics</div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 text-center text-xs text-muted font-mono">
                  [ System Architecture & Interface Diagram // Production Build v1.4 ]
                </div>
              </div>
            </Card>
          </div>

          {/* Main Case Study Sections */}
          <div className="grid lg:grid-cols-3 gap-10 mb-16">
            {/* Left 2 Cols: Overview, Problem, Approach, Results */}
            <div className="lg:col-span-2 space-y-12">
              {/* Executive Overview */}
              <section>
                <h2 className="text-2xl font-bold font-display text-strong mb-4 flex items-center gap-2">
                  <span className="text-accent-blue font-mono text-lg">01.</span> Overview
                </h2>
                <p className="text-muted leading-relaxed text-base">
                  {project.overview || project.description}
                </p>
              </section>

              {/* The Challenge / Problem */}
              <section>
                <h2 className="text-2xl font-bold font-display text-strong mb-4 flex items-center gap-2">
                  <span className="text-accent-blue font-mono text-lg">02.</span> The Challenge
                </h2>
                <Card className="border-l-4 border-l-amber-500/80 bg-navy-900/50">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-amber-400 flex-shrink-0 mt-1" size={20} />
                    <p className="text-muted leading-relaxed">
                      {project.problem ||
                        'Organizations struggle to turn unstructured data or complex predictive questions into real-time operational workflows without incurring high manual overhead.'}
                    </p>
                  </div>
                </Card>
              </section>

              {/* Approach & Engineering */}
              <section>
                <h2 className="text-2xl font-bold font-display text-strong mb-4 flex items-center gap-2">
                  <span className="text-accent-blue font-mono text-lg">03.</span> Engineering Approach
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  {project.approach ||
                    'Engineered an iterative pipeline combining state-of-the-art machine learning, robust data preprocessing, and automated inference routines designed for scalable deployment.'}
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-sm text-muted">
                    <CheckCircle2 size={18} className="text-accent-blue flex-shrink-0 mt-0.5" />
                    <span>Modular architecture decoupling data transformation, model execution, and presentation.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-muted">
                    <CheckCircle2 size={18} className="text-accent-blue flex-shrink-0 mt-0.5" />
                    <span>Rigorous validation routines ensuring consistency across diverse edge-case inputs.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-muted">
                    <CheckCircle2 size={18} className="text-accent-blue flex-shrink-0 mt-0.5" />
                    <span>Low-latency API wrappers to expose predictions for asynchronous consumers.</span>
                  </div>
                </div>
              </section>

              {/* Measurable Results */}
              <section>
                <h2 className="text-2xl font-bold font-display text-strong mb-4 flex items-center gap-2">
                  <span className="text-accent-blue font-mono text-lg">04.</span> Key Results & Impact
                </h2>
                <Card className="bg-gradient-to-br from-navy-800 to-navy-900 border-accent-blue/20">
                  <p className="text-strong leading-relaxed text-base">
                    {project.results ||
                      'Delivered high-confidence model accuracy with sub-second response latency, directly empowering stakeholders with automated insights.'}
                  </p>
                </Card>
              </section>
            </div>

            {/* Right Column: Tech Stack & Metadata Card */}
            <div className="space-y-6">
              <Card glass>
                <h3 className="text-base font-semibold font-display text-strong mb-4 pb-2 border-b border-white/5">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="accent">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-base font-semibold font-display text-strong mb-4 pb-2 border-b border-white/5">
                  Project Details
                </h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted">Domain</dt>
                    <dd className="text-strong font-medium">{project.category}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted">Status</dt>
                    <dd className="text-strong font-medium">{project.status}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted">Role</dt>
                    <dd className="text-strong font-medium">Lead AI Engineer</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted">Repository</dt>
                    <dd>
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-blue hover:underline inline-flex items-center gap-1"
                      >
                        GitHub <ExternalLink size={12} />
                      </a>
                    </dd>
                  </div>
                </dl>
              </Card>

              {/* Call to Action Card */}
              <Card className="text-center p-6 bg-accent-blue/5 border border-accent-blue/20">
                <h4 className="text-base font-semibold font-display text-strong mb-2">
                  Need a similar AI system?
                </h4>
                <p className="text-xs text-muted mb-4">
                  I specialize in designing and deploying custom machine learning and agentic workflows.
                </p>
                <Button href="/#contact" size="sm" className="w-full">
                  Get in Touch
                </Button>
              </Card>
            </div>
          </div>

          {/* Pagination to Next / Prev Projects */}
          <div className="border-t border-white/5 pt-8 flex items-center justify-between">
            {prevProject ? (
              <Link
                href={prevProject.caseStudyUrl}
                className="group flex flex-col text-left"
              >
                <span className="text-xs text-muted uppercase tracking-wider mb-1 flex items-center gap-1 group-hover:text-accent-blue">
                  <ArrowLeft size={12} /> Previous Case Study
                </span>
                <span className="text-sm font-semibold text-strong group-hover:text-accent-blue transition-colors">
                  {prevProject.title}
                </span>
              </Link>
            ) : <div />}

            {nextProject ? (
              <Link
                href={nextProject.caseStudyUrl}
                className="group flex flex-col text-right"
              >
                <span className="text-xs text-muted uppercase tracking-wider mb-1 flex items-center justify-end gap-1 group-hover:text-accent-blue">
                  Next Case Study <ArrowRight size={12} />
                </span>
                <span className="text-sm font-semibold text-strong group-hover:text-accent-blue transition-colors">
                  {nextProject.title}
                </span>
              </Link>
            ) : <div />}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
