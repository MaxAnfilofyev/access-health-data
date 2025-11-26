"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

export function Hero() {
  const router = useRouter()

  return (
    <section className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
          Nationwide healthcare data, normalized to FHIR JSON
        </p>

        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          The easiest way for developers to access complete patient medical histories
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
          One API. Instant FHIR normalization. Nationwide coverage. Transparent usage-based pricing.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
            Create a Free Developer Account
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full border-secondary text-secondary hover:bg-secondary/5 sm:w-auto bg-transparent"
            onClick={() => router.push('/docs')}
          >
            View API Docs
          </Button>
        </div>
      </div>

      {/* Code preview decoration */}
      <div className="mx-auto mt-16 max-w-3xl">
        <div className="overflow-hidden rounded-xl border border-border bg-[#1A1D21] shadow-2xl">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-[#E54848]" />
            <div className="h-3 w-3 rounded-full bg-[#F6A735]" />
            <div className="h-3 w-3 rounded-full bg-[#16C79A]" />
            <span className="ml-2 text-xs text-white/50">api-example.ts</span>
          </div>
          <pre className="overflow-x-auto p-4 text-sm">
            <code className="font-mono text-white/80">
              <span className="text-[#16C79A]">const</span> response = <span className="text-[#16C79A]">await</span>{" "}
              fetch(<span className="text-[#F6A735]">{`'https://api.accesshealthdata.com/fhir/Patient'`}</span>, {"{"}
              {"\n"}
              {"  "}headers: {"{"}
              {"\n"}
              {"    "}
              <span className="text-[#F6A735]">{`'Authorization'`}</span>:{" "}
              <span className="text-[#F6A735]">{`\`Bearer \${API_KEY}\``}</span>
              {"\n"}
              {"  "}
              {"}"}
              {"\n"}
              {"}"});{"\n"}
              {"\n"}
              <span className="text-[#16C79A]">const</span> patient = <span className="text-[#16C79A]">await</span>{" "}
              response.json();{"\n"}
              <span className="text-white/40">// Clean, normalized FHIR JSON — ready to use</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
