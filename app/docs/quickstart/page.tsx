import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Database, FileText, Key, Package, History, LifeBuoy, AlertCircle, Webhook } from "lucide-react"

export const metadata = {
  title: "Quickstart | AccessHealthData",
  description: "A concise MVP guide to go from signup to your first API call in minutes.",
}

export default function QuickstartPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="border-b border-border bg-muted/30 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Quickstart: Fetch normalized data in minutes
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              From signup to your first FHIR JSON response in minutes.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/signup">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Your API Key
                </Button>
              </Link>
              <Link href="/docs">
                <Button size="lg" variant="outline">View Full Docs</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Step 0 - Prerequisites */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Step 0: Prerequisites</h2>
              <ul className="mt-2 text-sm text-muted-foreground list-disc pl-6">
                <li>A modern HTTP client (curl, Postman, etc.)</li>
                <li>An AccessHealthData API key (Sandbox or Production)</li>
                <li>Familiarity with HTTP and JSON</li>
              </ul>
            </div>

            {/* Step 1 - Get API Key */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Step 1: Get your API key</h2>
              <p className="mt-2 text-muted-foreground">
                Sign up or log in to create an API key for Sandbox usage.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">Sandbox keys are synthetic and have generous limits.</p>
<Link href="/signup">
  <Button size="sm" className="mt-2">Go to Sign Up</Button>
</Link>
            </div>

            {/* Step 2 - Environment */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Step 2: Choose environment</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <Card className="border-border bg-background">
                  <CardHeader>
                    <CardTitle className="text-primary">Sandbox</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Synthetic data, unlimited calls, no PHI.
                  </CardContent>
                </Card>
                <Card className="border-border bg-background">
                  <CardHeader>
                    <CardTitle className="text-secondary">Production</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Real clinical data, requires BAA, standard rate limits.
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 3 - First API Call */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Step 3: Make your first API call</h2>
              <p className="mt-2 text-muted-foreground">
                Example using a cURL request against the Sandbox endpoint.
              </p>
              <code className="mt-2 block w-full rounded bg-foreground/5 p-3 text-sm font-mono text-primary">
{`curl https://api.accesshealthdata.com/v1/patients/{patient_id}/history \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Accept: application/fhir+json"`}
              </code>
            </div>

            {/* Step 4 - Inspect Response */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Step 4: Inspect the response</h2>
              <p className="mt-2 text-muted-foreground">
                You should receive a FHIR Bundle with normalized resources (Conditions, Medications, Labs, etc.).
              </p>
              <pre className="mt-2 w-full rounded bg-foreground/5 p-3 text-sm text-primary overflow-x-auto">
{`{
  "resourceType": "Bundle",
  "type": "searchset",
  "entry": [
    {
      "resource": {
        "resourceType": "Condition",
        "id": "cond-1",
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "123456",
              "display": "Example condition"
            }
          ]
        }
      }
    }
  ]
}`}
              </pre>
            </div>

            {/* Step 5 - Next Steps */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Step 5: Next steps</h2>
              <ul className="mt-2 text-sm text-muted-foreground list-disc pl-6">
                <li>Explore Environments, Webhooks, and Data Models in /docs</li>
                <li>Try Normalize PDFs: /v1/normalize/pdf</li>
                <li>Subscribe to Webhooks</li>
              </ul>
            </div>

            <p className="text-sm text-muted-foreground">
              Need help? Email{' '}
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
