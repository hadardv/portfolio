import "./about.css";
import Timeline from "./Timeline";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-section about-sticky">
        <div className="about-center reveal">
          <p className="center-name fade-in-subtitle">About Me</p>
          <p className="center-desc fade-in-body">
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
        </div>
      </div>
      <div className="timeline-section">
        <Timeline />
      </div>
    </section>
  );
}
