import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Snowflake,
  Sparkles,
  Package,
  Sprout,
  ArrowRight,
  Check,
} from 'lucide-react'
import { useQuoteStore } from '../../store/useQuoteStore'
import type { ServiceCategory, SnowPlanType } from '../../types/quote.types'

const categories: {
  id: ServiceCategory
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}[] = [
  {
    id: 'snow-clearing',
    title: 'Snow Clearing',
    description: 'Hand-operated clearing for driveways, walkways, and stairs.',
    icon: Snowflake,
  },
  {
    id: 'apartment-cleaning',
    title: 'Apartment Cleaning',
    description:
      'Studio to 4-bedroom cleans tailored to your schedule and intensity.',
    icon: Sparkles,
  },
  {
    id: 'junk-removal',
    title: 'Junk Removal',
    description:
      'We are always available to handle your junk removal needs at a very affordable cost.',
    icon: Package,
  },
  {
    id: 'grass-mowing',
    title: 'Grass Mowing',
    description:
      'Clean cuts and neat edges for small to extra-large residential lawns.',
    icon: Sprout,
  },
]

const snowPlans: {
  id: SnowPlanType
  title: string
  description: string
}[] = [
  {
    id: 'one-time',
    title: 'One-time Snow Removal',
    description:
      'Pay for each individual snow removal visit on an on-demand basis. Ideal for single heavy snowstorm.',
  },
  {
    id: 'seasonal-contract',
    title: 'Seasonal Contract',
    description:
      'Choose an all-inclusive contract package for the complete snow season. Crews dispatch automatically when accumulation exceeds 1.5 inches.',
  },
]

export function StepCategory() {
  const { category, snowPlanType, setCategory, setSnowPlanType, nextStep } =
    useQuoteStore()

  const canProceed =
    category !== null && (category !== 'snow-clearing' || snowPlanType !== null)

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-sans font-bold text-2xl text-[#1A2E22]">
          Select a service category
        </h2>
        <p className="text-sm text-[#5A655E] mt-1">
          Choose one service per quote request.
        </p>
      </div>

      {/* 4 Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((item) => {
          const Icon = item.icon
          const isSelected = category === item.id

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setCategory(item.id)}
              className={`text-left p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between gap-4 ${
                isSelected
                  ? 'bg-[#2F6B48]/5 border-[#2F6B48] ring-2 ring-[#2F6B48]/20'
                  : 'bg-white border-[#E6E4DA] hover:border-[#2F6B48]/50'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isSelected
                      ? 'bg-[#2F6B48] text-white'
                      : 'bg-[#F5F4ED] text-[#2F6B48]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </span>
                {isSelected && (
                  <span className="w-6 h-6 rounded-full bg-[#2F6B48] text-white flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>

              <div>
                <h3 className="font-sans font-semibold text-base text-[#1A2E22]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5A655E] mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </button>
          )
        })}
      </div>

      {/* Conditional Sub-Cards for Snow Clearing */}
      <AnimatePresence>
        {category === 'snow-clearing' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-[#E6E4DA] space-y-4">
              <h3 className="font-sans font-semibold text-sm text-[#1A2E22]">
                Choose your Snow Clearing plan
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {snowPlans.map((plan) => {
                  const isPlanSelected = snowPlanType === plan.id
                  return (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setSnowPlanType(plan.id)}
                      className={`text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                        isPlanSelected
                          ? 'bg-[#1F3A28] text-white border-[#1F3A28] shadow-sm'
                          : 'bg-white text-[#1A2E22] border-[#E6E4DA] hover:border-[#2F6B48]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-sans font-semibold text-sm">
                          {plan.title}
                        </span>
                        {isPlanSelected && (
                          <Check className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <p
                        className={`text-xs leading-relaxed ${
                          isPlanSelected ? 'text-white/80' : 'text-[#5A655E]'
                        }`}
                      >
                        {plan.description}
                      </p>
                    </button>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <div className="pt-4 flex justify-end">
        <button
          type="button"
          disabled={!canProceed}
          onClick={nextStep}
          className="inline-flex items-center gap-2 bg-[#2F6B48] text-white text-sm font-medium px-6 py-3.5 rounded-xl shadow-sm hover:bg-[#25573A] disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
        >
          <span>Continue to Details</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
