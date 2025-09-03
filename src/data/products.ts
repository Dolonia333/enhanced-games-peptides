// Product Data - Easily pluggable/unpluggable products
// To add a new product: Just add it to the PRODUCTS array below
// To remove a product: Just comment it out or remove it from the array

import { Product, ProductTier } from "@/types/product";

export const PRODUCTS: Product[] = [
  {
    id: "performance-boost-kit",
    name: "Performance Boost Kit",
    slug: "performance-boost-kit",
    description: "Advanced peptide stack for maximum athletic performance",
    longDescription: "Our Performance Boost Kit combines synergistic peptides to enhance muscle growth, recovery, and endurance. Perfect for athletes looking to push their limits.",
    tier: ProductTier.ADVANCED,
    rxRequired: true,
    priceOneTime: 299,
    priceSubscription: 249,
    peptides: ["IGF-1", "GHRP-6", "CJC-1295", "BPC-157"],
    dosage: "2-4mg daily",
    cycleLength: 90,
    category: "Performance",
    image: "/images/products/hero-product.jpg",
    features: [
      "Muscle growth acceleration",
      "Enhanced recovery time",
      "Increased endurance",
      "Joint & tendon repair"
    ],
    benefits: [
      "15-25% increase in lean muscle mass",
      "50% faster recovery after workouts",
      "Improved cardiovascular performance",
      "Reduced injury risk"
    ],
    inStock: true,
    estimatedDelivery: "2-3 business days",
    metaTitle: "Performance Boost Kit - Enhanced Games Peptides",
    metaDescription: "Advanced peptide stack for maximum athletic performance with IGF-1, GHRP-6, CJC-1295, and BPC-157"
  },

  {
    id: "recovery-master-kit",
    name: "Recovery Master Kit",
    slug: "recovery-master-kit",
    description: "Complete recovery solution for optimal tissue repair",
    longDescription: "The Recovery Master Kit focuses on comprehensive tissue repair and accelerated healing. Essential for athletes with high training loads or recovering from injuries.",
    tier: ProductTier.GREAT,
    rxRequired: false,
    priceOneTime: 199,
    priceSubscription: 169,
    peptides: ["BPC-157", "TB-500", "GHK-Cu"],
    dosage: "1-2mg daily",
    cycleLength: 60,
    category: "Recovery",
    image: "/images/products/hero-product.jpg",
    features: [
      "Accelerated tissue repair",
      "Reduced inflammation",
      "Enhanced collagen production",
      "Improved sleep quality"
    ],
    benefits: [
      "70% faster injury healing",
      "Reduced chronic inflammation",
      "Better sleep quality",
      "Improved joint mobility"
    ],
    inStock: true,
    estimatedDelivery: "1-2 business days",
    metaTitle: "Recovery Master Kit - Enhanced Games Peptides",
    metaDescription: "Complete recovery solution with BPC-157, TB-500, and GHK-Cu for optimal tissue repair"
  },

  {
    id: "cognitive-enhancer-kit",
    name: "Cognitive Enhancer Kit",
    slug: "cognitive-enhancer-kit",
    description: "Mental performance and cognitive enhancement peptides",
    longDescription: "Enhance your mental performance with our Cognitive Enhancer Kit. Designed for peak mental clarity, focus, and cognitive function.",
    tier: ProductTier.SUPER_ENHANCED,
    rxRequired: true,
    priceOneTime: 349,
    priceSubscription: 299,
    peptides: ["Noopept", "Selank", "Semax", "P21"],
    dosage: "300-600mg daily",
    cycleLength: 60,
    category: "Cognitive",
    image: "/images/products/hero-product.jpg",
    features: [
      "Enhanced memory retention",
      "Improved mental clarity",
      "Reduced anxiety",
      "Neuroprotective effects"
    ],
    benefits: [
      "30% improvement in memory tasks",
      "Better focus and concentration",
      "Reduced mental fatigue",
      "Enhanced learning capacity"
    ],
    inStock: true,
    estimatedDelivery: "2-3 business days",
    metaTitle: "Cognitive Enhancer Kit - Enhanced Games Peptides",
    metaDescription: "Mental performance peptides including Noopept, Selank, Semax, and P21 for cognitive enhancement"
  },

  {
    id: "anti-aging-elixir",
    name: "Anti-Aging Elixir",
    slug: "anti-aging-elixir",
    description: "Comprehensive anti-aging peptide therapy",
    longDescription: "Our Anti-Aging Elixir combines the most effective longevity peptides to combat aging at the cellular level and promote overall vitality.",
    tier: ProductTier.SUPER_ENHANCED,
    rxRequired: true,
    priceOneTime: 399,
    priceSubscription: 349,
    peptides: ["Epitalon", "GHK-Cu", "Thymosin Alpha-1", "CJC-1295"],
    dosage: "2-3mg daily",
    cycleLength: 120,
    category: "Longevity",
    image: "/images/products/hero-product.jpg",
    features: [
      "Cellular regeneration",
      "Enhanced immune function",
      "Improved skin health",
      "Telomere protection"
    ],
    benefits: [
      "Slowed cellular aging process",
      "Stronger immune response",
      "Improved skin elasticity",
      "Enhanced vitality"
    ],
    inStock: true,
    estimatedDelivery: "2-3 business days",
    metaTitle: "Anti-Aging Elixir - Enhanced Games Peptides",
    metaDescription: "Comprehensive anti-aging peptide therapy with Epitalon, GHK-Cu, and Thymosin Alpha-1"
  },

  // ===== ADD NEW PRODUCTS BELOW THIS LINE =====
  // Example of how to add a new product:
  /*
  {
    id: "your-product-slug",
    name: "Your Product Name",
    slug: "your-product-slug",
    description: "Brief description of your product",
    longDescription: "Detailed description of your product and its benefits",
    tier: ProductTier.GREAT, // or ADVANCED or SUPER_ENHANCED
    rxRequired: false, // or true if prescription required
    priceOneTime: 199,
    priceSubscription: 169, // optional
    peptides: ["Peptide1", "Peptide2"],
    dosage: "Dosage instructions",
    cycleLength: 60, // days
    category: "Your Category",
    image: "/images/products/hero-product.jpg",
    features: [
      "Feature 1",
      "Feature 2"
    ],
    benefits: [
      "Benefit 1",
      "Benefit 2"
    ],
    inStock: true,
    estimatedDelivery: "1-2 business days",
    metaTitle: "Your Product - Enhanced Games Peptides",
    metaDescription: "Description for SEO"
  },
  */

  // ===== TO REMOVE A PRODUCT =====
  // Simply comment out or delete the product object above
  // The page will automatically update to reflect the changes
];

// Export individual products for easy access
export const getProductById = (id: string): Product | undefined => {
  return PRODUCTS.find(product => product.id === id);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return PRODUCTS.find(product => product.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  return PRODUCTS.filter(product => product.category === category);
};

export const getProductsByTier = (tier: ProductTier): Product[] => {
  return PRODUCTS.filter(product => product.tier === tier);
};

export default PRODUCTS;
