export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  bullets?: string[];
  tags?: string[];
  hrefDemo?: string;
  hrefRepo?: string;
};

//type Props = { project: Project; side: "left" | "right"; className?: string };

export default function ProjectCard() {
  return <h1>hey</h1>;
}
