import { AnimatePresence, motion } from 'framer-motion'
import {
  CalendarDays,
  ClipboardList,
  HelpCircle,
  LayoutDashboard,
  Menu,
  MessageSquare,
  Percent,
  Settings,
  SlidersHorizontal,
  X
} from 'lucide-react'
import * as React from 'react'
import { useEffect, useState } from 'react'

export type AdminNavId =
  | 'overview'
  | 'quotes'
  | 'discounts'
  | 'consultations'
  | 'pricing'
  | 'schedule'
  | 'settings'
  | 'help'

interface NavItem {
  id: AdminNavId
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  badge?: number
}

interface AdminSidebarProps {
  activeItem?: AdminNavId
  onSelect?: (id: AdminNavId) => void
  defaultOpen?: boolean
}

const primaryNavItems: NavItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    id: 'quotes',
    label: 'Quote Queue',
    // href: '/admin/quotes',
    href: '#',
    icon: ClipboardList,
    badge: 4,
  },
  {
    id: 'discounts',
    label: 'Discounts & Promos',
    // href: '/admin/discounts',
    href: '#',
    icon: Percent,
  },
  {
    id: 'consultations',
    label: 'Consultation Inbox',
    // href: '/admin/consultations',
    href: '#',
    icon: MessageSquare,
    badge: 2,
  },
  {
    id: 'pricing',
    label: 'Services & Pricing',
    // href: '/admin/pricing',
    href: '#',
    icon: SlidersHorizontal,
  },
  {
    id: 'schedule',
    label: 'Dispatch Calendar',
    // href: '/admin/schedule',
    href: '#',
    icon: CalendarDays,
  },
]

const bottomNavItems: NavItem[] = [
  {
    id: 'settings',
    label: 'Settings',
    // href: '/admin/settings',
    href: '#',

    icon: Settings,
  },
  {
    id: 'help',
    label: 'Support & Docs',
    // href: '/admin/help',
    href: '#',

    icon: HelpCircle,
  },
]

