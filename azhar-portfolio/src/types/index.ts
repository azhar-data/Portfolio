// ── Core type definitions for the portfolio ──

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  tooltip: string;
}

export interface SkillGroup {
  title: string;
  icon: string; // lucide-react icon name
  skills: Skill[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  slug: string;
  category: 'Machine Learning' | 'Agentic Systems' | 'NLP' | 'Full-Stack';
  status: 'Completed' | 'In Progress';
  description: string;
  techStack: string[];
  caseStudyUrl: string;
  codeUrl: string;
  overview?: string;
  problem?: string;
  approach?: string;
  results?: string;
}

export interface Service {
  number: string;
  title: string;
  icon: string;
  description: string;
  techChips: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  initials: string;
  dates: string;
  bullets: string[];
  techChips: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  dates: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  details: string;
}

// ── Extended / aliased interfaces used by Projects section ────────────────────

export interface ProjectType {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: 'Machine Learning' | 'NLP' | 'Agentic Systems' | 'Full-Stack';
  status: 'Completed' | 'In Progress';
  shortDesc: string;
  description: string;
  tags: string[];
  /** Tech stack chips displayed on the card */
  techs: string[];
  codeUrl: string;
  caseStudyUrl: string;
  problem?: string;
  approach?: string;
  results?: string;
}

export interface ServiceType {
  id: string;
  number: string;
  title: string;
  icon: string;
  description: string;
  techs: string[];
}

export interface ExperienceType {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
  techs: string[];
}

export interface EducationType {
  id: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  description: string;
  url?: string;
}

export interface SkillGroupType {
  id: string;
  label: string;
  icon: string;
  skills: {
    name: string;
    tooltip?: string;
  }[];
}
