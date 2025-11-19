import React from "react";
import data from "../data/asset";

const educations = data.education;

const Education = () => {
  return (
    <div className="w-full">
      <h2 className="font-display text-xl mb-6 border-b border-gray-900 pb-2">
        Education
      </h2>
      <ul className="space-y-6">
        {educations.map((edu) => (
          <li key={edu.id} className=" px-4 py-2 rounded-lg">
            <div className="font-semibold ">{edu.qualification}</div>
            <div className="text-xs  py-0.5">{edu.College}</div>
            <div className="text-xs  py-0.5">Affiliated to {edu.Aff}</div>
            <div className="text-xs  mt-1 py-0.5">
              {edu.start} - {edu.end}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
