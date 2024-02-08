import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import img from "../../public/moon.svg";
import comp from "../../public/comp.svg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "lorem",
    location: "lorem",
    description: "lorem ipsum dolor.",
    // icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "lorem",
    location: "lorem",
    description: "lorem ipsum dolor",
    // icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "lorem",
    location: "lorem",
    description: "lorem ipsum dolor.",
    // icon: React.createElement(FaReact),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Prayer Times",
    description:
      "In this project you can see the prayer times of all regions in Uzbekistan. this data comes from the API.",
    tags: ["HTML", "CSS", "JavaScipt"],
    imageUrl: img,
  },
  {
    title: "Bootcamp",
    description:
      "In this project, you can see store statistics, customers, information about them, list of exchanges, settings, promotions.",
    tags: ["React", "Tailwind", "Redux"],
    imageUrl: comp,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SASS",
  "Bootstrap",
  "Tailwind",
  "MUI",
  "JavaScript",
  "ReactJS",
  "Redux",
  "TypeScript",
  "Next.js",
  "Node.js",
  "GitHub",
] as const;
