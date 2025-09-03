# Enhanced Games Peptides Platform

A comprehensive HIPAA-compliant health platform for peptide delivery, featuring personalized consultations, blood work analysis, and subscription-based peptide therapy.

![Enhanced Games Logo](https://via.placeholder.com/200x80/000000/00ffff?text=Enhanced+Games)

## 🚀 Features

### Core Features
- **Personalized Health Quiz** - Comprehensive assessment to determine optimal peptide protocols
- **Telehealth Consultations** - Connect with licensed healthcare providers
- **Blood Work Integration** - Lab Corp integration for comprehensive health analysis
- **Subscription Management** - Recurring peptide deliveries with Stripe integration
- **HIPAA Compliance** - Full healthcare data protection and privacy compliance

### Technical Features
- **Next.js 15.4.6** with App Router and Turbopack
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS v4** with Enhanced Games custom design system
- **Framer Motion** for smooth animations and interactions
- **Stripe Integration** for payments and subscription management
- **Responsive Design** optimized for all devices
- **SEO Optimized** with comprehensive metadata and structured data

## 🎨 Brand Guidelines

### Colors
- **EG Black**: `#000000` - Primary brand color
- **EG Blue**: `#0064ff` - Secondary brand color  
- **EG Cyan**: `#00ffff` - Accent color for highlights and CTAs

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.4.6 (React 19.1.0)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion 12.x
- **Icons**: Lucide React
- **Forms**: React Hook Form (planned)
- **State Management**: Zustand (planned)

### Backend & Services
- **API Routes**: Next.js API Routes
- **Database**: Prisma ORM (planned)
- **Authentication**: NextAuth.js (planned)
- **Payments**: Stripe
- **Email**: SendGrid / AWS SES / Resend
- **File Storage**: AWS S3 / Cloudinary
- **Analytics**: Google Analytics 4

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint
- **Formatting**: Prettier (planned)
- **Testing**: Jest (planned)
- **Type Checking**: TypeScript
- **Git Hooks**: Husky (planned)

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Setup
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd enhanced-games-peptides
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   ```bash
   # Copy the example environment file
   cp .env.example .env.local
   
   # Edit .env.local with your actual values
   # Required for basic functionality:
   # - NEXTAUTH_SECRET
   # - STRIPE_SECRET_KEY
   # - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Check TypeScript types

## 📁 Project Structure

```
enhanced-games-peptides/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Landing page
│   │   ├── quiz/              # Health assessment quiz
│   │   ├── products/          # Product catalog
│   │   ├── consult/           # Telehealth consultations
│   │   ├── bloodwork/         # Lab results and analysis
│   │   └── account/           # User dashboard
│   ├── components/            # Reusable components
│   │   ├── ui/                # Core UI components
│   │   ├── layout/            # Layout components
│   │   ├── sections/          # Page sections
│   │   ├── forms/             # Form components
│   │   └── branding/          # Brand elements
│   ├── lib/                   # Utility functions
│   │   ├── stripe.ts          # Stripe integration
│   │   └── utils.ts           # Helper utilities
│   ├── types/                 # TypeScript definitions
│   │   ├── product.ts         # Product types
│   │   ├── user.ts            # User types
│   │   └── order.ts           # Order types
│   └── styles/                # Global styles
│       └── globals.css        # Global CSS with design system
├── public/                    # Static assets
├── docs/                      # Documentation
├── .env.example               # Environment variables template
├── .env.local                 # Local environment (not committed)
└── README.md                  # This file
```

## 🧪 Components Library

### UI Components
- **Button** - Primary, secondary, and CTA variants
- **Card** - Product cards and content containers  
- **Modal** - Overlays and dialogs
- **LoadingSpinner** - Loading states and skeletons
- **FeatureCard** - Benefit and feature displays

### Layout Components
- **Header** - Navigation with mobile-responsive menu
- **Footer** - Links, compliance info, and trust signals
- **Logo** - Enhanced Games branding elements

### Section Components
- **HeroSection** - Landing page hero with lifestyle gallery
- **ProductShowcase** - Featured products and pricing tiers
- **BenefitCategories** - Health and performance benefits
- **TrustSignals** - Statistics and credibility indicators

## 💳 Stripe Integration

### Features
- **Subscription Management** - Recurring peptide deliveries
- **Customer Portal** - Self-service billing and payment updates
- **Webhook Handling** - Real-time payment status updates
- **Payment Methods** - Cards, ACH, and digital wallets

### Configuration
1. Set up Stripe account and get API keys
2. Configure webhook endpoint: `/api/webhooks/stripe`
3. Add required environment variables:
   ```env
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   ```

## 🌐 Deployment

### Recommended Platforms
- **Vercel** (Recommended for Next.js)
- **AWS Amplify**
- **Netlify**

### Environment Variables
Ensure all required environment variables are set in your deployment platform.

---

**Enhanced Games Peptides** - Elevating human performance through precision peptide therapy.

*Built with ❤️ using Next.js, TypeScript, and Tailwind CSS*
