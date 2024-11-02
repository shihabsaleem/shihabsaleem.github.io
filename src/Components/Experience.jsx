import React from "react";

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

  
const Experience = () => {
  const experiences = [
    {
      post: "Angular Developer Intern",
      company: "PDS - EY",
      period: "Mar / 24 - Aug / 24",
    },
    {
      post: "Python Full stack Intern",
      company: "Inmakes Infotech",
      period: "Sep / 23 - Dec / 23",
    },
    {
      post: "Web Designer",
      company: "GJ Infotech",
      period: "May / 18 - Jun / 19",
    },
  ];

  return (
    <div>
      <div className="experience">
        <h1 className="text-lg lg:text-3xl pt-4 px-4 lg:pt-16 lg:px-16">
          <span className="text-PaleOrange">Experience</span>.
        </h1>
        <div className="bg-white rounded-lg lg:rounded-xl p-4 lg:p-16">
          <div className="flex flex-col lg:flex-row gap-4">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