export function AdminSidebar({
  activeItem = 'overview',
  onSelect,
  defaultOpen = false,
}: AdminSidebarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen)
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false)

  // Keyboard shortcut: Ctrl+E (or Cmd+E on macOS) to toggle sidebar
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'e') {
        event.preventDefault()
        if (window.innerWidth < 768) {
          setIsMobileOpen((prev) => !prev)
        } else {
          setIsOpen((prev) => !prev)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem,
  ) => {
    if (onSelect) {
      e.preventDefault()
      onSelect(item.id)
    }
    setIsMobileOpen(false)
  }

  const renderNavLink = (item: NavItem, expanded: boolean) => {
    const Icon = item.icon
    const isActive = activeItem === item.id

    return (
      <a
        key={item.id}
        href={item.href}
        onClick={(e) => handleNavClick(e, item)}
        title={!expanded ? item.label : undefined}
        className={`group relative flex items-center gap-3 rounded-xl px-2.5 py-2.5 text-sm font-medium transition-all duration-200 ${
          isActive
            ? 'bg-[#2F6B48] text-white shadow-xs'
            : 'text-[#4A554E] hover:bg-[#E2E4DA] hover:text-[#1A2E22]'
        } ${!expanded ? 'justify-center' : ''}`}
      >
        <Icon
          className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
            isActive
              ? 'text-white'
              : 'text-[#5A655E] group-hover:text-[#1A2E22]'
          }`}
        />

        {expanded && (
          <motion.span
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -4 }}
            transition={{ duration: 0.18 }}
            className="truncate flex-1"
          >
            {item.label}
          </motion.span>
        )}

        {/* Notification Badge */}
        {item.badge !== undefined && item.badge > 0 && (
          <>
            {expanded ? (
              <span
                className={`text-[11px] font-semibold px-2 py-0.5 rounded-full tabular-nums ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-[#2F6B48]/12 text-[#2F6B48]'
                }`}
              >
                {item.badge}
              </span>
            ) : (
              <span
                className={`absolute top-2 right-2 w-1.5 h-1.5 rounded-full ${
                  isActive ? 'bg-white' : 'bg-[#2F6B48]'
                }`}
              />
            )}
          </>
        )}

        {/* Hover Tooltip when collapsed */}
        {!expanded && (
          <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-lg bg-[#1F3A28] px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-md transition-opacity duration-150 group-hover:opacity-100 z-50">
            {item.label}
          </span>
        )}
      </a>
    )
  }

  return (
    <>
      {/* =========================================================
          MOBILE TOP TRIGGER BAR (< md)
      ========================================================= */}
      <div className="md:hidden sticky top-0 z-40 flex items-center justify-between bg-[#EBECE4] border-b border-[#DCDED4] px-4 py-3">
        <a href="/admin" className="flex items-center gap-2.5">
          <img
            src="/images/logo/white-logo.svg"
            alt="Sweep Spruse"
            className="object-contain p-1 size-12 rounded-lg"
          />
          <span className="font-sans font-semibold text-sm text-[#1A2E22]">
            Sweep Spruse Admin
          </span>
        </a>

        <button
          type="button"
          onClick={() => setIsMobileOpen(true)}
          aria-label="Open admin navigation"
          className="inline-flex items-center gap-1.5 rounded-xl bg-white border border-[#E6E4DA] px-3 py-2 text-xs font-medium text-[#1A2E22] shadow-2xs hover:bg-[#F5F4ED] transition-colors cursor-pointer"
        >
          <Menu className="w-4 h-4 text-[#2F6B48]" />
          <span>Menu</span>
        </button>
      </div>

      {/* =========================================================
          MOBILE SLIDE-OVER DRAWER (< md)
      ========================================================= */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 z-50 bg-[#1A2E22]/35 backdrop-blur-xs md:hidden"
            />

            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 360, damping: 34 }}
              aria-label="Mobile Admin Navigation"
              className="fixed inset-y-0 left-0 z-50 w-72 bg-[#EBECE4] border-r border-[#DCDED4] flex flex-col justify-between p-4 md:hidden shadow-xl"
            >
              <div className="space-y-6">
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#DCDED4]">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/images/logo/dark-logo.svg"
                      alt="Sweep Spruse"
                      className="w-8 h-8 object-contain  p-1.5 rounded-xl"
                    />
                    <div>
                      <p className="font-sans font-semibold text-sm text-[#1A2E22]">
                        Sweep Spruse
                      </p>
                      <p className="text-[11px] text-[#5A655E]">
                        Admin Workspace
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsMobileOpen(false)}
                    aria-label="Close navigation"
                    className="p-2 rounded-xl text-[#5A655E] hover:bg-[#E2E4DA] hover:text-[#1A2E22] transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Primary Links */}
                <nav className="space-y-1">
                  {primaryNavItems.map((item) => renderNavLink(item, true))}
                </nav>
              </div>

              {/* Bottom Links */}
              <div className="pt-4 border-t border-[#DCDED4] space-y-1">
                {bottomNavItems.map((item) => renderNavLink(item, true))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* =========================================================
          DESKTOP COLLAPSIBLE SIDEBAR RAIL (>= md)
      ========================================================= */}
      <motion.aside
        initial={false}
        animate={{ width: isOpen ? 248 : 64 }}
        transition={{ type: 'spring', stiffness: 380, damping: 34 }}
        aria-label="Admin Navigation"
        className="hidden md:flex relative shrink-0 min-h-screen bg-[#EBECE4] border-r border-[#DCDED4] flex-col justify-between py-4 px-2.5 select-none z-30"
      >
        {/* Top Border-straddling Toggle Button */}
        {/* <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={
            isOpen ? 'Collapse sidebar (Ctrl+E)' : 'Expand sidebar (Ctrl+E)'
          }
          title="Toggle sidebar (Ctrl + E)"
          className="absolute top-5 -right-3.5 z-40 w-7 h-7 rounded-lg bg-white border border-[#DCDED4] shadow-xs flex items-center justify-center text-[#5A655E] hover:text-[#1A2E22] hover:border-[#2F6B48]/50 transition-all duration-200 cursor-pointer"
        >
          <PanelLeft
            className={`w-3.5 h-3.5 transition-transform duration-300 ${
              isOpen ? 'rotate-180 text-[#2F6B48]' : ''
            }`}
          />
        </button> */}

        {/* Brand Header */}
        <div
          className={`flex items-center gap-3 px-1.5 pt-0.5 ${
            !isOpen ? 'justify-center' : ''
          }`}
        >
          <a
            href="/admin"
            className="w-9 h-9 rounded-xl  flex items-center justify-center shrink-0 shadow-2xs"
          >
            <img
              src="/images/logo/white-logo.svg"
              alt="Sweep Spruse"
              className="object-cover size-16"
            />
          </a>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <p className="font-sans font-semibold text-sm text-[#1A2E22] truncate">
                Sweep Spruse
              </p>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-[#5A655E]">Admin</span>
                <kbd className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/80 border border-[#DCDED4] text-[#5A655E]">
                  Ctrl+E
                </kbd>
              </div>
            </motion.div>
          )}
        </div>

        {/* Primary Navigation */}
        <div className="flex flex-1 items-center">
          <nav className="w-full space-y-1.5">
            {primaryNavItems.map((item) => renderNavLink(item, isOpen))}
          </nav>
        </div>

        {/* Bottom Section: Utilities */}
        <div className="pt-4 border-t border-[#DCDED4] space-y-1.5">
          {bottomNavItems.map((item) => renderNavLink(item, isOpen))}
        </div>
      </motion.aside>
    </>
  )
}
