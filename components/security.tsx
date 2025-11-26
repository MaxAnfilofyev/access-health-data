import { Shield, Lock, FileCheck, Activity, Award } from "lucide-react"

const securityFeatures = [
  { icon: Shield, text: "HIPAA-ready architecture" },
  { icon: Lock, text: "Encrypted storage + transport" },
  { icon: FileCheck, text: "BAA for all paid tiers" },
  { icon: Activity, text: "Access logging and audit trails" },
  { icon: Award, text: "SOC2/HITRUST roadmap published" },
]

export function Security() {
  return (
    <section id="security" className="bg-muted px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Enterprise-grade security</h2>
          <p className="mt-4 text-lg text-muted-foreground">Built from the ground up for healthcare data compliance</p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {securityFeatures.map((feature) => (
            <div
              key={feature.text}
              className="flex items-center gap-3 rounded-full border border-border bg-background px-6 py-3"
            >
              <feature.icon className="h-5 w-5 text-primary" />
              <span className="font-medium text-foreground">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
