import React from "react";
import data from "@/data/asset";

const infos = data.info[0];

const Info = () => {
  return (
    <div className="w-full  space-y-6">
      <p className="text-2xl text-gray-600 dark:text-gray-400 ">Hi, I&apos;m</p>
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
        {infos.name}
        <span className="text-red-500">.</span>
      </h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        {infos.desc}
      </p>
    </div>
  );
};

export default Info;
