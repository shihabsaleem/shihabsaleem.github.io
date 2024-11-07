// NavMobile.js

import React from "react";
import { Link } from "react-router-dom";

const NavMobile = ({ toggleNav }) => {
  return (
    <div className="relative p-8 w-screen flex justify-between">
      {/* Left Column */}
      <div className="flex flex-col justify-start md:justify-between h-full ml-4 gap-8 ">
        <div
          onClick={toggleNav}
          className="text-xl text-PaleOrange cursor-pointer"
        >
          Close
        </div>
        <Link to={"/about"} className="text-xl hover:text-PaleOrange" onClick={toggleNav}>
          About
        </Link>
        <Link to={"/service"} className="text-xl hover:text-PaleOrange" onClick={toggleNav}>
          Services
        </Link>
      </div>

      {/* Right Column */}
      <div className="flex flex-col justify-start md:justify-between h-full mr-4 gap-8 ">
        <Link to={"/"} className="text-xl hover:text-PaleOrange" onClick={toggleNav}>
          Home
        </Link>
        <Link to={"/portfolio"} className="text-xl hover:text-PaleOrange" onClick={toggleNav}>
          Portfolio
        </Link>
        <Link to={"/contact"} className="text-xl hover:text-PaleOrange" onClick={toggleNav}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavMobile;
