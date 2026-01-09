"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import assetData from "@/data/asset";

const Experience = ({ data = assetData.experience }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".exp-heading",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".exp-item",
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleItemHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const icon = card.querySelector(".exp-icon");
    const line = card.querySelector(".exp-line");

    gsap.to(card, {
      scale: 1.02,
      duration: 0.4,
      ease: "power2.out",
    });

    if (icon) {
      gsap.to(icon, {
        rotation: 180,
        scale: 1.1,
        duration: 0.5,
        ease: "back.out(1.7)",
      });
    }

    if (line) {
      gsap.to(line, {
        scaleX: 1,
        duration: 0.5,
      });
    }
  };

  const handleItemLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const icon = card.querySelector(".exp-icon");
    const line = card.querySelector(".exp-line");

    gsap.to(card, {
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    });

    if (icon) {
      gsap.to(icon, {
        rotation: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    }

    if (line) {
      gsap.to(line, {
        scaleX: 0,
        duration: 0.5,
      });
    }
  };

  const handleCompanyHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    const arrow = e.currentTarget.querySelector(".arrow");
    if (arrow) {
      gsap.to(arrow, {
        x: 5,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleCompanyLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    const arrow = e.currentTarget.querySelector(".arrow");
    if (arrow) {
      gsap.to(arrow, {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative px-6 md:px-12 lg:px-20 py-24 bg-white dark:bg-black text-black dark:text-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-40 left-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <h2 className="exp-heading text-3xl md:text-5xl font-display mb-16 relative inline-block">
          Work Experience<span className="text-red-600">.</span>
          <div className="absolute -bottom-2 left-0 w-24 h-1 bg-red-600" />
        </h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {data.map((item, i) => (
            <div
              key={i}
              className="exp-item group cursor-pointer"
              onMouseEnter={handleItemHover}
              onMouseLeave={handleItemLeave}
            >
              <div className="relative h-full bg-gradient-to-br from-gray-50 to-white dark:from-zinc-900 dark:to-zinc-950 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-800 hover:border-red-600/50 dark:hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/10 overflow-hidden flex flex-col">
                {/* Background number */}
                <div className="absolute top-4 right-4 text-6xl md:text-7xl font-bold text-gray-100 dark:text-gray-900 select-none opacity-50">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Top corner icon */}
                <div className="exp-icon absolute top-6 left-6 w-12 h-12 bg-red-600/10 dark:bg-red-600/20 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-red-600 rounded-full" />
                </div>

                <div className="relative z-10 flex-1 flex flex-col pt-16">
                  <h3 className="text-xl md:text-2xl font-normal mb-3 group-hover:text-red-600 transition-colors">
                    {item.Designation}
                  </h3>

                  <a
                    href={item.CLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-base md:text-lg text-gray-600 dark:text-gray-400 font-medium hover:text-red-600 transition-colors mb-4"
                    onMouseEnter={handleCompanyHover}
                    onMouseLeave={handleCompanyLeave}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.Company}
                    <span className="arrow inline-block">→</span>
                  </a>

                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-zinc-800 rounded-full border border-gray-200 dark:border-gray-700">
                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
                      {item.start} — {item.end}
                    </span>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="exp-line absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-400 to-purple-600 transform scale-x-0 origin-left" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;