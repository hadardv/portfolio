type ProjectCardProps = {
  name: string;
  description: string;
  stack: string[];
  link: string;
  image: string;
};

export default function ProjectCard({
  name = "",
  description = "",
  stack = [],
  link = "",
  image = "",
}: ProjectCardProps) {
  return (
    <div
      className={`relative w-[400px] h-[500px]`}
      style={{ perspective: 1200 }}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-[28px] opacity-40 blur-xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      <div className="relative z-10 h-full w-full rounded-[28px] border border-white/100">
        <div
          className="absolute inset-0 rounded-[28px] bg-transparent backdrop-blur-[2px] shadow-[0_0_30px_rgba(255,255,255,0.08)]
                     flex flex-col items-center justify-center gap-6 text-white"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className="title">{name}</div>
          <div className="description">{description}</div>
          <div className="link">{link}</div>
          <div className="image">{image}</div>
          <div className="flex flex-wrap justify-center gap-2">
            Tech Stack:
            {stack.map((s) => (
              <span
                key={s}
                className="inline-flex items-center justify-center whitespace-nowrap
                                  min-w-[85px] px-5 py-2
                                  rounded-full border border-white/20 bg-white/10
                                  text-sm text-white/90"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
