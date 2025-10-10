import { motion } from "framer-motion";
import "./projectCard.css";

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  bullets?: string[];
  tags: string[];
  hrefRepo?: string;
  imageUrl: string;
};

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  const variants = {
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
      className="card relative w-full max-w-[600px] min-h-[400px] rounded-[28px] overflow-hidden
             bg-center bg-cover"
      style={{
        backgroundImage: `url(${project.imageUrl})`,
      }}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ delay: 0.06 }}
    >
      <div className="absolute inset-0 bg-black/65" />
      <div className="pointer-events-none absolute -inset-px rounded-[28px] opacity-40 blur-xl" />
      <div className="relative z-10 h-full w-full rounded-[28px]">
        <div className="proj-title text-center">{project.title}</div>
        <p className="proj-subtitle">{project.subtitle}</p>

        <div className="tags">
          {project.tags.map((t) => (
            <span
              key={t}
              className="tag rounded-full border border-white/20 bg-white/10 text-sm text-white/90"
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
