'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ScrollingQuotes.module.css';

const Quote = ({ children, x }) => (
  <motion.div className={styles.quoteWrapper} style={{ x }}>
    <div className={styles.quoteContent}>
      <h3>“{children}”</h3>
    </div>
  </motion.div>
);

export default function ScrollingQuotes() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ['-100%', '0%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['-20%', '-20%']);
  const x3 = useTransform(scrollYProgress, [0, 1], ['60%', '-60%']);

  return (
    <section ref={containerRef} className={`${styles.container} grid-bg`}>
      <Quote x={x1}>A quote by the Learning Network here one quote</Quote>
      <Quote x={x2}>A quote by the Learning Network here one quote</Quote>
      <Quote x={x3}>A quote by the Learning Network here one quote</Quote>
    </section>
  );
}
