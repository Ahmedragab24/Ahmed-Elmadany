"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialogSh";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabsSh";
import { EducationData } from "@/constants";
import type { Certificates } from "@/interfaces";
import { getCertificates } from "@/lib/appwrite/api";
import { useLanguage } from "@/providers/LanguageContextProvider";
import { useMediaQuery } from "@mui/material";
import {
  Box,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import {
  Award,
  CircleCheckBig,
  Code,
  Download,
  ExternalLink,
  School,
  ChevronLeft,
  ChevronRight,
  Calendar,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";

const Education = () => {
  const { lang } = useLanguage();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [certificatesData, setCertificatesData] = useState<Certificates[]>([]);
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificates | null>(null);
  const [activeTab, setActiveTab] = useState("education");

  // Embla carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const iconMap = {
    SchoolIcon: School,
    CodeIcon: Code,
  };

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await getCertificates();
        setCertificatesData(response);
      } catch (error) {
        console.error("Error fetching certificates:", error);
      }
    };

    fetchCertificates();
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Function to convert Google Drive link to embedded viewer URL
  const getGoogleDriveEmbedUrl = (url: string) => {
    // Check if it's a Google Drive URL
    if (url.includes("drive.google.com")) {
      // Extract the file ID from the URL
      const fileIdMatch = url.match(
        /\/d\/(.+?)\/|id=(.+?)&|\/file\/d\/(.+?)\//
      );
      if (fileIdMatch) {
        // Find the first non-undefined capture group
        const fileId = fileIdMatch[1] || fileIdMatch[2] || fileIdMatch[3];
        return `https://drive.google.com/file/d/${fileId}/preview`;
      }
    }
    return url;
  };

  // Function to check if URL is a PDF (either direct or Google Drive)
  const isPdfUrl = (url: string) => {
    return url.endsWith(".pdf") || url.includes("drive.google.com");
  };

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="section py-16" id="Education">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12"
        >
          <Badge variant="outline" className="mb-3">
            <GraduationCap className="h-3.5 w-3.5 mr-1" />
            {lang === "English" ? "My Journey" : "رحلتي"}
          </Badge>
          <h2 className="sectionTitle">
            {lang === "English"
              ? "Education & Certificates"
              : "التعليم والشهادات"}
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl -mt-8">
            {lang === "English"
              ? "My academic journey and professional certifications that have shaped my career path and expertise."
              : "رحلتي الأكاديمية والشهادات المهنية التي شكلت مسار حياتي المهنية وخبرتي."}
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="education" className="flex items-center gap-2">
              <School className="h-4 w-4" />
              {lang === "English" ? "Education" : "التعليم"}
            </TabsTrigger>
            <TabsTrigger
              value="certificates"
              className="flex items-center gap-2"
            >
              <Award className="h-4 w-4" />
              {lang === "English" ? "Certificates" : "الشهادات"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="education" className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ width: "100%" }}>
                <Stepper
                  activeStep={2}
                  alternativeLabel={!isSmallScreen}
                  connector={<StepConnector className="hidden md:block" />}
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
                        <StepLabel
                          icon={<CircleCheckBig className="text-primary" />}
                          className="mb-2"
                        >
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
                        <div className="flex items-center gap-1 text-center text-[.75rem] font-light mt-1">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <Typography>
                            {lang == "English" ? history : arabicHistory}
                          </Typography>
                        </div>
                        <Typography className="md:w-[70%] mx-auto text-center text-sm font-light text-muted-foreground mt-4">
                          {lang == "English" ? description : arabicDescription}
                        </Typography>
                        <div className="flex justify-center mt-2">
                          <Button variant={"link"}>
                            {lang == "English"
                              ? "View certificate"
                              : "عرض الشهادة"}
                          </Button>
                        </div>
                      </Step>
                    )
                  )}
                </Stepper>
              </Box>
            </motion.div>
          </TabsContent>

          <TabsContent value="certificates" className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold text-center mb-2">
                {lang === "English"
                  ? "Professional Certificates"
                  : "الشهادات المهنية"}
              </h3>
              <p className="text-center text-muted-foreground mb-8">
                {lang === "English"
                  ? "Click on any certificate to view in full size"
                  : "انقر على أي شهادة لعرضها بالحجم الكامل"}
              </p>
            </motion.div>

            <div className="relative">
              <div className="overflow-hidden py-10" ref={emblaRef}>
                <div className="flex">
                  {certificatesData.length > 0 ? (
                    certificatesData.map((certificate, index) => (
                      <div
                        key={certificate.name}
                        className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4 first:pl-0"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ y: -5, transition: { duration: 0.2 } }}
                          className="pr-4"
                        >
                          <Card className="h-[320px] bg-secondary/60 relative overflow-hidden border hover:border-primary/50 transition-all duration-300 hover:shadow-md">
                            <CardHeader>
                              <div className="flex items-center gap-2">
                                <Award className="h-5 w-5 text-primary" />
                                <CardTitle className="text-lg line-clamp-1">
                                  {certificate.name}
                                </CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div
                                className="relative overflow-hidden  rounded-md cursor-pointer group"
                                onClick={() =>
                                  setSelectedCertificate(certificate)
                                }
                              >
                                <div className="aspect-[3/2] !overflow-hidden bg-muted/50">
                                  {isPdfUrl(certificate.certificate || "") ? (
                                    <iframe
                                      src={getGoogleDriveEmbedUrl(
                                        certificate.certificate
                                      )}
                                      className="w-full h-full border-0 rounded "
                                      allow="autoplay"
                                      allowFullScreen
                                    ></iframe>
                                  ) : (
                                    <Image
                                      width={400}
                                      height={300}
                                      priority
                                      quality={100}
                                      src={
                                        certificate.certificate ||
                                        "/placeholder.svg"
                                      }
                                      alt={certificate.name}
                                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                    />
                                  )}
                                </div>
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  <div className="text-white text-center p-4">
                                    <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                                    <p className="text-sm">
                                      {lang === "English"
                                        ? "Click to view"
                                        : "انقر للعرض"}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </div>
                    ))
                  ) : (
                    <div className="flex-[0_0_100%] min-w-0">
                      <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center p-8 border border-dashed rounded-lg"
                      >
                        <Award className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">
                          {lang === "English"
                            ? "No certificates available at the moment."
                            : "لا توجد شهادات متاحة في الوقت الحالي."}
                        </p>
                      </motion.div>
                    </div>
                  )}
                </div>
              </div>

              {certificatesData.length > 0 && (
                <div className="flex justify-center  gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={scrollPrev}
                    disabled={!canScrollPrev}
                    className="rounded-full border-primary"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={scrollNext}
                    disabled={!canScrollNext}
                    className="rounded-full border-primary"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>

        <Dialog
          open={!!selectedCertificate}
          onOpenChange={(open: boolean) =>
            !open && setSelectedCertificate(null)
          }
        >
          <DialogContent className="max-w-4xl w-[90vw] h-[90vh]">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                {selectedCertificate?.name}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-2 overflow-hidden rounded-md bg-muted/30 p-1 h-[calc(90vh-180px)]">
              {selectedCertificate?.certificate &&
              isPdfUrl(selectedCertificate.certificate) ? (
                <iframe
                  src={getGoogleDriveEmbedUrl(selectedCertificate.certificate)}
                  className="w-full h-full border-0 rounded"
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              ) : (
                <Image
                  width={700}
                  height={500}
                  priority
                  quality={100}
                  src={selectedCertificate?.certificate || "/placeholder.svg"}
                  alt={selectedCertificate?.name || "Certificate"}
                  className="w-full h-full object-contain rounded"
                />
              )}
            </div>
            <div className="flex justify-between items-center mt-4">
              {selectedCertificate?.certificate ? (
                <Button asChild>
                  <a
                    href={selectedCertificate.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    {lang === "English"
                      ? "Download Certificate"
                      : "تحميل الشهادة"}
                  </a>
                </Button>
              ) : (
                <div></div>
              )}
              <DialogClose asChild>
                <Button variant="outline">
                  {lang === "English" ? "Close" : "إغلاق"}
                </Button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Education;
