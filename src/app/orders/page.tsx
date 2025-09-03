'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ChevronDown, Package, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

interface Order {
  id: string;
  date: string;
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: {
    id: string;
    name: string;
    quantity: number;
    price: number;
    image: string;
  }[];
  shippingAddress: {
    name: string;
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  trackingNumber?: string;
}

// Sample data - replace with real data from your backend
const sampleOrders: Order[] = [
  {
    id: 'ORD-001',
    date: '2025-08-30',
    status: 'processing',
    total: 249.99,
    items: [
      {
        id: 'PROD-001',
        name: 'Performance Enhancement Kit',
        quantity: 1,
        price: 249.99,
        image: '/images/products/performance-kit.jpg'
      }
    ],
    shippingAddress: {
      name: 'John Doe',
      street: '123 Main St',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90001'
    }
  },
  {
    id: 'ORD-002',
    date: '2025-08-28',
    status: 'shipped',
    total: 499.98,
    items: [
      {
        id: 'PROD-002',
        name: 'Enhanced Peptides Case',
        quantity: 2,
        price: 249.99,
        image: '/images/products/enhanced-peptides-case.webp'
      }
    ],
    shippingAddress: {
      name: 'John Doe',
      street: '123 Main St',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90001'
    },
    trackingNumber: '1Z999AA1234567890'
  }
];

const statusColors = {
  processing: 'bg-blue-100 text-blue-800',
  shipped: 'bg-yellow-100 text-yellow-800',
  delivered: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800'
};

const statusIcons = {
  processing: Clock,
  shipped: Package,
  delivered: CheckCircle,
  cancelled: XCircle
};

export default function OrdersPage() {
  const [orders] = useState<Order[]>(sampleOrders);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
          <h1 className="text-2xl font-semibold text-gray-900">Orders</h1>
          <p className="mt-1 text-sm text-gray-500">
            View and manage your orders
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-grow relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search orders..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="relative">
            <Button
              variant="outline"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Filter
              <ChevronDown className="h-4 w-4" />
            </Button>
            {isFilterOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-2 space-y-2">
                <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
                  Processing
                </div>
                <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
                  Shipped
                </div>
                <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
                  Delivered
                </div>
                <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
                  Cancelled
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Orders List */}
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul role="list" className="divide-y divide-gray-200">
            {orders.map((order) => {
              const StatusIcon = statusIcons[order.status];
              return (
                <li key={order.id}>
                  <div className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <p className="text-sm font-medium text-blue-600 truncate">
                            {order.id}
                          </p>
                          <div className={`ml-4 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[order.status]}`}>
                            <StatusIcon className="h-4 w-4 mr-1" />
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </div>
                        </div>
                        <div className="ml-2 flex-shrink-0 flex">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setSelectedOrder(selectedOrder?.id === order.id ? null : order)}
                          >
                            {selectedOrder?.id === order.id ? 'Hide Details' : 'View Details'}
                          </Button>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            {formatDate(order.date)}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <p className="font-medium text-gray-900">
                            {formatCurrency(order.total)}
                          </p>
                        </div>
                      </div>
                      
                      {/* Order Details */}
                      {selectedOrder?.id === order.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-4 border-t pt-4"
                        >
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {/* Items */}
                            <div>
                              <h4 className="text-sm font-medium text-gray-900">Order Items</h4>
                              <ul className="mt-2 divide-y divide-gray-200">
                                {order.items.map((item) => (
                                  <li key={item.id} className="py-2">
                                    <div className="flex items-center">
                                      <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={48}
                                        height={48}
                                        className="h-12 w-12 object-cover rounded"
                                      />
                                      <div className="ml-4 flex-1">
                                        <p className="text-sm font-medium text-gray-900">{item.name}</p>
                                        <p className="text-sm text-gray-500">
                                          {item.quantity} × {formatCurrency(item.price)}
                                        </p>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Shipping Info */}
                            <div>
                              <h4 className="text-sm font-medium text-gray-900">Shipping Information</h4>
                              <div className="mt-2 text-sm text-gray-500">
                                <p>{order.shippingAddress.name}</p>
                                <p>{order.shippingAddress.street}</p>
                                <p>
                                  {order.shippingAddress.city}, {order.shippingAddress.state}{' '}
                                  {order.shippingAddress.zip}
                                </p>
                              </div>
                              {order.trackingNumber && (
                                <div className="mt-4">
                                  <h4 className="text-sm font-medium text-gray-900">Tracking Number</h4>
                                  <p className="mt-1 text-sm text-blue-600">{order.trackingNumber}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Empty State */}
        {orders.length === 0 && (
          <div className="text-center py-12">
            <Package className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No orders</h3>
            <p className="mt-1 text-sm text-gray-500">You haven&apos;t placed any orders yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
