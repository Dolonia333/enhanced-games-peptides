'use client';

import React from 'react';

interface LogoProps {
  size?: 'small' | 'default' | 'large';
  variant?: 'full' | 'icon' | 'text';
  className?: string;
}

export const EnhancedGamesLogo: React.FC<LogoProps> = ({ 
  size = 'default', 
  variant = 'full',
  className = '' 
}) => {
  const sizeClasses = {
    small: 'text-sm',
    default: 'text-base',
    large: 'text-xl'
  };

  const iconSizes = {
    small: 'w-8 h-8 text-base',
    default: 'w-12 h-12 text-xl',
    large: 'w-16 h-16 text-2xl'
  };

  if (variant === 'icon') {
    return (
      <div className={`logo-icon ${iconSizes[size]} ${className}`}>
        EG
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className={`brand-text ${sizeClasses[size]} ${className}`}>
        <div className="enhanced-games">ENHANCED GAMES</div>
        <div className="peptides">PEPTIDES</div>
        <div className="tagline">Peptides meet Simplicity</div>
      </div>
    );
  }

  return (
    <div className={`logo-container ${sizeClasses[size]} ${className}`}>
      <div className={`logo-icon ${iconSizes[size]}`}>
        EG
      </div>
      <div className="brand-text">
        <div className="enhanced-games">ENHANCED GAMES</div>
        <div className="peptides">PEPTIDES</div>
        <div className="tagline">Peptides meet Simplicity</div>
      </div>
    </div>
  );
};

export const LogoIcon: React.FC<{ size?: 'small' | 'default' | 'large'; className?: string }> = ({ 
  size = 'default', 
  className = '' 
}) => {
  return <EnhancedGamesLogo size={size} variant="icon" className={className} />;
};

export const LogoText: React.FC<{ size?: 'small' | 'default' | 'large'; className?: string }> = ({ 
  size = 'default', 
  className = '' 
}) => {
  return <EnhancedGamesLogo size={size} variant="text" className={className} />;
};

// SVG version for better scalability
export const LogoSVG: React.FC<{ width?: number; height?: number; className?: string }> = ({
  width = 120,
  height = 40,
  className = ''
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 120 40" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* EG Icon */}
      <rect x="0" y="0" width="32" height="32" rx="4" fill="var(--eg-black)" />
      <text x="16" y="22" textAnchor="middle" fill="var(--eg-white)" fontSize="14" fontWeight="bold">
        EG
      </text>
      
      {/* Brand Text */}
      <text x="40" y="14" fill="var(--eg-black)" fontSize="10" fontWeight="bold" letterSpacing="1px">
        ENHANCED GAMES
      </text>
      <text x="40" y="26" fill="var(--eg-blue)" fontSize="10" fontWeight="bold" letterSpacing="1px">
        PEPTIDES
      </text>
      <text x="40" y="36" fill="var(--eg-gray)" fontSize="6" fontWeight="500">
        Peptides meet Simplicity
      </text>
    </svg>
  );
};

export default EnhancedGamesLogo;
