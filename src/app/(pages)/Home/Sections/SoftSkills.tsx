"use client";

import AlertDialogSoftSkills from "../Components/AlertDialogSoftSkills";
import AnimatedAvatar from "../Components/Avatar";
import { softSkillsData } from "@/constants";
import { useLanguage } from "@/providers/LanguageContextProvider";
import { motion } from "framer-motion";
import { BookOpenText } from "lucide-react";
import React, { memo, useMemo } from "react";

// تحسين الأداء
const viewportConfig = { once: true, margin: "-100px" };

const SoftSkills = memo(() => {
  const { lang } = useLanguage();

  // تخزين الترجمات مؤقتاً
  const translations = useMemo(
    () => ({
      soft: lang === "English" ? "Soft" : "الشخصية",
      skills: lang === "English" ? "Skills" : "المهارات",
    }),
    [lang]
  );

  // تصفية البيانات مسبقاً لتجنب إعادة الحساب
  const filteredData = useMemo(
    () => ({
      top: softSkillsData.filter(({ direction }) => direction === "top"),
      left: softSkillsData.filter(({ direction }) => direction === "left"),
      right: softSkillsData.filter(({ direction }) => direction === "right"),
      bottom: softSkillsData.filter(({ direction }) => direction === "bottom"),
    }),
    []
  );

  return (
    <section className="section" id="SoftSkills">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.5 }}
        className="sectionTitle flex justify-center items-center gap-2"
      >
        <h2>{translations.soft}</h2>
        <BookOpenText className="text-yellow-500" />
        <h2>{translations.skills}</h2>
      </motion.div>

      <div className="flex flex-col w-full max-w-4xl mx-auto gap-4 lg:gap-14">
        {/* العناصر باتجاه الأعلى */}
        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-4">
          {filteredData.top.map(
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
            {filteredData.left.map(
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
            viewport={viewportConfig}
            transition={{ duration: 0.7 }}
            className="my-10 lg:m-2"
          >
            <AnimatedAvatar />
          </motion.div>

          {/* العناصر باتجاه اليمين */}
          <div className="flex flex-col flex-wrap justify-center items-center gap-4 lg:gap-14">
            {filteredData.right.map(
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
          {filteredData.bottom.map(
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
});

SoftSkills.displayName = "SoftSkills";

export default SoftSkills;
