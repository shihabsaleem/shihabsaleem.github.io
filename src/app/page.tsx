"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import data from "@/data/asset";

const works = data.works;

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power3.out",
      });

      ScrollTrigger.batch(".work-item", {
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 1,
            ease: "power3.out",
          }),
        start: "top 80%",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent, workId: number) => {
    if (hoveredId === workId) {
      setCursorPos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseEnter = (workId: number) => {
    setHoveredId(workId);
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 md:px-12 lg:px-20 py-12 relative"
      style={{ cursor: hoveredId ? "none" : "default" }}
    >
      {/* Custom Cursor Badge */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: "translate(-50%, -50%) scale(0)",
          opacity: 0,
        }}
      >
        <div className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
          View Project
        </div>
      </div>

      {/* Hero Title */}
      <div className="hero-title mb-32">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight">
          Crafted Pieces
          <span className="text-red-500 dark:text-red-500">.</span>
        </h1>
      </div>

      {/* Works Grid */}
      <div className="space-y-0">
        {works.map((work, index) => (
          <div
            key={work.id}
            className="work-item opacity-0 translate-y-12 border-t border-gray-200 dark:border-gray-800 transition-all duration-500 cursor-none"
            onMouseMove={(e) => handleMouseMove(e, work.id)}
            onMouseEnter={() => handleMouseEnter(work.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`grid grid-cols-12 gap-8 items-center py-8 md:py-12 ${
                work.id % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Number */}
              <div
                className={`col-span-2 md:col-span-1 ${
                  work.id % 2 === 0 ? "md:order-2" : ""
                }`}
              >
                <span className="text-4xl md:text-5xl font-light opacity-40">
                  {String(work.id).padStart(2, "0")}
                </span>
              </div>

              {/* Project Info */}
              <div
                className={`col-span-10 md:col-span-4 lg:col-span-3 ${
                  work.id % 2 === 0 ? "md:order-3" : ""
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-light mb-2">
                  {work.name}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {work.shortdesc}
                </p>
                <button className="text-sm mt-4 opacity-60 hover:opacity-100 transition-opacity">
                  View Project
                </button>
              </div>

              {/* Image */}
              <div
                className={`col-span-12 md:col-span-7 lg:col-span-8 ${
                  work.id % 2 === 0 ? "md:order-1" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl transition-all duration-700 ${
                    hoveredId === work.id ? "scale-100 shadow-xl" : "scale-100"
                  }`}
                  style={{
                    height: hoveredId === work.id ? "500px" : "400px",
                  }}
                >
                  <img
                    src={work.image}
                    alt={work.name}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                      hoveredId === work.id ? "opacity-0" : "opacity-30"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
