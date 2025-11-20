"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import Bio from "@/components/bio";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Skill from "@/components/skill";

const About = () => {
  const bioRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);
  const eduRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.fromTo(bioRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0 })
      .fromTo(
        expRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0 },
        "-=0.7"
      )
      .fromTo(
        eduRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0 },
        "-=0.7"
      )
      .fromTo(
        skillRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 },
        "-=0.7"
      );
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 md:px-12 lg:px-20 py-12">
      {/* Hero Section */}
      <div className="mb-20">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-4">
          About Me<span className="text-red-500">.</span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
          Designer & Developer crafting beautiful digital experiences
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-8 w-full lg:w-8/12">
          <div ref={bioRef}>
            <Bio />
          </div>

          <div className="flex flex-col md:flex-row gap-8 w-full">
            <div
              ref={expRef}
              className="flex-1 border-2 border-gray-200 dark:border-gray-800 p-8 rounded-3xl"
            >
              <Experience />
            </div>
            <div
              ref={eduRef}
              className="flex-1 border-2 border-gray-200 dark:border-gray-800 p-8 rounded-3xl"
            >
              <Education />
            </div>
          </div>
        </div>

        {/* Right Column - Skills */}
        <div
          ref={skillRef}
          className="w-full lg:w-4/12 border-2 border-gray-200 dark:border-gray-800 p-8 rounded-3xl h-fit lg:sticky lg:top-8"
        >
          <Skill />
        </div>
      </div>
    </div>
  );
};

export default About;