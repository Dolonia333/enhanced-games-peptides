'use client';

import React from 'react';
import Image from 'next/image';

interface HeroProductBackgroundProps {
  className?: string;
}

export const HeroProductBackground: React.FC<HeroProductBackgroundProps> = ({ 
  className = '' 
}) => {
  return (
    <div className={`relative w-full h-screen overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-black" />
      
      <div className="absolute inset-0">
        <Image
          src="/images/products/hero-product.jpg"
          alt="Enhanced Games Peptides product"
          className="select-none"
          fill
          sizes="100vw"
          priority
          quality={100}
          style={{
            objectFit: "cover",
            filter: "brightness(1.05) contrast(1.08) drop-shadow(0 0 24px rgba(0,100,255,0.08))"
          }}
        />
      </div>
      
      <div className="absolute inset-0 bg-black" style={{ opacity: 0.35 }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" style={{ opacity: 0.35 }} />
    </div>
  );
};

export default HeroProductBackground;
