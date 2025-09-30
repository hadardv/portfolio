import { easeOut, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const yTitle = useTransform(scrollYProgress, [0, 1], [20, -10]);
  //const yBody = useTransform(scrollYProgress, [0, 1], [30, -15]);
  const fadeIn = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 1]);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative w-full min-h-screen scroll-mt-20"
    >
      <motion.h2
        className="title"
        style={{ y: yTitle, opacity: fadeIn, marginBottom: 30 }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        Projects
      </motion.h2>

      <div className="flex flex-row gap-10 justify-center sm: flex-col">
        <ProjectCard
          name="PantryPal"
          description="A smart pantry app for managing your home pantry"
          stack={[
            "React Native",
            "Typescript",
            "NFCManager",
            "Springboot",
            "MongoDB",
          ]}
          link="project.com"
          image="hahaha"
        />

        <ProjectCard
          name="EV Catalog"
          description="This is my first project"
          stack={["React", "Postgresql", "Javascript"]}
          link="project.com"
          image="hahaha"
        />

        <ProjectCard
          name="Habit Pals"
          description="Social network Android app for tracking and sharing new habits with friends"
          stack={["Kotlin", "Firebase"]}
          link="project.com"
          image="hahaha"
        />
      </div>
    </section>
  );
}
