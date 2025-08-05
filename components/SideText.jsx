'use client';

import { motion, useTransform } from 'framer-motion';
import HoverInfo from './HoverInfo';
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
        <div className={'font-galosText ' + styles.leftText}>
          <p>
            Stepping into today's complex, interconnected problems requires what
            we term "complex collaborations"
            <HoverInfo>
              We focused on complex challenges that inherently require diverse
              actors and perspectives. This focus highlighted the need for a
              clear, concise way to describe such endeavour. While no
              terminology felt perfect, we adopted "complex collaboration." You
              might use other terminology such as collaboration ecosystems,
              cross sector alliances, systemic partnerships, etc.
            </HoverInfo>{' '}
            and will ultimately need to bring together many diverse groups
            (public, private, civic) with <strong>many</strong> new
            perspectives, including future generations and the natural world.
          </p>
          <p className="font-galosText mt-10">
            While <strong>many</strong> collaborations like this are already
            doing great work, we think that finding better ways to support how
            they are structured and organised them could unlock more effective,
            system-level change.
          </p>
        </div>
        <div className={'font-galosText ' + styles.rightText}>
          <p>
            The <strong>Many-to-Many System</strong> is focussed on unlocking
            the governance, organising, legal, and learning structures of
            complex collaborations to enable many resources – not just money,
            but also knowledge and relationships – to flow more freely, and to
            foster <strong>many</strong> ways of working that embrace diverse
            value exchange.
          </p>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: text2Opacity }}
        className={'font-galosText ' + styles.textContainer}
      >
        <div className={styles.leftText}>
          <p>
            The Many-to-Many System explored how these codes shape collaboration
            and governance, aiming to understand if they could be reimagined and
            how those within complex collaborators themselves can embed them
            into their collaboration’s infrastructures.
          </p>
        </div>
        <div className={'pl-10 ' + styles.rightText}>
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
