# System Patterns & Architecture

**System Architecture Overview:**
```
┌─────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│   Subdomain     │───▶│   Middleware     │───▶│   App Router     │
│   Routing       │    │   (middleware.ts)│    │   Pages          │
│                 │    │   - Extracts     │    │                  │
│ tenant.domain.com│    │     subdomain   │    │ /s/[subdomain]   │
└─────────────────┘    └──────────────────┘    └──────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
   ┌─────────────────┐    ┌──────────────────┐    ┌──────────────────┐
   │  Redis Storage  │    │  Admin Interface │    │ Root Domain      │
   │ tenant:{name}   │    │ /admin           │    │ Main Landing     │
   └─────────────────┘    └──────────────────┘    └──────────────────┘
```

**Key Technical Decisions:**

1. **Multi-Tenant Architecture:**
   - Subdomain-based isolation: each tenant gets `tenant.yourdomain.com`
   - Data separation through Redis key namespacing: `subdomain:{name}`
   - No database separation for simplicity (single Redis instance)
   - Admin access blocked from subdomains for security

2. **Middleware Implementation:**
   - Custom `middleware.ts` for request routing (currently deprecated)
   - Pattern matching for localhost subdomains, Vercel preview URLs, and production subdomains
   - Redirects root paths on subdomains to `/s/[subdomain]` dynamic routes

3. **State Management:**
   - Redis for tenant metadata storage
   - In-memory session handling through Next.js
   - No complex client-side state management currently

**Design Patterns in Use:**

1. **Compound Component Pattern:** shadcn/ui components using Radix UI primitives
   ```
   <Dialog>
     <DialogTrigger>Open</DialogTrigger>
     <DialogContent>
       <DialogHeader>
         <DialogTitle>Title</DialogTitle>
         <DialogDescription>Description</DialogDescription>
       </DialogHeader>
       <DialogBody>Content</DialogBody>
       <DialogFooter>
         <DialogClose>Cancel</DialogClose>
         <Button>Confirm</Button>
       </DialogFooter>
     </DialogContent>
   </Dialog>
   ```

2. **Layout Component Pattern:** Page sections composed into main layout
   ```
   <Hero />
   <ValueProps />
   <Pricing />
   <ApiSection />
   <Security />
   <Footer />
   ```

3. **Utility-First Styling:** Tailwind CSS with design tokens via CSS variables
   ```
   className={`font-sans antialiased ${inter.variable}`}
   ```

4. **Error Boundary Pattern:** Not yet implemented but planned for production

**Component Relationships:**

- `Header` → `HeaderNav` (main navigation)
- `Hero` → marketing landing section
- `ValueProps` → feature highlights
- `Pricing` → pricing tiers and comparison
- `ApiSection` → API documentation preview
- `Security` → compliance and security features
- `Footer` → contact and legal links

**Critical Implementation Paths:**

1. **Subdomain Routing Flow:**
   ```
   subdomain.domain.com/ → middleware → /s/subdomain
   domain.com/admin → admin pages (allowed)
   subdomain.domain.com/admin → redirect to / (blocked)
   ```

2. **Google Analytics Integration:**
   ```
   layout.tsx → GoogleAnalytics component → gtag script injection
   ```

3. **Build Process:**
   ```
   pnpm build → Next.js compile → Turbopack → static generation
   pnpm build → Next.js compile → Turbopack → static generation
