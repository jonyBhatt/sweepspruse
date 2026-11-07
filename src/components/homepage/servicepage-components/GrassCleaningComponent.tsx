import * as React from 'react'
import { motion } from 'framer-motion'
import {
  Sprout,
  ArrowUpRight,
  ArrowDown,
  ChevronRight,
  MapPin,
  FileText,
  KeyRound,
} from 'lucide-react'

interface PricingRow {
  label: string
  price: string
}

interface PlanStep {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

const lawnPrices: PricingRow[] = [
  { label: 'Small lawn', price: '$60' },
  { label: 'Medium lawn', price: '$80' },
  { label: 'Large lawn', price: '$110' },
  { label: 'Extra large', price: '$150' },
]

const planningSteps: PlanStep[] = [
  {
    icon: MapPin,
    title: 'Show us your lawn',
    description:
      'Share the approximate size and mention front, back or separate lawn areas.',
  },
  {
    icon: FileText,
    title: 'Mention the details',
    description:
      'Let us know about slopes, obstacles or areas that need particular attention.',
  },
  {
    icon: KeyRound,
    title: 'Make access clear',
    description:
      'Include gate details and move toys or furniture away from the mowing area.',
  },
]

export default function GrassMowingComponent() {
  return (
    <main className="min-h-screen bg-[#F5F4ED] text-[#1A2E22] pt-28 md:pt-36">
      {/* =========================================================
          SECTION 1: GRASS MOWING INTRODUCTION
      ========================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs[cite: 12] */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-medium text-[#5A655E] mb-10 md:mb-14"
          >
            <a href="/" className="hover:text-[#1A2E22] transition-colors">
              Home[cite: 12]
            </a>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <a
              href="/#services"
              className="hover:text-[#1A2E22] transition-colors"
            >
              Services[cite: 12]
            </a>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="text-[#1A2E22] font-semibold">
              Grass Mowing[cite: 12]
            </span>
          </nav>

          {/* 2-Column Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column: Copy & CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-6 space-y-6"
            >
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-white border border-[#E5E3D8] shadow-xs flex items-center justify-center text-[#2F6B48]">
                  <Sprout className="w-4 h-4" />
                </span>
                <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#5A655E]">
                  ROOM TO GROW[cite: 12]
                </span>
              </div>

              {/* Main Heading[cite: 12] */}
              <h1
                className="font-sans font-bold tracking-tight leading-[1.05] text-[#2F6B48]"
                style={{ fontSize: 'clamp(2.75rem, 5vw, 4.5rem)' }}
              >
                Grass Mowing[cite: 12]
              </h1>

              {/* Serif Subtitle[cite: 12] */}
              <p
                className="font-serif text-[#4A554E] leading-snug"
                style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)' }}
              >
                More time to enjoy the outdoors.[cite: 12]
              </p>

              {/* Description[cite: 12] */}
              <p className="text-sm sm:text-base text-[#5A655E] leading-relaxed max-w-lg">
                Give your outdoor space a fresh perspective. Explore grass
                mowing options by lawn size and make a little more room for the
                moments you love at home.[cite: 12]
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-5 pt-2">
                <a
                  href="#book"
                  className="group inline-flex items-center gap-3 bg-[#2F6B48] text-white font-medium text-sm px-6 py-3.5 rounded-xl shadow-sm hover:bg-[#25573A] transition-all duration-300"
                >
                  <span>Book now[cite: 12]</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="#pricing"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-[#4A554E] hover:text-[#1A2E22] transition-colors py-2"
                >
                  <span>Explore pricing[cite: 12]</span>
                  <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              </div>
            </motion.div>

            {/* Right Column: Feature Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-[var(--radius)] overflow-hidden shadow-lg aspect-[4/3] bg-[#E5E3D8]">
                <img
                  src="/images/services/grass-mowing-hero.jpg"
                  alt="Man mowing a lush green lawn next to a classic house"
                  className="w-full h-full object-cover"
                />

                {/* Floating Pill Badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-md border border-black/5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F6B48]" />
                  <span className="text-xs font-medium text-[#1A2E22]">
                    A little care for your corner of green[cite: 12]
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: SERVICE & PRICING
      ========================================================= */}
      <section
        id="pricing"
        className="px-4 sm:px-6 lg:px-8 pb-20 md:pb-28 pt-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Copy */}
            <div className="lg:col-span-5 space-y-6">
              <span className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2F6B48]">
                SERVICE &amp; PRICING[cite: 12]
              </span>

              <h2
                className="font-sans font-bold tracking-tight text-[#1A2E22] leading-[1.1]"
                style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)' }}
              >
                A fresh cut.
                <br />A simple choice.[cite: 12]
              </h2>

              <p className="text-sm sm:text-base text-[#5A655E] leading-relaxed max-w-md">
                Find the option that suits your lawn, from a small patch of
                green to an extra-large outdoor space.[cite: 12]
              </p>

              <div className="pt-4 space-y-1.5 max-w-md">
                <h3 className="font-sans font-semibold text-sm text-[#1A2E22]">
                  Not sure which size to choose?[cite: 12]
                </h3>
                <p className="text-xs sm:text-sm text-[#5A655E] leading-relaxed">
                  Share a photo or approximate lawn dimensions when you get in
                  touch, and discuss the right option for your property.[cite:
                  12]
                </p>
              </div>
            </div>

            {/* Right Column: Pricing Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 bg-[#FAF9F5] rounded-[var(--radius)] p-7 sm:p-9 border border-[#E6E4DA] shadow-xs"
            >
              <div className="flex items-center justify-between pb-5 border-b border-[#E6E4DA]">
                <h3 className="font-sans font-semibold text-xl text-[#1A2E22]">
                  Lawn size[cite: 12]
                </h3>
                <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#6B756F]">
                  PRICE[cite: 12]
                </span>
              </div>

              <div className="divide-y divide-[#E6E4DA]">
                {lawnPrices.map((item) => (
                  <div
                    key={item.label}
                    className="py-5 flex items-center justify-between gap-4"
                  >
                    <span className="text-sm sm:text-base text-[#3D4741]">
                      {item.label}[cite: 12]
                    </span>
                    <span className="font-sans font-semibold text-xl sm:text-2xl text-[#1A2E22] tabular-nums">
                      {item.price}[cite: 12]
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: PLANNING STEPS BAND
      ========================================================= */}
      <section className="bg-[#EBECE4] border-y border-[#E0E2D8] py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-10 border-b border-[#DCDED4]">
            <h2
              className="font-sans font-semibold tracking-tight text-[#1A2E22]"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
            >
              A little planning for your patch of green[cite: 12]
            </h2>
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#5A655E]">
              A LITTLE PLANNING GOES A LONG WAY[cite: 12]
            </span>
          </div>

          {/* 3-Column Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-10">
            {planningSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-2.5 text-[#1A2E22]">
                    <IconComponent className="w-4 h-4 text-[#2F6B48] shrink-0" />
                    <h3 className="font-sans font-semibold text-sm sm:text-base">
                      {step.title}[cite: 12]
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5A655E] leading-relaxed">
                    {step.description}[cite: 12]
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: BOTTOM CTA
      ========================================================= */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <h2
              className="font-serif text-[#1A2E22] tracking-tight"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Your lawn. A little more inviting.[cite: 12]
            </h2>
            <p className="text-xs sm:text-sm text-[#5A655E]">
              Tell us about your outdoor space and the mowing you have in
              mind.[cite: 12]
            </p>
          </div>

          <a
            href="#book"
            className="group inline-flex items-center gap-3 bg-[#2F6B48] text-white font-medium text-sm px-6 py-3.5 rounded-xl shadow-sm hover:bg-[#25573A] transition-all duration-300 shrink-0"
          >
            <span>Book now[cite: 12]</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </section>
    </main>
  )
}
