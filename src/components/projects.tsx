"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Project from "./project";
import { motion } from "framer-motion";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <motion.section
      ref={ref}
      id="projects"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 3,
      }}
      viewport={{
        once: true,
      }}
      className="scroll-mt-28 mb-28"
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        My projects
      </h2>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}
