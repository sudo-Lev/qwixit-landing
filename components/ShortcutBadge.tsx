import { Fragment } from "react";

export type ShortcutBadgeSize = "inline" | "compact" | "standard" | "large" | "hero";

export function ShortcutBadge({
  letter,
  size = "standard",
  inverse = false,
  className = "",
}: {
  letter: string;
  size?: ShortcutBadgeSize;
  inverse?: boolean;
  className?: string;
}) {
  const key = letter.toUpperCase();

  return (
    <kbd
      className={`shortcut-badge${size === "standard" ? "" : ` shortcut-badge--${size}`}${inverse ? " shortcut-badge--inverse" : ""} ${className}`.trim()}
      aria-label={`Option Command ${key}`}
    >
      <span className="shortcut-badge__modifiers" aria-hidden="true">
        ⌥⌘
      </span>
      <span className="shortcut-badge__key" aria-hidden="true">
        {key}
      </span>
    </kbd>
  );
}

export function ShortcutText({ text, size = "inline" }: { text: string; size?: ShortcutBadgeSize }) {
  return (
    <>
      {text.split(/(⌥⌘[A-Z])/g).map((segment, index) => {
        const letter = segment.match(/^⌥⌘([A-Z])$/)?.[1];
        return letter ? (
          <ShortcutBadge key={index} letter={letter} size={size} />
        ) : (
          <Fragment key={index}>{segment}</Fragment>
        );
      })}
    </>
  );
}
