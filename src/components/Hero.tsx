// Hero.tsx
import styles from "../styles";
import DeskSetupViewer from "../components/DeskSetupViewer";
import { easeOut, motion } from "framer-motion";
import "./hero.css";

export default function Hero() {
  return (
    <section className="model relative h-screen w-full overflow-hidden">
      <DeskSetupViewer
        src="/models/space_boi.glb"
        fit="cover"
        interactive={true}
        autoRotate
        style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.6 }}
      />
      <div className="absolute top-2/7 -translate-y-1/2 left-6 sm:left-10 md:left-16 z-20">
        <motion.div
          className="pointer-events-none text-left px-8 max-w-3xl text-white  "
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOut }}
        >
          <h1 className="font-extrabold text-5xl md:text-7xl tracking-tight text-white z-10">
            Hi, I'm{" "}
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ff4fd8, #2dd4ff, #ffd500)",
                backgroundSize: "200% 200%",
                backgroundPosition: "0% 50%",
                animation: "gradient-shift 6s ease infinite",
                willChange: "background-position",
              }}
            >
              Hadar
            </span>
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
