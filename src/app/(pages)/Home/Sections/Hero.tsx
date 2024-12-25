"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MessageCircleMore,
  Minus,
  NotepadText,
} from "lucide-react";
import { aboutMe } from "@/constants";
import { useLanguage } from "@/providers/LanguageContextProvider";
import CustomTypewriter from "@/hooks/CustomTypewriter";

const Hero = () => {
  const {
    title,
    description,
    name,
    position,
    arabicTitle,
    arabicPsition,
    arabicName,
    arabicDescription,
  } = aboutMe;
  const { lang } = useLanguage();

  return (
    <section
      className="section !p-0"
      id="home"
      dir={lang == "English" ? "ltr" : "rtl"}
    >
      <div className="container mt-[4rem] md:mt-0 flex flex-col-reverse md:flex-row md:items-center md:justify-between md:h-[99vh]">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={`flex flex-col gap-2 text-center lg:mt-[5rem] ${
            lang == "English" ? "md:text-left" : "md:text-start"
          }`}
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-xl lg:text-2xl">
              {lang == "English" ? title : arabicTitle}
            </h3>

            <div className="flex gap-3 py-2 title font-bold justify-center md:justify-start items-center">
              <h1>{lang == "English" ? "I'm" : "أنا"}</h1>
              <div className="text-primary">
                <CustomTypewriter
                  strings={[
                    lang === "English" ? name : arabicName,
                    lang === "English" ? position : arabicPsition,
                  ]}
                  delay={100}
                  loop={true}
                />
              </div>
            </div>

            <p className="text-muted-foreground text-sm font-light lg:text-lg lg:w-[80%]">
              {lang == "English" ? description : arabicDescription}
            </p>

            <div className="flex gap-2 justify-center items-center md:justify-start my-4">
              <Button
                size={"lg"}
                onClick={() => window.open("/CV/Ahmed Ragab.pdf", "_blank")}
              >
                {lang == "English" ? "View CV" : "عرض السيرة الذاتية"}{" "}
                <NotepadText size={15} className="ms-2" />
              </Button>
              <Button variant={"ghost"} className="flex items-center gap-2">
                <Link href={"/#About"}>
                  {lang == "English" ? "More Info" : "المزيد من المعلومات"}
                </Link>
                <Minus fontSize="medium" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-start gap-3 !mb-4">
            <Link
              href="https://www.facebook.com/EngAhmedRagab24/"
              target="_blank"
            >
              <Facebook className="text-muted-foreground duration-200 hover:duration-200 hover:text-primary hover:translate-y-[-2px]" />
            </Link>

            <Link
              href="https://api.whatsapp.com/send?phone=201228317491&text=Hello, more information!"
              target="_blank"
            >
              <MessageCircleMore className="text-muted-foreground duration-200 hover:duration-200 hover:text-primary hover:translate-y-[-2px]" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/ahmed-ragab-558a31209"
              target="_blank"
            >
              <Linkedin className="text-muted-foreground duration-200 hover:duration-200 hover:text-primary hover:translate-y-[-2px]" />
            </Link>

            <Link href="https://github.com/Ahmedragab24" target="_blank">
              <Github className="text-muted-foreground duration-200 hover:duration-200 hover:text-primary hover:translate-y-[-2px]" />
            </Link>

            <Link
              href="mailto:ahmedkavo17@gmail.com?subject=Subject%20Here&body=Message%20content%20here"
              target="_blank"
            >
              <Mail className="text-muted-foreground duration-200 hover:duration-200 hover:text-primary hover:translate-y-[-2px]" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-1 md:mt-2 sm:w-80 sm:mx-auto md:w-[50rem] lg:w-[80rem] z-20"
        >
          <svg
            className="home--blob fill-primary w-[255px] sm:w-[350px]  lg:w-[450px] mx-auto mb-2 md:mb-0"
            viewBox="0 0 550 591"
            xmlns="http://www.w3.org/2000/svg"
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

              {/* <!-- Insert your profile (recommended size: 640 x 940) --> */}
              <image
                id="imageBlob"
                width="640"
                height="940"
                href="https://res.cloudinary.com/dk4yvlwr0/image/upload/v1723554998/me_vdbxlz.png"
              />
            </defs>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
