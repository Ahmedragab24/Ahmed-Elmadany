"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AnimatedAvatar = () => {
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      <motion.div
        className="absolute inset-0 rounded-full bg-secondary border-4 border-dashed border-primary shadow-md"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      ></motion.div>

      <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg z-10">
        <Image
          src="https://res.cloudinary.com/dk4yvlwr0/image/upload/v1723562110/me2_xnxgvr.png"
          alt="Avatar"
          width={500}
          height={500}
          loading="lazy"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default AnimatedAvatar;
