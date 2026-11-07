import * as React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Package,
  ArrowUpRight,
  ArrowDown,
  ChevronRight,
  Plus,
  ClipboardList,
  Camera,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react'

interface PlanStep {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

const helpfulDetails: string[] = [
  'The items and approximate quantity',
  'Their location within your property',
  'Stairs, narrow access or parking details',
]

const planningSteps: PlanStep[] = [
  {
    icon: ClipboardList,
    title: 'Take a look around',
    description:
      'Make a list of what needs to go and note where the items are located.',
  },
  {
    icon: Camera,
    title: 'Share the bigger picture',
    description:
      'Include approximate sizes or photos, plus anything unusual about access.',
  },
  {
    icon: MessageSquare,
    title: 'Discuss the next step',
    description:
      'Use your inquiry to ask about the items, pricing and a suitable time.',
  },
]

export default function JunkRemovalComponent() {
  const [formState, setFormState] = useState({
    name: '',
    contact: '',
    location: '',
    details: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formState.name.trim() || !formState.contact.trim()) return
    setIsSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-[#F5F4ED] text-[#1A2E22] pt-28 md:pt-36">
      {/* =========================================================
          SECTION 1: JUNK REMOVAL INTRODUCTION
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
            <span className="text-[#1A2E22] font-semibold">Junk Removal</span>
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
                  <Package className="w-4 h-4" />
                </span>
                <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#5A655E]">
                  SPACE TO BREATHE
                </span>
              </div>

              {/* Main Heading */}
              <h1
                className="font-sans font-bold tracking-tight leading-[1.05] text-[#2F6B48]"
                style={{ fontSize: 'clamp(2.75rem, 5vw, 4.5rem)' }}
              >
                Junk Removal
              </h1>

              {/* Serif Subtitle */}
              <p
                className="font-serif text-[#4A554E] leading-snug"
                style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)' }}
              >
                Less clutter. More possibility.
              </p>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#5A655E] leading-relaxed max-w-lg">
                We are always available to handle your junk removal needs at a
                very affordable cost.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-5 pt-2">
                <a
                  href="#quote"
                  className="group inline-flex items-center gap-3 bg-[#2F6B48] text-white font-medium text-sm px-6 py-3.5 rounded-xl shadow-sm hover:bg-[#25573A] transition-all duration-300"
                >
                  <span>Request a quote</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="#quote"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-[#4A554E] hover:text-[#1A2E22] transition-colors py-2"
                >
                  <span>What to share</span>
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
                  src="/images/services/junk-removal-hero.jpg"
                  alt="Team member carrying a cardboard box out of a residential garage"
                  className="w-full h-full object-cover"
                />

                {/* Floating Pill Badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-md border border-black/5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F6B48]" />
                  <span className="text-xs font-medium text-[#1A2E22]">
                    Make space for what comes next
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: QUOTE REQUEST & HELPFUL DETAILS
      ========================================================= */}
      <section id="quote" className="px-4 sm:px-6 lg:px-8 pb-20 md:pb-28 pt-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Copy & Checklist */}
            <div className="lg:col-span-5 space-y-6">
              <span className="block text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2F6B48]">
                LET&apos;S TALK ABOUT YOUR SPACE
              </span>

              <h2
                className="font-sans font-bold tracking-tight text-[#1A2E22] leading-[1.1]"
                style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)' }}
              >
                Every clear-out
                <br />
                starts here.
              </h2>

              <p className="text-sm sm:text-base text-[#5A655E] leading-relaxed max-w-md">
                Tell us what you would like removed and where it is. Request a
                quote for your junk removal needs, rather than choosing a
                fixed-price package.
              </p>

              <div className="pt-4 space-y-3 max-w-md">
                <h3 className="font-sans font-semibold text-sm text-[#1A2E22]">
                  Helpful details to include
                </h3>
                <ul className="space-y-2.5">
                  {helpfulDetails.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5A655E]"
                    >
                      <Plus className="w-4 h-4 text-[#2F6B48] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Quote Request Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 bg-[#FAF9F5] rounded-[var(--radius)] p-7 sm:p-9 border border-[#E6E4DA] shadow-xs"
            >
              <h3 className="font-sans font-semibold text-xl text-[#1A2E22] mb-6">
                Request a quote
              </h3>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#2F6B48]/10 text-[#2F6B48] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-sans font-semibold text-lg text-[#1A2E22]">
                    Quote request received
                  </h4>
                  <p className="text-sm text-[#5A655E] max-w-sm mx-auto">
                    Thank you, {formState.name}. We will review your clear-out
                    details and get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormState({
                        name: '',
                        contact: '',
                        location: '',
                        details: '',
                      })
                    }}
                    className="text-xs font-medium text-[#2F6B48] underline underline-offset-4 hover:opacity-80"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Contact Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="quote-name"
                        className="block text-xs font-medium text-[#1A2E22]"
                      >
                        Your name
                      </label>
                      <input
                        id="quote-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="Full name"
                        className="w-full rounded-xl bg-white border border-[#E6E4DA] px-4 py-3 text-sm text-[#1A2E22] placeholder:text-[#8E9690] focus:outline-none focus:ring-2 focus:ring-[#2F6B48]/30 focus:border-[#2F6B48] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="quote-contact"
                        className="block text-xs font-medium text-[#1A2E22]"
                      >
                        Email or phone
                      </label>
                      <input
                        id="quote-contact"
                        type="text"
                        required
                        value={formState.contact}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            contact: e.target.value,
                          })
                        }
                        placeholder="How can we reach you?"
                        className="w-full rounded-xl bg-white border border-[#E6E4DA] px-4 py-3 text-sm text-[#1A2E22] placeholder:text-[#8E9690] focus:outline-none focus:ring-2 focus:ring-[#2F6B48]/30 focus:border-[#2F6B48] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Property Location */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="quote-location"
                      className="block text-xs font-medium text-[#1A2E22]"
                    >
                      Property location
                    </label>
                    <input
                      id="quote-location"
                      type="text"
                      value={formState.location}
                      onChange={(e) =>
                        setFormState({ ...formState, location: e.target.value })
                      }
                      placeholder="Address or neighborhood"
                      className="w-full rounded-xl bg-white border border-[#E6E4DA] px-4 py-3 text-sm text-[#1A2E22] placeholder:text-[#8E9690] focus:outline-none focus:ring-2 focus:ring-[#2F6B48]/30 focus:border-[#2F6B48] transition-colors"
                    />
                  </div>

                  {/* Items Description */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="quote-details"
                      className="block text-xs font-medium text-[#1A2E22]"
                    >
                      What would you like removed?
                    </label>
                    <textarea
                      id="quote-details"
                      rows={4}
                      value={formState.details}
                      onChange={(e) =>
                        setFormState({ ...formState, details: e.target.value })
                      }
                      placeholder="Describe the items, quantity and any access details..."
                      className="w-full rounded-xl bg-white border border-[#E6E4DA] px-4 py-3 text-sm text-[#1A2E22] placeholder:text-[#8E9690] focus:outline-none focus:ring-2 focus:ring-[#2F6B48]/30 focus:border-[#2F6B48] transition-colors resize-none"
                    />
                  </div>

                  {/* Form Footer */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs text-[#6B756F] max-w-xs leading-relaxed">
                      Have photos? Mention them in your inquiry to help describe
                      the job.
                    </p>

                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-3 bg-[#2F6B48] text-white font-medium text-sm px-6 py-3.5 rounded-xl shadow-sm hover:bg-[#25573A] transition-all duration-300 shrink-0 cursor-pointer"
                    >
                      <span>Request a quote</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </form>
              )}
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
              From clutter to a clearer plan
            </h2>
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#5A655E]">
              A LITTLE PLANNING GOES A LONG WAY
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
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5A655E] leading-relaxed">
                    {step.description}
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
              Make space for a little more living.
            </h2>
            <p className="text-xs sm:text-sm text-[#5A655E]">
              A room, a garage or a corner that&apos;s ready for a fresh start.
              Tell us about it.
            </p>
          </div>

          <a
            href="#quote"
            className="group inline-flex items-center gap-3 bg-[#2F6B48] text-white font-medium text-sm px-6 py-3.5 rounded-xl shadow-sm hover:bg-[#25573A] transition-all duration-300 shrink-0"
          >
            <span>Request a quote</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </section>
    </main>
  )
}
