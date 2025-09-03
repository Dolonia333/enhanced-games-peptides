# Product Management System

## Overview
This product catalog system makes it incredibly easy to plug products in and out of your website. No coding required!

## How to Add a New Product

1. **Open the products data file**: `src/data/products.ts`
2. **Add your new product** to the `PRODUCTS` array using this template:

```typescript
{
  id: "your-product-slug",
  name: "Your Product Name",
  slug: "your-product-slug",
  description: "Brief description of your product",
  longDescription: "Detailed description of your product and its benefits",
  tier: ProductTier.GREAT, // Options: GREAT, ADVANCED, SUPER_ENHANCED
  rxRequired: false, // true if prescription required
  priceOneTime: 199,
  priceSubscription: 169, // optional
  peptides: ["Peptide1", "Peptide2"],
  dosage: "Dosage instructions",
  cycleLength: 60, // days
  category: "Your Category",
  image: "/images/products/your-product-image.jpg",
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
}
```

3. **Add your product image** to `public/images/products/` (optional - the system will create a placeholder if no image exists)
4. **Save the file** - the website will automatically update!

## How to Remove a Product

1. **Open**: `src/data/products.ts`
2. **Find the product** you want to remove
3. **Comment it out** or **delete the entire product object**
4. **Save the file** - the product will disappear from the website immediately!

## Features Included

 **Dynamic Product Catalog** - Products automatically appear/disappear
 **Advanced Filtering** - Filter by tier, category, prescription requirements
 **Sorting Options** - Sort by name, price, or tier
 **Grid/List Views** - Switch between different display modes
 **Responsive Design** - Works on all devices
 **SEO Optimized** - Meta titles and descriptions for each product
 **Stock Management** - In-stock/out-of-stock indicators
 **Subscription Pricing** - Support for one-time and subscription pricing
 **Image Placeholders** - Automatic placeholder generation if images are missing

## Product Categories
- Performance
- Recovery
- Cognitive
- Longevity
- Aesthetics

## Product Tiers
- **GREAT** - Entry-level products
- **ADVANCED** - Professional-grade products
- **SUPER_ENHANCED** - Premium, high-performance products

## File Structure
```
src/
 data/
    products.ts          # All product data
 app/
    products/
        page.tsx         # Product catalog page
 types/
     product.ts           # Product type definitions

public/
 images/
     products/            # Product images (optional)
```

## Quick Start
1. Visit `http://localhost:3002/products` to see your product catalog
2. Edit `src/data/products.ts` to add/remove products
3. Changes appear instantly with hot reload!

## Support
The system automatically handles:
- Missing product images (creates placeholders)
- Empty product arrays (shows "no products" message)
- Invalid data (graceful error handling)
- SEO optimization
- Mobile responsiveness
