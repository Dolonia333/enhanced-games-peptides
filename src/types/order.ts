// Order Types for Enhanced Games Peptides

import { Product, Cart, CartItem } from './product';
import { Address } from './user';

export interface Order {
  id: string;
  userId: string;
  orderNumber: string;
  
  // Order details
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
  currency: 'usd';
  
  // Customer information
  shippingAddress: Address;
  billingAddress: Address;
  customerNotes?: string;
  
  // Order status
  status: OrderStatus;
  fulfillmentStatus: FulfillmentStatus;
  paymentStatus: PaymentStatus;
  
  // Dates
  placedAt: Date;
  confirmedAt?: Date;
  shippedAt?: Date;
  deliveredAt?: Date;
  cancelledAt?: Date;
  
  // Payment information
  stripePaymentIntentId?: string;
  paymentMethod: PaymentMethod;
  
  // Shipping information
  shippingMethod: ShippingMethod;
  trackingNumber?: string;
  trackingUrl?: string;
  carrier?: 'fedex' | 'ups' | 'usps' | 'dhl';
  estimatedDelivery?: Date;
  
  // Prescription requirements
  requiresPrescription: boolean;
  prescriptionId?: string;
  prescriptionVerifiedAt?: Date;
  
  // Special handling
  isGift: boolean;
  giftMessage?: string;
  specialInstructions?: string;
  
  // Compliance & verification
  ageVerificationRequired: boolean;
  ageVerifiedAt?: Date;
  signatureRequired: boolean;
  
  // Refunds & returns
  isReturnable: boolean;
  returnWindow: number; // days
  refunds?: Refund[];
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  product: Product;
  
  // Item details
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  
  // Subscription
  isSubscription: boolean;
  subscriptionId?: string;
  
  // Customizations
  customizations?: Record<string, any>;
  dosage?: string;
  instructions?: string;
  
  // Prescription
  prescriptionId?: string;
  requiresPrescription: boolean;
  
  // Fulfillment
  status: OrderItemStatus;
  trackingNumber?: string;
  shippedAt?: Date;
  deliveredAt?: Date;
}

export enum OrderStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  PROCESSING = 'processing',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
  REFUNDED = 'refunded',
  RETURNED = 'returned',
  ON_HOLD = 'on_hold'
}

export enum FulfillmentStatus {
  PENDING = 'pending',
  PRESCRIPTION_REVIEW = 'prescription_review',
  IN_PREPARATION = 'in_preparation',
  READY_TO_SHIP = 'ready_to_ship',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  FAILED_DELIVERY = 'failed_delivery',
  RETURNED_TO_SENDER = 'returned_to_sender'
}

export enum PaymentStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
  REFUNDED = 'refunded',
  PARTIALLY_REFUNDED = 'partially_refunded'
}

export enum OrderItemStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  IN_PREPARATION = 'in_preparation',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
  RETURNED = 'returned'
}

export interface PaymentMethod {
  type: 'card' | 'bank_account' | 'paypal' | 'apple_pay' | 'google_pay';
  last4?: string;
  brand?: string;
  expiryMonth?: number;
  expiryYear?: number;
  fingerprint?: string;
}

export interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDays: number;
  carrier: string;
  serviceLevel: 'standard' | 'expedited' | 'overnight' | 'two_day';
  trackingIncluded: boolean;
  signatureRequired: boolean;
  insuranceIncluded: boolean;
}

export interface Refund {
  id: string;
  orderId: string;
  stripeRefundId: string;
  
  // Refund details
  amount: number;
  reason: RefundReason;
  status: RefundStatus;
  
  // Dates
  requestedAt: Date;
  processedAt?: Date;
  completedAt?: Date;
  
  // Details
  customerReason?: string;
  internalNotes?: string;
  
  // Items being refunded
  refundedItems: RefundItem[];
}

export interface RefundItem {
  orderItemId: string;
  quantity: number;
  amount: number;
  reason: string;
}

export enum RefundReason {
  CUSTOMER_REQUEST = 'customer_request',
  DEFECTIVE_PRODUCT = 'defective_product',
  WRONG_ITEM = 'wrong_item',
  NOT_AS_DESCRIBED = 'not_as_described',
  ARRIVED_LATE = 'arrived_late',
  DUPLICATE_ORDER = 'duplicate_order',
  FRAUDULENT = 'fraudulent',
  OTHER = 'other'
}

export enum RefundStatus {
  REQUESTED = 'requested',
  APPROVED = 'approved',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  FAILED = 'failed',
  CANCELLED = 'cancelled'
}

// Shipping and tracking
export interface TrackingUpdate {
  id: string;
  orderId: string;
  
  // Tracking details
  status: TrackingStatus;
  location: string;
  timestamp: Date;
  description: string;
  
  // Carrier information
  carrier: string;
  trackingNumber: string;
}

export enum TrackingStatus {
  LABEL_CREATED = 'label_created',
  PICKED_UP = 'picked_up',
  IN_TRANSIT = 'in_transit',
  OUT_FOR_DELIVERY = 'out_for_delivery',
  DELIVERED = 'delivered',
  ATTEMPTED_DELIVERY = 'attempted_delivery',
  AVAILABLE_FOR_PICKUP = 'available_for_pickup',
  EXCEPTION = 'exception',
  RETURNED_TO_SENDER = 'returned_to_sender'
}

// Inventory management
export interface InventoryItem {
  id: string;
  productId: string;
  sku: string;
  
  // Stock levels
  quantityAvailable: number;
  quantityReserved: number;
  quantityOnOrder: number;
  reorderPoint: number;
  
  // Batch/lot tracking
  batchNumber?: string;
  lotNumber?: string;
  expirationDate?: Date;
  manufacturingDate?: Date;
  
  // Storage requirements
  storageConditions: string;
  location: string;
  
  // Compliance
  ndcNumber?: string; // National Drug Code
  requires21CFRPart11: boolean; // FDA regulation compliance
}

export interface BackorderItem {
  id: string;
  productId: string;
  userId: string;
  orderId?: string;
  
  // Backorder details
  quantityRequested: number;
  requestedAt: Date;
  estimatedRestockDate?: Date;
  notifyWhenAvailable: boolean;
  
  // Status
  status: 'active' | 'partially_fulfilled' | 'fulfilled' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'urgent';
}

export default Order;
