'use client';

import { useRef, useState, useEffect } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import CentralGraphic from './CenterGraphic';
import AnimatedTitle from './AnimatedTitle';
import SideText from './SideText';
import styles from './M2MAnimation.module.css';

export default function M2MAnimation() {
  const containerRef = useRef(null);
  const [currentStage, setCurrentStage] = useState(0);
  const [isSkipped, setIsSkipped] = useState(false);

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
      console.log('Container not found');
      return;
    }

    // Calculate the total scroll height
    const containerHeight = container.offsetHeight;
    const viewportHeight = window.innerHeight;
    const totalScrollHeight = containerHeight - viewportHeight;

    // Calculate target scroll position
    const targetScroll = targetProgress * totalScrollHeight;

    // Get the container's position relative to the viewport
    const containerTop = container.offsetTop;
    const finalScrollPosition = containerTop + targetScroll;

    console.log('Skip to stage:', {
      stageIndex,
      stageName: stages[stageIndex]?.name,
      targetProgress,
      containerHeight,
      viewportHeight,
      totalScrollHeight,
      targetScroll,
      containerTop,
      finalScrollPosition,
    });

    window.scrollTo({
      top: finalScrollPosition,
      behavior: 'smooth',
    });
    setIsSkipped(true);
  };

  // Skip to next stage
  const skipToNext = () => {
    const nextStage = Math.min(currentStage + 1, stages.length - 1);
    console.log('Next button clicked:', {
      currentStage,
      nextStage,
      stageName: stages[nextStage]?.name,
    });
    skipToStage(nextStage);
  };

  // Skip to previous stage
  const skipToPrevious = () => {
    const prevStage = Math.max(currentStage - 1, 0);
    console.log('Previous button clicked:', {
      currentStage,
      prevStage,
      stageName: stages[prevStage]?.name,
    });
    skipToStage(prevStage);
  };

  // Update stage on scroll progress change
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', updateCurrentStage);
    return () => unsubscribe();
  }, [scrollYProgress]);

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
        initial={{ opacity: 0 }}
        animate={{ opacity: isAnimationInView.get() }}
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
