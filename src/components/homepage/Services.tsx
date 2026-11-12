import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  CheckCircle2,
  Home,
  Leaf,
  Snowflake,
  Sprout,
  Truck,
} from 'lucide-react'
import * as React from 'react'

interface ServiceItem {
  id: string
  badge: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  image: string
  href: string
}

const services: ServiceItem[] = [
  {
    id: 'snow-removing',
    badge: 'Winter ready',
    title: 'Snow Removing',
    description:
      'Clear driveways, safe walkways, and one less worry when winter arrives.',
    icon: Snowflake,
    image: '/images/serviceimage/snowServicephotograph.png',
    href: '/services/snow-cleaning',
  },
  {
    id: 'home-cleaning',
    badge: 'Fresh starts',
    title: 'Home & Apartment Cleaning',
    description:
      'From weekly refreshes to deep cleans, come home to a space that feels good.',
    icon: Home,
    image: '/images/serviceimage/homeservice.png',
    href: '/services/home-cleaning',
  },
  {
    id: 'junk-cleaning',
    badge: 'Space to breathe',
    title: 'Junk Cleaning',
    description:
      'Reclaim your space. We take care of the clutter, lifting, and responsible disposal.',
    icon: Truck,
    image: '/images/serviceimage/junkcleaning.png',
    href: '/services/junk-cleaning',
  },
  {
    id: 'lawn-care',
    badge: 'Room to grow',
    title: 'Lawn Care & Lawn Maintenance',
    description:
      "Healthy lawns, neat edges, and outdoor spaces you'll love spending time in.",
    icon: Sprout,
    image: '/images/serviceimage/grasscleaning.png',
    href: '/services/grass-cleaning',
  },
]

export function ServicesSection() {
  const [activeCard, setActiveCard] = React.useState<string | null>(null)

  return (
    <section
      id="services"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-background text-foreground"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Eyebrow Bar */}
        <div className="flex items-center justify-between text-xs font-medium mb-6">
          <div className="flex items-center gap-2 text-primary tracking-[0.15em] uppercase">
            <Leaf className="w-4 h-4" />
            <span>OUR SERVICES</span>
          </div>
          <span className="text-muted-foreground hidden sm:inline-block">
            Every season. Every corner.
          </span>
        </div>

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 md:mb-16">
          <div className="lg:col-span-6">
            <h2
              className="font-sans font-bold tracking-tight leading-[1.08] text-foreground"
              style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)' }}
            >
              A little help.
              <br />A lot more home.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:max-w-md lg:ml-auto">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              From the first snowfall to a freshly cut lawn, we make caring for
              your home feel effortless. Find the right help, right here.
            </p>
          </div>
        </div>

        {/* 4-Column Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isRevealed = activeCard === service.id

            return (
              <motion.a
                key={service.id}
                href={service.href}
                onClick={(event) => {
                  if (
                    window.matchMedia('(hover: none)').matches &&
                    !isRevealed
                  ) {
                    event.preventDefault()
                    setActiveCard(service.id)
                  }
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-[420px] sm:h-[440px] rounded-[var(--radius)] bg-card border border-border/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden flex flex-col justify-between p-6 transition-shadow duration-500 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {/* Full-Bleed Background Image (Revealed on Hover or Tap) */}
                <div
                  className={`absolute inset-0 z-0 transition-opacity duration-500 ease-out ${
                    isRevealed
                      ? 'opacity-100'
                      : 'opacity-0 group-hover:opacity-100'
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                      isRevealed
                        ? 'scale-100'
                        : 'scale-105 group-hover:scale-100'
                    }`}
                  />
                  {/* Dark Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/45 to-black/15" />
                </div>

                {/* Top Area: Icon (Default) & Badge (Transforms to Pill on Hover) */}
                <div className="relative z-10 flex flex-col items-start gap-3">
                  <div
                    className={`w-11 h-11 rounded-xl bg-accent text-accent-foreground flex items-center justify-center transition-all duration-300 overflow-hidden ${
                      isRevealed
                        ? 'opacity-0 -translate-y-2 h-0 mb-0'
                        : 'group-hover:opacity-0 group-hover:-translate-y-2 group-hover:h-0 group-hover:mb-0'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <span
                    className={`inline-block text-xs font-medium text-muted-foreground transition-all duration-300 ${
                      isRevealed
                        ? 'bg-card text-foreground px-3.5 py-1.5 rounded-full shadow-sm'
                        : 'group-hover:bg-card group-hover:text-foreground group-hover:px-3.5 group-hover:py-1.5 group-hover:rounded-full group-hover:shadow-sm'
                    }`}
                  >
                    {service.badge}
                  </span>
                </div>

                {/* Bottom Area: Title, Description & Action Footer */}
                <div className="relative z-10 flex flex-col justify-end mt-auto">
                  <h3
                    className={`font-sans font-bold text-xl sm:text-2xl transition-colors duration-300 mb-2.5 leading-snug ${
                      isRevealed
                        ? 'text-white'
                        : 'text-foreground group-hover:text-white'
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-sm transition-colors duration-300 leading-relaxed mb-6 ${
                      isRevealed
                        ? 'text-white/85'
                        : 'text-muted-foreground group-hover:text-white/85'
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Footer Action: Switches from subtle text+circle to solid "Book now" pill */}
                  <div className="relative h-11 flex items-center">
                    {/* Default Footer */}
                    <div
                      className={`w-full flex items-center justify-between transition-all duration-300 ${
                        isRevealed
                          ? 'opacity-0 pointer-events-none'
                          : 'group-hover:opacity-0 group-hover:pointer-events-none'
                      }`}
                    >
                      <span className="text-xs font-medium text-secondary">
                        Made for your home
                      </span>
                      <span className="w-8 h-8 rounded-full border  border-primary/40 flex items-center justify-center text-primary">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    {/* Hover CTA Button */}
                    <div
                      className={`absolute inset-0 flex items-center justify-between bg-accent-foreground px-5 rounded-xl transition-all duration-300 shadow-md ${
                        isRevealed
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
                      }`}
                    >
                      <span className="text-sm font-semibold">Book now</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Bottom Section Footer */}
        <div className="mt-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-accent-foreground shrink-0" />
            <span>One-time help or regular care. Always on your terms.</span>
          </div>
          <a
            href="#contacts"
            className="inline-flex items-center gap-1.5 font-medium text-accent-foreground hover:underline underline-offset-4 transition-all"
          >
            <span>Not sure where to start? Let&apos;s talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
