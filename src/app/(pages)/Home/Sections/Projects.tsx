"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/providers/LanguageContextProvider";
import Categories from "../Components/Categories";
import ProjectData from "../Components/ProjectData";
import { getCategories, getData } from "@/utils/Appwrite";
import { ICategories, Iproject } from "@/interfaces";

const Projects = () => {
  const { lang } = useLanguage();
  const [data, setData] = useState<Iproject[]>([]);
  const [categoriesData, setCategoriesData] = useState<ICategories[]>([]);
  const [filteringData, setFilteringData] = useState<Iproject[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [projects, projectCategories] = await Promise.all([
          getData(),
          getCategories(),
        ]);

        if (projects) {
          setData(projects as unknown as Iproject[]);
          setFilteringData(projects as unknown as Iproject[]);
        } else {
          setError("Failed to fetch projects");
        }

        setCategoriesData([...projectCategories]);
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="section" id="Projects">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sectionTitle"
      >
        {lang === "English" ? "Projects" : "المشاريع"}
      </motion.div>

      <div className="container flex flex-col gap-10">
        <Categories
          CategoriesData={categoriesData}
          isLoading={isLoading}
          error={error}
          onFilter={setFilteringData}
          data={data}
        />
        <ProjectData data={filteringData} isLoading={isLoading} error={error} />
      </div>
    </section>
  );
};

export default Projects;