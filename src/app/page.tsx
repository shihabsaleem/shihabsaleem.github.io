"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LegalLinks from "@/components/legal";
import assetData from "@/data/asset";

gsap.registerPlugin(ScrollTrigger);

// 1. Sort the works descending (ID 8 to ID 1)
const sortedWorks = [...assetData.works].sort((a, b) => b.id - a.id);
const info = assetData.info[0];

export default function Home() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [activeCursor, setActiveCursor] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 2. Use sortedWorks for animations
      sortedWorks.forEach((work) => {
        gsap.fromTo(
          `.work-${work.id} .work-image-container`,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: `.work-${work.id}`,
              start: "top 50%",
            },
          }
        );
      });

      gsap.from(".footer-content > *", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white overflow-x-hidden selection:bg-red-600 selection:text-white transition-colors duration-500"
    >
      {/* Hero Section */}
      <h1 className="sr-only">
        {info.name} - UI/UX Designer, Developer & Branding Specialist in{" "}
        {info.location}
      </h1>

      {/* Texture Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Cursor */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-4 h-4 bg-black dark:bg-white rounded-full z-[9999] pointer-events-none mix-blend-difference transition-transform duration-500 ${activeCursor ? "scale-[6]" : "scale-100"
          }`}
      />

      <main className="relative z-10 pt-20">
        {/* HERO */}
        <section className=" h-[30vh] md:h-[70vh] flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-20">
          <h2 className="text-[14vw] md:text-[10vw] leading-[0.8] font-black  tracking-tighter">
            Selected
            <br />
            Works<span className="text-red-600">.</span>
          </h2>
        </section>

        {/* WORKS LIST */}
        {/* WORKS LIST */}
        <section className="border-t border-black/10 dark:border-white/10">
          {/* Add 'index' to the map function */}
          {sortedWorks.map((work, index) => (
            <Link
              key={work.id}
              href={`/${work.name.toLowerCase().replace(/\s+/g, "-")}`}
              className={`work-${work.id} block group border-b border-black/10 dark:border-white/10 hover:bg-black/[0.01] dark:hover:bg-white/[0.01] transition-colors`}
              onMouseEnter={() => setActiveCursor(true)}
              onMouseLeave={() => setActiveCursor(false)}
            >
              <div className="px-6 md:px-12 lg:px-20 py-24 grid grid-cols-12 gap-8 items-center cursor-pointer">
                <div className="col-span-12 lg:col-span-4">
                  {/* Change: Use (index + 1) instead of work.id */}
                  <span className="font-mono text-red-600 text-xs mb-4 block">
                    [{String(index + 1).padStart(2, "0")}]
                  </span>

                  <h2 className="text-5xl md:text-7xl font-bold mb-6 group-hover:italic transition-all">
                    {work.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs uppercase tracking-widest">
                    {work.shortdesc}
                  </p>
                </div>

                <div className="col-span-12 lg:col-span-8">
                  <div className="work-image-container relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image
                      src={work.image}
                      alt={work.name}
                      width={1200}
                      height={675}
                      className="w-full h-auto transform scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* FOOTER */}
        <footer className="cta-section pt-40 pb-20 px-6 border-t border-black/10 dark:border-white/10">
          <div className="max-w-7xl mx-auto footer-content">
            <div className="text-center mb-32">
              <h2 className="text-[10vw] font-black leading-none tracking-tighter uppercase mb-12">
                Let's Make <br /> <span className="text-red-600">History.</span>
              </h2>
              <a
                href={`mailto:${info.email}`}
                className="text-2xl md:text-5xl font-light hover:text-red-600 transition-colors border-b border-black/20 dark:border-white/20 hover:border-red-600 pb-4 inline-block"
              >
                {info.email}
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end pt-20 border-t border-black/5 dark:border-white/5">
              <div className="space-y-2">
                <p className="font-mono text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-[0.3em]">
                  Based in
                </p>
                <p className="text-lg font-medium italic">{info.location}</p>
              </div>

              <div className="flex justify-center gap-8">
                {[
                  { label: "LI", url: info.linkedin },
                  { label: "GH", url: info.github },
                  { label: "BE", url: info.behance },
                  { label: "IN", url: info.insta },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={
                      social.url.startsWith("http")
                        ? social.url
                        : `https://${social.url}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs hover:text-red-600 transition-colors tracking-widest"
                  >
                    {social.label}
                  </a>
                ))}
              </div>

              <div className="md:text-right flex flex-col gap-6 items-start md:items-end">
                <div className="space-y-1">
                  <p className="font-mono text-[9px] text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                    Instant Chat
                  </p>
                  <a
                    href={`https://wa.me/${info.phone.replace(/\+/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-red-600 transition-colors flex items-center md:justify-end gap-2"
                  >
                    <span>WhatsApp</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  </a>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="font-mono text-[9px] text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                    Documents
                  </p>
                  <a
                    href={info.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-black/20 dark:border-white/20 text-[10px] font-bold uppercase tracking-widest hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 rounded-sm"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-black/5 dark:border-white/5">
              <LegalLinks />
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
