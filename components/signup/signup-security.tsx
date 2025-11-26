import { Shield, Lock, FileText, Users, Target, Trash2 } from "lucide-react"

const securityFeatures = [
  { icon: FileText, label: "BAA" },
  { icon: Lock, label: "Encrypted storage and transport" },
  { icon: FileText, label: "Access logs" },
  { icon: Users, label: "Fine-grained permissioning" },
  { icon: Target, label: "SOC2/HITRUST roadmap" },
  { icon: Trash2, label: "Secure deletion and full export controls" },
]

export function SignupSecurity() {
  return (
    <section className="rounded-2xl border border-border bg-card p-8 sm:p-12">
      <div className="flex items-center gap-3">
        <Shield className="h-8 w-8 text-primary" />
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Security & Compliance</h2>
      </div>

      <p className="mt-4 text-lg text-muted-foreground">
        Your free account runs in a synthetic-data environment, isolated from all PHI systems.
      </p>

      <div className="mt-8">
        <p className="text-sm font-medium uppercase tracking-wide text-foreground">Production accounts include:</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {securityFeatures.map((feature) => (
            <div
              key={feature.label}
              className="flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-4"
            >
              <feature.icon className="h-5 w-5 flex-shrink-0 text-primary" />
              <span className="text-sm font-medium text-foreground">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
