'use client';

import { motion, useScroll } from 'framer-motion';

/**
 * ScrollProgressBar — A thin fixed bar at the top of the viewport that fills
 * left-to-right as the user scrolls down the page.
 */
export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-blue to-accent-cyan origin-left z-[60]"
      style={{ scaleX: scrollYProgress }}
      aria-hidden="true"
    />
  );
}
