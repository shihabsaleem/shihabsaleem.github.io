"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import assetData from "@/data/asset";

const info = assetData.info[0];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1.2 },
      });

      tl.fromTo(".stat-item", { y: -30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1 })
        .fromTo(".portrait-img", { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.8 }, "-=0.8")
        .fromTo(".bio-text", { x: -30, opacity: 0 }, { x: 0, opacity: 1 }, "-=1")
        .fromTo(".role-item", { x: 30, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.1 }, "-=1")
        .fromTo(".main-name", { y: 80, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.6");

      const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        gsap.to(".portrait-img", { x: x * 20, y: y * 20, duration: 0.5 });
        gsap.to(".stat-item", { x: x * 5, y: y * 5, duration: 0.5 });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 md:px-12 lg:px-20 py-12 flex flex-col justify-between overflow-hidden font-sans"
    >
      <div className="flex gap-48 z-20">
        <div className="stat-item text-center text-md md:text-xl cursor-pointer">
          <h2>3yr+</h2>
          <p>Exp</p>
        </div>
        <div className="stat-item text-center text-md md:text-xl cursor-pointer">
          <h2>30+</h2>
          <p>Projects</p>
        </div>
      </div>

      <div className="portrait-img absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <div className="relative w-full max-w-lg aspect-square">
          <Image src={info.dpDark} alt={info.name} fill className="object-contain" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-transparent to-transparent opacity-80" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end md:items-center z-20 mt-12 gap-8">
        <div className="bio-text max-w-sm">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
            {info.pdesc}
          </p>

          <div
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-800 rounded-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm cursor-pointer"
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              gsap.to(e.currentTarget, {
                x: (e.clientX - r.left - r.width / 2) * 0.3,
                y: (e.clientY - r.top - r.height / 2) * 0.3,
                duration: 0.1,
              });
            }}
            onMouseLeave={(e) =>
              gsap.to(e.currentTarget, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.5)",
              })
            }
          >
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
            <span className="text-sm">Available for work</span>
          </div>
        </div>

        <div className="text-right space-y-1">
          {["Product Designer", "Frontend Developer", "Branding Strategist"].map((role) => (
            <p
              key={role}
              className="role-item text-lg md:text-xl cursor-pointer"
              onMouseEnter={(e) => gsap.to(e.currentTarget, { x: 10, color: "#dc2626" })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { x: 0, color: "inherit" })}
            >
              {role}
            </p>
          ))}
        </div>
      </div>

      <div className="z-20">
        <div className="flex justify-end gap-6 mb-4 text-xs md:text-sm text-gray-400">
          {[
            { label: "Instagram", url: info.insta },
            { label: "Linkedin", url: info.linkedin },
            { label: "Github", url: info.github },
            { label: "Behance", url: "#" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.url === "#" ? "#" : `https://${s.url}`}
              className="cursor-pointer hover:text-black dark:hover:text-white"
              onMouseEnter={(e) => gsap.to(e.currentTarget, { y: -3 })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { y: 0 })}
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="main-name">
          <span className="text-lg md:text-2xl block">Hi, i'm</span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-display">
            {info.name}
            <span className="text-red-600">.</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
