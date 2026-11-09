import { Footer } from '#/components/shared/Footer'
import { Navbar } from '#/components/shared/Navbar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(main)')({
  component: MainLayout,
})

function MainLayout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
