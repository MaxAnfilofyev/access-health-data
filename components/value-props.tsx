import { Zap, Globe, DollarSign, Code, Shield, Database } from "lucide-react"

const features = [
  {
    icon: Database,
    title: "Normalized FHIR across all sources",
    description:
      "Raw HL7, C-CDA, and PDF data is parsed, extracted, deduplicated, and transformed into consistent FHIR JSON.",
  },
  {
    icon: Globe,
    title: "Nationwide coverage",
    description: "Access clinical documents from national networks using standard exchange protocols.",
  },
  {
    icon: Zap,
    title: "Fast, predictable API",
    description: "Standard REST endpoints with fine-grained FHIR resource access and webhook notifications.",
  },
  {
    icon: DollarSign,
    title: "Pay for what you use",
    description: "Simple utility pricing with flat monthly fees plus usage. Discounts as volume scales.",
  },
  {
    icon: Code,
    title: "Instant developer onboarding",
    description: "No sales calls required. Unlimited test access with synthetic data. Go live when ready.",
  },
  {
    icon: Shield,
    title: "HIPAA-ready architecture",
    description: "Encrypted storage and transport, BAA included, access logging and audit trails.",
  },
]

export function ValueProps() {
  return (
    <section className="bg-muted px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why developers choose us</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No QHIN complexity, no HL7 pipelines, no custom normalization logic. Just one API for structured patient
            histories.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
