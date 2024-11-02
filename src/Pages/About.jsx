import React, { useState } from "react";
import avatar from "../Assets/avatar.svg";
import Education from "../Components/Education";
import Experience from "../Components/Experience";

const ExperienceCard = ({ post, company, period }) => {
  return (
    <div className="border border-PaleOrange rounded-lg p-4 font-montserrat min-w-48 ">
      <div className="text-PaleOrange font-montserrat font-bold">{post}</div>
      <div className="company font-montserrat text-sm font-medium">
        {company}
      </div>
      <div className="period font-montserrat text-xs pt-4">{period}</div>
    </div>
  );
};


const About = () => {
  const [activeSection, setActiveSection] = useState("bio");

  
  return (
    <div className="min-h-screen bg-OffWhite">
      <div className="mx-4 lg:mx-56 py-12">
        <div className="avatar flex flex-col lg:flex-row lg:justify-between">
          <div className="flex justify-start items-end mb-8">
            <img src={avatar} className="h-48" alt="avatar" />
            <h1 className="text-2xl lg:text-4xl mb-8">
              Hi,
              <br />
              I'm Shihab.
            </h1>
          </div>
          <div className="buttons z-30">
            <div className="flex flex-row lg:flex-col gap-2">
              <div
                className="btn-hover border border-PaleOrange hover:bg-PaleOrange text-black   py-2 px-4 rounded mb-2"
                onClick={() => setActiveSection("bio")}
              >
                Bio.
              </div>
              <div
                className="btn-hover border border-PaleOrange hover:bg-PaleOrange text-black   py-2 px-4 rounded mb-2"
                onClick={() => setActiveSection("education")}
              >
                Edu.
              </div>
              <div
                className="btn-hover border border-PaleOrange hover:bg-PaleOrange text-black   py-2 px-4 rounded mb-2"
                onClick={() => setActiveSection("experience")}
              >
                Exp.
              </div>
            </div>
          </div>
        </div>

        {activeSection === "bio" && (
          <div className="bio">
            <div className="text-pretty bg-white rounded-lg lg:rounded-xl my-4">
              <p className="text-lg lg:text-3xl p-16">
                I’m a{" "}
                <span className="text-PaleOrange">
                  UI Designer and Developer
                </span>{" "}
                passionate about creating beautiful, functional{" "}
                <span className="text-PaleOrange">digital experiences</span>.
                With a background in graphic design and a strong foundation in
                coding, I thrive at the intersection of{" "}
                <span className="text-PaleOrange">
                  creativity and technology
                </span>
                .
              </p>
            </div>
          </div>
        )}

        {activeSection === "experience" && (
          <Experience/>
        )}

        {activeSection === "education" && (
       <Education/>
        )}
      </div>
    </div>
  );
};

export default About;
