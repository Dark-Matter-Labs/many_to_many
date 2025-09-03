'use client';

import { motion, useTransform } from 'framer-motion';
import HoverInfo from './HoverInfo';
import styles from './SideText.module.css';

export default function SideText({ scrollYProgress }) {
  // State 1: Hollow circle only (no text)
  const state1Opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // State 2: First paragraph with highlighted "many" words
  const state2Opacity = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.6, 0.7],
    [0, 1, 1, 0],
  );

  // State 3: Second paragraph appears, first fades out
  const state3Opacity = useTransform(
    scrollYProgress,
    [0.25, 0.35, 0.6, 0.7],
    [0, 1, 1, 0],
  );

  // State 4: Final paragraph appears, previous fades out
  const state4Opacity = useTransform(
    scrollYProgress,
    [0.35, 0.45, 0.6, 0.7],
    [0, 1, 1, 0],
  );

  // State 5: Final paragraph appears, previous fades out
  const state5Opacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);

  return (
    <>
      {/* State 1: Hollow circle only */}

      {/* State 2: First paragraph with highlighted "many" words */}
      <motion.div
        style={{ opacity: state2Opacity }}
        className={styles.textContainer}
      >
        <div className={'font-galosText ' + styles.leftText}>
          <p>
            Solving today's complex, interconnected problems requires what we
            term "complex collaborations"
            <HoverInfo>
              We focused on complex challenges that inherently require diverse
              actors and perspectives. This focus highlighted the need for a
              clear, concise way to describe such endeavour. While no
              terminology felt perfect, we adopted "complex collaboration." You
              might use other terminology such as collaboration ecosystems,
              cross sector alliances, systemic partnerships, etc.
            </HoverInfo>{' '}
            - bringing together many diverse groups (public, private, civic)
            with <strong className="text-blue-600">many</strong> new
            perspectives, including future generations and the natural world.
          </p>
        </div>
        <div className={'font-galosText ' + styles.rightText}>
          {/* Empty for this state - third paragraph not visible */}
        </div>
      </motion.div>

      {/* State 3: Second paragraph appears */}
      <motion.div
        style={{ opacity: state3Opacity }}
        className={styles.textContainer}
      >
        <div className={styles.leftText}>
          <p className="font-galosText mt-96">
            While <strong className="text-blue-600">many</strong> collaborations
            like this are already doing great work, we believe that finding
            better ways to support how they are structured and organised them
            could unlock more effective, system-level change.
          </p>
        </div>
      </motion.div>

      {/* State 4: Second paragraph appears */}
      <motion.div
        style={{ opacity: state4Opacity }}
        className={styles.textContainer}
      >
        <div className={styles.leftText}> </div>
        <div className={'font-galosText ' + styles.rightText}>
          <p className="font-galosText mt-10">
            The <strong className="text-blue-600">Many-to-Many System</strong>{' '}
            is focussed on unlocking the governance, organising, legal, and
            learning structures of complex collaborations to enable many
            resources – not just money, but also knowledge and relationships –
            to flow more freely, and to foster{' '}
            <strong className="text-blue-600">many</strong> ways of working that
            embrace diverse value exchange.
          </p>
        </div>
      </motion.div>

      {/* State 5: Final paragraph appears */}
      <motion.div
        style={{ opacity: state5Opacity }}
        className={styles.textContainer}
      >
        <div className={styles.leftText}>
          <p>
            The Many-to-Many System explored how these codes shape collaboration
            and governance, aiming to understand if they could be reimagined and
            how those within complex collaborators themselves can embed them
            into their collaboration’s infrastructures.
          </p>
        </div>
        <div className={'font-galosText ' + styles.rightText}>
          <p>
            More intentional and visible shifting of deep codes for governance
            and organising could help collaborations to better align with their
            systemic missions and offer approaches for rethinking core concepts
            like value, power, risk, and ownership.
          </p>
        </div>
      </motion.div>
    </>
  );
}
