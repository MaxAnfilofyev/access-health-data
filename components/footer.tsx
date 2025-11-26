import Link from "next/link"

const legalLinks = [
  { name: "BAA", href: "/baa" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "HIPAA Statement", href: "/hipaa" },
  { name: "Security Overview", href: "/security" },
  { name: "Subprocessors", href: "/subprocessors" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-primary-foreground"
                >
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                  <path d="M18 14h-8" />
                  <path d="M15 18h-5" />
                  <path d="M10 6h8v4h-8V6Z" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-foreground">AccessHealthData</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              The easiest way for developers to access complete patient medical histories.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">hello@accesshealthdata.com</p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm sm:grid-cols-3 md:grid-cols-4">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/docs" className="text-muted-foreground transition-colors hover:text-foreground">
              Documentation
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AccessHealthData. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
