import React, { useState } from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";


export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Programming Languages");

  // Get unique categories from the project list
  const categories = [ "All",...new Set(skills.map((skill) => skill.category))];

  const filteredSkills = selectedCategory === "All"
    ? skills
    : skills.filter((skill) => skill.category === selectedCategory);
  return (

<section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>

      {/* Category Filter */}
      <div className={styles.filterContainer}>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

    {/* Display Projects */}
    <div className={styles.skills}>
        {filteredSkills.map((skill, id) => (
          <div key={id} className={styles.skill}>
          <div className={styles.skillImageContainer}>
            <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
          </div>
          <p className={styles.skillName}>{skill.title}</p>
        </div>
        ))}
      </div>
    </section>

    
  );
};
