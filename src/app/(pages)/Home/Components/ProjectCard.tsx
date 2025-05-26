"use client";

import { Card } from "@/components/ui/card";
import { Iproject } from "@/interfaces";
import { motion } from "framer-motion";
import { Eye, Github, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProjectCard({
  $id,
  title,
  DemoLink,
  githubLink,
  image,
  Technologies,
}: Iproject) {
  return (
    <motion.div
      className="relative group rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="w-full h-[250px] md:h-[330px] relative transform transition-transform duration-300 hover:scale-105">
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-fill transition-transform duration-300 group-hover:scale-110 group-hover:brightness-[35%]"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-green-800/80 via-green-700/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* Animated Content */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-end p-8 text-white z-20 opacity-0 group-hover:opacity-100"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.h3
                className="text-md md:text-xl font-bold mb-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {title}
              </motion.h3>

              <motion.div
                className="text-sm text-gray-200 mb-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
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
                    href={DemoLink}
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
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {Technologies?.slice(0, 4).map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-white/20 rounded-full backdrop-blur-sm"
                  >
                    {tech}
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
