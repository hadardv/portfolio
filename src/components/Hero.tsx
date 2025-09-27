// Hero.tsx
import styles from "../styles";
import DeskSetupViewer from "../components/DeskSetupViewer";
import { easeOut, motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <DeskSetupViewer
        src="/models/space_boi.glb"
        fit="cover"
        interactive={true}
        autoRotate
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      />

      <div className="absolute top-3/4 -translate-y-1/2 left-6 sm:left-10 md: left-16 z-20">
        <motion.div
          className="pointer-events-none text-left px-8 max-w-3xl text-white  "
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut }}
        >
          <h1 className="font-extrabold text-5xl md:text-7xl tracking-tight text-white">
            Hi, I'm <span className="text-[#F5CBCB]">Hadar</span>
          </h1>
          <p className={`${styles.heroSubText} text-white mt-5`}>
            Full Stack Developer
            <br className="sm:block hidden" />
            Transforming ideas into seamless digital realities
          </p>
        </motion.div>
      </div>
    </section>
  );
}
