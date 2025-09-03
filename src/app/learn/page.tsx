"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { CTAButton, SecondaryButton } from "@/components/ui/Button";
import {
  BookOpen, Microscope, Target, Zap, Shield, Heart,
  Brain, Activity, ArrowRight, CheckCircle, Info, Star
} from "lucide-react";

export default function LearnPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Header */}
      <div className="bg-gray-900 shadow-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            {...fadeInUp}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <BookOpen size={48} className="text-eg-cyan" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Learn About Peptides
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the science behind peptide therapy and how it can enhance your performance and well-being.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="space-y-16"
        >
          {/* What Are Peptides */}
          <motion.section {...fadeInUp}>
            <Card className="p-8 bg-gray-800 border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <Microscope size={32} className="text-eg-cyan" />
                <h2 className="text-3xl font-bold text-white">What Are Peptides?</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-300 mb-4">
                    Peptides are short chains of amino acids that act as signaling molecules in the body. They play crucial roles in various biological processes, including hormone regulation, immune function, and tissue repair.
                  </p>
                  <p className="text-gray-300 mb-4">
                    In peptide therapy, we use specific peptides that can influence these natural processes to promote healing, recovery, and performance enhancement.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-eg-cyan to-blue-600 rounded-lg p-6 text-white">
                  <h3 className="text-xl font-semibold mb-4">Key Facts</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} />
                      <span>Natural building blocks of proteins</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} />
                      <span>Target specific cellular pathways</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} />
                      <span>Minimal side effects when used properly</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} />
                      <span>Research-grade quality assurance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.section>

          {/* How Peptides Work */}
          <motion.section {...fadeInUp}>
            <Card className="p-8 bg-gray-800 border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <Target size={32} className="text-eg-cyan" />
                <h2 className="text-3xl font-bold text-white">How Peptides Work</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-eg-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Signal Transmission</h3>
                  <p className="text-gray-300">
                    Peptides act as messengers, signaling cells to perform specific functions like tissue repair or hormone production.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-eg-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Targeted Action</h3>
                  <p className="text-gray-300">
                    Each peptide targets specific receptors, allowing for precise modulation of biological processes.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-eg-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                    <Activity size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Natural Enhancement</h3>
                  <p className="text-gray-300">
                    Peptides work with your bodys natural systems to optimize performance and recovery.
                  </p>
                </div>
              </div>
            </Card>
          </motion.section>

          {/* Benefits */}
          <motion.section {...fadeInUp}>
            <Card className="p-8 bg-gray-800 border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <Star size={32} className="text-eg-cyan" />
                <h2 className="text-3xl font-bold text-white">Benefits of Peptide Therapy</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <Heart className="text-red-500 mb-4" size={24} />
                  <h3 className="text-lg font-semibold mb-2 text-white">Cardiovascular Health</h3>
                  <p className="text-gray-300 text-sm">
                    Support heart health and circulation through targeted peptide interventions.
                  </p>
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <Brain className="text-purple-500 mb-4" size={24} />
                  <h3 className="text-lg font-semibold mb-2 text-white">Cognitive Function</h3>
                  <p className="text-gray-300 text-sm">
                    Enhance mental clarity, focus, and cognitive performance.
                  </p>
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <Activity className="text-green-500 mb-4" size={24} />
                  <h3 className="text-lg font-semibold mb-2 text-white">Recovery & Repair</h3>
                  <p className="text-gray-300 text-sm">
                    Accelerate muscle recovery and tissue repair after intense training.
                  </p>
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <Shield className="text-blue-500 mb-4" size={24} />
                  <h3 className="text-lg font-semibold mb-2 text-white">Immune Support</h3>
                  <p className="text-gray-300 text-sm">
                    Boost immune function and overall resilience to stress.
                  </p>
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <Zap className="text-yellow-500 mb-4" size={24} />
                  <h3 className="text-lg font-semibold mb-2 text-white">Energy & Vitality</h3>
                  <p className="text-gray-300 text-sm">
                    Increase energy levels and combat fatigue naturally.
                  </p>
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <Target className="text-orange-500 mb-4" size={24} />
                  <h3 className="text-lg font-semibold mb-2 text-white">Body Composition</h3>
                  <p className="text-gray-300 text-sm">
                    Support healthy body composition and metabolic function.
                  </p>
                </div>
              </div>
            </Card>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}
