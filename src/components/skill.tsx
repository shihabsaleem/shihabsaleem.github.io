import React from "react";
import data from "@/data/asset";

const skills = data.skills;

const Skill = () => {
  return (
    <div>
      <h2 className="text-2xl font-light mb-6 pb-4 border-b border-gray-200 dark:border-gray-800">
        Skill Set
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="border-2 border-gray-200 dark:border-gray-800 px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skill;