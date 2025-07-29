'use client';
import { motion, MotionValue } from 'framer-motion';
import styles from './AnimatedCanvas.module.css';

export default function Diamond({ x, y, opacity, scale = 1, color }) {
  return (
    <motion.div
      className={styles.diamondWrapper}
      style={{ x, y, opacity, scale }}
    >
      <motion.div
        className={styles.diamondShape}
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
}
