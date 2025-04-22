"use client";

import { Button } from "@/components/ui/button";
import { Statistics } from "@/interfaces";
import { getStatistics } from "@/lib/appwrite/api";
import { useLanguage } from "@/providers/LanguageContextProvider";
import { motion } from "framer-motion";
import { ChartNoAxesCombined, ChevronsRight, Github } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const State = () => {
  const { lang } = useLanguage();
  const [started, setStarted] = useState(false);
  const [stateData, setStateData] = useState<Statistics[]>([]);
  const [counts, setCounts] = useState<{ [id: string]: number }>({});

  useEffect(() => {
    const fetchStateData = async () => {
      const response = await getStatistics();
      setStateData(response || []);
    };
    fetchStateData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 350 && !started) {
        setStarted(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [started]);

  useEffect(() => {
    if (started) {
      stateData.forEach((item) => {
        if (item.$id && !counts[item.$id]) {
          let current = 0;
          const stepTime = Math.max(10, 1000 / item.number);

          const interval = setInterval(() => {
            current += 1;
            setCounts((prev) => ({ ...prev, [item.$id as string]: current }));

            if (current >= item.number) {
              clearInterval(interval);
            }
          }, stepTime);
        }
      });
    }
  }, [started, stateData, counts]);

  return (
    <section className="section" id="About">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sectionTitle flex justify-center items-center gap-2"
        >
          <h2> {lang === "English" ? "Statistics" : "الاحصائيات"}</h2>
          <ChartNoAxesCombined className="text-yellow-500" />
        </motion.div>

        <motion.div className="flex flex-col justify-center items-center gap-5 md:flex-row mb-10 md:mb-20 flex-wrap">
          {stateData.map((item, index) => (
            <React.Fragment key={item.$id}>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 + index * 0.1 }}
                className="circle"
              >
                <h3>{item.$id ? counts[item.$id] || 0 : 0}+</h3>
                <p>{lang === "English" ? item.title : item.arTitle}</p>
              </motion.div>
              {index !== stateData.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 + index * 0.1 }}
                >
                  <ChevronsRight className="hidden lg:block text-yellow-500" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>

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
