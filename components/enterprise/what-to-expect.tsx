import { 
  MessageSquareCode, 
  Calculator, 
  FileSignature, 
  ShieldCheck, 
  Crown, 
  Server 
} from "lucide-react"

const expectations = [
  {
    icon: MessageSquareCode, // Represents "Engineering/Dev" communication
    title: "A direct response from engineering (not sales)",
    description: "Our technical team will reach out to discuss your requirements.",
  },
  {
    icon: Calculator, // Represents "Pricing/Volume Math"
    title: "A usage-based quote tailored to your patient volume and document load",
    description: "Transparent pricing based on your specific business scale.",
  },
  {
    icon: FileSignature, // Represents "Signed Legal Agreement" (BAA)
    title: "BAA (if required)",
    description: "We'll prepare and execute a Business Associate Agreement.",
  },
  {
    icon: ShieldCheck, // Represents "Compliance/Security Standards"
    title: "Optional security package (SOC2/HITRUST roadmap, architecture, policies)",
    description: "Comprehensive compliance documentation for your review.",
  },
  {
    icon: Crown, // Represents "Enterprise Tier/Premium Features"
    title: "Instructions for enabling Enterprise Mode in your dashboard",
    description: "Quick setup to unlock enterprise features.",
  },
  {
    icon: Server, // Represents "Infrastructure/Clusters"
    title: "Options for private cluster or VPC peering",
    description: "Secure infrastructure options based on your needs.",
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
