import { Mail, FileText, Shield, Settings, Lock } from "lucide-react"

const expectations = [
  {
    icon: Mail,
    title: "A direct email from engineering (not sales)",
    description: "Our technical team will reach out to discuss your requirements.",
  },
  {
    icon: FileText,
    title: "A usage-based quote based on your GB requirements",
    description: "Transparent pricing tailored to your expected volume.",
  },
  {
    icon: Shield,
    title: "A BAA (if PHI is involved)",
    description: "We'll prepare and execute a Business Associate Agreement.",
  },
  {
    icon: Settings,
    title: "Instructions for enabling Enterprise Mode in the dashboard",
    description: "Quick setup to unlock enterprise features.",
  },
  {
    icon: Lock,
    title: "Optional security package",
    description: "SOC2/HITRUST roadmap and compliance documentation.",
  },
]

export function WhatToExpect() {
  return (
    <div className="flex flex-col">
      <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
        <h2 className="mb-6 text-xl font-semibold text-foreground">What to Expect</h2>
        <p className="mb-6 text-muted-foreground">After submitting this form, you'll receive:</p>

        <div className="space-y-4">
          {expectations.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg bg-muted p-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Enterprise pricing remains simple and transparent.</span> No
            negotiations required.
          </p>
        </div>
      </div>
    </div>
  )
}
