import { useState } from 'react'
import { Outlet, useNavigate } from '@tanstack/react-router'
import type { AdminNavId } from '#/components/admin-components/AdminSidebar'
import { AdminSidebar } from '#/components/admin-components/AdminSidebar'
import { AdminHeader } from '#/components/admin-components/Header'
import { authClient } from '#/lib/auth-client'

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/(dashboard)')({
  component: AdminLayout,
})

function AdminLayout() {
  const [activeNav, setActiveNav] = useState<AdminNavId>('overview')
  const [searchQuery, setSearchQuery] = useState('')
  const [isPending, setIsPending] = useState(false)

  const navigate = useNavigate()

  async function handleSignOut() {
    setIsPending(true)

    try {
      const result = await authClient.signOut()
      if (result.error) {
        console.error(
          result.error.message ?? 'Unable to sign out. Please try again.',
        )
        return
      }

      await navigate({ to: '/admin/auth/login' })
    } catch (error) {
      console.error('Unable to sign out. Please try again.', error)
    } finally {
      setIsPending(false)
    }
  }
  return (
    <div className="min-h-dvh flex flex-col md:flex-row bg-[#F5F4ED] text-[#1A2E22]">
      <AdminSidebar
        activeItem={activeNav}
        onSelect={setActiveNav}
        defaultOpen={true}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader
          activeNav={activeNav}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSignOut={handleSignOut}
          isPending={isPending}
        />
        <Outlet />
      </div>
    </div>
  )
}
