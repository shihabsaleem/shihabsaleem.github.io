"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import assetData from "@/data/asset";

gsap.registerPlugin(ScrollTrigger);

// Sort globally for this component: 7, 6, 5...
const sortedWorks = [...assetData.works].sort((a, b) => b.id - a.id);

function nameToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function ProjectPage({ projectId }: { projectId: number }) {

  const containerRef = useRef<HTMLDivElement>(null);

  const project = sortedWorks.find((work) => work.id === projectId) || sortedWorks[0];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".hero-category", { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" })
        .from(".hero-title", { opacity: 0, y: 50, duration: 1, ease: "power3.out" }, "-=0.4")
        .from(".hero-meta", { opacity: 0, y: 30, duration: 0.8, ease: "power3.out", stagger: 0.1 }, "-=0.6")
        .from(".hero-image", { opacity: 0, scale: 0.95, duration: 1.2, ease: "power3.out" }, "-=0.8");

      gsap.from(".project-description", {
        scrollTrigger: { trigger: ".project-description", start: "top 80%" },
        opacity: 0, y: 50, duration: 1, ease: "power3.out",
      });

      gsap.from(".project-details-item", {
        scrollTrigger: { trigger: ".project-details", start: "top 80%" },
        opacity: 0, y: 30, stagger: 0.15, duration: 0.8, ease: "power3.out",
      });

      ScrollTrigger.batch(".gallery-image", {
        onEnter: (batch) => gsap.from(batch, { opacity: 0, y: 60, stagger: 0.2, duration: 1, ease: "power3.out" }),
        start: "top 85%",
      });

      gsap.from(".impact-item", {
        scrollTrigger: { trigger: ".impact-section", start: "top 80%" },
        opacity: 0, x: -30, stagger: 0.1, duration: 0.8, ease: "power3.out",
      });

      gsap.from(".tag-item", {
        scrollTrigger: { trigger: ".tags-section", start: "top 85%" },
        opacity: 0, scale: 0.8, stagger: 0.05, duration: 0.5, ease: "back.out(1.7)",
      });
    }, containerRef);
    return () => ctx.revert();
  }, [projectId]);

  // Navigation logic using descending order
  const currentIndex = sortedWorks.findIndex((work) => work.id === project.id);
  const prevProject = currentIndex > 0 ? sortedWorks[currentIndex - 1] : null;
  const nextProject = currentIndex < sortedWorks.length - 1 ? sortedWorks[currentIndex + 1] : null;



  return (
    <div ref={containerRef} className="min-h-screen bg-[#fafafa] dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 transition-colors duration-500">
      <section className="px-6 md:px-12 lg:px-20 pt-20 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="hero-category mb-6">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-500 dark:text-zinc-400">{project.shortdesc}</span>
          </div>
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 text-zinc-900 dark:text-white">
            {project.name}<span className="text-red-600">.</span>
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="hero-meta">
              <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">Year</div>
              <div className="text-lg font-medium">{project.year}</div>
            </div>
            <div className="hero-meta">
              <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">Client</div>
              {project.clientLink ? (
                <a href={project.clientLink} target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
                  <div className="text-lg font-medium">{project.client}</div>
                </a>
              ) : (
                <div className="text-lg font-medium">{project.client}</div>
              )}
            </div>
            <div className="hero-meta">
              <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">Role</div>
              <div className="text-lg font-medium">{project.role}</div>
            </div>
            <div className="hero-meta">
              <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">Duration</div>
              <div className="text-lg font-medium">{project.duration}</div>
            </div>
          </div>
          <div className="hero-image">
            <div className="relative w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-zinc-900/5">
              <Image src={project.images[0]} alt={project.name} width={1200} height={675} className="w-full h-auto" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <div className="project-description">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-red-600 mb-6">Overview</h2>
            <p className="text-xl md:text-2xl leading-relaxed font-light">{project.description}</p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#fafafa] dark:bg-[#050505]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 project-details">
          <div className="project-details-item p-8 bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">The Challenge</h3>
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">{project.challenge}</p>
          </div>
          <div className="project-details-item p-8 bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">The Solution</h3>
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">{project.solution}</p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {project.images.slice(1).map((image, index) => (
              <div key={index} className="gallery-image">
                <div className="relative w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
                  <Image src={image} alt={`${project.name} ${index}`} width={800} height={600} className="w-full h-auto hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-20 impact-section bg-[#fafafa] dark:bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-red-600 mb-12">Measurable Impact</h2>
          <div className="space-y-6">
            {project.impact.map((item, index) => (
              <div key={index} className="impact-item flex items-center gap-4 text-xl md:text-2xl font-light">
                <span className="text-red-600 font-black tracking-tighter">—</span>
                <span className="text-zinc-800 dark:text-zinc-200 leading-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-8">Technologies</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {project.tags.map((tag, index) => (
              <span key={index} className="tag-item px-5 py-2.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full text-[10px] font-bold uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-zinc-200 dark:border-zinc-800 bg-[#fafafa] dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {prevProject ? (
            <Link href={`/${nameToSlug(prevProject.name)}`} className="group flex flex-col items-start">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 group-hover:text-red-600">Previous</span>
              <span className="text-xl md:text-2xl font-black tracking-tighter group-hover:italic">← {prevProject.name}</span>
            </Link>
          ) : <div />}
          {nextProject ? (
            <Link href={`/${nameToSlug(nextProject.name)}`} className="group flex flex-col items-end text-right">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 group-hover:text-red-600">Next Project</span>
              <span className="text-xl md:text-2xl font-black tracking-tighter group-hover:italic">{nextProject.name} →</span>
            </Link>
          ) : <div />}
        </div>
      </section>
    </div>
  );
}