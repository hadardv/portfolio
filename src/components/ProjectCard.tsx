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

// type Props = { project: Project };

export default function ProjectCard() {
  return (
    <div className="cards">
      <div className="card pantry">
        <div className="info">
          <p className="title">PantryPal — Smart Pantry App</p>
          <p className="body">
            Smart pantry management mobile app, designed to help users track
            their food inventory, manage shopping lists, and scan items using
            NFC technology.
          </p>
          <div className="dashed-line" />
          <h1 className="stack-title">Tech Stack</h1>
          <div className="stack">
            <p className="stack-item1">React Native</p>
            <p className="stack-item2">Springboot</p>
            <p className="stack-item3">MongoDB</p>
            <p className="stack-item4">Docker</p>
            <p className="stack-item5">NFC</p>
          </div>
          <a
            href="https://github.com/hadardv/PantryPal"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="project-cars"
            className="cssbuttons-io"
          >
            <span>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                  fill="currentColor"
                ></path>
              </svg>
              Code
            </span>
          </a>
        </div>

        {/* whatever you already show in the middle of the card */}
        <div className="content">
          <p className="tip">Hover Me</p>
        </div>
      </div>

      <div className="card habitPal">
        <div className="info">
          <p className="title">Habit Pals</p>
          <p>
            Habit Pals is a social habit-tracking app that helps users build
            better habits, track progress, and stay accountable with friends.
          </p>
          <div className="stack">
            <ul>
              <p>Kotlin</p>
              <p>Firebase</p>
              <p>Javascript</p>
              <p>MUI</p>
              <p>Express</p>
            </ul>
          </div>
          <a
            href="https://github.com/hadardv/Habit-Pals"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="project-cars"
            className="cssbuttons-io"
          >
            <span>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                  fill="currentColor"
                ></path>
              </svg>
              Code
            </span>
          </a>
        </div>

        {/* whatever you already show in the middle of the card */}
        <div className="content">
          <p className="tip">Hover Me</p>
        </div>
      </div>
      <div className="card cars">
        <div className="info">
          <p className="title">EV Cars Catalog</p>
          <p>
            An EV catalog that lets users create, update, and organize models
            with powerful search and filters, plus BI analytics across multiple
            chart types.
          </p>
          <div className="stack">
            <ul>
              <p>Postgresql</p>
              <p>React</p>
              <p>Javascript</p>
              <p>MUI</p>
              <p>Express</p>
            </ul>
          </div>
          <a
            href="https://github.com/hadardv/carsProj---final"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="project-cars"
            className="cssbuttons-io"
          >
            <span>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                  fill="currentColor"
                ></path>
              </svg>
              Code
            </span>
          </a>
        </div>

        {/* whatever you already show in the middle of the card */}
        <div className="content">
          <p className="tip">Hover Me</p>
        </div>
      </div>
    </div>
  );
}
