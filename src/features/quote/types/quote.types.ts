export type ServiceCategory =
  | "snow-clearing"
  | "apartment-cleaning"
  | "junk-removal"
  | "grass-mowing";

export type SnowPlanType = "one-time" | "seasonal-contract";

export type ApartmentRecurrence = "one-time" | "weekly" | "bi-weekly" | "monthly";
export type CleaningIntensity = "standard" | "deep-clean" | "move-in-out";

export interface SnowClearingDetails {
  category: "snow-clearing";
  planType: SnowPlanType;
  propertyOption: string;
  price: number;
}

export interface ApartmentCleaningDetails {
  category: "apartment-cleaning";
  size: string;
  basePrice: number;
  recurrence: ApartmentRecurrence;
  intensity: CleaningIntensity;
  notes?: string;
}

export interface JunkRemovalDetails {
  category: "junk-removal";
  photoDataUrl?: string;
  photoName?: string;
  description?: string;
  accessNotes?: string;
}

export interface GrassMowingDetails {
  category: "grass-mowing";
  lawnSize: string;
  price: number;
}

export type QuoteDetails =
  | SnowClearingDetails
  | ApartmentCleaningDetails
  | JunkRemovalDetails
  | GrassMowingDetails;

export interface ScheduleAndAddress {
  preferredDate: string;
  timeWindow: "morning" | "afternoon" | "evening" | "flexible";
  fullName: string;
  contact: string;
  address: string;
  city: string;
  accessNotes?: string;
}

/**
 * Future-proof Discount Model (Admin Dashboard configurable)
 */
export interface AdminDiscount {
  id: string;
  code?: string;
  label: string;
  type: "percentage" | "fixed";
  value: number; // e.g. 15 for 15%, or 20 for $20 off
  applicableCategories?: ServiceCategory[]; // Empty/undefined = applies to all
  isActive: boolean;
}

export interface PriceBreakdown {
  isCustomQuote: boolean;
  subtotal: number;
  discountAmount: number;
  total: number;
  appliedDiscount?: AdminDiscount;
}