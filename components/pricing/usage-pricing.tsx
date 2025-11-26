import { Database, HardDrive } from "lucide-react"

export function UsagePricing() {
  return (
    <section className="border-t border-border bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">How Usage Pricing Works</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We meter usage by the data you process and the longitudinal FHIR data you store.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Database className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-foreground">Processing</h3>
            <p className="mt-3 text-muted-foreground">
              Every clinical document ingested (C-CDA, HL7, PDF, note, lab, ADT) is parsed, normalized to FHIR, and
              validated.
            </p>
            <p className="mt-2 font-medium text-foreground">You are billed per GB processed.</p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <HardDrive className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-foreground">Storage</h3>
            <p className="mt-3 text-muted-foreground">
              Normalized FHIR data is stored in your longitudinal patient record.
            </p>
            <p className="mt-2 font-medium text-foreground">You are billed per GB stored per month.</p>
          </div>
        </div>

        <p className="mt-10 text-center text-muted-foreground">
          This model works for every use case: population health, chronic care, telehealth, urgent care, RPM, behavioral
          health, navigation, quality, risk analytics, or patient-facing apps.
        </p>
      </div>
    </section>
  )
}
