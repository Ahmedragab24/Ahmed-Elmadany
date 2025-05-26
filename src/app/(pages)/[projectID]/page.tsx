"use client";

import ProjectData from "../Home/Components/ProjectData";
import { Button } from "@/components/ui/button";
import { Iproject } from "@/interfaces";
import { getData, getProjectById } from "@/lib/appwrite/api";
import { useLanguage } from "@/providers/LanguageContextProvider";
import { Code, Eye, Loader, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProjectDetails = () => {
  const { projectID } = useParams();
  const [project, setProject] = useState<Iproject | null>(null);
  const [allProjects, setAllProjects] = useState<Iproject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { lang } = useLanguage();

  useEffect(() => {
    const fetchProjectData = async () => {
      setIsLoading(true);
      try {
        const [fetchedProject, fetchedAllProjects] = await Promise.all([
          getProjectById(String(projectID)),
          getData(),
        ]);
        if (fetchedProject) {
          setProject({
            $id: fetchedProject.$id,
            title: fetchedProject.title,
            description: fetchedProject.description,
            image: fetchedProject.image,
            DemoLink: fetchedProject.DemoLink,
            githubLink: fetchedProject.githubLink,
            Technologies: fetchedProject.Technologies,
            categories: fetchedProject.categories,
          });
        }
        if (fetchedAllProjects) {
          setAllProjects(
            fetchedAllProjects.map((project) => ({
              $id: project.$id,
              title: project.title,
              description: project.description,
              image: project.image,
              DemoLink: project.DemoLink,
              githubLink: project.githubLink,
              Technologies: project.Technologies,
              categories: project.categories,
            }))
          );
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unexpected error occurred"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjectData();
  }, [projectID]);

  // Loading UI
  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-primary">
        <Loader className="animate-spin w-12 h-12 mb-4" />
        <span className="text-xl font-medium">Loading project...</span>
      </div>
    );
  }

  // Error UI
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-600 text-xl">
        {error}
      </div>
    );
  }

  // Not Found UI
  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen text-muted-foreground text-xl">
        {lang === "English" ? "Project not found." : "لا يوجد مشروع لعرضه."}
      </div>
    );
  }

  return (
    <main className="section border-none" suppressHydrationWarning={true}>
      {/* Project Details Section */}
      <section className="container mt-12 mb-28">
        <div className="flex flex-col-reverse md:flex-row gap-12 items-center justify-between">
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h2 className="sectionTitle !mb-2 text-center md:text-left">
              {project.title}
            </h2>
            <p className="text-sm md:text-base leading-6 text-muted-foreground">
              {project.description}
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {project.githubLink && (
                <Link href={project.githubLink} target="_blank">
                  <Button variant="default">
                    Code View <Code size={16} className="ml-2" />
                  </Button>
                </Link>
              )}
              {project.DemoLink && (
                <Link href={project.DemoLink} target="_blank">
                  <Button variant="outline">
                    View Demo <Eye size={16} className="ml-2" />
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Image and Tech Stack */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 items-center">
            <div className="rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
              <Image
                src={project.image || "/images/default.jpg"}
                alt={project.title}
                width={620}
                height={350}
                className="object-cover w-full h-[350px] rounded-xl"
              />
            </div>

            {/* Technologies */}
            {project.Technologies && (
              <ul className="flex flex-wrap justify-center gap-2">
                {project.Technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="px-3 py-1 bg-primary/30 text-sm rounded-full backdrop-blur-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="container">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          {lang === "English" ? "Other Projects" : "مشاريع أخرى"} <Minus />
        </h3>
        <ProjectData data={allProjects} error={error} isLoading={isLoading} />
      </section>
    </main>
  );
};

export default ProjectDetails;
