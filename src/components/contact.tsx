import React from "react";
import data from "@/data/asset";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const info = data.info[0];

const Contact = ({ layout = "row" }) => {
  const isColumn = layout === "column";

  return (
    <div
      className={`${
        isColumn
          ? "flex flex-col gap-4"
          : "grid grid-cols-2 sm:grid-cols-3 lg:flex gap-4"
      }`}
    >
      <a href={`tel:${info.phone}`}>
        <div
          className={`
    border-2 border-gray-200 dark:border-gray-800 p-4 rounded-xl text-center
    transition-all duration-300 transform
    hover:-translate-y-1 
    hover:bg-gray-200 hover:text-black
    dark:hover:bg-gray-800 dark:hover:text-white
    ${isColumn ? "w-full" : ""}
  `}
        >
          Call Me
        </div>
      </a>
      <a href={`https://wa.me/${info.phone}`} target="_blank">
        <div
          className={`
    border-2 border-gray-200 dark:border-gray-800 p-4 rounded-xl text-center
    transition-all duration-300 transform
    hover:-translate-y-1 
    hover:bg-gray-200 hover:text-black
    dark:hover:bg-gray-800 dark:hover:text-white
    ${isColumn ? "w-full" : ""}
  `}
        >
          Whatsapp Me
        </div>
      </a>
      <a
        href={`${info.cv}`}
        target="_blank"
        download={info.name}
        rel="noopener noreferrer"
      >
        <div
          className={`
    border-2 border-gray-200 dark:border-gray-800 p-4 rounded-xl text-center
    transition-all duration-300 transform
    hover:-translate-y-1 
    hover:bg-gray-200 hover:text-black
    dark:hover:bg-gray-800 dark:hover:text-white
    ${isColumn ? "w-full" : ""}
  `}
        >
          {" "}
          Download CV
        </div>
      </a>

      {isColumn ? (
        <div className="flex gap-4 w-full justify-center">
          <a
            href={`https://${info.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`
    border-2 border-gray-200 dark:border-gray-800 p-4 rounded-xl text-center
    transition-all duration-300 transform
    hover:-translate-y-1 
    hover:bg-gray-200 hover:text-black
    dark:hover:bg-gray-800 dark:hover:text-white
    ${isColumn ? "w-full" : ""}
  `}
            >
              <FaLinkedin className="w-6 h-6" />
            </div>
          </a>
          <a
            href={`https://${info.github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`
    border-2 border-gray-200 dark:border-gray-800 p-4 rounded-xl text-center
    transition-all duration-300 transform
    hover:-translate-y-1 
    hover:bg-gray-200 hover:text-black
    dark:hover:bg-gray-800 dark:hover:text-white
    ${isColumn ? "w-full" : ""}
  `}
            >
              <FaGithub className="w-6 h-6" />
            </div>
          </a>
        </div>
      ) : (
        <>
          <div
            className={`
    border-2 border-gray-200 dark:border-gray-800 p-4 rounded-xl text-center
    transition-all duration-300 transform
    hover:-translate-y-1 
    hover:bg-gray-200 hover:text-black
    dark:hover:bg-gray-800 dark:hover:text-white
    ${isColumn ? "w-full" : ""}
  `}
          >
            <a
              href={`https://${info.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
          <div className={`
    border-2 border-gray-200 dark:border-gray-800 p-4 rounded-xl text-center
    transition-all duration-300 transform
    hover:-translate-y-1 
    hover:bg-gray-200 hover:text-black
    dark:hover:bg-gray-800 dark:hover:text-white
    ${isColumn ? "w-full" : ""}
  `}>
            <a
              href={`https://${info.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;
