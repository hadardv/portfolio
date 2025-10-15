import { easeOut, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants";
import "./projects.css";

export default function Projects() {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const yTitle = useTransform(scrollYProgress, [0, 1], [20, -10]);
  const fadeIn = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 1]);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative w-full overflow-hidden py-20"
    >
      <div className="headline">Latest Works</div>
      <motion.div
        className="projects flex flex-col items-center gap-30 w-fit w-full justify-center"
        style={{
          y: yTitle,
          opacity: fadeIn,
          marginBottom: 30,
        }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        {projects.map((p) => (
          <ProjectCard project={p} key={p.id} />
        ))}
      </motion.div>
    </section>
  );
}
