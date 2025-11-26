import { Users, Stethoscope, FlaskConical, FileText, UserPlus } from "lucide-react"

const conversions = [
  {
    icon: Users,
    title: "1,000 patients (full longitudinal history)",
    processing: "≈ 1 GB initial processing",
    storage: "≈ 1.5 GB storage",
  },
  {
    icon: Stethoscope,
    title: "1,000 outpatient visits",
    processing: "≈ 150–300 MB processed",
    storage: "≈ 100–200 MB stored (after normalization)",
  },
  {
    icon: FlaskConical,
    title: "1,000 labs",
    processing: "≈ 80–200 MB processed",
    storage: "≈ similar stored",
  },
  {
    icon: FileText,
    title: "1,000 imported PDFs",
    processing: "≈ 200–700 MB processed",
    storage: "≈ 200–600 MB stored (after OCR + entity extraction)",
  },
  {
    icon: UserPlus,
    title: "1 patient per month (incremental)",
    processing: "≈ 0.2–0.5 MB new normalized data",
    storage: "",
  },
]

export function RealWorldConversions() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">Real-World Conversions</h2>
          <p className="mt-4 text-lg text-muted-foreground">Understand how your business activity maps to usage.</p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {conversions.map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-card p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-3 font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.processing}</p>
              {item.storage && <p className="text-sm text-muted-foreground">{item.storage}</p>}
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          These are averages across national exchange networks.
        </p>
      </div>
    </section>
  )
}
