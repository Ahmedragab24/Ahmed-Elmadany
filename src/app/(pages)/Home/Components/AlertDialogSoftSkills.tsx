"use client";

import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useLanguage } from "@/providers/LanguageContextProvider";
import { motion } from "framer-motion";
import { SoftSkills } from "@/interfaces";
import * as LucideIcons from "lucide-react";
type IconType = keyof typeof LucideIcons;

const AlertDialogSoftSkills = ({
  triggerTitle,
  arTriggerTitle,
  icon,
  description,
  arDescription,
  direction,
}: SoftSkills) => {
  const [numDir, setNumDir] = useState(0);
  const [numDuration, setNumDuration] = useState(0);
  const [whileInView, setWhileInView] = useState<"y" | "x">("y");
  const { lang } = useLanguage();

  // اختيار الأيقونة المناسبة من مكتبة Lucide
  const IconComponent =
    (LucideIcons[icon as IconType] as React.ElementType) ||
    LucideIcons.HelpCircle;

  useEffect(() => {
    if (direction === "top") {
      setNumDir(-100);
      setNumDuration(0.7);
      setWhileInView("y");
    }
    if (direction === "left") {
      setNumDir(-100);
      setNumDuration(0.8);
      setWhileInView("x");
    }
    if (direction === "right") {
      setNumDir(100);
      setNumDuration(1);
      setWhileInView("x");
    }
    if (direction === "bottom") {
      setNumDir(-100);
      setNumDuration(0.9);
      setWhileInView("y");
    }
  }, [direction]);

  return (
    <motion.div
      className="sm:space-x-11"
      initial={{ opacity: 0, [whileInView]: numDir }}
      whileInView={{ opacity: 1, [whileInView]: 0 }}
      transition={{ duration: numDuration }}
    >
      <AlertDialog>
        <AlertDialogTrigger className="bg-secondary hover:bg-primary py-3 px-8 rounded-full group">
          <IconComponent className="w-6 h-6 inline-block mr-2 text-primary group-hover:text-foreground" />
          {lang === "English" ? triggerTitle : arTriggerTitle}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl md:text-2xl text-primary">
              <IconComponent className="w-6 h-6 inline-block mr-2" />
              {lang === "English" ? triggerTitle : arTriggerTitle}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-md">
              {lang === "English" ? description : arDescription}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>
              {lang === "English" ? "Cancel" : "ألغاء"}
            </AlertDialogCancel>
            <AlertDialogAction>
              {lang === "English" ? "Continue" : "حسناً"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </motion.div>
  );
};

export default AlertDialogSoftSkills;
