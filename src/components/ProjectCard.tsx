import "./projectCard.css";

export type Project = {
  id: string;
  dataIdx: string;
  title: string;
  subtitle?: string;
  bullets?: string[];
  tags: string[];
  hrefRepo?: string;
  className: string;
  imageUrl: string;
};

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  return (
    <div className="wrapper">
      <div
        className={`card ${project.className}`}
        data-idx={project.dataIdx}
        style={{
          backgroundImage: `url(${project.imageUrl})`,
        }}
      >
        <div className="top-color" />
        <div className="relative z-10 h-full w-full">
          <div className="proj-title">{project.title}</div>
          <p className="proj-subtitle">{project.subtitle}</p>

          <div className="tags">
            {project.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>

          <div className="source-link">
            <button
              className="source-btn"
              onClick={() =>
                window.open(
                  project.hrefRepo?.startsWith("http")
                    ? project.hrefRepo
                    : `https://${project.hrefRepo}`,
                  "_blank"
                )
              }
            >
              Source Code
            </button>
            <div className="btn-icon">
              <svg
                className="arrow"
                viewBox="0 0 32 12"
                aria-hidden="true"
                focusable="false"
              >
                <line x1="0" y1="6" x2="22" y2="6" />
                <polyline points="22,1 31,6 22,11" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
