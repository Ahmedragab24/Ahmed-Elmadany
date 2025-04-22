"use client";

import AlertDialogSoftSkills from "../Components/AlertDialogSoftSkills";
import AnimatedAvatar from "../Components/Avatar";
import { softSkillsData } from "@/constants";
import { useLanguage } from "@/providers/LanguageContextProvider";
import { motion } from "framer-motion";
import { BookOpenText } from "lucide-react";
import React from "react";

const SoftSkills = () => {
  const { lang } = useLanguage();

  return (
    <section className="section" id="SoftSkills">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sectionTitle flex justify-center items-center gap-2"
      >
        <h2> {lang == "English" ? "Soft" : "الشخصية"}</h2>
        <BookOpenText className="text-yellow-500" />
        <h2>{lang == "English" ? "Skills" : "المهارات"}</h2>
      </motion.div>

      <div className="flex flex-col w-full max-w-4xl mx-auto gap-4 lg:gap-14">
        {/* العناصر باتجاه الأعلى */}
        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-4">
          {softSkillsData
            .filter(({ direction }) => direction === "top")
            .map(
              ({
                triggerTitle,
                arTriggerTitle,
                description,
                arDescription,
                direction,
                icon,
              }) => (
                <AlertDialogSoftSkills
                  key={triggerTitle}
                  triggerTitle={triggerTitle}
                  arTriggerTitle={arTriggerTitle}
                  description={description}
                  arDescription={arDescription}
                  icon={icon}
                  direction={direction}
                />
              )
            )}
        </div>

        {/* اليمين واليسار والمنتصف */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* العناصر باتجاه اليسار */}
          <div className="flex flex-col flex-wrap justify-center items-center gap-4 lg:gap-14">
            {softSkillsData
              .filter(({ direction }) => direction === "left")
              .map(
                ({
                  triggerTitle,
                  arTriggerTitle,
                  description,
                  arDescription,
                  direction,
                  icon,
                }) => (
                  <AlertDialogSoftSkills
                    key={triggerTitle}
                    triggerTitle={triggerTitle}
                    arTriggerTitle={arTriggerTitle}
                    description={description}
                    arDescription={arDescription}
                    icon={icon}
                    direction={direction}
                  />
                )
              )}
          </div>

          {/* العناصر بالمنتصف */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="my-10 lg:m-2"
          >
            <AnimatedAvatar />
          </motion.div>

          {/* العناصر باتجاه اليمين */}
          <div className="flex flex-col flex-wrap justify-center items-center gap-4 lg:gap-14">
            {softSkillsData
              .filter(({ direction }) => direction === "right")
              .map(
                ({
                  triggerTitle,
                  arTriggerTitle,
                  description,
                  arDescription,
                  direction,
                  icon,
                }) => (
                  <AlertDialogSoftSkills
                    key={triggerTitle}
                    triggerTitle={triggerTitle}
                    arTriggerTitle={arTriggerTitle}
                    description={description}
                    arDescription={arDescription}
                    icon={icon}
                    direction={direction}
                  />
                )
              )}
          </div>
        </div>

        {/* العناصر باتجاه الأسفل */}
        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-4">
          {softSkillsData
            .filter(({ direction }) => direction === "bottom")
            .map(
              ({
                triggerTitle,
                arTriggerTitle,
                description,
                arDescription,
                direction,
                icon,
              }) => (
                <AlertDialogSoftSkills
                  key={triggerTitle}
                  triggerTitle={triggerTitle}
                  arTriggerTitle={arTriggerTitle}
                  description={description}
                  arDescription={arDescription}
                  icon={icon}
                  direction={direction}
                />
              )
            )}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
