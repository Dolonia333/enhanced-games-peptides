'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';

export default function AdminPage() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear any auth state here
    localStorage.removeItem('isAuthenticated');
    router.push('/account');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
            <div className="flex gap-4">
              <Button
                onClick={() => router.push('/orders')}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                View Orders
              </Button>
              <Button 
                variant="outline"
                onClick={handleLogout}
                className="text-red-600 hover:text-red-700"
              >
                Logout
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Quick Stats */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-blue-900">Total Orders</h3>
              <p className="text-3xl font-bold text-blue-600">124</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-green-900">Revenue</h3>
              <p className="text-3xl font-bold text-green-600">$12,450</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-purple-900">Active Users</h3>
              <p className="text-3xl font-bold text-purple-600">45</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <div className="border rounded-lg divide-y">
              <div className="p-4 hover:bg-gray-50">
                <p className="font-medium">New Order #1234</p>
                <p className="text-sm text-gray-500">2 minutes ago</p>
              </div>
              <div className="p-4 hover:bg-gray-50">
                <p className="font-medium">User Registration</p>
                <p className="text-sm text-gray-500">15 minutes ago</p>
              </div>
              <div className="p-4 hover:bg-gray-50">
                <p className="font-medium">Support Ticket #567</p>
                <p className="text-sm text-gray-500">1 hour ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
