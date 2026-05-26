"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import assetData from "@/data/asset";

const Education = ({ data = assetData.education }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const heading = document.querySelector(".edu-heading");
      if (heading) {
        gsap.fromTo(
          heading,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          }
        );
      }

      const items = gsap.utils.toArray(".edu-item");
      if (items.length > 0) {
        gsap.fromTo(
          items,
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
      }
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  const handleItemHover = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const dot = card.querySelector(".edu-dot");
    const line = card.querySelector(".edu-line");

    gsap.to(card, {
      rotationY: x * 0.03,
      rotationX: -y * 0.03,
      scale: 1.03,
      duration: 0.3,
      ease: "power2.out",
    });

    if (dot) {
      gsap.to(dot, {
        scale: 1.3,
        backgroundColor: "#dc2626",
        duration: 0.3,
      });
    }

    if (line) {
      gsap.to(line, {
        scaleX: 1,
        duration: 0.4,
      });
    }
  };

  const handleItemLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const dot = card.querySelector(".edu-dot");
    const line = card.querySelector(".edu-line");

    gsap.to(card, {
      rotationY: 0,
      rotationX: 0,
      scale: 1,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
    });

    if (dot) {
      gsap.to(dot, {
        scale: 1,
        backgroundColor: "transparent",
        duration: 0.3,
      });
    }

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
      className="relative px-6 md:px-12 lg:px-20 py-12 text-zinc-900 dark:text-zinc-100 overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20">
          <h2 className="edu-heading text-[8vw] md:text-[5vw] font-black uppercase leading-[0.8] tracking-tighter mb-8 text-zinc-900 dark:text-white">
            Education<span className="text-red-600">.</span>
          </h2>
          <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 perspective-1000">
          {data.map((edu, index) => (
            <div
              key={edu.id}
              className="edu-item group cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
              onMouseMove={handleItemHover}
              onMouseLeave={handleItemLeave}
            >
              <div
                className="relative h-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-zinc-200 dark:border-zinc-800/80 hover:border-red-600/30 dark:hover:border-red-600/30 transition-all duration-300 hover:shadow-[0_30px_60px_-15px_rgba(220,38,38,0.1)] overflow-hidden flex flex-col justify-between"
                style={{ transformStyle: "preserve-3d" }}
              >

                {/* Background decorative glow */}
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-red-600/5 dark:bg-red-600/10 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />

                {/* Top header within card */}
                <div className="relative z-10 flex items-start justify-between mb-8" style={{ transform: "translateZ(30px)" }}>
                  <span className="inline-flex items-center gap-2.5 px-4 py-2 text-xs font-bold text-zinc-500 dark:text-zinc-400 bg-zinc-100/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-full uppercase tracking-wider">
                    <span className="edu-dot w-2 h-2 rounded-full border-2 border-red-600 transition-all duration-300" />
                    {edu.start} — {edu.end}
                  </span>

                  {/* Floating index indicator */}
                  <span className="text-4xl font-mono font-black text-zinc-100 dark:text-zinc-800/40 select-none tracking-tighter">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Qualification details */}
                <div className="relative z-10 flex-1 mb-6" style={{ transform: "translateZ(40px)" }}>
                  <h3 className="text-2xl md:text-3xl font-black mb-4 group-hover:text-red-600 transition-colors leading-tight text-zinc-900 dark:text-white">
                    {edu.qualification}
                  </h3>

                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600/50" />
                    <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 font-bold tracking-tight">
                      {edu.College}
                    </p>
                  </div>

                  <p className="text-sm font-mono text-zinc-400 dark:text-zinc-500 pl-4 border-l border-zinc-200 dark:border-zinc-800 py-0.5">
                    {edu.Aff}
                  </p>
                </div>

                {/* Bottom line decorative highlight */}
                <div className="edu-line absolute bottom-0 left-0 right-0 h-[3px] bg-linear-to-r from-red-600 via-red-500 to-transparent transform scale-x-0 origin-left" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;