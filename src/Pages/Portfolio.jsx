import React from "react";
import project1 from "../Assets/jadbery.png";
import project2 from "../Assets/branding-1.jpg";
import project3 from "../Assets/ui-1.jpg";
import project4 from "../Assets/ui-2.jpg";

const Portfolio = () => {
  // List of project items
  const projects = [
    { src: project2, alt: "Branding 1", title: "Branding / Acuverse" },
    { src: project3, alt: "User Interface 1", title: "Uix / Diet+" },
    { src: project4, alt: "User Interface 2", title: "Uix / Finance" },
    { src: project1, alt: "Jadbery Project", title: "Website / Jadbery" },
    { src: project1, alt: "Project 3", title: "Project 3" },
    { src: project1, alt: "Project 3", title: "Project 3" },
  ];

  return (
    <div className="min-h-screen bg-OffWhite py-12">
      <div className="mx-4 lg:mx-56">
        <h1 className="text-2xl lg:text-4xl mb-8 py-4">What I've Done</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              {/* Aspect ratio wrapper */}
              <div className="">
                <img
                  src={project.src}
                  alt={project.alt}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 text-white">
                <h2 className="text-2xl font-montserrat">{project.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
