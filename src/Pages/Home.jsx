import React from "react";
// import hero from "../Assets/hero.svg";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <div className="relative bg-OffWhite">
      <div className="">
        <div className="w-screen h-screen flex justify-center items-center p-8 ">
          <Hero />
          {/* <div className="flex flex-col">
            <Hero />
            </div> */}
          {/* <img src={hero} alt="hero" className="w-96  " /> */}
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <div className="absolute bottom-10 font-montserrat">
          &copy; Shihab. Fueled by &#9749;.
        </div>
      </div>
    </div>
  );
};

export default Home;
