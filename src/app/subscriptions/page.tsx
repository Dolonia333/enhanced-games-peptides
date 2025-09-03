'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Calendar, CreditCard, Clock, CheckCircle, PauseCircle, RepeatIcon, AlertCircle } from 'lucide-react';

interface Subscription {
  id: string;
  productName: string;
  status: 'active' | 'paused' | 'cancelled';
  price: number;
  interval: 'monthly' | 'quarterly';
  nextDelivery: string;
  image: string;
  lastDelivery?: string;
  paymentMethod: {
    type: 'card';
    last4: string;
    brand: string;
    expiryDate: string;
  };
}

const sampleSubscriptions: Subscription[] = [
  {
    id: 'SUB-001',
    productName: 'Performance Enhancement Kit',
    status: 'active',
    price: 249.99,
    interval: 'monthly',
    nextDelivery: '2025-09-15',
    lastDelivery: '2025-08-15',
    image: '/images/products/performance-kit.jpg',
    paymentMethod: {
      type: 'card',
      last4: '4242',
      brand: 'visa',
      expiryDate: '12/25'
    }
  },
  {
    id: 'SUB-002',
    productName: 'Enhanced Peptides Case',
    status: 'paused',
    price: 199.99,
    interval: 'quarterly',
    nextDelivery: '2025-11-01',
    lastDelivery: '2025-08-01',
    image: '/images/products/enhanced-peptides-case.webp',
    paymentMethod: {
      type: 'card',
      last4: '8888',
      brand: 'mastercard',
      expiryDate: '03/26'
    }
  }
];

const statusColors = {
  active: 'bg-green-100 text-green-800',
  paused: 'bg-yellow-100 text-yellow-800',
  cancelled: 'bg-red-100 text-red-800'
};

const statusIcons = {
  active: CheckCircle,
  paused: PauseCircle,
  cancelled: AlertCircle
};

export default function SubscriptionsPage() {
  const [subscriptions] = useState<Subscription[]>(sampleSubscriptions);
  const [selectedSubscription, setSelectedSubscription] = useState<string | null>(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Subscriptions</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your recurring deliveries
          </p>
        </div>

        {/* Subscriptions List */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          {subscriptions.length === 0 ? (
            <div className="text-center py-12">
              <RepeatIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No active subscriptions</h3>
              <p className="mt-1 text-sm text-gray-500">Get started with a subscription to save money on regular deliveries.</p>
              <div className="mt-6">
                <Button onClick={() => window.location.href = '/products'}>
                  Browse Products
                </Button>
              </div>
            </div>
          ) : (
            <ul role="list" className="divide-y divide-gray-200">
              {subscriptions.map((subscription) => {
                const StatusIcon = statusIcons[subscription.status];
                const isExpanded = selectedSubscription === subscription.id;

                return (
                  <li key={subscription.id} className="hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center min-w-0 gap-4">
                          <div className="flex-shrink-0 w-16 h-16 relative">
                            <Image
                              src={subscription.image}
                              alt={subscription.productName}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <div>
                            <h4 className="text-lg font-medium text-gray-900 truncate">
                              {subscription.productName}
                            </h4>
                            <div className="flex items-center mt-1">
                              <span className={`px-2.5 py-0.5 rounded-full text-sm flex items-center gap-1 ${statusColors[subscription.status]}`}>
                                <StatusIcon className="w-4 h-4" />
                                {subscription.status.charAt(0).toUpperCase() + subscription.status.slice(1)}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-sm font-medium text-gray-900">{formatCurrency(subscription.price)}</p>
                            <p className="text-sm text-gray-500">per {subscription.interval}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setSelectedSubscription(isExpanded ? null : subscription.id)}
                          >
                            {isExpanded ? 'Hide Details' : 'View Details'}
                          </Button>
                        </div>
                      </div>

                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-4 pt-4 border-t"
                        >
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {/* Delivery Schedule */}
                            <div>
                              <h5 className="text-sm font-medium text-gray-900">Delivery Schedule</h5>
                              <div className="mt-2 space-y-2">
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                  <Calendar className="w-4 h-4" />
                                  <span>Next delivery: {formatDate(subscription.nextDelivery)}</span>
                                </div>
                                {subscription.lastDelivery && (
                                  <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Clock className="w-4 h-4" />
                                    <span>Last delivery: {formatDate(subscription.lastDelivery)}</span>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Payment Method */}
                            <div>
                              <h5 className="text-sm font-medium text-gray-900">Payment Method</h5>
                              <div className="mt-2 flex items-center gap-2">
                                <CreditCard className="w-4 h-4 text-gray-500" />
                                <span className="text-sm text-gray-500">
                                  {subscription.paymentMethod.brand.charAt(0).toUpperCase() + 
                                   subscription.paymentMethod.brand.slice(1)} ending in {subscription.paymentMethod.last4}
                                </span>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">
                                Expires: {subscription.paymentMethod.expiryDate}
                              </p>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="mt-4 flex flex-wrap gap-2">
                            {subscription.status === 'active' && (
                              <>
                                <Button variant="outline" size="sm">
                                  Change Schedule
                                </Button>
                                <Button variant="outline" size="sm">
                                  Update Payment
                                </Button>
                                <Button variant="outline" size="sm" className="text-yellow-600 hover:text-yellow-700">
                                  Pause Subscription
                                </Button>
                              </>
                            )}
                            {subscription.status === 'paused' && (
                              <Button variant="outline" size="sm" className="text-green-600 hover:text-green-700">
                                Resume Subscription
                              </Button>
                            )}
                            {subscription.status !== 'cancelled' && (
                              <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                                Cancel Subscription
                              </Button>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Subscription Benefits */}
        {subscriptions.length > 0 && (
          <div className="mt-8 bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Subscription Benefits</h3>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <RepeatIcon className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900">Regular Deliveries</h4>
                    <p className="mt-1 text-sm text-gray-500">Never run out of your essential products</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CreditCard className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900">Save Money</h4>
                    <p className="mt-1 text-sm text-gray-500">Get the best prices with subscription discounts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Calendar className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900">Flexible Schedule</h4>
                    <p className="mt-1 text-sm text-gray-500">Adjust or pause your deliveries anytime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
