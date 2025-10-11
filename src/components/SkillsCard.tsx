// SkillsCard.tsx
import { useReducedMotion } from "framer-motion";
import { useRef } from "react";

type Section = { title: string; items: string[] };

type Props = {
  name: string;
  icon: string | React.ReactNode;
  size?: number;
  sections?: Section[]; // optional: rendered as chips
  className?: string;
};

export default function SkillsCard({
  name,
  icon,
  size = 160,
  sections = [],
  className = "",
}: Props) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);

  const Icon =
    typeof icon === "string" ? (
      <img
        src={icon}
        alt={name}
        width={size}
        height={size}
        className="h-[inherit] w-[inherit] object-contain drop-shadow-[0_10px_30px_rgba(255,255,255,0.15)]"
        loading="lazy"
        decoding="async"
      />
    ) : (
      icon
    );

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = ((y - r.height / 2) / r.height) * -8;
    const ry = ((x - r.width / 2) / r.width) * 8;
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
    el.style.setProperty("--mx", `-999px`);
    el.style.setProperty("--my", `-999px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`about-card overflow-hidden ${className}`}
      style={{
        transformStyle: "preserve-3d",
        transform: `rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))`,
        transition: prefersReduced ? undefined : "transform 300ms ease",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-[22px]"
        style={{
          background:
            "radial-gradient(45% 45% at 50% 0%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 60%)",
          filter: "blur(14px)",
          opacity: 0.35,
        }}
      />

      {/* content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-4 p-6">
        <div
          className="grid place-items-center rounded-2xl"
          style={{ width: size + 60, height: size + 60 }}
        >
          <div style={{ width: size, height: size }}>{Icon}</div>
        </div>

        <h3 className="text-white font-extrabold text-[20px] text-center leading-tight">
          {name}
        </h3>

        {sections.length > 0 && (
          <div className="mt-2 flex flex-wrap justify-center gap-2 max-w-[90%]">
            {sections.flatMap((s) =>
              s.items.map((t) => (
                <span
                  key={`${s.title}-${t}`}
                  className="inline-flex items-center justify-center whitespace-nowrap
                             min-w-[78px] px-4 py-1.5 rounded-full
                             border border-white/20 bg-black/30
                             text-xs text-white/90"
                >
                  {t}
                </span>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
