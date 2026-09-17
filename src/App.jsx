import React from "react";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import ExperienceTimeline from "./components/ExperienceTimeline.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ExperienceTimeline />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </Box>
  );
}
