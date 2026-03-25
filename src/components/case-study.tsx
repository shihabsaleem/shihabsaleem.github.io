"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import caseStudies from "@/data/casestudy";
import LegalLinks from "@/components/legal";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudy({ slug }: { slug: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const currentIndex = caseStudies.findIndex((cs) => cs.slug === slug);
  const caseStudy = caseStudies[currentIndex] || caseStudies[0];

  const prevStudy =
    currentIndex > 0
      ? caseStudies[currentIndex - 1]
      : caseStudies[caseStudies.length - 1];
  const nextStudy =
    currentIndex < caseStudies.length - 1
      ? caseStudies[currentIndex + 1]
      : caseStudies[0];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".hero-label", { opacity: 0, y: 15, duration: 0.6, ease: "power2.out" })
        .from(".hero-title", { opacity: 0, y: 20, duration: 0.8, ease: "power2.out" }, "-=0.3")
        .from(".hero-overview", { opacity: 0, y: 15, duration: 0.6, ease: "power2.out" }, "-=0.4")
        .from(".hero-meta", { opacity: 0, y: 15, duration: 0.6, ease: "power2.out", stagger: 0.08 }, "-=0.4")
        .from(".hero-image-wrap", { opacity: 0, scale: 0.99, duration: 0.8, ease: "power2.out" }, "-=0.5");

      // Animate sections on scroll
      gsap.utils.toArray<HTMLElement>("section.content-section").forEach((section) => {
        gsap.from(section.querySelectorAll(".reveal-up"), {
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
          },
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.08,
          ease: "power2.out",
        });
      });

      // Gallery animations
      ScrollTrigger.batch(".gallery-item", {
        onEnter: (batch) => gsap.from(batch, {
          opacity: 0,
          y: 30,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out"
        }),
        start: "top 90%",
      });

    }, containerRef);
    return () => ctx.revert();
  }, [slug]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#fafafa] dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 transition-colors duration-500">

      {/* ── HERO ── */}
      <section className="px-6 md:px-12 lg:px-20 pt-32 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Back Link */}
          <div className="mb-12">
            <Link href="/process" className="group inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-red-600 transition-colors">
              <span className="mr-3 transform transition-transform group-hover:-translate-x-1">←</span> Back to Process
            </Link>
          </div>

          {/* Category label */}
          <div className="hero-label mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              {caseStudy.platform}
            </span>
          </div>

          {/* Title */}
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-8 text-zinc-900 dark:text-white">
            {caseStudy.name}<span className="text-red-600">.</span>
          </h1>

          {/* Overview */}
          <p className="hero-overview text-xl md:text-2xl font-light text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl mb-16">
            {caseStudy.overview}
          </p>

          {/* Meta grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-zinc-200 dark:border-zinc-800">
            <div className="hero-meta">
              <div className="text-[9px] font-bold uppercase tracking-widest text-red-600  mb-2">Role</div>
              <div className="text-lg font-medium">{caseStudy.role}</div>
            </div>
            <div className="hero-meta">
              <div className="text-[9px] font-bold uppercase tracking-widest text-red-600 mb-2">Timeline</div>
              <div className="text-lg font-medium">{caseStudy.timeline}</div>
            </div>
            <div className="hero-meta">
              <div className="text-[9px] font-bold uppercase tracking-widest text-red-600 mb-2">Platform</div>
              <div className="text-lg font-medium">{caseStudy.platform}</div>
            </div>
            <div className="hero-meta">
              <div className="text-[9px] font-bold uppercase tracking-widest text-red-600 mb-2">Team</div>
              <div className="text-lg font-medium">{caseStudy.team.join(", ")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      <div className="hero-image-wrap w-full pb-0">
        <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden shadow-2xl shadow-zinc-900/10">
          <Image
            src={caseStudy.heroImage}
            alt={`${caseStudy.name} Hero`}
            fill
            priority
            sizes="100vw"
            className="object-cover transition-all duration-1000 ease-in-out scale-105 hover:scale-100"
          />
        </div>
      </div>

      {/* ── ARTICLE BODY ── */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 py-32 space-y-32">

        {/* 01 — The Problem */}
        {caseStudy.theProblem && (
          <section className="content-section">
            <span className="reveal-up text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 block mb-6">
              01 — The Problem
            </span>
            <h2 className="reveal-up text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-8">
              {caseStudy.theProblem.title}
            </h2>
            <p className="reveal-up text-xl md:text-2xl font-light leading-relaxed text-zinc-700 dark:text-zinc-300 mb-12">
              {caseStudy.theProblem.description}
            </p>
            <div className="reveal-up border-l-2 border-red-600 pl-8 space-y-4">
              <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
                Core Objectives
              </div>
              <ul className="space-y-3">
                {caseStudy.theProblem.goals.map((goal, i) => (
                  <li key={i} className="flex items-start gap-4 text-lg font-medium">
                    <span className="text-red-600 font-black mt-0.5">—</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* 02 — Research */}
        {caseStudy.research && (
          <section className="content-section">
            <span className="reveal-up text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 block mb-6">
              02 — Research & Discovery
            </span>
            <h2 className="reveal-up text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-8">
              {caseStudy.research.title}
            </h2>
            <p className="reveal-up text-xl md:text-2xl font-light leading-relaxed text-zinc-700 dark:text-zinc-300 mb-12">
              {caseStudy.research.description}
            </p>
            <div className="space-y-4">
              {caseStudy.research.insights.map((insight, idx) => (
                <div
                  key={idx}
                  className="reveal-up p-8 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-red-600/30 transition-colors duration-300"
                >
                  <span className="text-[9px] font-bold uppercase tracking-widest text-red-600 block mb-3">
                    Insight {idx + 1}
                  </span>
                  <h4 className="text-xl font-black tracking-tight mb-3">{insight.title}</h4>
                  <p className="text-lg font-light text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {insight.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 03 — User Personas */}
        {caseStudy.personas && caseStudy.personas.length > 0 && (
          <section className="content-section">
            <span className="reveal-up text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 block mb-6">
              03 — User Personas
            </span>
            <div className="space-y-16">
              {caseStudy.personas.map((persona, idx) => (
                <div key={idx} className="reveal-up pt-12 border-t border-zinc-200 dark:border-zinc-800">
                  <h4 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">
                    {persona.name}
                  </h4>
                  <p className="text-xl md:text-2xl font-light italic text-zinc-500 dark:text-zinc-400 mb-10 leading-relaxed">
                    "{persona.quote}"
                  </p>
                  <div>
                    <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
                      Pain Points
                    </div>
                    <ul className="space-y-3">
                      {persona.painPoints.map((pain, i) => (
                        <li key={i} className="flex items-start gap-4 text-lg font-light text-zinc-700 dark:text-zinc-300">
                          <span className="text-red-600 font-black mt-0.5">—</span>
                          {pain}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 04 — Ideation */}
        {caseStudy.ideation && (
          <section className="content-section">
            <span className="reveal-up text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 block mb-6">
              04 — Ideation
            </span>
            <h2 className="reveal-up text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-8">
              {caseStudy.ideation.title}
            </h2>
            <p className="reveal-up text-xl md:text-2xl font-light leading-relaxed text-zinc-700 dark:text-zinc-300 mb-12">
              {caseStudy.ideation.description}
            </p>
            {caseStudy.ideation.image && (
              <div className="reveal-up relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 transition-all duration-1000">
                <Image
                  src={caseStudy.ideation.image}
                  alt="Ideation Process"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </section>
        )}

        {/* 05 — Visual Design */}
        {caseStudy.design && (
          <section className="content-section">
            <span className="reveal-up text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 block mb-6">
              05 — Visual Design
            </span>
            <h2 className="reveal-up text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-8">
              {caseStudy.design.title}
            </h2>
            <p className="reveal-up text-xl md:text-2xl font-light leading-relaxed text-zinc-700 dark:text-zinc-300 mb-12">
              {caseStudy.design.description}
            </p>

            {caseStudy.design.features && (
              <div className="space-y-0 mb-16">
                {caseStudy.design.features.map((feature, idx) => (
                  <div key={idx} className="reveal-up py-10 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
                      Feature {idx + 1}
                    </div>
                    <h4 className="text-xl font-black tracking-tight leading-tight mb-3">{feature.title}</h4>
                    <p className="text-lg font-light text-zinc-600 dark:text-zinc-400 leading-relaxed">{feature.text}</p>
                  </div>
                ))}
              </div>
            )}

            {caseStudy.design.images && (
              <div className="space-y-6">
                {caseStudy.design.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="reveal-up relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 transition-all duration-1000"
                  >
                    <Image src={img} alt={`High Fidelity UI ${idx + 1}`} fill sizes="100vw" className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* 06 — Testing */}
        {caseStudy.testing && (
          <section className="content-section">
            <span className="reveal-up text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 block mb-6">
              06 — Testing
            </span>
            <h2 className="reveal-up text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-8">
              {caseStudy.testing.title}
            </h2>
            <p className="reveal-up text-xl md:text-2xl font-light leading-relaxed text-zinc-700 dark:text-zinc-300 mb-16">
              {caseStudy.testing.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="reveal-up p-8 bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
                  Findings
                </div>
                <p className="text-lg font-light text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {caseStudy.testing.feedback}
                </p>
              </div>
              <div className="reveal-up p-8 bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
                  Iteration
                </div>
                <p className="text-lg font-light text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {caseStudy.testing.iteration}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* 07 — Outcomes */}
        {caseStudy.outcomes && (
          <section className="content-section">
            <span className="reveal-up text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 block mb-6">
              07 — Outcomes
            </span>
            <h2 className="reveal-up text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-8">
              {caseStudy.outcomes.title}
            </h2>
            <p className="reveal-up text-xl md:text-2xl font-light leading-relaxed text-zinc-700 dark:text-zinc-300 mb-16">
              {caseStudy.outcomes.description}
            </p>

            {/* Metrics */}
            {caseStudy.outcomes.metrics && (
              <div className="mb-16">
                <div className="reveal-up text-[9px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-8">
                  Measurable Impact
                </div>
                <div className="space-y-6">
                  {caseStudy.outcomes.metrics.map((metric, idx) => (
                    <div key={idx} className="reveal-up flex items-center gap-4 text-xl md:text-2xl font-light">
                      <span className="text-red-600 font-black tracking-tighter">—</span>
                      <span className="text-zinc-800 dark:text-zinc-200 leading-tight">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Takeaway card */}
            <div className="reveal-up relative overflow-hidden rounded-2xl p-10 md:p-14 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 group">
              <div className="absolute top-10 right-0 w-48 h-48 bg-red-600/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-120 transition-transform duration-700" />
              <div className="absolute top-0 right-10 w-48 h-48 bg-red-600/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-120 transition-transform duration-700" />
              <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6 relative z-10">
                Final Takeaway
              </div>
              <p className="text-lg md:text-xl font-black tracking-tighter leading-tight italic relative z-10">
                "{caseStudy.outcomes.takeaways}"
              </p>
            </div>
          </section>
        )}
      </div>

      {/* ── FINAL GALLERY ── */}
      {caseStudy.gallery && caseStudy.gallery.length > 0 && (
        <section className="px-6 md:px-12 lg:px-20 py-20 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-12">
              Project Gallery
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className={`gallery-item relative aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 transition-all duration-700 ${idx === 0 ? "md:col-span-2" : ""
                    }`}
                >
                  <Image src={img} alt={`Gallery ${idx + 1}`} fill sizes="100vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM NAVIGATION ── */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-zinc-200 dark:border-zinc-800 bg-[#fafafa] dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href={`/process/${prevStudy.slug}`}
            className="group flex flex-col items-start hover:-translate-y-1 transition-transform"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 group-hover:text-red-600">
              Previous Case Study
            </span>
            <span className="text-xl md:text-2xl font-black tracking-tighter group-hover:italic transition-all">
              ← {prevStudy.name}
            </span>
          </Link>

          <Link href="/process" className="hidden md:flex flex-col items-center group">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 group-hover:text-red-600">
              Case Studies
            </span>
            <span className="text-sm font-bold uppercase tracking-[0.3em] transition-all group-hover:tracking-[0.5em]">
              View All<span className="text-red-600">.</span>
            </span>
          </Link>

          <Link
            href={`/process/${nextStudy.slug}`}
            className="group flex flex-col items-end text-right hover:-translate-y-1 transition-transform"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2 group-hover:text-red-600">
              Next Case Study
            </span>
            <span className="text-xl md:text-2xl font-black tracking-tighter group-hover:italic transition-all">
              {nextStudy.name} →
            </span>
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <div className="py-20 px-6 md:px-12 lg:px-20 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
        <LegalLinks />
      </div>

    </div>
  );
}
