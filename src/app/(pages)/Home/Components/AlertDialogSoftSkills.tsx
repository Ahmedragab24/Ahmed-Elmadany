"use client";

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
import { SoftSkills } from "@/interfaces";
import { useLanguage } from "@/providers/LanguageContextProvider";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import React, { memo, useMemo } from "react";

type IconType = keyof typeof LucideIcons;

// تحسين الأداء
const viewportConfig = { once: true, margin: "-50px" };

// حساب الاتجاهات مسبقاً
const directionConfig = {
  top: { numDir: -100, numDuration: 0.7, whileInView: "y" as const },
  left: { numDir: -100, numDuration: 0.8, whileInView: "x" as const },
  right: { numDir: 100, numDuration: 1, whileInView: "x" as const },
  bottom: { numDir: -100, numDuration: 0.9, whileInView: "y" as const },
};

const AlertDialogSoftSkills = memo(
  ({
    triggerTitle,
    arTriggerTitle,
    icon,
    description,
    arDescription,
    direction,
  }: SoftSkills) => {
    const { lang } = useLanguage();

    // استخدام useMemo بدلاً من useEffect + useState
    const { numDir, numDuration, whileInView } = useMemo(() => {
      return directionConfig[direction] || directionConfig.top;
    }, [direction]);

    // اختيار الأيقونة المناسبة من مكتبة Lucide
    const IconComponent = useMemo(() => {
      const Icon = LucideIcons[icon as IconType];
      if (Icon && typeof Icon === "function") {
        return Icon as React.ElementType;
      }
      return LucideIcons.HelpCircle;
    }, [icon]);

    // تخزين النصوص مؤقتاً
    const isEnglish = lang === "English";
    const displayTitle = isEnglish ? triggerTitle : arTriggerTitle;
    const displayDescription = isEnglish ? description : arDescription;

    return (
      <motion.div
        className="sm:space-x-11"
        initial={{ opacity: 0, [whileInView]: numDir }}
        whileInView={{ opacity: 1, [whileInView]: 0 }}
        viewport={viewportConfig}
        transition={{ duration: numDuration }}
      >
        <AlertDialog>
          <AlertDialogTrigger className="bg-secondary hover:bg-primary py-3 px-8 rounded-full group">
            <IconComponent className="w-6 h-6 inline-block mr-2 text-primary group-hover:text-foreground" />
            {displayTitle}
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl md:text-2xl text-primary">
                <IconComponent className="w-6 h-6 inline-block mr-2" />
                {displayTitle}
              </AlertDialogTitle>
              <AlertDialogDescription className="text-md">
                {displayDescription}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>
                {isEnglish ? "Cancel" : "ألغاء"}
              </AlertDialogCancel>
              <AlertDialogAction>
                {isEnglish ? "Continue" : "حسناً"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </motion.div>
    );
  }
);

AlertDialogSoftSkills.displayName = "AlertDialogSoftSkills";

export default AlertDialogSoftSkills;
