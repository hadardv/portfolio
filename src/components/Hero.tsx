import styles from "../styles";
import DeskSetupViewer from "../components/DeskSetupViewer";
import "./hero.css";

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen h-screen">
      <div className="absolute inset-0 z-0 overflow-hidden opacity-80">
        <DeskSetupViewer
          src="/models/space_boi.glb"
          fit="cover"
          interactive
          autoRotate
          style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 1 }}
        />
      </div>

      <div className="content relative z-20 sticky top-16 md:top-24 px-6 sm:px-10 md:px-16">
        <div className="hero-fade">
          <h1 className="font-[900] text-5xl md:text-[90px] tracking-tight text-white">
            Hi, I’m{" "}
            <span className="inline-block bg-clip-text text-transparent gradient-shift">
              Hadar.
            </span>
          </h1>

          <p className={`${styles.heroSubText} text-white`}>
            Full Stack Developer
            <br className="sm:block hidden" />
            Transforming ideas into seamless digital realities.
          </p>
        </div>
      </div>

      <div className="h-[120vh]" />
    </section>
  );
}
