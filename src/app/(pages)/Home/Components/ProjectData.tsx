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
import { Iproject } from "@/interfaces";
import { useLanguage } from "@/providers/LanguageContextProvider";
import { motion } from "framer-motion";

interface Iprops {
  data: Iproject[];
  isLoading: boolean;
  error: string | null;
}

const ProjectData: React.FC<Iprops> = ({ data, isLoading, error }) => {
  const { lang } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {isLoading && (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
          <Skeleton className="w-[300px] md:w-[420px] h-[250px] mx-auto rounded-2xl" />
          <Skeleton className="w-[300px] md:w-[420px] h-[250px] mx-auto rounded-2xl" />
          <Skeleton className="w-[300px] md:w-[420px] h-[250px] mx-auto rounded-2xl" />
        </div>
      )}

      {error && <p className="text-center text-red-500">{error}</p>}

      {!isLoading && !error && data && data.length > 0 && (
        <div>
          <Carousel>
            <CarouselContent>
              {data.map((project) => (
                <CarouselItem key={project.$id}>
                  <ProjectCard
                    $id={project.$id}
                    title={project.title}
                    imageUrl={project.image}
                    demoLink={project.DemoLink}
                    githubLink={project.githubLink}
                    categories={project.categories}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute mt-10 left-[50%] md:relative md:mt-0 md:left-0 md:-top-32">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>

          <h2
            className={`mt-1 md:mt-4 text-[10px] md:text-lg ${
              lang == "English" ? "text-left" : "text-right"
            }`}
          >
            {lang == "English" ? "Total Projects Is : " : "مجموع المشاريع :"}
            <span className="text-primary text-md md:text-lg font-bold mx-1">
              {data.length}
            </span>
          </h2>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectData;
