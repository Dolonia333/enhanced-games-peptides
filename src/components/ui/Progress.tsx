import React from "react";
import { cn } from "@/lib/utils";

interface ProgressProps {
  value: number;
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({ value, className }) => {
  return (
    <div className={cn("relative h-2 w-full overflow-hidden rounded-full bg-gray-200", className)}>
      <div 
        className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 ease-out"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};
