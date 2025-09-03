"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Button, CTAButton, SecondaryButton } from "@/components/ui/Button";
import { Product, ProductTier } from "@/types/product";
import { Filter, ShoppingCart, Star, Clock, Shield, Truck } from "lucide-react";
import PRODUCTS from "@/data/products";

export default function ProductsPage() {
  const [products] = useState<Product[]>(PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTier, setSelectedTier] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");

  // Get unique categories from products
  const categories = useMemo(() => {
    const cats = [...new Set(products.map(p => p.category))];
    return cats;
  }, [products]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by tier
    if (selectedTier !== "all") {
      filtered = filtered.filter(p => p.tier === selectedTier);
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.priceOneTime - b.priceOneTime;
        case "price-high":
          return b.priceOneTime - a.priceOneTime;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [products, selectedCategory, selectedTier, sortBy]);

  const getTierColor = (tier: ProductTier) => {
    switch (tier) {
      case ProductTier.GREAT:
        return "bg-green-100 text-green-800 border-green-200";
      case ProductTier.ADVANCED:
        return "bg-blue-100 text-blue-800 border-blue-200";
      case ProductTier.SUPER_ENHANCED:
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#111111] to-[#222222]">
      {/* Header */}
      <div className="bg-gray-900/50 backdrop-blur-sm border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              Peptide Products
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive range of research-grade peptides, 
              formulated for optimal performance and results.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-900/30 backdrop-blur-sm border-gray-800 rounded-lg shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-gray-500" />
                <span className="font-medium text-gray-700">Filter:</span>
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>

              {/* Tier Filter */}
              <select
                value={selectedTier}
                onChange={(e) => setSelectedTier(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Tiers</option>
                <option value={ProductTier.GREAT}>Great</option>
                <option value={ProductTier.ADVANCED}>Advanced</option>
                <option value={ProductTier.SUPER_ENHANCED}>Super Enhanced</option>
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-gray-300">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Product Image */}
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full border ${getTierColor(product.tier)}`}>
                      {product.tier}
                    </span>
                  </div>
                  {product.rxRequired && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800 border border-red-200">
                        Rx Required
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Peptides */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">Peptides:</p>
                    <div className="flex flex-wrap gap-1">
                      {product.peptides.slice(0, 3).map((peptide) => (
                        <span
                          key={peptide}
                          className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded"
                        >
                          {peptide}
                        </span>
                      ))}
                      {product.peptides.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-gray-100 text-gray-300 rounded">
                          +{product.peptides.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <ul className="space-y-1">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <Star size={12} className="text-yellow-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-white">
                        ${product.priceOneTime}
                      </span>
                      {product.priceSubscription && (
                        <span className="text-sm text-gray-500">
                          (${product.priceSubscription}/month)
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Stock Status */}
                  <div className="flex items-center gap-2 mb-4">
                    {product.inStock ? (
                      <>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-green-600">In Stock</span>
                      </>
                    ) : (
                      <>
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm text-red-600">Out of Stock</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="p-6 pt-0">
                  <div className="flex gap-3">
                    <SecondaryButton className="flex-1">
                      Learn More
                    </SecondaryButton>
                    <Button
                      disabled={!product.inStock}
                      className="flex items-center gap-2"
                    >
                      <ShoppingCart size={16} />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Filter size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No products found
            </h3>
            <p className="text-gray-300">
              Try adjusting your filters to see more products.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
