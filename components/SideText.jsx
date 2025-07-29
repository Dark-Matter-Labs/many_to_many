'use client';

import { motion, useTransform } from 'framer-motion';
import styles from './SideText.module.css';

export default function SideText({ scrollYProgress }) {
  // Opacity for the first set of paragraphs (Stage 2)
  const text1Opacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.55, 0.6],
    [0, 1, 1, 0],
  );

  // Opacity for the second set of paragraphs (Stage 3)
  const text2Opacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);

  return (
    <>
      <motion.div
        style={{ opacity: text1Opacity }}
        className={styles.textContainer}
      >
        <div className={styles.leftText}>
          <p>
            Solving today's complex, interconnected problems requires what we
            term "complex collaborations[*]" – bringing together many diverse
            groups (public, private, civic) with <strong>many</strong> new
            perspectives, including future generations and the natural world.
          </p>
          <p className="mt-10">
            While <strong>many</strong> collaborations like this are already
            doing great work, we believe that finding better ways to support how
            they are structured and organised them could unlock more effective,
            system-level change.
          </p>
        </div>
        <div className={styles.rightText}>
          <p>
            The <strong>Many-to-Many System</strong> is focussed on unlocking
            the governance, organising, legal, and learning structures of
            complex collaborations to enable many resources – not just money,
            but also knowledge and relationships – to flow more freely, and to
            foster <strong>many</strong> new ways of working that embrace
            diverse value exchange.
          </p>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: text2Opacity }}
        className={styles.textContainer}
      >
        <div className={styles.leftText}>
          <p>xxx deep codes text</p>
        </div>
        <div className={styles.rightText}>
          <p>xxx deep codes text</p>
        </div>
      </motion.div>
    </>
  );
}
