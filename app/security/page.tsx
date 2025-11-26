import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, FileText, Server, Bell, Building, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Security, Privacy, and Compliance | AccessHealthData",
  description: "Your data is protected by a modern, HIPAA-ready infrastructure built for developers.",
}

export default function SecurityPage() {
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
              Security, Privacy, and Compliance
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Your data is protected by a modern, HIPAA-ready infrastructure built for developers.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
              We treat every piece of PHI with the same level of rigor as a clinical system—while making security
              simple, transparent, and self-serve for engineering teams.
            </p>
          </div>
        </section>

        {/* Security Commitment */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Security Commitment</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Protecting patient health information is our highest operational priority. Our platform is designed from
              the ground up with encryption, auditability, isolation, and compliance controls that meet or exceed
              healthcare industry best practices.
            </p>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-2xl font-bold text-foreground">Compliance Standards</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Card className="border-border bg-background">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">HIPAA-Ready Architecture</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  All paid tiers include a Business Associate Agreement (BAA). Our technical and administrative
                  safeguards meet HIPAA's Security Rule and Privacy Rule requirements.
                </CardContent>
              </Card>
              <Card className="border-border bg-background">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">SOC 2 Type II (In Progress)</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  We maintain the controls required for SOC 2 Type II certification and undergo continuous monitoring
                  with an accredited auditor.
                </CardContent>
              </Card>
              <Card className="border-border bg-background">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">HITRUST Roadmap</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  We follow HITRUST CSF control requirements and maintain readiness for future certification based on
                  customer demand and growth scale.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Encryption */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Data Encryption</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-border bg-muted/30 p-6">
                <Lock className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-semibold text-foreground">Data In Transit</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  All data is encrypted using TLS 1.2+ with modern cipher suites.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted/30 p-6">
                <Server className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-semibold text-foreground">Data At Rest</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  All PHI and system data is encrypted using AES-256. Individual customer data is stored in logically
                  isolated containers.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted/30 p-6">
                <Eye className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-semibold text-foreground">Key Management</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Keys are managed using cloud-native KMS with automatic rotation. No personnel have direct access to
                  raw encryption keys.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Access Controls */}
        <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Access Controls</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Least Privilege Policy",
                  desc: "Internal access follows the principle of least privilege and is continuously reviewed.",
                },
                { title: "Multi-Factor Authentication", desc: "All internal administrative interfaces require MFA." },
                {
                  title: "Role-Based Access",
                  desc: "Roles apply to both internal staff and customer accounts to minimize risk.",
                },
                {
                  title: "Just-In-Time Access",
                  desc: "Temporary elevated access is granted only through audited workflows and expires automatically.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-border bg-background p-5">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audit & Monitoring */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Audit Logging & Monitoring</h2>
            <div className="mt-8 space-y-4">
              {[
                {
                  title: "End-to-End Audit Trails",
                  desc: "All access to PHI—both internal and through customer APIs—is logged with timestamps, actor identity, and context.",
                },
                {
                  title: "Anomaly Detection",
                  desc: "We use automated systems to detect anomalous activity, high-volume downloads, or suspicious request patterns.",
                },
                {
                  title: "Real-Time Alerts",
                  desc: "Critical events trigger immediate alerts to our security operations team.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 rounded-lg border border-border bg-muted/30 p-5">
                  <Bell className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Handling */}
        <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Data Handling Practices</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "No Human Access to PHI",
                  desc: "Human access to raw patient data is prohibited except during customer-authorized support investigations under strict controls.",
                },
                {
                  title: "Secure Data Deletion",
                  desc: "Customers can request deletion of PHI. All deletions are performed using NIST-compliant methods.",
                },
                {
                  title: "Full Data Export",
                  desc: "Customers may export their data via API at any time without additional fees.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-border bg-background p-5">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BAA */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Business Associate Agreements</h2>
            <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-6">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">Standard BAA Included</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    All paid accounts (Starter and above) include our standard BAA. You can review and sign it during
                    onboarding.
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <strong>No Negotiation Needed:</strong> We provide a standard, attorney-reviewed BAA so you don't
                    have to wait for custom legal negotiations to begin integrating.
                  </p>
                </div>
                <Button asChild className="shrink-0">
                  <a href="/baa">View BAA Details</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Incident Response */}
        <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Incident Response</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Industry-Standard IR Plan",
                  desc: "We maintain a documented Incident Response Plan that meets HIPAA and SOC 2 expectations.",
                },
                { title: "24/7 Monitoring", desc: "Security and availability systems are continuously monitored." },
                {
                  title: "Customer Notification",
                  desc: "If any incident impacting your data occurs, we follow HIPAA breach notification rules.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-border bg-background p-5">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vendor Security */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Vendor & Subprocessor Security</h2>
            <ul className="mt-6 space-y-4">
              {[
                {
                  title: "Restricted Vendor List",
                  desc: "We only use vendors who meet strict security requirements and sign BAAs or DPAs as appropriate.",
                },
                {
                  title: "Annual Security Review",
                  desc: "All subprocessors undergo annual review for compliance posture and security controls.",
                },
                {
                  title: "Published Subprocessor List",
                  desc: "You can view our always-up-to-date list of subprocessors.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <Building className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <span className="font-medium text-foreground">{item.title}:</span>{" "}
                    <span className="text-muted-foreground">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Your Responsibilities */}
        <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Your Responsibilities</h2>
            <p className="mt-4 text-muted-foreground">To maintain security, customers must:</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              {[
                "Store and use API keys securely",
                "Configure access based on roles",
                "Implement secure application practices",
                "Follow their own obligations under HIPAA (if applicable)",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              We provide guidance and best practices as part of onboarding.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Contact Security Team</h2>
            <p className="mt-4 text-muted-foreground">
              If you have a security concern, vulnerability report, or compliance question, contact:
            </p>
            <a
              href="mailto:security@accesshealthdata.com"
              className="mt-2 inline-block text-lg font-medium text-primary hover:underline"
            >
              security@accesshealthdata.com
            </a>
            <p className="mt-2 text-sm text-muted-foreground">We respond within one business day.</p>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-primary px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">
              Build with secure, normalized healthcare data you can trust.
            </h2>
            <Button size="lg" variant="secondary" className="mt-8">
              Create a Free Developer Account
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
