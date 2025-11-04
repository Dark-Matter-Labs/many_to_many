'use client';

import { useRef, useState, useEffect } from 'react';
import { useScroll, motion, useTransform, useMotionValueEvent } from 'framer-motion';
import CentralGraphic from './CenterGraphic';
import AnimatedTitle from './AnimatedTitle';
import SideText from './SideText';
import styles from './M2MAnimation.module.css';

export default function M2MAnimation() {
  const containerRef = useRef(null);
  const [currentStage, setCurrentStage] = useState(0);
  const [isSkipped, setIsSkipped] = useState(false);
  const [skipDisabled, setSkipDisabled] = useState(false);
  const isProgrammaticScrollRef = useRef(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Animate from the moment the top of container hits top of viewport,
    // to the moment the bottom of the container hits the bottom of the viewport.
    offset: ['start start', 'end end'],
  });

  // Define animation stages
  const stages = [
    { name: 'Hollow Circle', progress: 0.0 },
    { name: 'Shapes Appear', progress: 0.15 },
    { name: 'Second Paragraph', progress: 0.2 },
    { name: 'Third Paragraph', progress: 0.25 },
    { name: 'Morphing', progress: 0.65 },
    { name: 'Icons', progress: 0.95 },
    { name: 'Complete', progress: 1.0 },
  ];

  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Check if animation is in view
  const isAnimationInView = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0],
  );

  // Update current stage based on scroll progress
  const updateCurrentStage = (progress) => {
    for (let i = stages.length - 1; i >= 0; i--) {
      if (progress >= stages[i].progress) {
        setCurrentStage(i);
        break;
      }
    }
  };

  // Skip to specific stage
  const skipToStage = (stageIndex) => {
    const targetProgress = stages[stageIndex].progress;

    // Get the container element
    const container = containerRef.current;
    if (!container) {
      return;
    }

    // Calculate the total scroll height
    const containerHeight = container.offsetHeight;
    const viewportHeight = window.innerHeight;
    const totalScrollHeight = containerHeight - viewportHeight;

    // Calculate target scroll position
    const targetScroll = targetProgress * totalScrollHeight;

    // Get the container's position relative to the viewport
    const containerRectTop = container.getBoundingClientRect().top + window.pageYOffset;
    const finalScrollPosition = Math.max(0, containerRectTop + targetScroll);

    // Prevent double scroll triggers while we perform a programmatic smooth scroll
    if (isProgrammaticScrollRef.current) return;
    isProgrammaticScrollRef.current = true;
    // Dynamically estimate smooth scroll duration based on distance
    const currentY = window.scrollY || window.pageYOffset;
    const distance = Math.abs(finalScrollPosition - currentY);
    // Approx px/ms; tuned for cross-browser smoothness
    const pxPerMs = 1.2; // ~1200px/sec
    const estimatedMs = Math.round(distance / pxPerMs + 150);
    const guardMs = Math.min(1200, Math.max(300, estimatedMs));

    setSkipDisabled(true);
    window.scrollTo({ top: finalScrollPosition, behavior: 'smooth' });
    window.setTimeout(() => {
      isProgrammaticScrollRef.current = false;
      setSkipDisabled(false);
    }, guardMs);
    setIsSkipped(true);
  };

  // Update stage on scroll progress change
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    // Ignore stage updates that are immediate side-effects of programmatic smooth scrolls
    if (isProgrammaticScrollRef.current) return;
    updateCurrentStage(v);
  });

  return (
    <div ref={containerRef} className={styles.scrollContainer}>
      <div className={'grid-bg ' + styles.stickyContainer}>
        <div className={styles.circleBackground}></div> {/* The circle */}
        <AnimatedTitle scrollYProgress={scrollYProgress} />
        <main className={styles.mainContent}>
          <SideText scrollYProgress={scrollYProgress} />
          <CentralGraphic scrollYProgress={scrollYProgress} />
        </main>
      </div>

      {/* Animation Controls */}
      <motion.div
        className={styles.animationControls}
        style={{ opacity: isAnimationInView }}
      >
        <div className={styles.stageTracker}>
          <div className={styles.progressBar}>
            <motion.div
              className={styles.progressFill}
              style={{ width: progressWidth }}
            />
          </div>
        </div>

        <div className={styles.controlButtons}>
          <button
            onClick={() => skipToStage(stages.length - 1)}
            className={styles.skipButton + ' font-galosText'}
          >
            Skip Animation
          </button>
        </div>
      </motion.div>
    </div>
  );
}
