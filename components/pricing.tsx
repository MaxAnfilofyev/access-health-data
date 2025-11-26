import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const tiers = [
  {
    name: "Free Developer",
    price: "$0",
    period: "/month",
    description: "Synthetic data only",
    features: [
      "Unlimited API calls",
      "1 GB processing included",
      "1 GB storage included",
      "No PHI access",
      "No BAA required",
    ],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "For small projects",
    features: [
      "5 GB processing included",
      "5 GB storage included",
      "$2.00/GB processing overage",
      "$0.50/GB storage overage",
      "HIPAA-ready",
      "BAA included",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$199",
    period: "/month",
    description: "For growing teams",
    features: [
      "25 GB processing included",
      "25 GB storage included",
      "$1.00/GB processing overage",
      "$0.25/GB storage overage",
      "Priority support",
      "BAA included",
    ],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Scale",
    price: "$499",
    period: "/month",
    description: "For high-volume apps",
    features: [
      "100 GB processing included",
      "100 GB storage included",
      "$0.40/GB processing overage",
      "$0.10/GB storage overage",
      "Dedicated Slack channel",
      "BAA included",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Enterprise",
    price: "$2,500",
    period: "/month base",
    description: "Custom solutions",
    features: [
      "Custom included volumes",
      "$0.10/GB processing overage",
      "$0.05/GB storage overage",
      "Private clusters available",
      "Dedicated support",
      "Custom BAA",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
]

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

        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          {tiers.map((tier) => (
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
                  Popular
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
            </div>
          ))}
        </div>

        {/* Usage examples */}
        <div className="mx-auto mt-16 max-w-3xl rounded-xl border border-border bg-background p-6 sm:p-8">
          <h3 className="mb-4 text-lg font-semibold text-foreground">Not sure how much data you need?</h3>
          <p className="mb-6 text-muted-foreground">Here are typical ranges based on real-world clinical data:</p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-muted p-4">
              <p className="font-medium text-foreground">1,000 patients</p>
              <p className="text-sm text-muted-foreground">~1.5 GB storage, ~1 GB processing</p>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <p className="font-medium text-foreground">1,000 outpatient visits</p>
              <p className="text-sm text-muted-foreground">~150–300 MB clinical notes</p>
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

          <p className="mt-6 text-center text-sm text-muted-foreground">
            You only pay for what you process and store. No hidden fees.
          </p>
        </div>
      </div>
    </section>
  )
}
