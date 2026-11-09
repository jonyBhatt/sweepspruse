import * as React from 'react'
import { ArrowUpRight } from 'lucide-react'

interface FooterLink {
  label: string
  href: string
}

const serviceLinks: FooterLink[] = [
  { label: 'Snow Clearing', href: '/services/snow-clearing' },
  { label: 'Junk Removal', href: '/services/junk-removal' },
  { label: 'Apartment Cleaning', href: '/services/apartment-cleaning' },
  { label: 'Grass Mowing', href: '/services/grass-mowing' },
]

export function Footer() {
  return (
    <footer className="bg-[#1F3A28] text-white py-14 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Row: Brand, Services, Contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12">
          {/* Left Column: Logo & Tagline */}
          <div className="md:col-span-5 space-y-5">
            <a
              href="/"
              className="inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-lg"
              aria-label="Sweep Spruse Home"
            >
              <img
                src="/images/dark-logo.svg"
                alt="Sweep Spruse Logo"
                className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-sans font-semibold text-xl tracking-tight text-white">
                Sweep Spruse
              </span>
            </a>

            <p className="text-sm text-white/75 leading-relaxed max-w-sm">
              A little help. A lot more home. Every season. Every corner.
            </p>
          </div>

          {/* Middle Column: Our Services (2x2 Grid) */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/55">
              OUR SERVICES
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/85 hover:text-white transition-colors duration-200 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Let's Talk */}
          <div className="md:col-span-3 md:justify-self-end space-y-4">
            <h3 className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/55">
              LET&apos;S TALK
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#contacts"
                  className="group inline-flex items-center gap-1.5 text-sm text-white/90 hover:text-white transition-colors duration-200"
                >
                  <span>Get in touch</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm text-white/75 hover:text-white transition-colors duration-200 inline-block"
                >
                  About us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/60">
          <p>&copy; Sweep Spruse. All rights reserved.</p>
          <p>Made for your home.</p>
        </div>
      </div>
    </footer>
  )
}
