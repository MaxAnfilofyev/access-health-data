import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingTiers } from "@/components/pricing/pricing-tiers"
import { UsagePricing } from "@/components/pricing/usage-pricing"
import { RealWorldConversions } from "@/components/pricing/real-world-conversions"
import { ComparisonBlocks } from "@/components/pricing/comparison-blocks"
import { PricingFaq } from "@/components/pricing/pricing-faq"
import { PricingCta } from "@/components/pricing/pricing-cta"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PricingHero />
        <PricingTiers />
        <UsagePricing />
        <RealWorldConversions />
        <ComparisonBlocks />
        <PricingFaq />
        <PricingCta />
      </main>
      <Footer />
    </div>
  )
}
