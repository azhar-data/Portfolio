'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Skills',      href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Services',   href: '#services' },
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education' },
  { label: 'Resume',     href: '#resume' },
  { label: 'Contact',    href: '#contact' },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace('#', ''));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  // Scroll detection for glass background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // IntersectionObserver: highlight active nav link
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'backdrop-blur-md bg-black/40 border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent',
      )}
    >
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-18"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-display font-bold text-xl bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          aria-label="Azhar.dev – Go to homepage"
        >
          Azhar.dev
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
                    isActive
                      ? 'bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent font-semibold'
                      : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5',
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          {/* "Let's Talk" CTA */}
          <Link
            href="#contact"
            className={cn(
              'hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-white',
              'bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]',
              'shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 hover:shadow-xl hover:scale-[1.03]',
              'ring-1 ring-inset ring-white/20',
              'transition-all duration-300',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F1C]',
            )}
          >
            Let&apos;s Talk
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className={cn(
              'lg:hidden p-2 rounded-lg text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5',
              'transition-colors duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
            )}
          >
            {mobileOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="lg:hidden backdrop-blur-md bg-black/60 border-b border-white/5"
          >
            <ul className="flex flex-col px-4 py-4 gap-1" role="list">
              {NAV_LINKS.map(({ label, href }, i) => {
                const id = href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                  >
                    <Link
                      href={href}
                      onClick={closeMobile}
                      className={cn(
                        'block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
                        isActive
                          ? 'bg-blue-500/10 text-blue-400 font-semibold'
                          : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5',
                      )}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {label}
                    </Link>
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.04, duration: 0.2 }}
                className="mt-2"
              >
                <Link
                  href="#contact"
                  onClick={closeMobile}
                  className={cn(
                    'flex items-center justify-center px-4 py-3 rounded-xl text-sm font-semibold text-white',
                    'bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]',
                    'shadow-lg shadow-blue-500/25',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
                  )}
                >
                  Let&apos;s Talk
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
