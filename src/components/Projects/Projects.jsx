import React, { useState } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories from the project list
  const categories = ["All", ...new Set(projects.map((project) => project.category))];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>

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
      <div className={styles.projects}>
        {filteredProjects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
