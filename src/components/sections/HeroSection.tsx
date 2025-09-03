'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CTAButton } from '../ui/Button';

interface HeroSectionProps {
  onStartQuiz?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartQuiz
}) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/eh-games-new-hero.jpg"
          alt="Hero"
          fill
          priority
          quality={100}
          className="object-cover"
          sizes="100vw"
        />
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      
      {/* Hero Content Overlay */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="text-white px-8 md:px-16 lg:px-24 max-w-4xl ml-[5%]">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="logo-icon w-16 h-16 text-2xl bg-white text-black rounded-lg flex items-center justify-center">
                EG
              </div>
              <div className="brand-text text-left">
                <div className="enhanced-games text-white text-3xl md:text-4xl font-bold tracking-wider">
                  ENHANCED GAMES
                </div>
                <div className="peptides text-eg-cyan text-3xl md:text-4xl font-bold tracking-wider">
                  PEPTIDES
                </div>
                <div className="tagline text-gray-200 text-xl font-medium mt-3">
                  Peptides meet Simplicity
                </div>
              </div>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-left max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your Peak Performance
            <br />
            <span className="text-eg-cyan">Starts Here</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-xl text-left leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Revolutionary peptide delivery through our innovative pen-cartridge system. 
            Designed for the modern athlete who demands excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <CTAButton
              onClick={onStartQuiz}
              href="/quiz"
              className="text-lg px-8 py-4 min-w-60"
            >
              Design Your Cycle
            </CTAButton>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-eg-cyan">50K+</div>
              <div className="text-sm text-gray-300">Active Athletes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-eg-cyan">99.7%</div>
              <div className="text-sm text-gray-300">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-eg-cyan">24/7</div>
              <div className="text-sm text-gray-300">Medical Support</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full opacity-75">
          <div className="w-1 h-3 bg-white rounded-full mx-auto mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
