import type { LegalLocale } from "./types";

export const en: LegalLocale = {
  back: "Back to hotkeygo",
  language: "Language",
  contents: "On this page",
  draft:
    "Draft for review. Not in effect until the official release. Contact details, product settings, payment flows and legal requirements must be confirmed before publication.",
  effective: "Effective date: official release (date to be confirmed)",
  contact: "Questions? Contact support@hotkeygo.app",
  other: { privacy: "Read the Terms of Service", terms: "Read the Privacy Policy" },
  documents: {
    privacy: {
      title: "Privacy Policy",
      intro:
        "A clear account of what hotkeygo processes, where your text goes, and the choices available to you.",
      sections: [
        {
          id: "who",
          title: "Who we are",
          paragraphs: [
            "hotkeygo is operated by Lev Misiliuk, a sole proprietor registered in Poland. This policy describes how we handle personal data when you visit hotkeygo.app, use the macOS application, purchase a subscription, or contact us.",
            "For privacy questions and requests, contact support@hotkeygo.app. The business postal address and the effective date will be confirmed before release.",
          ],
        },
        {
          id: "text",
          title: "Selected text and AI processing",
          paragraphs: [
            "When you deliberately invoke Fix, Actions or Peek, the app reads the text you selected and sends it over an encrypted connection through our Cloudflare service to the AI provider selected in the app, Anthropic or OpenAI. The provider processes the text and returns an output so the requested action can be completed.",
            "We design the application and our service not to persist or log selected text, text-derived prompts or model output in hotkeygo-controlled storage. Text and output are still processed temporarily to provide the service. Accessibility permission is used to capture the selection and, where applicable, insert the result.",
            "The Fix workflow may leave the generated result on your macOS system clipboard as a manual paste backup. The clipboard and any system or third-party clipboard history or syncing are outside our storage controls; avoid submitting information you are not authorised to process.",
          ],
        },
        {
          id: "providers",
          title: "AI providers and retention",
          paragraphs: [
            "Anthropic and OpenAI operate under their own applicable service agreements and data controls. For OpenAI requests, hotkeygo sets store: false. This prevents storage of the response for later retrieval through that API setting; it does not itself guarantee that the provider keeps no data for safety or abuse monitoring.",
            "Provider retention, safety processing and any approved data controls depend on the provider, endpoint and our account configuration. We will verify those arrangements before release and update this policy when they change.",
          ],
        },
        {
          id: "installation",
          title: "Installation, usage and diagnostics",
          paragraphs: [
            "A free installation does not require a hotkeygo account or an email address. The app creates a random installation identifier in macOS Keychain. Our service uses installation and subscription information to provide access, track the free allowance, prevent abuse and maintain entitlements.",
            "Our first-party diagnostics record operational information such as feature and provider used, plan status, request counts, outcomes, fixed error categories and timing. Per-installation analytics use a hash of the installation identifier. These analytics are designed not to include selected text, prompts, model output or IP addresses. Daily installation summaries and profiles are retained for up to 365 days. We plan to add the app interface language to usage analytics; its release configuration must be confirmed.",
          ],
        },
        {
          id: "website",
          title: "Website analytics and cookies",
          paragraphs: [
            "The website uses Vercel Web Analytics to understand page visits and improve the site. According to Vercel, Web Analytics does not use cookies for visitor analytics; it uses a short-lived hash of the request. It may report information such as the visited page, referral source, approximate location, browser and device type.",
            "The website may use a NEXT_LOCALE cookie to remember your language preference. Hosting and security providers may process network information, including an IP address, for delivery and protection. We will review the production site and any additional technologies before release.",
          ],
        },
        {
          id: "feedback",
          title: "Support and feedback",
          paragraphs: [
            "If you contact us or submit feedback, we receive the message you choose to send and any email address you provide for a reply. You may also choose to include technical diagnostics such as app and macOS version, selected model, plan, locale and Preview & Approve setting.",
            "Feedback is forwarded to our support inbox. We retain correspondence while it is needed to respond, provide follow-up support or address a dispute, and review and delete it when no longer needed unless a longer period is required by law or justified by an active claim.",
          ],
        },
        {
          id: "payments",
          title: "Payments and communications",
          paragraphs: [
            "For a paid subscription, Paddle or Apple may collect information needed to process the transaction, such as your email, billing information, payment details and transaction records. The payment provider processes payments under its own terms and privacy notice. We may receive purchase, subscription and entitlement information needed to provide support and access; we do not need your full card number.",
            "We may send essential service communications about a purchase, subscription or significant service changes. If a separate optional news subscription is offered, marketing messages will be sent only according to the choice recorded for that purpose and applicable law, with a way to unsubscribe. This feature is planned and must be implemented before use.",
          ],
        },
        {
          id: "basis",
          title: "Why we process data",
          paragraphs: [
            "Depending on the context, we process data to perform our contract or take requested steps before a contract, comply with legal obligations, or pursue legitimate interests such as operating, securing and improving the service and answering enquiries. Where the law requires consent, we will request it for the relevant processing and provide a way to withdraw it.",
            "We do not sell personal data or share it with advertisers. Service providers receive information only as needed for their roles; AI providers receive the selected text when you invoke a feature.",
          ],
        },
        {
          id: "sharing",
          title: "Service providers and transfers",
          paragraphs: [
            "Our service providers may include Cloudflare for infrastructure and email delivery, Anthropic and OpenAI for AI processing, Vercel for website hosting and analytics, and Paddle or Apple for payments. Your mailbox provider and macOS may also process information under their own terms.",
            "Providers may process information outside the European Economic Area. Where European data protection law applies, we will identify the relevant transfer mechanism and safeguards before release, such as an applicable adequacy decision or appropriate contractual safeguards.",
          ],
        },
        {
          id: "rights",
          title: "Your privacy rights",
          paragraphs: [
            "Depending on where you live, you may have rights to request access, correction, deletion, restriction or portability of personal data, object to certain processing, or withdraw consent. You may also complain to a data protection authority; in Poland, this is the President of the Personal Data Protection Office (UODO).",
            "Contact support@hotkeygo.app to exercise a right. We may need reasonable information to verify your identity or locate the relevant installation. Since there is no hotkeygo account, we may be unable to link pseudonymous installation data to you without additional information. Some data may need to be retained where law requires it or for an active legal claim.",
          ],
        },
        {
          id: "minors",
          title: "Age, security and changes",
          paragraphs: [
            "hotkeygo is intended for users aged 16 or older, subject to applicable local law and any necessary parent or guardian permission. The safeguards and provider requirements for users under 18 must be verified before launch.",
            "We use reasonable technical and organisational measures to protect information, but no online service can promise absolute security. We may update this policy as the service or legal requirements change and will communicate material changes when appropriate or required.",
          ],
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      intro: "The terms for using hotkeygo, from your first shortcut to managing a subscription.",
      sections: [
        {
          id: "about",
          title: "The service and these terms",
          paragraphs: [
            "hotkeygo is a macOS writing utility operated by Lev Misiliuk, a sole proprietor in Poland. These terms govern your use of the app and website. Our Privacy Policy explains how personal data is processed.",
            "These terms are a pre-release draft and take effect only on the official release date, which will be confirmed before publication. If you use the service for an organisation, you must be authorised to accept terms on its behalf.",
          ],
        },
        {
          id: "eligibility",
          title: "Eligibility and responsible use",
          paragraphs: [
            "You must be at least 16 years old and meet the requirements of the law where you live. If you are under 18, parent or guardian permission may be required. Provider safeguards and local requirements for under-18 users will be confirmed before launch.",
            "Use hotkeygo lawfully, respect other people's rights, and only submit text you are authorised to process. Do not interfere with the service, attempt to bypass usage limits or payment controls, or use it in ways prohibited by applicable law or the selected provider's policies.",
          ],
        },
        {
          id: "how",
          title: "How the app works",
          paragraphs: [
            "Fix, Actions and Peek send selected text through our service to the AI provider selected in the app. Fix and Actions can replace text; Peek provides a read-only result. Preview & Approve can let you review and approve a result before replacement.",
            "AI output may contain mistakes or change meaning. You remain responsible for reviewing results, particularly when accuracy matters. The Fix workflow may leave the generated result on the macOS clipboard as a manual paste backup.",
          ],
        },
        {
          id: "rights",
          title: "Your text and output",
          paragraphs: [
            "You retain any rights you have in the text you submit. hotkeygo does not claim ownership of your input or output. You give us and the selected service providers the permission needed to process your text and deliver the requested result.",
            "Your rights in generated output, and your ability to use it, depend on applicable law and any rights held by others. You are responsible for ensuring that the text you submit and your use of the result respect those rights.",
          ],
        },
        {
          id: "plans",
          title: "Free and paid plans",
          paragraphs: [
            "The free plan is intended to include 30 AI actions per calendar month. The paid Unlimited plan is planned at USD 10 per month, including applicable taxes in the displayed checkout price. The final checkout, available currencies and taxes must be confirmed for each sales channel before release.",
            "A paid subscription renews automatically each month until cancelled. Prices and features shown at checkout apply to your purchase. We may need reasonable measures to address misuse, fraud, technical limits or excessive automated activity; any applicable limits will be disclosed.",
          ],
        },
        {
          id: "billing",
          title: "Billing and cancellation",
          paragraphs: [
            "Direct purchases are planned through Paddle; App Store purchases, if offered, are managed through Apple. The provider's checkout, payment terms and subscription management process apply to the transaction. A payment may require an email address or billing information even though the free app does not require an account.",
            "You may cancel automatic renewal through the relevant payment provider. Unless a refund or another applicable rule changes access earlier, paid access continues until the end of the current paid period and then returns to the free plan.",
          ],
        },
        {
          id: "refunds",
          title: "Refunds",
          paragraphs: [
            "For a first direct purchase, we plan to accept a request for a full refund within 14 calendar days after payment if the service is not right for you, including after you have tried it. Contact support@hotkeygo.app. Requests concerning later renewals may be considered individually.",
            "Paddle processes refunds for its transactions. App Store purchases are handled under Apple's applicable refund process, which must be confirmed before launch. After an approved refund, we intend to end paid access and restore the free allowance to 30 actions; this behaviour must be implemented and verified before it is promised at release. Nothing in these terms limits mandatory consumer rights.",
          ],
        },
        {
          id: "devices",
          title: "Devices and access",
          paragraphs: [
            "We intend a paid subscription to cover up to three personal Mac devices, with a way to remove an old device and contact support if it is unavailable. Cross-version transfers, recovery codes and device management are planned and not yet guaranteed.",
            "The device policy for any App Store version remains subject to Apple's requirements and must be verified before release. Availability may vary by device, region and distribution channel.",
          ],
        },
        {
          id: "changes",
          title: "Changes to pricing and service",
          paragraphs: [
            "If we change the subscription price, we intend to notify existing paid subscribers at least 30 days in advance. A price change will not increase the price already paid for the current period; any new price applies to a later renewal, subject to the payment provider's rules and applicable law.",
            "We may update, suspend or discontinue features for maintenance, security, legal or operational reasons. We will provide notice where appropriate or required and respect any applicable consumer remedies.",
          ],
        },
        {
          id: "liability",
          title: "Availability and liability",
          paragraphs: [
            "We work to provide a reliable service, but AI providers, networks and devices can fail. The service and AI output may be unavailable, delayed or inaccurate. No statement in these terms removes guarantees or remedies that cannot lawfully be excluded.",
            "To the extent permitted by applicable law, we are not responsible for indirect or consequential losses resulting from use of the service. Nothing excludes liability that cannot legally be excluded, including mandatory consumer protections.",
          ],
        },
        {
          id: "law",
          title: "Applicable law, language and contact",
          paragraphs: [
            "These terms are governed by Polish law, without depriving consumers of mandatory protections available under the law applicable to them. Disputes may be brought before the courts required or permitted by applicable law.",
            "The English version is the reference version where translations differ, subject to mandatory local language and consumer laws. Questions about the service, a purchase or these terms can be sent to support@hotkeygo.app.",
          ],
        },
      ],
    },
  },
};
