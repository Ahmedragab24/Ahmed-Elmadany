"use client";

import AnimationTech from "../Components/AnimationTech";
import { useLanguage } from "@/providers/LanguageContextProvider";
import { motion } from "framer-motion";
import {
  ChevronsLeftRightEllipsis,
  Code,
  Eclipse,
  FileCode2,
  PencilRuler,
  SquareTerminal,
} from "lucide-react";
import React from "react";

const TechSkills = () => {
  const { lang } = useLanguage();

  return (
    <section className="section" id="TechSkills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sectionTitle"
        >
          {lang == "English" ? "Technical Skills" : "المهارات التقنية"}
        </motion.div>

        <div className="flex flex-col justify-center gap-y-12 items-center md:flex-row  md:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            dir="Rtl"
            className="left flex flex-col justify-center items-center space-y-5 md:space-y-14"
          >
            <div className="flex justify-center items-center gap-x-3">
              <div className="bg-secondary p-2  border-2 border-primary rounded-full">
                <Code className="text-primary w-3 h-3 md:w-6 md:h-6" />
              </div>
              <div>
                <h2 className="md:text-xl">Programming languages</h2>
                <h3 className="max-w-[20rem] text-muted-foreground text-sm md:text-lg">
                  C - C++ - Python - JavaScript - TypeScript - Sql
                </h3>
              </div>
            </div>

            <div className="flex justify-center items-center gap-x-3 ms-24">
              <div className="bg-secondary p-2  border-2 border-primary rounded-full">
                <SquareTerminal className="text-primary w-3 h-3 md:w-6 md:h-6" />
              </div>
              <div>
                <h2 className="md:text-xl">Computer Science</h2>
                <h3 className="max-w-[20rem] text-muted-foreground text-sm md:text-lg">
                  Algorithms - Data structure - RAM control - Oop - Design
                  Patterns - Solid Principles
                </h3>
              </div>
            </div>

            <div className="flex justify-center items-center gap-x-3">
              <div className="bg-secondary p-2  border-2 border-primary rounded-full">
                <Eclipse className="text-primary w-3 h-3 md:w-6 md:h-6" />
              </div>
              <div>
                <h2 className="md:text-xl">Project control skills</h2>
                <h3 className="max-w-[20rem] text-muted-foreground text-sm md:text-lg">
                  Command Line - Git & Github - Docker - Postman
                </h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <AnimationTech />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            dir="Ltr"
            className="right flex flex-col justify-center items-center space-y-5 md:space-y-14"
          >
            <div className="flex justify-center items-center gap-x-2">
              <div className="bg-secondary p-2  border-2 border-primary rounded-full">
                <PencilRuler className="text-primary w-3 h-3 md:w-6 md:h-6" />
              </div>
              <div>
                <h2 className="md:text-xl">Ui Designer</h2>
                <h3 className="max-w-[20rem] text-muted-foreground text-sm md:text-lg">
                  UI Components - Responsive Design - Figma - Design System
                </h3>
              </div>
            </div>

            <div className="flex justify-center items-center gap-x-3 ms-24">
              <div className="bg-secondary p-2  border-2 border-primary rounded-full">
                <FileCode2 className="text-primary w-3 h-3 md:w-6 md:h-6" />
              </div>
              <div>
                <h2 className="md:text-xl">Front-end</h2>

                <h3 className="max-w-[20rem] text-muted-foreground text-sm md:text-lg">
                  Html - Css - Js - Ts - React - Gulp - Pug - Jest - Redux
                  Toolkit - Next.js
                </h3>
              </div>
            </div>

            <div className="flex justify-center items-center gap-x-2">
              <div className="bg-secondary p-2  border-2 border-primary rounded-full">
                <ChevronsLeftRightEllipsis className="text-primary w-3 h-3 md:w-6 md:h-6" />
              </div>
              <div>
                <h2 className="md:text-xl">Frameworks & Libraries</h2>
                <h3 className="max-w-[20rem] text-muted-foreground text-sm md:text-lg">
                  Bootstrap - Tailwind - Sass - Mui - ChakraUi - ShadcnUi
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechSkills;
