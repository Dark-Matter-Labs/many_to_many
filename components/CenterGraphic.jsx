'use client';

import { motion, useTransform } from 'framer-motion';
import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as flubber from 'flubber';
import styles from './CentralGraphic.module.css';

// ---------- geometry ----------
const SIZE = 160; // overall size of each shape (bigger -> larger circles)
const HALF = SIZE / 2;
const SHIFT = HALF; // translate paths to be centered

// base paths in a SIZE x SIZE box
const TRIANGLE = `M${HALF} ${SIZE * 0.05} L${SIZE * 0.93} ${SIZE * 0.9} L${SIZE * 0.07} ${SIZE * 0.9} Z`;
const ROUNDED_SQUARE = `
  M${SIZE * 0.25} ${SIZE * 0.15}
  H${SIZE * 0.75} Q${SIZE * 0.9} ${SIZE * 0.15} ${SIZE * 0.9} ${SIZE * 0.3}
  V${SIZE * 0.75} Q${SIZE * 0.9} ${SIZE * 0.9} ${SIZE * 0.75} ${SIZE * 0.9}
  H${SIZE * 0.25} Q${SIZE * 0.1} ${SIZE * 0.9} ${SIZE * 0.1} ${SIZE * 0.75}
  V${SIZE * 0.3} Q${SIZE * 0.1} ${SIZE * 0.15} ${SIZE * 0.25} ${SIZE * 0.15} Z
`;
const CIRCLE = `M${HALF} ${SIZE * 0.02} A${HALF * 0.98} ${HALF * 0.98} 0 1 1 ${HALF - 0.001} ${SIZE * 0.02} Z`;
const END_CIRCLE = CIRCLE;

// colours
const ORANGE = '#f97316';
const ORANGE_SOFT = '#fb923c';
const BLUE = '#2563eb';

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
  // Initial hollow circle visibility (State 1)
  const hollowCircleOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.2],
    [1, 1, 0],
  );

  // Shapes appear (State 2)
  const shapesOpacity = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);

  // blur timeline (for later stages)
  const filter = useTransform(
    useTransform(scrollYProgress, [0.1, 0.3, 0.9, 1], [20, 0, 0, 20]),
    (v) => `blur(${v}px)`,
  );

  // text inside starting shapes
  const stageTextOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.4, 0.55, 0.6],
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
    () => flubber.interpolate(TRIANGLE, END_CIRCLE, { maxSegmentLength: 2 }),
    [],
  );
  const sqToCircle = useMemo(
    () =>
      flubber.interpolate(ROUNDED_SQUARE, END_CIRCLE, { maxSegmentLength: 2 }),
    [],
  );
  const ciToCircle = useMemo(
    () => flubber.interpolate(CIRCLE, END_CIRCLE, { maxSegmentLength: 2 }),
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
  const triStart = { x: 0, y: -50 }; // triangle upper center
  const sqStart = { x: -60, y: 30 }; // square bottom-left
  const ciStart = { x: 60, y: 30 }; // circle right

  // END (overlapped Venn)
  const topTarget = { x: 0, y: -HALF * 0.95 };
  const blTarget = { x: -HALF * 0.95, y: HALF * 0.65 };
  const brTarget = { x: HALF * 0.95, y: HALF * 0.65 };

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
          width: '350px',
          height: '350px',
          border: '3px solid rgba(59, 130, 246, 0.3)',
          borderRadius: '50%',
          zIndex: 0,
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
                    many
                    <br />
                    actors
                  </motion.div>
                </motion.foreignObject>
              </motion.g>

              <motion.g style={{ x: ciX, y: ciY }}>
                <motion.path
                  d={dCircle}
                  fill={ciFill}
                  transform={`translate(${-SHIFT},${-SHIFT})`}
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
                    many
                    <br />
                    forms of
                    <br />
                    value
                  </motion.div>
                </motion.foreignObject>
              </motion.g>

              <motion.g style={{ x: sqX, y: sqY }}>
                <motion.path
                  d={dSquare}
                  fill={sqFill}
                  transform={`translate(${-SHIFT},${-SHIFT})`}
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
                    many
                    <br />
                    ways of
                    <br />
                    relating
                  </motion.div>
                </motion.foreignObject>
              </motion.g>
            </g>
          </svg>
        </div>
      </motion.div>

      {/* VENN LABELS — blurred, below final text */}
      <motion.div
        style={{
          filter,
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
            top: CANVAS / 2 - HALF * 0.95,
            left: CANVAS / 2,
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            fontWeight: 600,
          }}
          className={styles.vennCircle}
        >
          Many form
          <br /> of Value
        </motion.div>

        <motion.div
          style={{
            opacity: vennOpacity,
            position: 'absolute',
            top: CANVAS / 2 + HALF * 0.65,
            left: CANVAS / 2 - HALF * 0.95,
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            fontWeight: 600,
          }}
          className={styles.vennCircle}
        >
          Evolving
          <br />
          through
          <br />
          learning
        </motion.div>

        <motion.div
          style={{
            opacity: vennOpacity,
            position: 'absolute',
            top: CANVAS / 2 + HALF * 0.65,
            left: CANVAS / 2 + HALF * 0.95,
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            fontWeight: 600,
          }}
          className={styles.vennCircle}
        >
          Balancing
          <br />
          Risk
          <br />
          and Harm
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
          const radius = 245;
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
              <Image width={50} height={50} src={icon.img} alt={icon.name} />
              <span>{icon.name}</span>
            </motion.div>
          );
        })}
      </div>

      {/* FINAL TEXT — centred & above everything */}
      <motion.div
        className={styles.blurOverlayText}
        style={{
          opacity: finalTextOpacity,
          position: 'absolute',
          top: '58%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'left', // matches your screenshot
          zIndex: 2, // <— above the blurred Venn
          maxWidth: '60%',
          color: 'white',
        }}
      >
        <Link
          href="/overview/system-guide?layer=deep-code-shift"
          className={styles.deepCodeLink}
          style={{ color: 'white', textDecoration: 'underline' }}
        >
          find out more about deep codes →
        </Link>
      </motion.div>
    </motion.div>
  );
}
