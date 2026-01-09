"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import assetData from "@/data/asset";

const Education = ({ data = assetData.education }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".edu-heading",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".edu-item",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleItemHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const line = card.querySelector(".edu-line");
    
    gsap.to(card, {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
    });

    if (line) {
      gsap.to(line, {
        scaleX: 1,
        duration: 0.4,
      });
    }
  };

  const handleItemLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const line = card.querySelector(".edu-line");
    
    gsap.to(card, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });

    if (line) {
      gsap.to(line, {
        scaleX: 0,
        duration: 0.4,
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative px-6 md:px-12 lg:px-20 py-24 bg-white dark:bg-black text-black dark:text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className=" mb-8 md:mb-12">
          <h2 className="exp-title text-[8vw] md:text-[5vw] font-black uppercase leading-[0.8] tracking-tighter mb-8">
            Education<span className="text-red-600">.</span>
          </h2>
          <div className="h-[1px] w-full bg-black/10 dark:bg-white/10" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {data.map((edu, index) => (
            <div
              key={edu.id}
              className="edu-item group cursor-pointer"
              onMouseEnter={handleItemHover}
              onMouseLeave={handleItemLeave}
            >
              <div className="relative h-full bg-gray-50 dark:bg-zinc-900 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-800 hover:border-red-600/50 dark:hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/10 overflow-hidden">
                {/* Card number */}
                <div className="absolute top-4 right-4 text-5xl font-bold text-gray-100 dark:text-gray-900 select-none">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative z-10">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-zinc-800 rounded-full mb-4">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    {edu.start} — {edu.end}
                  </span>

                  <h3 className="text-xl md:text-2xl font-black mb-4 group-hover:text-red-600 transition-colors leading-tight">
                    {edu.qualification}
                  </h3>

                  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 font-medium mb-2">
                    {edu.College}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {edu.Aff}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="edu-line absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-transparent transform scale-x-0 origin-left" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;