import { useEffect, useRef } from "react";

const SPOTLIGHT_R = 300;

// The cursor spotlight (prompt2 core mechanic): a hidden canvas paints a soft
// radial gradient at the cursor, exported as a data-URL mask over the "reveal"
// image — so the second image (the same terrain, now overgrown with moss and
// wildflowers) shows only inside the glowing circle that trails the cursor.
export default function RevealLayer({
  cursorX,
  cursorY,
  image,
}: {
  cursorX: number;
  cursorY: number;
  image: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resize = () => {
      const c = canvasRef.current;
      if (!c) return;
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const c = canvasRef.current;
    const reveal = revealRef.current;
    if (!c || !reveal) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, c.width, c.height);
    const g = ctx.createRadialGradient(
      cursorX,
      cursorY,
      0,
      cursorX,
      cursorY,
      SPOTLIGHT_R,
    );
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.4, "rgba(255,255,255,1)");
    g.addColorStop(0.6, "rgba(255,255,255,0.75)");
    g.addColorStop(0.75, "rgba(255,255,255,0.4)");
    g.addColorStop(0.88, "rgba(255,255,255,0.12)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(cursorX, cursorY, SPOTLIGHT_R, 0, Math.PI * 2);
    ctx.fill();

    const url = c.toDataURL();
    reveal.style.setProperty("-webkit-mask-image", `url(${url})`);
    reveal.style.setProperty("mask-image", `url(${url})`);
    reveal.style.setProperty("-webkit-mask-size", "100% 100%");
    reveal.style.setProperty("mask-size", "100% 100%");
  }, [cursorX, cursorY]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ display: "none" }}
      />
      <div
        ref={revealRef}
        className="absolute inset-0 z-30 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${image})` }}
      />
    </>
  );
}
