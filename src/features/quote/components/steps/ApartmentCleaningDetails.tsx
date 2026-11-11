import { useQuoteStore } from '../../store/useQuoteStore'
import type {
  ApartmentRecurrence,
  CleaningIntensity,
} from '../../types/quote.types'

const apartmentSizes = [
  { label: 'Studio Apartment', price: 90 },
  { label: '1-Bedroom', price: 120 },
  { label: '2-Bedroom', price: 160 },
  { label: '3-Bedroom', price: 180 },
  { label: '4-Bedroom', price: 240 },
]

const recurrences: { id: ApartmentRecurrence; label: string }[] = [
  { id: 'one-time', label: 'One-time' },
  { id: 'weekly', label: 'Weekly' },
  { id: 'bi-weekly', label: 'Bi-Weekly' },
  { id: 'monthly', label: 'Monthly' },
]

const intensities: { id: CleaningIntensity; label: string }[] = [
  { id: 'standard', label: 'Standard' },
  { id: 'deep-clean', label: 'Deep Clean' },
  { id: 'move-in-out', label: 'Move In/Out' },
]

interface ApartmentCleaningDetailsProps {
  onChange: () => void
}

export function ApartmentCleaningDetails({
  onChange,
}: ApartmentCleaningDetailsProps) {
  const { details, setDetails } = useQuoteStore()

  return (
    <div className="space-y-7">
      <div>
        <h2 className="font-sans font-bold text-2xl text-[#1A2E22]">
          Apartment Cleaning Details
        </h2>
        <p className="text-sm text-[#5A655E] mt-1">
          Choose your apartment size, recurrence, and cleaning intensity.
        </p>
      </div>

      <div className="space-y-2.5">
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A655E]">
          Apartment Size
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {apartmentSizes.map((item) => {
            const isSelected =
              details && 'size' in details && details.size === item.label
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  setDetails({
                    category: 'apartment-cleaning',
                    size: item.label,
                    basePrice: item.price,
                  })
                  onChange()
                }}
                className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#2F6B48]/5 border-[#2F6B48] ring-2 ring-[#2F6B48]/20'
                    : 'bg-white border-[#E6E4DA] hover:border-[#2F6B48]/50'
                }`}
              >
                <span className="text-sm font-medium text-[#1A2E22]">
                  {item.label}
                </span>
                <span className="font-sans font-bold text-base text-[#2F6B48] tabular-nums">
                  ${item.price}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="space-y-2.5">
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A655E]">
          Recurrence
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {recurrences.map((rec) => {
            const isSelected =
              details &&
              'recurrence' in details &&
              details.recurrence === rec.id
            return (
              <button
                key={rec.id}
                type="button"
                onClick={() => {
                  setDetails({ recurrence: rec.id })
                  onChange()
                }}
                className={`py-3 px-4 rounded-xl border text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#1F3A28] text-white border-[#1F3A28]'
                    : 'bg-white text-[#1A2E22] border-[#E6E4DA] hover:border-[#2F6B48]/50'
                }`}
              >
                {rec.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="space-y-2.5">
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A655E]">
          Cleaning Intensity
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {intensities.map((int) => {
            const isSelected =
              details && 'intensity' in details && details.intensity === int.id
            return (
              <button
                key={int.id}
                type="button"
                onClick={() => {
                  setDetails({ intensity: int.id })
                  onChange()
                }}
                className={`py-3 px-4 rounded-xl border text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#1F3A28] text-white border-[#1F3A28]'
                    : 'bg-white text-[#1A2E22] border-[#E6E4DA] hover:border-[#2F6B48]/50'
                }`}
              >
                {int.label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
