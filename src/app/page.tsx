"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "@/data/asset";

gsap.registerPlugin(ScrollTrigger);

const works = data.works;
const info = data.info[0];

export default function Home() {
  const router = useRouter();
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

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (workId: number) => {
    setHoveredId(workId);
  };

  const handleImageMouseEnter = () => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleImageMouseLeave = () => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  const navigateToProject = (workName: string) => {
    // Convert work name to URL-friendly slug
    const slug = workName.toLowerCase().replace(/\s+/g, "-");
    router.push(`/${slug}`);
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 md:px-12 lg:px-20 py-12 relative"
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
        <div className="bg-black dark:bg-white text-white dark:text-black w-24 h-24 rounded-full flex items-center justify-center text-sm font-medium ">
          View
        </div>
      </div>

      {/* Hero Title */}
      <div className="hero-title">
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
            className={`work-item opacity-0 translate-y-12 transition-all duration-500 cursor-pointer ${
              index > 0 ? "border-t border-gray-200 dark:border-gray-800" : ""
            }`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => handleMouseEnter(work.id)}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigateToProject(work.name)}
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
                <h2 className="text-3xl md:text-4xl font-light mb-2 ">
                  {work.name}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {work.shortdesc}
                </p>
                <button
                  className="text-sm mt-4 opacity-60 hover:opacity-100 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateToProject(work.name);
                  }}
                >
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
                  className={`relative overflow-hidden rounded-2xl transition-all duration-700 cursor-none shadow-gray-500 dark:shadow-gray-900 drop-shadow-xs ${
                    hoveredId === work.id ? "scale-[1.02]" : "scale-100"
                  }`}
                  style={{
                    aspectRatio: "16/9",
                  }}
                  onMouseEnter={handleImageMouseEnter}
                  onMouseLeave={handleImageMouseLeave}
                >
                  <Image
                    src={work.image}
                    alt={work.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Creative CTA Section */}
      <div className="mt-32 mb-20">
        <div className="border-t border-gray-200 dark:border-gray-800 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-light tracking-tight">
                Let&apos;s Create
                <br />
                Something
                <br />
                <span className="text-red-500">Amazing.</span>
              </h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-md">
                Have a project in mind? I&apos;d love to hear about it.
                Let&apos;s work together to bring your ideas to life.
              </p>
            </div>

            {/* Right Side - CTA Buttons */}
            <div className="space-y-6 lg:pl-12">
              <a
                href="mailto:shihabrsaleem@gmail.com"
                className="group block relative overflow-hidden bg-black dark:bg-white text-white dark:text-black px-8 py-6 rounded-2xl transition-all duration-500 hover:scale-105"
              >
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-2xl font-light">Get In Touch</span>
                  <svg
                    className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href={`https://${info.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-2 border-gray-200 dark:border-gray-800 px-6 py-4 rounded-2xl transition-all duration-300 hover:border-black dark:hover:border-white text-center"
                >
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href={`https://${info.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-2 border-gray-200 dark:border-gray-800 px-6 py-4 rounded-2xl transition-all duration-300 hover:border-black dark:hover:border-white text-center"
                >
                  <span className="text-sm font-medium">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
