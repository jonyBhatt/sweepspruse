import { betterAuth } from 'better-auth'
import { tanstackStartCookies } from 'better-auth/tanstack-start'
import { prismaAdapter } from 'better-auth/adapters/prisma'

import { prisma } from '#/db'

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'sqlite',
  }),
  session: {
    expiresIn: 60 * 60 * 24 * 7,
    // Keep sessions fixed at seven days instead of extending them on activity.
    updateAge: 60 * 60 * 24 * 8,
  },
  emailAndPassword: {
    enabled: true,
  },
  plugins: [tanstackStartCookies()],
})
