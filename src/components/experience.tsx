"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import assetData from "@/data/asset";

gsap.registerPlugin(ScrollTrigger);

const Experience = ({ data = assetData.experience }) => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Fade In
      gsap.from(".exp-title", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".exp-title",
          start: "top 90%",
        },
      });

      // 2. Individual Row Fade In on Scroll
      const rows = gsap.utils.toArray(".exp-row");
      rows.forEach((row: any) => {
        gsap.fromTo(
          row,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%", // Triggers when the top of the row hits 85% of viewport height
              toggleActions: "play pause resume reset", 
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white dark:bg-[#050505] text-black dark:text-white py-12 md:py-24 px-5 md:px-12 lg:px-20 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className=" mb-8 md:mb-12">
          <h2 className="exp-title text-[8vw] md:text-[5vw] font-black uppercase leading-[0.8] tracking-tighter mb-8">
            Work History<span className="text-red-600">.</span>
          </h2>
          <div className="h-[1px] w-full bg-black/10 dark:bg-white/10" />
        </div>

        <div className="exp-list">
          {data.map((item, i) => (
            <div
              key={i}
              className="exp-row group relative border-b border-black/10 dark:border-white/10 hover:bg-black/[0.01] dark:hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 py-10 md:py-16 items-center gap-6 md:gap-4">
                
                {/* 1. Counter */}
                <div className="md:col-span-1 hidden md:block">
                  <span className="font-mono text-xs text-gray-400 group-hover:text-red-600 transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* 2. Timeline Period */}
                <div className="md:col-span-2">
                  <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-bold">
                    {item.start} — {item.end}
                  </p>
                </div>

                {/* 3. Role & Company Details */}
                <div className="md:col-span-7 lg:col-span-8">
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter group-hover:pl-4 transition-all duration-500 ease-out">
                    {item.Designation}
                  </h3>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="h-[1px] w-6 bg-red-600 opacity-50" />
                    <a
                      href={item.CLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base md:text-xl font-medium text-gray-500 dark:text-gray-400 hover:text-red-600 transition-colors"
                    >
                      {item.Company}
                    </a>
                  </div>
                </div>

                {/* 4. Action Icon - Legibility Optimized */}
                <div className="md:col-span-2 lg:col-span-1 flex justify-start md:justify-end">
                   <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-all duration-500 shadow-sm">
                      <svg 
                        width="14" 
                        height="14" 
                        viewBox="0 0 15 15" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:rotate-45 transition-transform duration-500"
                      >
                        <path d="M1 14L14 1M14 1H5M14 1V10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;