import React from "react";
import data from "../data/asset";

const experiences = data.experience;

const Experience = () => {
  return (
    <div>
      <h2 className="font-display text-xl mb-6 border-b  pb-2">
        Experience
      </h2>
      <ul className="space-y-6">
        {experiences.map((exp, index) => (
          <li key={index} className="px-4 py-2 rounded-lg">
            <div className="font-semibold ">{exp.Designation}</div>
            <div className="text-xs  py-0.5">{exp.Company}</div>
            <div className="text-xs  py-0.5">
              {exp.start} - {exp.end}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
