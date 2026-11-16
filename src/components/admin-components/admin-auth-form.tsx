import { Button } from '#/components/ui/button'
import { Input } from '#/components/ui/input'
import { authClient } from '#/lib/auth-client'
import { Link, useNavigate } from '@tanstack/react-router'
import type { SubmitEvent } from 'react'
import { useState } from 'react'

type AdminAuthFormProps = {
  mode: 'login' | 'signup'
}

export function AdminAuthForm({ mode }: AdminAuthFormProps) {
  const [error, setError] = useState('')
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate()
  const isSignup = mode === 'signup'

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setIsPending(true)

    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email'))
    const password = String(formData.get('password'))
    let callbackURL = '/admin'

    try {
      const result = isSignup
        ? await authClient.signUp.email({
            name: String(formData.get('name')),
            email,
            password,
            callbackURL,
          })
        : await authClient.signIn.email({
            email,
            password,
            callbackURL: `/admin/dashboard/home`,
          })

      if (result.error) {
        setError(
          result.error.message ?? 'Unable to authenticate. Please try again.',
        )
        return
      }

      await navigate({ to: '/admin' })
    } catch {
      setError('Unable to authenticate. Please try again.')
    } finally {
      setIsPending(false)
    }
  }

  return (
    <main className="flex min-h-dvh items-center justify-center bg-muted/40 px-4 py-12">
      <section className="w-full max-w-md rounded-xl border bg-background p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Sweepspruse
        </p>
        <h1 className="mt-3 text-3xl font-semibold">
          {isSignup ? 'Create admin account' : 'Admin sign in'}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {isSignup
            ? 'Create an account to access the admin area.'
            : 'Sign in to continue to the admin area.'}
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          {isSignup && (
            <label className="block space-y-2 text-sm font-medium">
              Name
              <Input name="name" autoComplete="name" required />
            </label>
          )}
          <label className="block space-y-2 text-sm font-medium">
            Email
            <Input name="email" type="email" autoComplete="email" required />
          </label>
          <label className="block space-y-2 text-sm font-medium">
            Password
            <Input
              name="password"
              type="password"
              autoComplete={isSignup ? 'new-password' : 'current-password'}
              minLength={8}
              required
            />
          </label>
          {error && (
            <p className="text-sm text-destructive" role="alert">
              {error}
            </p>
          )}
          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending
              ? 'Please wait...'
              : isSignup
                ? 'Create account'
                : 'Sign in'}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          {isSignup ? 'Already have an account? ' : "Don't have an account? "}
          <Link
            className="font-medium text-primary underline-offset-4 hover:underline"
            to={isSignup ? '/admin/login' : '/admin/signup'}
          >
            {isSignup ? 'Sign in' : 'Sign up'}
          </Link>
        </p>
      </section>
    </main>
  )
}
