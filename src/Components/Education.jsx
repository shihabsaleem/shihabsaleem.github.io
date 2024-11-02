import React from "react";

const EducationCard = ({ degree, college, period }) => {
  return (
    <div className="border border-PaleOrange rounded-lg p-4 font-montserrat min-w-48 ">
      <div className="text-PaleOrange font-montserrat font-bold">{degree}</div>
      <div className="company font-montserrat text-sm font-medium">
        {college}
      </div>
      <div className="period font-montserrat text-xs pt-4">{period}</div>
    </div>
  );
};

const Education = () => {
  const educations = [
    {
      degree: "B. Tech in Computer Science & Engineering",
      college: "College of Engineering, Munnar",
      period: "Nov / 20 - Jul / 23",
    },
    {
      degree: "Diploma in Computer Engineering",
      college: "St.Marys Polytechnic College, Palakkad",
      period: "Jul / 15 - Apr / 18",
    },
  ];

  return (
    <div>
      {" "}
      <div className="education">
        <h1 className="text-lg lg:text-3xl pt-4 px-4 lg:pt-16 lg:px-16">
          <span className="text-PaleOrange">Education</span>.
        </h1>
        <div className="bg-white rounded-lg lg:rounded-xl p-4 lg:p-16">
          <div className="flex flex-col lg:flex-row gap-4">
            {educations.map((education, index) => (
              <EducationCard key={index} {...education} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
