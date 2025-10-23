import "./about.css";
import Timeline from "./ui/Timeline";

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

          {/* <a
            href="/cv/HadarDavid_CV.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="cv-btn center-btn"
          >
            Download My CV
          </a> */}
          <a
            className="btn"
            href="/cv/HadarDavid_CV.pdf"
            rel="noopener noreferrer"
            download
            target="_blank"
          >
            <svg
              height="24"
              width="24"
              fill="#FFFFFF"
              viewBox="0 0 24 24"
              data-name="Layer 1"
              id="Layer_1"
              className="sparkle"
            >
              <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
            </svg>

            <span className="text">Download my CV</span>
          </a>
        </div>
      </div>
      <div className="timeline-section">
        <Timeline />
      </div>
    </section>
  );
}
