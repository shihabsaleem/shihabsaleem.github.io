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
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");

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

  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, { y: -2, duration: 0.3, ease: "power2.out" });
  };

  const handleLinkLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, { y: 0, duration: 0.3, ease: "power2.out" });
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
      /* UPDATED: Glass effect using Zinc palette */
      className="fixed z-50 w-full top-0 left-0 backdrop-blur-md bg-white/70 dark:bg-[#050505]/70 border-b border-zinc-200/50 dark:border-zinc-800/50 transition-colors duration-500"
    >
      <div className="container mx-auto px-6 sm:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link 
            ref={logoRef}
            href="/" 
            className="flex items-center"
          >
            <Image
              src={info.logo}
              alt={info.name}
              width={120}
              height={40}
              className="h-8 w-auto dark:invert-0 transition-all"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["Work", "About", "Contact"].map((item) => (
              <Link 
                key={item}
                href={item === "Work" ? "/" : `/${item.toLowerCase()}`} 
                className="nav-link text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-600 transition-colors"
                onMouseEnter={handleLinkHover}
                onMouseLeave={handleLinkLeave}
              >
                {item}
              </Link>
            ))}

            {/* Theme Toggle - Desktop */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              /* UPDATED: Zinc background for the toggle track */
              className="nav-link relative w-12 h-6 bg-zinc-200 dark:bg-zinc-800 rounded-full transition-colors duration-300 focus:outline-none"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white dark:bg-zinc-950 rounded-full transition-transform duration-300 flex items-center justify-center shadow-sm ${
                  theme === "dark" ? "translate-x-6" : "translate-x-0"
                }`}
              >
                {theme === "dark" ? (
                  <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                  </svg>
                ) : (
                  <svg className="w-3 h-3 text-zinc-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </span>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="relative w-10 h-5 bg-zinc-200 dark:bg-zinc-800 rounded-full transition-colors"
            >
              <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white dark:bg-zinc-950 rounded-full transition-transform ${theme === "dark" ? "translate-x-5" : "translate-x-0"}`} />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none p-2 rounded-lg"
              aria-label="Toggle Menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-zinc-900 dark:bg-zinc-100 transition-all ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`w-full h-0.5 bg-zinc-900 dark:bg-zinc-100 transition-all ${isOpen ? "opacity-0" : ""}`} />
                <span className={`w-full h-0.5 bg-zinc-900 dark:bg-zinc-100 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-64 mt-4" : "max-h-0"}`}
        >
          <div className="flex flex-col gap-2 py-4 border-t border-zinc-100 dark:border-zinc-800">
            {["Work", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Work" ? "/" : `/${item.toLowerCase()}`}
                className="mobile-link px-4 py-3 text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400 hover:text-red-600 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;