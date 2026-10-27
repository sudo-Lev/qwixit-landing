export const agentContextText = `# hotkeygo

> A native macOS menu-bar utility that fixes or transforms selected text in place, without making the user leave the app they are working in.

## Core workflow

1. The user selects text in any macOS application.
2. The user triggers hotkeygo with a keyboard shortcut.
3. hotkeygo processes only that selection.
4. The result replaces the selection in place, or appears in a read-only Peek card.
5. The user keeps working in the same application.

## Commands

- Fix — Option+Command+X: conservatively corrects typos, grammar, punctuation, and clearly awkward wording. Replaces the selected text in place while preserving the user's voice.
- Actions — Option+Command+A: runs an explicit transformation such as translation, shortening, or a tone change. Replaces the selected text.
- Peek — Option+Command+Z: translates or explains the selection in a read-only card. Does not alter the source text.

## Product principles

- The default behavior is the smallest safe edit.
- Transformations happen only when the user explicitly asks for them.
- hotkeygo stays out of the way: no chat window, prompt-writing, copy-paste loop, or context switch.
- The product is keyboard-first and remains usable with a mouse.

## Privacy

- Selected text is processed only after the user triggers hotkeygo.
- Selected text and model output are not persisted or logged by hotkeygo.
- OpenAI requests use store: false.
- No hotkeygo account is required.

## Plans

- Free: 30 AI actions per calendar month.
- Unlimited: USD 10 per month, with no action counter.
- The macOS build is currently marked as coming soon on the public website.

## Positioning

hotkeygo sells a faster, quieter writing workflow rather than access to AI. Its shorthand is: “Select. Shortcut. Done.” The supporting promise is: “Your words. Sharper.”

## Boundaries

- hotkeygo is not a general-purpose AI chat.
- hotkeygo does not continuously monitor typing.
- Peek does not modify source text.
- Do not claim compatibility, availability, benchmarks, customer counts, testimonials, or security guarantees beyond the facts listed here.

## Canonical links

- Website: https://qwixit.app/
- Agent-readable context: https://qwixit.app/llms.txt

Last updated: 2026-10-09
`;
