import * as React from 'react'
import { useState } from 'react'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Clock,
  Lock,
  ArrowUpRight,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react'

const consultationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Please enter your full name (at least 2 characters).'),
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address (e.g., you@company.com).'),
  areaOfInterest: z.string().min(1, 'Please select an area of interest.'),
  details: z
    .string()
    .trim()
    .min(10, 'Please share a few details (at least 10 characters).'),
})

type ConsultationFormData = z.infer<typeof consultationSchema>
type FormErrors = Partial<Record<keyof ConsultationFormData, string>>

const interestOptions = [
  { value: 'snow-clearing', label: 'Snow Clearing & Winter Contracts' },
  { value: 'apartment-cleaning', label: 'Home & Apartment Cleaning' },
  { value: 'junk-removal', label: 'Junk Removal & Clear-outs' },
  { value: 'grass-mowing', label: 'Grass Mowing & Lawn Care' },
  { value: 'custom', label: 'Custom Property Care Plan' },
]

export function ConsultationSection() {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    areaOfInterest: '',
    details: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<
    Partial<Record<keyof ConsultationFormData, boolean>>
  >({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateField = (
    field: keyof ConsultationFormData,
    value: string,
  ): string | undefined => {
    const fieldSchema = consultationSchema.shape[field]
    const result = fieldSchema.safeParse(value)
    return result.success ? undefined : result.error.issues[0]?.message
  }

  const handleChange = (field: keyof ConsultationFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    if (touched[field]) {
      const error = validateField(field, value)
      setErrors((prev) => ({ ...prev, [field]: error }))
    }
  }

  const handleBlur = (field: keyof ConsultationFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    const error = validateField(field, formData[field])
    setErrors((prev) => ({ ...prev, [field]: error }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const result = consultationSchema.safeParse(formData)
    if (!result.success) {
      const fieldErrors: FormErrors = {}
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof ConsultationFormData
        if (!fieldErrors[path]) {
          fieldErrors[path] = issue.message
        }
      })
      setErrors(fieldErrors)
      setTouched({
        fullName: true,
        email: true,
        areaOfInterest: true,
        details: true,
      })
      return
    }

    setIsSubmitting(true)
    // Simulate API submission
    await new Promise((resolve) => setTimeout(resolve, 800))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      areaOfInterest: '',
      details: '',
    })
    setErrors({})
    setTouched({})
    setIsSubmitted(false)
  }

  return (
    <section
      id="contacts"
      className="bg-[#F5F4ED] text-[#1A2E22] py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* =========================================================
              LEFT COLUMN: EDITORIAL INTRO & IMAGE
          ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-6 lg:pt-4"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-6 bg-[#5A655E]/60" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#5A655E]">
                A CONVERSATION, NOT A COMMITMENT
              </span>
            </div>

            {/* Serif Heading */}
            <h2
              className="font-serif font-normal tracking-tight leading-[1.05] text-[#1A2E22]"
              style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)' }}
            >
              Get a free
              <br />
              consultation
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#5A655E] leading-relaxed max-w-md">
              Big questions. New possibilities. Tell us what&apos;s on your
              mind, and let&apos;s explore the right next step for your
              business.
            </p>

            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs sm:text-sm text-[#4A554E]">
              <div className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#5A655E]" />
                <span>30 minutes, focused on you</span>
              </div>
              <span className="h-3.5 w-[1px] bg-[#D6D4C8]" aria-hidden="true" />
              <span>No obligation</span>
            </div>

            {/* Feature Image & Caption */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-4 space-y-2.5"
            >
              <div className="rounded-[var(--radius)] overflow-hidden shadow-sm border border-[#E6E4DA] aspect-[16/9] bg-[#E5E3D8]">
                <img
                  src="/images/Freeconsultaion.png"
                  alt="Bright, clean dining and consultation space"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <p className="text-xs text-[#6B756F]">
                A little clarity can open up a lot of possibility.
              </p>
            </motion.div>
          </motion.div>

          {/* =========================================================
              RIGHT COLUMN: VALIDATED FORM CARD
          ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-7 bg-[#FAF9F5] rounded-[var(--radius)] p-7 sm:p-10 border border-[#E6E4DA] shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="py-16 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#2F6B48]/10 text-[#2F6B48] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-sans font-semibold text-2xl text-[#1A2E22]">
                    Consultation requested
                  </h3>
                  <p className="text-sm text-[#5A655E] max-w-md mx-auto leading-relaxed">
                    Thank you,{' '}
                    <span className="font-medium text-[#1A2E22]">
                      {formData.fullName}
                    </span>
                    . We&apos;ve received your details and will be in touch at{' '}
                    <span className="font-medium text-[#1A2E22]">
                      {formData.email}
                    </span>{' '}
                    within one business day.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs font-medium text-[#2F6B48] underline underline-offset-4 hover:opacity-80 cursor-pointer"
                    >
                      Submit another request
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="mb-7 space-y-1.5">
                    <h3 className="font-sans font-semibold text-xl sm:text-2xl text-[#1A2E22]">
                      Let&apos;s start with you.
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A655E]">
                      We&apos;ll be in touch within one business day.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-5"
                  >
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="consult-name"
                        className="block text-xs font-medium text-[#1A2E22]"
                      >
                        Full name
                      </label>
                      <input
                        id="consult-name"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          handleChange('fullName', e.target.value)
                        }
                        onBlur={() => handleBlur('fullName')}
                        placeholder="Your name"
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={
                          errors.fullName ? 'consult-name-error' : undefined
                        }
                        className={`w-full rounded-xl bg-white border px-4 py-3 text-sm text-[#1A2E22] placeholder:text-[#8E9690] focus:outline-none focus:ring-2 transition-colors ${
                          errors.fullName
                            ? 'border-destructive focus:ring-destructive/20 focus:border-destructive'
                            : 'border-[#E6E4DA] focus:ring-[#2F6B48]/25 focus:border-[#2F6B48]'
                        }`}
                      />
                      <AnimatePresence>
                        {errors.fullName && (
                          <motion.p
                            id="consult-name-error"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            className="flex items-center gap-1.5 text-xs text-destructive pt-0.5"
                          >
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.fullName}</span>
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="consult-email"
                        className="block text-xs font-medium text-[#1A2E22]"
                      >
                        Email address
                      </label>
                      <input
                        id="consult-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        placeholder="you@company.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                          errors.email ? 'consult-email-error' : undefined
                        }
                        className={`w-full rounded-xl bg-white border px-4 py-3 text-sm text-[#1A2E22] placeholder:text-[#8E9690] focus:outline-none focus:ring-2 transition-colors ${
                          errors.email
                            ? 'border-destructive focus:ring-destructive/20 focus:border-destructive'
                            : 'border-[#E6E4DA] focus:ring-[#2F6B48]/25 focus:border-[#2F6B48]'
                        }`}
                      />
                      <AnimatePresence>
                        {errors.email && (
                          <motion.p
                            id="consult-email-error"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            className="flex items-center gap-1.5 text-xs text-destructive pt-0.5"
                          >
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.email}</span>
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* How can we help? (Select) */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="consult-interest"
                        className="block text-xs font-medium text-[#1A2E22]"
                      >
                        How can we help?
                      </label>
                      <div className="relative">
                        <select
                          id="consult-interest"
                          value={formData.areaOfInterest}
                          onChange={(e) =>
                            handleChange('areaOfInterest', e.target.value)
                          }
                          onBlur={() => handleBlur('areaOfInterest')}
                          aria-invalid={Boolean(errors.areaOfInterest)}
                          aria-describedby={
                            errors.areaOfInterest
                              ? 'consult-interest-error'
                              : undefined
                          }
                          className={`w-full appearance-none rounded-xl bg-white border px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 transition-colors ${
                            formData.areaOfInterest
                              ? 'text-[#1A2E22]'
                              : 'text-[#8E9690]'
                          } ${
                            errors.areaOfInterest
                              ? 'border-destructive focus:ring-destructive/20 focus:border-destructive'
                              : 'border-[#E6E4DA] focus:ring-[#2F6B48]/25 focus:border-[#2F6B48]'
                          }`}
                        >
                          <option value="" disabled>
                            Select an area of interest
                          </option>
                          {interestOptions.map((opt) => (
                            <option
                              key={opt.value}
                              value={opt.value}
                              className="text-[#1A2E22]"
                            >
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-[#5A655E] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                      <AnimatePresence>
                        {errors.areaOfInterest && (
                          <motion.p
                            id="consult-interest-error"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            className="flex items-center gap-1.5 text-xs text-destructive pt-0.5"
                          >
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.areaOfInterest}</span>
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* What would you like to discuss? (Textarea) */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="consult-details"
                        className="block text-xs font-medium text-[#1A2E22]"
                      >
                        What would you like to discuss?
                      </label>
                      <textarea
                        id="consult-details"
                        rows={4}
                        value={formData.details}
                        onChange={(e) =>
                          handleChange('details', e.target.value)
                        }
                        onBlur={() => handleBlur('details')}
                        placeholder="A little about your goals or challenges..."
                        aria-invalid={Boolean(errors.details)}
                        aria-describedby={
                          errors.details ? 'consult-details-error' : undefined
                        }
                        className={`w-full rounded-xl bg-white border px-4 py-3 text-sm text-[#1A2E22] placeholder:text-[#8E9690] focus:outline-none focus:ring-2 transition-colors resize-none ${
                          errors.details
                            ? 'border-destructive focus:ring-destructive/20 focus:border-destructive'
                            : 'border-[#E6E4DA] focus:ring-[#2F6B48]/25 focus:border-[#2F6B48]'
                        }`}
                      />
                      <AnimatePresence>
                        {errors.details && (
                          <motion.p
                            id="consult-details-error"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            className="flex items-center gap-1.5 text-xs text-destructive pt-0.5"
                          >
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.details}</span>
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full group inline-flex items-center justify-between bg-[#2F6B48] text-white font-medium text-sm px-6 py-4 rounded-xl shadow-sm hover:bg-[#25573A] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
                      >
                        <span>
                          {isSubmitting
                            ? 'Sending request...'
                            : 'Request my free consultation'}
                        </span>
                        {isSubmitting ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        )}
                      </button>
                    </div>

                    {/* Privacy Note */}
                    <div className="flex items-center gap-2 pt-1 text-[11px] sm:text-xs text-[#6B756F]">
                      <Lock className="w-3.5 h-3.5 shrink-0" />
                      <p>
                        Your details stay private. We&apos;ll only use them to
                        respond to your inquiry.{' '}
                        <a
                          href="/privacy"
                          className="underline underline-offset-2 hover:text-[#1A2E22] transition-colors"
                        >
                          Privacy policy
                        </a>
                      </p>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
