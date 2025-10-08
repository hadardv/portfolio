import { motion } from "framer-motion";

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  bullets?: string[];
  tags: string[];
  hrefRepo?: string;
};

type Props = { project: Project; side: "left" | "right"; row: number };

export default function ProjectCard({ project, side, row }: Props) {
  const variants = {
    hidden: ({ side }: { side: "left" | "right" }) => ({
      opacity: 0,
      x: side === "left" ? -120 : 120,
      filter: "blur(6px)",
    }),
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 40,
        damping: 20,
        mass: 1.4,
      },
    },
  };
  return (
    <motion.div
      className={`relative h-[200px] w-[500px] ${
        side === "left" ? "col-start-1" : "col-start-2"
      }`}
      style={{ gridRowStart: row }}
      variants={variants}
      custom={{ side }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ delay: row * 0.06 }}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-[28px] opacity-40 blur-xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 70%)",
        }}
      />
      <div className="relative z-10 h-full w-full rounded-[28px] border border-white/100">
        <div className="title text-center">{project.title}</div>
        <p className="text-s text-white text-center">{project.subtitle}</p>

        <div className="flex flex-wrap justify-center gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center justify-center whitespace-nowrap min-w-[85px] px-5 py-2 rounded-full border border-white/20 bg-white/10 text-sm text-white/90"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2 text-white/70">
          <a
            href={
              project.hrefRepo?.startsWith("http")
                ? project.hrefRepo
                : `https://${project.hrefRepo}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}
