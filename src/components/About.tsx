import { easeOut, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./about.css";
import SkillsCard from "./SkillsCard";

export default function About() {
  const ref = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const ySubtitle = useTransform(scrollYProgress, [0, 1], [20, -10]);
  const yBody = useTransform(scrollYProgress, [0, 1], [30, -15]);
  const fadeIn = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 1]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full min-h-screen scroll-mt-20"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 py-20 md:py-28">
        <motion.h2
          className="title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="sub-title"
          style={{ y: ySubtitle, opacity: fadeIn }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          Overview.
        </motion.p>

        <motion.p
          className="description"
          style={{ y: yBody, opacity: fadeIn }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          I’m Hadar, a full-stack software developer with experience in
          TypeScript and expertise in React and Node.js. I’m a quick learner and
          team player who collaborates to build efficient, scalable, and
          user-friendly solutions to real-world problems.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <div className="mt-12 px-6 sm:px-10">
          <div className="flex justify-center">
            <div className="grid w-fit gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <SkillsCard
                name="Frontend Technologies"
                icon="/icons/frontend.png"
                size={120}
                sections={[
                  {
                    title: "UI",
                    items: ["React", "CSS", "HTML", "Tailwind"],
                  },
                  { title: "Build", items: ["Vite"] },
                ]}
              />
              <SkillsCard
                name="Infrastructure"
                icon="/icons/react.png"
                size={120}
                sections={[
                  { title: "Cloud", items: ["AWS S3", "Firebase"] },
                  { title: "Ops", items: ["Docker", "CI/CD"] },
                  { title: "Tools", items: ["git"] },
                ]}
              />
              <SkillsCard
                name="Backend Technologies"
                icon="/icons/backend.png"
                size={120}
                sections={[
                  {
                    title: "Core",
                    items: ["Node.js", "Express", "TypeScript"],
                  },
                  {
                    title: "ORM/DB",
                    items: ["TypeORM", "PostgreSQL", "MSSQL", "SQLite"],
                  },
                  { title: "Auth", items: ["JWT", "OAuth2"] },
                ]}
              />
            </div>
          </div>
        </div>
        {/* <div className=" flex justify-center !px-20">
          <Tech />
        </div> */}
      </motion.div>
    </section>
  );
}
