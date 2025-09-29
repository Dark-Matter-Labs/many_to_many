'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useMemo, useRef } from 'react';
import { Navbar } from '@/components/Navbar';
import GuideOverview from './GuideOverview';
import GuideDetailView from './GuideDetailView';
import styles from './InteractiveGuide.module.css';

const slugify = (text) =>
  (text || '')
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .trim();

export default function InteractiveGuide({ layers }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const activeLayerSlug = searchParams.get('layer');
  const foundIndex = activeLayerSlug
    ? layers.findIndex((l) => slugify(l.title) === activeLayerSlug)
    : -1;
  const activeIndex = foundIndex !== -1 ? foundIndex : null;

  // Track last index to animate direction on next/prev
  const prevIndexRef = useRef(activeIndex);
  // direction: 1 = next/forward, -1 = previous/backward, 0 = overview <-> detail
  const direction = useMemo(() => {
    const prev = prevIndexRef.current;
    if (activeIndex == null || prev == null) return 0;
    if (prev == null && activeIndex != null) return 0;
    return Math.sign((activeIndex ?? 0) - (prev ?? 0)) || 1;
  }, [activeIndex]);

  useEffect(() => {
    prevIndexRef.current = activeIndex;
    window.scrollTo(0, 0);
  }, [activeIndex]);

  // Handlers
  const handleSelect = (index) =>
    router.push(`${pathname}?layer=${slugify(layers[index].title)}`);

  const handleClose = () => router.push(pathname);

  const handleNext = () => {
    if (activeIndex == null) return;
    const next = (activeIndex + 1) % layers.length;
    router.replace(`${pathname}?layer=${slugify(layers[next].title)}`);
  };

  const handlePrevious = () => {
    if (activeIndex == null) return;
    const prev = (activeIndex - 1 + layers.length) % layers.length;
    router.replace(`${pathname}?layer=${slugify(layers[prev].title)}`);
  };

  const handleNavClick = (index) =>
    router.replace(`${pathname}?layer=${slugify(layers[index].title)}`);

  // Variants: overview <-> detail uses a gentle scale; detail <-> detail uses directional slide
  const overviewVariants = {
    initial: { opacity: 0, scale: 0.98, y: 8 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      y: -8,
      transition: { duration: 0.25, ease: 'easeInOut' },
    },
  };

  const detailVariants = {
    initial: (dir) => ({ x: dir > 0 ? 40 : dir < 0 ? -40 : 0, opacity: 0 }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (dir) => ({
      x: dir > 0 ? -40 : dir < 0 ? 40 : 0,
      opacity: 0,
      transition: { duration: 0.25, ease: 'easeInOut' },
    }),
  };

  return (
    <div
      className={`${styles.container} font-galosText grid-bg shadow-border p-2`}
    >
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        {activeIndex === null ? (
          <motion.div
            key="overview"
            variants={overviewVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Navbar activePage="Discover the System" transparent />
            <GuideOverview data={layers} onSelect={handleSelect} />
          </motion.div>
        ) : (
          <motion.div
            key={activeIndex} // re-animate on index change
            variants={detailVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={direction} // pass direction for next/prev slide
          >
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
