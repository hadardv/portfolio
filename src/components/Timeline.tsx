import "./timeline.css";

export type TimelineItem = {
  year: string;
  title: string;
  description?: string;
  emoji?: string;
};

type Props = {
  items?: TimelineItem[];
  className?: string;
  heading?: string;
};

const defaultItems: TimelineItem[] = [
  {
    year: "2022",
    title: "Started B.Sc. in Software Engineering",
    description: "Kicked off the degree",
  },
  {
    year: "2023",
    title: "Udemy Full-Stack Deep Dive",
    description: "React, Node, TypeScript, DBs — building mini apps for fun.",
  },
  {
    year: "2024",
    title: "First Full-Stack Dev Job",
    description: "Shipping real features, owning services, learning fast.",
  },
  {
    year: "2025",
    title: "Web Development Instructor in QueenB",
    description:
      "Mentoring a group of middle school girls. Teaching JavaScript, HTML & CSS.",
  },
  {
    year: "2026",
    title: "B.Sc. Graduation",
    description: "Wrapping up with projects I’m proud of (and lots of coffee).",
  },
];

export default function Timeline({
  items = defaultItems,
  className = "",
  heading = "Professional Timeline",
}: Props) {
  return (
    <section className={`timeline ${className}`} aria-labelledby="timeline-h">
      <h3 id="timeline-h" className="timeline__sr-only">
        {heading}
      </h3>

      <div className="timeline__wrap">
        <div aria-hidden className="timeline__spine timeline__shimmer" />

        <ol className="timeline__list">
          {items.map((it) => (
            <li key={it.year} className="timeline__item">
              <div className="timeline__dot-wrap">
                <span className="timeline__dot-glow" />
                <span className="timeline__dot" />
              </div>

              <article className="timeline__card">
                <div className="timeline__meta">
                  <span className="timeline__year">{it.year}</span>
                  {it.emoji && (
                    <span className="timeline__emoji" aria-hidden>
                      {it.emoji}
                    </span>
                  )}
                </div>

                <h4 className="timeline__title">{it.title}</h4>

                {it.description && (
                  <p className="timeline__desc">{it.description}</p>
                )}

                <div className="timeline__underline" />
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
