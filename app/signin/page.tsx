"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 border border-border rounded-2xl bg-card shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-4">Sign in to Access Health Data</h1>
        <p className="text-muted-foreground mb-6">
          Sign in with Google or GitHub to access your dashboard.
        </p>

        <div className="space-y-3">
          <Button onClick={() => signIn('google', { callbackUrl: '/admin' })} className="w-full" variant="outline">
            Continue with Google
          </Button>
          <Button onClick={() => signIn('github', { callbackUrl: '/admin' })} className="w-full" variant="outline">
            Continue with GitHub
          </Button>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don’t have an account?{' '}
          <Link href="/signup" className="text-primary underline hover:text-primary/80">Create one</Link>
        </p>
      </div>
    </div>
  )
}
