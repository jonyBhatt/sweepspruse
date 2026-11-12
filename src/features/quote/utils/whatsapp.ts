import type {
  PriceBreakdown,
  QuoteDetails,
  ScheduleAndAddress,
  ServiceCategory,
} from '../types/quote.types'

export const OWNER_WHATSAPP_NUMBER = '15149262229'

export function buildWhatsAppQuoteUrl(
  category: ServiceCategory | null,
  details: Partial<QuoteDetails> | null,
  schedule: ScheduleAndAddress,
  pricing: PriceBreakdown,
): string {
  const formatCategoryName = (cat: ServiceCategory | null) =>
    cat ? cat.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase()) : 'N/A'

  const lines: string[] = [
    `*New Quote Request — Sweep Spruse*`,
    ``,
    `*Service:* ${formatCategoryName(category)}`,
  ]

  // 1. Dynamic Service Details
  if (details?.category === 'snow-clearing') {
    lines.push(
      `• *Plan:* ${details.planType === 'seasonal-contract' ? 'Seasonal Contract' : 'One-time Snow Removal'}`,
      `• *Area:* ${details.propertyOption ?? 'N/A'}`,
    )
  } else if (details?.category === 'apartment-cleaning') {
    lines.push(
      `• *Size:* ${details.size ?? 'N/A'}`,
      `• *Recurrence:* ${details.recurrence ?? 'N/A'}`,
      `• *Intensity:* ${details.intensity?.replace('-', ' ') ?? 'N/A'}`,
    )
    if (details.notes) {
      lines.push(`• *Notes:* ${details.notes}`)
    }
  } else if (details?.category === 'junk-removal') {
    if (details.photoName) {
      lines.push(
        `• *Photo:* Attached (${details.photoName} — will send in chat)`,
      )
    }
    if (details.description) {
      lines.push(`• *Items:* ${details.description}`)
    }
  } else if (details?.category === 'grass-mowing') {
    lines.push(`• *Lawn Size:* ${details.lawnSize ?? 'N/A'}`)
  }

  // 2. Schedule & Address
  lines.push(
    ``,
    `*Schedule & Location*`,
    `• *Date:* ${schedule.preferredDate}`,
    `• *Time Window:* ${schedule.timeWindow}`,
    `• *Address:* ${schedule.address}, ${schedule.city}`,
    `• *Client:* ${schedule.fullName}`,
    `• *Contact:* ${schedule.contact}`,
  )

  if (schedule.accessNotes) {
    lines.push(`• *Access Notes:* ${schedule.accessNotes}`)
  }

  // 3. Pricing & Discount
  lines.push(``, `*Pricing*`)
  if (pricing.isCustomQuote) {
    lines.push(`• *Total:* Custom Quote (After Review)`)
  } else {
    lines.push(`• *Subtotal:* $${pricing.subtotal.toLocaleString()}`)
    if (pricing.appliedDiscount && pricing.discountAmount > 0) {
      lines.push(
        `• *Discount (${pricing.appliedDiscount.label}):* -$${pricing.discountAmount.toLocaleString()}`,
      )
    }
    lines.push(`• *Estimated Total:* $${pricing.total.toLocaleString()}`)
  }

  const encodedMessage = encodeURIComponent(lines.join('\n'))
  return `https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodedMessage}`
}
