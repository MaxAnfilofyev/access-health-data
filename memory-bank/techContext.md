# Technical Context

**Core Technology Stack:**

```
Frontend:         Next.js 15/16 + React 19 + TypeScript
Styling:          Tailwind CSS 4.0 + shadcn/ui component library
Typography:       Google Fonts (Inter, Geist Mono)
Icons:            Lucide React
State/Data:       Upstash Redis (KV storage)
Deployment:       Cloudflare Pages (with wildcard subdomain support)
```

**Dependencies Breakdown:**

**UI & Design System:**
- `@radix-ui/*`: 22 components for accessible primitives
- `class-variance-authority`: Variant management for shadcn/ui
- `tailwind-merge`: Dynamic class merging utilities
- `lucide-react`: 454 React icons
- `sonner`: Toast notifications

**Data & Persistence:**
- `@upstash/redis`: Serverless Redis for tenant data storage
- No traditional SQL database - Redis-only architecture

**Forms & Validation:**
- `react-hook-form`: Form state management
- `@hookform/resolvers`: Schema validation integration
- `zod`: Type-safe schema validation

**Navigation & Layout:**
- `next-themes`: Dark/light mode support
- `next`: 16.0.3 (App Router with Turbopack)

**Development Tools:**
- `typescript`: 5.x with strict configuration
- `postcss`: CSS processing
- `tailwindcss`: 4.x with Animate plugin
- `eslint`: Linting (inherited from shadcn/ui)

**Development Setup:**
- Package Manager: `pnpm` (recommended, but npm/yarn compatible)
- Node Version: 18.17.0+
- Local Development: `http://localhost:3000`
- Subdomain Testing: `http://tenant.localhost:3000`
- Environment Variables: `.env.local` required for Redis

**Technical Constraints:**

1. **Platform Requirements:**
   - macOS environment (current development)
   - Node.js 18.17.0 minimum
   - pnpm package manager preferred

2. **Deployment Constraints:**
   - Cloudflare Pages as hosting platform
   - Wildcard DNS configuration for subdomains (`*.accesshealthdata.com`)
   - Static generation compatible
   - Environment variables must be configured in Cloudflare dashboard

3. **Performance Limits:**
   - Redis: Upstash free tier (10,000 requests/month)
   - No image optimization currently enabled
   - Turbopack for fast development builds

4. **Security Constraints:**
   - PHI data handling compliance (HIPAA considerations)
   - Multi-tenant data isolation requirements
   - Admin page access control through middleware

**Tool Usage Patterns:**

1. **Component Development:**
   ```bash
   # Running development server
   pnpm dev

   # Building for production
   pnpm build

   # Code linting
   pnpm lint
   ```

2. **UI Component Library:**
   ```bash
   # Add new shadcn/ui component
   pnpm dlx shadcn@latest add [component-name]
   ```

3. **Redis Interaction:**
   ```typescript
   // Server-side only (API routes)
   import { redis } from '@/lib/redis'

   await redis.get(`subdomain:${name}`)
   await redis.set(`subdomain:${name}`, tenantData)
   ```

4. **Environment Configuration:**
   ```bash
   # Required variables
   KV_REST_API_URL=your_redis_url
   KV_REST_API_TOKEN=your_redis_token
   ```

**Architecture Decisions:**

- **App Router vs Pages Router:** App Router chosen for new development
- **shadcn/ui vs Custom Components:** shadcn/ui for rapid prototyping and consistency
- **Tailwind vs CSS-in-JS:** Utility-first CSS for maintainability
- **Redis vs SQL:** Simple key-value storage sufficient for tenant metadata
- **TypeScript Strict:** Enabled for healthcare application reliability
