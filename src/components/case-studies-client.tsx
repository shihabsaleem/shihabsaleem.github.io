"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import caseStudies from "@/data/casestudy.js";
import LegalLinks from "@/components/legal";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudiesClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.from(".hero-title", { opacity: 0, y: 50, duration: 1, ease: "power3.out" });
      gsap.from(".hero-subtitle", { opacity: 0, y: 20, duration: 1, ease: "power3.out", delay: 0.2 });

      // Staggered Case Studies
      gsap.utils.toArray<HTMLElement>(".cs-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
          opacity: 0,
          y: 60,
          duration: 1,
          ease: "power3.out"
        });
        
        const img = item.querySelector(".cs-img");
        if (img) {
          gsap.fromTo(img, 
            { scale: 1.1 }, 
            { 
              scale: 1, 
              duration: 1.5, 
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
              }
            }
          );
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#f8f7f5] dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 overflow-x-hidden selection:bg-red-600 selection:text-white transition-colors duration-500">
      
      {/* Texture Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-[url('/noise.svg')]" />

      {/* HERO */}
      <main className="relative z-10 pt-32 pb-16 md:pt-48 md:pb-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <h1 className="hero-title text-[14vw] md:text-[10vw] leading-[0.85] font-black tracking-tighter text-zinc-900 dark:text-white">
          Selected
          <br />
          Work<span className="text-red-600">.</span>
        </h1>
        <p className="hero-subtitle mt-8 text-lg md:text-2xl font-light text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
          In-depth looks at how I frame problems, make design decisions, and ship products that work.
        </p>
      </main>

      {/* CASE STUDIES LIST */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-32 space-y-32 md:space-y-48">
        {caseStudies.map((study: any, index: number) => {
          const isEven = index % 2 === 0;
          return (
            <div key={study.id} className="cs-item relative group">
              {/* Giant Watermark Number */}
              <div 
                className={`absolute top-0 md:-top-20 ${isEven ? 'right-0' : 'left-0'} text-[25vw] md:text-[15vw] font-black leading-none text-zinc-200/50 dark:text-zinc-800/30 select-none pointer-events-none tabular-nums z-0`}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className={`relative z-10 flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-20 items-center`}>
                
                {/* Image Section */}
                <Link href={`/case-studies/${study.slug}`} className="w-full lg:w-[60%] block overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer">
                  <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                    <Image
                      src={study.heroImage}
                      alt={study.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="cs-img object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:group-hover:bg-black/20 transition-colors duration-500" />
                  </div>
                </Link>

                {/* Content Section */}
                <div className={`w-full lg:w-[40%] flex flex-col ${!isEven ? 'lg:items-end lg:text-right' : ''}`}>
                  <div className="mb-6 flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-[9px] font-bold uppercase tracking-widest border border-zinc-300 dark:border-zinc-700 rounded-full text-zinc-500 dark:text-zinc-400">
                      {study.year}
                    </span>
                    <span className="px-3 py-1 text-[9px] font-bold uppercase tracking-widest border border-zinc-300 dark:border-zinc-700 rounded-full text-zinc-500 dark:text-zinc-400">
                      {study.platform}
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-6 text-zinc-900 dark:text-white group-hover:text-red-600 transition-colors duration-300">
                    {study.name}
                  </h2>
                  
                  <p className="text-base md:text-lg font-light text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed line-clamp-4">
                    {study.hook}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-10 w-full">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-red-600 mb-1">Role</p>
                      <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{study.role}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-red-600 mb-1">Duration</p>
                      <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{study.duration}</p>
                    </div>
                  </div>

                  <Link 
                    href={`/case-studies/${study.slug}`} 
                    className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors duration-300 relative overflow-hidden group/btn"
                  >
                    <span>View Case Study</span>
                    <span className="w-8 h-[1px] bg-current transform origin-left group-hover/btn:scale-x-150 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="py-12 px-6 md:px-12 lg:px-20 border-t border-zinc-200 dark:border-zinc-800">
        <LegalLinks />
      </div>
    </div>
  );
}
