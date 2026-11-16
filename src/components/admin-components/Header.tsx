import { LogOut, Search } from "lucide-react"
import { Button } from "../ui/button"


interface AdminHeaderProps {
    activeNav: string
    searchQuery: string
    setSearchQuery: (query: string) => void
    handleSignOut: () => void
    isPending: boolean
}

export const AdminHeader = ({ activeNav, searchQuery, setSearchQuery, handleSignOut, isPending }: AdminHeaderProps) => {
  return (
    <header className="sticky top-0 z-20 bg-[#FAF9F5]/90 backdrop-blur-md border-b-2 border-[#E6E4DA] px-4 sm:px-8 py-4 ">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Left: Brand & Breadcrumb */}
            <div className="flex items-center gap-3 border-r border-[#E6E4DA] pr-3 sm:pr-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2F6B48]">
                    Sweep Spruse
                  </span>
                  <span className="text-[#D6D4C8]">/</span>
                  <span className="text-xs font-medium capitalize text-[#5A655E]">
                    {activeNav.replace('-', ' ')}
                  </span>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block w-64">
              <Search className="w-4 h-4 text-[#5A655E] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search quotes, leads, addresses..."
                className="w-full rounded-xl bg-transparent  pl-9 pr-3.5 py-2 text-xs text-[#1A2E22] placeholder:text-[#8E9690] focus:outline-none focus:ring-0 focus:border-[#2F6B48] transition-all"
              />
            </div>
            {/* Right: Search & Sign Out */}
            <div className="flex items-center gap-3 border-l border-[#E6E4DA] pl-3 sm:pl-6">
              <Button
                type="button"
                variant="outline"
                onClick={handleSignOut}
                disabled={isPending}
                className="rounded-xl border-[#E6E4DA] bg-white text-[#1A2E22] hover:bg-[#EBECE4] hover:text-[#1A2E22] text-xs sm:text-sm gap-2 cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5 text-[#5A655E]" />
                <span>{isPending ? 'Signing out...' : 'Sign out'}</span>
              </Button>
            </div>
          </div>
        </header>
  )
}