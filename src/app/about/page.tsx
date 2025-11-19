"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import Skill from "@/components/skill";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Bio from "@/components/bio";

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
    <div className="flex flex-col lg:flex-row font-sans p-3 sm:p-6 md:p-10 gap-6 md:gap-10">
      <div className="flex flex-col gap-6 w-full lg:w-8/12">
        <div ref={bioRef}>
          <Bio />
        </div>

        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div
            ref={expRef}
            className="flex-1 border-2 border-gray-900 p-6 rounded-3xl "
          >
            <Experience />
          </div>
          <div
            ref={eduRef}
            className="flex-1 border-2 border-gray-900 p-6 rounded-3xl "
          >
            <Education />
          </div>
        </div>
      </div>

      <div
        ref={skillRef}
        className="w-full lg:w-4/12 border-2 border-gray-900 p-6 rounded-3xl "
      >
        <Skill />
      </div>
    </div>
  );
};

export default About;
