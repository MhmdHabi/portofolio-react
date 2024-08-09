import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Certificate from "./components/Certificate";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Contact from "./components/Contacts";
import "./index.css";
import Education from "./components/Educations";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <AboutUs />
        </section>

        <section id="certificate">
          <Certificate />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
