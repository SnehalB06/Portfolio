
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Education } from "./components/Education/Education";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Certificates } from "./components/Certificates/Certificates";
import {Experience } from "./components/Experience/ExperienceVerticle"
import { CertificatesJSX } from "./components/Certificates/CertificatesList";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <Education/>
      <Experience/>
      <Projects />
      <CertificatesJSX/>
      <Contact />
    </div>
  );
}

export default App;
