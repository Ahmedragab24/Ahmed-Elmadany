"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Iproject } from "@/interfaces";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

interface Iprops {
  data: Iproject[];
  isLoading: boolean;
  error: string | null;
}

const ProjectData = ({ data, isLoading, error }: Iprops) => {
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

      {!isLoading && !error && data && (
        <Carousel>
          <CarouselContent>
            {data.map((project) => (
              <CarouselItem key={project.$id}>
                <ProjectCard
                  title={project.title}
                  imageUrl={project.image}
                  demoLink={project.DemoLink}
                  githubLink={project.githubLink}
                  categories={project.categories}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </motion.div>
  );
};

export default ProjectData;
