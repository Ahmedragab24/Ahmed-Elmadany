"use client";

import { Button } from "@/components/ui/button";
import CustomTypewriter from "@/hooks/CustomTypewriter";
import type { About } from "@/interfaces";
import { useLanguage } from "@/providers/LanguageContextProvider";
import { motion } from "framer-motion";
import {
  BugOff,
  Codesandbox,
  CodeXml,
  Facebook,
  Github,
  Linkedin,
  Mail,
  MessageCircleMore,
  Minus,
  NotepadText,
  Send,
} from "lucide-react";
import Link from "next/link";
import { JSX, memo, useMemo } from "react";

const iconsMap: Record<string, JSX.Element> = {
  Facebook: <Facebook />,
  Github: <Github />,
  Linkedin: <Linkedin />,
  Email: <Mail />,
  Telegram: <Send />,
  MessageCircleMore: <MessageCircleMore />,
};

const SocialIcon = memo(({ name, link }: { name: string; link: string }) => {
  const Icon = iconsMap[name];
  if (!Icon) return null;

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground transition hover:text-primary hover:-translate-y-0.5"
    >
      {Icon}
    </Link>
  );
});
SocialIcon.displayName = "SocialIcon";

const ProfileBlob = memo(() => (
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className="mt-1 md:mt-2 z-20 sm:w-80 md:w-[50rem] lg:w-[80rem] sm:mx-auto"
  >
    <div className="relative w-[255px] sm:w-[350px] lg:w-[450px] aspect-square mx-auto">
      {/* First icon with orbital floating animation */}
      <motion.div
        className="absolute top-16 left-4 sm:left-8 lg:left-14 z-30 text-primary"
        animate={{
          x: [0, 10, 0, -10, 0],
          y: [0, -5, -10, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeOut",
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="p-4 bg-green-200 rounded-full shadow-md border border-primary"
        >
          <Codesandbox className="text-yellow-600 w-4 h-4 md:w-8 md:h-8" />
        </motion.div>
      </motion.div>

      {/* Second icon with bounce and pulse animation */}
      <motion.div
        className="absolute top-28 -right-4 sm:-right-8 lg:right-10 z-30 text-primary"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <motion.div
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeOut",
            times: [0, 0.4, 1],
          }}
          className="p-4 bg-green-200 rounded-full shadow-md border border-primary"
        >
          <motion.div
            animate={{ rotate: [-10, 10, -10] }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <CodeXml className="text-yellow-600 w-4 h-4 md:w-8 md:h-8" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Third icon with wave and flip animation */}
      <motion.div
        className="absolute bottom-14 -left-4 sm:-left-8 lg:left-4 z-30 text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          animate={{
            x: [0, 10, 0, -10, 0],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: [0.45, 0.05, 0.55, 0.95],
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
          className="p-4 bg-green-200 rounded-full shadow-md border border-primary transition-colors duration-300"
        >
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <BugOff className="text-yellow-600 w-4 h-4 md:w-8 md:h-8" />
          </motion.div>
        </motion.div>
      </motion.div>

      <svg
        viewBox="0 0 550 591"
        xmlns="http://www.w3.org/2000/svg"
        className="home--blob fill-primary w-full"
      >
        <mask id="maskBlob" mask-type="alpha">
          <path
            d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
              170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
              447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
              587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
              438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"
          />
        </mask>
        <g mask="url(#maskBlob)">
          <path
            d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
              170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
              447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
              587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
              438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"
          />
          <rect x="37" width="476" height="630" fill="url(#pattern0)" />
        </g>
        <rect x="37" width="476" height="300" fill="url(#pattern1)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              href="#imageBlob"
              transform="matrix(0.00143057 0 0 0.00108108 0.0404062 0)"
            />
          </pattern>
          <pattern
            id="pattern1"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              href="#imageBlob"
              transform="matrix(0.00143057 0 0 0.00226984 0.0404062 0)"
            />
          </pattern>
          <image
            id="imageBlob"
            width="640"
            height="940"
            href="https://res.cloudinary.com/dk4yvlwr0/image/upload/v1723554998/me_vdbxlz.png"
          />
        </defs>
      </svg>
    </div>
  </motion.div>
));
ProfileBlob.displayName = "ProfileBlob";

function ClientHero({ aboutData }: { aboutData: About }) {
  const { lang } = useLanguage();

  const content = useMemo(() => {
    const isEn = lang === "English";
    return {
      greeting: isEn ? "Hello 👋," : "مرحبا 👋،",
      intro: isEn ? "I'm" : "أنا",
      name: isEn ? aboutData.name : aboutData.arabicName,
      position: isEn ? aboutData.position : aboutData.arabicPosition,
      description: isEn ? aboutData.description : aboutData.arabicDescription,
      viewCV: isEn ? "View CV" : "عرض السيرة الذاتية",
      moreInfo: isEn ? "More Info" : "المزيد من المعلومات",
      direction: isEn ? "ltr" : "rtl",
      textAlign: isEn ? "md:text-left" : "md:text-start",
    };
  }, [lang, aboutData]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="container mt-[4rem] md:mt-0 flex flex-col-reverse md:flex-row md:items-center md:justify-between md:h-[99vh]"
      dir={content.direction}
    >
      <div
        className={`flex flex-col gap-2 text-center lg:mt-[5rem] ${content.textAlign}`}
      >
        <div className="flex flex-col gap-1 md:gap-2">
          <h3 className="text-xl lg:text-2xl mt-4">{content.greeting}</h3>
          <div className="flex gap-1 md:gap-3 py-2 title font-bold justify-center md:justify-start items-center">
            <h1>{content.intro}</h1>
            <div className="text-primary">
              <CustomTypewriter
                strings={[content.name, content.position]}
                delay={100}
                loop={true}
              />
            </div>
          </div>
          <p className="text-muted-foreground text-sm font-medium lg:text-lg lg:w-[80%]">
            {content.description}
          </p>
          <div className="flex gap-1 md:gap-2 items-center justify-center md:justify-start my-4">
            <Button
              className="px-3 py-2 md:px-10 md:py-6 text-sm md:text-lg"
              onClick={() => window.open(aboutData.CV, "_blank")}
            >
              {content.viewCV}
              <NotepadText size={15} className="mx-1" />
            </Button>
            <Button
              variant="ghost"
              className="flex items-center gap-1 md:gap-2 text-sm px-2 py-2 md:px-6 md:py-4"
            >
              <Link href="#About">{content.moreInfo}</Link>
              <Minus />
            </Button>
          </div>
        </div>
        <div className="flex justify-center md:justify-start gap-3 mb-4">
          {aboutData.socialMedia.map((social, i) => (
            <SocialIcon key={i} name={social.icon} link={social.link} />
          ))}
          <Link href={`mailto:${aboutData.email}`}>
            <Mail className="text-muted-foreground transition hover:text-primary hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
      <ProfileBlob />
    </motion.div>
  );
}

export default memo(ClientHero);
