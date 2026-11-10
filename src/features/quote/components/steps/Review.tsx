import { ArrowLeft, CheckCircle2, Loader2, Tag } from 'lucide-react'
import { useState } from 'react'
import { useQuoteStore } from '../../store/useQuoteStore'
import { calculateQuoteTotal } from '../../utils/pricing'
import { buildWhatsAppQuoteUrl } from '../../utils/whatsapp'

export function StepReview() {
  const [whatsappUrl, setWhatsappUrl] = useState<string>('')
  const {
    category,
    details,
    schedule,
    activeDiscount,
    isSubmitted,
    setSubmitted,
    prevStep,
    resetQuote,
  } = useQuoteStore()

  const [isSubmitting, setIsSubmitting] = useState(false)

  const pricing = calculateQuoteTotal(category, details, activeDiscount)

  const handleSubmit = async () => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 600))

    const url = buildWhatsAppQuoteUrl(category, details, schedule, pricing)
    setWhatsappUrl(url)

    window.open(url, '_blank', 'noopener,noreferrer')

    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <>
        {whatsappUrl && (
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2F6B48] text-white text-sm font-medium px-5 py-3 rounded-xl hover:bg-[#25573A] transition-colors"
            >
              Open WhatsApp Message
            </a>
          </div>
        )}
        <div className="py-12 text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-[#2F6B48]/10 text-[#2F6B48] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h2 className="font-sans font-bold text-2xl text-[#1A2E22]">
            Quote Request Confirmed
          </h2>
          <p className="text-sm text-[#5A655E] max-w-md mx-auto">
            Thank you, {schedule.fullName}. We have received your{' '}
            <span className="capitalize font-medium text-[#1A2E22]">
              {category?.replace('-', ' ')}
            </span>{' '}
            request and will reach out to {schedule.contact} shortly.
          </p>
          <button
            type="button"
            onClick={resetQuote}
            className="text-xs font-medium text-[#2F6B48] underline underline-offset-4 cursor-pointer"
          >
            Start another quote
          </button>
        </div>
      </>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-sans font-bold text-2xl text-[#1A2E22]">
          Review your quote
        </h2>
        <p className="text-sm text-[#5A655E] mt-1">
          Please confirm your service details, schedule, and address.
        </p>
      </div>

      {/* Summary Card */}
      <div className="bg-white rounded-2xl border border-[#E6E4DA] p-6 space-y-5">
        <div className="flex items-center justify-between pb-4 border-b border-[#E6E4DA]">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#5A655E]">
            Service
          </span>
          <span className="font-sans font-semibold text-sm capitalize text-[#1A2E22]">
            {category?.replace('-', ' ')}
          </span>
        </div>

        {/* Dynamic Details Summary */}
        <div className="space-y-2 text-sm text-[#3D4741]">
          {details?.category === 'snow-clearing' && (
            <>
              <p>
                <span className="text-[#5A655E]">Plan:</span>{' '}
                <span className="capitalize font-medium">
                  {details.planType?.replace('-', ' ')}
                </span>
              </p>
              <p>
                <span className="text-[#5A655E]">Area:</span>{' '}
                <span className="font-medium">{details.propertyOption}</span>
              </p>
            </>
          )}

          {details?.category === 'apartment-cleaning' && (
            <>
              <p>
                <span className="text-[#5A655E]">Size:</span>{' '}
                <span className="font-medium">{details.size}</span>
              </p>
              <p>
                <span className="text-[#5A655E]">Recurrence:</span>{' '}
                <span className="capitalize font-medium">
                  {details.recurrence}
                </span>
              </p>
              <p>
                <span className="text-[#5A655E]">Intensity:</span>{' '}
                <span className="capitalize font-medium">
                  {details.intensity?.replace('-', ' ')}
                </span>
              </p>
            </>
          )}

          {details?.category === 'junk-removal' && (
            <>
              {details.photoName && (
                <p>
                  <span className="text-[#5A655E]">Photo:</span>{' '}
                  <span className="font-medium">{details.photoName}</span>
                </p>
              )}
              {details.description && (
                <p>
                  <span className="text-[#5A655E]">Items:</span>{' '}
                  <span className="font-medium">{details.description}</span>
                </p>
              )}
            </>
          )}

          {details?.category === 'grass-mowing' && (
            <p>
              <span className="text-[#5A655E]">Lawn Size:</span>{' '}
              <span className="font-medium">{details.lawnSize}</span>
            </p>
          )}
        </div>

        {/* Schedule & Address */}
        <div className="pt-4 border-t border-[#E6E4DA] space-y-1.5 text-sm text-[#3D4741]">
          <p>
            <span className="text-[#5A655E]">Date &amp; Time:</span>{' '}
            <span className="font-medium">
              {schedule.preferredDate} ({schedule.timeWindow})
            </span>
          </p>
          <p>
            <span className="text-[#5A655E]">Location:</span>{' '}
            <span className="font-medium">
              {schedule.address}, {schedule.city}
            </span>
          </p>
          <p>
            <span className="text-[#5A655E]">Contact:</span>{' '}
            <span className="font-medium">
              {schedule.fullName} &bull; {schedule.contact}
            </span>
          </p>
        </div>

        {/* Pricing & Future Discount Breakdown */}
        <div className="pt-4 border-t border-[#E6E4DA] space-y-2">
          {pricing.isCustomQuote ? (
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-[#1A2E22]">
                Estimated Total
              </span>
              <span className="text-sm font-semibold text-[#2F6B48]">
                Custom Quote (After Review)
              </span>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between text-sm text-[#5A655E]">
                <span>Subtotal</span>
                <span className="tabular-nums">
                  ${pricing.subtotal.toLocaleString()}
                </span>
              </div>

              {pricing.appliedDiscount && pricing.discountAmount > 0 && (
                <div className="flex items-center justify-between text-sm text-[#2F6B48]">
                  <span className="inline-flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5" />
                    <span>{pricing.appliedDiscount.label}</span>
                  </span>
                  <span className="tabular-nums">
                    -${pricing.discountAmount.toLocaleString()}
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between pt-2 border-t border-[#E6E4DA] font-sans font-bold text-lg text-[#1A2E22]">
                <span>Total</span>
                <span className="tabular-nums">
                  ${pricing.total.toLocaleString()}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="pt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#5A655E] hover:text-[#1A2E22] px-4 py-3 rounded-xl transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <button
          type="button"
          disabled={isSubmitting}
          onClick={handleSubmit}
          className="inline-flex items-center gap-2 bg-[#2F6B48] text-white text-sm font-medium px-6 py-3.5 rounded-xl shadow-sm hover:bg-[#25573A] disabled:opacity-70 transition-all cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <span>Submit Quote Request</span>
          )}
        </button>
      </div>
    </div>
  )
}
