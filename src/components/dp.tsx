import React from "react";
import Image from "next/image";
import data from "@/data/asset";

const info = data.info[0];

const Dp = () => {
  return (
    <div className="w-full h-auto ">
      <div className="relative aspect-square rounded-3xl overflow-hidden ">
        <Image
          src={info.dp}
          alt={info.name}
          fill
          className="object-contain opacity-90 dark:bg-blend-color dark:opacity-60"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
    </div>
  );
};

export default Dp;
