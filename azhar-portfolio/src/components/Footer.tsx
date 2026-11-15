'use client';

import { ArrowUp, Github, Linkedin, MessageCircle, Mail } from 'lucide-react';
import { footer, socialLinks } from '@/data/content';

const iconMap: Record<string, React.ReactNode> = {
  Github:        <Github size={18} />,
  Linkedin:      <Linkedin size={18} />,
  MessageCircle: <MessageCircle size={18} />,
  Mail:          <Mail size={18} />,
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold font-display text-strong"
          >
            Azhar<span className="text-accent-blue">.dev</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted text-center">{footer.copyright}</p>

          {/* Social icons + back-to-top */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="p-2 rounded-lg text-muted hover:text-accent-blue transition-colors"
              >
                {iconMap[link.icon] ?? <Github size={18} />}
              </a>
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="p-2 rounded-lg bg-navy-800 border border-white/5 text-muted hover:text-accent-blue transition-colors ml-2"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
