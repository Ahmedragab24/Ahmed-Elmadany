"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ICategories, Iproject } from "@/interfaces";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface CategoriesProps {
  CategoriesData: ICategories[];
  isLoading: boolean;
  error: string | null;
  onFilter: (filteredData: Iproject[]) => void;
  data: Iproject[];
}

const Categories = ({
  CategoriesData,
  isLoading,
  error,
  onFilter,
  data,
}: CategoriesProps) => {
  const [active, setActive] = useState<string>("All");

  const handleFilter = (category: string) => {
    setActive(category);

    if (category === "All") {
      onFilter(data);
    } else {
      const filteredData = data.filter((project) =>
        project.categories?.some((cat) => cat.name === category)
      );
      onFilter(filteredData);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {isLoading && (
        <ul className="flex flex-wrap justify-center gap-x-4">
          {[...Array(4)].map((_, index) => (
            <li key={index}>
              <Skeleton className="h-10 w-20 md:w-28" />
            </li>
          ))}
        </ul>
      )}

      {error && <p className="text-center text-red-500">{error}</p>}

      {!isLoading && !error && CategoriesData && (
        <ul className="flex flex-wrap justify-center gap-4">
          <li>
            <Button
              variant={"All" === active ? "default" : "secondary"}
              size="sm"
              className="text-xs md:text-sm"
              onClick={() => handleFilter("All")}
            >
              All
            </Button>
          </li>
          {CategoriesData.map((category) => (
            <li key={category.name}>
              <Button
                variant={category.name === active ? "default" : "secondary"}
                size="sm"
                className="text-xs md:text-sm"
                onClick={() => handleFilter(category.name)}
              >
                {category.name}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default Categories;
