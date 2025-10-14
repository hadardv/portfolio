import { useRef } from "react";
import DeskSetupViewer from "./DeskSetupViewer";
import "./contact.css";

export default function Contact() {
  const ref = useRef<HTMLElement | null>(null);

  return (
    <section id="contact" ref={ref} className="relative w-full min-h-screen">
      <div className="container">
        <DeskSetupViewer
          src="/models/setup-draco.glb"
          fit="contain"
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
