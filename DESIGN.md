---
name: hotkeygo
description: A native macOS shortcut workbench built from real, light product surfaces.
colors:
  ink: "#16131f"
  muted-ink: "#6e6b7d"
  canvas-paper: "#f9f8fc"
  raised-paper: "#fdfcff"
  surface-white: "#ffffff"
  hover-lilac: "#f6f4fd"
  hairline: "#dfdaec"
  electric-violet: "#6d28ff"
  registration-magenta: "#ff2d9b"
  registration-cyan: "#00abc7"
  ready-green: "#149145"
  terminal-green: "#149e4a"
  magenta-text: "#a90060"
  cyan-text: "#006f80"
  green-text: "#0a6d33"
  danger: "#e6293d"
  receipt: "#f3f1f7"
  terminal-black: "#0c0a12"
typography:
  display:
    fontFamily: "Unbounded, ui-rounded, SF Pro Rounded, sans-serif"
    fontSize: "clamp(48px, 5.5vw, 76px)"
    fontWeight: 900
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Unbounded, ui-rounded, SF Pro Rounded, sans-serif"
    fontSize: "clamp(38px, 5vw, 64px)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Unbounded, ui-rounded, SF Pro Rounded, sans-serif"
    fontSize: "40px"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Helvetica Neue, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, SFMono-Regular, Menlo, monospace"
    fontSize: "10px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.1em"
rounded:
  selection: "3px"
  badge: "5px"
  keycap: "7px"
  control: "8px"
  compact-panel: "11px"
  panel: "14px"
  window: "16px"
  feature: "18px"
spacing:
  xs: "5px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  2xl: "48px"
components:
  cta-coming-soon:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface-white}"
    typography: "{typography.label}"
    padding: "0 20px"
    height: "46px"
  cta-coming-soon-hover:
    backgroundColor: "#251f30"
    textColor: "{colors.surface-white}"
    typography: "{typography.label}"
    padding: "0 20px"
    height: "46px"
  shortcut-key:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.keycap}"
    size: "30px"
  product-panel:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "14px"
  product-hud:
    backgroundColor: "rgba(255, 255, 255, 0.98)"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.window}"
    padding: "0 18px"
    width: "236px"
    height: "58px"
---

# Design System: hotkeygo

## Overview

**Creative North Star: "The Native Shortcut Workbench"**

hotkeygo is a compact macOS instrument shown at working scale. Pale paper carries the marketing narrative, while the product is demonstrated through real light HUDs, result cards, action palettes, Peek cards, and the menu-bar panel—not illustrative substitutes. The system feels native, fast, slightly punk, and trustworthy because every decorative choice also explains state.

The landing surface follows six blocks with one job each: hero mechanism, copy-paste detour, Fix/Actions/Peek, privacy, pricing with the menu-bar panel, and final CTA. System sans explains, Unbounded turns short localized statements into landmarks, and JetBrains Mono carries state, shortcuts, metadata, and controls. The anti-reference remains a centered generic AI slogan above a detached dashboard screenshot.

The “Skip the round trip” block closes with a connected two-card proof pair: “Fast by workflow” and “Private by design.” The speed comparison states the measured typical action range of 3–5 seconds and animates both lanes in parallel. HotkeyGo completes in 4 seconds, the range midpoint, while the illustrative chat process continues; no numeric chat duration is shown. The light cyan-traced workflow card and dark green-traced privacy card use the same opposing chamfers and registration details as product controls.

**Key Characteristics:**

- Light, real-scale product fragments on cool macOS paper.
- Six blocks, each anchored by one product behavior or component.
- Electric violet for action; cyan, magenta, and green for precise operational meaning.
- A single bottom-right chamfer identifies primary CTAs.
- Copy and layout are authored for English, Polish, and Ukrainian—not translated afterthoughts.

## Colors

The Landing Kit palette is cool, paper-like, and predominantly neutral; saturated colors are small, semantic signals.

### Primary

- **Electric Violet:** Primary action, active shortcut key, selection, and the final conversion field.

### Secondary

- **Registration Magenta:** Source-unchanged signals, accent controls, and the warm half of narrow traces.
- **Registration Cyan:** Transform signals, focus outlines, and the cool half of narrow traces.
- **Accessible Magenta Text:** Use for magenta semantic labels on light backgrounds; keep the brighter source color for dots, rails, fills, and dark surfaces.
- **Accessible Cyan Text:** Use for cyan semantic labels on light backgrounds; keep the brighter source color for dots, rails, fills, and dark surfaces.

### Tertiary

- **Ready Green / Terminal Green:** Ready and success indicators. Terminal Green is the brighter dark-surface value.
- **Accessible Green Text:** Use for ready/status labels on light backgrounds; never set small light-surface text in the brighter greens.
- **Danger Red:** Destructive or failed state only, including Quit in the menu-bar panel.

