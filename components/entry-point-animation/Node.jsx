'use client';
import { motion, MotionValue } from 'framer-motion';
import styles from './AnimatedCanvas.module.css';

export default function Node({
  x,
  y,
  opacity,
  scale = 1,
  title,
  description,
  dotColor = '#0052ff',
  textColor = '#333',
}) {
  return (
    <motion.div className={styles.nodeWrapper} style={{ x, y, opacity, scale }}>
      <motion.div
        className={styles.nodeDot}
        style={{ backgroundColor: dotColor }}
      />
      <div className={styles.nodeText}>
        <h4 style={{ color: '#0052ff' }}>{title}</h4>
        <p style={{ color: textColor }}>{description}</p>
      </div>
    </motion.div>
  );
}
