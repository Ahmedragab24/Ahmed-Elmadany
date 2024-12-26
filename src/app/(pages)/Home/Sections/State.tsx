"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/LanguageContextProvider";
import { motion } from "framer-motion";
import { ChevronsRight, Github } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const State = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [started, setStarted] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 350 && !started) {
        setStarted(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [started]);

  // Count 1
  useEffect(() => {
    if (started && count1 < 25) {
      const timer = setInterval(() => {
        setCount1((prevCount) => prevCount + 1);
      }, 25);

      return () => clearInterval(timer);
    }
  }, [started, count1]);

  // Count 2
  useEffect(() => {
    if (started && count2 < 3) {
      const timer = setInterval(() => {
        setCount2((prevCount) => prevCount + 1);
      }, 3);

      return () => clearInterval(timer);
    }
  }, [started, count2]);

  // Count 3
  useEffect(() => {
    if (started && count3 < 40) {
      const timer = setInterval(() => {
        setCount3((prevCount) => prevCount + 1);
      }, 40);

      return () => clearInterval(timer);
    }
  }, [started, count3]);

  // Count 4
  useEffect(() => {
    if (started && count4 < 20) {
      const timer = setInterval(() => {
        setCount4((prevCount) => prevCount + 1);
      }, 20);

      return () => clearInterval(timer);
    }
  }, [started, count4]);

  return (
    <section className="section" id="About">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sectionTitle"
        >
          {lang == "English" ? "About Me" : "ْعَنِّي"}
        </motion.div>

        <div className=" flex flex-col justify-center items-center gap-5 md:flex-row mb-10 md:mb-20 ">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="circle"
          >
            <h3>{count1}</h3>
            <p>{lang == "English" ? "my Age " : "العمر"}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ChevronsRight className="hidden lg:block text-primary" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="circle"
            data-aos="fade-up"
          >
            <h3>{count2}+</h3>
            <p>{lang == "English" ? "Experience" : "الخبرة"}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ChevronsRight className="hidden lg:block text-primary" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="circle"
            data-aos="fade-up"
          >
            <h3>{count3}+</h3>
            <p>{lang == "English" ? "Total Projects" : "مجموع المشاريع"}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <ChevronsRight className="hidden lg:block text-primary" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="circle"
            data-aos="fade-up"
          >
            <h3>{count4}+</h3>
            <p>{lang == "English" ? "Clients" : "العملاء"}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm md:text-lg m-auto text-muted-foreground w-[90%] md:w-[70%]"
        >
          {lang == "English"
            ? "I am a strong communicator and a collaborative team player and enjoy working in a fast-paced environment. I am also comfortable working independently and taking ownership of projects. I am constantly seeking new challenges and opportunities to learn and grow as a software engineer."
            : "أنا شخص متمكن من التواصل وأعمل ضمن فريق وأستمتع بالعمل في بيئة سريعة الخطى. كما أنني أشعر بالراحة في العمل بشكل مستقل وتولي مسؤولية المشاريع. وأبحث باستمرار عن تحديات وفرص جديدة للتعلم والنمو كمهندس برمجيات."}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mt-4"
        >
          <Link href={"https://github.com/Ahmedragab24"} target="_blank">
            <Button variant={"secondary"} size={"lg"}>
              Show GitHub <Github size={15} className="ms-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default State;
