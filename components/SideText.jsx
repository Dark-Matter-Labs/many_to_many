'use client';

import { motion, useTransform } from 'framer-motion';
import HoverInfo from './HoverInfo';
import styles from './SideText.module.css';

export default function SideText({ scrollYProgress }) {
  // State 1: Hollow circle only (no text)
  const state1Opacity = useTransform(
    scrollYProgress,
    [0, 0.15],
    [1, 0],
  );

  // State 2: First paragraph with highlighted "many" words
  const state2Opacity = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.55, 0.65],
    [0, 1, 1, 0],
  );

  // State 3: Second paragraph appears, first fades out
  const state3Opacity = useTransform(
    scrollYProgress,
    [0.65, 0.75, 0.85, 0.95],
    [0, 1, 1, 0],
  );

  // State 4: Final paragraph appears, previous fades out
  const state4Opacity = useTransform(
    scrollYProgress,
    [0.95, 1],
    [0, 1],
  );

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
            Solving today's complex, interconnected problems requires what
            we term "complex collaborations"
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
          <p>
            The <strong>Many-to-Many System</strong> is focussed on unlocking
            the governance, organising, legal, and learning structures of
            complex collaborations to enable <strong className="text-blue-600">many</strong> resources - not just money,
            but also knowledge and relationships - to flow more freely, and to
            foster <strong className="text-blue-600">many</strong> new ways of working that embrace diverse
            value exchange.
          </p>
        </div>
      </motion.div>

      {/* State 3: Second paragraph appears */}
      <motion.div
        style={{ opacity: state3Opacity }}
        className={styles.textContainer}
      >
        <div className={styles.leftText}>
          <p>
            Solving today's complex, interconnected problems requires what
            we term "complex collaborations"
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
          <p className="font-galosText mt-10">
            While <strong className="text-blue-600">many</strong> collaborations like this are already
            doing great work, we believe that finding better ways to support how
            they are structured and organised them could unlock more effective,
            system-level change.
          </p>
        </div>
        <div className={'font-galosText ' + styles.rightText}>
          <p>
            The <strong>Many-to-Many System</strong> is focussed on unlocking
            the governance, organising, legal, and learning structures of
            complex collaborations to enable <strong className="text-blue-600">many</strong> resources - not just money,
            but also knowledge and relationships - to flow more freely, and to
            foster <strong className="text-blue-600">many</strong> new ways of working that embrace diverse
            value exchange.
          </p>
        </div>
      </motion.div>

      {/* State 4: Final paragraph appears */}
      <motion.div
        style={{ opacity: state4Opacity }}
        className={styles.textContainer}
      >
        <div className={styles.leftText}>
          <p>
            Solving today's complex, interconnected problems requires what
            we term "complex collaborations"
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
          <p className="font-galosText mt-10">
            While <strong className="text-blue-600">many</strong> collaborations like this are already
            doing great work, we believe that finding better ways to support how
            they are structured and organised them could unlock more effective,
            system-level change.
          </p>
        </div>
        <div className={'font-galosText ' + styles.rightText}>
          <p>
            The <strong>Many-to-Many System</strong> is focussed on unlocking
            the governance, organising, legal, and learning structures of
            complex collaborations to enable <strong className="text-blue-600">many</strong> resources - not just money,
            but also knowledge and relationships - to flow more freely, and to
            foster <strong className="text-blue-600">many</strong> new ways of working that embrace diverse
            value exchange.
          </p>
        </div>
      </motion.div>
    </>
  );
}
