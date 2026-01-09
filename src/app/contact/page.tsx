"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import assetData from "@/data/asset";

const info = assetData.info[0];

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Particle animation background
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

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(220, 38, 38, 0.3)";
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
            ctx.strokeStyle = `rgba(220, 38, 38, ${0.15 * (1 - dist / 150)})`;
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

  const handleCardHover = (
    e: React.MouseEvent<HTMLDivElement>,
    section: string
  ) => {
    setActiveSection(section);
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
    setActiveSection(null);
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
    {
      name: "TW",
      full: "Twitter",
      url: `https://twitter.com/${info.twitter.replace("@", "")}`,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-black text-white px-6 md:px-12 lg:px-20 py-24 overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Hero Section */}
      <h1 className="sr-only">
        {info.name} - UI/UX Designer, Developer & Branding Specialist in{" "}
        {info.location}
      </h1>

      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-40 pointer-events-none"
      />

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 border-2 border-red-600 rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="contact-hero mb-32 text-center">
          <div className="inline-block mb-8">
            <div className="flex items-center gap-3 px-4 py-2 border border-red-600/30 rounded-full backdrop-blur-sm bg-red-600/10">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-ping" />
              <span className="text-sm tracking-wider">AVAILABLE FOR WORK</span>
            </div>
          </div>

          <h2 className="text-6xl md:text-9xl font-light tracking-tight mb-6">
            Let's Create
            <br />
            <span className="text-red-600">Together</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto">
            Ready to bring your ideas to life with exceptional design and
            development
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Email Card */}
          <div
            className="contact-card cursor-pointer"
            onMouseEnter={(e) => handleCardHover(e, "email")}
            onMouseMove={handleCardMove}
            onMouseLeave={handleCardLeave}
            onClick={handleCopyEmail}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative h-full bg-gradient-to-br from-zinc-900 to-black border border-red-600/20 rounded-3xl p-8 md:p-12 overflow-hidden group">
              <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <span className="text-xs tracking-widest text-gray-500">
                    01
                  </span>
                  <div className="w-12 h-12 border border-red-600/30 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-red-600 rounded-full opacity-50" />
                  </div>
                </div>

                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                  Email Address
                </h3>

                <p className="text-2xl md:text-3xl font-light mb-6 break-all">
                  {info.email}
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/30 rounded-full text-sm">
                  {copiedEmail ? "✓ Copied to clipboard" : "Click to copy"}
                </div>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div
            className="contact-card"
            onMouseEnter={(e) => handleCardHover(e, "phone")}
            onMouseMove={handleCardMove}
            onMouseLeave={handleCardLeave}
            style={{ transformStyle: "preserve-3d" }}
          >
            <a href={`tel:${info.phone}`} className="block h-full">
              <div className="relative h-full bg-gradient-to-br from-zinc-900 to-black border border-red-600/20 rounded-3xl p-8 md:p-12 overflow-hidden group">
                <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <span className="text-xs tracking-widest text-gray-500">
                      02
                    </span>
                    <div className="w-12 h-12 border border-red-600/30 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-red-600 rounded-full opacity-50" />
                    </div>
                  </div>

                  <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                    Phone Number
                  </h3>

                  <p className="text-2xl md:text-3xl font-light mb-6">
                    {info.phone}
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm text-red-600">
                    <span>Call now</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-2 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Location Card */}
          <div
            className="contact-card"
            onMouseEnter={(e) => handleCardHover(e, "location")}
            onMouseMove={handleCardMove}
            onMouseLeave={handleCardLeave}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative h-full bg-gradient-to-br from-zinc-900 to-black border border-red-600/20 rounded-3xl p-8 md:p-12 overflow-hidden group">
              <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <span className="text-xs tracking-widest text-gray-500">
                    03
                  </span>
                  <div className="w-12 h-12 border border-red-600/30 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-red-600 rounded-full opacity-50" />
                  </div>
                </div>

                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                  Based In
                </h3>

                <p className="text-2xl md:text-3xl font-light mb-6">
                  {info.location}
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/30 rounded-full text-sm">
                  Open to remote work
                </div>
              </div>
            </div>
          </div>

          {/* CV Download Card */}
          <div
            className="contact-card"
            onMouseEnter={(e) => handleCardHover(e, "cv")}
            onMouseMove={handleCardMove}
            onMouseLeave={handleCardLeave}
            style={{ transformStyle: "preserve-3d" }}
          >
            <a
              href={info.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="relative h-full bg-gradient-to-br from-red-600 to-red-700 border border-red-500 rounded-3xl p-8 md:p-12 overflow-hidden group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <span className="text-xs tracking-widest text-red-200">
                      04
                    </span>
                    <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 group-hover:translate-y-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-sm uppercase tracking-widest text-red-100 mb-4">
                    Resume / CV
                  </h3>

                  <p className="text-2xl md:text-3xl font-light mb-6">
                    Download My CV
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm text-white">
                    <span>Get PDF</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-2 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-2xl font-light mb-8 text-center">
            Connect on Social<span className="text-red-600">.</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link group"
              >
                <div className="relative">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-zinc-900 border border-red-600/20 rounded-2xl flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
                    <span className="text-xl md:text-2xl font-bold group-hover:scale-110 transition-transform">
                      {social.name}
                    </span>
                  </div>

                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    <span className="text-xs text-gray-500">{social.full}</span>
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
