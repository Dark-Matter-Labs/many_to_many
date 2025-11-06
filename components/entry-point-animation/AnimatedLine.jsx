'use client';
import { motion, useTransform } from 'framer-motion';

export default function AnimatedLine({
  d,
  progress,
  opacity = 1,
  stroke = '#f97316',
  strokeDasharray = 'none',
}) {
  const pathOffset = useTransform(progress, [0, 1], [1, 0]);

  return (
    <motion.path
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth="2.5"
      strokeDasharray={strokeDasharray}
      style={{
        pathLength: 1,
        pathOffset,
        opacity,
      }}
    />
  );
}
