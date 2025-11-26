import { Check, X } from "lucide-react"

export function ComparisonBlocks() {
  return (
    <section className="border-t border-border bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* vs In-House */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-xl font-bold text-foreground">vs Building In-House</h3>
            <p className="mt-3 text-muted-foreground">
              Building clinical data ingestion + normalization pipelines internally requires:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "2–4 full-time engineers",
                "1 data scientist/informaticist",
                "1 DevOps",
                "Ongoing compliance + security reviews",
                "6–12 months to reach production",
                "Tens of thousands per month in ops",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <X className="h-4 w-4 shrink-0 text-destructive" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-lg bg-primary/10 p-4">
              <p className="font-medium text-foreground">
                With AccessHealthData, you pay only for what you use. No team required.
              </p>
            </div>
          </div>

          {/* vs Incumbents */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-xl font-bold text-foreground">vs Incumbents</h3>
            <p className="mt-3 text-muted-foreground">
              Health Gorilla, Zus, and other clinical data platforms use contract-based enterprise pricing with opaque
              minimums.
            </p>
            <p className="mt-4 font-medium text-foreground">We provide:</p>
            <ul className="mt-3 space-y-2">
              {[
                "Transparent pricing",
                "No commit",
                "No minimum volume",
                "10×–20× cheaper at scale",
                "Predictable bills",
                "Developer-first API access",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-lg bg-primary/10 p-4">
              <p className="font-medium text-foreground">
                You should never need to negotiate pricing just to get started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
