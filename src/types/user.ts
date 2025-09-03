// User Types for Enhanced Games Peptides

import { Order } from './order';

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  dateOfBirth?: Date;
  gender?: 'male' | 'female' | 'other';
  createdAt: Date;
  updatedAt: Date;
  
  // Health & Profile Data
  age?: number;
  weight?: number;
  height?: number;
  activityLevel?: 'sedentary' | 'light' | 'moderate' | 'high' | 'extreme';
  fitnessGoals?: string[];
  medicalConditions?: string[];
  currentMedications?: string[];
  allergies?: string[];
  
  // Quiz & Preference Data
  quizResults?: QuizResults;
  preferences?: UserPreferences;
  
  // Medical Data (HIPAA Protected)
  healthForms?: HealthForm[];
  labResults?: LabResult[];
  consultations?: Consultation[];
  prescriptions?: Prescription[];
  
  // Account Status
  isVerified: boolean;
  ageVerified: boolean;
  consentGiven: boolean;
  hipaaConsent: boolean;
  
  // Subscription & Orders
  stripeCustomerId?: string;
  subscriptions?: Subscription[];
  orders?: Order[];
  
  // Profile Settings
  avatar?: string;
  timezone?: string;
  communicationPreferences?: CommunicationPreferences;
}

export interface QuizResults {
  id: string;
  userId: string;
  completedAt: Date;
  
  // Selected benefits and priorities
  selectedBenefits: string[]; // IDs from PEPTIDE_BENEFITS
  primaryGoals: string[];
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
  
  // Lifestyle factors
  workoutFrequency: number; // days per week
  workoutIntensity: 'low' | 'moderate' | 'high';
  sleepHours: number;
  stressLevel: 1 | 2 | 3 | 4 | 5;
  dietStyle?: 'standard' | 'keto' | 'paleo' | 'vegetarian' | 'vegan';
  
  // Supplement history
  currentSupplements?: string[];
  previousPeptideUse: boolean;
  previousPeptides?: string[];
  
  // AI Recommendations
  recommendedProducts: string[]; // Product IDs
  recommendedTier: 'GREAT' | 'ADVANCED' | 'SUPER_ENHANCED';
  confidenceScore: number; // 0-100
  reasonsForRecommendation: string[];
}

export interface UserPreferences {
  deliverySchedule: 'monthly' | 'bimonthly' | 'quarterly';
  preferredContactMethod: 'email' | 'sms' | 'phone';
  reminderSettings: {
    injectionReminders: boolean;
    refillReminders: boolean;
    consultationReminders: boolean;
  };
  privacySettings: {
    dataSharing: boolean;
    marketingEmails: boolean;
    researchParticipation: boolean;
  };
}

export interface CommunicationPreferences {
  email: boolean;
  sms: boolean;
  phone: boolean;
  push: boolean;
  marketing: boolean;
  educational: boolean;
  reminders: boolean;
}

export interface HealthForm {
  id: string;
  userId: string;
  formType: 'intake' | 'follow-up' | 'adverse-event';
  completedAt: Date;
  
  // Form responses (encrypted)
  responses: Record<string, any>;
  
  // Medical professional review
  reviewedBy?: string; // Physician ID
  reviewedAt?: Date;
  approved: boolean;
  notes?: string;
}

export interface LabResult {
  id: string;
  userId: string;
  orderDate: Date;
  collectionDate?: Date;
  resultsDate?: Date;
  
  // Lab information
  labProvider: string;
  panelType: 'baseline' | 'advanced' | 'comprehensive';
  orderNumber: string;
  
  // Results (encrypted)
  results: Record<string, any>;
  referenceRanges: Record<string, any>;
  flaggedValues: string[];
  
  // Medical review
  interpretation?: string;
  recommendations?: string[];
  reviewedBy?: string; // Physician ID
  reviewedAt?: Date;
}

export interface Consultation {
  id: string;
  userId: string;
  physicianId: string;
  scheduledAt: Date;
  completedAt?: Date;
  duration: number; // minutes
  
  // Consultation type
  consultationType: 'initial' | 'follow-up' | 'check-in' | 'adverse-event';
  isVideoCall: boolean;
  
  // Notes and outcomes (encrypted)
  physicianNotes?: string;
  patientConcerns?: string[];
  recommendations?: string[];
  prescriptionsIssued?: string[]; // Prescription IDs
  
  // Follow-up
  followUpRequired: boolean;
  followUpDate?: Date;
  
  // Ratings
  patientRating?: number; // 1-5
  physicianRating?: number; // 1-5
}

export interface Prescription {
  id: string;
  userId: string;
  physicianId: string;
  consultationId: string;
  issuedAt: Date;
  expiresAt: Date;
  
  // Prescription details
  productId: string;
  dosage: string;
  instructions: string;
  quantity: number;
  refillsAllowed: number;
  refillsUsed: number;
  
  // Status
  status: 'active' | 'filled' | 'expired' | 'cancelled';
  
  // Safety
  contraindications?: string[];
  warnings?: string[];
  monitoringRequired?: string[];
}

export interface Subscription {
  id: string;
  userId: string;
  stripeSubscriptionId: string;
  
  // Subscription details
  productId: string;
  tier: string;
  status: 'active' | 'paused' | 'cancelled' | 'past_due';
  
  // Pricing
  currentPrice: number;
  currency: 'usd';
  billingCycle: 'monthly' | 'quarterly' | 'annual';
  
  // Dates
  startedAt: Date;
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  cancelAt?: Date;
  canceledAt?: Date;
  
  // Delivery preferences
  deliverySchedule: 'monthly' | 'bimonthly' | 'quarterly';
  deliveryAddress: Address;
  
  // Customizations
  customizations?: Record<string, any>;
  
  // Pausing
  pausedAt?: Date;
  pauseReason?: string;
  resumeAt?: Date;
}

export interface Address {
  id: string;
  userId: string;
  
  // Address details
  firstName: string;
  lastName: string;
  company?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  
  // Preferences
  isDefault: boolean;
  isBusinessAddress: boolean;
  deliveryInstructions?: string;
  
  // Validation
  isVerified: boolean;
  verifiedAt?: Date;
}

// Consent and Legal
export interface ConsentRecord {
  id: string;
  userId: string;
  consentType: 'hipaa' | 'terms' | 'privacy' | 'telehealth' | 'age_verification';
  version: string;
  givenAt: Date;
  ipAddress: string;
  userAgent: string;
  
  // Optional additional data
  witnessedBy?: string;
  documentUrl?: string;
}

export interface AuditLog {
  id: string;
  userId: string;
  action: string;
  resourceType: string;
  resourceId: string;
  timestamp: Date;
  ipAddress: string;
  userAgent: string;
  metadata?: Record<string, any>;
}

export default User;
