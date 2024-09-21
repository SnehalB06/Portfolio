import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>

        <p className={styles.degree}>

Hello! I’m Snehal Sudhir Bhole, a passionate software developer and data enthusiast with a keen interest in harnessing the power of technology to create innovative solutions. 
With a degree in Computer Science from the University of Ottawa, I have honed my skills in programming, data analysis, and AI engineering, 
allowing me to bridge the gap between software development and insightful data-driven decision-making.
<br></br>
<br></br>
In my journey, I’ve had the privilege to work with leading organizations, where I’ve contributed to impactful projects ranging from building full-stack applications to developing advanced machine learning models. 
My expertise spans various programming languages and technologies, including Python, Java, React, and cloud platforms like AWS and Google Cloud.
<br></br>
<br></br>
Here, you’ll find a curated selection of my projects, showcasing my ability to tackle complex challenges with creativity and precision. 
Whether you're looking for a collaborator on your next project or simply want to explore my work, I invite you to dive in and discover the possibilities.
<br></br>
<br></br>
Let’s connect and create something amazing together!


        </p>
        {
          /*
                  <p>
        I am a passionate software developer and data enthusiast with a keen interest in harnessing the power of 
        technology to create innovative solutions.In my journey, I’ve had the privilege to work with leading organizations,
         where I’ve contributed to impactful projects ranging from building full-stack applications to developing advanced machine learning models. 
        My expertise spans various programming languages and technologies.
        <br></br>
        Here, you’ll find a curated selection of my projects, 
        showcasing my ability to tackle complex challenges with creativity and precision. 
        Whether you're looking for a collaborator on your next project or simply want to explore my work, I invite you to dive in and discover the possibilities.
        Let’s connect and create something amazing together!
      
        </p>

        }
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>*/}
      </div>
    </section>
  );
};
