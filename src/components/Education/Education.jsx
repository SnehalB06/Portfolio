import React from "react";
import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";
import education from "../../data/education.json";

export const Education = () => {
  return (
    <section className={styles.container} id="education" aria-labelledby="education-title">
      <h2 className={styles.title} id="education-title">Education</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems} role="list">
          {education.map((aboutItem, index) => (
            <li 
              key={index} 
              className={`${styles.aboutItem} ${index % 2 === 1 ? styles.secondInRow : ''}`}
            >
              <img 
                src={getImageUrl(aboutItem.imageSrc)} 
                alt={`${aboutItem.University} logo`} 
                className={styles.aboutItemImage}
                onError={(e) => { e.target.src = '/fallback-image.jpg'; }} // Fallback image
              />
              <div className={styles.aboutItemDetails}>
                <h2 className={styles.university}>{aboutItem.University}</h2>
                <h3 className={styles.degree}>{aboutItem.Degree} - {aboutItem.Major}</h3>
                <p className={styles.dates}>{aboutItem.startDate} - {aboutItem.endDate}</p>
                <br></br>
                <div>
                  <h4>Relevant Courses</h4>
                <p className={styles.dates}>{aboutItem.RelevantCourses} </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
