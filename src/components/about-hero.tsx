"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import assetData from "@/data/asset";
import { FaLinkedinIn, FaGithub, FaBehance, FaInstagram } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import localFont from "next/font/local";

const halimun = localFont({ src: "../../public/Halimun.ttf" });

const info = assetData.info[0];

/* ─────────────────────────────────────────────
   HALO CONSTANTS  — tweak these to taste
───────────────────────────────────────────── */
const HALO = {
  /* Neon ring */
  neonSize: "112%",          // diameter relative to portrait wrapper
  neonColor: "239,68,68",    // RGB of red-500
  neonOpacity: 0.85,         // border opacity
  glowSpread: "45px",        // box-shadow spread
  glowOpacity: 0.55,         // glow alpha
  /* Arc mask — conic-gradient */
  arcFrom: "280deg",         // where the arc begins
  arcFadeIn: "10%",          // how far into the arc it fades in
  arcPeak: "18%",            // where it reaches full opacity
  arcPeakEnd: "68%",         // where it starts fading out
  arcFadeOut: "78%",         // where it goes back to transparent
  /* Glass / refraction ring */
  glassSize: "118%",
  glassBlur: "18px",
  glassSaturate: "200%",
  glassBorderOpacity: 0.2,
};

/* Shared conic mask used by both rings */
const conicMask = `conic-gradient(
  from ${HALO.arcFrom} at center,
  transparent 0%,
  rgba(0,0,0,0.55) ${HALO.arcFadeIn},
  black ${HALO.arcPeak},
  black ${HALO.arcPeakEnd},
  rgba(0,0,0,0.55) ${HALO.arcFadeOut},
  transparent 82%,
  transparent 100%
)`;

