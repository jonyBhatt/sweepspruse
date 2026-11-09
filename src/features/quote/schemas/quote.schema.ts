import { z } from "zod";

export const snowDetailsSchema = z.object({
  category: z.literal("snow-clearing"),
  planType: z.enum(["one-time", "seasonal-contract"]),
  propertyOption: z.string().min(1, "Please select a property size."),
  price: z.number().positive(),
});

export const apartmentDetailsSchema = z.object({
  category: z.literal("apartment-cleaning"),
  size: z.string().min(1, "Please select your apartment size."),
  basePrice: z.number().positive(),
  recurrence: z.enum(["one-time", "weekly", "bi-weekly", "monthly"]),
  intensity: z.enum(["standard", "deep-clean", "move-in-out"]),
  notes: z.string().optional(),
});

/**
 * Junk Removal Rule:
 * If photoDataUrl is provided, description is NOT required.
 * If no photo is uploaded, description must be at least 5 characters.
 */
export const junkDetailsSchema = z
  .object({
    category: z.literal("junk-removal"),
    photoDataUrl: z.string().optional(),
    photoName: z.string().optional(),
    description: z.string().optional(),
    accessNotes: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    const hasPhoto = Boolean(data.photoDataUrl && data.photoDataUrl.length > 0);
    const hasDescription = Boolean(
      data.description && data.description.trim().length >= 5
    );

    if (!hasPhoto && !hasDescription) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Please either upload a photo of your junk or describe what needs to be removed.",
        path: ["description"],
      });
    }
  });

export const grassDetailsSchema = z.object({
  category: z.literal("grass-mowing"),
  lawnSize: z.string().min(1, "Please select your lawn size."),
  price: z.number().positive(),
});

export const scheduleSchema = z.object({
  preferredDate: z.string().min(1, "Please select a preferred date."),
  timeWindow: z.enum(["morning", "afternoon", "evening", "flexible"]),
  fullName: z.string().trim().min(2, "Please enter your full name."),
  contact: z.string().trim().min(5, "Please enter a valid email or phone number."),
  address: z.string().trim().min(5, "Please enter your street address."),
  city: z.string().trim().min(2, "Please enter your city or neighborhood."),
  accessNotes: z.string().optional(),
});