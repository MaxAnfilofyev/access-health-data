import { Check } from "lucide-react"

const instantAccessItems = [
  "Developer dashboard",
  "API keys (mock data only)",
  "Full API documentation",
  "Unlimited mock API calls",
  "Example patient datasets",
  "Code samples and Postman collection",
  "Usage simulator and cost calculator",
]

export function WhatHappensNext() {
  return (
    <div className="rounded-2xl border border-border bg-muted/30 p-8">
      <h2 className="text-xl font-semibold text-foreground">What Happens Next</h2>
      <p className="mt-2 text-muted-foreground">After creating your account, you'll get:</p>

      <div className="mt-6">
        <h3 className="text-sm font-medium uppercase tracking-wide text-primary">Instant access to:</h3>
        <ul className="mt-4 space-y-3">
          {instantAccessItems.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Upgrade to production at any time to work with PHI and nationwide medical records.
      </p>
    </div>
  )
}
