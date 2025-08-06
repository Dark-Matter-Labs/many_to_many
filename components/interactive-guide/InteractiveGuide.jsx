'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GuideOverview from './GuideOverview';
import GuideDetailView from './GuideDetailView';
import styles from './InteractiveGuide.module.css';

const animationVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function InteractiveGuide({ layers }) {
  const [activeIndex, setActiveIndex] = useState(null); // null means overview is shown

  const handleSelect = (index) => setActiveIndex(index);
  const handleClose = () => setActiveIndex(null);
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % layers.length);
  const handlePrevious = () =>
    setActiveIndex((prev) => (prev - 1 + layers.length) % layers.length);

  return (
    <div className={`${styles.container} font-galosText grid-bg`}>
      <AnimatePresence mode="wait">
        {activeIndex === null ? (
          <motion.div
            key="overview"
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <GuideOverview data={layers} onSelect={handleSelect} />
          </motion.div>
        ) : (
          <motion.div
            key={activeIndex}
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <GuideDetailView
              item={layers[activeIndex]}
              onClose={handleClose}
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
