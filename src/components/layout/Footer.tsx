'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Shield, Award, Clock } from 'lucide-react';
import { EnhancedGamesLogo } from '../branding/Logo';

const footerLinks = {
  company: [
    { label: 'About Lab', href: '/about-lab' },
    { label: 'Our Mission', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
    { label: 'Contact', href: '/contact' },
  ],
  products: [
    { label: 'Product Catalog', href: '/products' },
    { label: 'Starter Kits', href: '/products/kits' },
    { label: 'Prescription Products', href: '/products/rx' },
    { label: 'Accessories', href: '/products/accessories' },
    { label: 'Refills', href: '/products/refills' },
  ],
  support: [
    { label: 'Help Center', href: '/support' },
    { label: 'Dosing Guide', href: '/support/dosing' },
    { label: 'Video Tutorials', href: '/support/videos' },
    { label: 'FAQ', href: '/support/faq' },
    { label: 'Contact Support', href: '/support/contact' },
  ],
  account: [
    { label: 'My Account', href: '/account' },
    { label: 'Order History', href: '/account/orders' },
    { label: 'Subscriptions', href: '/account/subscriptions' },
    { label: 'Health Profile', href: '/account/health' },
    { label: 'Lab Results', href: '/account/labs' },
  ],
  legal: [
    { label: 'Terms of Service', href: '/legal/terms' },
    { label: 'Privacy Policy', href: '/legal/privacy' },
    { label: 'HIPAA Notice', href: '/legal/hipaa' },
    { label: 'Telehealth Consent', href: '/legal/telehealth' },
    { label: 'Medical Disclaimer', href: '/legal/medical' },
  ],
};

const trustSignals = [
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'Your health data is protected'
  },
  {
    icon: Award,
    title: 'FDA Oversight',
    description: 'Regulated compound pharmacy'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Medical team always available'
  }
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Trust Signals Bar */}
      <div className="border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustSignals.map((signal, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <signal.icon className="w-8 h-8 text-eg-cyan" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{signal.title}</h4>
                  <p className="text-sm text-gray-400">{signal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <EnhancedGamesLogo size="default" />
            <p className="mt-4 text-gray-400 text-sm leading-6">
              Revolutionary peptide delivery through innovative pen-cartridge system. 
              Peptides meet Simplicity for the modern athlete.
            </p>
            
            {/* Contact Information */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="w-4 h-4" />
                <span>1-800-EGP-HELP (1-800-347-4357)</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>support@enhancedgames.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Licensed in all 50 states</span>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-6 p-4 bg-red-900 bg-opacity-30 border border-red-800 rounded-lg">
              <h4 className="text-red-300 font-semibold text-sm">Medical Emergency</h4>
              <p className="text-red-200 text-sm mt-1">
                Call 911 immediately or contact our 24/7 medical hotline:
              </p>
              <p className="text-red-100 font-bold">1-800-EGP-911X</p>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Products
            </h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Legal & Compliance
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-gray-400">
                © 2025 Enhanced Games Peptides. All rights reserved.
              </p>
              <div className="flex space-x-4 text-xs text-gray-500">
                <span>Licensed Compound Pharmacy</span>
                <span>•</span>
                <span>DEA Registration #RX123456789</span>
                <span>•</span>
                <span>State License #SP-987654321</span>
              </div>
            </div>

            {/* Compliance Badges */}
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <div className="text-xs text-gray-500 text-center">
                <div className="w-12 h-8 bg-gray-700 rounded border border-gray-600 flex items-center justify-center mb-1">
                  <Shield className="w-4 h-4 text-gray-400" />
                </div>
                <span>HIPAA</span>
              </div>
              <div className="text-xs text-gray-500 text-center">
                <div className="w-12 h-8 bg-gray-700 rounded border border-gray-600 flex items-center justify-center mb-1">
                  <Award className="w-4 h-4 text-gray-400" />
                </div>
                <span>FDA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Age Verification Notice */}
      <div className="bg-yellow-900 bg-opacity-30 border-t border-yellow-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-yellow-200 text-sm text-center">
            <strong>Age Verification Required:</strong> You must be 18 or older to purchase peptide products. 
            Prescription products require valid physician consultation and prescription.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
