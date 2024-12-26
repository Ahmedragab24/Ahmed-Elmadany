"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Eye, Github, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
  $id?: string;
  title: string;
  demoLink: string;
  githubLink: string;
  imageUrl: string;
  categories: [{ name: string }] | undefined;
}

export function ProjectCard({
  $id,
  title,
  demoLink,
  githubLink,
  imageUrl,
  categories,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group rounded-xl overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)} 
      onTouchEnd={() => setIsHovered(false)} 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="w-auto h-[280px] relative transform transition-transform duration-300 hover:scale-110">
        <div className="relative w-full h-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-fill transition-transform duration-300 group-hover:scale-110 group-hover:brightness-[35%]"
          />

          {/* Gradient overlay that appears on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-green-800/80 via-green-700/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity group-focus:opacity-100 duration-300">
            {/* Content that slides up on hover */}
            <motion.div
              className="relative flex flex-col justify-end h-full p-8 text-white transform z-20"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 100, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.h3
                className="text-md md:text-xl font-bold mb-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {title}
              </motion.h3>

              <motion.div
                className="text-sm text-gray-200 mb-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="flex items-center gap-4">
                  <Link
                    className="flex justify-center items-center gap-2 hover:text-primary duration-200"
                    href={githubLink}
                    target="_blank"
                  >
                    <Github size={16} /> Github
                  </Link>
                  <Link
                    className="flex justify-center items-center gap-2 hover:text-primary duration-200"
                    href={demoLink}
                    target="_blank"
                  >
                    <Eye size={16} />
                    Demo
                  </Link>
                  <Link
                    className="flex justify-center items-center gap-2 hover:text-primary duration-200"
                    href={`/${$id}`}
                    target="_blank"
                  >
                    <Info size={16} />
                    More Info
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                {categories?.map(({ name }, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-white/20 rounded-full backdrop-blur-sm"
                  >
                    {name}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
