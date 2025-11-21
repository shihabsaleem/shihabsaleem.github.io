"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Dps from "@/components/dp";

import data from "@/data/asset";

const info = data.info[0];

// Mock components for demonstration
const Dp = () => (
  <div className="flex items-center justify-center">
    <Dps />
  </div>
);

const ContactInfo = ({ layout }: { layout: string }) => (
  <div className="space-y-6">
    <div>
      <h3 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
        Email
      </h3>
      <a
        href={info.email}
        target="_blank"
        className="text-xl hover:text-red-500 transition-colors"
      >
        {info.email}
      </a>
    </div>
    <div>
      <h3 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
        Phone
      </h3>
      <a
        href={info.phone}
        className="text-xl hover:text-red-500 transition-colors"
      >
        {info.phone}
      </a>
     
    </div>
    <div>
      <h3 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
        Location
      </h3>
      <p className="text-xl">{info.location}</p>
    </div>
    <div>
      <h3 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
        Social
      </h3>
      <div className="flex gap-4">
        <a
          href={`https://${info.linkedin}`}
          target="_blank"
          className="text-xl hover:text-red-500 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href={`https://${info.github}`}
          target="_blank"
          className="text-xl hover:text-red-500 transition-colors"
        >
          GitHub
        </a>
        <a
          href={`https://${info.insta}`}
          target="_blank"
          className="text-xl hover:text-red-500 transition-colors"
        >
          Instagram
        </a>
      </div>
    </div>
  </div>
);

const Contact = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0 })
      .fromTo(
        leftRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0 },
        "-=0.7"
      )
      .fromTo(
        rightRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0 },
        "-=0.7"
      );
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 md:px-12 lg:px-20 py-12">
      {/* Hero Section */}
      <div ref={titleRef} className="mb-20">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-4">
          Get in Touch<span className="text-red-500">.</span>
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div
          ref={leftRef}
          className="w-full lg:w-4/12 border-2 border-gray-200 dark:border-gray-800 p-8 rounded-3xl"
        >
          <Dp />
        </div>

        <div
          ref={rightRef}
          className="w-full lg:w-8/12 border-2 border-gray-200 dark:border-gray-800 p-8 rounded-3xl flex flex-col justify-center"
        >
          <ContactInfo layout="column" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
