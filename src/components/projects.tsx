"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import img from "../../public/moon.svg";
import comp from "../../public/comp.svg";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
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
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className="group mb-3 sm:mb-8 last:mb-0"
      >
        <motion.section
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          className="bg-gray-200 max-w-[42rem] cursor-default border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-300 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
        >
          <Link href="https://uzb-namoz-vaqtlari.netlify.app/" target="_blank">
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
              <h3 className="text-2xl font-semibold">Prayer Times</h3>
              <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                In this project you can see the prayer times of all regions in
                Uzbekistan. this data comes from the API.
              </p>
              <p className="mt-3 text-gray-700 dark:text-white/70">
                <span className="text-[red] dark:text-[#12F7D6] font-semibold">
                  p.s.
                </span>
                {""} You can also see this project in the resume.
              </p>
              <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto translate-all">
                <li className="bg-black/[0.4] hover:bg-black/[0.9] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                  HTML
                </li>
                <li className="bg-black/[0.4] hover:bg-black/[0.9] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                  CSS
                </li>
                <li className="bg-black/[0.4] hover:bg-black/[0.9] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                  JavaScript
                </li>
              </ul>
            </div>
            <Image
              src={img}
              alt="Project"
              quality={95}
              className="absolute sm:block top-8 w-[18rem] hidden 
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2"
            />
          </Link>
        </motion.section>
      </motion.div>
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className="group mb-3 sm:mb-8 last:mb-0"
      >
        <motion.section
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          className="bg-gray-200 max-w-[42rem] cursor-default border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-300 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
        >
          <Link href="https://bootcamp-admin-panel.netlify.app/" target="_blank">
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
              <h3 className="text-2xl font-semibold">Bootcamp</h3>
              <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                In this project, you can see store statistics, customers,
                information about them, list of exchanges, settings, promotions.
              </p>
              <p className="mt-3 text-gray-700 dark:text-white/70">
                <span className="text-[red] dark:text-[#12F7D6] font-semibold">
                  p.s.
                </span>
                {""} You can also see this project in the resume.
              </p>
              <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto translate-all">
                <li className="bg-black/[0.4] hover:bg-black/[0.9] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                  React
                </li>
                <li className="bg-black/[0.4] hover:bg-black/[0.9] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                  Redux
                </li>
                <li className="bg-black/[0.4] hover:bg-black/[0.9] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                  Tailwind
                </li>
              </ul>
            </div>
            <Image
              src={comp}
              alt="Project"
              quality={95}
              className="absolute sm:block top-8 w-[18rem] hidden 
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
            ml-80"
            />
          </Link>
        </motion.section>
      </motion.div>
    </motion.section>
  );
}
