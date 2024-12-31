"use client";

import { Button } from "@/components/ui/button";
import { EducationData } from "@/constants";
import { useLanguage } from "@/providers/LanguageContextProvider";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import { StepConnector, Typography, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { motion } from "framer-motion";
import { CircleCheckBig } from "lucide-react";
import React from "react";

const Education = () => {
  const { lang } = useLanguage();
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const iconMap = {
    SchoolIcon,
    CodeIcon,
  };

  return (
    <section className="section" id="Education">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sectionTitle"
        >
          {lang == "English" ? "Education" : "التعليم"}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ width: "100%" }}>
            <Stepper
              activeStep={2}
              alternativeLabel={!isSmallScreen}
              connector={<StepConnector className="hidden md:block"/>}
              orientation={isSmallScreen ? "vertical" : "horizontal"}
              className="flex flex-col md:flex-row gap-6 md:gap-0"
            >
              {EducationData.map(
                ({
                  title,
                  history,
                  description,
                  icon,
                  arabicTitle,
                  arabicDescription,
                  arabicHistory,
                }) => (
                  <Step key={title} className="flex flex-col items-center">
                    <StepLabel icon={<CircleCheckBig className="text-primary"/>} className="mb-2">
                      <div className="flex justify-center items-center">
                        <span>
                          {React.createElement(
                            iconMap[icon as keyof typeof iconMap],
                            {
                              className:
                                "text:lg md:text-xl font-bold text-primary",
                            }
                          )}
                        </span>
                        <span className="ml-2 text-lg md:text-xl font-bold text-primary">
                          {lang == "English" ? title : arabicTitle}
                        </span>
                      </div>
                    </StepLabel>
                    <Typography className="text-center text-[.75rem] font-light mt-1">
                      {lang == "English" ? history : arabicHistory}
                    </Typography>
                    <Typography className="md:w-[70%] mx-auto text-center text-sm font-light text-muted-foreground mt-4">
                      {lang == "English" ? description : arabicDescription}
                    </Typography>
                    <div className="flex justify-center mt-2">
                      <Button variant={"link"}>
                        {lang == "English" ? "View certificate" : "عرض الشهادة"}
                      </Button>
                    </div>
                  </Step>
                )
              )}
            </Stepper>
          </Box>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
