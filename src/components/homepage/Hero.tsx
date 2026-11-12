import * as React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Check, Sparkles } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-background text-foreground pt-28 md:pt-36 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-between">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
        {/* Top Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center justify-center gap-3 mb-6 md:mb-10"
        >
          <span className="h-px w-8 md:w-16 bg-primary" />
          <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
            Sweep &bull; Spruse
          </span>
          <span className="h-px w-8 md:w-16 bg-primary" />
        </motion.div>

        {/* Headings with Animated Color & Fluid Clamp Typography */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h1
            className="font-serif font-normal tracking-tight leading-[1.05]"
            style={{ fontSize: 'clamp(2.75rem, 6.5vw, 6rem)' }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block"
            >
              Less mess.
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                color: [
                  'var(--foreground)',
                  'var(--primary)',
                  'var(--foreground)',
                ],
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.4 },
                color: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="inline-block mt-1 md:mt-2 text-primary italic font-serif"
            >
              More living.
            </motion.span>
          </h1>
        </div>

        {/* Asymmetric Content Grid (Image & Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto w-full">
          {/* Left Column: Image with floating badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="lg:col-span-6 relative flex flex-col"
          >
            <div className="relative overflow-hidden aspect-4/5 sm:aspect-4/3 lg:aspect-auto lg:min-h-[clamp(22rem,40vw,34rem)] lg:flex-1">
              {/* Replace with your actual hero image path */}
              <img
                src="/images/cleaning.png"
                alt="Clean modern kitchen interior"
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 rounded"
              />
              {/* Floating Badge Card inside image */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-60 bg-card/90 backdrop-blur-md p-4 rounded-2xl border border-border/50 shadow-lg">
                <div className="flex items-center gap-2 mb-1 text-primary">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-semibold tracking-wide uppercase">
                    Fresh feels like this.
                  </span>
                </div>
                <p className="text-xs text-muted-foreground font-sans">
                  Leave the little things to us.
                </p>
              </div>
            </div>
            <div className="max-w-7xl mx-auto w-full pt-4 pb-4 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground/70 gap-2 border-t border-border/20">
              <p>A little care. A lovely difference.</p>
              <p className="tracking-widest uppercase font-mono text-[10px]">
                THE SWEEP SPRUSE WAY
              </p>
            </div>
          </motion.div>

          {/* Right Column: Action Card & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="lg:col-span-6"
          >
            <div className="bg-card/30 rounded-4xl p-6 sm:p-8 md:p-10 shadow-md flex flex-col space-y-8 h-full">
              {/* Descriptive Paragraph */}
              <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
                <p style={{ fontSize: 'clamp(1rem, 1.3vw, 1.25rem)' }}>
                  We elevate your space with exclusive, elite cleaning
                  standards. Our discreet team delivers premier, tailored
                  service for Quebec, ensuring luxury and expert care that
                  speaks for itself.
                </p>
                <p style={{ fontSize: 'clamp(1rem, 1.3vw, 1.25rem)' }}>
                  We grant you absolute peace of mind and pristine results.
                </p>
              </div>

              {/* Action Buttons Group */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 border-b pb-4">
                <Link to="/quote" className="flex items-center">
                  <button className="py-2 text-center px-4 rounded-full bg-primary text-primary-foreground font-sans hover:bg-primary/60 transition-colors capitalize font-medium duration-300 text-sm cursor-pointer ">
                    get a free quote
                  </button>
                  <div className="rounded-full size-8 flex items-center justify-center bg-primary">
                    <ArrowRight className="transition-colors size-5 duration-300 hover:bg-primary/60  text-primary-foreground" />
                  </div>
                </Link>

                <a
                  href="#services"
                  className="group inline-flex items-center justify-center gap-2 text-foreground font-medium py-3.5 px-6 rounded-full border border-border hover:bg-muted/50 transition-all duration-300"
                >
                  <span>Explore our services</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.85, ease: 'easeOut' }}
                className="flex min-h-44 flex-1 flex-col justify-center border-y border-border/60 py-7"
              >
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  A little more time for you
                </p>
                <h2 className="mt-3 max-w-lg font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
                  Your day off should feel like a day off.
                </h2>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Leave the cleaning, snow, and clutter to us. Get back to what
                  you&apos;d rather be doing.
                </p>
                <motion.span
                  aria-hidden="true"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 1.2,
                    ease: 'easeOut',
                  }}
                  className="mt-6 h-px w-16 origin-left bg-primary"
                />
              </motion.div>

              {/* Feature Checkmarks Footer */}
              <div className="border-t border-border/60 pt-6 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Home & apartment cleaning</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Snow removal</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Junk removal</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Subtext Row */}
    </section>
  )
}
