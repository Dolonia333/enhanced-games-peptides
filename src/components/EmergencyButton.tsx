"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { EmergencyModal } from "@/components/ui/EmergencyModal";

const EmergencyButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        aria-label="Emergency Help"
        onClick={() => setOpen(true)}
        className="fixed top-4 right-4 z-50 px-6 py-3 flex items-center gap-2 rounded-md focus:outline-none bg-black/50"
      >
        <Phone className="w-6 h-6 text-white animate-pulse" />
        <motion.span
          initial={{ color: "#ff0000" }}
          animate={{
            color: ["#ff0000", "#0000ff"],
            textShadow: [
              "0 0 20px #ff0000",
              "0 0 20px #0000ff"
            ]
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="font-black text-xl uppercase"
          style={{ letterSpacing: "0.2em" }}
        >
          Emergency
        </motion.span>
      </motion.button>
      {open && <EmergencyModal isOpen={open} onClose={() => setOpen(false)} />}
    </>
  );
};

export default EmergencyButton;
