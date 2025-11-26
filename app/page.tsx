import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ValueProps } from "@/components/value-props"
import { HowItWorks } from "@/components/how-it-works"
import { Pricing } from "@/components/pricing"
import { ApiSection } from "@/components/api-section"
import { Security } from "@/components/security"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ValueProps />
        <HowItWorks />
        <Pricing />
        <ApiSection />
        <Security />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
