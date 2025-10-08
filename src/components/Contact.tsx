import { easeOut, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import DeskSetupViewer from "./DeskSetupViewer";
import "./contact.css";

export default function Contact() {
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
      id="contact"
      ref={ref}
      className="relative w-full min-h-screen scroll-mt-20"
    >
      <motion.h2
        className="title"
        style={{ y: yTitle, opacity: fadeIn }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        Let's Talk!
      </motion.h2>
      <div className="container">
        <DeskSetupViewer
          src="/models/need_some_space.glb"
          fit="cover"
          interactive={true}
          autoRotate
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: "auto",
            width: "50%",
            zIndex: 0,
            marginRight: "20px",
            marginTop: "20px",
          }}
        />
      </div>
    </section>
  );
}
