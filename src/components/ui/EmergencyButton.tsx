"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface EmergencyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string;
  className?: string;
}

export const EmergencyButton = React.forwardRef<HTMLButtonElement, EmergencyButtonProps>(
  ({ className, pulseColor = "#ef4444", children, ...props }, ref) => {
    const blinkVariants = {
      initial: { boxShadow: `0 0 20px ${pulseColor}00` },
      animate: {
        boxShadow: [
          `0 0 20px ${pulseColor}00`,
          `0 0 30px ${pulseColor}`,
          `0 0 20px ${pulseColor}00`
        ],
        scale: [1, 1.05, 1],
      }
    };

    return (
      <motion.button
        ref={ref}
        variants={blinkVariants}
        initial="initial"
        animate="animate"
        transition={{
          repeat: Infinity,
          duration: 2,
          times: [0, 0.5, 1]
        }}
        className={cn(
          "relative px-6 py-3 text-lg font-semibold text-white",
          "bg-red-600 hover:bg-red-700",
          "rounded-md transform transition-transform",
          "before:content-[''] before:absolute before:inset-0",
          "before:bg-red-500/50 before:animate-ping before:rounded-md",
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

EmergencyButton.displayName = "EmergencyButton";