const AboutHero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1.2 },
      });

      tl.fromTo(
        ".about-portrait-wrap",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.5 },
        0.2
      );

      tl.fromTo(
        ".halo-neon, .halo-glass",
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, stagger: 0.18, duration: 1.6, ease: "power2.out" },
        0.35
      );

      tl.fromTo(
        ".about-reveal-line",
        { opacity: 0, scaleX: 0 },
        { opacity: 1, scaleX: 1, transformOrigin: "left center", duration: 0.8 },
        0.6
      );

      tl.fromTo(
        ".about-reveal",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1 },
        0.8
      );

      tl.fromTo(
        ".about-float-card",
        { opacity: 0, y: 20, rotateX: -10 },
        { opacity: 1, y: 0, rotateX: 0, stagger: 0.15 },
        1.2
      );

      tl.fromTo(
        ".about-expertise-item",
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, stagger: 0.1 },
        1.4
      );

      tl.fromTo(
        ".about-footer-reveal",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, stagger: 0.1 },
        1.6
      );
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#f8f7f5] dark:bg-black text-black dark:text-white overflow-hidden font-sans flex flex-col pt-24 pb-12"
    >
      {/* Texture Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] bg-[url('/noise.svg')]" />

      {/* Dot grid — dark */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20 hidden dark:block"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Dot grid — light */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20 block dark:hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Main Grid ── */}
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 md:px-12 lg:px-20 lg:pl-28 w-full max-w-[1920px] mx-auto items-center">

        {/* Vertical label — left edge */}
        <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 about-reveal">
          <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
          <p
            className="text-[10px] font-bold tracking-[0.25em] text-zinc-500 uppercase rotate-180"
            style={{ writingMode: "vertical-rl" }}
          >
            Available to work
          </p>
        </div>

        {/* ── Left: Typography & Bio ── */}
        <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 pt-12 lg:pt-0">
          <div className="flex items-center gap-4 mb-6 about-reveal">
            <span className="w-10 h-px bg-red-600 about-reveal-line" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-red-600">
              Based in {info.location}
            </span>
          </div>

          <h1 className="about-reveal text-6xl lg:text-8xl leading-[0.85] font-black tracking-tighter mb-8 text-black dark:text-white">
            Shihab
            <br />
            <span className="text-red-600">Saleem.</span>
          </h1>

          <p className="about-reveal text-sm md:text-base font-light leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-md mb-8">
            {info.pdesc}
          </p>

          <div className="about-reveal mb-12 ml-4">
            <p className={`${halimun.className} text-3xl text-red-600 transform -rotate-3 opacity-90`}>
              Shihab Saleem
            </p>
          </div>

          <div className="about-reveal flex flex-wrap items-center gap-6">
            <button className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold text-sm tracking-wide flex items-center gap-3 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-lg shadow-black/10 dark:shadow-white/10">
              Hire me now <GoArrowRight size={20} />
            </button>
            <div className="px-6 py-3.5 border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-black/40 backdrop-blur-md rounded-full font-medium text-xs tracking-widest uppercase text-zinc-600 dark:text-zinc-300 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
              </span>
              Available to work
            </div>
          </div>
        </div>

        {/* ── Center: Portrait + Halo ── */}
        <div className="lg:col-span-4 relative flex items-center justify-center order-1 lg:order-2 h-[50vh] lg:h-[80vh]">

          {/*
           * ─── HALO LAYER 1: Neon glow ring ─────────────────────────────────
           *
           * A thin border styled with box-shadow (inner + outer glow).
           * A conic-gradient mask reveals only a partial arc so the ring
           * appears to wrap around one side of the portrait instead of being
           * a full circle.
           *
           * Key CSS properties:
           *   border           → thin ring line (rgba with high opacity)
           *   box-shadow       → outer glow + inner glow via "inset"
           *   mask-image       → conic-gradient arc cutout
           *   mix-blend-mode   → "screen" so it blends into dark backgrounds
           */}
          <div
            className="halo-neon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{
              width: HALO.neonSize,
              aspectRatio: "1 / 1",
              zIndex: 3,
              border: `1px solid rgba(${HALO.neonColor}, ${HALO.neonOpacity})`,
              boxShadow: [
                `0 0 ${HALO.glowSpread} rgba(${HALO.neonColor}, ${HALO.glowOpacity})`,
                `inset 0 0 ${HALO.glowSpread} rgba(${HALO.neonColor}, ${HALO.glowOpacity})`,
              ].join(", "),
              WebkitMaskImage: conicMask,
              maskImage: conicMask,
              mixBlendMode: "screen",
            }}
          />

          {/*
           * ─── HALO LAYER 2: Glass / refraction ring ────────────────────────
           *
           * Slightly larger than the neon ring. Uses backdrop-filter to
           * create a frosted-glass / refractive shimmer effect — blurs and
           * saturates whatever is behind it (background texture, dot grid).
           *
           * The same conic mask keeps it on the same arc as the neon ring.
           * An inner SVG with `mask-image: radial-gradient` cuts out the
           * center so only the ring band gets the frosted effect (not the
           * portrait area).
           *
           * Key CSS properties:
           *   backdrop-filter  → blur + saturate for the glass look
           *   mask-image       → conic arc (outer) + radial hole (inner band)
           *   border           → very faint tinted border
           */}
          <div
            className="halo-glass absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{
              width: HALO.glassSize,
              aspectRatio: "1 / 1",
              zIndex: 2,
              /* Conic arc mask — same shape as the neon ring */
              WebkitMaskImage: conicMask,
              maskImage: conicMask,
            }}
          >
            {/*
             * Inner div applies the glass backdrop + radial hole mask.
             * Separating the two masks into parent/child avoids compositing
             * issues with stacked mask-image values in some browsers.
             */}
            <div
              className="w-full h-full rounded-full"
              style={{
                border: `1px solid rgba(${HALO.neonColor}, ${HALO.glassBorderOpacity})`,
                backdropFilter: `blur(${HALO.glassBlur}) saturate(${HALO.glassSaturate}) contrast(1.1) brightness(1.05)`,
                WebkitBackdropFilter: `blur(${HALO.glassBlur}) saturate(${HALO.glassSaturate}) contrast(1.1) brightness(1.05)`,
                filter: "url(#glass-distortion)",
                /*
                 * Radial mask punches a hole in the center so the glass
                 * effect only shows on the ring band (not over the portrait).
                 * 47% = just inside the neon ring radius.
                 */
                WebkitMaskImage: "radial-gradient(circle, transparent 47%, black 49%)",
                maskImage: "radial-gradient(circle, transparent 47%, black 49%)",
                /* Subtle dark-side gradient for depth */
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(239,68,68,0.03) 50%, rgba(0,0,0,0.04) 100%)",
              }}
            />
          </div>



          {/* Portrait */}
          <div className="about-portrait-wrap relative w-[80%] lg:w-full aspect-square max-w-sm lg:max-w-md z-10 rounded-full overflow-hidden border border-white/20 dark:border-white/10 bg-white/20 dark:bg-black/20 backdrop-blur-2xl">
            <Image
              src={info.dpLight}
              alt={info.name}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-top grayscale contrast-125 block dark:hidden"
              priority
            />
            <Image
              src={info.dpDark}
              alt={info.name}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-top grayscale contrast-125 hidden dark:block"
              priority
            />
          </div>

          {/* Floating Card: Projects (Bottom Left) */}
          <div className="about-float-card absolute -bottom-10 lg:bottom-10 left-0 lg:-left-24 z-20 px-8 py-6 bg-white/40 dark:bg-black/40 backdrop-blur-2xl border border-black/5 dark:border-white/5 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <p className="text-5xl font-normal mb-1 text-black dark:text-white">30 <span className="text-red-600">+</span></p>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500">Projects</p>
          </div>

          {/* Floating Card: Experience (Top Right) */}
          <div className="about-float-card absolute top-10 lg:top-20 right-0 lg:-right-24 z-20 px-8 py-6 bg-white/40 dark:bg-black/40 backdrop-blur-2xl border border-black/5 dark:border-white/5 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <p className="text-5xl font-normal mb-1 text-black dark:text-white">3yr <span className="text-red-600">+</span></p>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500">Experience</p>
          </div>
        </div>

        {/* ── Right: Expertise ── */}
        <div className="lg:col-span-3 flex flex-col justify-center order-3 pl-0 lg:pl-12 pt-12 lg:pt-0">
          <div className="flex items-center gap-4 mb-8 about-reveal">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-zinc-400">
              Expertise
            </span>
            <span className="w-8 h-px bg-red-600 about-reveal-line" />
          </div>

          <ul className="space-y-6">
            {["Product Designer", "Frontend Developer", "Brand Strategist"].map((item) => (
              <li key={item} className="about-expertise-item flex items-center gap-6 group">
                <span className="w-2.5 h-2.5 rounded-full border border-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)] group-hover:bg-red-600 transition-colors" />
                <span className="text-sm lg:text-base font-light tracking-wide text-zinc-500 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Footer / Socials ── */}
      <div className="relative z-20 mt-auto pt-12 px-6 md:px-12 lg:px-20 lg:pl-28 w-full max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-zinc-200 dark:border-zinc-900">
        <div className="about-footer-reveal w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-black dark:hover:text-white transition-colors cursor-pointer">
          <span className="font-bold text-sm">N</span>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6">
          {[
            { label: "LinkedIn", url: `https://${info.linkedin}`, icon: FaLinkedinIn },
            { label: "GitHub", url: `https://${info.github}`, icon: FaGithub },
            { label: "Behance", url: `https://${info.behance}`, icon: FaBehance },
            { label: "Instagram", url: `https://${info.insta}`, icon: FaInstagram },
          ].map((s, idx, arr) => (
            <React.Fragment key={s.label}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="about-footer-reveal group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:border-zinc-500 transition-colors bg-white/50 dark:bg-black/50 backdrop-blur-sm">
                  <s.icon size={12} />
                </div>
                {s.label}
              </a>
              {idx < arr.length - 1 && (
                <span className="about-footer-reveal text-zinc-300 dark:text-zinc-800 text-xs px-2">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* SVG Filter for Liquid Glass Refraction/Distortion */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="glass-distortion">
            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="25" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
    </section>
  );
};

export default AboutHero;