import React from "react";
import data from "@/data/asset";

const educations = data.education;

const Education = () => {
  return (
    <div>
      <h2 className="text-2xl font-light mb-6 pb-4 border-b border-gray-200 dark:border-gray-800">
        Education
      </h2>
      <ul className="space-y-6">
        {educations.map((edu) => (
          <li
            key={edu.id}
            className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-red-500 before:rounded-full"
          >
            <div className="font-medium text-lg">{edu.qualification}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {edu.College}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Affiliated to {edu.Aff}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              {edu.start} - {edu.end}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;