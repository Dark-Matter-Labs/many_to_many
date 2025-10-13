'use client';

import { motion, useTransform } from 'framer-motion';
import styles from './AnimatedTitle.module.css';

export default function AnimatedTitle({ scrollYProgress }) {
  // Define animation ranges. These numbers control the timing.
  // [startFadeIn, fullyVisible, startFadeOut, fullyHidden]
  const title1Opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.1, 0.15],
    [1, 1, 0, 0],
  );
  const title1Y = useTransform(scrollYProgress, [0, 0.2], [0, -20]);

  const title2Opacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.6, 0.75],
    [0, 1, 1, 0],
  );
  const title2Y = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.6, 0.75],
    [20, 0, 0, -20],
  );

  const introTextOpacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);

  const title3Opacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);
  const title3Y = useTransform(scrollYProgress, [0.85, 0.9], [20, 0]);

  return (
    <div className={'font-galosText ' + styles.titleContainer}>
      <motion.h1 style={{ opacity: title1Opacity, y: title1Y }}>
        Brief Introduction
      </motion.h1>

      <motion.h1 style={{ opacity: title2Opacity, y: title2Y }}>
        The Basic Idea
      </motion.h1>

      <div className="flex flex-row items-center justify-end">
        <motion.h1 style={{ opacity: title3Opacity, y: title3Y }}>
          The Deep Code Shifts
        </motion.h1>
        <motion.p
          className={'max-w-lg ' + styles.introText}
          style={{ opacity: introTextOpacity }}
        >
          For each and everyone of us, our fundamental understandings of the
          world are influenced by 'deep codes,' often invisibly embedded within
          our creations, frameworks, and rules.
        </motion.p>
      </div>
    </div>
  );
}
