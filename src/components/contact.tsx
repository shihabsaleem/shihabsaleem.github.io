import React from "react";
import data from "@/data/asset";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const info = data.info[0];

const Contact = ({ layout = "row" }) => {
  const isColumn = layout === "column";

  return (
    <div
      className={`${
        isColumn ? "flex flex-col gap-4" : "grid grid-cols-2 sm:grid-cols-3 lg:flex gap-4"
      }`}
    >
      <div className={`border-2 border-gray-900 p-4 rounded-xl text-center  hover:text-gray-900 hover:bg-white transition ${isColumn ? "w-full" : ""}`}>
        <a href={`tel:${info.phone}`}>Call Me</a>
      </div>
      <div className={`border-2 border-gray-900 p-4 rounded-xl text-center  hover:text-gray-900 hover:bg-white transition ${isColumn ? "w-full" : ""}`}>
        <a href={`https://wa.me/${info.phone}`}>Text Me</a>
      </div>
      <div className={`border-2 border-gray-900 p-4 rounded-xl text-center  hover:text-gray-900 hover:bg-white transition ${isColumn ? "w-full" : ""}`}>
        <a href={`${info.cv}`} target="_blank" rel="noopener noreferrer">
          Download CV
        </a>
      </div>

      {isColumn ? (
        <div className="flex gap-4 w-full">
          <div className="flex-1 border-2 border-gray-900 p-4 rounded-xl flex justify-center  hover:text-gray-900 hover:bg-white transition">
            <a href={`https://${info.linkedin}`} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
          <div className="flex-1 border-2 border-gray-900 p-4 rounded-xl flex justify-center  hover:text-gray-900 hover:bg-white transition">
            <a href={`https://${info.github}`} target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </div>
      ) : (
        <>
          <div className="border-2 border-gray-900 p-4 rounded-xl flex justify-center  hover:text-gray-900 hover:bg-white transition">
            <a href={`https://${info.linkedin}`} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
          <div className="border-2 border-gray-900 p-4 rounded-xl flex justify-center  hover:text-gray-900 hover:bg-white transition">
            <a href={`https://${info.github}`} target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;
