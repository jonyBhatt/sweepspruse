import { AdminAuthForm } from '#/components/admin-components/admin-auth-form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/auth/signup')({
  component: () => <AdminAuthForm mode="signup" />,
})


