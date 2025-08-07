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

  const activeLayerSlug = searchParams.get('layer');

  const foundIndex = activeLayerSlug
    ? layers.findIndex((layer) => slugify(layer.title) === activeLayerSlug)
    : -1;
  const activeIndex = foundIndex !== -1 ? foundIndex : null;

  // --- Handlers ---

  const handleSelect = (index) => {
    const selectedLayer = layers[index];
    router.push(`${pathname}?layer=${slugify(selectedLayer.title)}`);
  };

  const handleClose = () => {
    router.push(pathname);
  };

  const handleNext = () => {
    if (activeIndex === null) return;
    const nextIndex = (activeIndex + 1) % layers.length;
    const nextLayer = layers[nextIndex];
    router.replace(`${pathname}?layer=${slugify(nextLayer.title)}`);
  };

  const handlePrevious = () => {
    if (activeIndex === null) return;
    const prevIndex = (activeIndex - 1 + layers.length) % layers.length;
    const prevLayer = layers[prevIndex];
    router.replace(`${pathname}?layer=${slugify(prevLayer.title)}`);
  };

  // THE FIX: Create a new handler for the bottom navigation
  const handleNavClick = (index) => {
    const navLayer = layers[index];
    // Use 'replace' so the browser history doesn't get cluttered
    router.replace(`${pathname}?layer=${slugify(navLayer.title)}`);
  };

  return (
    <div className={`${styles.container} font-galosText grid-bg`}>
      <AnimatePresence mode="wait">
        {activeIndex === null ? (
          <motion.div
            key="overview"
            // ... (rest of the div is unchanged)
          >
            <GuideOverview data={layers} onSelect={handleSelect} />
          </motion.div>
        ) : (
          <motion.div
            key={activeIndex}
            // ... (rest of the div is unchanged)
          >
            {/* THE FIX: Pass down the new props to the detail view */}
            <GuideDetailView
              item={layers[activeIndex]}
              allLayers={layers}
              activeIndex={activeIndex}
              onClose={handleClose}
              onNext={handleNext}
              onPrevious={handlePrevious}
              onNavClick={handleNavClick}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
