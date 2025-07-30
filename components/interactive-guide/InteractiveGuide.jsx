'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GuideOverview from './GuideOverview';
import GuideDetailView from './GuideDetailView';
import styles from './InteractiveGuide.module.css';

// Mock data for the guide sections
const guideData = [
  {
    id: 'complex-collaborations',
    title: 'Complex Collaborations',
    subtitle: 'About & Info',
    breadcrumb: 'The System Guide / Complex Collaborations',
  },
  {
    id: 'deep-code-shift',
    title: 'Deep Code Shift',
    subtitle: 'Fundamental Choices 1',
    breadcrumb: 'The System Guide / Deep Code Shift',
  },
  {
    id: 'mission-wide-narrow',
    title: 'Mission Wide & Narrow',
    subtitle: 'Fundamental Choices 2',
    breadcrumb: 'The System Guide / Mission Wide & Narrow',
  },
  {
    id: 'stewardship-process',
    title: 'Stewardship Process',
    subtitle: 'Take action',
    breadcrumb: 'The System Guide / Stewardship Process',
  },
  {
    id: 'infrastructuring-model',
    title: 'Infrastructuring Model',
    subtitle: 'Add here description',
    breadcrumb: 'The System Guide / Infrastructuring Model',
  },
];

const animationVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function InteractiveGuide() {
  const [activeIndex, setActiveIndex] = useState(null); // null means overview is shown

  const handleSelect = (index) => setActiveIndex(index);
  const handleClose = () => setActiveIndex(null);
  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % guideData.length);
  const handlePrevious = () =>
    setActiveIndex((prev) => (prev - 1 + guideData.length) % guideData.length);

  return (
    <div className={`${styles.container} grid-background`}>
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
            <GuideOverview data={guideData} onSelect={handleSelect} />
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
              item={guideData[activeIndex]}
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
