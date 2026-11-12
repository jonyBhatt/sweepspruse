import * as React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import {
  Plus,
  ArrowUpRight,
  HelpCircle,
  Snowflake,
  Sparkles,
  Package,
  Sprout,
  Building2,
} from 'lucide-react'
import { OWNER_WHATSAPP_NUMBER } from '../../features/quote/utils/whatsapp'

type FaqCategory =
  | 'all'
  | 'snow-clearing'
  | 'apartment-cleaning'
  | 'junk-removal'
  | 'grass-mowing'
  | 'property-managers'

interface FaqItem {
  id: string
  category: Exclude<FaqCategory, 'all'>
  question: string
  answer: React.ReactNode
}

const categoryTabs: {
  id: FaqCategory
  label: string
  icon?: React.ComponentType<{ className?: string }>
}[] = [
  { id: 'all', label: 'All Questions' },
  { id: 'property-managers', label: 'Hosts & Landlords', icon: Building2 },
  { id: 'snow-clearing', label: 'Snow Clearing', icon: Snowflake },
  { id: 'apartment-cleaning', label: 'Apartment Cleaning', icon: Sparkles },
  { id: 'junk-removal', label: 'Junk Removal', icon: Package },
  { id: 'grass-mowing', label: 'Grass Mowing', icon: Sprout },
]

