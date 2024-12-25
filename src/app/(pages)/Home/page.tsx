import React from "react";
import Hero from "@/app/(pages)/Home/Sections/Hero";
import State from "@/app/(pages)/Home/Sections/State";
import TechSkills from "@/app/(pages)/Home/Sections/TechSkills";
import SoftSkills from "@/app/(pages)/Home/Sections/SoftSkills";
import Projects from "@/app/(pages)/Home/Sections/Projects";
import Education from "@/app/(pages)/Home/Sections/Education";
import Experience from "@/app/(pages)/Home/Sections/Experience";
import Contact from "@/app/(pages)/Home/Sections/Contact";
import { ReviewCarousel } from "@/app/(pages)/Home/Sections/Reviews";
import { reviews } from "@/constants";

const Home = () => {
  return (
    <>
      <Hero />
      <State />
      <TechSkills />
      <SoftSkills />
      <Projects />
      <Education />
      <Experience />
      <ReviewCarousel reviews={reviews} />
      <Contact />
    </>
  );
};

export default Home;
