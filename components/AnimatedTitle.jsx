'use client';

import { motion, useTransform } from 'framer-motion';
import styles from './AnimatedTitle.module.css';

export default function AnimatedTitle({ scrollYProgress }) {
  // Define animation ranges. These numbers control the timing.
  // [startFadeIn, fullyVisible, startFadeOut, fullyHidden]
  const title1Opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.15, 0.2],
    [1, 1, 0, 0],
  );
  const title1Y = useTransform(scrollYProgress, [0, 0.2], [0, -20]);

  const title2Opacity = useTransform(
    scrollYProgress,
    [0.2, 0.25, 0.55, 0.6],
    [0, 1, 1, 0],
  );
  const title2Y = useTransform(
    scrollYProgress,
    [0.2, 0.25, 0.55, 0.6],
    [20, 0, 0, -20],
  );

  const introTextOpacity = useTransform(scrollYProgress, [0.6, 0.65], [0, 1]);

  const title3Opacity = useTransform(scrollYProgress, [0.65, 0.7], [0, 1]);
  const title3Y = useTransform(scrollYProgress, [0.65, 0.7], [20, 0]);

  return (
    <div className={styles.titleContainer}>
      <motion.h1 style={{ opacity: title1Opacity, y: title1Y }}>
        Welcome to our digital home for the Many-to-Many System.
      </motion.h1>

      <motion.h1 style={{ opacity: title2Opacity, y: title2Y }}>
        Some short bits around the system, the why, the who...
      </motion.h1>

      <div>
        <motion.p
          className={styles.introText}
          style={{ opacity: introTextOpacity }}
        >
          intro text about deep codes
        </motion.p>
        <motion.h1 style={{ opacity: title3Opacity, y: title3Y }}>
          The Deep Code Shifts
        </motion.h1>
      </div>
    </div>
  );
}
