"use client";

import { useLayoutEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "@/data/asset";

gsap.registerPlugin(ScrollTrigger);

const { works } = data;

// Helper function to convert work name to slug
function nameToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function ProjectPage({ projectId }: { projectId: number }) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  // Find the project based on ID
  const project = works.find((work) => work.id === projectId) || works[0];

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
  }, [projectId]);

  // Navigation functions
  const currentIndex = works.findIndex((work) => work.id === project.id);
  const prevProject = currentIndex > 0 ? works[currentIndex - 1] : null;
  const nextProject =
    currentIndex < works.length - 1 ? works[currentIndex + 1] : null;

  const navigateToProject = (workName: string) => {
    const slug = nameToSlug(workName);
    router.push(`/${slug}`);
  };

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
              <a href={project.clientLink} target="_blank" rel="noopener noreferrer">
                <div className="text-lg">{project.client}</div>
              </a>
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
              <Image
                src={project.images[0]}
                alt={project.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                priority
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
                  <Image
                    src={image}
                    alt={`${project.name} screenshot ${index + 2}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
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
          {prevProject ? (
            <button
              onClick={() => navigateToProject(prevProject.name)}
              className="text-lg hover:opacity-60 transition-opacity"
            >
              ← {prevProject.name}
            </button>
          ) : (
            <div></div>
          )}
          {nextProject ? (
            <button
              onClick={() => navigateToProject(nextProject.name)}
              className="text-lg hover:opacity-60 transition-opacity"
            >
              {nextProject.name} →
            </button>
          ) : (
            <div></div>
          )}
        </div>
      </section>
    </div>
  );
}