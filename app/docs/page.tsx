import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  FileText,
  Code,
  Shield,
  Zap,
  Bell,
  Database,
  Key,
  AlertCircle,
  Webhook,
  Package,
  History,
  LifeBuoy,
} from "lucide-react"

export const metadata = {
  title: "API Documentation | AccessHealthData",
  description: "Everything you need to fetch, normalize, and use nationwide patient medical data.",
}

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="border-b border-border bg-muted/30 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              AccessHealthData API Documentation
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Everything you need to fetch, normalize, and use nationwide patient medical data.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
              A simple, modern API for retrieving normalized FHIR JSON from clinical networks. Designed for developers
              who want to integrate healthcare data without fighting HL7, C-CDA, or TEFCA complexity.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/signup">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Your API Key
                </Button>
              </Link>
              <Link href="/docs/quickstart">
                <Button size="lg" variant="outline">
                  View Quickstart
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Overview</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The AccessHealthData API provides programmatic access to nationwide clinical data, normalized to clean and
              consistent FHIR R4 JSON. Fetch longitudinal medical histories, retrieve updates, process documents, and
              store normalized records—all through a secure REST API.
            </p>
            <p className="mt-4 font-medium text-foreground">
              Built for developers. HIPAA-ready. Clear pricing. No sales calls.
            </p>
          </div>
        </section>

        {/* What You Can Do */}
        <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-2xl font-bold text-foreground">What You Can Do With the API</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Database,
                  title: "Retrieve Longitudinal Patient History",
                  description: "Fetch a complete medical history from nationwide networks in a single API call.",
                },
                {
                  icon: FileText,
                  title: "Normalize Raw Clinical Documents",
                  description: "Convert HL7 v2, C-CDA, PDFs, and free text into validated FHIR R4.",
                },
                {
                  icon: Shield,
                  title: "Store Patient Records",
                  description: "Maintain longitudinal FHIR JSON with storage billed by GB.",
                },
                {
                  icon: Code,
                  title: "Query FHIR Resources",
                  description: "Access specific resource types: Conditions, Medications, Labs, Encounters, etc.",
                },
                {
                  icon: Bell,
                  title: "Webhook Notifications",
                  description: "Receive notifications when new clinical data becomes available for a patient.",
                },
                {
                  icon: Zap,
                  title: "Developer Sandbox",
                  description: "Use mock/synthetic data with unlimited calls—no PHI, no BAA required.",
                },
              ].map((item) => (
                <Card key={item.title} className="border-border bg-background">
                  <CardHeader>
                    <item.icon className="h-8 w-8 text-primary" />
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Quickstart Code Examples</h2>
            <div className="mt-8 space-y-6">
              {[
                {
                  title: "Fetch a Patient's Full Medical History",
                  code: "GET /v1/patients/{patient_id}/history",
                },
                {
                  title: "Submit a PDF for Normalization",
                  code: "POST /v1/normalize/pdf",
                },
                {
                  title: "Retrieve FHIR Resources",
                  code: "GET /v1/fhir/{resourceType}?patient={patient_id}",
                },
                {
                  title: "Subscribe to Webhooks",
                  code: "POST /v1/webhooks",
                },
              ].map((example) => (
                <div key={example.title} className="rounded-lg border border-border bg-muted/50 p-4">
                  <p className="text-sm font-medium text-foreground">{example.title}</p>
                  <code className="mt-2 block rounded bg-foreground/5 px-3 py-2 font-mono text-sm text-primary">
                    {example.code}
                  </code>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Each endpoint includes request/response examples, schema definitions, and sample cURL, Python, JavaScript,
              and Go code.
            </p>
          </div>
        </section>

        {/* Authentication & Rate Limits */}
        <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-3">
                  <Key className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Authentication</h2>
                </div>
                <p className="mt-4 text-muted-foreground">
                  Authentication is performed using scoped API keys. Keys can be created, revoked, and rotated via the
                  dashboard.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">Auth Method:</span> Bearer token
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Key Types:</span> Production (PHI) and Sandbox
                    (synthetic data)
                  </li>
                </ul>
                <p className="mt-4 text-sm text-muted-foreground italic">
                  Protect your keys as you would any credential.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <Zap className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Rate Limits</h2>
                </div>
                <p className="mt-4 text-muted-foreground">
                  We enforce fair-use rate limits per account and per key. Limits scale automatically with tier and
                  usage volume.
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Rate limits are designed to be generous and non-blocking for typical data workflows. You can request
                  higher limits via the dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Models */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Data Models</h2>
            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground">FHIR R4 Normalized Schema</h3>
                <p className="mt-2 text-muted-foreground">
                  All normalized output follows FHIR R4 resource definitions with AccessHealthData extensions for:
                </p>
                <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                  {[
                    "Provenance",
                    "Source metadata",
                    "Normalization confidence",
                    "OCR confidence (for PDFs)",
                    "Validation results",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Raw Clinical Documents (optional)</h3>
                <p className="mt-2 text-muted-foreground">
                  You may optionally request raw C-CDA, HL7, or PDF artifacts for audit or downstream processing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Environments */}
        <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Environments</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Card className="border-border bg-background">
                <CardHeader>
                  <CardTitle className="text-primary">Sandbox</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>Synthetic data</p>
                  <p>Unlimited calls</p>
                  <p>Free for all users</p>
                </CardContent>
              </Card>
              <Card className="border-border bg-background">
                <CardHeader>
                  <CardTitle className="text-secondary">Production</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>Real clinical exchange</p>
                  <p>Requires BAA</p>
                  <p>Standard rate limits</p>
                  <p>Usage-based pricing</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Error Handling & Webhooks */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Error Handling</h2>
                </div>
                <p className="mt-4 text-muted-foreground">All endpoints return structured error responses with:</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {[
                    "HTTP status code",
                    "Error type",
                    "Developer message",
                    "Remediation guidance",
                    "Correlation ID for support",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <Webhook className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Webhooks</h2>
                </div>
                <p className="mt-4 text-muted-foreground">Use webhooks to receive:</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {[
                    "New clinical documents available",
                    "Updated patient summaries",
                    "Failed normalization events",
                    "Storage threshold alerts",
                    "Data export completion",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-muted-foreground italic">
                  Your webhook endpoints must support TLS and respond with 2xx status codes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SDKs & Versioning */}
        <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-3">
                  <Package className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Examples & SDKs</h2>
                </div>
                <p className="mt-4 text-muted-foreground">We provide examples in:</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {["cURL", "Python", "JavaScript/TypeScript", "Go"].map((lang) => (
                    <span key={lang} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {lang}
                    </span>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  SDKs for Python, Node.js, and Go are in active development.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <History className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">API Versioning</h2>
                </div>
                <p className="mt-4 text-muted-foreground">
                  We maintain stable versioning with backwards-compatible updates. Breaking changes are communicated via
                  dashboard and email notifications.
                </p>
                <div className="mt-4 space-y-2 text-sm">
                  <p>
                    <span className="text-muted-foreground">Current API Version:</span>{" "}
                    <span className="font-medium text-foreground">v1</span>
                  </p>
                  <p>
                    <span className="text-muted-foreground">Next Stable Release:</span>{" "}
                    <span className="font-medium text-foreground">v1.1 (Q4)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3">
              <LifeBuoy className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Support</h2>
            </div>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              <li>Paid tiers include email support.</li>
              <li>Scale tier includes Slack channel access.</li>
              <li>Enterprise accounts include dedicated support engineering.</li>
            </ul>
            <p className="mt-6 text-sm">
              <span className="text-muted-foreground">Support contact:</span>{" "}
              <a href="mailto:devsupport@accesshealthdata.com" className="text-primary hover:underline">
                devsupport@accesshealthdata.com
              </a>
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="border-t border-border bg-primary px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">
              Start building with normalized healthcare data in minutes.
            </h2>
            <Link href="/signup">
              <Button size="lg" variant="secondary" className="mt-8">
                Get Your API Key
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
