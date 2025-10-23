import DeskSetupViewer from "./DeskSetupViewer";
import "./stack.css";

export default function Stack() {
  return (
    <div id="stack" className="skills-stack">
      <div className="left-skills">
        <ul>
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Node.js / Express</li>
          <li>Python / Django</li>
          <li>HTML5 & CSS3 / Tailwind CSS</li>
          <li>SQL & NoSQL Databases</li>
        </ul>
      </div>
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
          width: "55%",
          height: "100%",
          zIndex: 0,
          marginRight: "20px",
          marginTop: "20px",
        }}
      />
    </div>
  );
}
