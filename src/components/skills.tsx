"use client";

import React from "react";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 1,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <motion.section
      id="skills"
      ref={ref}
      className="scroll-mt-28 mb-28 max-w-[53rem] text-center sm:mb-40 cursor-default"
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
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        My skills
      </h2>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        <Link href="https://www.w3schools.com/html/" target="_blank">
          <motion.li
            className="bg-gray-200 hover:bg-gray-300 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            HTML
          </motion.li>
        </Link>
        <Link href="https://www.w3schools.com/css/" target="_blank">
          <motion.li
            className="bg-gray-200 hover:bg-gray-300 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            CSS
          </motion.li>
        </Link>
        <Link href="https://www.w3schools.com/sass/" target="_blank">
          <motion.li
            className="bg-gray-200 hover:bg-gray-300 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            SASS
          </motion.li>
        </Link>
        <Link href="https://www.w3schools.com/bootstrap/" target="_blank">
          <motion.li
            className="bg-gray-200 hover:bg-gray-300 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            Bootstrap
          </motion.li>
        </Link>
        <Link href="https://tailwindcss.com/" target="_blank">
          <motion.li
            className="bg-gray-200 hover:bg-gray-300 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            Tailwind
          </motion.li>
        </Link>
        <Link href="https://mui.com/" target="_blank">
          <motion.li
            className="bg-gray-200 hover:bg-gray-300 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            MUI
          </motion.li>
        </Link>
        <Link href="https://www.w3schools.com/js/" target="_blank">
          <motion.li
            className="bg-gray-200 hover:bg-gray-300 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            JavaScript
          </motion.li>
        </Link>
        <Link href="https://react.dev/" target="_blank">
          <motion.li
            className="bg-gray-200 hover:bg-gray-300 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            ReactJS
          </motion.li>
        </Link>
        <Link href="https://react-redux.js.org/" target="_blank">
          <motion.li
            className="bg-gray-200 hover:bg-gray-300 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            Redux
          </motion.li>
        </Link>
        <Link href="https://www.typescriptlang.org/" target="_blank">
          <motion.li
            className="bg-gray-200 hover:bg-gray-300 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            TypeScript
          </motion.li>
        </Link>
        <Link href="https://nextjs.org/" target="_blank">
          <motion.li
            className="bg-gray-200 hover:bg-gray-300 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            Next.js
          </motion.li>
        </Link>
        <Link href="https://nodejs.org/en" target="_blank">
          <motion.li
            className="bg-gray-200 hover:bg-gray-300 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            Node.js
          </motion.li>
        </Link>
        <Link href="https://github.com/" target="_blank">
          <motion.li
            className="bg-gray-200 hover:bg-gray-300 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            GitHub
          </motion.li>
        </Link>
      </ul>
    </motion.section>
  );
}
