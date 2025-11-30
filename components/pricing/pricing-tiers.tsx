import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const tiers = [
  {
    name: "Free Developer",
    price: "$0",
    period: "/month",
    description: "Synthetic/mock data only",
    features: [
      "Unlimited calls",
      "1 GB processing + 1 GB storage (mock)",
      "API keys instantly",
      "No BAA"
    ],
    cta: "Create Free Account",
    highlighted: false,
  },
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Includes 1 GB processing + 1 GB storage",
    features: [
      "Overage: $50.00/GB processing + $12.50/GB storage",
      "BAA included"
    ],
    cta: "Start with Starter",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$199",
    period: "/month",
    description: "Includes 5 GB processing + 5 GB storage",
    features: [
      "Overage: $25.00/GB processing + $6.25/GB storage",
      "BAA included"
    ],
    cta: "Choose Growth",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "$899",
    period: "/month",
    description: "Includes 20 GB processing + 20 GB storage",
    features: [
      "Overage: $10.00/GB processing + $2.50/GB storage",
      "Priority Support",
      "BAA included"
    ],
    cta: "Choose Pro",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "$3,999",
    period: "/month",
    description: "Includes 200 GB processing + 200 GB storage",
    features: [
      "Overage: $1.00/GB processing, $0.25/GB storage",
      "Dedicated Slack + quarterly reviews",
      "BAA included"
    ],
    cta: "Get Access",
    highlighted: false,
  },
];


export function PricingTiers() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-xl border p-6 ${
                tier.highlighted ? "border-primary bg-primary/5 shadow-lg" : "border-border bg-card"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Popular
                  </span>
                </div>
              )}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-3xl font-bold text-foreground">{tier.price}</span>
                  <span className="ml-1 text-sm text-muted-foreground">{tier.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
              </div>
              <ul className="mb-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {tier.cta === "Get Access" ? (
                <Link href="/enterprise">
                  <Button
                    className={`w-full ${
                      tier.highlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {tier.cta}
                  </Button>
                </Link>
              ) : (
                <Link href="/signup">
                  <Button
                    className={`w-full ${
                      tier.highlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {tier.cta}
                  </Button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
