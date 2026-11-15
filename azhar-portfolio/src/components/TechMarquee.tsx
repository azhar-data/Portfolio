'use client';

import { techMarqueeItems } from '@/data/content';

/**
 * Infinite auto-scrolling strip of technology names.
 * The list is doubled so the CSS translateX(-50%) creates a seamless loop.
 * Pauses on hover.
 */
export default function TechMarquee() {
  const items = [...techMarqueeItems, ...techMarqueeItems];

  return (
    <section
      className="py-10 border-y border-white/5 overflow-hidden"
      aria-label="Technologies I work with"
    >
      <div className="flex animate-marquee hover:[animation-play-state:paused]">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="mx-6 sm:mx-10 text-xl sm:text-2xl font-display text-white/10 hover:text-accent-blue/40 transition-colors duration-300 select-none flex-shrink-0"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
