"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Github } from "lucide-react"
import { signIn } from "next-auth/react"
// Note: Firebase auth is not used in this plan; NextAuth handles Google/GitHub OAuth.

export function SignupForm() {
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    signIn('google', { callbackUrl: '/admin' })
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Create your AccessHealthData account</h1>
        <p className="mt-3 text-muted-foreground">
          Build with nationwide healthcare data. Start free with synthetic data—upgrade to production whenever you're
          ready.
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@company.com" className="h-11" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Create a password" className="h-11" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm password</Label>
          <Input id="confirm-password" type="password" placeholder="Confirm your password" className="h-11" />
        </div>

        <div className="flex items-start gap-3">
          <Checkbox
            id="terms"
            checked={agreed}
            onCheckedChange={(checked) => setAgreed(checked as boolean)}
            className="mt-1"
          />
          <Label htmlFor="terms" className="text-sm font-normal leading-relaxed text-muted-foreground">
            I accept the{" "}
            <Link href="/terms" className="text-primary underline hover:text-primary/80">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-primary underline hover:text-primary/80">
              Privacy Policy
            </Link>
            .
          </Label>
        </div>

        <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" disabled={!agreed}>
          Create Free Account
        </Button>
      </form>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-card px-4 text-muted-foreground">Or continue with</span>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
<Button variant="outline" size="lg" className="w-full bg-transparent" onClick={() => signIn('github', { callbackUrl: '/admin' })}>
  <Github className="mr-2 h-5 w-5" />
  GitHub
</Button>
<Button variant="outline" size="lg" className="w-full bg-transparent" onClick={() => signIn('google', { callbackUrl: '/admin' })}>
  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="currentColor"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="currentColor"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="currentColor"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
  Google
</Button>
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/signin" className="text-primary underline hover:text-primary/80">
          Sign in
        </Link>
      </p>
    </div>
  )
}
