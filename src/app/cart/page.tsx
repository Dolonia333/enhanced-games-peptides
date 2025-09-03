'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

export default function CartPage() {
  const { items: cartItems, updateQuantity, removeItem, total } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items Section */}
          <div className="flex-grow bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>
            
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="py-6 flex">
                    <div className="flex-shrink-0 w-24 h-24 relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="ml-6 flex-1 flex flex-col">
                      <div className="flex justify-between">
                        <h3 className="text-lg font-medium">{item.name}</h3>
                        <p className="text-lg font-medium">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="text-gray-600">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary Section */}
          <div className="lg:w-96">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Order Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <Button
                  className="w-full bg-amber-400 hover:bg-amber-500 text-black"
                  size="lg"
                  disabled={cartItems.length === 0}
                >
                  Proceed to Checkout
                </Button>
                {cartItems.length > 0 && (
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Items in your cart are not reserved. Check out now to secure your purchase.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
