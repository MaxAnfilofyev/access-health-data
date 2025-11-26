"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TestTube, FileCheck, Bell, Layers } from "lucide-react"
import { useRouter } from "next/navigation"

const apiFeatures = [
  { icon: TestTube, text: "Get started with mock data instantly" },
  { icon: FileCheck, text: "Promote to PHI mode after signing a BAA" },
  { icon: Bell, text: "Webhooks for update notifications" },
  { icon: Layers, text: "Fine-grained FHIR resource access" },
]

export function ApiSection() {
  const router = useRouter()

  return (
    <section id="docs" className="bg-background px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Designed for engineers</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything is accessible via standard REST endpoints, with SDKs coming soon.
            </p>

            <ul className="mt-8 space-y-4">
              {apiFeatures.map((feature) => (
                <li key={feature.text} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">{feature.text}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className="mt-8 bg-secondary text-secondary-foreground hover:bg-secondary/90"
              onClick={() => router.push('/docs')}
            >
              View API Docs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-[#1A1D21] shadow-xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-[#E54848]" />
              <div className="h-3 w-3 rounded-full bg-[#F6A735]" />
              <div className="h-3 w-3 rounded-full bg-[#16C79A]" />
              <span className="ml-2 text-xs text-white/50">fhir-response.json</span>
            </div>
            <pre className="overflow-x-auto p-4 text-sm">
              <code className="font-mono text-white/80">
                {`{
  `}
                <span className="text-[#16C79A]">{`"resourceType"`}</span>
                {`: `}
                <span className="text-[#F6A735]">{`"Patient"`}</span>
                {`,
  `}
                <span className="text-[#16C79A]">{`"id"`}</span>
                {`: `}
                <span className="text-[#F6A735]">{`"example-123"`}</span>
                {`,
  `}
                <span className="text-[#16C79A]">{`"name"`}</span>
                {`: [{
    `}
                <span className="text-[#16C79A]">{`"family"`}</span>
                {`: `}
                <span className="text-[#F6A735]">{`"Smith"`}</span>
                {`,
    `}
                <span className="text-[#16C79A]">{`"given"`}</span>
                {`: [`}
                <span className="text-[#F6A735]">{`"John"`}</span>
                {`]
  }],
  `}
                <span className="text-[#16C79A]">{`"birthDate"`}</span>
                {`: `}
                <span className="text-[#F6A735]">{`"1990-01-15"`}</span>
                {`,
  `}
                <span className="text-white/40">{`// Normalized from multiple sources`}</span>
                {`
  `}
                <span className="text-[#16C79A]">{`"meta"`}</span>
                {`: {
    `}
                <span className="text-[#16C79A]">{`"lastUpdated"`}</span>
                {`: `}
                <span className="text-[#F6A735]">{`"2024-01-15"`}</span>
                {`
  }
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
