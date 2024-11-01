// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="relative p-8 w-screen h-screen flex justify-between">
      {/* Left Column */}
      <div className="flex flex-col justify-start md:justify-between h-full ml-4 gap-8 lg:gap-0">
        <Link to={"/"} className="text-3xl ">
          Shihab<span className="text-PaleOrange">.</span>
        </Link>
        <Link to={"/about"} className="text-3xl hover:text-PaleOrange">
          About
        </Link>
        <Link to={"/service"} className="text-3xl  hover:text-PaleOrange">
          Services
        </Link>
      </div>

      {/* Right Column */}
      <div className="flex flex-col justify-start md:justify-between h-full mr-4 gap-8 lg:gap-0">
        <Link to={"/"} className="text-3xl  hover:text-PaleOrange">
          Home
        </Link>
        <Link to={"/portfolio"} className="text-3xl  hover:text-PaleOrange">
          Portfolio
        </Link>
        <Link to={"/contact"} className="text-3xl  hover:text-PaleOrange">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
