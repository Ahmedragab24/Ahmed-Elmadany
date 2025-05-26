"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { memo } from "react";

// تحسين الأداء باستخدام GPU
const rotationStyle = {
  willChange: "transform",
};

const AnimatedAvatar = memo(() => {
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      <motion.div
        className="absolute inset-0 rounded-full bg-secondary/80 border-4 border-dashed border-primary shadow-md"
        style={rotationStyle}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      />

      <div className="relative w-full h-full pt-2 rounded-full overflow-hidden shadow-lg z-10">
        <Image
          src="/WhatsApp Image 2025-12-05 at 14.47.35_d247f30b.png"
          alt="Avatar"
          width={500}
          height={500}
          loading="lazy"
          priority={false}
          className="object-cover"
        />
      </div>
    </div>
  );
});

AnimatedAvatar.displayName = "AnimatedAvatar";

export default AnimatedAvatar;
