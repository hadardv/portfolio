import React from "react";
// import DeskSetupViewer from "./DeskSetupViewer";
import "./stack.css";
import StackOptions from "./ui/StackOptions";
import SkillCard from "./SkillCard";

export type fieldType = "frontend" | "backend" | "other";

export default function Stack() {
  const [fieldSelected, setFieldSelected] =
    React.useState<fieldType>("frontend");
  const handleFieldSelect = (fieldSelected: fieldType) => {
    setFieldSelected(fieldSelected);
  };
  return (
    <div id="stack" className="skills-stack">
      <div className="left-skills">
        <div className="field-options">
          <StackOptions
            onFieldSelect={handleFieldSelect}
            currentField={fieldSelected}
          />
        </div>
        <div className="dynamic-cards">
          {fieldSelected === "frontend" && (
            <SkillCard
              field={"frontend"}
              skills={["React", "Typescript", "CSS", "HTML"]}
            />
          )}
          {fieldSelected === "backend" && (
            <SkillCard
              field={"backend"}
              skills={["Node.js", "Express", "MongoDB", "Python"]}
            />
          )}
          {fieldSelected === "other" && (
            <SkillCard
              field={"other"}
              skills={["Git", "Docker", "CI/CD", "Testing"]}
            />
          )}
        </div>
      </div>
      {/* <DeskSetupViewer
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
      /> */}
    </div>
  );
}
