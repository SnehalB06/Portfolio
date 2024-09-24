import React from 'react';
import "./Portfolio.module.css";


const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>Showcasing my work and skills</p>
        <button className="primary-btn">View My Work</button>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate software developer with a focus on building
          high-quality, scalable applications.
        </p>
      </section>

      {/* Work Section */}
      <section className="work">
        <h2>My Work</h2>
        <div className="work-cards">
          <div className="work-card">Project 1</div>
          <div className="work-card">Project 2</div>
          <div className="work-card">Project 3</div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2024 My Portfolio</p>
      </footer>
    </div>
  );
};

export default Portfolio;
