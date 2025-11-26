import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Business Associate Services Agreement (BASA) | AccessHealthData",
}

export default function BAALegalPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8 font-serif text-sm leading-relaxed">
        <h1 className="text-3xl font-bold text-black mb-6 text-center">
          AccessHealthData — Business Associate Services Agreement (BASA)
        </h1>

        <div className="text-right text-sm mb-8">
          <div><strong>Effective Date:</strong> Upon Customer's electronic acceptance</div>
          <div><strong>Between:</strong></div>
          <ul className="text-left inline-block mt-2">
            <li><strong>AccessHealthData, Inc.</strong> ("AccessHealthData"), a Business Associate under HIPAA</li>
            <li><strong>Customer</strong> ("Customer"), a Business Associate under HIPAA</li>
          </ul>
          <div className="mt-2">Together, the "Parties."</div>
        </div>

        <div className="prose prose-sm max-w-none text-black">
          <hr className="my-8 border-t border-black" />

          <h2 className="text-2xl font-bold text-black mb-4">1. Purpose and Scope</h2>

          <p className="mb-6">
            This Business Associate Services Agreement ("Agreement" or "BASA") governs AccessHealthData's creation, receipt, maintenance, transmission, and processing of Protected Health Information ("PHI") on behalf of Customer, who itself has one or more Business Associate relationships with Covered Entities or upstream Business Associates.
          </p>

          <p className="mb-6">
            This Agreement is required under the Health Insurance Portability and Accountability Act of 1996 and its implementing regulations, including the HITECH Act (collectively, "HIPAA").
          </p>

          <p className="mb-6">
            This BASA applies solely to Customer's use of the AccessHealthData platform to ingest, normalize, store, transmit, or otherwise process PHI.
          </p>

          <hr className="my-8 border-t border-black" />

          <h2 className="text-2xl font-bold text-black mb-4">2. Definitions</h2>

          <h3 className="text-lg font-semibold text-black mb-2">2.1 "PHI"</h3>
          <p className="mb-4">
            Has the meaning given in 45 C.F.R. §160.103 and includes any Protected Health Information provided by Customer to AccessHealthData or obtained by AccessHealthData on Customer's behalf.
          </p>

          <h3 className="text-lg font-semibold text-black mb-2">2.2 "ePHI"</h3>
          <p className="mb-4">
            PHI maintained or transmitted in electronic form.
          </p>

          <h3 className="text-lg font-semibold text-black mb-2">2.3 "Business Associate"</h3>
          <p className="mb-4">
            Has the meaning specified in HIPAA. Customer affirms it is a Business Associate or a subcontractor to a Business Associate or Covered Entity.
          </p>

          <h3 className="text-lg font-semibold text-black mb-2">2.4 "Services"</h3>
          <p className="mb-4">
            AccessHealthData's APIs, platforms, storage, normalization, and related infrastructure services.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">3. Permitted Uses and Disclosures by AccessHealthData</h2>

          <p className="mb-4">AccessHealthData may use or disclose PHI only as follows:</p>

          <h3 className="text-lg font-semibold text-black mb-2">3.1 To Provide the Services</h3>
          <p className="mb-4">
            To ingest, normalize, convert to FHIR, store, transmit, de-duplicate, retrieve, and otherwise process PHI as necessary to perform Services requested by Customer.
          </p>

          <h3 className="text-lg font-semibold text-black mb-2">3.2 Management and Administration</h3>
          <p className="mb-4">As permitted under HIPAA for internal operations, including:</p>
          <ul className="mb-4 list-disc list-inside">
            <li>security</li>
            <li>auditing</li>
            <li>platform maintenance</li>
            <li>troubleshooting</li>
            <li>logging</li>
            <li>fraud/abuse prevention</li>
          </ul>

          <h3 className="text-lg font-semibold text-black mb-2">3.3 Legal Requirements</h3>
          <p className="mb-4">
            To comply with applicable laws, regulations, or lawful requests.
          </p>

          <h3 className="text-lg font-semibold text-black mb-2">3.4 Minimum Necessary</h3>
          <p className="mb-4">
            AccessHealthData will use, disclose, and request only the minimum necessary PHI to deliver the Services.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">4. Obligations of AccessHealthData</h2>

          <p className="mb-4">AccessHealthData shall:</p>

          <h3 className="text-lg font-semibold text-black mb-2">4.1 Safeguards</h3>
          <p className="mb-4">
            Implement administrative, physical, and technical safeguards compliant with 45 C.F.R. §§164.308, 164.310, and 164.312 to protect PHI.
          </p>

          <h3 className="text-lg font-semibold text-black mb-2">4.2 Reporting</h3>
          <p className="mb-4">
            Report to Customer any Security Incident or Breach involving PHI as required by 45 C.F.R. §164.410 without unreasonable delay.
          </p>

          <h3 className="text-lg font-semibold text-black mb-2">4.3 Subprocessors</h3>
          <p className="mb-4">
            Ensure subcontractors who may access PHI enter into written agreements imposing the same restrictions and safeguards required herein.
          </p>

          <h3 className="text-lg font-semibold text-black mb-2">4.4 Access Controls</h3>
          <p className="mb-4">
            Use role-based access, MFA, encryption at rest (AES-256) and in transit (TLS 1.2+), audit logs, and strict least-privilege policies.
          </p>

          <h3 className="text-lg font-semibold text-black mb-2">4.5 Prohibition Beyond Scope</h3>
          <p className="mb-4">
            Not use or disclose PHI outside the scope of this Agreement.
          </p>

          <h3 className="text-lg font-semibold text-black mb-2">4.6 Return or Destruction</h3>
          <p className="mb-4">
            Upon termination, return or securely destroy PHI as directed by Customer unless retention is required by law or infeasible.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">5. Obligations of Customer</h2>

          <p className="mb-4">Customer shall:</p>

          <h3 className="text-lg font-semibold text-black mb-2">5.1 Compliance</h3>
          <p className="mb-4">
            Comply with HIPAA to the extent required by Customer's relationships with Covered Entities and other Business Associates.
          </p>

          <h3 className="text-lg font-semibold text-black mb-2">5.2 Permissions & Authority</h3>
          <p className="mb-4">
            Ensure it has authority (under upstream BAAs or CE agreements) to disclose PHI to AccessHealthData.
          </p>

          <h3 className="text-lg font-semibold text-black mb-2">5.3 Minimum Necessary</h3>
          <p className="mb-4">
            Transmit only minimum necessary PHI to AccessHealthData.
          </p>

          <h3 className="text-lg font-semibold text-black mb-2">5.4 User Authentication</h3>
          <p className="mb-4">
            Protect API keys, credentials, and access tokens, and ensure only authorized, trained personnel access PHI.
          </p>

          <h3 className="text-lg font-semibold text-black mb-2">5.5 Misuse Notification</h3>
          <p className="mb-4">
            Notify AccessHealthData of any unauthorized use or disclosure of PHI involving Customer's systems or users.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">6. Reporting and Breach Notification</h2>

          <h3 className="text-lg font-semibold text-black mb-2">6.1 Security Incidents</h3>
          <p className="mb-4">
            AccessHealthData maintains continuous monitoring and logs all significant security events. Routine, unsuccessful attempts at unauthorized access (e.g., port scans) are not reportable incidents.
          </p>

          <h3 className="text-lg font-semibold text-black mb-2">6.2 Breach of Unsecured PHI</h3>
          <p className="mb-4">If AccessHealthData discovers a Breach of Unsecured PHI as defined by HIPAA, AccessHealthData will:</p>
          <ul className="mb-4 list-disc list-inside">
            <li>Notify Customer without unreasonable delay (and no later than legally required)</li>
            <li>Provide details known at the time</li>
            <li>Cooperate with Customer's investigation</li>
            <li>Support notifications required under HIPAA Subpart D</li>
          </ul>

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">7. Subcontractors and Subprocessors</h2>

          <p className="mb-4">
            AccessHealthData may use subcontractors (e.g., cloud infrastructure providers, logging systems, database vendors, OCR/normalization subprocessors). Each subprocessor that handles PHI must:
          </p>
          <ul className="mb-4 list-disc list-inside">
            <li>sign a BAA or equivalent agreement</li>
            <li>implement safeguards meeting HIPAA standards</li>
          </ul>
          <p className="mb-4">
            Customer consents to the use of AccessHealthData's subprocessors listed at www.accesshealthdata.com/subprocessors
          </p>

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">8. Term and Termination</h2>

          <h3 className="text-lg font-semibold text-black mb-2">8.1 Term</h3>
          <p className="mb-4">
            This Agreement begins upon Customer's acceptance and remains in effect until terminated by either Party or until Customer's account is closed.
          </p>

          <h3 className="text-lg font-semibold text-black mb-2">8.2 Termination for Cause</h3>
          <p className="mb-4">
            Either party may terminate this Agreement for a material breach if such breach is not cured within 30 days of written notice.
          </p>

          <h3 className="text-lg font-semibold text-black mb-2">8.3 Effect of Termination</h3>
          <p className="mb-4">Upon termination:</p>
          <ul className="mb-4 list-disc list-inside">
            <li>Customer may export all PHI via API</li>
            <li>AccessHealthData will, upon Customer request, securely destroy or return PHI</li>
            <li>AccessHealthData may retain backups if required by law or technically infeasible to remove, provided such retained data is safeguarded and not further used</li>
          </ul>

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">9. Data Ownership</h2>

          <p className="mb-4">Customer retains all rights to PHI.</p>
          <p className="mb-4">AccessHealthData does not obtain, assert, or claim ownership of PHI.</p>
          <p className="mb-4">
            <strong>AccessHealthData may not de-identify PHI <em>without Customer's written permission.</em></strong>
          </p>

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">10. Security Practices Summary</h2>

          <p className="mb-4">AccessHealthData implements:</p>
          <ul className="mb-4 list-disc list-inside">
            <li>Encryption at rest and in transit</li>
            <li>Role-based access & MFA</li>
            <li>Network segmentation</li>
            <li>Logging & anomaly detection</li>
            <li>Annual penetration testing</li>
            <li>Continuous vulnerability scanning</li>
            <li>Secure key management</li>
            <li>SOC2/HITRUST-aligned controls</li>
          </ul>

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">11. Limitation of Liability</h2>
          <p className="mb-4">
            Except for obligations arising from gross negligence, willful misconduct, or violations of law, AccessHealthData's liability under this Agreement is limited in accordance with the liability provisions of the governing Terms of Service.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">12. Governing Law</h2>
          <p className="mb-4">
            This Agreement is governed by the laws of the State of Delaware, excluding conflict-of-law rules.
          </p>

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">13. Entire Agreement</h2>
          <p className="mb-4">
            This Agreement supplements and forms part of the Terms of Service. In case of conflict, this BASA controls with respect to PHI and HIPAA-related matters.
          </p>

          <hr className="my-8 border-t border-black" />

          <h2 className="text-2xl font-bold text-black mb-4 mt-8">Acceptance Section</h2>
          <p className="mb-8">
            By clicking "Accept and Continue," Customer agrees to the terms of this Business Associate Services Agreement.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
