// SkillsCard.tsx
import { useReducedMotion } from "framer-motion";
import { useState } from "react";

type Section = {
  title: string;
  items: string[];
};

type Props = {
  name: string;
  icon: string | React.ReactNode;
  size?: number;
  sections?: Section[];
  className?: string;
};

export default function SkillsCard({
  name,
  icon,
  size = 120,
  sections = [],
  className = "",
}: Props) {
  const [flipped, setFlipped] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);
  const prefersReduced = useReducedMotion();
  const flip = prefersReduced ? flipped : hovered;
  const Icon =
    typeof icon === "string" ? (
      <img
        src={icon}
        alt={name}
        width={size}
        height={size}
        className="w-[inherit] h-[inherit] object-contain drop-shadow-[0_10px_30px_rgba(255,255,255,0.15)]"
        loading="lazy"
        decoding="async"
      />
    ) : (
      icon
    );

  return (
    <div
      className={`relative w-[320px] h-[320px] ${className}`}
      style={{ perspective: 1200 }}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-[28px] opacity-40 blur-xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => prefersReduced && setFlipped((f) => !f)}
        className="relative z-10 h-full w-full rounded-[28px] border border-white/100"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)",
          transform: flip ? "rotateY(180deg)" : "rotateY(0deg)",
          willChange: "transform",
        }}
        aria-label={flip ? "summary" : "technologies"}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-[28px] bg-transparent backdrop-blur-[2px] shadow-[0_0_30px_rgba(255,255,255,0.08)]
                     flex flex-col items-center justify-center gap-6"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div
            className="grid place-items-center rounded-2xl"
            style={{ width: size + 100, height: size + 100 }}
          >
            <div style={{ width: size + 100, height: size + 100 }}>{Icon}</div>
          </div>
          <h3 className="text-white font-extrabold text-[20px] text-center leading-tight">
            {name}
          </h3>
          {!prefersReduced && (
            <span className="text-white/60 text-xs">Hover to view tech →</span>
          )}
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-[28px] bg-white/10 border border-white/10 backdrop-blur-md p-5
                     overflow-hidden flex flex-col"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-[280px] mx-auto grid gap-4 text-center">
              {sections.map((s) => (
                <div key={s.title} className="space-y-2">
                  <p className="text-[18px] font-semibold tracking-wide text-white/70 uppercase">
                    {s.title}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {s.items.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center justify-center whitespace-nowrap
                                  min-w-[85px] px-5 py-2
                                  rounded-full border border-white/20 bg-white/10
                                  text-sm text-white/90"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 text-center text-white/60 text-[15px]">
            {prefersReduced ? "Tap to flip" : "Hover out to flip back"}
          </div>
        </div>
      </div>
    </div>
  );
}