### Neutral

- **Near-Black Ink:** Primary copy and the standard dark CTA surface.
- **Muted Ink:** Supporting prose and secondary product text.
- **Canvas Paper:** Default page field.
- **Raised Paper:** Product headers, footers, and softly separated regions.
- **Surface White:** Active documents, controls, and product panels.
- **Hover Lilac:** Quiet hover, chip, and shortcut backgrounds.
- **Hairline Lavender:** Borders and structural dividers.
- **Receipt:** Inset sheets, comparison headers, and soft backing plates.
- **Terminal Black:** The privacy block; it is an intentional exception, not the default product-panel theme.

**The Semantic Pair Rule.** On light surfaces, saturated cyan, magenta, and green render the dot or rail while their darker text variants render the label.

**The One Electric Voice Rule.** Violet owns action emphasis. Other saturated colors explain state and must not become competing primary accents.

## Typography

**Display Font:** Unbounded (with ui-rounded and SF Pro Rounded fallbacks)  
**Body Font:** macOS system sans (with SF Pro Text and Helvetica Neue fallbacks)  
**Label/Mono Font:** JetBrains Mono (with SFMono-Regular and Menlo fallbacks)

**Character:** Heavy, compact statements sit beside native, unforced prose and exact operational labeling. The relationship survives localization because headings may wrap but do not shrink into timid display type.

### Hierarchy

- **Display** (900, fluid 48–76px, 0.94): Hero and final CTA statements, kept to a few forceful lines.
- **Headline** (900, fluid 38–64px, 1): The main claim of each narrative block.
- **Title** (900, 40px, 1): Fix, Actions, Peek, and comparable component-level landmarks.
- **Body** (400, 16px, 1.6): Explanatory copy, usually constrained to 370–440px.
- **Label** (800, 10px, 0.1em tracking, uppercase): State, metadata, shortcuts, navigation, and compact controls.

**The Three Voices Rule.** Unbounded declares, system sans explains, and JetBrains Mono operates.

**The Localized Measure Rule.** Preserve readable phrase groups in every locale; allow Polish and Ukrainian headings to gain lines rather than reduce weight, tracking, or intended prominence.

## Layout

The page uses a centered 1180px frame with 24px desktop gutters and 15px mobile gutters. Its six-block sequence is: hero, detour, workflows, privacy, pricing, and final CTA. Footer navigation is outside that narrative count. Major light sections use 96–118px vertical rhythm; below 640px the rhythm compresses to 84px.

Hero, privacy, and pricing use asymmetric two-column compositions; workflow rows pair copy with one real product fragment. At 960px they stack without changing reading order. At 640px, internal product layouts simplify, pricing becomes a single vertical pair, and header navigation/CTA step out while the locale switcher remains. English, Polish, and Ukrainian may produce different line counts, but the hierarchy and component scale remain stable.

**The One Job Per Block Rule.** Each block advances one argument and shows one relevant product behavior. Do not add a separate Mac-utility checklist; the menu-bar panel and product fragments already prove nativeness.

**The Working-Scale Rule.** Product UI must stay plausibly usable, with labels and controls legible instead of reduced to screenshot texture.

## Elevation & Depth

Light product surfaces use hairline borders plus a shared neutral-violet panel shadow. The hero document receives a longer ambient shadow and a receipt-colored backing plate. The privacy terminal and featured Unlimited card are the only substantial dark surfaces; their depth is darker and more compact. Registration colors may appear in a narrow trace, never as broad atmospheric decoration.

### Shadow Vocabulary

- **Panel Shadow** (`0 0 0 0.5px rgba(22, 19, 31, 0.1), 0 14px 36px rgba(22, 19, 31, 0.16)`): Result, Actions, Peek, menu-bar, and toast surfaces.
- **Hero Work Surface** (`0 36px 90px -42px rgba(66, 37, 126, 0.42), 0 12px 30px -20px rgba(24, 16, 40, 0.22)`): The primary Notes workspace only.
- **Light HUD** (`0 10px 26px rgba(109, 40, 255, 0.16)`): Floating processing and success feedback.
- **Dark Lift** (`0 16px 40px rgba(0, 0, 0, 0.35–0.55)`): Featured pricing or terminal surfaces on their respective fields.

**The Real Surface Rule.** Marketing depth follows the product component it presents; do not restyle light product fragments into dark promotional cards.

## Shapes

Documents and HUDs use 16px continuous-feeling corners; product panels use 14px; compact panels use 11px; controls use 8px; keycaps use 7px; badges use 5px or fully rounded status capsules. The primary CTA is the one exception to ordinary rounding: it has a single 9px bottom-right chamfer with a 2px violet offset edge. Shortcut trays use matching small diagonal cuts around otherwise rounded keycaps.

**The One Chamfer Rule.** Primary CTAs cut only the bottom-right corner. Do not return to opposing-corner cuts or pill-shaped actions.

