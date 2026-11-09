import type {
  AdminDiscount,
  PriceBreakdown,
  QuoteDetails,
  ServiceCategory,
} from "../types/quote.types";

export function calculateQuoteTotal(
  category: ServiceCategory | null,
  details: Partial<QuoteDetails> | null,
  activeDiscount: AdminDiscount | null
): PriceBreakdown {
  if (!category || !details) {
    return { isCustomQuote: false, subtotal: 0, discountAmount: 0, total: 0 };
  }

  if (category === "junk-removal") {
    return {
      isCustomQuote: true,
      subtotal: 0,
      discountAmount: 0,
      total: 0,
      appliedDiscount: activeDiscount?.isActive ? activeDiscount : undefined,
    };
  }

  let subtotal = 0;

  if (category === "snow-clearing" && "price" in details && details.price) {
    subtotal = details.price;
  } else if (
    category === "apartment-cleaning" &&
    "basePrice" in details &&
    details.basePrice
  ) {
    subtotal = details.basePrice;
  } else if (category === "grass-mowing" && "price" in details && details.price) {
    subtotal = details.price;
  }

  let discountAmount = 0;
  let appliedDiscount: AdminDiscount | undefined;

  if (activeDiscount && activeDiscount.isActive && subtotal > 0) {
    const isEligible =
      !activeDiscount.applicableCategories ||
      activeDiscount.applicableCategories.length === 0 ||
      activeDiscount.applicableCategories.includes(category);

    if (isEligible) {
      appliedDiscount = activeDiscount;
      discountAmount =
        activeDiscount.type === "percentage"
          ? Math.round((subtotal * activeDiscount.value) / 100)
          : Math.min(subtotal, activeDiscount.value);
    }
  }

  return {
    isCustomQuote: false,
    subtotal,
    discountAmount,
    total: Math.max(0, subtotal - discountAmount),
    appliedDiscount,
  };
}