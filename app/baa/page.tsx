"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, CheckCircle, Download, ExternalLink } from "lucide-react"

export default function BAAPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="border-b border-border bg-muted/30 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Business Associate Agreement (BAA)
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              A standard, attorney-reviewed BAA included with every paid tier.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
              We make HIPAA compliance simple. Review and accept our standard BAA during onboarding—no negotiations, no
              delays, no sales calls.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Overview</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              AccessHealthData provides HIPAA-ready infrastructure for retrieving, normalizing, and storing patient
              medical data. As a Business Associate under HIPAA, we enter into a Business Associate Agreement (BAA) with
              any customer that processes PHI through our platform.
            </p>
            <p className="mt-4 font-medium text-foreground">
              Our BAA is included in all paid tiers. You can review and sign it directly in the onboarding flow.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">How BAA Signing Works</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                {
                  step: 1,
                  title: "Create a paid account",
                  desc: "Upgrade to Starter or above to unlock PHI processing.",
                },
                {
                  step: 2,
                  title: "Review the standard BAA",
                  desc: "Our BAA is written to meet HIPAA's Privacy Rule and Security Rule requirements without customization.",
                },
                {
                  step: 3,
                  title: "Sign electronically",
                  desc: "Sign using your organization's authorized representative. You will immediately receive a signed copy via email and can download it from the dashboard.",
                },
                {
                  step: 4,
                  title: "Enable PHI mode",
                  desc: "Once signed, your API keys can be promoted to PHI-enabled mode.",
                },
              ].map((item) => (
                <Card key={item.step} className="border-border bg-background">
                  <CardContent className="p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                      {item.step}
                    </div>
                    <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Standard BAA */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Why We Use a Standard BAA</h2>
            <p className="mt-4 text-muted-foreground">
              To maintain consistency, reduce risk, and avoid slow contract cycles, we use a standardized,
              attorney-reviewed BAA. This ensures:
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Clear, predictable language",
                "No delays for legal negotiations",
                "Faster onboarding and implementation",
                "Uniform compliance obligations across all customers",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-muted-foreground">
              This approach allows you to begin integrating quickly and safely.
            </p>
          </div>
        </section>

        {/* What BAA Covers */}
        <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">What the BAA Covers</h2>
            <p className="mt-4 text-muted-foreground">Our standard BAA includes:</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Definitions and HIPAA obligations",
                "Permitted uses and disclosures",
                "Safeguards (administrative, physical, technical)",
                "Reporting of security incidents",
                "Subcontractor requirements",
                "Data return and deletion",
                "Termination rights",
                "Breach notification standards",
                "Compliance and audit rights",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">The full legal text is published below.</p>
          </div>
        </section>

        {/* Download */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Download / View BAA</h2>
            <p className="mt-4 text-muted-foreground">Access the complete BAA:</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button
                className="gap-2"
                onClick={() => window.open('/downloads/baas/AccessHealthData — Business Associate Services Agreement (BASA).pdf', '_blank')}
              >
                <Download className="h-4 w-4" />
                Download Standard BASA (PDF)
              </Button>
              <Button
                variant="outline"
                className="gap-2 bg-transparent"
                onClick={() => window.open('/baa/legal', '_blank')}
              >
                <ExternalLink className="h-4 w-4" />
                View Online Version
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              For any questions about the BAA, contact{" "}
              <a href="mailto:legal@accesshealthdata.com" className="text-primary hover:underline">
                legal@accesshealthdata.com
              </a>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-primary px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">
              Upgrade to a paid plan to sign the BAA and enable PHI processing.
            </h2>
            <Button size="lg" variant="secondary" className="mt-8">
              View Pricing Plans
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
