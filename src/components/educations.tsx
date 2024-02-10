"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

export default function Education() {
  const { ref } = useSectionInView("Education");
  const { theme } = useTheme();

  return (
    <motion.section
      id="education"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 cursor-default"
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
        Education
      </h2>
      <VerticalTimeline lineColor="rgba(0, 0, 0, 0.3)">
        {educationsData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "#292f36",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="!mt-0 text-[red] dark:text-[#12F7D6]">
                {item.location}
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
                <span className="text-[#f3f4f6] dark:text-transparent">
                  Lorem ipsum dolor sit amet consectur.
                </span>
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}
