'use client';

import React from 'react';
import Link from 'next/link';
import { Package, CreditCard, User, FileText, Bell } from 'lucide-react';

const accountLinks = [
  {
    name: 'Orders',
    href: '/orders',
    icon: Package,
    description: 'View and track your orders',
    color: 'bg-blue-500',
  },
  {
    name: 'Billing',
    href: '/account/billing',
    icon: CreditCard,
    description: 'Manage payment methods and billing history',
    color: 'bg-green-500',
  },
  {
    name: 'Profile',
    href: '/account/profile',
    icon: User,
    description: 'Update your personal information',
    color: 'bg-purple-500',
  },
  {
    name: 'Documents',
    href: '/account/documents',
    icon: FileText,
    description: 'Access medical records and prescriptions',
    color: 'bg-yellow-500',
  },
  {
    name: 'Notifications',
    href: '/account/notifications',
    icon: Bell,
    description: 'Manage your notification preferences',
    color: 'bg-red-500',
  },
];

export default function AccountDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Account Dashboard</h1>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {accountLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className={`inline-flex p-3 rounded-lg ${link.color} text-white`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 group-hover:text-blue-600">
                  {link.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {link.description}
                </p>
                <span
                  className="absolute inset-0 rounded-lg ring-blue-400 pointer-events-none transition-opacity opacity-0 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
