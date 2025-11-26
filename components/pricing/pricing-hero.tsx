export function PricingHero() {
  return (
    <section className="border-b border-border bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Pricing built for developers.
        </h1>
        <p className="mt-4 text-xl font-medium text-primary">Simple fixed monthly fees + usage-based billing.</p>
        <p className="mt-2 text-lg text-muted-foreground">No sales calls. No opaque enterprise licensing.</p>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-muted-foreground">
          Choose a tier and pay only for the data you process and store. Scale seamlessly as your product grows.
        </p>
      </div>
    </section>
  )
}
