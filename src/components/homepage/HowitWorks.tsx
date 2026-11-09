import * as React from 'react'
import { motion } from 'framer-motion'
import { Sparkle, Grid, Plus, Sun, ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'

interface StepItem {
  number: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

const steps: StepItem[] = [
  {
    number: '01',
    icon: Sparkle,
    title: 'Leave a request',
    description:
      'Fill out our simple online form or call us to choose the required cleaning service and preferred time.',
  },
  {
    number: '02',
    icon: Grid,
    title: 'Agreement & Estimation',
    description:
      'We discuss your specific cleaning needs, calculate the transparent cost, and confirm your booking.',
  },
  {
    number: '03',
    icon: Plus,
    title: 'We do the cleaning',
    description:
      'Our professional team meticulously cleans your property from top to bottom, ensuring an immaculate and spotless result.',
  },
  {
    number: '04',
    icon: Sun,
    title: 'Enjoy a fresh space',
    description:
      'Inspect the immaculate cleanliness, step into your freshly detailed space, and enjoy your free time.',
  },
]

export function HowItWorks() {
  return (
    <section id="process" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-background text-foreground relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          {/* Title with bullet indicator */}
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-primary mt-3 md:mt-4 shrink-0" />
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] capitalize">
              how it <br className="hidden sm:block" />
              <span className="text-primary font-serif">works</span>
            </h2>
          </div>

          {/* Action Pill matching design reference */}
          <div>
            <Link to="/quote" className="flex items-center">
              <button className="py-2 text-center px-4 rounded-full bg-primary text-primary-foreground font-sans hover:bg-primary/60 transition-colors capitalize font-medium duration-300 text-sm cursor-pointer ">
                get a free quote
              </button>
              <div className="rounded-full size-8 flex items-center justify-center bg-primary">
                <ArrowRight className="transition-colors size-5 duration-300 hover:bg-primary/60  text-primary-foreground" />
              </div>
            </Link>
          </div>
        </div>

        {/* 4-Column Cards Grid with Exact Tactile Shadows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-3xl py-3 px-8 border border-border/80  shadow-[0_4px_20px_rgb(0,0,255,0.1)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden "
              >
                {/* Top Icon & Optional Step Number */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground/50">
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-foreground mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-primary" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
