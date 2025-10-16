import { useRef } from "react";
import ProjectCard from "./ProjectCard";
// import { projects } from "../constants";
import "./projects.css";

export default function Projects() {
  const ref = useRef<HTMLElement | null>(null);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative w-full overflow-hidden py-20"
    >
      {/* <div className="headline">Latest Works</div> */}
      <div className="projects flex flex-col items-center gap-30 w-fit w-full justify-center">
        <ProjectCard />
      </div>
    </section>
  );
}
