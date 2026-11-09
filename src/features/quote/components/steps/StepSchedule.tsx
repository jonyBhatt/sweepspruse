import { AlertCircle, ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { scheduleSchema } from '../../schemas/quote.schema'
import { useQuoteStore } from '../../store/useQuoteStore'

export function StepSchedule() {
  const { schedule, setSchedule, nextStep, prevStep } = useQuoteStore()
  const [error, setError] = useState<string | null>(null)

  const handleContinue = () => {
    const res = scheduleSchema.safeParse(schedule)
    if (!res.success) {
      setError(
        res.error.issues[0]?.message ?? 'Please complete all required fields.',
      )
      return
    }
    setError(null)
    nextStep()
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-sans font-bold text-2xl text-[#1A2E22]">
          Schedule &amp; Address
        </h2>
        <p className="text-sm text-[#5A655E] mt-1">
          Let us know when and where you need us.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label
            htmlFor="sched-date"
            className="block text-xs font-medium text-[#1A2E22]"
          >
            Preferred date
          </label>
          <input
            id="sched-date"
            type="date"
            value={schedule.preferredDate}
            onChange={(e) => setSchedule({ preferredDate: e.target.value })}
            className="w-full rounded-xl bg-white border border-[#E6E4DA] px-4 py-3 text-sm text-[#1A2E22] focus:outline-none focus:ring-2 focus:ring-[#2F6B48]/25 focus:border-[#2F6B48]"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="sched-time"
            className="block text-xs font-medium text-[#1A2E22]"
          >
            Preferred time window
          </label>
          <select
            id="sched-time"
            value={schedule.timeWindow}
            onChange={(e) =>
              setSchedule({
                timeWindow: e.target.value as typeof schedule.timeWindow,
              })
            }
            className="w-full rounded-xl bg-white border border-[#E6E4DA] px-4 py-3 text-sm text-[#1A2E22] focus:outline-none focus:ring-2 focus:ring-[#2F6B48]/25 focus:border-[#2F6B48]"
          >
            <option value="flexible">Flexible (Anytime)</option>
            <option value="morning">Morning (8AM – 12PM)</option>
            <option value="afternoon">Afternoon (12PM – 4PM)</option>
            <option value="evening">Evening (4PM – 7PM)</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="sched-name"
            className="block text-xs font-medium text-[#1A2E22]"
          >
            Full name
          </label>
          <input
            id="sched-name"
            type="text"
            placeholder="Your full name"
            value={schedule.fullName}
            onChange={(e) => setSchedule({ fullName: e.target.value })}
            className="w-full rounded-xl bg-white border border-[#E6E4DA] px-4 py-3 text-sm text-[#1A2E22] focus:outline-none focus:ring-2 focus:ring-[#2F6B48]/25 focus:border-[#2F6B48]"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="sched-contact"
            className="block text-xs font-medium text-[#1A2E22]"
          >
            Email or phone
          </label>
          <input
            id="sched-contact"
            type="text"
            placeholder="you@example.com or (514) 555-0199"
            value={schedule.contact}
            onChange={(e) => setSchedule({ contact: e.target.value })}
            className="w-full rounded-xl bg-white border border-[#E6E4DA] px-4 py-3 text-sm text-[#1A2E22] focus:outline-none focus:ring-2 focus:ring-[#2F6B48]/25 focus:border-[#2F6B48]"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="sched-address"
            className="block text-xs font-medium text-[#1A2E22]"
          >
            Street address
          </label>
          <input
            id="sched-address"
            type="text"
            placeholder="123 Rue Saint-Denis"
            value={schedule.address}
            onChange={(e) => setSchedule({ address: e.target.value })}
            className="w-full rounded-xl bg-white border border-[#E6E4DA] px-4 py-3 text-sm text-[#1A2E22] focus:outline-none focus:ring-2 focus:ring-[#2F6B48]/25 focus:border-[#2F6B48]"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="sched-city"
            className="block text-xs font-medium text-[#1A2E22]"
          >
            City / Neighborhood
          </label>
          <input
            id="sched-city"
            type="text"
            placeholder="Montréal"
            value={schedule.city}
            onChange={(e) => setSchedule({ city: e.target.value })}
            className="w-full rounded-xl bg-white border border-[#E6E4DA] px-4 py-3 text-sm text-[#1A2E22] focus:outline-none focus:ring-2 focus:ring-[#2F6B48]/25 focus:border-[#2F6B48]"
          />
        </div>
      </div>

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
          <span>Review Quote</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
