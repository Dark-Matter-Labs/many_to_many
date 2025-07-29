'use client';
import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import AnimatedCanvas from './AnimatedCanvas';
import styles from './EntryPointAnimation.module.css';

export default function EntryPointAnimation() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={containerRef} className={styles.scrollContainer}>
      <div className={styles.stickyContainer}>
        <div className={styles.titleText}>
          <h2>
            We understand people have different needs and need different mean to
            interact with the M2M System. Hence we offer different entry points:
          </h2>
        </div>
        <AnimatedCanvas scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
