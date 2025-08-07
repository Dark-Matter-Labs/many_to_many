'use client';

import { motion, useTransform, MotionValue } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CentralGraphic.module.css';

const icons = [
  { name: 'UNFURLING', img: '/unfurl.png' },
  { name: 'BALANCED POWER', img: '/balance.png' },
  { name: 'HOLISTIC VIEW', img: '/holistic.png' },
  { name: 'MINDFUL ENDINGS', img: '/mindful.png' },
  { name: 'MISSION LED', img: '/mission.png' },
  { name: 'RISK OWNERSHIP', img: '/risk_own.png' },
  { name: 'RISK MITIGATION', img: '/risk_mitigate.png' },
  { name: 'PROPORTIONATE', img: '/proportion.png' },
];

export default function CentralGraphic({ scrollYProgress }) {
  // --- CHANGE: Updated blur animation to re-blur at the end ---
  // Unblur (0.1->0.3), stay clear (0.3->0.9), re-blur (0.9->1.0)
  const blurValue = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.9, 1.0],
    [20, 0, 0, 20],
  );
  const filter = useTransform(blurValue, (v) => `blur(${v}px)`);

  // Opacity for the text inside the initial shapes
  const stage2TextOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.4, 0.55, 0.6],
    [0, 1, 1, 0],
  );

  // The "Morph" Transition (cross-fade)
  const morphProgress = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const originalShapesOpacity = useTransform(morphProgress, [0, 0.5], [1, 0]);
  const vennOpacity = useTransform(morphProgress, [0.3, 1], [0, 1]);

  // Icons appear before the final re-blur
  const iconsOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
  const iconsScale = useTransform(scrollYProgress, [0.8, 0.9], [0.5, 1]);

  // --- NEW: Opacity for the final text overlay ---
  const finalTextOpacity = useTransform(scrollYProgress, [0.95, 1.0], [0, 1]);

  return (
    <motion.div className={'font-galosText ' + styles.graphicContainer}>
      {/* ----- STAGE 2: Initial Shapes (Now only fade out) ----- */}
      <motion.div
        className={`${styles.shape} ${styles.triangle}`}
        style={{ opacity: originalShapesOpacity }}
      >
        <motion.div
          className={styles.shapeText}
          style={{ opacity: stage2TextOpacity }}
        >
          many
          <br />
          actors
        </motion.div>
      </motion.div>

      <motion.div
        className={`${styles.shape} ${styles.square}`}
        style={{ opacity: originalShapesOpacity }}
      >
        <motion.div style={{ opacity: stage2TextOpacity }}>
          many
          <br />
          ways of
          <br />
          relating
        </motion.div>
      </motion.div>

      <motion.div
        className={`${styles.shape} ${styles.circle}`}
        style={{ opacity: originalShapesOpacity }}
      >
        <motion.div style={{ opacity: stage2TextOpacity }}>
          many
          <br />
          forms of
          <br />
          value
        </motion.div>
      </motion.div>

      {/* ----- STAGE 3: Venn Diagram & Final Blur ----- */}
      {/* This container will hold the elements that get blurred at the end */}
      <motion.div
        style={{
          filter,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <motion.div
          className={`${styles.vennCircle} ${styles.vennTop}`}
          style={{ opacity: vennOpacity }}
        >
          mission
          <br />
          space
        </motion.div>
        <motion.div
          className={`${styles.vennCircle} ${styles.vennBottomLeft}`}
          style={{ opacity: vennOpacity }}
        >
          evolve
          <br />
          through
          <br />
          learning
        </motion.div>
        <motion.div
          className={`${styles.vennCircle} ${styles.vennBottomRight}`}
          style={{ opacity: vennOpacity }}
        >
          many forms
          <br />
          of value
          <br />
          and
          <br />
          relationality
        </motion.div>
      </motion.div>

      {/* ----- Icons (remain outside the blur) ----- */}
      <div className={styles.iconRing}>
        {icons.map((icon, index) => {
          const angle = (index / icons.length) * 2 * Math.PI - Math.PI / 2;
          const radius = 245;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          return (
            <motion.div
              key={icon.name}
              className={styles.iconWrapper}
              style={{
                opacity: iconsOpacity,
                scale: iconsScale,
                x,
                y,
              }}
            >
              <Image width={50} height={50} src={icon.img} alt={icon.name} />
              <span>{icon.name}</span>
            </motion.div>
          );
        })}
      </div>

      {/* ----- NEW: Final text overlay ----- */}
      <motion.div
        className={styles.blurOverlayText}
        style={{ opacity: finalTextOpacity }}
      >
        <Link
          href="/overview/system-guide?layer=deep-code-shift"
          className={styles.deepCodeLink}
        >
          find out more about deep codes →
        </Link>
      </motion.div>
    </motion.div>
  );
}
