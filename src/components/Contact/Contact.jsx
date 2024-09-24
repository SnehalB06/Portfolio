import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:bholesnehal20@gmail.com">bholesnehal20@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/snehal-bhole/">linkedin.com/snehal-bhole</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/SnehalB06">github.com/snehal-bhole</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/hack-re.png")} alt="Hackerrank Logo" />
          <a href="https://www.hackerrank.com/profile/snehalbhole06121">Hackerrank.com/snehal-bhole</a>
        </li>
        
        <li className={styles.link}>
          <img src={getImageUrl("contact/leet-re.png")} alt="Github icon" />
          <a href="https://leetcode.com/u/Bsnehal/">leetcode.com/snehal-bhole</a>
        </li>
      </ul>
    </footer>
  );
};
