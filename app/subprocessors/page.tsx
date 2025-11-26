import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Subprocessors | AccessHealthData",
  description: "A transparent list of all vendors who process customer data on our behalf.",
}

const subprocessors = [
  {
    name: "Amazon Web Services (AWS)",
    purpose: "Cloud hosting provider",
    location: "United States",
    dataProcessed: "All customer data, PHI",
    safeguards: "SOC 2, ISO 27001, HIPAA BAA",
    status: "Active BAA",
  }
]

export default function SubprocessorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="border-b border-border bg-muted/30 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Building className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Subprocessors
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              A transparent list of all vendors who process customer data on our behalf.
            </p>
            <p className="mx-auto mt-4 text-muted-foreground">
              We use a minimal set of security-reviewed subprocessors and update this page whenever the list changes.
            </p>
          </div>
        </section>

        {/* Subprocessor List */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold text-foreground">List of Subprocessors</h2>
            <div className="mt-8 space-y-4">
              {subprocessors.map((sp) => (
                <Card key={sp.name} className="border-border">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{sp.name}</CardTitle>
                      <span className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        <CheckCircle className="h-3 w-3" />
                        {sp.status}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <dl className="grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-4">
                      <div>
                        <dt className="text-muted-foreground">Purpose</dt>
                        <dd className="font-medium text-foreground">{sp.purpose}</dd>
                      </div>
                      <div>
                        <dt className="text-muted-foreground">Location</dt>
                        <dd className="font-medium text-foreground">{sp.location}</dd>
                      </div>
                      <div>
                        <dt className="text-muted-foreground">Data Processed</dt>
                        <dd className="font-medium text-foreground">{sp.dataProcessed}</dd>
                      </div>
                      <div>
                        <dt className="text-muted-foreground">Safeguards</dt>
                        <dd className="font-medium text-foreground">{sp.safeguards}</dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Update Notice */}
        <section className="border-t border-border bg-muted/30 px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm text-muted-foreground">
              This list was last updated on November 2025. We notify customers of material changes to subprocessors via
              email.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
