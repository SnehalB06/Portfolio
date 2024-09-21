import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Snehal</h1>
        <p className={styles.description}>
        I am a passionate software developer and data enthusiast with a keen interest in harnessing the power of technology to create innovative solutions.
        <br/>Reach out if you'd like to learn more!
        </p>
        <a href="mailto:bholesnehal20@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/profile-pic-trial3.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
