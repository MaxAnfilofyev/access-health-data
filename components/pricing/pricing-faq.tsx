import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: 'What counts as "processing"?',
    answer:
      "All ingestion activity: C-CDAs, HL7, PDFs, notes, labs, imaging reports, ADTs, and other clinical documents.",
  },
  {
    question: 'What counts as "storage"?',
    answer: "Normalized FHIR JSON stored in the patient's longitudinal record.",
  },
  {
    question: "Is the Free Developer Tier real?",
    answer: "Yes. It uses synthetic/mock data so you can build features before signing a BAA.",
  },
  {
    question: "Do I need a BAA?",
    answer: "For any PHI usage: yes. Automatically included in paid tiers.",
  },
  {
    question: "Is my data isolated?",
    answer: "Yes. Each customer has logically isolated storage and compute.",
  },
  {
    question: "What if I exceed my GB limit?",
    answer: "You are billed at published overage rates. No penalties.",
  },
  {
    question: "Can I export or delete data?",
    answer: "Yes. Full export and deletion APIs are provided.",
  },
]

export function PricingFaq() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
        </div>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-foreground">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
