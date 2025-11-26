import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="bg-secondary px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
          Build with normalized healthcare data in minutes — not months
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-secondary-foreground/80">
          Get started with our free developer tier and unlimited synthetic data access.
        </p>
        <Button size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
          Create a Free Developer Account
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
