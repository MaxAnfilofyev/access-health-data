import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service - Full Legal Text | AccessHealthData",
}

export default function TermsLegalPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8 font-serif text-sm leading-relaxed">
        <h1 className="text-3xl font-bold text-black mb-6 text-center">
          AccessHealthData — Terms of Service
        </h1>

        <p className="text-right text-sm mb-8">
          <strong>Last Updated:</strong> 11/26/2025
        </p>

        <div className="prose prose-sm max-w-none text-black">
          <p className="mb-6">
            These Terms of Service ("Terms") govern your access to and use of the AccessHealthData APIs, platform, documentation, software, services, and related infrastructure (collectively, the "Services"). These Terms form a binding agreement between <strong>AccessHealthData, Inc.</strong> ("AccessHealthData," "we," "us," or "our") and the individual or entity accessing the Services ("Customer," "you," or "your").
          </p>

          <p className="mb-6">
            By creating an account, accessing the API, or using the Services, you agree to these Terms. If you are entering into this agreement on behalf of an entity, you represent that you have authority to bind that entity.
          </p>

          <hr className="my-8 border-t border-black" />

          <h2 className="text-2xl font-bold text-black mb-4">1. Overview of Services</h2>

          <p className="mb-6">
            AccessHealthData provides APIs and platform services enabling Customers to:
          </p>

          <ul className="mb-4 list-disc list-inside">
            <li>Access, retrieve, or receive clinical data on behalf of their authorized healthcare clients</li>
            <li>Normalize, convert, or transform healthcare data into structured formats</li>
            <li>Store, maintain, and transmit Protected Health Information ("PHI")</li>
            <li>Provide downstream functionality to healthcare providers, payers, or other HIPAA-covered or regulated entities</li>
            <li>Comply with data exchange rules under HIPAA, TEFCA, and applicable laws</li>
          </ul>

          <p className="mb-6">
            You are responsible for ensuring that all PHI you request, submit, or process through the Services is permitted under HIPAA and applicable agreements with your own upstream Covered Entities or Business Associates.
          </p>

          <p className="mb-6">
            Your use of the Services involving PHI is governed by our <strong>Business Associate Services Agreement (BASA)</strong>, which is incorporated into these Terms.
          </p>

          <hr className="my-8 border-t border-black" />

          <h2 className="text-2xl font-bold text-black mb-4">2. Eligibility</h2>

          <h3 className="text-lg font-semibold text-black mb-2">2.1 HIPAA-Regulated Customers Only</h3>
          <p className="mb-4">
            You may only use the Services if you are:
          </p>
          <ul className="mb-4 list-disc list-inside">
            <li>A HIPAA Business Associate</li>
            <li>A subcontractor of a Business Associate</li>
            <li>A Covered Entity</li>
            <li>A vendor engaging solely in HIPAA-permitted operations involving PHI</li>
          </ul>
          <p className="mb-4">
            If you are not working within these regulated roles, you may not use the Services to access PHI.
          </p>

          <h3 className="text-lg font-semibold text-black mb-2">2.2 Age</h3>
          <p className="mb-4">
            You must be at least 18 years old to use the Services.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">3. Account Registration</h2>
          <p className="mb-4">
            You must create an account and provide accurate, complete information. You agree to:
          </p>
          <ul className="mb-4 list-disc list-inside">
            <li>Keep your credentials confidential</li>
            <li>Implement reasonable security for your systems and users</li>
            <li>Notify us of any unauthorized access to your account</li>
          </ul>
          <p className="mb-4">
            We may suspend or terminate your account for any security concerns, misuse, or violations of these Terms.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">4. Customer Responsibilities</h2>
          <p className="mb-4">You agree to:</p>

          <h3 className="text-lg font-semibold text-black mb-2">4.1 Lawful Use Only</h3>
          <p className="mb-4">Use the Services only as permitted by:</p>
          <ul className="mb-4 list-disc list-inside">
            <li>HIPAA</li>
            <li>HITECH</li>
            <li>TEFCA rules (when applicable)</li>
            <li>State privacy laws</li>
            <li>All agreements between you and your Covered Entities / Business Associates</li>
            <li>These Terms and the BASA</li>
          </ul>

          <h3 className="text-lg font-semibold text-black mb-2">4.2 Data Permissions</h3>
          <p className="mb-4">
            You must have all lawful rights and authorizations (including patient consent where required) before requesting or submitting PHI through the Services.
          </p>

          <h3 className="text-lg font-semibold text-black mb-2">4.3 API Security</h3>
          <p className="mb-4">You must:</p>
          <ul className="mb-4 list-disc list-inside">
            <li>Protect API keys</li>
            <li>Restrict usage to authorized personnel</li>
            <li>Rotate keys if compromised</li>
            <li>Use TLS encryption for all inbound/outbound traffic</li>
          </ul>

          <h3 className="text-lg font-semibold text-black mb-2">4.4 Customer Systems</h3>
          <p className="mb-4">
            You are responsible for all activity occurring through your systems, your users, and any integrations using your credentials.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">5. Our Responsibilities</h2>
          <p className="mb-4">
            AccessHealthData will:
          </p>
          <ul className="mb-4 list-disc list-inside">
            <li>Provide secure, compliant infrastructure for PHI</li>
            <li>Implement reasonable technical and administrative safeguards</li>
            <li>Maintain uptime as commercially reasonable</li>
            <li>Provide documentation and support resources</li>
            <li>Notify you of Security Incidents or Breaches as described in the BASA</li>
          </ul>
          <p className="mb-4">
            We may update, enhance, or modify the Services, provided such changes do not materially degrade core functionality without notice.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">6. Prohibited Uses</h2>
          <p className="mb-4">You may <strong>not</strong>:</p>
          <ul className="mb-4 list-disc list-inside">
            <li>Use the Services for marketing, advertising, or patient outreach without applicable consent</li>
            <li>Misrepresent your identity or authority to access PHI</li>
            <li>Attempt to access data for individuals with whom you have no treatment, payment, or operations relationship</li>
            <li>Use the API to build a competing health data infrastructure product</li>
            <li>Scrape, resell, or redistribute data outside HIPAA-permitted purposes</li>
            <li>Interfere with or degrade the platform</li>
            <li>Reverse engineer or attempt to circumvent security controls</li>
          </ul>
          <p className="mb-4">
            Violation of prohibited uses may result in immediate suspension or termination.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">7. Fees and Payment</h2>

          <h3 className="text-lg font-semibold text-black mb-2">7.1 Pricing</h3>
          <p className="mb-4">
            Fees are displayed publicly on our website and tier pages. By using the Services, you agree to pay all applicable fees.
          </p>

          <h3 className="text-lg font-semibold text-black mb-2">7.2 Billing</h3>
          <ul className="mb-4 list-disc list-inside">
            <li>Fees are billed via Stripe</li>
            <li>You must maintain a valid payment method</li>
            <li>Monthly charges include: Tier subscription (if applicable), Usage-based charges (processing, storage, overages), Setup/onboarding fees (if applicable)</li>
          </ul>

          <h3 className="text-lg font-semibold text-black mb-2">7.3 Late Payments</h3>
          <p className="mb-4">
            Failure to pay may result in service suspension. We may charge interest or collection fees where permitted by law.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">8. Intellectual Property</h2>

          <h3 className="text-lg font-semibold text-black mb-2">8.1 AccessHealthData IP</h3>
          <p className="mb-4">
            All rights, title, and interest in the platform, APIs, designs, software, and documentation belong to AccessHealthData.
          </p>

          <h3 className="text-lg font-semibold text-black mb-2">8.2 Customer IP</h3>
          <p className="mb-4">
            PHI and data you provide remains your property (or that of your Covered Entity). We claim no ownership of your data.
          </p>

          <h3 className="text-lg font-semibold text-black mb-2">8.3 Feedback</h3>
          <p className="mb-4">
            You grant us a license to use feedback to improve the Services without obligation to you.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">9. Confidentiality</h2>
          <ul className="mb-4 list-disc list-inside">
            <li>Each party will keep the other's Confidential Information secure and use it only for permitted purposes.</li>
            <li>PHI is governed by the BASA.</li>
            <li>Confidential Information excludes information that is public, independently developed, or lawfully obtained from a third party.</li>
          </ul>

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">10. Data Handling</h2>

          <h3 className="text-lg font-semibold text-black mb-2">10.1 PHI Processing</h3>
          <p className="mb-4">PHI is handled solely per the BASA.</p>

          <h3 className="text-lg font-semibold text-black mb-2">10.2 Deletion</h3>
          <p className="mb-4">
            Upon request or termination, we will destroy or return PHI unless retention is required for legal, security, or operational reasons.
          </p>

          <h3 className="text-lg font-semibold text-black mb-2">10.3 Backups</h3>
          <p className="mb-4">
            Backups may persist for a limited duration but remain protected and are not used for any purpose.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">11. Availability and Support</h2>
          <p className="mb-4">AccessHealthData will provide:</p>
          <ul className="mb-4 list-disc list-inside">
            <li>Reasonable uptime</li>
            <li>Maintenance windows</li>
            <li>API status transparency</li>
            <li>Online support (including AI-driven support tools)</li>
          </ul>
          <p className="mb-4">We do not guarantee:</p>
          <ul className="mb-4 list-disc list-inside">
            <li>Uninterrupted availability</li>
            <li>Zero loss of data</li>
            <li>Compatibility with all systems</li>
          </ul>

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">12. Term and Termination</h2>

          <h3 className="text-lg font-semibold text-black mb-2">12.1 Term</h3>
          <p className="mb-4">
            These Terms apply from account creation until termination.
          </p>

          <h3 className="text-lg font-semibold text-black mb-2">12.2 Termination by Customer</h3>
          <p className="mb-4">
            You may terminate your account at any time.
          </p>

          <h3 className="text-lg font-semibold text-black mb-2">12.3 Termination by AccessHealthData</h3>
          <p className="mb-4">We may suspend or terminate access immediately for:</p>
          <ul className="mb-4 list-disc list-inside">
            <li>Violations of law</li>
            <li>Violations of these Terms</li>
            <li>Security risks</li>
            <li>Non-payment</li>
            <li>Misuse of PHI</li>
          </ul>

          <h3 className="text-lg font-semibold text-black mb-2">12.4 Effect of Termination</h3>
          <p className="mb-4">Upon termination:</p>
          <ul className="mb-4 list-disc list-inside">
            <li>You must stop using the Services</li>
            <li>You may export PHI through APIs</li>
            <li>We will delete or return PHI as described in the BASA</li>
            <li>Fees owed remain payable</li>
          </ul>

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">13. Warranties and Disclaimers</h2>
          <p className="mb-4">
            THE SERVICES ARE PROVIDED <strong>"AS IS," "AS AVAILABLE," AND WITHOUT WARRANTIES OF ANY KIND</strong>, INCLUDING IMPLIED WARRANTIES OF:
          </p>
          <ul className="mb-4 list-disc list-inside">
            <li>MERCHANTABILITY</li>
            <li>FITNESS FOR A PARTICULAR PURPOSE</li>
            <li>NON-INFRINGEMENT</li>
            <li>ACCURACY OR COMPLETENESS OF DATA</li>
          </ul>
          <p className="mb-4">
            We do not guarantee that data received from third-party networks (including QHINs, HIEs, EHRs, or clearinghouses) is accurate or complete.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">14. Limitation of Liability</h2>
          <p className="mb-4">
            To the maximum extent permitted by law:
          </p>
          <ul className="mb-4 list-disc list-inside">
            <li>AccessHealthData's total liability under these Terms will not exceed <strong>the amounts you paid to AccessHealthData in the 12 months prior to the claim</strong>.</li>
            <li>We are <strong>not liable</strong> for indirect, incidental, special, consequential, or punitive damages, including lost profits, lost data, or business interruption.</li>
          </ul>

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">15. Indemnification</h2>
          <p className="mb-4">You agree to indemnify, defend, and hold harmless AccessHealthData from claims arising out of:</p>
          <ul className="mb-4 list-disc list-inside">
            <li>Your misuse of the Services</li>
            <li>Your violation of these Terms</li>
            <li>Your breach of HIPAA obligations or upstream BAAs</li>
            <li>Unauthorized use of PHI by your users or systems</li>
          </ul>

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">16. Modifications to Terms</h2>
          <p className="mb-4">
            We may update these Terms from time to time. Material changes will be posted online. Continued use of the Services after changes constitutes acceptance.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">17. Governing Law</h2>
          <p className="mb-4">
            These Terms are governed by the laws of the State of Delaware, excluding its conflict-of-law provisions. Any disputes must be resolved in courts located in Delaware.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">18. Miscellaneous</h2>
          <ul className="mb-4 list-disc list-inside">
            <li><strong>Assignment:</strong> You may not assign these Terms without our consent.</li>
            <li><strong>Severability:</strong> If any provision is unenforceable, the remainder remains in effect.</li>
            <li><strong>No Waiver:</strong> Failure to enforce a provision does not waive our rights.</li>
            <li><strong>Entire Agreement:</strong> These Terms + BASA + Pricing Page = entire agreement.</li>
          </ul>

          <hr className="my-8 border-t border-black" />

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">Acceptance</h2>
          <p className="mb-8">
            By clicking "Create Account," "Accept," or using the API, you acknowledge that you have read, understood, and agree to be bound by these Terms.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
