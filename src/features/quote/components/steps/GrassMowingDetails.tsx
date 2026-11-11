import { useQuoteStore } from '../../store/useQuoteStore'

const grassSizes = [
  { label: 'Small lawn', price: 60 },
  { label: 'Medium lawn', price: 80 },
  { label: 'Large lawn', price: 110 },
  { label: 'Extra large', price: 150 },
]

interface GrassMowingDetailsProps {
  onChange: () => void
}

export function GrassMowingDetails({ onChange }: GrassMowingDetailsProps) {
  const { details, setDetails } = useQuoteStore()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-sans font-bold text-2xl text-[#1A2E22]">
          Select your lawn size
        </h2>
        <p className="text-sm text-[#5A655E] mt-1">
          Choose the option that best matches your outdoor space.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {grassSizes.map((item) => {
          const isSelected =
            details && 'lawnSize' in details && details.lawnSize === item.label
          return (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                setDetails({
                  category: 'grass-mowing',
                  lawnSize: item.label,
                  price: item.price,
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
  )
}
