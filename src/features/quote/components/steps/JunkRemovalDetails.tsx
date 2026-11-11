import * as React from 'react'
import { Info, Upload, X } from 'lucide-react'
import { useQuoteStore } from '../../store/useQuoteStore'

interface JunkRemovalDetailsProps {
  onChange: () => void
}

export function JunkRemovalDetails({ onChange }: JunkRemovalDetailsProps) {
  const { details, setDetails } = useQuoteStore()

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
      onChange()
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-sans font-bold text-2xl text-[#1A2E22]">
          Junk Removal Details
        </h2>
        <p className="text-sm text-[#5A655E] mt-1">
          We are always available to handle your junk removal needs at a very
          affordable cost.
        </p>
      </div>

      <div className="flex items-start gap-3 p-4 rounded-xl bg-[#EBECE4] border border-[#DCDED4] text-xs sm:text-sm text-[#1A2E22]">
        <Info className="w-4 h-4 text-[#2F6B48] shrink-0 mt-0.5" />
        <p>
          <span className="font-semibold">Hand-carried items only:</span> We do
          not use trucks or heavy vehicles, so we handle lightweight, manageable
          junk by hand.
        </p>
      </div>

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
                  Photo attached — you can proceed directly to Schedule &amp;
                  Address.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setDetails({
                  photoDataUrl: undefined,
                  photoName: undefined,
                })
              }}
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
            onChange()
          }}
          placeholder="e.g., 4 boxes of old books, small wooden chair..."
          className="w-full rounded-xl bg-white border border-[#E6E4DA] px-4 py-3 text-sm text-[#1A2E22] placeholder:text-[#8E9690] focus:outline-none focus:ring-2 focus:ring-[#2F6B48]/25 focus:border-[#2F6B48] resize-none"
        />
      </div>
    </div>
  )
}
