"use client";

import { ExperienceData } from "@/constants";
import { useLanguage } from "@/providers/LanguageContextProvider";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { motion as m } from "framer-motion";
import Link from "next/link";
import * as React from "react";

const Experience = () => {
  const { lang } = useLanguage();

  return (
    <section className="section" id="Experience">
      <div className="container">
        <m.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sectionTitle"
        >
          {lang == "English" ? "Experience" : "الخبرة"}
        </m.div>
        <Timeline position="alternate-reverse">
          {ExperienceData.map((item) => (
            <TimelineItem key={item.title}>
              <TimelineSeparator className="md:h-36">
                <TimelineDot className="!bg-primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <m.div
                  initial={{ opacity: 0, x: item.motion }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: item.duration }}
                >
                  <h2 className="text-lg md:text-2xl text-primary font-bold">
                    {lang == "English" ? item.title : item.arabicTitle}
                  </h2>
                  <p className="text-[.75rem] md:text-[1rem] font-light text-muted-foreground">
                    {lang == "English"
                      ? item.description
                      : item.arabicDescription}
                  </p>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="underline decoration-primary text-sm md:text-md"
                  >
                    {lang == "English" ? item.titleLink : item.arabicTitleLink}
                  </Link>
                </m.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default Experience;
