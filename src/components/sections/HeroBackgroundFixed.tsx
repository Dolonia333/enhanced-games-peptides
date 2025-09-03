/* prettier-ignore-file */
/* eslint-disable */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeroBackgroundFixedProps {
  className?: string;
}

export const HeroBackgroundFixed: React.FC<HeroBackgroundFixedProps> = ({ 
  className = '' 
}) => {
  return (
    <div className={`relative w-full h-screen overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-black" />
        
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <Image
            src="/images/products/hero-product.jpg"
            alt="Enhanced Games Peptides delivery system"
            className="object-cover select-none"
            fill
            sizes="100vw"
            priority
            quality={100}
            style={{
              opacity: 1,
              filter: "brightness(0.8) contrast(1.2)",
              objectFit: "cover"
            }}
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-50" />
      </motion.div>
    </div>
  );
};
