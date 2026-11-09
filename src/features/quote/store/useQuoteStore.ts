import { create } from "zustand";
import type {
  AdminDiscount,
  QuoteDetails,
  ScheduleAndAddress,
  ServiceCategory,
  SnowPlanType,
} from "../types/quote.types";

interface QuoteStoreState {
  step: 1 | 2 | 3 | 4;
  category: ServiceCategory | null;
  snowPlanType: SnowPlanType | null;
  details: Partial<QuoteDetails> | null;
  schedule: ScheduleAndAddress;
  activeDiscount: AdminDiscount | null;
  isSubmitted: boolean;

  setStep: (step: 1 | 2 | 3 | 4) => void;
  nextStep: () => void;
  prevStep: () => void;

  setCategory: (category: ServiceCategory) => void;
  setSnowPlanType: (planType: SnowPlanType) => void;
  setDetails: (details: Partial<QuoteDetails>) => void;
  setSchedule: (schedule: Partial<ScheduleAndAddress>) => void;
  setActiveDiscount: (discount: AdminDiscount | null) => void;
  setSubmitted: (submitted: boolean) => void;
  resetQuote: () => void;
}

const initialSchedule: ScheduleAndAddress = {
  preferredDate: "",
  timeWindow: "flexible",
  fullName: "",
  contact: "",
  address: "",
  city: "",
  accessNotes: "",
};

export const useQuoteStore = create<QuoteStoreState>((set) => ({
  step: 1,
  category: null,
  snowPlanType: null,
  details: null,
  schedule: initialSchedule,
  // Future admin dashboard discount can be hydrated here
  activeDiscount: null,
  isSubmitted: false,

  setStep: (step) => set({ step }),
  nextStep: () =>
    set((state) => ({
      step: state.step < 4 ? ((state.step + 1) as 1 | 2 | 3 | 4) : 4,
    })),
  prevStep: () =>
    set((state) => ({
      step: state.step > 1 ? ((state.step - 1) as 1 | 2 | 3 | 4) : 1,
    })),

  setCategory: (category) =>
    set((state) => {
      // Reset details if switching to a different category
      if (state.category === category) return state;
      return {
        category,
        snowPlanType: null,
        details: { category },
      };
    }),

  setSnowPlanType: (snowPlanType) =>
    set({
      snowPlanType,
      // Reset property selection when switching between one-time & seasonal contract
      details: {
        category: "snow-clearing",
        planType: snowPlanType,
      },
    }),

  setDetails: (partial) =>
    set((state) => ({
      details: { ...state.details, ...partial } as Partial<QuoteDetails>,
    })),

  setSchedule: (partial) =>
    set((state) => ({
      schedule: { ...state.schedule, ...partial },
    })),

  setActiveDiscount: (activeDiscount) => set({ activeDiscount }),
  setSubmitted: (isSubmitted) => set({ isSubmitted }),

  resetQuote: () =>
    set({
      step: 1,
      category: null,
      snowPlanType: null,
      details: null,
      schedule: initialSchedule,
      isSubmitted: false,
    }),
}));