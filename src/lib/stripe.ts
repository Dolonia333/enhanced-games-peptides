// Stripe integration for Enhanced Games Peptides
import Stripe from 'stripe';
import { loadStripe } from '@stripe/stripe-js';

// Server-side Stripe instance
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-07-30.basil',
  typescript: true,
});

// Client-side Stripe promise
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export const getStripe = () => stripePromise;

// Subscription management for peptide cycles
export const createSubscription = async (customerId: string, priceId: string, metadata?: Record<string, string>) => {
  try {
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
      payment_behavior: 'default_incomplete',
      expand: ['latest_invoice.payment_intent'],
      metadata: {
        type: 'peptide_subscription',
        ...metadata,
      },
    });

    return subscription;
  } catch (error) {
    console.error('Error creating subscription:', error);
    throw error;
  }
};

// Create customer
export const createCustomer = async (email: string, name: string, metadata?: Record<string, string>) => {
  try {
    const customer = await stripe.customers.create({
      email,
      name,
      metadata: {
        source: 'enhanced_games_peptides',
        ...metadata,
      },
    });

    return customer;
  } catch (error) {
    console.error('Error creating customer:', error);
    throw error;
  }
};

// Create payment intent for one-time purchases
export const createPaymentIntent = async (
  amount: number,
  currency: string = 'usd',
  customerId?: string,
  metadata?: Record<string, string>
) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      customer: customerId,
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        source: 'enhanced_games_peptides',
        ...metadata,
      },
    });

    return paymentIntent;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
};

// Update subscription
export const updateSubscription = async (subscriptionId: string, updates: Partial<Stripe.SubscriptionUpdateParams>) => {
  try {
    const subscription = await stripe.subscriptions.update(subscriptionId, updates);
    return subscription;
  } catch (error) {
    console.error('Error updating subscription:', error);
    throw error;
  }
};

// Cancel subscription
export const cancelSubscription = async (subscriptionId: string, immediately: boolean = false) => {
  try {
    if (immediately) {
      const subscription = await stripe.subscriptions.cancel(subscriptionId);
      return subscription;
    } else {
      const subscription = await stripe.subscriptions.update(subscriptionId, {
        cancel_at_period_end: true,
      });
      return subscription;
    }
  } catch (error) {
    console.error('Error canceling subscription:', error);
    throw error;
  }
};

// Create product and price for peptide
export const createPeptideProduct = async (
  name: string,
  description: string,
  images: string[],
  metadata: Record<string, string>
) => {
  try {
    const product = await stripe.products.create({
      name,
      description,
      images,
      metadata: {
        type: 'peptide',
        ...metadata,
      },
    });

    return product;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

// Create price for product
export const createPrice = async (
  productId: string,
  unitAmount: number,
  currency: string = 'usd',
  recurring?: { interval: 'month' | 'year'; interval_count?: number }
) => {
  try {
    const price = await stripe.prices.create({
      product: productId,
      unit_amount: Math.round(unitAmount * 100), // Convert to cents
      currency,
      recurring,
    });

    return price;
  } catch (error) {
    console.error('Error creating price:', error);
    throw error;
  }
};

// Webhook handler for Stripe events
export const handleWebhookEvent = async (event: Stripe.Event) => {
  switch (event.type) {
    case 'customer.subscription.created':
      const subscriptionCreated = event.data.object as Stripe.Subscription;
      console.log('Subscription created:', subscriptionCreated.id);
      // Handle subscription creation (e.g., update database, send welcome email)
      break;

    case 'customer.subscription.updated':
      const subscriptionUpdated = event.data.object as Stripe.Subscription;
      console.log('Subscription updated:', subscriptionUpdated.id);
      // Handle subscription updates
      break;

    case 'customer.subscription.deleted':
      const subscriptionDeleted = event.data.object as Stripe.Subscription;
      console.log('Subscription deleted:', subscriptionDeleted.id);
      // Handle subscription cancellation
      break;

    case 'invoice.payment_succeeded':
      const invoice = event.data.object as Stripe.Invoice;
      console.log('Payment succeeded for invoice:', invoice.id);
      // Handle successful payment (e.g., fulfill order, send confirmation)
      break;

    case 'invoice.payment_failed':
      const failedInvoice = event.data.object as Stripe.Invoice;
      console.log('Payment failed for invoice:', failedInvoice.id);
      // Handle failed payment (e.g., send notification, retry logic)
      break;

    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log('Payment intent succeeded:', paymentIntent.id);
      // Handle successful one-time payment
      break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }
};

// Utility function to format currency
export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(amount);
};

export default stripe;
