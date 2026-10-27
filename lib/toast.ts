export const TOAST_EVENT = "hotkeygo:coming-soon";

export function showComingSoon() {
  window.dispatchEvent(new Event(TOAST_EVENT));
}
