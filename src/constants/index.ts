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
  pantrypal,
  habitpals,
  carcatalog,
} from "../assets/index";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "stack", title: "Stack" },
  { id: "contact", title: "Contact" },
];

export const projects: Project[] = [
  {
    id: "pantrypal",
    dataIdx: "1",
    title: "PantryPal — Smart Pantry App",
    subtitle:
      "Smart pantry management mobile app, designed to help users track their food inventory, manage shopping lists, and scan items using NFC technology.",
    tags: ["React Native", "Typescript", "Spring Boot", "NFC", "Docker"],
    hrefRepo: "https://github.com/hadardv/PantryPal",
    className: "-left-30",
    imageUrl: pantrypal,
  },
  {
    id: "habitpals",
    dataIdx: "2",
    title: "Habit Pals",
    subtitle:
      "Habit Pals is a social habit-tracking app that helps users build better habits, track progress, and stay accountable with friends.",
    tags: ["Android", "Kotlin", "Firebase Store", "Firbase Auth"],
    hrefRepo: "https://github.com/hadardv/Habit-Pals",
    className: "left-50",
    imageUrl: habitpals,
  },
  {
    id: "carsCatalog",
    dataIdx: "3",
    title: "EV Catalog and BI Analytics",
    subtitle:
      "An EV catalog that lets users create, update, and organize models with powerful search and filters, plus BI analytics across multiple chart types.",
    tags: ["React", "Javascript", "Postgresql", "MUI"],
    hrefRepo: "https://github.com/hadardv/carsProj---final",
    className: "-left-30",
    imageUrl: carcatalog,
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
