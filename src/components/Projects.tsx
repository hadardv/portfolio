import { easeOut, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TimelineSpine from "./TimelineSpine";

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
      className="relative w-full scroll-mt-20 overflow-hidden py-20"
    >
      <motion.h2
        className="title container mx-auto max-w-6xl px-4"
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
        Projects
      </motion.h2>
      <TimelineSpine />
      <p className="text-white">a</p>
      <p className="text-white">a</p>
      <p className="text-white">a</p>
      <p className="text-white">a</p>
      <p className="text-white">a</p>
      <p className="text-white">a</p>
      <p className="text-white">a</p>
      <p className="text-white">a</p>
      <p className="text-white">a</p>
      <p className="text-white">a</p>
      <p className="text-white">a</p>
      <p className="text-white">a</p>
      <p className="text-white">a</p>
      <p className="text-white">a</p>
      <p className="text-white">a</p>
      <p className="text-white">a</p>
      <p className="text-white">a</p>
      <p className="text-white">a</p>
      <p className="text-white">a</p>
      <p className="text-white">a</p>
      <p className="text-white">a</p>
    </section>
  );
}