const faqItems: FaqItem[] = [
  {
    id: 'snow-dispatch',
    category: 'snow-clearing',
    question:
      'Do you dispatch automatically during snowstorms so I don’t get fined or hit with a slip-and-fall claim?',
    answer: (
      <p>
        Yes—if you choose our{' '}
        <strong className="font-semibold text-[#1A2E22]">
          Seasonal Snow Clearing Contract
        </strong>
        , our crews dispatch automatically whenever snow accumulation exceeds{' '}
        <strong className="font-semibold text-[#1A2E22]">1.5 inches</strong>.
        This protects landlords and Airbnb hosts from city sidewalk fines and
        guest slip-and-fall liability without you having to monitor the weather
        remotely. Need help after a single heavy storm? You can also book{' '}
        <strong className="font-semibold text-[#1A2E22]">
          One-Time Snow Removal
        </strong>{' '}
        on demand.
      </p>
    ),
  },
  {
    id: 'snow-equipment',
    category: 'snow-clearing',
    question:
      'Why do you use hand-operated snow clearing equipment instead of plow trucks?',
    answer: (
      <p>
        Heavy plow trucks can scrape delicate interlock driveways, damage lawn
        edges, and often cannot reach tight residential walkways, porches, or
        multi-step entrances. Using hand-operated equipment lets us clear{' '}
        <strong className="font-semibold text-[#1A2E22]">
          driveways, walkways, and stairs
        </strong>{' '}
        cleanly and safely right up to your front door without risking property
        damage.
      </p>
    ),
  },
  {
    id: 'airbnb-turnover',
    category: 'apartment-cleaning',
    question:
      'Can you handle tight tenant turnovers or same-day Airbnb check-ins?',
    answer: (
      <p>
        Yes. We offer{' '}
        <strong className="font-semibold text-[#1A2E22]">
          Standard, Deep Clean, and Move-In/Move-Out
        </strong>{' '}
        apartment cleaning options, along with flexible scheduling windows
        (Morning, Afternoon, Evening, or Flexible). Whether a tenant just moved
        out or you need a crisp reset between short-term guests, you can choose
        the exact intensity your unit needs.
      </p>
    ),
  },
  {
    id: 'cleaning-tiers',
    category: 'apartment-cleaning',
    question:
      'What is the difference between Standard, Deep Clean, and Move-In/Move-Out cleaning?',
    answer: (
      <ul className="space-y-2 list-disc pl-4">
        <li>
          <strong className="font-semibold text-[#1A2E22]">
            Standard Clean:
          </strong>{' '}
          Ideal for routine upkeep or regular guest turnovers (surfaces, floors,
          kitchen, and bathrooms).
        </li>
        <li>
          <strong className="font-semibold text-[#1A2E22]">Deep Clean:</strong>{' '}
          Detailed scrubbing for built-up grime, baseboards, and high-touch
          areas that need extra attention.
        </li>
        <li>
          <strong className="font-semibold text-[#1A2E22]">
            Move-In/Move-Out:
          </strong>{' '}
          Designed for empty or transitioning apartments to get the unit
          completely ready for a new tenant or listing photos.
        </li>
      </ul>
    ),
  },
  {
    id: 'recurring-schedules',
    category: 'property-managers',
    question:
      'Do you offer recurring schedules for rental properties, multi-unit buildings, or active listings?',
    answer: (
      <p>
        Absolutely. For{' '}
        <strong className="font-semibold text-[#1A2E22]">
          Apartment Cleaning
        </strong>
        , you can book One-time, Weekly, Bi-Weekly, or Monthly visits. For{' '}
        <strong className="font-semibold text-[#1A2E22]">Grass Mowing</strong>{' '}
        and{' '}
        <strong className="font-semibold text-[#1A2E22]">Snow Clearing</strong>,
        you can book single visits or set up recurring seasonal care so your
        curb appeal stays consistent all year.
      </p>
    ),
  },
  {
    id: 'junk-scope',
    category: 'junk-removal',
    question:
      'A tenant left boxes and clutter behind—what kind of junk do you remove?',
    answer: (
      <p>
        We handle lightweight, hand-carryable clutter—such as bagged trash,
        cardboard boxes, small household items, and general apartment
        clear-outs—at a very affordable cost. Because our crews work{' '}
        <strong className="font-semibold text-[#1A2E22]">
          by hand without heavy dump trucks
        </strong>
        , we do not haul heavy appliances, construction debris, or oversized
        bulk furniture.
      </p>
    ),
  },
  {
    id: 'junk-photo-quote',
    category: 'junk-removal',
    question: 'How do I get a price for Junk Removal if there’s no fixed rate?',
    answer: (
      <p>
        Simply select{' '}
        <strong className="font-semibold text-[#1A2E22]">Junk Removal</strong>{' '}
        in our quote tool and{' '}
        <strong className="font-semibold text-[#1A2E22]">
          upload or take a quick photo
        </strong>{' '}
        of the items—you don’t even need to fill out a long description if you
        attach a photo. Choose your preferred date and address, and we’ll review
        it and send you a fast, transparent quote.
      </p>
    ),
  },
  {
    id: 'remote-access',
    category: 'property-managers',
    question:
      'I manage properties remotely—do I need to be on-site while your crew works?',
    answer: (
      <p>
        Not at all. Many of our clients are remote Airbnb hosts, landlords, and
        real estate agents. During booking, you can leave{' '}
        <strong className="font-semibold text-[#1A2E22]">
          building access codes, lockbox details, gate instructions, or parking
          notes
        </strong>{' '}
        so our crew can complete the job seamlessly while you’re away.
      </p>
    ),
  },
  {
    id: 'lawn-driveway-sizing',
    category: 'grass-mowing',
    question:
      'How do I know which driveway or lawn size to pick when booking online?',
    answer: (
      <p>
        You can estimate using our straightforward tiers (Small, Medium, Large,
        or Extra Large / Corner Property). If you aren’t sure which tier fits
        your lot or driveway, request a{' '}
        <strong className="font-semibold text-[#1A2E22]">
          Free Consultation
        </strong>{' '}
        or mention your approximate dimensions—we’ll help confirm the right
        option before your visit.
      </p>
    ),
  },
  {
    id: 'bundling-services',
    category: 'property-managers',
    question:
      'Can I bundle multiple services (like a Move-Out Clean + Junk Removal) for one property?',
    answer: (
      <p>
        To keep pricing transparent and scheduling accurate, each online quote
        request covers{' '}
        <strong className="font-semibold text-[#1A2E22]">
          one service category at a time
        </strong>
        . However, if you’re preparing a listing or turning over a rental and
        need multiple services back-to-back, submit them separately or book a{' '}
        <strong className="font-semibold text-[#1A2E22]">
          Free 30-Minute Consultation
        </strong>{' '}
        so we can coordinate the schedule for you.
      </p>
    ),
  },
]

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>('all')
  const [openId, setOpenId] = useState<string | null>(faqItems[0].id)

  const filteredFaqs =
    activeCategory === 'all'
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory)

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section
      id="faq"
      className="bg-primary-foreground text-[#1A2E22] py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#E6E4DA]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* =========================================================
              LEFT COLUMN: STICKY EDITORIAL HEADER & CTA CARD
          ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 lg:sticky lg:top-32 space-y-6"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-white border border-[#E5E3D8] shadow-xs flex items-center justify-center text-[#2F6B48]">
                <HelpCircle className="w-4 h-4" />
              </span>
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#5A655E]">
                COMMON QUESTIONS
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-serif font-normal tracking-tight leading-[1.08] text-[#1A2E22]"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}
            >
              Clear answers for busy homeowners & hosts.
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#5A655E] leading-relaxed max-w-md">
              Everything you need to know about our hand-operated equipment,
              turnover schedules, seasonal contracts, and photo-based quotes.
            </p>

            {/* Support Card */}
            <div className="pt-2">
              <div className="bg-[#FAF9F5] rounded-[var(--radius)] p-6 border border-[#E6E4DA] shadow-xs space-y-4">
                <div className="space-y-1">
                  <h3 className="font-sans font-semibold text-base text-[#1A2E22]">
                    Managing multiple units or a listing?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A655E] leading-relaxed">
                    Book a free 30-minute consultation to plan recurring care or
                    back-to-back turnovers.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href={`https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I would like to book a free 30-minute consultation to discuss recurring care or back-to-back turnovers.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 bg-[#2F6B48] text-white text-xs sm:text-sm font-medium px-5 py-3 rounded-xl shadow-sm hover:bg-[#25573A] transition-all duration-300"
                  >
                    <span>Book free consultation</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <Link
                    to="/quote"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#1A2E22] hover:text-[#2F6B48] px-3 py-2.5 transition-colors"
                  >
                    <span>Get a quote</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================================================
              RIGHT COLUMN: CATEGORY FILTER PILLS & ACCORDION LIST
          ========================================================= */}
          <div className="lg:col-span-7 space-y-6">
            {/* Interactive Filter Tabs with Shared Layout Pill */}
            <div
              role="tablist"
              aria-label="Filter frequently asked questions"
              className="flex flex-wrap items-center gap-2 pb-2"
            >
              {categoryTabs.map((tab) => {
                const isActive = activeCategory === tab.id
                const Icon = tab.icon

                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={isActive}
                    type="button"
                    onClick={() => {
                      setActiveCategory(tab.id)
                      const firstMatch =
                        tab.id === 'all'
                          ? faqItems[0]
                          : faqItems.find((f) => f.category === tab.id)
                      setOpenId(firstMatch ? firstMatch.id : null)
                    }}
                    className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 cursor-pointer inline-flex items-center gap-1.5 ${
                      isActive
                        ? 'text-white'
                        : 'text-[#4A554E] bg-white/80 hover:bg-white border border-[#E6E4DA]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeFaqTab"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                        className="absolute inset-0 bg-[#1F3A28] rounded-full -z-0"
                      />
                    )}
                    {Icon && (
                      <Icon
                        className={`w-3.5 h-3.5 relative z-10 ${
                          isActive ? 'text-white' : 'text-[#2F6B48]'
                        }`}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Accordion Stack */}
            <motion.div layout className="space-y-3">
              <AnimatePresence mode="popLayout" initial={false}>
                {filteredFaqs.map((item, index) => {
                  const isOpen = openId === item.id

                  return (
                    <motion.div
                      layout
                      key={item.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{
                        duration: 0.3,
                        delay: Math.min(index * 0.04, 0.25),
                      }}
                      className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${
                        isOpen
                          ? 'bg-white border-[#2F6B48]/40 shadow-[0_8px_24px_rgb(26,46,34,0.05)]'
                          : 'bg-[#FAF9F5] border-[#E6E4DA] hover:border-[#2F6B48]/30 hover:bg-white/70'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => handleToggle(item.id)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${item.id}`}
                        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 cursor-pointer group"
                      >
                        <div className="flex items-start gap-3.5">
                          <span className="font-mono text-xs font-medium text-[#2F6B48] pt-1 select-none">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span
                            className={`font-sans font-semibold text-sm sm:text-base leading-snug transition-colors ${
                              isOpen
                                ? 'text-[#1A2E22]'
                                : 'text-[#26382D] group-hover:text-[#1A2E22]'
                            }`}
                          >
                            {item.question}
                          </span>
                        </div>

                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 25,
                          }}
                          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                            isOpen
                              ? 'bg-[#2F6B48] text-white'
                              : 'bg-[#F5F4ED] text-[#1A2E22] group-hover:bg-[#E6E4DA]'
                          }`}
                        >
                          <Plus className="w-4 h-4" />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`faq-panel-${item.id}`}
                            role="region"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              height: {
                                duration: 0.32,
                                ease: [0.04, 0.62, 0.23, 0.98],
                              },
                              opacity: { duration: 0.22, delay: 0.06 },
                            }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 pl-13 text-xs sm:text-sm text-[#5A655E] leading-relaxed border-t border-[#F0EFE8] pt-4">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
