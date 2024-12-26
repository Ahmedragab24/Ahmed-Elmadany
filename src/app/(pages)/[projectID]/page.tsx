"use client";

import ProjectData from "../Home/Components/ProjectData";
import { Button } from "@/components/ui/button";
import { Iproject } from "@/interfaces";
import { getData, getProjectById } from "@/utils/Appwrite";
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

  // Fetch project and all projects data
  useEffect(() => {
    const fetchProjectData = async () => {
      setIsLoading(true);
      try {
        const [fetchedProject, fetchedAllProjects] = await Promise.all([
          getProjectById(String(projectID)),
          getData(),
        ]);
        setProject(fetchedProject as unknown as Iproject);
        setAllProjects(fetchedAllProjects as unknown as Iproject[]);
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

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-primary">
        <Loader className="animate-spin w-12 h-12" />
        <span className="ml-4 text-2xl font-semibold">Loading...</span>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-600 text-2xl">
        {error}
      </div>
    );
  }

  // Empty state
  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-2xl">
        Project not found
      </div>
    );
  }

  const { title, description, image, DemoLink, githubLink } = project;

  return (
    <main className="section border-none">
      {/* Project Details Section */}
      <section className="container mt-10 mb-28">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-10">
          {/* Project Information */}
          <div className="w-full md:w-[50%] flex flex-col gap-y-8">
            <h2 className="sectionTitle !m-auto">{title}</h2>
            <p className="text-sm md:text-[17px] leading-6 text-muted-foreground">
              {description}
            </p>
            <div className="flex gap-x-5 mx-auto">
              <Link href={githubLink} target="_blank">
                <Button>
                  Code View <Code className="ms-1" size={15} />
                </Button>
              </Link>
              <Link href={DemoLink} target="_blank">
                <Button>
                  View Demo <Eye className="ms-1" size={15} />
                </Button>
              </Link>
            </div>
          </div>

          {/* Project Image */}
          <div className="shadow-sm shadow-primary rounded-xl overflow-hidden">
            <Image
              width={620}
              height={350}
              loading="lazy"
              src={image}
              alt={title}
              className="w-full md:w-[620px] h-[350px] rounded-xl duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Other Projects Carousel */}

      <section className="container">
        <h3 className="m-2 flex items-center gap-2">
          Another Projects <Minus />
        </h3>
        <ProjectData data={allProjects} error={error} isLoading={isLoading} />
      </section>
    </main>
  );
};

export default ProjectDetails;
