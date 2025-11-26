import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do I need a BAA to sign up?",
    answer: "No. Only when enabling PHI Mode.",
  },
  {
    question: "Can I test all API endpoints using mock data?",
    answer: "Yes. Every production endpoint has a synthetic equivalent.",
  },
  {
    question: "Do I need an NPI to test?",
    answer: "No. NPIs are only required for PHI Mode permitted-use verification.",
  },
  {
    question: "Do you offer OAuth or SSO for login?",
    answer: "GitHub and Google supported. SSO/SAML coming soon.",
  },
  {
    question: "How long until I get an API key?",
    answer: "Immediately.",
  },
  {
    question: "How long does PHI Mode take to activate?",
    answer: "Typically <10 minutes after completing BAA and billing.",
  },
]

export function SignupFaq() {
  return (
    <section className="mx-auto max-w-3xl">
      <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="mt-8">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-foreground">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
