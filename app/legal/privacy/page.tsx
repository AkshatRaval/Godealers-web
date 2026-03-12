import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — GoDealer",
  description: "Learn how GoDealer collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us when you create an account, list products, 
complete transactions, or contact support. This includes:

**Personal Identifiers:** Name, email address, phone number, and business name.

**Business Information:** GST number, PAN, shop address, and dealer license details required for verification.

**Device & Usage Data:** IP address, device type, browser, operating system, pages visited, search queries, 
and interaction timestamps collected automatically via cookies and similar technologies.

**Transaction Data:** Listings created, offers made, deals closed, and payment metadata (we do not store 
full card numbers — payments are processed by PCI-DSS compliant third-party processors).

**Communications:** Messages sent within GoDealer's in-app chat, support tickets, and feedback forms.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `GoDealer uses the collected data to:

- **Provide and improve the Service:** Match buyers with sellers, power search and recommendations, 
  prevent fraud, and debug issues.
- **Dealer Verification:** Validate KYC documents to ensure only legitimate dealers access the platform.
- **Communications:** Send transactional emails (OTPs, deal alerts, verification status), newsletters 
  (with your consent), and push notifications you can opt out of at any time.
- **Analytics:** Understand usage trends to improve features — all aggregated and anonymised where possible.
- **Legal & Compliance:** Fulfil obligations under Indian law, respond to lawful government requests, 
  and resolve disputes.`,
  },
  {
    title: "3. Sharing of Information",
    content: `We do **not** sell your personal data. We may share it with:

- **Other Users:** Your public profile (business name, location, average rating) is visible to verified 
  dealers on the platform. Private contact details are shared only with your explicit consent when you 
  complete a transaction.
- **Service Providers:** Cloud hosting (Supabase/AWS), analytics (Mixpanel), payment processors, 
  and SMS/email delivery partners — all under data processing agreements that restrict their use.
- **Legal Authorities:** When required by law, court order, or to protect the rights and safety of 
  GoDealer, its users, or the public.
- **Business Transfers:** In the event of a merger, acquisition, or asset sale, data may transfer to 
  the successor entity, subject to the same privacy commitments.`,
  },
  {
    title: "4. Data Retention",
    content: `We retain your personal data for as long as your account is active or as needed to provide 
the Service. After account deletion:

- **Active transaction records** are kept for 7 years as required by Indian accounting law.
- **KYC documents** are retained for 5 years per PMLA guidelines.
- **Chat messages** are deleted within 90 days of account closure.

You may request deletion of non-legally-required data by emailing privacy@godealer.app.`,
  },
  {
    title: "5. Security",
    content: `We implement industry-standard safeguards including TLS encryption in transit, AES-256 
encryption at rest for sensitive fields, role-based access controls, and regular security audits. 
No system is 100% secure; if you suspect a breach please email security@godealer.app immediately.`,
  },
  {
    title: "6. Your Rights",
    content: `Depending on your jurisdiction you may have the right to:

- **Access** a copy of the personal data we hold about you.
- **Correct** inaccurate or incomplete data.
- **Delete** your account and associated personal data (subject to legal retention requirements).
- **Port** your data in a machine-readable format.
- **Withdraw consent** for marketing communications at any time.

To exercise these rights, email privacy@godealer.app from your registered address. We will respond 
within 30 days.`,
  },
  {
    title: "7. Children's Privacy",
    content: `GoDealer is a B2B platform intended exclusively for registered businesses and adults aged 
18 and above. We do not knowingly collect information from minors. If we become aware that a minor 
has provided us personal data, we will delete it promptly.`,
  },
  {
    title: "8. Changes to This Policy",
    content: `We may update this policy periodically. Material changes will be notified via email and 
an in-app banner at least 14 days before they take effect. Continued use of GoDealer after the 
effective date constitutes acceptance.`,
  },
  {
    title: "9. Contact Us",
    content: `For any privacy-related questions, contact our Data Protection Officer:

**Email:** privacy@godealer.app  
**Address:** GoDealer Technologies Pvt. Ltd., Mumbai, Maharashtra, India`,
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      badge="Legal"
      title="Privacy Policy"
      subtitle="We care about your data. This policy explains what we collect, why, and how you can control it."
      effectiveDate="March 1, 2025"
      sections={sections}
    />
  );
}
