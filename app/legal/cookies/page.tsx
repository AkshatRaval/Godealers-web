import LegalPage from "@/components/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — GoDealer",
  description: "Understand how GoDealer uses cookies and similar tracking technologies.",
};

const sections = [
  {
    title: "1. What Are Cookies?",
    content: `Cookies are small text files stored on your device when you visit a website. They help 
us remember your preferences, keep you logged in, and understand how you interact with GoDealer. 
We also use similar technologies such as local storage, session storage, and pixel tags.`,
  },
  {
    title: "2. Types of Cookies We Use",
    content: `**Strictly Necessary Cookies**  
Required for core functions such as authentication, session management, and security (e.g., CSRF 
protection). You cannot opt out of these.

**Preference Cookies**  
Remember your settings such as language, region, and display preferences.

**Analytics Cookies**  
Help us understand how users navigate the platform (pages visited, time on page, errors). 
We use Mixpanel and Google Analytics. Data is aggregated and anonymised where possible.

**Marketing Cookies**  
Used to deliver relevant ads on third-party networks when you have consented. GoDealer does not 
currently run paid retargeting campaigns, but may do so in future.`,
  },
  {
    title: "3. Third-Party Cookies",
    content: `Some cookies are placed by third-party services embedded in our platform:

| Third Party | Purpose | Privacy Policy |
|---|---|---|
| Google Analytics | Usage analytics | policies.google.com/privacy |
| Mixpanel | Product analytics | mixpanel.com/legal/privacy-policy |
| Supabase | Auth tokens | supabase.com/privacy |
| Razorpay | Payment sessions | razorpay.com/privacy |

We are not responsible for third-party cookies; please review their respective policies.`,
  },
  {
    title: "4. Cookie Duration",
    content: `**Session Cookies** expire when you close your browser.  
**Persistent Cookies** remain for up to 12 months unless deleted earlier.  
**Authentication Tokens** expire after 7 days of inactivity.`,
  },
  {
    title: "5. Managing Cookies",
    content: `**Browser Settings:** Most browsers allow you to block or delete cookies via Settings → 
Privacy. Note that blocking strictly necessary cookies will prevent you from logging in.

**Opt-Out Links:**  
- Google Analytics: tools.google.com/dlpage/gaoptout  
- Mixpanel: mixpanel.com/optout

**In-App Preference Centre:** GoDealer will provide an in-app cookie preference centre in a future 
update allowing granular consent management.`,
  },
  {
    title: "6. Cookie Consent",
    content: `On your first visit we display a cookie banner requesting consent for non-essential 
cookies. You may withdraw consent at any time by clearing your browser cookies and re-visiting 
the site to update your preferences.`,
  },
  {
    title: "7. Updates to This Policy",
    content: `We may update this Cookie Policy as our use of cookies changes or regulations evolve. 
Changes will be published on this page with an updated effective date.`,
  },
  {
    title: "8. Contact",
    content: `For cookie-related enquiries: privacy@godealer.app`,
  },
];

export default function CookiesPage() {
  return (
    <LegalPage
      badge="Legal"
      title="Cookie Policy"
      subtitle="Transparency about how cookies and tracking technologies are used on GoDealer."
      effectiveDate="March 1, 2025"
      sections={sections}
    />
  );
}
