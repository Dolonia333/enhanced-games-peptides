"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { Button } from "./Button";

interface PopupAdProps {
  isOpen: boolean;
  onClose: () => void;
  onCTAClick: () => void;
}

export const PopupAd: React.FC<PopupAdProps> = ({ isOpen, onClose, onCTAClick }) => {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {/* Content */}
              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl"></span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Ready to Optimize Your Performance?
                  </h3>
                  <p className="text-gray-600">
                    Take our quick health assessment and discover your personalized peptide protocol.
                  </p>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">Personalized recommendations</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">Expert guidance included</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">Free initial consultation</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={onCTAClick}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center"
                >
                  Start Health Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                {/* Footer */}
                <p className="text-xs text-gray-500 text-center mt-4">
                  No commitment required  Takes only 2 minutes
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Hook for managing popup state with scroll trigger
export const usePopupAd = (triggerOffset: number = 0) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (hasShown) return; // Only show once

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > triggerOffset) {
        setIsOpen(true);
        setHasShown(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [triggerOffset, hasShown]);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return {
    isOpen,
    openPopup,
    closePopup,
  };
};
