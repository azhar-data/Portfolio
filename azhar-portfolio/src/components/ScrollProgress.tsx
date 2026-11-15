'use client';

import { motion, useScroll } from 'framer-motion';

/** Thin gradient progress bar fixed to the very top of the page. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-accent-gradient origin-left z-[60]"
      style={{ scaleX: scrollYProgress }}
      aria-hidden="true"
    />
  );
}