## Components

### Buttons

- **Shape:** One bottom-right chamfer (9px cut), never a pill.
- **Primary:** Near-black, white mono label, 46px minimum height, 20px horizontal padding, and a 2px violet bottom-right offset.
- **State:** Hover lifts 2px and deepens to plum-black; active presses down 1px; focus uses the global 3px cyan outline.
- **Availability:** Until a real macOS artifact exists, every download CTA is localized as “macOS — coming soon” and opens the localized status toast. Do not imply that a file was downloaded.

### Cards / Containers

- **Product Panels:** Light surface, lavender hairline, 14px corners, and the shared Panel Shadow.
- **Hero Document:** White document inside a 16px macOS window with traffic lights, raised-paper chrome, and a receipt backing sheet.
- **Dark Exceptions:** Privacy terminal and Unlimited pricing only; do not spread the dark theme to Result, Actions, Peek, HUD, or menu-bar panels.

### Navigation

Header navigation uses uppercase 10px JetBrains Mono with wide tracking and violet hover. The locale switcher stays visible on mobile and marks the active locale in Near-Black Ink. Main navigation hides below 960px; the compact CTA hides below 640px.

### Status

Status is a 6px saturated dot plus a darker accessible mono label on light surfaces: ready, transform, or unchanged. One status line per content block is enough. Dark surfaces use their brighter terminal variants.

### Shortcut Keys

The light shortcut tray has a 1px clipped border, raised-paper inner plate, and three 30px white keycaps with physical inset bottoms. The action letter is violet. An inverse version is reserved for the final violet field.

### Product HUD

The canonical real light HUD is 236×58px, with a 224×46px inner surface. During processing its Face cycles `[ ¬_¬ ]`, `[ •_• ]`, and `[ ¬‿¬ ]`; PROCESSING animates as a staggered per-letter wave above a moving violet–magenta–cyan trace. Success resolves to `[ ^_- ]`, READY, TEXT REPLACED, and an OK badge. The landing hero may scale the HUD up while preserving these internal proportions and behaviors; reduced motion resolves directly to success.

The HUD accent is stateful: processing holds violet, flashes through cyan at the handoff, and resolves to green across the rail, Face frame, and AI/OK badge. The AI and OK labels share one centered grid cell so neither state shifts optically.

### Mechanism Loop

Hero and detour share one synchronized 4.5-second loop with three discrete 1.5-second phases: selected source text; shortcut plus processing HUD; corrected replacement plus success HUD. All layers hand off without a blank interval. If the mechanism appears more than once in a viewport, its phase clock remains shared rather than drifting independently.

**The Continuous Mechanism Rule.** Selection, processing, and success always occupy the stage; no transition may expose an empty document or missing HUD state.

### Result, Actions, and Peek

These are real light product fragments, each with its own information structure. Result includes corrected text and insertion controls. The landing Actions mock scales the native 360 pt searchable palette to 432 px: a query and detected-language header, one column of numbered choices with a divider between translation and writing actions, and the native replacement/undo footer. Its height follows the visible choices. The Peek mock shows its current result state at 440 × 380 px: source language, selected target-language control, read-only result text, and the copy/close footer. Keep both shells light, with the app’s 12 pt top-left and bottom-right cuts, adaptive product colors, and restrained panel shadow.

### Menu-Bar Pricing Panel

Pricing includes a 318 × 190 px preview of the actual menu-bar popup: an info/version and Cloud utility bar; Free usage, shortcut, and Accessibility status; the Preview & Approve toggle in its off state; and Settings and Quit beside a full-width Onboarding action. Keep the native top-left and bottom-right cuts, light rows, gradient-edged dark actions, and restrained shadow.

## Do's and Don'ts

### Do:

- **Do** keep the six-block story: hero, detour, workflows, privacy, pricing, final CTA.
- **Do** use real light HUD, Result, Actions, Peek, and menu-bar fragments at readable scale.
- **Do** keep every repeated mechanism demo on the same three-phase 4.5-second clock, with no blank state.
- **Do** pair saturated state dots with darker accessible text on light backgrounds.
- **Do** author and visually verify English, Polish, and Ukrainian copy independently.
- **Do** keep every macOS CTA in localized coming-soon mode until a real download exists.
- **Do** preserve visible focus, large targets, and the fully legible reduced-motion success state.

### Don't:

- **Don't** add a seventh native-features block; integrate that proof into product fragments and pricing.
- **Don't** darken the product HUD or workflow fragments for marketing drama.
- **Don't** use bright cyan, magenta, or green for small text on pale surfaces.
- **Don't** use pills or opposing-corner cuts for the primary CTA.
- **Don't** invent download availability, proof, compatibility, privacy, or performance claims.
- **Don't** redraw, trace, typeset, or reinterpret supplied hotkeygo logo assets.
