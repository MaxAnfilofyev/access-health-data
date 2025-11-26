"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Download, ExternalLink } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="border-b border-border bg-muted/30 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Terms of Service
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              The legal terms governing your use of AccessHealthData.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
              Clear, developer-friendly terms designed for transparency and modern API usage.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Overview</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              These Terms of Service govern your access to and use of the AccessHealthData platform, APIs, services, and
              websites. By creating an account or using the API, you agree to these terms.
            </p>
            <p className="mt-4 text-muted-foreground">
              The ToS is written to be readable, modern, and fair—no unnecessary legalese.
            </p>
          </div>
        </section>

        {/* Key Concepts */}
        <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Key Concepts (Plain Language Summary)</h2>
            <div className="mt-8 space-y-4">
              {[
                {
                  num: 1,
                  title: "You own your data.",
                  desc: "AccessHealthData never claims ownership over PHI or your application data.",
                },
                {
                  num: 2,
                  title: "We process and store data on your behalf.",
                  desc: "You authorize us to ingest, normalize, store, and transmit clinical data.",
                },
                {
                  num: 3,
                  title: "You must comply with HIPAA and applicable laws.",
                  desc: "If you handle PHI, you must have a BAA with us.",
                },
                {
                  num: 4,
                  title: "You must use the API responsibly.",
                  desc: "No abuse, scraping, unauthorized access, or illegal use.",
                },
                {
                  num: 5,
                  title: "We may update the API.",
                  desc: "But we will avoid breaking changes and provide migration paths.",
                },
                {
                  num: 6,
                  title: "Liability is limited.",
                  desc: "As is standard in cloud services, our liability is capped.",
                },
                {
                  num: 7,
                  title: "You can terminate at any time.",
                  desc: "We provide full export and deletion of your data.",
                },
              ].map((item) => (
                <Card key={item.num} className="border-border bg-background">
                  <CardContent className="flex gap-4 p-5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {item.num}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Full Terms */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Full Terms of Service</h2>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button
                variant="outline"
                className="gap-2 bg-transparent"
                onClick={() => window.open('/terms/legal', '_blank')}
              >
                <ExternalLink className="h-4 w-4" />
                View Full Terms of Service (HTML)
              </Button>
              <Button variant="outline" className="gap-2 bg-transparent" asChild>
                <a href="/downloads/terms/AccessHealthData — Terms of Service.pdf" download="AccessHealthData — Terms of Service.pdf">
                  <Download className="h-4 w-4" />
                  Download Terms of Service (PDF)
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground">Contact Legal</h2>
            <p className="mt-4 text-muted-foreground">
              For questions about the ToS, email{" "}
              <a href="mailto:legal@accesshealthdata.com" className="text-primary hover:underline">
                legal@accesshealthdata.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
