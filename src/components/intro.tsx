"use client";

import { motion } from "framer-motion";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { useSectionInView } from "../lib/hooks";
import Link from "next/link";
import Image from "next/image";
import img from "../../public/photo.jpg";
import "../components/font.css";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <motion.section
      ref={ref}
      id="home"
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
      className="mb-12 max-w-[70rem] cursor-default"
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <p className="font text-4xl sm:text-6xl text-[red] dark:text-[#12F7D6]">
            _akrv.s_
          </p>
          <p className="text-center font2 -mt-2 text-[red] dark:text-[#12F7D6]">
            Frontend Developer
          </p>
        </motion.div>
      </div>
      <motion.h1
        className="flex flex-col mb-10 mt-12 sm:flex-row items-center font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Image
          src={img}
          className="w-[600px] h-[400px] rounded-2xl object-cover border-[0.1rem] border-white shadow-xl"
          alt="rasm"
        />
        <div className="text-left pl-12 mt-3">
          <p className="f text-base text-[#f25656] dark:text-[#93feee] -ml-3">
            ‹h1›
          </p>
          <p className="text-5xl">Hi,</p>
          <p className="text-5xl">
            I’m
            <span className="text-[red] dark:text-[#12F7D6]"> Sevara</span>,
          </p>
          <p className="text-5xl">Frontend Developer.</p>
          <p className="f text-base text-[#f25656] dark:text-[#93feee] -ml-3">
            ‹/h1›
          </p>
          <br />
          <p className="f text-base text-[#f25656] dark:text-[#93feee] -ml-3">
            ‹p›
          </p>
          <p className="text-lg">
            I have more than 1 year of programming experience.
          </p>
          <p className="f text-base text-[#f25656] dark:text-[#93feee] -ml-3">
            ‹/p›
          </p>
        </div>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          className="bg-gray-700 text-white px-5 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 transition hover:scale-110 hover:bg-gray-950 dark:bg-white/40 dark:text-[#292F36] dark:font-bold dark:hover:bg-white"
          href="/resume.pdf"
          target="_blank"
        >
          Resume
        </Link>
        <Link
          className="p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] transition hover:text-gray-950 dark:text-white/40 dark:hover:text-white"
          href="https://www.linkedin.com/in/sevara-akromjonova-ab18922aa/"
          target="_blank"
        >
          <FiLinkedin />
        </Link>

        <Link
          className="p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] transition hover:text-gray-950 dark:text-white/40 dark:hover:text-white"
          href="https://github.com/abrarjanovna"
          target="_blank"
        >
          <FiGithub />
        </Link>
      </motion.div>
    </motion.section>
  );
}
