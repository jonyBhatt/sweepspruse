import * as React from 'react'
import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Info,
  Upload,
  X,
  AlertCircle,
} from 'lucide-react'
import { useQuoteStore } from '../../store/useQuoteStore'
import {
  snowDetailsSchema,
  apartmentDetailsSchema,
  junkDetailsSchema,
  grassDetailsSchema,
} from '../../schemas/quote.schema'
import type {
  ApartmentRecurrence,
  CleaningIntensity,
} from '../../types/quote.types'

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

const grassSizes = [
  { label: 'Small lawn', price: 60 },
  { label: 'Medium lawn', price: 80 },
  { label: 'Large lawn', price: 110 },
  { label: 'Extra large', price: 150 },
]

export function StepDetails() {
  const { category, snowPlanType, details, setDetails, nextStep, prevStep } =
    useQuoteStore()
  const [error, setError] = useState<string | null>(null)

  const handleContinue = () => {
    setError(null)

    if (category === 'snow-clearing') {
      const res = snowDetailsSchema.safeParse(details)
      if (!res.success) {
        setError(
          res.error.issues[0]?.message ?? 'Please complete your selection.',
        )
        return
      }
    } else if (category === 'apartment-cleaning') {
      const res = apartmentDetailsSchema.safeParse(details)
      if (!res.success) {
        setError(
          res.error.issues[0]?.message ?? 'Please complete your selection.',
        )
        return
      }
    } else if (category === 'junk-removal') {
      const res = junkDetailsSchema.safeParse(details)
      if (!res.success) {
        setError(
          res.error.issues[0]?.message ??
            'Please upload a photo or describe your junk.',
        )
        return
      }
    } else if (category === 'grass-mowing') {
      const res = grassDetailsSchema.safeParse(details)
      if (!res.success) {
        setError(
          res.error.issues[0]?.message ?? 'Please select your lawn size.',
        )
        return
      }
    }

    nextStep()
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      setDetails({
        category: 'junk-removal',
        photoDataUrl: reader.result as string,
        photoName: file.name,
      })
      setError(null)
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="space-y-8">
      {/* =========================================================
          1. SNOW CLEARING DETAILS
      ========================================================= */}
      {category === 'snow-clearing' && (
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
              <span className="font-semibold">
                hand-operated equipment only
              </span>{' '}
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
                    setError(null)
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
      )}

      {/* =========================================================
          2. APARTMENT CLEANING DETAILS
      ========================================================= */}
      {category === 'apartment-cleaning' && (
        <div className="space-y-7">
          <div>
            <h2 className="font-sans font-bold text-2xl text-[#1A2E22]">
              Apartment Cleaning Details
            </h2>
            <p className="text-sm text-[#5A655E] mt-1">
              Choose your apartment size, recurrence, and cleaning intensity.
            </p>
          </div>

          {/* Size */}
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
                      setError(null)
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

          {/* Recurrence */}
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
                      setError(null)
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

          {/* Cleaning Intensity */}
          <div className="space-y-2.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A655E]">
              Cleaning Intensity
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {intensities.map((int) => {
                const isSelected =
                  details &&
                  'intensity' in details &&
                  details.intensity === int.id
                return (
                  <button
                    key={int.id}
                    type="button"
                    onClick={() => {
                      setDetails({ intensity: int.id })
                      setError(null)
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
      )}

      {/* =========================================================
          3. JUNK REMOVAL DETAILS (Photo OR Description)
      ========================================================= */}
      {category === 'junk-removal' && (
        <div className="space-y-6">
          <div>
            <h2 className="font-sans font-bold text-2xl text-[#1A2E22]">
              Junk Removal Details
            </h2>
            <p className="text-sm text-[#5A655E] mt-1">
              We are always available to handle your junk removal needs at a
              very affordable cost.
            </p>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#EBECE4] border border-[#DCDED4] text-xs sm:text-sm text-[#1A2E22]">
            <Info className="w-4 h-4 text-[#2F6B48] shrink-0 mt-0.5" />
            <p>
              <span className="font-semibold">Hand-carried items only:</span> We
              do not use trucks or heavy vehicles, so we handle lightweight,
              manageable junk by hand.
            </p>
          </div>

          {/* Optional Photo Upload (Bypasses required description) */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A655E]">
              Upload or Take a Photo (Optional)
            </label>
            {details && 'photoDataUrl' in details && details.photoDataUrl ? (
              <div className="relative rounded-2xl overflow-hidden border border-[#E6E4DA] bg-white p-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={details.photoDataUrl}
                    alt="Uploaded junk preview"
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-[#1A2E22]">
                      {details.photoName || 'Photo uploaded'}
                    </p>
                    <p className="text-xs text-[#2F6B48]">
                      Photo attached — you can proceed directly to Schedule
                      &amp; Address.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setDetails({
                      photoDataUrl: undefined,
                      photoName: undefined,
                    })
                  }
                  className="p-2 rounded-lg hover:bg-[#F5F4ED] text-[#5A655E] cursor-pointer"
                  aria-label="Remove photo"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border-2 border-dashed border-[#D6D4C8] bg-white hover:border-[#2F6B48] transition-colors cursor-pointer">
                <Upload className="w-6 h-6 text-[#2F6B48]" />
                <span className="text-sm font-medium text-[#1A2E22]">
                  Click to upload or take a photo
                </span>
                <span className="text-xs text-[#5A655E]">
                  If you upload a photo, no written description is required
                </span>
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </label>
            )}
          </div>

          {/* Description (Required only if no photo) */}
          <div className="space-y-1.5">
            <label
              htmlFor="junk-desc"
              className="block text-xs font-medium text-[#1A2E22]"
            >
              Describe your items{' '}
              {details && 'photoDataUrl' in details && details.photoDataUrl
                ? '(Optional)'
                : '(Required if no photo)'}
            </label>
            <textarea
              id="junk-desc"
              rows={3}
              value={
                details && 'description' in details
                  ? (details.description ?? '')
                  : ''
              }
              onChange={(e) => {
                setDetails({
                  category: 'junk-removal',
                  description: e.target.value,
                })
                setError(null)
              }}
              placeholder="e.g., 4 boxes of old books, small wooden chair..."
              className="w-full rounded-xl bg-white border border-[#E6E4DA] px-4 py-3 text-sm text-[#1A2E22] placeholder:text-[#8E9690] focus:outline-none focus:ring-2 focus:ring-[#2F6B48]/25 focus:border-[#2F6B48] resize-none"
            />
          </div>
        </div>
      )}

      {/* =========================================================
          4. GRASS MOWING DETAILS
      ========================================================= */}
      {category === 'grass-mowing' && (
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
                details &&
                'lawnSize' in details &&
                details.lawnSize === item.label
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
                    setError(null)
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
      )}

      {/* Error Message */}
      {error && (
        <div className="flex items-center gap-2 text-xs sm:text-sm text-destructive bg-destructive/10 px-4 py-3 rounded-xl">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Navigation */}
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
          <span>Continue to Schedule</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
