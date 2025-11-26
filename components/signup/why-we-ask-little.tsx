import { Lightbulb } from "lucide-react"

const phiRequirements = ["Business profile", "Identity verification", "Signed BAA", "Valid use case", "Billing details"]

export function WhyWeLittle() {
  return (
    <section className="mx-auto max-w-3xl text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
        <Lightbulb className="h-7 w-7 text-primary" />
      </div>
      <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Why We Ask for So Little</h2>
      <p className="mt-4 text-lg text-muted-foreground">
        We keep onboarding simple so developers can start building immediately. You do not need a provider NPI, EIN, or
        BAA until you switch to Production (PHI Mode).
      </p>

      <div className="mt-8 rounded-xl border border-border bg-muted/30 p-6">
        <p className="text-sm font-medium uppercase tracking-wide text-foreground">PHI access requires:</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {phiRequirements.map((req) => (
            <span key={req} className="rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
              {req}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">All handled inside the dashboard, not during sign-up.</p>
      </div>
    </section>
  )
}
