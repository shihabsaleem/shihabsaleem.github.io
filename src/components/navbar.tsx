"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import data from "@/data/asset";

const info = data.info[0];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-50 p-6 sm:p-8 w-full top-0 left-0">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Brand */}
        {/* <Link href="/" className="font-display text-2xl font-bold">
          Shihab<span className="text-red-500">.</span>
        </Link> */}
        <Link href="/" className="flex items-center">
          <Image
            src={info.logo}
            alt="Shihab Saleem"
            width={100}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-lg">
          <Link href="/" className="hover:text-red-500">
            Work
          </Link>
          <Link href="/about" className="hover:text-red-500">
            About
          </Link>

          <Link href="/contact" className="hover:text-red-500">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-7 h-7 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black  mt-2 rounded-b-lg py-4">
          <Link
            href="/"
            className="block px-6 py-2 hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            Work
          </Link>
          <Link
            href="/about"
            className="block px-6 py-2 hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          <Link
            href="/contact"
            className="block px-6 py-2 hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
