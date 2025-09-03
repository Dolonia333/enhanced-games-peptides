"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { CTAButton, SecondaryButton } from "@/components/ui/Button";
import {
  Microscope,
  TestTube,
  Heart,
  Brain,
  Shield,
  Clock,
  CheckCircle,
  AlertTriangle,
  Info,
  Calendar,
  ArrowRight,
  Droplet,
  Activity,
  Zap,
  Target
} from "lucide-react";

const BloodworkPage: React.FC = () => {
  const [selectedPanel, setSelectedPanel] = useState<string>("comprehensive");

  const panels = [
    {
      id: "comprehensive",
      name: "Comprehensive Panel",
      description: "Complete hormone and biomarker analysis",
      price: 299,
      tests: [
        "Total Testosterone", "Free Testosterone", "SHBG", "LH", "FSH",
        "Cortisol", "DHEA-S", "Prolactin", "TSH", "Free T3", "Free T4",
        "IGF-1", "Vitamin D", "Ferritin", "CBC", "CMP"
      ],
      icon: Microscope
    },
    {
      id: "hormone",
      name: "Hormone Optimization",
      description: "Focus on key hormones for performance",
      price: 199,
      tests: [
        "Total Testosterone", "Free Testosterone", "SHBG", "LH", "FSH",
        "Cortisol", "DHEA-S", "Prolactin", "IGF-1"
      ],
      icon: Activity
    },
    {
      id: "recovery",
      name: "Recovery & Inflammation",
      description: "Monitor recovery and inflammation markers",
      price: 149,
      tests: [
        "Cortisol", "CRP", "ESR", "Ferritin", "Vitamin D",
        "Magnesium", "Zinc", "CBC"
      ],
      icon: Heart
    }
  ];

  const selectedPanelData = panels.find(p => p.id === selectedPanel);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                <Droplet className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Bloodwork Analysis
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Precision diagnostics to optimize your peptide therapy and performance goals.
              Get comprehensive insights into your hormonal profile and biomarkers.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Panel Selection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Choose Your Panel</h2>
          <p className="text-gray-400">Select the bloodwork panel that best fits your needs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {panels.map((panel, index) => (
            <motion.div
              key={panel.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  selectedPanel === panel.id
                    ? "bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-500/50"
                    : "bg-gray-800/50 border-gray-700 hover:bg-gray-700/50"
                }`}
                onClick={() => setSelectedPanel(panel.id)}
              >
                <div className="flex items-center mb-4">
                  <panel.icon className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold">{panel.name}</h3>
                </div>
                <p className="text-gray-400 mb-4">{panel.description}</p>
                <div className="text-2xl font-bold text-white mb-2">${panel.price}</div>
                <div className="text-sm text-gray-400">{panel.tests.length} tests included</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Selected Panel Details */}
        {selectedPanelData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800/50 rounded-lg p-8 border border-gray-700"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <selectedPanelData.icon className="w-10 h-10 text-blue-400 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold">{selectedPanelData.name}</h3>
                  <p className="text-gray-400">{selectedPanelData.description}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-white">${selectedPanelData.price}</div>
                <div className="text-sm text-gray-400">One-time analysis</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <TestTube className="w-5 h-5 text-green-400 mr-2" />
                  Tests Included
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedPanelData.tests.map((test, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {test}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Shield className="w-5 h-5 text-blue-400 mr-2" />
                  What You Get
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Detailed lab results within 48 hours
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Personalized interpretation report
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Peptide therapy recommendations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    30-minute consultation call
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton className="text-lg px-8 py-4">
                Order Bloodwork Kit
              </CTAButton>
              <SecondaryButton className="text-lg px-8 py-4">
                Learn More About Tests
              </SecondaryButton>
            </div>
          </motion.div>
        )}
      </div>

      {/* Process Section */}
      <div className="bg-gray-900/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Simple Process</h2>
            <p className="text-gray-400">Get your results in just 3 easy steps</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Order & Receive</h3>
              <p className="text-gray-400">Kit arrives at your door within 2-3 business days</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Collect Sample</h3>
              <p className="text-gray-400">Easy at-home blood collection with prepaid shipping</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Results</h3>
              <p className="text-gray-400">Detailed analysis and consultation within 48 hours</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodworkPage;
