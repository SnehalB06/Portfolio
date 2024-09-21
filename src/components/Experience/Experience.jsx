import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"


import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
      <div className={styles.aboutItems}>
      {history.map((aboutItem, id) => {
            return (
              <li key={id} className={styles.aboutItem}>
                <img 
                  src={getImageUrl(aboutItem.imageSrc)}
                  alt={`${aboutItem.organisation} Logo`}
                />
                <div className={styles.aboutItemsDetails}>
                  <h2>{`${aboutItem.organisation}`}</h2>
                  <p>{`${aboutItem.startDate} - ${aboutItem.endDate}`}</p>
                  <div className={styles.positions}>
                  <ul>
                    {aboutItem.positions.map((position, id) => {
                      return (
                      <li key={id}><h3>{`${position.title}`}</h3>
                      <p>{`${position.duration} `}</p>
                      <div className={styles.description}>
                      <ul>
                    {position.description.map((desc, id) => {
                      return <li key={id}>{desc}</li>;
                    })}
                  </ul>
                      </div>
                  </li>
                  
                      );
                    })}
                  </ul>
                  </div>
                </div>
              </li>
              
            );
          })}
        </div>

       </div>
    </section>
  );
};
