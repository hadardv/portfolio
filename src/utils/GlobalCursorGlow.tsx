import { useEffect, useRef } from "react";

export default function GlobalCursorGlow() {
  const ref = useRef<number | null>(null);
  const idleTimer = useRef<number | null>(null);
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = document.documentElement;

    const schedule = (x: number, y: number) => {
      if (ref.current) cancelAnimationFrame(ref.current);
      ref.current = requestAnimationFrame(() => {
        root.style.setProperty("--mx", `${x}px`);
        root.style.setProperty("--my", `${y}px`);
      });
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      const p = "touches" in e ? e.touches[0] : (e as MouseEvent);
      schedule(p.clientX, p.clientY);

      // show (not idle)
      elRef.current?.classList.remove("is-idle");
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
      idleTimer.current = window.setTimeout(() => {
        elRef.current?.classList.add("is-idle");
      }, 1200);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });

    return () => {
      if (ref.current) cancelAnimationFrame(ref.current);
      if (idleTimer.current) clearTimeout(idleTimer.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
    };
  }, []);

  return <div ref={elRef} className="global-cursor-glow is-idle" />;
}
