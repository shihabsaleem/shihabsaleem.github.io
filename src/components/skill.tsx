"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import assetData from "@/data/asset";

const Skill = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { skillCategories, skills } = assetData;
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

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

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 38, 38, ${particle.opacity})`;
        ctx.fill();
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(220, 38, 38, ${0.1 * (1 - distance / 120)})`;
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

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-heading",
        { y: 100, opacity: 0, rotationX: 90 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1.2,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        ".category-card",
        { 
          scale: 0.8,
          opacity: 0,
          rotationY: -15,
        },
        {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          duration: 1,
          stagger: 0.1,
          ease: "back.out(1.2)",
          delay: 0.4,
        }
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
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(card, {
      rotationY: x * 0.02,
      rotationX: -y * 0.02,
      duration: 0.1,
      ease: "power2.out",
    });
  };

  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotationY: 0,
      rotationX: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative px-6 md:px-12 lg:px-20 py-24 bg-white dark:bg-black text-black dark:text-white overflow-hidden"
    >
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="skill-heading text-5xl md:text-7xl font-display inline-block perspective-1000">
            <span className="inline-block">Skills</span>
            <span className="text-red-600">.</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-500 mt-4 text-sm tracking-widest uppercase">
            Click to expand
          </p>
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
                  className={`relative cursor-pointer transition-all duration-500 ${
                    isActive ? "row-span-2" : ""
                  }`}
                  onClick={() => handleCardClick(category)}
                  onMouseEnter={handleCardHover}
                  onMouseMove={handleCardMove}
                  onMouseLeave={handleCardLeave}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className={`relative bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden transition-all duration-500 ${
                    isActive ? "shadow-2xl shadow-red-600/20" : "hover:shadow-xl"
                  }`}>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative p-8">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="relative">
                          <div className="absolute -left-2 -top-2 text-6xl font-bold text-red-600/10 dark:text-red-600/20">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <h3 className="text-2xl font-semibold relative z-10 pt-8">
                            {category}
                          </h3>
                        </div>
                        <div className={`w-10 h-10 rounded-full border-2 border-gray-300 dark:border-gray-700 flex items-center justify-center transition-all duration-300 ${
                          isActive ? "rotate-180 border-red-600 bg-red-600" : ""
                        }`}>
                          <svg
                            className={`w-5 h-5 transition-colors ${isActive ? "text-white" : "text-gray-400"}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>

                      {/* Skill count badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                          {categorySkills.length} skills
                        </span>
                      </div>

                      {/* Skills preview or full list */}
                      <div className={`transition-all duration-500 ${isActive ? "max-h-[500px] opacity-100" : "max-h-20 opacity-60"} overflow-hidden`}>
                        <div className="space-y-2">
                          {categorySkills.map((skill, idx) => (
                            <div
                              key={skill}
                              className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 group/skill"
                              style={{
                                transitionDelay: isActive ? `${idx * 30}ms` : "0ms",
                              }}
                            >
                              <div className="w-1 h-1 rounded-full bg-red-600 group-hover/skill:scale-150 transition-transform" />
                              <span className="group-hover/skill:text-red-600 transition-colors">
                                {skill}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <div className={`h-1 bg-gradient-to-r from-red-600 to-transparent transition-all duration-500 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`} />
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