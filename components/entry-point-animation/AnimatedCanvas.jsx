'use client';
import { motion, useTransform, MotionValue } from 'framer-motion';
import styles from './AnimatedCanvas.module.css';
import Node from './Node';
import Diamond from './Diamond';
import AnimatedLine from './AnimatedLine';

// Helper to normalize scroll sections
const useSectionScroll = (scrollYProgress, start, end) => {
  return useTransform(scrollYProgress, [start, end], [0, 1]);
};

export default function AnimatedCanvas({ scrollYProgress }) {
  // === DEFINE ANIMATION STAGES ===
  const s0_s1 = useSectionScroll(scrollYProgress, 0, 0.1); // Big dot appears
  const s1_s2 = useSectionScroll(scrollYProgress, 0.12, 0.22); // Node 2 appears
  const s2_s3 = useSectionScroll(scrollYProgress, 0.24, 0.34); // Node 3 appears
  const s3_s4 = useSectionScroll(scrollYProgress, 0.38, 0.5); // Morph to "Learn"
  const s4_s5 = useSectionScroll(scrollYProgress, 0.55, 0.68); // Morph to "Community"
  const s5_s6 = useSectionScroll(scrollYProgress, 0.72, 0.9); // Morph to "Journey"

  // === STAGE 1: SYSTEM GUIDE NODE ===
  const node1_Opacity = s0_s1;
  const node1_Scale = useTransform(s0_s1, [0, 1], [2, 1]);
  const node1_Blur = useTransform(s0_s1, [0, 0.8], [20, 0]);
  const node1_X = useTransform(s0_s1, [0, 1], ['0%', '-150%']);
  const node1_Y = useTransform(s0_s1, [0, 1], ['0%', '-120%']);
  const node1_Color = useTransform(s3_s4, [0, 0.5], ['#0052ff', '#cccccc']);

  // === STAGE 2 & 3: OTHER NODES ===
  const node2_Opacity = s1_s2;
  const node2_Color = useTransform(s3_s4, [0, 0.5], ['#0052ff', '#cccccc']);
  const node3_Opacity = s2_s3;
  const node3_Color = useTransform(s3_s4, [0, 0.5], ['#0052ff', '#cccccc']);

  const line1_Progress = useTransform(s1_s2, [0.2, 1], [0, 1]);
  const line2_Progress = useTransform(s2_s3, [0.2, 1], [0, 1]);

  // === STAGE 4: LEARN BY YOURSELF ===
  const learnNode_Opacity = useTransform(s3_s4, [0.4, 1], [0, 1]);
  const learnNode_Scale = useTransform(s4_s5, [0, 0.5], [1.5, 1]);
  const learnNode_Color = useTransform(s4_s5, [0, 0.5], ['#0052ff', '#cccccc']);

  // === STAGE 5: COMMUNITY WEB ===
  const stage5_Opacity = useTransform(s4_s5, [0.6, 1], [0, 1]);
  const diamond_Color = useTransform(s5_s6, [0, 1], ['#0052ff', '#a7c7ff']);

  // === STAGE 6: JOURNEY ===
  const journeyNode_Opacity = useTransform(s5_s6, [0.7, 1], [0, 1]);
  const scribble_Progress = useTransform(s5_s6, [0.3, 1], [0, 1]);

  return (
    <div className={styles.canvasWrapper}>
      {/* === NODES === */}
      <motion.div
        style={{ filter: useTransform(node1_Blur, (v) => `blur(${v}px)`) }}
      >
        <Node
          x={node1_X}
          y={node1_Y}
          scale={node1_Scale}
          opacity={node1_Opacity}
          dotColor={node1_Color}
          title="System Guide"
          description="A guided explanation..."
        />
        <Node
          x="100%"
          y="-50%"
          opacity={node2_Opacity}
          dotColor={node2_Color}
          title="Legal Tools by Topic"
          description="For specific needs..."
        />
        <Node
          x="-180%"
          y="80%"
          opacity={node3_Opacity}
          dotColor={node3_Color}
          title="Problems that Many-to-Many can solve"
          description="Problems are not alike..."
        />
        <Node
          x="0%"
          y="0%"
          opacity={learnNode_Opacity}
          dotColor={learnNode_Color}
          scale={learnNode_Scale}
          title="Learn by Yourself"
          description="For those willing to further search..."
        />
      </motion.div>

      {/* STAGE 5 DIAMONDS */}
      <motion.div style={{ opacity: stage5_Opacity }}>
        <Diamond x="-150%" y="-150%" color={diamond_Color} />
        <Diamond x="150%" y="-150%" color={diamond_Color} />
        <Diamond x="-150%" y="150%" color={diamond_Color} />
        <Diamond x="150%" y="150%" color={diamond_Color} />
      </motion.div>

      {/* FINAL NODES: Community & Journey Text */}
      <Node
        x="0%"
        y="150%"
        opacity={useTransform(s4_s5, [0.8, 1], [0, 1])}
        title="Community"
        description="A community of people sharing their experience..."
        textColor="#333"
      />
      <Node
        x="80%"
        y="250%"
        opacity={journeyNode_Opacity}
        title="Journey"
        description="The Journey behind took more than 4 years..."
        textColor="#333"
      />

      {/* === SVG LINES === */}
      {/* <svg className={styles.svgOverlay} viewBox="-250 -250 500 500">
        <AnimatedLine d="M -150 -120 Q -25 -85 100 -50" progress={line1_Progress} />
        <AnimatedLine d="M 100 -50 Q -40 15 -180 80" progress={line2_Progress} />


        <g style={{ opacity: stage5_Opacity }}>
          <AnimatedLine d="M -150 -150 L 150 150" progress={s4_s5} strokeDasharray="5 5" />
          <AnimatedLine d="M 150 -150 L -150 150" progress={s4_s5} strokeDasharray="5 5" />
        </g>
        
     
        <AnimatedLine 
            d="M -150 -150 C -50 -200, 50 -200, 150 -150 C 200 -50, 250 50, 180 0 C 100 100, 50 150, 0 0 C -50 -100, -150 -50, -180 0 C -250 50, -200 150, -120 150 C -50 100, 50 100, 0 0" 
            progress={scribble_Progress} 
            stroke="#f97316"
        />
      </svg> */}
    </div>
  );
}
