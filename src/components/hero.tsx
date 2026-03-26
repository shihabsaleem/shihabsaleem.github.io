"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import assetData from "@/data/asset";
import { IoLogoWhatsapp, IoMail, IoClose } from "react-icons/io5";

const info = assetData.info[0];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "expo.out", duration: 1.2 },
      });

      tl.fromTo(
        ".hero-bg-text",
        { opacity: 0, scale: 0.8, y: 50 },
        { opacity: 0.05, scale: 1, y: 0, duration: 1.5 },
        0
      )
        .fromTo(
          ".main-portrait",
          { opacity: 0, scale: 1.05, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2 },
          0.2
        )
        .fromTo(
          ".floating-card",
          { opacity: 0, y: 20, rotateX: -10 },
          { opacity: 1, y: 0, rotateX: 0, stagger: 0.15 },
          0.5
        )
        .fromTo(
          ".hero-content-reveal",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.08 },
          0.7
        )
        .fromTo(
          ".role-tag",
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, stagger: 0.1 },
          1.0
        )
        .fromTo(
          ".scroll-indicator",
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 1, ease: "bounce.out" },
          1.5
        );

      if (!isMobile) {
        const handleMouseMove = (e: MouseEvent) => {
          const { clientX, clientY } = e;
          const xPos = (clientX / window.innerWidth - 0.5) * 30;
          const yPos = (clientY / window.innerHeight - 0.5) * 30;

          gsap.to(".main-portrait", { x: xPos * 0.4, y: yPos * 0.4, duration: 0.8 });
          gsap.to(".hero-bg-text", { x: -xPos * 0.15, y: -yPos * 0.15, duration: 1.2 });
          gsap.to(".floating-card", {
            x: (i: number) => xPos * (i + 1) * 0.15,
            y: (i: number) => yPos * (i + 1) * 0.15,
            duration: 0.8
          });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  useEffect(() => {
    if (showPopup) {
      gsap.fromTo(
        ".popup-content",
        { scale: 0.95, opacity: 0, y: 10 },
        { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        ".popup-backdrop",
        { opacity: 0 },
        { opacity: 1, duration: 0.2 }
      );
    }
  }, [showPopup]);

  const ContactModal = () => (
    <div
      className="popup-backdrop fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
      onClick={(e) => {
        if (e.target === e.currentTarget) setShowPopup(false);
      }}
    >
      <div className="popup-content relative w-full max-w-sm bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent opacity-50" />
        <button onClick={() => setShowPopup(false)} className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors z-10">
          <IoClose size={24} />
        </button>
        <div className="text-center mb-10 relative z-10">
          <h3 className="text-3xl font-sans mb-2">Let's connect</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Pick your preferred channel</p>
        </div>
        <div className="space-y-4 relative z-10">
          <a href={`https://wa.me/${info.phone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full p-5 bg-green-500/5 hover:bg-green-500/10 border border-green-500/10 hover:border-green-500/30 rounded-2xl transition-all group active:scale-95">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-500 rounded-xl text-white shadow-lg shadow-green-500/20"><IoLogoWhatsapp size={22} /></div>
              <div className="text-left">
                <p className="font-bold text-green-600 dark:text-green-400">WhatsApp</p>
                <p className="text-xs text-gray-400 tracking-wide uppercase">Quickest Reply</p>
              </div>
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-green-500/10 group-hover:bg-green-500 group-hover:text-white transition-all transform group-hover:rotate-[-45deg]">→</div>
          </a>
          <a href={`mailto:${info.email}`} className="flex items-center justify-between w-full p-5 bg-red-500/5 hover:bg-red-500/10 border border-red-500/10 hover:border-red-500/30 rounded-2xl transition-all group active:scale-95">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-600 rounded-xl text-white shadow-lg shadow-red-600/20"><IoMail size={22} /></div>
              <div className="text-left">
                <p className="font-bold text-red-600 dark:text-red-400">Email Me</p>
                <p className="text-xs text-gray-400 tracking-wide uppercase">Formal Requests</p>
              </div>
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-red-500/10 group-hover:bg-red-600 group-hover:text-white transition-all transform group-hover:rotate-[-45deg]">→</div>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col overflow-hidden font-sans">
      {/* Background Large Text with Gradient */}
      <div className="hero-bg-text absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <h2 className="text-[18vw] font-display uppercase tracking-[-0.05em] opacity-[0.03] dark:opacity-[0.05] leading-none select-none">
          {info.name.split(" ")[0]}
        </h2>
      </div>

      {/* Main Grid Layout */}
      <div className="relative flex-1 container mx-auto px-6 md:px-12 flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 items-center lg:items-stretch py-12 md:py-20 z-10">
        
        {/* Portrait Image Section (Top on mobile/tablet) */}
        <div className="lg:col-span-4 relative flex items-center justify-center order-1 lg:order-2">
          <div className="main-portrait relative w-72 h-72 lg:w-full lg:max-w-md lg:aspect-[4/5] opacity-0">
            <Image
              src={info.dpLight}
              alt={info.name}
              fill
              className="object-contain block dark:hidden"
              priority
            />
            <Image
              src={info.dpDark}
              alt={info.name}
              fill
              className="object-contain hidden dark:block"
              priority
            />
          </div>

          {/* Floating Stat Cards (Desktop Only) */}
          {!isMobile && (
            <>
              <div className="floating-card absolute -top-4 -right-8 p-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl border border-white/40 dark:border-zinc-800/40 rounded-3xl shadow-2xl z-20 transition-transform duration-500 hover:scale-110 cursor-default">
                <p className="text-2xl font-sans font-bold leading-tight">3yr<span className="text-red-600">+</span></p>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-1">Experience</p>
              </div>
              <div className="floating-card absolute bottom-12 -left-12 p-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl border border-white/40 dark:border-zinc-800/40 rounded-3xl shadow-2xl z-20 transition-transform duration-500 hover:scale-110 cursor-default">
                <p className="text-2xl font-sans font-bold leading-tight">30<span className="text-red-600">+</span></p>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-1">Projects</p>
              </div>
            </>
          )}
        </div>

        {/* Bio Section (Middle on mobile/tablet) */}
        <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 mt-12 lg:mt-0 lg:pr-12 text-center lg:text-left items-center lg:items-start">
          <div className="hero-content-reveal">
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <span className="w-8 h-[1px] bg-red-600" />
              <span className="text-red-600 font-semibold tracking-widest uppercase text-xs">Based in {info.location}</span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-sm leading-relaxed mb-8">
              {info.pdesc}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-display leading-[0.80] mb-8 tracking-tighter">
              {info.name}<span className="text-red-600">.</span>
            </h1>
          </div>

          <div className="hero-content-reveal flex items-center justify-center lg:justify-start gap-3 lg:gap-5 whitespace-nowrap">
            <button
              onClick={() => setShowPopup(true)}
              className="px-4 lg:px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/10 dark:shadow-white/5 cursor-pointer text-xs lg:text-base font-sans"
            >
              Hire me now
            </button>
            <div className="group inline-flex items-center gap-2 lg:gap-3 px-4 lg:px-6 py-3 border border-gray-200 dark:border-zinc-800 rounded-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl transition-all hover:border-red-600/30">
              <span className="relative flex h-2.5 w-2.5 lg:h-3 lg:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 lg:h-3 lg:w-3 bg-red-600"></span>
              </span>
              <span className="text-xs lg:text-base font-medium tracking-tight font-sans">Available to work</span>
            </div>
          </div>
        </div>

        {/* Right Section: Roles & Socials (Bottom on mobile/tablet) */}
        <div className="lg:col-span-3 flex flex-col justify-between items-center lg:items-end order-3 py-12 lg:py-0 text-center lg:text-right">
          <div className="flex flex-col items-center lg:items-end gap-12 w-full">
            <div className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-black mb-6">Expertise</h3>
              {["Product Designer", "Frontend Developer", "Brand Strategist"].map((role) => (
                <div
                  key={role}
                  className="role-tag group flex items-center gap-4 cursor-default justify-center lg:justify-end"
                >
                  <span className="text-sm lg:text-lg font-sans transition-all group-hover:text-red-600 group-hover:pr-2">{role}</span>
                  <div className="w-2 h-2 rounded-full bg-gray-200 dark:bg-zinc-800 transition-all group-hover:bg-red-600 group-hover:scale-150" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-8 w-full mt-auto pt-12 lg:pt-0">
            <div className="flex items-center gap-6 hero-content-reveal">
              {[
                { label: "LinkedIn", url: `https://${info.linkedin}` },
                { label: "GitHub", url: `https://${info.github}` },
                { label: "Behance", url: `https://${info.behance}` },
                { label: "Instagram", url: `https://${info.insta}` },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.url.startsWith('http') ? s.url : `https://${s.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-black dark:hover:text-white transition-colors py-2"
                >
                  {s.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Scroll</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-red-600 to-transparent animate-pulse" />
      </div>

      {showPopup && <ContactModal />}
    </div>
  );
};

export default Hero;
