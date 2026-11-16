import { AdminAuthForm } from '#/components/admin-components/admin-auth-form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/auth/login')({
  component: () => <AdminAuthForm mode="login" />,
})


