// When the URL carries ?nofx, entrance animations are skipped and content
// renders in its final visible state. Handy for static screenshots and a sane
// fallback for anyone who lands with motion disabled.
export const PREVIEW =
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).has("nofx");
