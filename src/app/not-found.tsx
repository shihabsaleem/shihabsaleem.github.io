"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.from(".not-found-content > *", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
      });

      // Subtle glitch effect on the 404 text
      gsap.to(textRef.current, {
        skewX: 20,
        duration: 0.1,
        repeat: 5,
        yoyo: true,
        paused: true,
        onComplete: () => {
          gsap.set(textRef.current, { skewX: 0 });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white flex items-center px-6 md:px-12 lg:px-20 selection:bg-red-600 selection:text-white transition-colors duration-500 overflow-hidden"
    >
      {/* Texture Overlay (Consistent with Home) */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <main className="relative z-10 not-found-content w-full">
        <span className="font-mono text-red-600 text-sm mb-4 block tracking-[0.3em]">
          ERROR_CODE: 404
        </span>

        <h1
          ref={textRef}
          className="text-[15vw] md:text-[12vw] font-black leading-none tracking-tighter uppercase mb-8"
        >
          Lost in <br />
          <span className="text-red-600">Space.</span>
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-md mb-12 uppercase tracking-widest leading-relaxed">
          The page you are looking for has been moved, deleted, or never existed
          in this dimension.
        </p>

        <Link
          href="/"
          className="group relative inline-flex items-center gap-4 px-8 py-4 border border-black/20 dark:border-white/20 hover:border-red-600 transition-colors duration-500 overflow-hidden"
        >
          <span className="relative z-10 font-mono text-sm tracking-widest uppercase group-hover:text-red-600 transition-colors">
            Return to Safety
          </span>
          <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
        </Link>
      </main>

      {/* Decorative Background Element */}
      <div className="absolute right-[-10%] bottom-[-10%] text-[40vw] font-black text-black/[0.03] dark:text-white/[0.02] select-none pointer-events-none">
        404
      </div>
    </div>
  );
}
