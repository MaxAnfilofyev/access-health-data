import { ArrowRight } from "lucide-react"

const productionFeatures = [
  "Nationwide record retrieval",
  "Real-time normalization to FHIR JSON",
  "HIPAA-compliant environment",
  "BAA and security package",
  "Production-grade API keys",
  "Usage-based billing",
  "Audit logs and access controls",
]

export function ReadyForProduction() {
  return (
    <div className="rounded-2xl border border-secondary/30 bg-secondary/5 p-8">
      <h2 className="text-xl font-semibold text-foreground">Ready for Production?</h2>
      <p className="mt-2 text-muted-foreground">When you upgrade to a paid tier, you'll unlock:</p>

      <ul className="mt-6 space-y-3">
        {productionFeatures.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <ArrowRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
            <span className="text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-sm font-medium text-secondary">
        Upgrading takes less than 10 minutes inside the dashboard.
      </p>
    </div>
  )
}
