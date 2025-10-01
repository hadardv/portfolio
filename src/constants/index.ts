import type { Project } from "../components/ProjectCard";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  // { id: "stack", title: "Stack" },
  { id: "contact", title: "Contact" },
];

export const projects: Project[] = [
  {
    id: "pantrypal",
    title: "PantryPal — Smart Pantry",
    subtitle: "React Native • Spring Boot • NFC",
    tags: ["React Native", "Spring Boot", "NFC", "S3"],
    bullets: [
      "Inventory + shopping lists with NFC tags",
      "Auth, REST API, CI/CD, S3 file handling",
    ],
  },
  {
    id: "roadsense",
    title: "Road Sense — Mobileye-like POC",
    subtitle: "Android • Kotlin • ML Kit",
    tags: ["Android", "Kotlin", "ML Kit"],
    bullets: [
      "Real-time speed & sign detection",
      "Foreground service + analytics",
    ],
  },
  {
    id: "hoger",
    title: "EV Catalog and BI Analytics",
    subtitle: "React • TypeScript • TypeORM",
    tags: ["React", "TypeORM", "RBAC"],
    bullets: [
      "Roles/permissions across groups/projects",
      "File management, tokens, migrations",
    ],
  },
];
