'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, User, Phone } from 'lucide-react';
import { EnhancedGamesLogo } from '../branding/Logo';
import { Button } from '../ui/Button';
import { EmergencyModal } from '../ui/EmergencyModal';
import { useCart } from '@/lib/cart-context';

interface NavigationItem {
  label: string;
  href: string;
  description?: string;
}

const mainNavigation: NavigationItem[] = [
  { label: 'Quiz', href: '/quiz', description: 'Find your perfect cycle' },
  { label: 'Products', href: '/products', description: 'Browse our catalog' },
  { label: 'Consult', href: '/consult', description: 'Book with a physician' },
  { label: 'Bloodwork', href: '/bloodwork', description: 'Lab panel options' },
  { label: 'Learn', href: '/learn', description: 'Educational content' },
];

const userNavigation: NavigationItem[] = [
  { label: 'Account', href: '/account' },
  { label: 'Orders', href: '/orders' },
  { label: 'Subscriptions', href: '/subscriptions' },
  { label: 'Health Profile', href: '/health-profile' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const { itemCount: cartItemCount } = useCart();

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsMenuOpen(false);
      setIsUserMenuOpen(false);
    };

    if (isMenuOpen || isUserMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen, isUserMenuOpen]);

  return (
    <>
      <EmergencyModal
        isOpen={isEmergencyOpen}
        onClose={() => setIsEmergencyOpen(false)}
      />
      <header
        className="sticky top-0 z-[1000] backdrop-filter backdrop-saturate-[1.2] backdrop-blur-md bg-white/95 shadow-sm transition-all duration-300"
        role="banner"
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand Block - Logo + Unbreakable Text */}
            <Link
              href="/"
              aria-label="Enhanced Games Peptides — Peptides meet Simplicity"
              className="flex items-center gap-3 whitespace-nowrap shrink-0 max-w-[70vw] overflow-hidden text-ellipsis no-underline group"
            >
              {/* EG Logo Component */}
              <EnhancedGamesLogo size="small" variant="icon" />
              
              {/* Brand Text */}
              <div className="flex items-center gap-2">
                <span className="font-semibold tracking-wide text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  ENHANCED GAMES <strong className="text-blue-600">PEPTIDES</strong>
                </span>
                <span className="text-gray-600">—</span>
                <span className="font-medium opacity-75 text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                  Peptides meet Simplicity
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {mainNavigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-eg-blue px-3 py-2 text-sm font-medium transition-colors duration-200 group relative"
                  >
                    {item.label}
                    {item.description && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                        {item.description}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Emergency Consult */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsEmergencyOpen(true)}
                className="hidden sm:inline-flex items-center gap-2 relative overflow-hidden"
              >
                <Phone className="w-4 h-4" />
                <div className="relative">
                  <motion.div
                    animate={{
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0"
                  >
                    {/* Fast flashing lights */}
                    <motion.span
                      animate={{
                        opacity: [1, 1, 0, 0, 1],
                        color: "#ff0000",
                        textShadow: "0 0 10px #ff0000"
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        times: [0, 0.2, 0.3, 0.5, 0.6]
                      }}
                      className="absolute inset-0 z-20 font-bold"
                    >
                      Emergency
                    </motion.span>
                    <motion.span
                      animate={{
                        opacity: [0, 0, 1, 1, 0],
                        color: "#0000ff",
                        textShadow: "0 0 10px #0000ff"
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        times: [0, 0.2, 0.3, 0.5, 0.6]
                      }}
                      className="relative z-10 font-bold"
                    >
                      Emergency
                    </motion.span>
                  </motion.div>
                  
                  {/* Slow color transition */}
                  <motion.span
                    animate={{
                      opacity: [1, 0, 0, 1],
                      color: ["#ff0000", "#ffffff", "#0000ff", "#ff0000"],
                      textShadow: [
                        "0 0 15px #ff0000",
                        "0 0 15px #ffffff",
                        "0 0 15px #0000ff",
                        "0 0 15px #ff0000"
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 font-bold"
                  >
                    Emergency
                  </motion.span>
                </div>
              </Button>

              {/* Cart */}
              <Link href="/cart" className="relative p-2 text-gray-700 hover:text-eg-blue transition-colors">
                <ShoppingCart className="w-6 h-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-eg-blue text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>

              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsUserMenuOpen(!isUserMenuOpen);
                  }}
                  className="p-2 text-gray-700 hover:text-eg-blue transition-colors"
                >
                  <User className="w-6 h-6" />
                </button>

                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {userNavigation.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-eg-blue transition-colors"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                      <hr className="my-2 border-gray-200" />
                      <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
                        Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(!isMenuOpen);
                }}
                className="md:hidden p-2 text-gray-700 hover:text-eg-blue transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 md:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black bg-opacity-50" 
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  {/* Brand Block - Mobile Version with Logo */}
                  <div className="flex items-center gap-2 whitespace-nowrap shrink-0 max-w-[60vw] overflow-hidden text-ellipsis">
                    {/* EG Logo Component - Mobile */}
                    <EnhancedGamesLogo size="small" variant="icon" />
                    
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-semibold tracking-wide text-gray-900">
                        ENHANCED GAMES <strong className="text-blue-600">PEPTIDES</strong>
                      </span>
                      <span className="text-xs text-gray-600 hidden xs:inline">—</span>
                      <span className="text-xs font-medium opacity-75 text-gray-700 hidden xs:inline">
                        Peptides meet Simplicity
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 py-4">
                  <div className="space-y-1">
                    {mainNavigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-eg-blue transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="font-medium">{item.label}</div>
                        {item.description && (
                          <div className="text-sm text-gray-500 mt-1">{item.description}</div>
                        )}
                      </Link>
                    ))}
                  </div>
                  
                  <hr className="my-4 mx-4 border-gray-200" />
                  
                  <div className="space-y-1">
                    {userNavigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-eg-blue transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Footer Actions */}
                <div className="p-4 border-t space-y-3">
                  <Button
                    variant="neon"
                    size="lg"
                    onClick={() => setIsEmergencyOpen(true)}
                    className="w-full flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <div className="relative">
                      <motion.div
                        animate={{
                          opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0"
                      >
                        {/* Fast flashing lights */}
                        <motion.span
                          animate={{
                            opacity: [1, 1, 0, 0, 1],
                            color: "#ff0000",
                            textShadow: "0 0 10px #ff0000"
                          }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            times: [0, 0.2, 0.3, 0.5, 0.6]
                          }}
                          className="absolute inset-0 z-20 font-bold"
                        >
                          Emergency Consult
                        </motion.span>
                        <motion.span
                          animate={{
                            opacity: [0, 0, 1, 1, 0],
                            color: "#0000ff",
                            textShadow: "0 0 10px #0000ff"
                          }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            times: [0, 0.2, 0.3, 0.5, 0.6]
                          }}
                          className="relative z-10 font-bold"
                        >
                          Emergency Consult
                        </motion.span>
                      </motion.div>
                      
                      {/* Slow color transition */}
                      <motion.span
                        animate={{
                          opacity: [1, 0, 0, 1],
                          color: ["#ff0000", "#ffffff", "#0000ff", "#ff0000"],
                          textShadow: [
                            "0 0 15px #ff0000",
                            "0 0 15px #ffffff",
                            "0 0 15px #0000ff",
                            "0 0 15px #ff0000"
                          ]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="relative z-10 font-bold"
                      >
                        Emergency Consult
                      </motion.span>
                    </div>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full"
                  >
                    Sign Out
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  );
};

export default Header;
