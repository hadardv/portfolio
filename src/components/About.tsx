import { easeOut, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./about.css";

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
    <section id="about" ref={ref} className="about-section">
      <div className="about-grid">
        <motion.div
          className="about-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <p
            className="center-name"
            style={{
              transform: `translateY(${ySubtitle.get()}px)`,
              opacity: fadeIn.get(),
            }}
          >
            About Me
          </p>
          <p
            className="center-sub"
            style={{
              transform: `translateY(${yBody.get()}px)`,
              opacity: fadeIn.get(),
            }}
          >
            Overview.
          </p>

          <p
            className="center-desc"
            style={{
              transform: `translateY(${yBody.get()}px)`,
              opacity: fadeIn.get(),
            }}
          >
            Full-stack developer focused on TypeScript, React, and Node—building
            efficient, scalable, and user-friendly experiences.
          </p>

          <a
            href="/cv/HadarDavid_CV.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="cv-btn center-btn"
          >
            Download My CV
          </a>

          <div className="center-halo" aria-hidden />
        </motion.div>
      </div>
    </section>
  );
}
