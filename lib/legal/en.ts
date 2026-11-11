import { OPERATOR_ADDRESS } from "./operator";
import type { LegalLocale } from "./types";

export const en: LegalLocale = {
  back: "Back to hotkeygo",
  language: "Language",
  contents: "On this page",
  effective: "Effective date",
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
            `For privacy questions and requests, contact support@hotkeygo.app. Business address: ${OPERATOR_ADDRESS}.`,
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
            "Anthropic and OpenAI process API requests under their own commercial terms and data controls. Under those terms, data sent through their APIs is not used to train their models by default. For OpenAI requests, hotkeygo sets store: false, so responses are not stored for later retrieval through the API.",
            "Providers may keep API inputs and outputs for a limited time for safety and abuse monitoring, as described in their own policies. We update this policy if our provider arrangements change.",
          ],
        },
        {
          id: "installation",
          title: "Installation, usage and diagnostics",
          paragraphs: [
            "A free installation does not require a hotkeygo account or an email address. The app uses a pseudonymous installation identifier that is not linked to your name or email. Our service uses it with subscription information to provide access, count the free allowance, prevent abuse and maintain your subscription.",
            "Our first-party diagnostics record operational information such as the feature and provider used, plan status, app interface language, request counts, outcomes, fixed error categories and timing. Per-installation analytics use a hash of the installation identifier. These analytics do not include selected text, prompts, model output or IP addresses. Daily installation summaries and profiles are kept for up to 365 days.",
          ],
        },
        {
          id: "website",
          title: "Website analytics and cookies",
          paragraphs: [
            "The website uses Vercel Web Analytics to understand page visits and improve the site. According to Vercel, Web Analytics does not use cookies for visitor analytics; it uses a short-lived hash of the request. It may report information such as the visited page, referral source, approximate location, browser and device type.",
            "The website uses a NEXT_LOCALE cookie to remember your language choice. It is needed for that function and is not used for analytics or advertising. Hosting and security providers may process network information, including an IP address, to deliver and protect the site.",
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
            "Direct purchases are processed by Paddle, our reseller and Merchant of Record. Paddle collects the information needed for the transaction, such as your email, billing address, payment details and transaction records, and processes it under its own terms and privacy notice. We receive the purchase and subscription information needed to provide access and support; we never receive your full card number.",
            "Paddle sends receipts and subscription emails. We contact you only about a purchase, a support request or a significant service change. We do not send marketing emails.",
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
            "Our service providers are Cloudflare for infrastructure and email delivery, Anthropic and OpenAI for AI processing, Vercel for website hosting and analytics, and Paddle for payments. Your mailbox provider and macOS may also process information under their own terms.",
            "Some providers process information outside the European Economic Area, including in the United States. Where European data protection law applies, these transfers rely on an adequacy decision, such as the EU–US Data Privacy Framework for certified providers, or on standard contractual clauses in the providers' data processing terms.",
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
            "hotkeygo is intended for people aged 16 or older. If local law requires it, people under 18 need permission from a parent or guardian.",
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
            "hotkeygo is a macOS writing utility operated by Lev Misiliuk, a sole proprietor registered in Poland. These terms govern your use of the app and website. Our Privacy Policy explains how personal data is processed.",
            "These terms apply from the effective date shown above. If you use the service for an organisation, you must be authorised to accept them on its behalf.",
          ],
        },
        {
          id: "eligibility",
          title: "Eligibility and responsible use",
          paragraphs: [
            "You must be at least 16 years old. If you are under 18 and local law requires it, you need permission from a parent or guardian.",
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
            "The free plan includes 30 AI actions per calendar month. hotkeygo Advanced costs USD 10 per month, with applicable taxes included in the price shown at checkout. Paddle may show the price in your local currency.",
            "A paid subscription renews automatically each month until cancelled. The price and features shown at checkout apply to your purchase. We may take reasonable measures against misuse, fraud or excessive automated activity.",
          ],
        },
        {
          id: "billing",
          title: "Billing and cancellation",
          paragraphs: [
            "Direct purchases are sold by Paddle.com, our reseller and Merchant of Record. Paddle handles payment, taxes, invoices and payment questions, and its buyer terms apply to the transaction. A purchase requires an email address and payment details, even though the free app does not require an account.",
            "You can cancel automatic renewal at any time with the subscription link in your Paddle emails or by writing to support@hotkeygo.app. After cancellation, Advanced stays active until the end of the paid period and then returns to the free plan.",
          ],
        },
        {
          id: "refunds",
          title: "Refunds",
          paragraphs: [
            "If your first direct purchase isn't right for you, you can request a full refund within 14 calendar days of payment, even after using Advanced. Write to support@hotkeygo.app or contact Paddle at paddle.net. Requests for later renewals are considered individually.",
            "Paddle processes refunds. When a full refund is approved, Advanced ends and the free allowance of 30 actions is restored. Nothing in these terms limits your mandatory consumer rights.",
          ],
        },
        {
          id: "devices",
          title: "Devices and access",
          paragraphs: [
            "A subscription belongs to the hotkeygo installation on the Mac where you bought it. Reinstalling or updating the app on that Mac keeps it.",
            "If you move to another Mac, reinstall macOS or lose access to your Mac, write to support@hotkeygo.app and we will help move your subscription.",
          ],
        },
        {
          id: "changes",
          title: "Changes to pricing and service",
          paragraphs: [
            "If we change the subscription price, we will email existing subscribers at least 30 days in advance. A new price applies only from a later renewal, never to a period you have already paid for, and you can cancel before it takes effect.",
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
