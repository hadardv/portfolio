import styles from "../styles";
import DeskSetupViewer from "../components/DeskSetupViewer";
import { easeOut, motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-row justify-center items-center h-screen w-full px-16 ml-15">
      <motion.div
        className="flex flex-col w-1/2 text-left max-w-2xl"
        initial={{ opacity: 0, y: -60, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.0, ease: easeOut }}
      >
        <h1 className="font-extrabold text-5xl md:text-7xl tracking-tight text-white">
          Hi, I'm <span className="text-[#F5CBCB]">Hadar</span>
        </h1>

        <p className={`${styles.heroSubText} text-grey-300`}>
          Full Stack Developer <br className="sm:block hidden" />
          Transforming ideas into seamless digital realities{" "}
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
          src="/models/setup-draco.glb"
          autoRotate
          helpers={false}
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>
      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
}
