'use client';

import { useEffect, useState } from 'react';
import { motion, useTransform, useSpring } from 'framer-motion';
import HoverInfo from './HoverInfo';
import styles from './SideText.module.css';

export default function SideText({ scrollYProgress }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 640px)');
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  // Helper to pick ranges based on viewport (mobile should not overlap)
  const ranges = isMobile
    ? {
        // Mobile: longer visible windows and gentler fade windows
        state2: [0.15, 0.24, 0.32, 0.35],
        state3: [0.35, 0.44, 0.52, 0.55],
        state4: [0.56, 0.66, 0.74, 0.78],
        state5: [0.85, 0.94],
      }
    : {
        // Original wider overlaps for desktop layout
        state2: [0.15, 0.25, 0.6, 0.7],
        state3: [0.25, 0.35, 0.6, 0.7],
        state4: [0.35, 0.45, 0.6, 0.7],
        state5: [0.85, 0.9],
      };
  // State 1: Hollow circle only (no text)
  const state1Opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // State 2: First paragraph with highlighted "many" words
  const state2Opacity = useTransform(
    scrollYProgress,
    ranges.state2,
    [0, 1, 1, 0],
  );

  // State 3: Second paragraph appears, first fades out
  const state3Opacity = useTransform(
    scrollYProgress,
    ranges.state3,
    [0, 1, 1, 0],
  );

  // State 4: Final paragraph appears, previous fades out
  const state4Opacity = useTransform(
    scrollYProgress,
    ranges.state4,
    [0, 1, 1, 0],
  );

  // State 5: Final paragraph appears, previous fades out
  const state5Opacity = useTransform(scrollYProgress, ranges.state5, [0, 1]);

  // Add eased spring smoothing so fades feel slower and more natural
  const springConfig = { stiffness: 45, damping: 22, mass: 1.1 };
  const s2 = useSpring(state2Opacity, springConfig);
  const s3 = useSpring(state3Opacity, springConfig);
  const s4 = useSpring(state4Opacity, springConfig);
  const s5 = useSpring(state5Opacity, springConfig);

  return (
    <>
      {/* State 1: Hollow circle only */}

      {/* State 2: First paragraph with highlighted "many" words */}
      <motion.div
        style={{ opacity: isMobile ? s2 : state2Opacity }}
        className={styles.textContainer + ' z-[999]'}
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
            - bringing together <strong className="text-blue-600">many</strong>{' '}
            diverse groups (public, private, civic) with{' '}
            <strong className="text-blue-600">many</strong> new perspectives,
            including future generations and the natural world.
          </p>
        </div>
        <div className={'font-galosText ' + styles.rightText}>
          {/* Empty for this state - third paragraph not visible */}
        </div>
      </motion.div>

      {/* State 3: Second paragraph appears */}
      <motion.div
        style={{ opacity: isMobile ? s3 : state3Opacity }}
        className={styles.textContainer}
      >
        <div className={styles.leftText}>
          <p className="font-galosText mt-96">
            While <strong className="text-blue-600">many</strong> collaborations
            are already doing great work, we believe that finding better ways to
            support how they are structured and organised them could unlock more
            effective, system-level change.
          </p>
        </div>
      </motion.div>

      {/* State 4: Second paragraph appears */}
      <motion.div
        style={{ opacity: isMobile ? s4 : state4Opacity }}
        className={styles.textContainer}
      >
        <div className={styles.leftText + ' z-10'}> </div>
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
        style={{ opacity: isMobile ? s5 : state5Opacity }}
        className={styles.textContainer}
      >
        <div className={styles.leftText + ' font-galosText z-10'}>
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
