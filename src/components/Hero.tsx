import styles from "../styles";
import DeskSetupViewer from "../components/DeskSetupViewer";
import { easeOut, motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-row justify-center items-center h-screen w-full px-16">
      <motion.div
        className="flex flex-col w-1/2 text-center max-w-2xl"
        initial={{ opacity: 0, y: -60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.0, ease: easeOut }}
      >
        <h1 className="font-extrabold text-5xl md:text-7xl tracking-tight text-white">
          Hi, I'm <span className="text-purple-400">Hadar</span>
        </h1>

        <p className={`${styles.heroSubText} text-grey-300`}>
          Full Stack Developer <br className="sm:block hidden" />
          Turning ideas into dynamic, user-friendly{" "}
          <br className="sm:block hidden" />
          digital experiences using cutting-edge tech.{" "}
        </p>
      </motion.div>

      <motion.div
        className="flex justify-center items-center w-1/2"
        style={{ height: "70vh", maxWidth: "1200px" }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: easeOut, delay: 0.4 }}
      >
        <DeskSetupViewer
          src="/models/gaming_setup_low-poly.glb"
          autoRotate
          helpers={false}
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>
    </section>
  );
}
