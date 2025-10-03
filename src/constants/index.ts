import type { Project } from "../components/ProjectCard";
import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "../assets/index";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const projects: Project[] = [
  {
    id: "pantrypal",
    title: "PantryPal — Smart Pantry App",
    subtitle:
      "Smart pantry management mobile app, designed to help users track their food inventory, manage shopping lists, and scan items using NFC technology.",
    tags: ["React Native", "Spring Boot", "NFC", "Docker"],
    hrefRepo: "https://github.com/hadardv/PantryPal",
  },
  {
    id: "habitpals",
    title: "Habit Pals",
    subtitle:
      "Habit Pals is a social habit-tracking app that helps users build better habits, track progress, and stay accountable with friends.",
    tags: ["Android", "Kotlin", "Firebase"],
    hrefRepo: "https://github.com/hadardv/Habit-Pals",
  },
  {
    id: "carsCatalog",
    title: "EV Catalog and BI Analytics",
    subtitle:
      "An EV catalog that lets users create, update, and organize models with powerful search and filters, plus BI analytics across multiple chart types.",
    tags: ["React", "Postgres"],
    hrefRepo: "https://github.com/hadardv/carsProj---final",
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];
