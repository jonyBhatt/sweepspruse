import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, ChevronRight, Snowflake } from 'lucide-react'

interface PricingRow {
  label: string
  price: string
}

const snowClearingPrices: PricingRow[] = [
  { label: 'Small driveway', price: '$50' },
  { label: 'Medium driveway', price: '$60' },
  { label: 'Large driveway', price: '$80' },
  { label: 'Walkways and stairs', price: '$30' },
  { label: 'Driveway + walkways + stairs', price: '$100' },
  { label: 'Large corner property', price: '$120' },
]

const contractPrices: PricingRow[] = [
  { label: 'Small driveway', price: '$500' },
  { label: 'Medium driveway', price: '$650' },
  { label: 'Large driveway', price: '$950' },
  { label: 'Walkways + stairs + driveway', price: '$1,500' },
]

export default function SnowClearingPage() {
  return (
    <main className="min-h-screen bg-[#F5F4ED] text-[#1A2E22] pt-28 md:pt-36 pb-24">
      {/* =========================================================
          SECTION 1: SNOW SERVICE INTRODUCTION
      ========================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-medium text-[#5A655E] mb-10 md:mb-14"
          >
            <a href="/" className="hover:text-[#1A2E22] transition-colors">
              Home
            </a>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <a
              href="/#services"
              className="hover:text-[#1A2E22] transition-colors"
            >
              Services
            </a>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className="text-[#1A2E22] font-semibold">Snow Clearing</span>
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
                  <Snowflake className="w-4 h-4" />
                </span>
                <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#5A655E]">
                  WINTER READY
                </span>
              </div>

              {/* Main Heading */}
              <h1
                className="font-sans font-bold tracking-tight leading-[1.05] text-[#2F6B48]"
                style={{ fontSize: 'clamp(2.75rem, 5vw, 4.5rem)' }}
              >
                Snow Clearing
              </h1>

              {/* Serif Subtitle */}
              <p
                className="font-serif italic text-[#4A554E] leading-snug"
                style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)' }}
              >
                A clearer path through winter.
              </p>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#5A655E] leading-relaxed max-w-lg">
                Make room for everyday life, even when the snow settles in.
                Explore clearing options for your driveway, walkways and stairs.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-5 pt-2">
                <Link
                  to="/quote"
                  className="group inline-flex items-center gap-3 bg-[#2F6B48] text-white font-medium text-sm px-6 py-3.5 rounded-xl shadow-sm hover:bg-[#25573A] transition-all duration-300"
                >
                  <span>Book now</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <a
                  href="#pricing"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-[#4A554E] hover:text-[#1A2E22] transition-colors py-2"
                >
                  <span>Explore pricing</span>
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
                  src="/images/serviceimage/snowclean.jpeg"
                  alt="Technician clearing snow from a residential driveway"
                  className="size-max object-cover"
                />

                {/* Floating Pill Badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-md border border-black/5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F6B48]" />
                  <span className="text-xs font-medium text-[#1A2E22]">
                    Driveways, walkways &amp; stairs
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
      <section id="pricing" className="px-4 sm:px-6 lg:px-8 pt-8 md:pt-12">
        <div className="max-w-7xl mx-auto">
          {/* Eyebrow */}
          <span className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2F6B48] mb-3">
            SERVICE &amp; PRICING
          </span>

          {/* Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-end mb-10 md:mb-14">
            <div className="lg:col-span-7">
              <h2
                className="font-sans font-bold tracking-tight text-[#1A2E22] leading-[1.1]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
              >
                Your property. Your options.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:max-w-sm lg:ml-auto">
              <p className="text-sm text-[#5A655E] leading-relaxed">
                Choose the areas you need cleared, or ask about a contract for
                your property.
              </p>
            </div>
          </div>

          {/* 2-Column Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* Left Card: One-Time Snow Clearing (Light Card) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#FAF9F5] rounded-[var(--radius)] p-7 sm:p-9 border border-[#E6E4DA] shadow-xs"
            >
              <div className="flex items-center justify-between pb-5 border-b border-[#E6E4DA]">
                <h3 className="font-sans font-semibold text-xl text-[#1A2E22]">
                  Snow clearing
                </h3>
                <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#6B756F]">
                  PRICE
                </span>
              </div>

              <div className="divide-y divide-[#E6E4DA]">
                {snowClearingPrices.map((item) => (
                  <div
                    key={item.label}
                    className="py-5 flex items-center justify-between gap-4"
                  >
                    <span className="text-sm sm:text-base text-[#3D4741]">
                      {item.label}
                    </span>
                    <span className="font-sans font-semibold text-xl sm:text-2xl text-[#1A2E22] tabular-nums">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Contract Card (Dark Green) + Note */}
            <div className="flex flex-col gap-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#1F3A28] text-white rounded-[var(--radius)] p-7 sm:p-9 shadow-md"
              >
                <div className="flex items-center justify-between pb-5 border-b border-white/15">
                  <h3 className="font-sans font-semibold text-xl text-white">
                    Contract
                  </h3>
                  <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/60">
                    PRICE
                  </span>
                </div>

                <div className="divide-y divide-white/15">
                  {contractPrices.map((item) => (
                    <div
                      key={item.label}
                      className="py-5 flex items-center justify-between gap-4"
                    >
                      <span className="text-sm sm:text-base text-white/90">
                        {item.label}
                      </span>
                      <span className="font-sans font-semibold text-xl sm:text-2xl text-white tabular-nums">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <p className="text-xs sm:text-sm text-[#5A655E] leading-relaxed px-1">
                Interested in a contract? Share your property details and the
                areas you would like cleared when you get in touch.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
