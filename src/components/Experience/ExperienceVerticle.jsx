import React from "react";
import styles from "./ExperienceVerticle.module.css";
import { getImageUrl } from "../../utils";
import history from "../../data/workExperience.json";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

export const Experience= () => {
    const getIconBackgroundColor = (icon) => {
        switch (icon) {
            case "workIcon":
                return "#ffffff"; // Orange color for work icon
            default:
                return "#3498db"; // Blue as a default color
        }
    };

    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <VerticalTimeline className={styles.VerticalTimelineElement} 
            lineColor={ '#000000'} 
            linewidth={'2px'}
            animate ={true}
            layout={ '2-columns' }
            >
                {history.map((aboutItem, id) => (
                    <VerticalTimelineElement
                        className={styles.VerticalTimelineElement}
                        key={id}
                        date={aboutItem.duration}
                        
                        iconStyle={{
                            background: getIconBackgroundColor(aboutItem.icon),
                            color: "#fff"
                        }}
                        icon={
                            <div className={styles.iconDiv}>
                                <img
                                    src={getImageUrl(aboutItem.imageSrc)}
                                    alt={aboutItem.organisation}
                                    className={styles.iconImage}
                                />
                            </div>
                        }
                        contentStyle={{ background: "#ffffff", color: "#000", borderBlockColor:"re"}}
                        contentArrowStyle={{ borderRight: "5px solid #000000" }}
                    >
                        {/* Flip card container */}
                        <div className={styles.flipCard}>
                            {/* Front side of the card */}
                            <div className={styles.flipCardFront}>
                                <h2>{aboutItem.title}</h2>
                                <h3>{aboutItem.organisation}</h3>
                                <h4>{aboutItem.location}</h4>
                            </div>
                            {/* Back side of the card */}
                            <div className={styles.flipCardBack}>
                                <ul>
                                    {aboutItem.description.map((desc, idx) => (
                                        <li key={idx}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </section>
    );
};
