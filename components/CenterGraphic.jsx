'use client';

import { motion, useTransform } from 'framer-motion';
import { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import { interpolate } from 'flubber';
import styles from './CentralGraphic.module.css';

// ---------- geometry ----------
const SIZE = 180; // overall size of each shape (bigger -> larger circles)
const HALF = SIZE / 2;
const SHIFT = HALF; // translate paths to be centered

// base paths in a SIZE x SIZE box
// Rounded triangle corners to match design intent
const TRIANGLE = `
  M${HALF - SIZE * 0.04} ${SIZE * 0.18}
  Q${HALF} ${SIZE * 0.05} ${HALF + SIZE * 0.04} ${SIZE * 0.18}
  L${SIZE * 0.86} ${SIZE * 0.84}
  Q${SIZE * 0.9} ${SIZE * 0.9} ${SIZE * 0.82} ${SIZE * 0.9}
  L${SIZE * 0.18} ${SIZE * 0.9}
  Q${SIZE * 0.1} ${SIZE * 0.9} ${SIZE * 0.14} ${SIZE * 0.84}
  Z
`;
const ROUNDED_SQUARE = `
  M${SIZE * 0.25} ${SIZE * 0.15}
  H${SIZE * 0.75} Q${SIZE * 0.9} ${SIZE * 0.15} ${SIZE * 0.9} ${SIZE * 0.3}
  V${SIZE * 0.75} Q${SIZE * 0.9} ${SIZE * 0.9} ${SIZE * 0.75} ${SIZE * 0.9}
  H${SIZE * 0.25} Q${SIZE * 0.1} ${SIZE * 0.9} ${SIZE * 0.1} ${SIZE * 0.75}
  V${SIZE * 0.3} Q${SIZE * 0.1} ${SIZE * 0.15} ${SIZE * 0.25} ${SIZE * 0.15} Z
`;
const CIRCLE = `M${HALF} ${SIZE * 0.02} A${HALF * 0.8} ${HALF * 0.8} 0 1 1 ${HALF - 0.001} ${SIZE * 0.02} Z`;
const END_CIRCLE = CIRCLE;

// colours
const ORANGE = '#FA691A';
const ORANGE_SOFT = '#E79568';
const BLUE = '#005FFF';

// ring icons
const icons = [
  { name: 'UNFURLING', img: '/unfurl.png' },
  { name: 'BALANCED POWER', img: '/balance.png' },
  { name: 'HOLISTIC VIEW', img: '/holistic.png' },
  { name: 'MINDFUL ENDINGS', img: '/mindful.png' },
  { name: 'MISSION LED', img: '/mission.png' },
  { name: 'RISK OWNERSHIP', img: '/risk_own.png' },
  { name: 'RISK MITIGATION', img: '/risk_mitigate.png' },
  { name: 'PROPORTIONATE', img: '/proportion.png' },
];

export default function CentralGraphic({ scrollYProgress }) {
  // Detect mobile screen size
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 800);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initial hollow circle visibility (State 1)
  const hollowCircleOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.9],
    [1, 1, 0],
  );

  // Shapes appear (State 2)
  const shapesOpacity = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);

  // blur timeline (for later stages) - only after icons have fully appeared
  // const filter = useTransform(
  //   useTransform(scrollYProgress, [0.95, 1], [0, 20]),
  //   (v) => `blur(${v}px)`,
  // );

  // text inside starting shapes
  const stageTextOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.6, 0.7],
    [0, 1, 1, 0],
  );

  const stageTextOpacity2 = useTransform(
    scrollYProgress,
    [0.25, 0.35, 0.6, 0.7],
    [0, 1, 1, 0],
  );

  const stageTextOpacity3 = useTransform(
    scrollYProgress,
    [0.35, 0.45, 0.6, 0.7],
    [0, 1, 1, 0],
  );

  // morph window + reveals
  const morphProgress = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const vennOpacity = useTransform(morphProgress, [0.3, 1], [0, 1]);
  const iconsOpacity = useTransform(scrollYProgress, [0.9, 1.0], [0, 1]);
  const iconsScale = useTransform(scrollYProgress, [0.9, 1.0], [0.5, 1]);

  const backgroundCircleOpacity = useTransform(
    morphProgress,
    [0, 0.6],
    [1, 0], // Fade out as shapes morph into circles
  );

  // final CTA overlay opacity
  const finalTextOpacity = useTransform(scrollYProgress, [0.93, 1], [0, 1]);

  // flubber interpolators
  const triToCircle = useMemo(
    () => interpolate(TRIANGLE, END_CIRCLE, { maxSegmentLength: 2 }),
    [],
  );
  const sqToCircle = useMemo(
    () => interpolate(ROUNDED_SQUARE, END_CIRCLE, { maxSegmentLength: 2 }),
    [],
  );
  const ciToCircle = useMemo(
    () => interpolate(CIRCLE, END_CIRCLE, { maxSegmentLength: 2 }),
    [],
  );

  const dTriangle = useTransform(morphProgress, (t) => triToCircle(t));
  const dSquare = useTransform(morphProgress, (t) => sqToCircle(t));
  const dCircle = useTransform(morphProgress, (t) => ciToCircle(t));

  // colour morph → all blue at end
  const triFill = useTransform(
    morphProgress,
    [0, 0.6, 1],
    [ORANGE, BLUE, BLUE],
  );
  const sqFill = useTransform(morphProgress, [0, 0.6, 1], [BLUE, BLUE, BLUE]);
  const ciFill = useTransform(
    morphProgress,
    [0, 0.6, 1],
    [ORANGE_SOFT, BLUE, BLUE],
  );

  // layout numbers
  const CANVAS = 420;

  // START (centered positions for proper overlap)
  // Mobile-specific adjustments: move shapes up more to center them in the background circle
  const triStart = { 
    x: -40, 
    y: isMobile ? -130 : -90 // triangle upper center (moved up more on mobile)
  };
  const sqStart = { 
    x: -20, 
    y: isMobile ? -20 : 20 // square bottom-left (moved up more on mobile)
  };
  const ciStart = { 
    x: 80, 
    y: isMobile ? -60 : -20 // circle right (moved up more on mobile)
  };

  // END (overlapped Venn) — bring circles closer for stronger overlap
  // Mobile-specific adjustments: move final circles up to center them in the background circle
  const topTarget = { 
    x: 0, 
    y: isMobile ? -HALF * 1.1 : -HALF * 0.8 // Top circle moved up more on mobile
  };
  const blTarget = { 
    x: -HALF * 0.7, 
    y: isMobile ? HALF * 0.2 : HALF * 0.5 // Bottom left moved up on mobile
  };
  const brTarget = { 
    x: HALF * 0.7, 
    y: isMobile ? HALF * 0.2 : HALF * 0.5 // Bottom right moved up on mobile
  };

  const lerp = (a, b) => useTransform(morphProgress, [0, 1], [a, b]);

  const triX = lerp(triStart.x, topTarget.x);
  const triY = lerp(triStart.y, topTarget.y);
  const sqX = lerp(sqStart.x, blTarget.x);
  const sqY = lerp(sqStart.y, blTarget.y);
  const ciX = lerp(ciStart.x, brTarget.x);
  const ciY = lerp(ciStart.y, brTarget.y);

  return (
    <motion.div
      className={'font-galosText mt-2 ' + styles.graphicContainer}
      style={{ position: 'relative', display: 'grid', placeItems: 'center' }}
    >
      {/* Initial hollow circle (State 1) */}
      <motion.div
        className={styles.hollowCircle}
        style={{
          opacity: hollowCircleOpacity,
          position: 'absolute',
          width: '377px',
          height: '377px',
          boxShadow: '0 0 20px 0 #005FFF',
          borderRadius: '50%',
          zIndex: 0,
          background: '#FFFFFF',
        }}
      />

      <div
        className={styles.backgroundCircle}
        style={{ opacity: backgroundCircleOpacity }}
      ></div>

      {/* MORPHING SHAPES - wrapped in motion.div for overall opacity control */}
      <motion.div style={{ opacity: shapesOpacity }}>
        <div
          style={{
            position: 'relative',
            width: CANVAS,
            height: CANVAS,
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox={`0 0 ${CANVAS} ${CANVAS}`}
            style={{ position: 'absolute', inset: 0 }}
          >
            <g transform={`translate(${CANVAS / 2},${CANVAS / 2})`}>
              {/* Draw order controls overlap: triangle -> circle -> square on top */}
              <motion.g style={{ x: triX, y: triY }}>
                <motion.path
                  d={dTriangle}
                  fill={triFill}
                  transform={`translate(${-SHIFT},${-SHIFT})`}
                  style={{ filter: 'drop-shadow(0 0 20px #FFF)' }}
                />
                <motion.foreignObject
                  x={-SHIFT}
                  y={-SHIFT}
                  width={SIZE}
                  height={SIZE}
                  style={{ pointerEvents: 'none' }}
                >
                  <motion.div
                    style={{
                      opacity: stageTextOpacity,
                      display: 'grid',
                      placeItems: 'center',
                      width: '100%',
                      height: '100%',
                      fontSize: 16,
                      textAlign: 'center',
                      color: 'white',
                      fontWeight: 700,
                      lineHeight: 1.1,
                    }}
                  >
                    Many
                    <br />
                    Actors
                  </motion.div>
                </motion.foreignObject>
              </motion.g>

              <motion.g style={{ x: ciX, y: ciY }}>
                <motion.path
                  d={dCircle}
                  fill={ciFill}
                  transform={`translate(${-SHIFT},${-SHIFT})`}
                  style={{ filter: 'drop-shadow(0 0 20px #FFF)' }}
                />
                <motion.foreignObject
                  x={-SHIFT + 5}
                  y={-SHIFT - 20}
                  width={SIZE}
                  height={SIZE}
                  style={{ pointerEvents: 'none' }}
                >
                  <motion.div
                    style={{
                      opacity: stageTextOpacity3,
                      display: 'grid',
                      placeItems: 'center',
                      width: '100%',
                      height: '100%',
                      fontSize: 16,
                      textAlign: 'center',
                      color: 'white',
                      fontWeight: 700,
                      lineHeight: 1.1,
                    }}
                  >
                    Many
                    <br />
                    Forms of
                    <br />
                    Value
                  </motion.div>
                </motion.foreignObject>
              </motion.g>

              <motion.g style={{ x: sqX, y: sqY }}>
                <motion.path
                  d={dSquare}
                  fill={sqFill}
                  transform={`translate(${-SHIFT},${-SHIFT})`}
                  style={{ filter: 'drop-shadow(0 0 20px #FFF)' }}
                />
                <motion.foreignObject
                  x={-SHIFT}
                  y={-SHIFT}
                  width={SIZE}
                  height={SIZE}
                  style={{ pointerEvents: 'none' }}
                >
                  <motion.div
                    style={{
                      opacity: stageTextOpacity2,
                      display: 'grid',
                      placeItems: 'center',
                      width: '100%',
                      height: '100%',
                      fontSize: 16,
                      textAlign: 'center',
                      color: 'white',
                      fontWeight: 700,
                      lineHeight: 1.1,
                    }}
                  >
                    Many
                    <br />
                    Ways of
                    <br />
                    Relating
                  </motion.div>
                </motion.foreignObject>
              </motion.g>
            </g>
          </svg>
        </div>
      </motion.div>

      {/* FINAL BLUE/WHITE RADIAL BACKGROUND (behind circles and icon ring) */}
      <motion.div
        style={{
          opacity: iconsOpacity,
          position: 'absolute',
          width: CANVAS + 200,
          height: CANVAS + 200,
          borderRadius: '50%',
          zIndex: -1,
          background:
            'radial-gradient(circle, #FFFFFF 0%, #fff 40%, rgba(255,255,255,0.18) 65%, rgba(0,95,255,0) 100%)',
          boxShadow:
            '0 0 60px 10px rgba(255,255,255,1) inset, 0 0 60px 0 rgba(255,255,255,1)',
        }}
      />

      {/* VENN LABELS — blurred, below final text */}
      <motion.div
        style={{
          width: CANVAS,
          height: CANVAS,
          position: 'absolute',
          display: 'grid',
          placeItems: 'center',
          zIndex: 1, // <— keep the Venn below the final text
        }}
      >
        <motion.div
          style={{
            opacity: vennOpacity,
            position: 'absolute',
            top: CANVAS / 2 - (isMobile ? HALF * 1.1 : HALF * 0.8),
            left: CANVAS / 2,
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            fontWeight: 600,
          }}
          className={styles.vennCircle + ' pt-30 sm:pt-0'}
        >
          Many Forms
          <br /> of Value
        </motion.div>

        <motion.div
          style={{
            opacity: vennOpacity,
            position: 'absolute',
            top: CANVAS / 2 + (isMobile ? HALF * 0.2 : HALF * 0.5),
            left: CANVAS / 2 - HALF * 0.7,
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            fontWeight: 600,
          }}
          className={styles.vennCircle + ' pt-30 sm:pt-0'}
        >
          Evolution
          <br />
          Through
          <br />
          Learning
        </motion.div>

        <motion.div
          style={{
            opacity: vennOpacity,
            position: 'absolute',
            top: CANVAS / 2 + (isMobile ? HALF * 0.2 : HALF * 0.5),
            left: CANVAS / 2 + HALF * 0.7,
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            fontWeight: 600,
          }}
          className={styles.vennCircle + ' pt-30 sm:pt-0'}
        >
          Balancing
          <br />
          Risks
          <br />
          and Harms
        </motion.div>
      </motion.div>

      {/* ICON RING */}
      <div
        className={styles.iconRing}
        style={{
          position: 'absolute',
          width: CANVAS + 120,
          height: CANVAS + 120,
          display: 'grid',
          placeItems: 'center',
          zIndex: 0,
        }}
      >
        {icons.map((icon, index) => {
          const angle = (index / icons.length) * 2 * Math.PI - Math.PI / 2;
          const radius = CANVAS * 0.583; // scale with canvas (≈245 when CANVAS=420)
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          return (
            <motion.div
              key={icon.name}
              className={styles.iconWrapper}
              style={{
                opacity: iconsOpacity,
                scale: iconsScale,
                x,
                y,
                position: 'absolute',
              }}
            >
              <Image 
                width={50} 
                height={50} 
                src={icon.img} 
                alt={icon.name}
                loading="lazy"
                quality={85}
              />
              <span>{icon.name}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
