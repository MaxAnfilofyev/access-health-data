"use client"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export function SignupCta() {
  return (
    <section className="rounded-2xl bg-primary/5 p-8 text-center sm:p-12">
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Start building with AccessHealthData today.
      </h2>
      <p className="mt-3 text-lg text-muted-foreground">Create your free developer account.</p>
      <Button
        size="lg"
        className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp className="mr-2 h-5 w-5" />
        Back to Sign Up Form
      </Button>
    </section>
  )
}
