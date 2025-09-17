import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroPage from "./components/HeroPage";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Education from "./components/Eduaction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { Element } from "react-scroll";

const App = () => {
  return (
    <div>
      <Navbar />

      <Element name="home">
        <HeroPage />
      </Element>

      <Element name="experience">
        <Experience />
      </Element>

      <Element name="project">
        <Project />
      </Element>
      <Element name="education">
        <Education />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
    </div>
  );
};

export default App;
