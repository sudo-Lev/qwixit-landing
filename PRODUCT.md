# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Mac users who write in many applications and want to correct or transform selected text without interrupting their current task.

## Product Purpose

Qwixit is a native macOS menu-bar utility that removes the trip to an AI chat and back. The core workflow is: select text in any application, press ⌥⌘X, and continue working as Qwixit makes the smallest safe correction in place.

## Positioning

Qwixit sells a fast, private workflow rather than access to AI: “Select text. Press one shortcut. Keep working.” The supporting promise is “Fast by workflow. Private by design.” It is a quiet, keyboard-first companion, not a general-purpose chat product.

## Operating Context

- **Fix — ⌥⌘X:** conservative corrections to typos, grammar, punctuation, and clearly awkward wording, replacing the selection in place.
- **Actions — ⌥⌘A:** explicit transformations such as translation or tone changes that replace selected text.
- **Peek — ⌥⌘Z:** read-only translation and explanation without changing the source text.
- Qwixit runs as a menu-bar utility, stays in the current app, and does not steal focus.
- It is keyboard-first and remains fully usable with a mouse.

## Capabilities and Constraints

- Selected text is processed transiently.
- Qwixit does not persist or log selected text or model output.
- OpenAI requests use `store: false`.
- No user account is required.
- The product supports light and dark themes and Reduce Motion.
- Pricing supplied for the landing page: 30 free AI actions per calendar month; Unlimited is $10/month.
- Compatibility or release claims must appear only when independently verified.

## Brand Commitments

- Use the supplied Qwixit logo assets without redrawing, typesetting, tracing, or reinterpreting them.
- Voice is concise, calm, slightly cheeky, and confident. Avoid vague AI-product language and exaggerated security claims.
- The product should feel native to macOS, extremely fast and unobtrusive, stylish, compact, punk, trustworthy, and like a small alert cyber companion.

## Evidence on Hand

- Supplied brand assets live in `public/brand/` and `assets/`.
- The landing-page brief provides the product workflow, privacy facts, pricing, interaction hierarchy, voice, accessibility requirements, and visual commitments.
- No testimonials, customer logos, user counts, benchmarks, awards, ratings, or compatibility proof were supplied; future work must not fabricate them.

## Product Principles

1. Demonstrate the in-place replacement mechanism before describing it.
2. Preserve the user’s voice with the smallest safe edit by default.
3. Keep the user in the application and context they already chose.
4. Communicate state precisely and calmly rather than presenting AI as magic.
5. Make every action fast with the keyboard and available with the mouse.

## Accessibility & Inclusion

The website must provide semantic structure, visible focus states, keyboard navigation, sufficient contrast, usable target sizes, responsive layouts without horizontal overflow, and meaningful reduced-motion behavior that keeps all content visible.
