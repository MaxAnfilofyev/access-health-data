import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function PricingCta() {
  return (
    <section className="border-t border-border bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-balance text-3xl font-bold text-secondary-foreground sm:text-4xl">
          Build with normalized nationwide healthcare data in minutes, not months.
        </h2>
        <div className="mt-8">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Create a free developer account
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
