"use client";

import { ProjectCard } from "./ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import type { Iproject } from "@/interfaces";
import { useLanguage } from "@/providers/LanguageContextProvider";
import { motion } from "framer-motion";
import type React from "react";

interface Iprops {
  data: Iproject[];
  isLoading: boolean;
  error: string | null;
}

const ProjectData: React.FC<Iprops> = ({ data, isLoading, error }) => {
  const { lang } = useLanguage();
  const isRTL = lang !== "English";

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full md:max-w-7xl"
    >
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Show at least one skeleton on all screen sizes */}
          <Skeleton className="w-full h-[200px] md:h-[250px] rounded-2xl" />
          <Skeleton className="w-full h-[200px] md:h-[250px] rounded-2xl md:block hidden" />
          <Skeleton className="w-full h-[200px] md:h-[250px] rounded-2xl lg:block hidden" />
        </div>
      )}

      {error && (
        <div className="w-full py-6 md:py-10 text-center">
          <p className="text-red-500 font-medium">{error}</p>
        </div>
      )}

      {!isLoading && !error && data && data.length > 0 && (
        <div className="relative">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {data.map((project) => (
                <CarouselItem
                  key={project.$id}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2"
                >
                  <div className="h-full p-1">
                    <ProjectCard
                      $id={project.$id}
                      title={project.title}
                      image={project.image}
                      description={project.description}
                      DemoLink={project.DemoLink}
                      githubLink={project.githubLink}
                      categories={project.categories}
                      Technologies={project.Technologies}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-end mx-4 mt-6 md:mt-6 gap-2">
              <CarouselPrevious
                className={`static h-8 w-8 ${
                  isRTL ? "order-last" : "order-first"
                }`}
              />
              <CarouselNext
                className={`static h-8 w-8 ${
                  isRTL ? "order-first" : "order-last"
                }`}
              />
            </div>
          </Carousel>

          <div className={` -mt-10 mx-2 ${isRTL ? "text-right" : "text-left"}`}>
            <h2 className="text-sm md:text-lg font-medium">
              {isRTL ? "مجموع المشاريع: " : "Total Projects: "}
              <span className="text-primary font-bold">{data.length}</span>
            </h2>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectData;
