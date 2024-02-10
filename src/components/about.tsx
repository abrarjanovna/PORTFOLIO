"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 cursor-default"
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
      id="about"
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        About me
      </h2>
      <p className="mb-3">
        Now I study in the 10th grade of school. I chose it because of my
        interest in IT field. I am a student of{" "}
        <span className="text-[red] dark:text-[#12F7D6]">Najot Ta’lim</span>. At
        first I studied in the FullStack group, then this group was closed for
        some reason. After that I started training in Frontend ReactJS group.{" "}
        <span className="italic">
          My favorite part of programming is the problem solving aspect)
        </span>
      </p>
      <span className="text-[red] dark:text-[#12F7F6]">p.s.</span> And another
      favorite part is finishing the task)))
    </motion.section>
  );
}
