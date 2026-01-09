"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import assetData from "@/data/asset";

const info = assetData.info[0];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

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
  }, [isMobile]);

  // Desktop Layout - Keep original design
  if (!isMobile) {
    return (
      <div
        ref={containerRef}
        className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 md:px-12 lg:px-20 py-12 flex flex-col justify-between overflow-hidden font-sans"
      >
        <div className="flex gap-48 z-20">
          <div className="stat-item text-center text-md md:text-xl font-normal">
            <h2>3yr+</h2>
            <p>Exp</p>
          </div>
          <div className="stat-item text-center text-md md:text-xl font-normal">
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
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-800 rounded-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm cursor-pointer transition-colors hover:border-red-600 dark:hover:border-red-600"
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
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-sm" />
              <span className="text-sm font-normal">Available for work</span>
            </div>
          </div>

          <div className="role-list text-right space-y-1">
            {["Product Designer", "Frontend Developer", "Branding Strategist"].map((role) => (
              <p
                key={role}
                className="role-item text-lg md:text-xl font-normal cursor-pointer"
                onMouseEnter={(e) => gsap.to(e.currentTarget, { x: 10, color: "#dc2626", duration: 0.3 })}
                onMouseLeave={(e) => gsap.to(e.currentTarget, { x: 0, color: "inherit", duration: 0.3 })}
              >
                {role}
              </p>
            ))}
          </div>
        </div>

        <div className="z-20">
          <div className="flex justify-end gap-6 mb-4 text-xs md:text-sm font-medium text-gray-400">
            {[
              { label: "Instagram", url: info.insta },
              { label: "Linkedin", url: info.linkedin },
              { label: "Github", url: info.github },
              { label: "Behance", url: info.behance },
            ].map((s) => (
              <a
                key={s.label}
                href={s.url === "#" ? "#" : `https://${s.url}`}
                className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                onMouseEnter={(e) => gsap.to(e.currentTarget, { y: -3, duration: 0.3 })}
                onMouseLeave={(e) => gsap.to(e.currentTarget, { y: 0, duration: 0.3 })}
              >
                {s.label}
              </a>
            ))}
          </div>

          <div className="main-name">
            <span className="text-lg md:text-2xl font-normal block">Hi, i'm</span>
            <h2 className="text-5xl md:text-8xl font-display">
            {info.name}
            <span className="text-red-600">.</span>
          </h2>
          </div>
        </div>
      </div>
    );
  }

  // Mobile Layout - Completely Independent Design
  return (
    <div className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 py-8 flex flex-col overflow-hidden font-sans">
      {/* Mobile Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <span className="text-sm text-gray-500 block mb-1">Hi, i'm</span>
          <h1 className="text-4xl font-display">
            {info.name}
            <span className="text-red-600">.</span>
          </h1>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-gray-200 dark:border-gray-800 rounded-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm text-xs">
          <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
          <span>Available</span>
        </div>
      </div>

      {/* Portrait */}
      <div className="flex justify-center mb-8">
        <div className="relative w-64 h-64">
          <Image src={info.dpDark} alt={info.name} fill className="object-contain" priority />
        </div>
      </div>

      {/* Roles */}
      <div className="mb-8">
        <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-3">What I Do</h2>
        <div className="space-y-2">
          {["Product Designer", "Frontend Developer", "Branding Strategist"].map((role) => (
            <div key={role} className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-red-600" />
              <span className="text-base">{role}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bio */}
      <div className="mb-8 hidden md:block">
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {info.pdesc}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-50 dark:bg-zinc-900 rounded-2xl p-4 text-center border border-gray-200 dark:border-gray-800">
          <div className="text-2xl font-bold mb-1">3yr+</div>
          <div className="text-xs text-gray-500">Experience</div>
        </div>
        <div className="bg-gray-50 dark:bg-zinc-900 rounded-2xl p-4 text-center border border-gray-200 dark:border-gray-800">
          <div className="text-2xl font-bold mb-1">30+</div>
          <div className="text-xs text-gray-500">Projects</div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-auto pt-8 border-t border-gray-200 dark:border-gray-800">
        <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Connect</h3>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Instagram", url: info.insta },
            { label: "Linkedin", url: info.linkedin },
            { label: "Github", url: info.github },
            { label: "Behance", url: "#" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.url === "#" ? "#" : `https://${s.url}`}
              className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-gray-800 text-sm hover:border-red-600 transition-colors"
            >
              <div className="w-1 h-1 rounded-full bg-red-600" />
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;