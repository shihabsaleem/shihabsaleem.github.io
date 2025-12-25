import React from "react";
import data from "@/data/asset";

const experiences = data.experience;

const Experience = () => {
  return (
    <div>
      <h2 className="text-2xl font-light mb-6 pb-4 border-b border-gray-200 dark:border-gray-800">
        Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-red-500 before:rounded-full"
          >
            <div className="font-medium text-lg">{exp.Designation}</div>
            {exp.CLink ? (
              <a
                href={exp.CLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 mt-1 inline-block transition-colors"
              >
                {exp.Company}
              </a>
            ) : (
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 inline-block">
                {exp.Company}
              </div>
            )}
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              {exp.start} - {exp.end}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;