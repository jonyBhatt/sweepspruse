import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Menu } from 'lucide-react'
import { useEffect, useState } from 'react'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  // { label: 'about', href: '#about' },
  { label: 'services', href: '#services' },
  { label: 'our process', href: '#process' },
  { label: 'contacts', href: '#contacts' },
]
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 19)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50  transition-all duration-300 ${
        isScrolled
          ? 'bg-background/75 backdrop-blur-xl border-b border-border/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left Side: Logo + Nav Items grouped closely together like the design */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
            aria-label="Home"
          >
            <div className="relative flex items-center justify-center">
              <img
                src="/images/logo/white-logo.svg"
                alt="SQ Logo"
                className="size-20
                object-cover  transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            {/* The small dot emblem next to S matching the design */}
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-normal  transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px]  hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Side: Exact Split Pill CTA Button */}
        <div className="hidden md:flex items-center">
          <Link to="/quote" className="flex items-center">
            <button className="py-1.5 px-6 rounded-full bg-primary text-primary-foreground font-sans hover:bg-primary/60 transition-colors duration-300 text-sm cursor-pointer ">
              book your cleaning
            </button>
            <div className="rounded-full size-8 flex items-center justify-center bg-primary">
              <ArrowRight className="transition-colors duration-300 text-primary-foreground size-4" />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Trigger (shadcn Sheet) */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="p-2.5 rounded-xl bg-primary/20 border  backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-ring"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-95 bg-black/80 
              backdrop-blur-xl border-l border-white/10 flex flex-col justify-between p-6 text-white"
            >
              <div>
                {/* Sheet Header / Logo */}
                <div className="flex items-center justify-between pb-8 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xl tracking-tighter">
                      S<span className="text-primary">.</span>
                    </span>
                    <span className="text-sm text-white/60">Cleaning</span>
                  </div>
                </div>

                {/* Mobile Nav Links */}
                <nav className="flex flex-col gap-6 pt-8">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.label}>
                      <a
                        href={item.href}
                        className="text-lg font-medium text-white/70 hover:text-white transition-colors duration-200 py-2 border-b border-white/10 flex items-center justify-between group"
                      >
                        <span className="capitalize">{item.label}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-primary" />
                      </a>
                    </SheetClose>
                  ))}
                </nav>
              </div>

              {/* Mobile CTA */}
              <div className="pt-6 border-t border-white/10">
                <SheetClose asChild>
                  <a
                    href="#book"
                    className="w-full group inline-flex items-center justify-between bg-white text-black py-3 px-5 rounded-full text-sm font-semibold shadow-sm transition-all duration-300"
                  >
                    <span>book your cleaning</span>
                    <span className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </a>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
