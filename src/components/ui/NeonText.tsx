'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface NeonTextProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function NeonText({ children, className = '', glowColor = 'var(--eg-blue)' }: NeonTextProps) {
  return (
    <motion.span
      className={`neon-text ${className}`}
      initial={{ opacity: 0.8 }}
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse'
      }}
      style={{
        textShadow: `0 0 5px ${glowColor}, 0 0 10px ${glowColor}, 0 0 20px ${glowColor}`
      }}
    >
      {children}
    </motion.span>
  );
}
