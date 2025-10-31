import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./stack.css";
import StackOptions from "./ui/StackOptions";
import SkillCard from "./SkillCard";

export type fieldType = "frontend" | "backend" | "other";
const FIELDS: fieldType[] = ["frontend", "backend", "other"];

export default function Stack() {
  const [fieldSelected, setFieldSelected] =
    React.useState<fieldType>("frontend");

  // +1 = next, -1 = prev
  const [dir, setDir] = React.useState<1 | -1>(1);

  const idx = FIELDS.indexOf(fieldSelected);
  const goNext = () => {
    setDir(1);
    setFieldSelected(FIELDS[(idx + 1) % FIELDS.length]);
  };
  const goPrev = () => {
    setDir(-1);
    setFieldSelected(FIELDS[(idx - 1 + FIELDS.length) % FIELDS.length]);
  };

  const lastSwitch = React.useRef(0);
  const trigger = (d: "next" | "prev") => {
    const now = Date.now();
    if (now - lastSwitch.current < 350) return;
    lastSwitch.current = now;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    d === "next" ? goNext() : goPrev();
  };

  const startX = React.useRef<number | null>(null);
  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) < 50) return;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    dx < 0 ? goNext() : goPrev();
  };

  return (
    <div id="stack" className="skills-stack">
      <div className="left-skills">
        <div className="field-options">
          <StackOptions
            onFieldSelect={(f) => {
              const targetIdx = FIELDS.indexOf(f);
              const d = targetIdx > idx ? 1 : -1;
              setDir(d as 1 | -1);
              setFieldSelected(f);
            }}
            currentField={fieldSelected}
          />
        </div>

        <div
          className="dynamic-cards"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={fieldSelected}
              initial={{ opacity: 0.6, x: 10 * dir }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0.6, x: -10 * dir }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              {fieldSelected === "frontend" && (
                <SkillCard
                  field="frontend"
                  skills={[
                    "React",
                    "Typescript",
                    "CSS",
                    "HTML",
                    "React Native",
                    "MUI",
                    "Tailwind",
                    "React Query",
                  ]}
                />
              )}
              {fieldSelected === "backend" && (
                <SkillCard
                  field="backend"
                  skills={[
                    "Node.js",
                    "Express",
                    "MSSQL",
                    "Python",
                    "Java",
                    "Springboot",
                    "PostgreSQL",
                    "Kotlin",
                    "Firebase",
                    "Rest APIs",
                  ]}
                />
              )}
              {fieldSelected === "other" && (
                <SkillCard
                  field="other"
                  skills={[
                    "Git",
                    "Docker",
                    "TypeORM",
                    "Figma",
                    "Agile",
                    "AWS S3",
                    "Vite",
                    "Postman",
                  ]}
                />
              )}
            </motion.div>
          </AnimatePresence>

          <div
            className="edge edge-left"
            onMouseEnter={() => trigger("prev")}
            onClick={() => trigger("prev")}
            aria-label="Previous"
          />
          <div
            className="edge edge-right"
            onMouseEnter={() => trigger("next")}
            onClick={() => trigger("next")}
            aria-label="Next"
          />
        </div>
      </div>
    </div>
  );
}
