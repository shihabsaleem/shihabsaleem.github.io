import React from "react";
import hero from "../Assets/hero.svg";

const Home = () => {
  return (
    <div className="relative bg-OffWhite">
      <div className="">
        <div className="w-screen h-screen flex justify-center items-center ">
          <img src={hero} alt="hero" className="w-96  " />
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <div className="absolute bottom-10 font-montserrat">
          &copy; Shihab. Craft with &#9829;.
        </div>
      </div>
    </div>
  );
};

export default Home;
