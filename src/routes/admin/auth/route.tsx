import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/auth')({
  component: AuthLayout,
})

function AuthLayout() {
  return <Outlet />
}
