'use client';

import { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import CentralGraphic from './CenterGraphic';
import AnimatedTitle from './AnimatedTitle';
import SideText from './SideText';
import styles from './M2MAnimation.module.css';

export default function M2MAnimation() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Animate from the moment the top of container hits top of viewport,
    // to the moment the bottom of the container hits the bottom of the viewport.
    offset: ['start start', 'end end'],
  });

  return (
    // This div is the "scroll track". Its height enables the animation.
    <div ref={containerRef} className={styles.scrollContainer}>
      {/* This div "sticks" to the viewport while the parent scrolls. */}
      <div className={styles.stickyContainer}>
        <AnimatedTitle scrollYProgress={scrollYProgress} />

        <main className={styles.mainContent}>
          <SideText scrollYProgress={scrollYProgress} />
          <CentralGraphic scrollYProgress={scrollYProgress} />
        </main>
      </div>
    </div>
  );
}
