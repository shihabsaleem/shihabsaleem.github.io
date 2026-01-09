"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import assetData from "@/data/asset";

const info = assetData.info[0];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check initial theme
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");

    // GSAP entrance animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        logoRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power3.out" }
      );

      gsap.fromTo(
        ".nav-link",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.5, ease: "power2.out" }
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.contains("dark");
    
    if (isDark) {
      html.classList.remove("dark");
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const handleLogoHover = () => {
    gsap.to(logoRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLogoLeave = () => {
    gsap.to(logoRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      y: -2,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLinkLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        ".mobile-link",
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  return (
    <nav 
      ref={navRef}
      className="fixed z-50 w-full top-0 left-0 backdrop-blur-md bg-white/80 dark:bg-black/80"
    >
      <div className="container mx-auto px-6 sm:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link 
            ref={logoRef}
            href="/" 
            className="flex items-center"
            onMouseEnter={handleLogoHover}
            onMouseLeave={handleLogoLeave}
          >
            <Image
              src={info.logo}
              alt={info.name}
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div ref={linksRef} className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="nav-link text-sm font-medium uppercase tracking-wider hover:text-red-600 transition-colors"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Work
            </Link>
            <Link 
              href="/about" 
              className="nav-link text-sm font-medium uppercase tracking-wider hover:text-red-600 transition-colors"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="nav-link text-sm font-medium uppercase tracking-wider hover:text-red-600 transition-colors"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              Contact
            </Link>

            {/* Theme Toggle - Desktop */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="nav-link relative w-14 h-7 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 dark:focus:ring-offset-black"
            >
              <span
                className={`absolute top-1 left-1 w-5 h-5 bg-white dark:bg-gray-900 rounded-full transition-transform duration-300 flex items-center justify-center ${
                  theme === "dark" ? "translate-x-7" : "translate-x-0"
                }`}
              >
                {theme === "dark" ? (
                  <svg
                    className="w-3 h-3 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-3 h-3 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </span>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Theme Toggle - Mobile */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="relative w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300 focus:outline-none"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white dark:bg-gray-900 rounded-full transition-transform duration-300 flex items-center justify-center ${
                  theme === "dark" ? "translate-x-6" : "translate-x-0"
                }`}
              >
                {theme === "dark" ? (
                  <svg
                    className="w-3 h-3 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-3 h-3 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </span>
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-black dark:bg-white transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-black dark:bg-white transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-black dark:bg-white transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-48 mt-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 py-2">
            <Link
              href="/"
              className="mobile-link px-4 py-3 text-sm font-medium uppercase tracking-wider hover:text-red-600 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              Work
            </Link>
            <Link
              href="/about"
              className="mobile-link px-4 py-3 text-sm font-medium uppercase tracking-wider hover:text-red-600 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="mobile-link px-4 py-3 text-sm font-medium uppercase tracking-wider hover:text-red-600 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;