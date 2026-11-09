import { AnimatePresence, motion } from 'framer-motion'
import { useQuoteStore } from '../store/useQuoteStore'
import { StepReview } from './steps/Review'
import { StepCategory } from './steps/Stepcategory'
import { StepDetails } from './steps/StepDetails'
import { StepSchedule } from './steps/StepSchedule'

const stepLabels = ['Category', 'Details', 'Schedule & Address', 'Review']

export function QuoteWizard() {
  const { step } = useQuoteStore()

  return (
    <section
      id="quote"
      className="bg-[#F5F4ED] text-[#1A2E22] py-20 md:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        {/* Progress Indicator */}
        <div className="mb-10">
          <div className="flex items-center justify-between text-xs font-medium text-[#5A655E] mb-3">
            {stepLabels.map((label, idx) => {
              const stepNum = idx + 1
              const isActive = step === stepNum
              const isCompleted = step > stepNum
              return (
                <span
                  key={label}
                  className={`${
                    isActive
                      ? 'text-[#2F6B48] font-semibold'
                      : isCompleted
                        ? 'text-[#1A2E22]'
                        : 'text-[#8E9690]'
                  }`}
                >
                  {stepNum}. {label}
                </span>
              )
            })}
          </div>
          <div className="h-1.5 w-full bg-[#E6E4DA] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#2F6B48]"
              initial={false}
              animate={{ width: `${(step / 4) * 100}%` }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            />
          </div>
        </div>

        {/* Step Card */}
        <div className="bg-[#FAF9F5] rounded-[var(--radius)] p-6 sm:p-10 border border-[#E6E4DA] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
            >
              {step === 1 && <StepCategory />}
              {step === 2 && <StepDetails />}
              {step === 3 && <StepSchedule />}
              {step === 4 && <StepReview />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
