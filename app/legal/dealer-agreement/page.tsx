import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Dealer Agreement — GoDealer",
  description: "The Dealer Agreement outlines the rights and obligations of verified dealers on the GoDealer platform.",
};

const sections = [
  {
    title: "1. Parties & Purpose",
    content: `This Dealer Agreement ("Agreement") is entered into between GoDealer Technologies Pvt. Ltd. 
("GoDealer") and you, the verified dealer ("Dealer"), upon successful KYC approval.

This Agreement governs your access to dealer-exclusive features including bulk listing, price 
broadcasting, verified badge, and priority search placement on the GoDealer platform.`,
  },
  {
    title: "2. Dealer Obligations",
    content: `As a verified Dealer, you agree to:

**Authenticity:** List only genuine, legitimately acquired mobile devices and accessories. Each 
listing must accurately describe the product's brand, model, storage, condition (grade A/B/C/D), 
and IMEI availability.

**Compliance:** Ensure all inventory complies with Indian import/export regulations, BIS 
certification requirements, and GST obligations.

**Responsiveness:** Respond to buyer enquiries within 24 hours on business days. 
Repeated non-response may result in listing suspension.

**Accurate Grading:** Use GoDealer's standardised grading system (as defined in the Help Centre) 
when describing device conditions. Misrepresentation of grade is grounds for immediate suspension.

**Invoicing:** Issue a proper GST invoice for every completed transaction within 2 business days.`,
  },
  {
    title: "3. Listing Standards",
    content: `All listings must:

- Include real photographs (not stock images) or GoDealer-approved product renders.
- State quantity available with a minimum of 1 unit.
- Provide an honest price — predatory or deceptive pricing is prohibited.
- Be updated or removed if stock is no longer available within 48 hours of sell-out.
- Not duplicate existing live listings for the same batch.

GoDealer may remove listings that violate these standards without prior notice.`,
  },
  {
    title: "4. Verified Dealer Badge",
    content: `The "Verified Dealer" badge is granted upon successful KYC and may be revoked if:

- A background check reveals fraudulent documents.
- Three or more confirmed buyer complaints are lodged within 90 days.
- The Dealer fails to renew KYC annually or after any document expiry.
- Repeated violations of Listing Standards occur.

Loss of the badge results in removal from priority search and bulk listing features until 
re-verification is completed.`,
  },
  {
    title: "5. Commission & Fees",
    content: `GoDealer charges a **platform commission** on the net transaction value of each completed 
deal. The current commission rate is displayed in your dashboard and on the pricing page, and may 
be updated with 30 days' notice.

**Payment to Dealer:** After a buyer confirms receipt, funds are released to your registered bank 
account within 3-5 business days, net of GoDealer's commission and any applicable taxes.

**Refunds & Chargebacks:** In the event of a verified buyer complaint or payment chargeback, 
GoDealer may withhold or claw back the corresponding transaction amount pending resolution.`,
  },
  {
    title: "6. Dispute Resolution",
    content: `**Step 1 — Self Resolution (48 hours):** Buyer and Dealer must first communicate via 
in-app chat to resolve the issue.

**Step 2 — GoDealer Mediation (7 days):** If unresolved, either party may escalate to GoDealer's 
Dispute Team. Both parties must provide evidence within 72 hours of escalation.

**Step 3 — Binding Decision:** GoDealer's Dispute Team will issue a decision within 7 business 
days. Decisions are final and binding on both parties.

Persistent abuse of the dispute system may result in account suspension.`,
  },
  {
    title: "7. Exclusivity & Non-Solicitation",
    content: `Nothing in this Agreement restricts Dealers from operating on other platforms. 
However, Dealers may not use contact information or leads obtained through GoDealer to solicit 
buyers off-platform with the intent to circumvent GoDealer's commission for a period of 12 months 
after the initial introduction.`,
  },
  {
    title: "8. Confidentiality",
    content: `Dealers agree to keep confidential any non-public information about GoDealer's 
technology, pricing algorithms, and business strategies learned during the course of using the 
platform.`,
  },
  {
    title: "9. Term & Termination",
    content: `This Agreement commences upon KYC approval and continues until terminated.

**By GoDealer:** We may terminate this Agreement immediately for material breach (fraud, listing 
counterfeit goods, repeated violations) or with 30 days' notice for any other reason.

**By Dealer:** You may terminate by permanently deleting your account. Outstanding obligations 
(pending transactions, commission dues, dispute outcomes) survive termination.`,
  },
  {
    title: "10. Warranties & Indemnification",
    content: `Dealers warrant that:
- All devices listed are genuine and legitimately owned.
- They hold all necessary licences and registrations for their trade.
- They will comply with all applicable laws including GST, Consumer Protection Act, and IT Act.

Dealers agree to indemnify and hold GoDealer harmless from any claims, losses, or liabilities 
arising from breach of these warranties, including legal fees.`,
  },
  {
    title: "11. Governing Law",
    content: `This Agreement is governed by the laws of India. Any disputes shall be referred to 
arbitration in Mumbai, Maharashtra under the Arbitration and Conciliation Act, 1996, with a 
sole arbitrator appointed by mutual consent.`,
  },
  {
    title: "12. Amendments",
    content: `GoDealer may amend this Agreement with 30 days' notice. Continued use of dealer 
features after the effective date constitutes acceptance. If you do not agree, you must 
notify us and deactivate your dealer account before the effective date.`,
  },
  {
    title: "13. Entire Agreement",
    content: `This Dealer Agreement, together with GoDealer's Terms of Service, Privacy Policy, 
and Cookie Policy, constitutes the entire agreement between the parties regarding the 
subject matter herein, superseding all prior negotiations and understandings.`,
  },
];

export default function DealerAgreementPage() {
  return (
    <LegalPage
      badge="Dealer"
      title="Dealer Agreement"
      subtitle="This agreement outlines the rights, obligations, and standards for verified dealers on the GoDealer platform."
      effectiveDate="March 1, 2025"
      sections={sections}
      highlight
    />
  );
}
