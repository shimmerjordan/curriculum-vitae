import { ASSETS } from "../content";

// Subtle fixed background video behind the dark sections (not the hero, which
// keeps its own imagery). Heavily dimmed + overlaid so it never competes with
// the text on top.
export default function VideoBg() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-ink">
      <video
        className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-[0.55]"
        src={ASSETS.bgVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/25 to-ink/50" />
    </div>
  );
}
