"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Sample project data - you can pass this as props or fetch it
const project = {
  id: 1,
  name: "Inventory",
  shortdesc: "UI / UX Design",
  year: "2024",
  client: "Snack Manufacturing Co.",
  role: "Lead UI/UX Designer",
  duration: "3 months",
  description:
    "Inventory is a clean, intuitive UI/UX design solution crafted for a mid-sized snack manufacturing company. The design helps streamline the management of storage, production, and inventory processes with user-friendly interfaces focused on clarity and efficiency.",
  challenge:
    "The company was struggling with outdated inventory management systems that lacked visibility and real-time tracking. The goal was to create an intuitive interface that would help staff quickly understand stock levels, production status, and distribution needs without extensive training.",
  solution:
    "We designed a dashboard-first approach with clear visual hierarchies, color-coded status indicators, and streamlined workflows. The interface prioritizes the most critical information while keeping advanced features accessible through progressive disclosure.",
  impact: [
    "40% reduction in inventory processing time",
    "Improved accuracy in stock management",
    "Enhanced cross-department collaboration",
    "Faster onboarding for new employees",
  ],
  images: [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop",
  ],
  tags: ["UI Design", "UX Research", "Prototyping", "Figma", "User Testing"],
};

export default function ProjectPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      const tl = gsap.timeline();

      tl.from(".hero-category", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-meta",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
          },
          "-=0.6"
        )
        .from(
          ".hero-image",
          {
            opacity: 0,
            scale: 0.95,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.8"
        );

      // Scroll-triggered animations
      gsap.from(".project-description", {
        scrollTrigger: {
          trigger: ".project-description",
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".project-details-item", {
        scrollTrigger: {
          trigger: ".project-details",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });

      ScrollTrigger.batch(".gallery-image", {
        onEnter: (batch) =>
          gsap.from(batch, {
            opacity: 0,
            y: 60,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
          }),
        start: "top 85%",
      });

      gsap.from(".impact-item", {
        scrollTrigger: {
          trigger: ".impact-section",
          start: "top 80%",
        },
        opacity: 0,
        x: -30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".tag-item", {
        scrollTrigger: {
          trigger: ".tags-section",
          start: "top 85%",
        },
        opacity: 0,
        scale: 0.8,
        stagger: 0.05,
        duration: 0.5,
        ease: "back.out(1.7)",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-white dark:bg-black text-black dark:text-white"
    >
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-20 pt-20 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Category */}
          <div className="hero-category mb-6">
            <span className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
              {project.shortdesc}
            </span>
          </div>

          {/* Title */}
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-light mb-8">
            {project.name}
          </h1>

          {/* Meta Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="hero-meta">
              <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                Year
              </div>
              <div className="text-lg">{project.year}</div>
            </div>
            <div className="hero-meta">
              <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                Client
              </div>
              <div className="text-lg">{project.client}</div>
            </div>
            <div className="hero-meta">
              <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                Role
              </div>
              <div className="text-lg">{project.role}</div>
            </div>
            <div className="hero-meta">
              <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                Duration
              </div>
              <div className="text-lg">{project.duration}</div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image">
            <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden">
              <img
                src={project.images[0]}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="project-description">
            <h2 className="text-3xl md:text-4xl font-light mb-6">Overview</h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="px-6 md:px-12 lg:px-20 py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 project-details">
          <div className="project-details-item">
            <h3 className="text-2xl md:text-3xl font-light mb-4">
              The Challenge
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {project.challenge}
            </p>
          </div>
          <div className="project-details-item">
            <h3 className="text-2xl md:text-3xl font-light mb-4">
              The Solution
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {project.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {project.images.slice(1).map((image, index) => (
              <div key={index} className="gallery-image">
                <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                  <img
                    src={image}
                    alt={`${project.name} screenshot ${index + 2}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="px-6 md:px-12 lg:px-20 py-20 impact-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12">Impact</h2>
          <div className="space-y-6">
            {project.impact.map((item, index) => (
              <div
                key={index}
                className="impact-item flex items-start gap-4 text-lg md:text-xl"
              >
                <span className="text-red-500 mt-1">•</span>
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="px-6 md:px-12 lg:px-20 py-20 tags-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            Technologies & Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="tag-item px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button className="text-lg hover:opacity-60 transition-opacity">
            ← Previous Project
          </button>
          <button className="text-lg hover:opacity-60 transition-opacity">
            Next Project →
          </button>
        </div>
      </section>
    </div>
  );
}
