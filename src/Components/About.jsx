import React from "react";
import "../Styles/about.css";
import Info from "./Info";
import AboutImg from "../Assets/pic11.jpg";
import Resume from "../Assets/Shihab Rahman S.pdf";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">Introduction</span>
      <div className="about_container container grid">
        <img src={AboutImg} alt="intro pic" className="about_img" />
        <div className="about_data">
          <Info />
          <p className="about_desc">
            Passionate frontend developer & graphic designer. I bridge
            creativity with technology, crafting immersive experiences.
            User-centric designs that evoke emotions. Lifelong learner. Let's
            collaborate and create something extraordinary.
          </p>
          <a download="Shihab Rahman S.pdf" href={Resume} className="button button_flex">
            Download CV
            <i class="uil uil-file-bookmark-alt button_icon"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
