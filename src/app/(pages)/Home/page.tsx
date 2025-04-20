import Contact from "./Sections/Contact";
import Education from "./Sections/Education";
import Experience from "./Sections/Experience";
import Hero from "./Sections/Hero";
import Projects from "./Sections/Projects";
import { ReviewCarousel } from "./Sections/Reviews";
import SoftSkills from "./Sections/SoftSkills";
import State from "./Sections/State";
import TechSkills from "./Sections/TechSkills";
import React from "react";

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
      <ReviewCarousel />
      <Contact />
    </>
  );
};

export default Home;
