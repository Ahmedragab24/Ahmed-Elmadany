"use client";

import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import { StepConnector, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { EducationData } from "@/constants";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/LanguageContextProvider";

const Education = () => {
  const { lang } = useLanguage();

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
              activeStep={3}
              alternativeLabel
              connector={<StepConnector />}
              orientation={"horizontal"}
              className="!flex !md:flex-col"
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
                    <StepLabel className="mb-2">
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
