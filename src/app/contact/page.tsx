"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import assetData from "@/data/asset";
import { Metadata } from "next";

const info = assetData.info[0];




export const metadata: Metadata= {
  title: `About ${info.name} | UI/UX Designer & Developer`,
  description: info.seoContactDesc, 
  openGraph: {
    title: `About ${info.name}`,
    description: info.seoAboutDesc,
    images: [info.ogImage],
  },
};

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Particle animation background - Updated for theme awareness
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Check for theme to adjust particle opacity
      const isDark = document.documentElement.classList.contains("dark");
      const particleOpacity = isDark ? 0.3 : 0.5;
      const lineOpacityBase = isDark ? 0.15 : 0.25;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 38, 38, ${particleOpacity})`;
        ctx.fill();
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(220, 38, 38, ${lineOpacityBase * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Custom cursor
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".contact-hero",
        { opacity: 0, scale: 0.8, rotationX: -30 },
        { opacity: 1, scale: 1, rotationX: 0, duration: 1.5 }
      )
        .fromTo(
          ".contact-card",
          { opacity: 0, y: 100, rotationX: 45 },
          { opacity: 1, y: 0, rotationX: 0, duration: 1, stagger: 0.12 },
          "-=1"
        )
        .fromTo(
          ".social-link",
          { opacity: 0, scale: 0, rotation: -180 },
          { opacity: 1, scale: 1, rotation: 0, duration: 0.6, stagger: 0.08 },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(info.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    gsap.to(card, {
      scale: 1.05,
      rotationY: 5,
      rotationX: 5,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;

    gsap.to(card, {
      rotationY: x,
      rotationX: y,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      rotationY: 0,
      rotationX: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
  };

  const socialLinks = [
    { name: "LN", full: "LinkedIn", url: `https://${info.linkedin}` },
    { name: "GH", full: "GitHub", url: `https://${info.github}` },
    { name: "BE", full: "Behance", url: `https://${info.behance}` },
    { name: "IG", full: "Instagram", url: `https://${info.insta}` },
    { name: "TW", full: "Twitter", url: `https://twitter.com/${info.twitter.replace("@", "")}` },
  ];

  return (
    <div
      ref={containerRef}
      /* FIXED: bg-white dark:bg-black and text-zinc-900 dark:text-white */
      className="relative min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white px-6 md:px-12 lg:px-20 py-24 overflow-hidden transition-colors duration-300"
      style={{ perspective: "1000px" }}
    >
      <h1 className="sr-only">
        {info.name} - UI/UX Designer in {info.location}
      </h1>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-40 pointer-events-none"
      />

      <div
        ref={cursorRef}
        className="fixed w-8 h-8 border-2 border-red-600 rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      <div className="absolute top-20 left-20 w-96 h-96 bg-red-600/10 dark:bg-red-600/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="contact-hero mb-32 text-center">
          <div className="inline-block mb-8">
            <div className="flex items-center gap-3 px-4 py-2 border border-red-600/30 rounded-full backdrop-blur-sm bg-red-600/5 dark:bg-red-600/10">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-ping" />
              <span className="text-sm tracking-wider font-medium">AVAILABLE FOR WORK</span>
            </div>
          </div>

          <h2 className="text-6xl md:text-9xl font-light tracking-tight mb-6">
            Let's Create
            <br />
            <span className="text-red-600">Together</span>
          </h2>

          <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 font-light max-w-2xl mx-auto">
            Ready to bring your ideas to life with exceptional design and development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Email Card */}
          <div
            className="contact-card cursor-pointer"
            onMouseEnter={handleCardHover}
            onMouseMove={handleCardMove}
            onMouseLeave={handleCardLeave}
            onClick={handleCopyEmail}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative h-full bg-zinc-50 dark:bg-gradient-to-br dark:from-zinc-900 dark:to-black border border-zinc-200 dark:border-red-600/20 rounded-3xl p-8 md:p-12 overflow-hidden group">
              <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <span className="text-xs tracking-widest text-zinc-400 dark:text-zinc-500">01</span>
                <h3 className="text-sm uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mt-8 mb-4">Email Address</h3>
                <p className="text-2xl md:text-3xl font-light mb-6 break-all">{info.email}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/30 rounded-full text-sm">
                  {copiedEmail ? "✓ Copied" : "Click to copy"}
                </div>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div
            className="contact-card"
            onMouseEnter={handleCardHover}
            onMouseMove={handleCardMove}
            onMouseLeave={handleCardLeave}
            style={{ transformStyle: "preserve-3d" }}
          >
            <a href={`tel:${info.phone}`} className="block h-full">
              <div className="relative h-full bg-zinc-50 dark:bg-gradient-to-br dark:from-zinc-900 dark:to-black border border-zinc-200 dark:border-red-600/20 rounded-3xl p-8 md:p-12 overflow-hidden group">
                <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <span className="text-xs tracking-widest text-zinc-400 dark:text-zinc-500">02</span>
                  <h3 className="text-sm uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mt-8 mb-4">Phone Number</h3>
                  <p className="text-2xl md:text-3xl font-light mb-6">{info.phone}</p>
                  <div className="text-red-600 text-sm font-medium">Call now →</div>
                </div>
              </div>
            </a>
          </div>

          {/* Location Card */}
          <div
            className="contact-card"
            onMouseEnter={handleCardHover}
            onMouseMove={handleCardMove}
            onMouseLeave={handleCardLeave}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative h-full bg-zinc-50 dark:bg-gradient-to-br dark:from-zinc-900 dark:to-black border border-zinc-200 dark:border-red-600/20 rounded-3xl p-8 md:p-12 overflow-hidden group">
              <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <span className="text-xs tracking-widest text-zinc-400 dark:text-zinc-500">03</span>
                <h3 className="text-sm uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mt-8 mb-4">Based In</h3>
                <p className="text-2xl md:text-3xl font-light mb-6">{info.location}</p>
                <div className="text-zinc-400 text-sm">Open to remote work</div>
              </div>
            </div>
          </div>

          {/* CV Download Card */}
          <div
            className="contact-card"
            onMouseEnter={handleCardHover}
            onMouseMove={handleCardMove}
            onMouseLeave={handleCardLeave}
            style={{ transformStyle: "preserve-3d" }}
          >
            <a href={info.cv} target="_blank" rel="noopener noreferrer" className="block h-full">
              <div className="relative h-full bg-red-600 border border-red-500 rounded-3xl p-8 md:p-12 overflow-hidden group text-white">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                <div className="relative z-10">
                  <span className="text-xs tracking-widest opacity-70">04</span>
                  <h3 className="text-sm uppercase tracking-widest opacity-70 mt-8 mb-4">Resume / CV</h3>
                  <p className="text-2xl md:text-3xl font-light mb-6">Download My CV</p>
                  <div className="text-white text-sm font-medium">Get PDF →</div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-light mb-8 text-center">
            Connect on Social<span className="text-red-600">.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="social-link group">
                <div className="relative">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-red-600/20 rounded-2xl flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
                    <span className="text-xl md:text-2xl font-bold group-hover:text-white transition-colors">{social.name}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;