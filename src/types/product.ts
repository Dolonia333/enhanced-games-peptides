// Product Types for Enhanced Games Peptides

export enum ProductTier {
  GREAT = 'GREAT',
  ADVANCED = 'ADVANCED',
  SUPER_ENHANCED = 'SUPER_ENHANCED'
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription?: string;
  tier: ProductTier;
  rxRequired: boolean;
  priceOneTime: number;
  priceSubscription?: number;
  
  // Product Details
  peptides: string[]; // Array of peptide names
  dosage: string;
  cycleLength: number; // Days
  category: string;
  
  // Media
  image: string;
  gallery?: string[];
  
  // Features & Benefits
  features: string[];
  benefits: string[];
  
  // Stock & Availability
  inStock: boolean;
  estimatedDelivery?: string;
  
  // SEO
  metaTitle?: string;
  metaDescription?: string;
}

export interface ProductKit {
  id: string;
  name: string;
  description: string;
  products: Product[];
  bundlePrice: number;
  savingsAmount: number;
  image: string;
  features: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  isSubscription: boolean;
  customizations?: Record<string, any>;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  discountCode?: string;
  discountAmount: number;
}

// Peptide Categories
export enum PeptideCategory {
  PERFORMANCE = 'performance',
  COGNITIVE = 'cognitive',
  RECOVERY = 'recovery',
  LONGEVITY = 'longevity',
  AESTHETICS = 'aesthetics'
}

// Benefits that users can select in quiz
export interface PeptideBenefit {
  id: string;
  category: PeptideCategory;
  name: string;
  description: string;
  relatedPeptides: string[];
}

export const PEPTIDE_BENEFITS: Record<PeptideCategory, PeptideBenefit[]> = {
  [PeptideCategory.PERFORMANCE]: [
    {
      id: 'muscle-growth',
      category: PeptideCategory.PERFORMANCE,
      name: 'Increased muscle growth & strength',
      description: 'Enhanced protein synthesis and muscle fiber development',
      relatedPeptides: ['IGF-1', 'GHRP-6', 'CJC-1295']
    },
    {
      id: 'recovery',
      category: PeptideCategory.PERFORMANCE,
      name: 'Faster recovery after workouts',
      description: 'Reduced muscle soreness and quicker tissue repair',
      relatedPeptides: ['BPC-157', 'TB-500', 'IGF-1']
    },
    {
      id: 'endurance',
      category: PeptideCategory.PERFORMANCE,
      name: 'Enhanced endurance',
      description: 'Improved cardiovascular performance and oxygen utilization',
      relatedPeptides: ['EPO', 'AICAR', 'GW-501516']
    },
    {
      id: 'fat-loss',
      category: PeptideCategory.PERFORMANCE,
      name: 'Fat loss acceleration',
      description: 'Increased metabolic rate and improved body composition',
      relatedPeptides: ['AOD-9604', 'Tesamorelin', 'CJC-1295']
    },
    {
      id: 'injury-healing',
      category: PeptideCategory.PERFORMANCE,
      name: 'Injury healing & tissue repair',
      description: 'Accelerated healing of muscles, tendons, and ligaments',
      relatedPeptides: ['BPC-157', 'TB-500', 'GHK-Cu']
    }
  ],
  [PeptideCategory.COGNITIVE]: [
    {
      id: 'memory',
      category: PeptideCategory.COGNITIVE,
      name: 'Improved memory & recall',
      description: 'Enhanced cognitive function and information retention',
      relatedPeptides: ['Noopept', 'PRL-8-53', 'NSI-189']
    },
    {
      id: 'focus',
      category: PeptideCategory.COGNITIVE,
      name: 'Sharper focus & mental clarity',
      description: 'Improved concentration and cognitive processing',
      relatedPeptides: ['Modafinil', 'Phenylpiracetam', 'Adrafinil']
    },
    {
      id: 'mood',
      category: PeptideCategory.COGNITIVE,
      name: 'Mood regulation',
      description: 'Balanced neurotransmitter function and emotional stability',
      relatedPeptides: ['Selank', 'Semax', 'P21']
    },
    {
      id: 'neuroprotection',
      category: PeptideCategory.COGNITIVE,
      name: 'Neuroprotection',
      description: 'Protection against cognitive decline and brain aging',
      relatedPeptides: ['Cerebrolysin', 'Dihexa', 'NSI-189']
    }
  ],
  [PeptideCategory.RECOVERY]: [
    {
      id: 'sleep-quality',
      category: PeptideCategory.RECOVERY,
      name: 'Improved sleep quality',
      description: 'Deeper, more restorative sleep cycles',
      relatedPeptides: ['DSIP', 'Melatonin', 'GHRP-6']
    },
    {
      id: 'stress-management',
      category: PeptideCategory.RECOVERY,
      name: 'Better stress management',
      description: 'Improved cortisol regulation and stress response',
      relatedPeptides: ['Selank', 'PT-141', 'Oxytocin']
    },
    {
      id: 'inflammation',
      category: PeptideCategory.RECOVERY,
      name: 'Reduced inflammation',
      description: 'Lower systemic inflammation and faster recovery',
      relatedPeptides: ['BPC-157', 'TB-500', 'LL-37']
    }
  ],
  [PeptideCategory.LONGEVITY]: [
    {
      id: 'anti-aging',
      category: PeptideCategory.LONGEVITY,
      name: 'Anti-aging benefits',
      description: 'Cellular regeneration and longevity enhancement',
      relatedPeptides: ['Epitalon', 'GHK-Cu', 'Thymalin']
    },
    {
      id: 'immune-function',
      category: PeptideCategory.LONGEVITY,
      name: 'Enhanced immune function',
      description: 'Stronger immune system and disease resistance',
      relatedPeptides: ['Thymosin Alpha-1', 'LL-37', 'Thymalin']
    },
    {
      id: 'cellular-repair',
      category: PeptideCategory.LONGEVITY,
      name: 'Cellular repair & regeneration',
      description: 'Enhanced DNA repair and cellular health',
      relatedPeptides: ['Epitalon', 'GHK-Cu', 'NAD+']
    }
  ],
  [PeptideCategory.AESTHETICS]: [
    {
      id: 'skin-health',
      category: PeptideCategory.AESTHETICS,
      name: 'Improved skin health',
      description: 'Enhanced collagen production and skin elasticity',
      relatedPeptides: ['GHK-Cu', 'Matrixyl', 'Argireline']
    },
    {
      id: 'hair-growth',
      category: PeptideCategory.AESTHETICS,
      name: 'Hair growth & thickness',
      description: 'Improved hair follicle health and growth',
      relatedPeptides: ['Copper Peptides', 'Thymosin Beta-4', 'GHK-Cu']
    },
    {
      id: 'body-composition',
      category: PeptideCategory.AESTHETICS,
      name: 'Better body composition',
      description: 'Improved muscle-to-fat ratio and physique',
      relatedPeptides: ['AOD-9604', 'CJC-1295', 'Ipamorelin']
    }
  ]
};

export default Product;
