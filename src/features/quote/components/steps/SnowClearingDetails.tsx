import { Info } from 'lucide-react'
import { useQuoteStore } from '../../store/useQuoteStore'

const snowOneTimeOptions = [
  { label: 'Small driveway', price: 50 },
  { label: 'Medium driveway', price: 60 },
  { label: 'Large driveway', price: 80 },
  { label: 'Walkways and stairs', price: 30 },
  { label: 'Driveway + walkways + stairs', price: 100 },
  { label: 'Large corner property', price: 120 },
]

const snowContractOptions = [
  { label: 'Small driveway', price: 500 },
  { label: 'Medium driveway', price: 650 },
  { label: 'Large driveway', price: 950 },
  { label: 'Walkways + stairs + driveway', price: 1500 },
]

interface SnowClearingDetailsProps {
  onChange: () => void
}

export function SnowClearingDetails({ onChange }: SnowClearingDetailsProps) {
  const { snowPlanType, details, setDetails } = useQuoteStore()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-sans font-bold text-2xl text-[#1A2E22]">
          {snowPlanType === 'seasonal-contract'
            ? 'Seasonal Contract Options'
            : 'One-Time Snow Removal Options'}
        </h2>
        <p className="text-sm text-[#5A655E] mt-1">
          Select the areas you need cleared.
        </p>
      </div>

      <div className="flex items-start gap-3 p-4 rounded-xl bg-[#EBECE4] border border-[#DCDED4] text-xs sm:text-sm text-[#1A2E22]">
        <Info className="w-4 h-4 text-[#2F6B48] shrink-0 mt-0.5" />
        <p>
          All snow clearing is performed using{' '}
          <span className="font-semibold">hand-operated equipment only</span>{' '}
          (no heavy vehicles or plows).
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {(snowPlanType === 'seasonal-contract'
          ? snowContractOptions
          : snowOneTimeOptions
        ).map((opt) => {
          const isSelected =
            details &&
            'propertyOption' in details &&
            details.propertyOption === opt.label
          return (
            <button
              key={opt.label}
              type="button"
              onClick={() => {
                setDetails({
                  category: 'snow-clearing',
                  planType: snowPlanType ?? 'one-time',
                  propertyOption: opt.label,
                  price: opt.price,
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
                {opt.label}
              </span>
              <span className="font-sans font-bold text-base text-[#2F6B48] tabular-nums">
                ${opt.price.toLocaleString()}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
