'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import GuideOverview from './GuideOverview';
import GuideDetailView from './GuideDetailView';
import styles from './InteractiveGuide.module.css';

const slugify = (text) => {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars except hyphen
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .trim();
};

const animationVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function InteractiveGuide({ layers }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // THE FIX: Read the 'slug' from the URL instead of the full title
  const activeLayerSlug = searchParams.get('layer');

  // THE FIX: Find the index by comparing the URL slug to the slugified title of each layer
  const foundIndex = activeLayerSlug
    ? layers.findIndex((layer) => slugify(layer.title) === activeLayerSlug)
    : -1;
  const activeIndex = foundIndex !== -1 ? foundIndex : null;

  // --- Handlers now use the slugified title ---

  const handleSelect = (index) => {
    const selectedLayer = layers[index];
    // THE FIX: Use the slugified title in the URL
    router.push(`${pathname}?layer=${slugify(selectedLayer.title)}`);
  };

  const handleClose = () => {
    router.push(pathname);
  };

  const handleNext = () => {
    if (activeIndex === null) return;
    const nextIndex = (activeIndex + 1) % layers.length;
    const nextLayer = layers[nextIndex];
    // THE FIX: Use the slugified title in the URL
    router.replace(`${pathname}?layer=${slugify(nextLayer.title)}`);
  };

  const handlePrevious = () => {
    if (activeIndex === null) return;
    const prevIndex = (activeIndex - 1 + layers.length) % layers.length;
    const prevLayer = layers[prevIndex];
    // THE FIX: Use the slugified title in the URL
    router.replace(`${pathname}?layer=${slugify(prevLayer.title)}`);
  };

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
