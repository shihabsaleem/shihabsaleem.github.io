import React from "react";
import "../Styles/portfolio.css";
import union from "../Assets/union.jpg";
import arwardrobe from "../Assets/arw.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Union",
      description: "College Electoral Web App",
      image: union,
      link: "https://github.com/shihabsaleem/unionCES",
    },
    {
      title: "AR Wardrobe",
      description: "E Commerce with AR",
      image: arwardrobe,
      link: "https://github.com/shihabsaleem/AR-Wardrobe",
    },

    // Add more projects here
  ];

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section_title">Portfolio</h2>
      <span className="section_subtitle">Projects</span>

      <div className="portfolio_container container grid">
        {projects.map((project, index) => (
          <div className="portfolio_content" key={index}>
            <div className="portfolio_item">
              <a href={project.link}>
                <img
                  src={project.image} // Updated image source
                  alt={project.title}
                  className="portfolio_img"
                />
              </a>
              <div className="portfolio_data">
                <h3 className="portfolio_title">{project.title}</h3>
                <p className="portfolio_desc">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
