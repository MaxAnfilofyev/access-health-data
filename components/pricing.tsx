import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const coreTiers = [
  {
    name: "Free Developer",
    price: "$0",
    period: "/month",
    description: "Sandbox with synthetic data",
    features: [
      "Unlimited API calls",
      "20 MB processing included",
      "20 MB storage included",
      "No PHI access",
      "No BAA required",
    ],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    description: "For small pilots and POCs",
    features: [
      "0.5 GB processing included",
      "0.5 GB storage included",
      "$75/GB processing overage",
      "$30/GB storage overage",
      "BAA included",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$499",
    period: "/month",
    description: "For growing clinical products",
    features: [
      "2 GB processing included",
      "2 GB storage included",
      "$35/GB processing overage",
      "$15/GB storage overage",
      "Priority support",
      "BAA included",
    ],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Scale",
    price: "$1,999",
    period: "/month",
    description: "For high-volume production apps",
    features: [
      "10 GB processing included",
      "10 GB storage included",
      "$15/GB processing overage",
      "$10/GB storage overage",
      "Dedicated Discord channel",
      "BAA included",
    ],
    cta: "Get Started",
    highlight: false,
  },
] as const

const enterpriseTier = {
  name: "Enterprise",
  price: "From $7,500",
  period: "/month",
  description: "For serious scale and regulated environments",
  features: [
    "50+ GB processing & storage included",
    "Custom overage pricing",
    "SLA-backed uptime",
    "Priority support & Discord channel",
    "Quarterly architecture review",
    "BAA included",
  ],
  cta: "Talk to Sales",
}

// Not shown on the public grid – for internal/sales use.
const superEnterpriseTier = {
  name: "Super Enterprise",
  price: "Custom",
  period: "",
  description: "For national-scale platforms and payers",
  features: [
    "200+ GB processing & storage included",
    "Volume-based pricing down to $3/GB",
    "Dedicated solutions architect",
    "Monthly architecture review",
    "Security & compliance reviews",
    "BAA + custom DPAs",
  ],
  cta: "Contact Sales",
}


export function Pricing() {
  return (
    <section id="pricing" className="bg-muted px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple pricing. Predictable bills.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Each tier includes a fixed monthly platform fee plus included processing and storage. Overage is billed at
            published per-GB rates.
          </p>
        </div>

        {/* Core tiers */}
        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {coreTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-xl border p-6 ${
                tier.highlight
                  ? "border-primary bg-background shadow-lg ring-2 ring-primary"
                  : "border-border bg-background"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most popular
                </span>
              )}

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold text-foreground">{tier.price}</span>
                <span className="text-muted-foreground">{tier.period}</span>
              </div>

              <ul className="mb-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href={tier.name === "Free Developer" ? "/signup" : "/signup"}>
                <Button
                  className={
                    tier.highlight
                      ? "w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      : "w-full border-secondary text-secondary hover:bg-secondary/5"
                  }
                  variant={tier.highlight ? "default" : "outline"}
                >
                  {tier.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Enterprise callout */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[2fr,3fr] items-center">
          <div className="rounded-xl border border-border bg-background p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-foreground">{enterpriseTier.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{enterpriseTier.description}</p>

            <div className="mt-4">
              <span className="text-3xl font-bold text-foreground">{enterpriseTier.price}</span>
              <span className="text-muted-foreground">{enterpriseTier.period}</span>
            </div>

            <ul className="mt-6 space-y-3">
              {enterpriseTier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Link href="/enterprise">
                <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                  {enterpriseTier.cta}
                </Button>
              </Link>
            </div>

            <p className="mt-3 text-xs text-muted-foreground">
              Need national-scale coverage or payer integrations? Talk to us about Super Enterprise pricing.
            </p>
          </div>

          {/* Usage examples */}
          <div className="rounded-xl border border-border bg-background p-6 sm:p-8">
            <h3 className="mb-4 text-lg font-semibold text-foreground">Not sure how much data you need?</h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Here are typical ranges based on real-world clinical data. Actual usage will vary by market and patient mix.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-muted p-4">
                <p className="font-medium text-foreground">1,000 chronically managed patients</p>
                <p className="text-sm text-muted-foreground">~1.5–2 GB initial load, ~0.2 GB/month ongoing</p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <p className="font-medium text-foreground">1,000 outpatient visits</p>
                <p className="text-sm text-muted-foreground">~150–300 MB clinical documents</p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <p className="font-medium text-foreground">1,000 labs</p>
                <p className="text-sm text-muted-foreground">~80–200 MB normalized FHIR</p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <p className="font-medium text-foreground">1,000 PDF documents</p>
                <p className="text-sm text-muted-foreground">~200–700 MB post-OCR</p>
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-muted-foreground">
              You only pay for what you process and store. No setup fees, no per-user charges, no surprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
