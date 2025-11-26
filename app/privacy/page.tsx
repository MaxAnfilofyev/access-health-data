import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, User, Database, Share2, UserCheck } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | AccessHealthData",
  description: "How we handle personal information, PHI, usage data, and privacy rights.",
}

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              How we handle personal information, PHI, usage data, and privacy rights.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Overview</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              This Privacy Policy explains what information we collect, how we use it, and how we protect it. We follow
              HIPAA and industry best practices to safeguard data entrusted to us.
            </p>
          </div>
        </section>

        {/* Information We Collect */}
        <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Information We Collect</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-border bg-background p-6">
                <User className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-semibold text-foreground">Account Information</h3>
                <p className="mt-2 text-sm text-muted-foreground">Name, email, organization, billing information.</p>
              </div>
              <div className="rounded-lg border border-border bg-background p-6">
                <Database className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-semibold text-foreground">Usage Information</h3>
                <p className="mt-2 text-sm text-muted-foreground">API calls, logs, request metadata.</p>
              </div>
              <div className="rounded-lg border border-border bg-background p-6">
                <Shield className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-semibold text-foreground">PHI (only with a BAA + paid tier)</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Patient clinical data transmitted via API. We do not collect PHI unless explicitly provided under a
                  BAA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">How We Use Information</h2>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              {[
                "Provide API services",
                "Maintain records and logs",
                "Improve performance and stability",
                "Ensure security and compliance",
                "Bill for usage",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4 font-medium text-foreground">
              We do not sell, rent, or monetize data in any form.
            </p>
          </div>
        </section>

        {/* Data Sharing */}
        <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3">
              <Share2 className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Data Sharing</h2>
            </div>
            <p className="mt-4 text-muted-foreground">We only share data with:</p>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Subprocessors under strict security and BAA/DPA agreements
              </li>
              <li className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Your intended clinical data exchange networks (e.g., national exchange)
              </li>
              <li className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Legal authorities when required
              </li>
            </ul>
          </div>
        </section>

        {/* Your Rights */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3">
              <UserCheck className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Your Rights</h2>
            </div>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              {[
                "Access and export data",
                "Request deletion",
                "Review subprocessors",
                "Receive breach notifications",
                "Close your account",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Contact Privacy Office</h2>
            <p className="mt-4 text-muted-foreground">For privacy questions or requests:</p>
            <a
              href="mailto:privacy@accesshealthdata.com"
              className="mt-2 inline-block text-lg font-medium text-primary hover:underline"
            >
              privacy@accesshealthdata.com
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
