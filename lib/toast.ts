export const TOAST_EVENT = "qwixit:coming-soon";

export function showComingSoon() {
  window.dispatchEvent(new Event(TOAST_EVENT));
}
