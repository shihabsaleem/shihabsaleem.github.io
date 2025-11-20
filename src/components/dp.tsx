import React from "react";
import data from "@/data/asset";

const info = data.info[0];

const Dp = () => {
  return (
    <div className="w-full h-auto ">
      <div className="relative aspect-square rounded-3xl overflow-hidden ">
        <img
          src={info.dp}
          alt={info.name}
          className="w-full h-auto object-contain opacity-90 dark:bg-blend-color dark:opacity-60"
        />
      </div>
    </div>
  );
};

export default Dp;
