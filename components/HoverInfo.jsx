'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './HoverInfo.module.css';

export default function HoverInfo({ children }) {
  const [isHovering, setIsHovering] = useState(false);

  const animationVariants = {
    initial: { opacity: 0, y: 10, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 10, scale: 0.95 },
  };

  return (
    <span
      className={styles.wrapper}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className={styles.trigger}>?</span>

      <AnimatePresence>
        {isHovering && (
          <motion.span
            className={styles.tooltip}
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            {children}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
