
import React from "react";
import Hero from "./Sections/Hero";
import State from "./Sections/State";
import TechSkills from "./Sections/TechSkills";
import SoftSkills from "./Sections/SoftSkills";
import Projects from "./Sections/Projects";
import Education from "./Sections/Education";
import Experience from "./Sections/Experience";
import Contact from "./Sections/Contact";
import { ReviewCarousel } from "./Sections/Reviews";



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
      <ReviewCarousel  />
      <Contact />
    </>
  );
};

export default Home;
