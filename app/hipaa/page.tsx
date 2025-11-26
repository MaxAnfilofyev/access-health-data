import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Users, Server, Lock, Bell } from "lucide-react"

export const metadata = {
  title: "HIPAA Compliance Statement | AccessHealthData",
  description: "We adhere to HIPAA Privacy and Security Rule requirements.",
}

export default function HIPAAPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="border-b border-border bg-muted/30 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              HIPAA Compliance Statement
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              We adhere to HIPAA Privacy and Security Rule requirements.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Overview</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              AccessHealthData implements administrative, technical, and physical safeguards to protect PHI in
              compliance with HIPAA. Our systems are designed to meet HIPAA Security Rule 45 CFR Part 164 and related
              requirements.
            </p>
          </div>
        </section>

        {/* What HIPAA Means for You */}
        <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">What HIPAA Means for You</h2>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              {[
                "PHI processing requires a signed BAA",
                "API keys must be properly secured",
                "You must use the platform within permitted purposes",
                "You are responsible for your own HIPAA obligations in your application",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Safeguards Summary */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Safeguards Summary</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-border bg-muted/30 p-6">
                <Users className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-semibold text-foreground">Administrative Safeguards</h3>
                <p className="mt-2 text-sm text-muted-foreground">Policies, staff training, access controls.</p>
              </div>
              <div className="rounded-lg border border-border bg-muted/30 p-6">
                <Lock className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-semibold text-foreground">Technical Safeguards</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Encryption, MFA, audit logs, isolated environments.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted/30 p-6">
                <Server className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-semibold text-foreground">Physical Safeguards</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Secure data centers managed by certified cloud providers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Breach Notification */}
        <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3">
              <Bell className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Breach Notification</h2>
            </div>
            <p className="mt-4 text-muted-foreground">We follow HIPAA breach notification standards:</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              {["Prompt investigation", "Customer notification", "Corrective action", "Documentation"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Contact Compliance</h2>
            <a
              href="mailto:compliance@accesshealthdata.com"
              className="mt-4 inline-block text-lg font-medium text-primary hover:underline"
            >
              compliance@accesshealthdata.com
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
