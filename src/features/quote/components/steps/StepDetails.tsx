import { AlertCircle, ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { useQuoteStore } from '../../store/useQuoteStore'
import {
  apartmentDetailsSchema,
  grassDetailsSchema,
  junkDetailsSchema,
  snowDetailsSchema,
} from '../../schemas/quote.schema'
import { ApartmentCleaningDetails } from './ApartmentCleaningDetails'
import { GrassMowingDetails } from './GrassMowingDetails'
import { JunkRemovalDetails } from './JunkRemovalDetails'
import { SnowClearingDetails } from './SnowClearingDetails'

export function StepDetails() {
  const { category, details, nextStep, prevStep } = useQuoteStore()
  const [error, setError] = useState<string | null>(null)

  const handleContinue = () => {
    setError(null)

    if (category === 'snow-clearing') {
      const res = snowDetailsSchema.safeParse(details)
      if (!res.success) {
        setError(
          res.error.issues[0]?.message ?? 'Please complete your selection.',
        )
        return
      }
    } else if (category === 'apartment-cleaning') {
      const res = apartmentDetailsSchema.safeParse(details)
      if (!res.success) {
        setError(
          res.error.issues[0]?.message ?? 'Please complete your selection.',
        )
        return
      }
    } else if (category === 'junk-removal') {
      const res = junkDetailsSchema.safeParse(details)
      if (!res.success) {
        setError(
          res.error.issues[0]?.message ??
            'Please upload a photo or describe your junk.',
        )
        return
      }
    } else if (category === 'grass-mowing') {
      const res = grassDetailsSchema.safeParse(details)
      if (!res.success) {
        setError(
          res.error.issues[0]?.message ?? 'Please select your lawn size.',
        )
        return
      }
    }

    nextStep()
  }

  return (
    <div className="space-y-8">
      {category === 'snow-clearing' && (
        <SnowClearingDetails onChange={() => setError(null)} />
      )}

      {category === 'apartment-cleaning' && (
        <ApartmentCleaningDetails onChange={() => setError(null)} />
      )}

      {category === 'junk-removal' && (
        <JunkRemovalDetails onChange={() => setError(null)} />
      )}

      {category === 'grass-mowing' && (
        <GrassMowingDetails onChange={() => setError(null)} />
      )}

      {error && (
        <div className="flex items-center gap-2 text-xs sm:text-sm text-destructive bg-destructive/10 px-4 py-3 rounded-xl">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

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
          onClick={handleContinue}
          className="inline-flex items-center gap-2 bg-[#2F6B48] text-white text-sm font-medium px-6 py-3.5 rounded-xl shadow-sm hover:bg-[#25573A] transition-all cursor-pointer"
        >
          <span>Continue to Schedule</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
