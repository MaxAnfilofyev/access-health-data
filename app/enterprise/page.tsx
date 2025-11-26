import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EnterpriseForm } from "@/components/enterprise/enterprise-form"
import { WhatToExpect } from "@/components/enterprise/what-to-expect"

export const metadata = {
  title: "Enterprise Access & Private Infrastructure | AccessHealthData",
  description:
    "Get dedicated infrastructure, deeper usage discounts, and support for large-volume clinical data retrieval.",
}

export default function EnterprisePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-muted px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Enterprise Access & Private Infrastructure
            </h1>
            <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
              Get dedicated infrastructure, deeper usage discounts, and support for large-volume clinical data
              retrieval.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <p className="text-muted-foreground leading-relaxed">
                AccessHealthData Enterprise provides enhanced performance, dedicated infrastructure options, deeper usage discounts, and compliance tools for large-scale clinical data workloads.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We keep the process simple—no enterprise sales cycle, no opaque pricing. Tell us about your use case so we can enable Enterprise Mode quickly.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="px-4 pb-16 sm:px-6 sm:pb-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            <EnterpriseForm />
            <WhatToExpect />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
