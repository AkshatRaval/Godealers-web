import LegalPage from "@/components/LegalPage";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Terms of Service — GoDealer",
  description: "Read the Terms of Service governing the use of the GoDealer platform.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By downloading, installing, or using GoDealer (the "Service"), you agree to be bound by 
these Terms of Service ("Terms") and our Privacy Policy, Cookie Policy, and Dealer Agreement (where 
applicable). If you do not agree, do not use the Service.

These Terms constitute a legally binding agreement between you ("User") and GoDealer Technologies 
Pvt. Ltd. ("GoDealer", "we", "us").`,
  },
  {
    title: "2. Eligibility",
    content: `The Service is intended solely for:

- Registered businesses operating in India with a valid GST number, or
- Individuals engaged in the wholesale trade of mobile phones and accessories aged 18 or above.

By using GoDealer, you represent and warrant that you meet these criteria. We reserve the right to 
terminate accounts that do not satisfy eligibility requirements.`,
  },
  {
    title: "3. Account Registration & Security",
    content: `You must provide accurate, complete, and current information during registration. You are 
responsible for:

- Maintaining the confidentiality of your login credentials.
- All activities that occur under your account.
- Notifying us immediately at support@godealer.app of any unauthorized access.

GoDealer will not be liable for any loss arising from unauthorized use of your account.`,
  },
  {
    title: "4. Dealer Verification",
    content: `To access full platform features, you must complete our KYC verification process, which 
may require submission of GST certificate, PAN card, business address proof, and a selfie with valid 
ID. GoDealer reserves the right to approve or reject verification requests at its sole discretion. 
Providing false documents is a criminal offence and will result in immediate account termination 
and reporting to authorities.`,
  },
  {
    title: "5. Prohibited Activities",
    content: `You agree NOT to:

- List counterfeit, stolen, or illegally obtained mobile devices.
- Manipulate prices, create fake listings, or engage in wash trading.
- Harvest user data, scrape the platform, or use automated bots.
- Circumvent GoDealer's communication platform to avoid fees.
- Use the Service for money laundering or any unlawful purpose.
- Harass, threaten, or defame other users.

Violation may result in immediate suspension, withholding of funds, and legal action.`,
  },
  {
    title: "6. Listings & Transactions",
    content: `**Accuracy:** Sellers must provide truthful descriptions, accurate grades, and genuine photos.

**Pricing:** Prices are in Indian Rupees (INR) inclusive of GST where stated.

**Binding Offers:** An accepted offer constitutes a binding contract between buyer and seller. 
GoDealer is a marketplace facilitator; we are not a party to the transaction.

**Dispute Resolution:** In case of a dispute, both parties must first attempt to resolve via 
in-app dispute flow. Unresolved disputes may be escalated to GoDealer's mediation team. 
GoDealer's decision is final and binding.`,
  },
  {
    title: "7. Fees & Payments",
    content: `GoDealer charges a platform commission on completed transactions as notified in the 
app and on the pricing page. We reserve the right to change fees with 30 days' notice. 
Payments are processed through authorized payment gateways; GoDealer is not responsible for 
payment gateway failures.`,
  },
  {
    title: "8. Intellectual Property",
    content: `All content, trademarks, logos, and software on GoDealer are owned by or licensed to 
GoDealer Technologies Pvt. Ltd. You are granted a limited, non-exclusive, revocable licence to 
use the Service for its intended purpose. You may not copy, distribute, or create derivative works 
without written permission.

By submitting listings or content, you grant GoDealer a worldwide, royalty-free licence to use, 
display, and distribute that content on the platform.`,
  },
  {
    title: "9. Disclaimers & Limitation of Liability",
    content: `The Service is provided "as is" and "as available". GoDealer makes no warranties, 
express or implied, regarding merchantability, fitness for a particular purpose, or uninterrupted 
service.

To the maximum extent permitted by law, GoDealer's liability for any claim shall not exceed the 
fees paid by you in the 3 months preceding the event giving rise to the claim.`,
  },
  {
    title: "10. Termination",
    content: `We may suspend or terminate your account at any time for breach of these Terms. 
You may close your account by contacting support; outstanding obligations (e.g., pending 
transactions, commission dues) survive termination.`,
  },
  {
    title: "11. Governing Law & Jurisdiction",
    content: `These Terms are governed by the laws of India. Any disputes shall be subject to the 
exclusive jurisdiction of the courts of Mumbai, Maharashtra. Parties agree to attempt mediation 
before initiating litigation.`,
  },
  {
    title: "12. Changes to Terms",
    content: `GoDealer may modify these Terms at any time. Material changes will be notified via 
email and in-app at least 14 days in advance. Continued use after the effective date constitutes 
your acceptance.`,
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      badge="Legal"
      title="Terms of Service"
      subtitle="These terms govern your access to and use of the GoDealer platform. Please read them carefully."
      effectiveDate="March 1, 2025"
      sections={sections}
    />
  );
}
