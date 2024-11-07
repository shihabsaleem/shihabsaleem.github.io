import React from "react";
import avatar from "../Assets/avatar.svg";

const Hero = () => {
  return (
    <div className="relative m-8 z mx-auto">
      <div className="flex flex-row items-baseline">
        <div className="bg-PaleOrange p-8 rounded-full h-52 w-52 absolute -left-16 bottom-4">
          <img src={avatar} alt="avatar - @drawkit" />
        </div>
        <div className="text-4xl text-right lg:text-5xl z-10">
          Shihab <br />
          Rahman S<span className="text-PaleOrange">.</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
