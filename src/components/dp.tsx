import React from "react";
import Image from "next/image";
import data from "@/data/asset";

const info = data.info[0];

const Dp = () => {
  return (
    <div className="w-full h-auto">
      <div className="relative aspect-square rounded-3xl overflow-hidden">
        {/* Light mode image */}
        <Image
          src={info.dpLight}
          alt={info.name}
          fill
          className="object-contain opacity-90 grayscale saturate-0 block dark:hidden"
          priority
        />

        {/* Dark mode image */}
        <Image
          src={info.dpDark}
          alt={info.name}
          fill
          className="object-contain opacity-60 hidden dark:block"
          sizes="(max-width: 768px) 100vw, 
             (max-width: 1200px) 50vw, 
             33vw"
          priority
        />
      </div>
    </div>
  );
};

export default Dp;
