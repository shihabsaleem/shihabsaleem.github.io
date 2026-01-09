"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import assetData from "@/data/asset";

const Skill = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { skillCategories } = assetData;
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

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
      radius: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Check theme for particle visibility
      const isDark = document.documentElement.classList.contains("dark");
      const particleAlpha = isDark ? 0.2 : 0.4;

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 38, 38, ${particle.opacity * particleAlpha})`;
        ctx.fill();
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-heading",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        ".category-card",
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.2)", delay: 0.2 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardClick = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(card, {
      rotationY: x * 0.02,
      rotationX: -y * 0.02,
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotationY: 0,
      rotationX: 0,
      scale: 1,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <section
      ref={sectionRef}
      /* UPDATED: Theme-consistent backgrounds */
      className="relative px-6 md:px-12 lg:px-20 py-24  text-zinc-900 dark:text-zinc-100 overflow-hidden transition-colors duration-500"
    >
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-12">
          <h2 className="skill-heading text-[8vw] md:text-[5vw] font-black uppercase leading-[0.8] tracking-tighter mb-8 text-zinc-900 dark:text-white">
            Skills<span className="text-red-600">.</span>
          </h2>
          {/* UPDATED: Zinc divider */}
          <div className="h-[1px] w-full bg-zinc-200 dark:bg-zinc-800" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillCategories).map(([category, categorySkills], index) => {
            const isActive = activeCategory === category;

            return (
              <div
                key={category}
                className="category-card perspective-1000"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className={`relative cursor-pointer transition-all duration-500`}
                  onClick={() => handleCardClick(category)}
                  onMouseEnter={handleCardHover}
                  onMouseLeave={handleCardLeave}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className={`relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden transition-all duration-500 ${
                      isActive ? "shadow-2xl shadow-red-600/10 border-red-600/30" : "hover:border-zinc-300 dark:hover:border-zinc-700"
                    }`}
                  >
                    <div className="relative p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="relative">
                          {/* UPDATED: Numbering color adjusted for zinc */}
                          <div className="absolute -left-2 -top-2 text-6xl font-bold text-zinc-100 dark:text-zinc-800/50">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <h3 className="text-2xl font-black relative z-10 pt-8 text-zinc-900 dark:text-white">
                            {category}
                          </h3>
                        </div>
                        <div
                          className={`w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center transition-all duration-300 ${
                            isActive ? "rotate-180 bg-red-600 border-red-600" : ""
                          }`}
                        >
                          <svg
                            className={`w-5 h-5 ${isActive ? "text-white" : "text-zinc-400"}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>

                      {/* UPDATED: Skill badge colors */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                          {categorySkills.length} skills
                        </span>
                      </div>

                      <div
                        className={`transition-all duration-500 ${
                          isActive ? "max-h-[500px] opacity-100" : "max-h-20 opacity-40"
                        } overflow-hidden`}
                      >
                        <div className="space-y-3">
                          {categorySkills.map((skill) => (
                            <div key={skill} className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400 group/skill">
                              <div className="w-1 h-1 rounded-full bg-red-600/40 group-hover/skill:bg-red-600 transition-colors" />
                              <span className="group-hover/skill:text-red-600 transition-colors font-medium">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`h-1 bg-gradient-to-r from-red-600 to-transparent transition-all duration-500 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skill;