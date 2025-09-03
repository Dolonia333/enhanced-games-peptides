"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { Phone, AlertCircle, X, Clock } from "lucide-react";

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EmergencyModal({ isOpen, onClose }: EmergencyModalProps) {
  const emergencyNumber = "1-800-555-0123"; // Replace with actual emergency number
  
  const handleCall = () => {
    window.location.href = `tel:${emergencyNumber}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-6"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Content */}
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="p-3 bg-red-100 rounded-full">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Emergency Support
              </h2>
            </div>

            {/* Message */}
            <div className="text-gray-600 space-y-4">
              <p className="font-medium">
                If you're experiencing any concerning effects or need immediate assistance with our products:
              </p>
              <div className="bg-red-50 p-4 rounded-lg space-y-2">
                <p className="font-bold text-red-700">Call our 24/7 Emergency Support Line:</p>
                <div className="flex items-center justify-between bg-white p-3 rounded-md border border-red-200">
                  <span className="font-mono text-lg text-red-600">{emergencyNumber}</span>
                  <Button
                    variant="neon"
                    size="sm"
                    onClick={handleCall}
                    className="flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                </div>
              </div>

              {/* Hours and Response Time */}
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>24/7 Support • Typical response time: &lt;2 minutes</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
