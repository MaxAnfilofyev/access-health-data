import { Search, Repeat, Code } from "lucide-react"

const steps = [
  {
    step: 1,
    icon: Search,
    title: "Query Nationwide Networks",
    description:
      "We retrieve all available medical records across our network connections using standard exchange protocols.",
  },
  {
    step: 2,
    icon: Repeat,
    title: "Normalize Automatically",
    description:
      "Raw HL7, C-CDA, and PDF data is parsed, extracted, deduplicated, and transformed into consistent FHIR JSON.",
  },
  {
    step: 3,
    icon: Code,
    title: "Use the Clean Data in Your App",
    description:
      "Your application receives structured, normalized FHIR resources ready for analytics, patient-facing features, care navigation, or quality improvement workflows.",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">How it works</h2>
          <p className="mt-4 text-lg text-muted-foreground">From query to clean data in three simple steps</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-12 hidden h-0.5 w-full translate-x-1/2 bg-border md:block" />
              )}

              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {item.step}
                  </span>
                  <item.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
