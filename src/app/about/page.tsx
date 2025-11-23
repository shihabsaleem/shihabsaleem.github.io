"use client";

import React, { useEffect, useRef, useState } from "react";
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
  const titleRef = useRef<HTMLDivElement>(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0 })
      .fromTo(bioRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0 })
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
        {
          opacity: 1,
          y: 0,
          onComplete: () => {
            // Notify that animation is complete
            setAnimationComplete(true);
            // Trigger a resize event to help skill component recalculate
            setTimeout(() => {
              window.dispatchEvent(new Event("resize"));
            }, 100);
          },
        },
        "-=0.7"
      );
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 md:px-12 lg:px-20 py-12">
      {/* Hero Section */}
      <div ref={titleRef} className="mb-20">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-4">
          My Story<span className="text-red-500">.</span>
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-8 w-full ">
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
          <div
            ref={skillRef}
            className="w-full border-2 border-gray-200 dark:border-gray-800 p-8 rounded-3xl lg:sticky "
          >
            <Skill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
