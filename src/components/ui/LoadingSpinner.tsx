'use client';

import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'default' | 'large';
  color?: 'primary' | 'white' | 'gray';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'default',
  color = 'primary',
  className = ''
}) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    default: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'border-eg-blue',
    white: 'border-white',
    gray: 'border-gray-400'
  };

  return (
    <div
      className={`
        animate-spin rounded-full border-2 border-t-transparent
        ${sizeClasses[size]}
        ${colorClasses[color]}
        ${className}
      `}
    />
  );
};

interface PageLoadingProps {
  message?: string;
}

export const PageLoading: React.FC<PageLoadingProps> = ({
  message = 'Loading...'
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <LoadingSpinner size="large" className="mx-auto mb-4" />
        <p className="text-lg font-medium text-gray-700">{message}</p>
      </div>
    </div>
  );
};

interface LoadingOverlayProps {
  isVisible: boolean;
  message?: string;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isVisible,
  message = 'Loading...'
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center">
        <LoadingSpinner size="large" className="mx-auto mb-4" />
        <p className="text-lg font-medium text-gray-700">{message}</p>
      </div>
    </div>
  );
};

interface LoadingButtonProps {
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  isLoading,
  children,
  className = ''
}) => {
  return (
    <button
      className={`
        btn-primary
        ${isLoading ? 'cursor-not-allowed opacity-75' : ''}
        ${className}
      `}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="flex items-center">
          <LoadingSpinner size="small" color="white" className="mr-2" />
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

// Skeleton loading components
interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  width = 'w-full',
  height = 'h-4'
}) => {
  return (
    <div
      className={`
        animate-pulse bg-gray-200 rounded
        ${width} ${height} ${className}
      `}
    />
  );
};

export const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Skeleton height="h-48" className="rounded-none" />
      <div className="p-6 space-y-4">
        <Skeleton height="h-6" width="w-3/4" />
        <Skeleton height="h-4" />
        <Skeleton height="h-4" width="w-5/6" />
        <div className="flex justify-between items-center">
          <Skeleton height="h-8" width="w-20" />
          <Skeleton height="h-6" width="w-16" />
        </div>
      </div>
    </div>
  );
};

export const TextSkeleton: React.FC<{ lines?: number }> = ({ lines = 3 }) => {
  return (
    <div className="space-y-3">
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          width={index === lines - 1 ? 'w-3/4' : 'w-full'}
        />
      ))}
    </div>
  );
};

export default LoadingSpinner;
