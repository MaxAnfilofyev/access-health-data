import type { Metadata } from "next"
import { SignupForm } from "@/components/signup/signup-form"
import { WhatHappensNext } from "@/components/signup/what-happens-next"
import { ReadyForProduction } from "@/components/signup/ready-for-production"
import { WhyWeLittle } from "@/components/signup/why-we-ask-little"
import { SignupSecurity } from "@/components/signup/signup-security"
import { SignupFaq } from "@/components/signup/signup-faq"
import { SignupCta } from "@/components/signup/signup-cta"

export const metadata: Metadata = {
  title: "Create Account | AccessHealthData",
  description:
    "Build with nationwide healthcare data. Start free with synthetic data—upgrade to production whenever you're ready.",
}

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <SignupForm />
          </div>
          <div className="space-y-12">
            <WhatHappensNext />
            <ReadyForProduction />
          </div>
        </div>

        <div className="mt-24 space-y-24">
          <WhyWeLittle />
          <SignupSecurity />
          <SignupFaq />
          <SignupCta />
        </div>
      </div>
    </main>
  )
}
