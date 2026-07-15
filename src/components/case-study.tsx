"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import caseStudies from "@/data/casestudy";
import LegalLinks from "@/components/legal";
import MagnifiableImage from "@/components/magnifiable-image";

gsap.registerPlugin(ScrollTrigger);

type Insight = { title: string; text: string; implication: string };
type Decision = { title: string; options: string; choice: string; rationale: string; tradeoff: string; image: string | null };
type Metric = { label: string; value: string; note: string };
type Achievement = { title: string; description: string };

const NAV_ITEMS = [
  { id: "context", label: "Context" },
  { id: "problem", label: "Problem" },
  { id: "insights", label: "Insights" },
  { id: "decisions", label: "Decisions" },
  { id: "outcomes", label: "Outcomes" },
  { id: "achievements", label: "Achievements" },
  { id: "reflection", label: "Reflection" },
];

export default function CaseStudy({ slug }: { slug: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("context");

  const currentIndex = caseStudies.findIndex((cs) => cs.slug === slug);
  const caseStudy = caseStudies[currentIndex] || caseStudies[0];

  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : caseStudies[caseStudies.length - 1];
  const nextStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : caseStudies[0];

  useEffect(() => {
    const sections = NAV_ITEMS.map(item => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, [slug]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-index", { opacity: 0, x: -20, duration: 0.7, ease: "power2.out" });
      gsap.from(".hero-name", { opacity: 0, y: 40, duration: 1, ease: "power3.out", delay: 0.1 });
      gsap.from(".hero-hook-text", { opacity: 0, y: 20, duration: 0.8, ease: "power2.out", delay: 0.4 });
      gsap.from(".hero-meta-item", { opacity: 0, y: 12, duration: 0.6, stagger: 0.07, ease: "power2.out", delay: 0.5 });
      gsap.from(".hero-img-wrap", { opacity: 0, scale: 1.02, duration: 1.2, ease: "power3.out", delay: 0.3 });

      gsap.utils.toArray<HTMLElement>(".cs-section").forEach((section) => {
        gsap.from(section.querySelectorAll(".fade-in"), {
          scrollTrigger: { trigger: section, start: "top 88%" },
          opacity: 0, y: 24, duration: 0.7, stagger: 0.09, ease: "power2.out",
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, [slug]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#f8f7f5] dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative px-6 md:px-16 lg:px-24 pt-10 pb-0 overflow-hidden">

        {/* Back */}
        <div className="mb-10">
          <Link href="/case-studies" className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-red-600 transition-colors duration-300">
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            Case Studies
          </Link>
        </div>

        {/* Giant index number watermark */}
        <div className="hero-index absolute top-10 right-6 md:right-16 text-[20vw] font-black text-zinc-200 dark:text-zinc-900 leading-none select-none pointer-events-none tabular-nums">
          {String(caseStudy.id).padStart(2, "0")}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Platform badge */}
          <div className="mb-5">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-400 border border-zinc-200 dark:border-zinc-800 px-3 py-1 rounded-full">
              {caseStudy.platform}
            </span>
          </div>

          {/* Title */}
          <h1 className="hero-name text-[13vw] sm:text-[10vw] md:text-[9vw] lg:text-[8rem] font-black tracking-tighter leading-[0.9] mb-10 text-zinc-900 dark:text-white">
            {caseStudy.name}<span className="text-red-600">.</span>
          </h1>

          {/* Hook + meta split */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 pb-14 border-b border-zinc-200 dark:border-zinc-800">
            <p className="hero-hook-text text-lg md:text-xl font-light leading-relaxed text-zinc-700 dark:text-zinc-400 max-w-2xl">
              {caseStudy.hook}
            </p>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-7 self-end">
              {[
                { label: "Role", value: caseStudy.role },
                { label: "Duration", value: caseStudy.duration },
                { label: "Platform", value: caseStudy.platform },
                { label: "Client", value: caseStudy.client, link: caseStudy.clientLink },
              ].map(({ label, value, link }) => (
                <div key={label} className="hero-meta-item">
                  <dt className="text-[9px] font-bold uppercase tracking-widest text-red-600 mb-1">{label}</dt>
                  <dd className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 leading-snug">
                    {link ? (
                      <a href={link} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-red-600 transition-colors duration-200">{value}</a>
                    ) : value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── HERO IMAGE ───────────────────────────────────────── */}
      <div className="hero-img-wrap w-full">
        <div className="relative w-full aspect-9/4 overflow-hidden">
          <Image
            src={caseStudy.heroImage}
            alt={`${caseStudy.name} Hero`}
            fill
            priority
            quality={100}
            unoptimized
            sizes="100vw"
            className="object-cover hover:scale-105 transition-transform duration-[1.4s] ease-in-out"
          />
          {/* Subtle bottom gradient */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-[#f8f7f5] dark:from-[#0a0a0a] to-[#f8f7f500] dark:to-[#0a0a0a00] pointer-events-none" />
        </div>
      </div>

      {/* ── BODY: sidebar TOC + content ─────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 pt-20 pb-32">
        <div className="flex gap-20 lg:gap-28 items-start">

          {/* Sticky side nav (desktop only) */}
          <aside className="hidden lg:block w-40 shrink-0 sticky top-24">
            <nav className="space-y-1">
              {NAV_ITEMS.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={e => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }); }}
                  className={`block text-[10px] font-bold uppercase tracking-[0.18em] py-1 transition-colors duration-200 ${activeSection === id
                    ? "text-red-600"
                    : "text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
                    }`}
                >
                  {activeSection === id && <span className="inline-block w-3 h-px bg-red-600 mr-2 align-middle" />}
                  {label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0 space-y-28">

            {/* ── 01 CONTEXT ── */}
            {caseStudy.context && (
              <section id="context" className="cs-section">
                <SectionLabel num="01" label="Context" />
                <p className="fade-in text-lg md:text-xl font-light leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {caseStudy.context.description}
                </p>
              </section>
            )}

            {/* ── 02 PROBLEM ── */}
            {caseStudy.problemFraming && (
              <section id="problem" className="cs-section">
                <SectionLabel num="02" label="Problem Framing" />
                <p className="fade-in text-lg md:text-xl font-light leading-relaxed text-zinc-700 dark:text-zinc-300 mb-10">
                  {caseStudy.problemFraming.statement}
                </p>
                <div className="fade-in relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-red-600">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-red-600 mb-3">Root Cause</p>
                  <p className="text-base font-light leading-relaxed text-zinc-600 dark:text-zinc-400 italic">
                    {caseStudy.problemFraming.rootCause}
                  </p>
                </div>
              </section>
            )}

            {/* ── 03 INSIGHTS ── */}
            {caseStudy.insights?.length > 0 && (
              <section id="insights" className="cs-section">
                <SectionLabel num="03" label="Research Insights" />
                <div className="space-y-px">
                  {caseStudy.insights.map((insight: Insight, idx: number) => (
                    <div key={idx} className="fade-in group">
                      <div className="flex gap-6 py-8 border-t border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/40 -mx-4 px-4 transition-colors duration-200 rounded-lg">
                        <span className="text-4xl font-black text-zinc-100 dark:text-zinc-800 leading-none tabular-nums shrink-0 select-none pt-1">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div className="flex-1">
                          <h3 className="text-base font-black tracking-tight text-zinc-900 dark:text-zinc-100 mb-3 leading-snug">
                            {insight.title}
                          </h3>
                          <p className="text-sm font-light leading-relaxed text-zinc-600 dark:text-zinc-400 mb-4">
                            {insight.text}
                          </p>
                          {insight.implication && (
                            <div className="flex items-start gap-2">
                              <span className="text-red-600 font-black leading-none mt-0.5">→</span>
                              <p className="text-xs font-medium leading-relaxed text-zinc-500 dark:text-zinc-400 italic">
                                {insight.implication}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ── 04 DECISIONS ── */}
            {caseStudy.decisions?.length > 0 && (
              <section id="decisions" className="cs-section">
                <SectionLabel num="04" label="Design Decisions" />
                <div className="space-y-24">
                  {caseStudy.decisions.map((d: Decision, idx: number) => (
                    <div key={idx} className="fade-in">
                      {/* Decision header */}
                      <div className="flex items-baseline gap-4 mb-8">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 shrink-0">
                          D{String(idx + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight text-zinc-900 dark:text-zinc-100">
                          {d.title}
                        </h3>
                      </div>

                      {/* Options + choice */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                          <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 mb-3">Options Considered</p>
                          <p className="text-sm font-light leading-relaxed text-zinc-600 dark:text-zinc-400">{d.options}</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-red-600 text-white">
                          <p className="text-[9px] font-bold uppercase tracking-widest text-red-200 mb-3">What I Chose</p>
                          <p className="text-sm font-semibold leading-relaxed">{d.choice}</p>
                        </div>
                      </div>

                      {/* Rationale */}
                      <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-4">
                        <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 mb-3">Rationale</p>
                        <p className="text-sm font-light leading-relaxed text-zinc-700 dark:text-zinc-300">{d.rationale}</p>
                      </div>

                      {/* Trade-off */}
                      <div className="flex gap-3 items-start px-4 py-4 rounded-xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 shrink-0 mt-0.5">Trade-off</span>
                        <p className="text-xs font-light italic leading-relaxed text-zinc-500 dark:text-zinc-400">{d.tradeoff}</p>
                      </div>

                      {/* Image */}
                      {d.image && (
                        <div className="mt-8 relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
                          <MagnifiableImage
                            src={d.image}
                            alt={d.title}
                            fill
                            sizes="(max-width: 896px) 100vw, 896px"
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ── 05 OUTCOMES ── */}
            {caseStudy.outcomes && (
              <section id="outcomes" className="cs-section">
                <SectionLabel num="05" label="Outcomes" />
                <p className="fade-in text-lg md:text-xl font-light leading-relaxed text-zinc-700 dark:text-zinc-300 mb-12">
                  {caseStudy.outcomes.summary}
                </p>

                {caseStudy.outcomes.metrics && (
                  <div className="fade-in space-y-3 mb-10">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 mb-6">Measurable Impact</p>
                    {caseStudy.outcomes.metrics.map((m: Metric, idx: number) => (
                      <div key={idx} className="group flex items-start gap-0 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-red-600/40 transition-colors duration-300">
                        <div className="w-2 shrink-0 bg-red-600 self-stretch" />
                        <div className="flex-1 flex flex-col md:flex-row md:items-center gap-2 p-5">
                          <div className="flex-1">
                            <p className="text-[9px] font-bold uppercase tracking-widest text-red-600 mb-0.5">{m.label}</p>
                            <p className="text-base font-black tracking-tight text-zinc-900 dark:text-zinc-100">{m.value}</p>
                          </div>
                          {m.note && (
                            <p className="text-xs font-light text-zinc-400 dark:text-zinc-500 leading-relaxed md:max-w-xs md:text-right">{m.note}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {caseStudy.outcomes.note && (
                  <div className="fade-in flex gap-3 items-start px-5 py-4 rounded-xl border-l-2 border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/40">
                    <p className="text-sm font-light italic leading-relaxed text-zinc-500 dark:text-zinc-400">{caseStudy.outcomes.note}</p>
                  </div>
                )}
              </section>
            )}

            {/* ── 06 ACHIEVEMENTS ── */}
            {caseStudy.achievements?.length > 0 && (
              <section id="achievements" className="cs-section">
                <SectionLabel num="06" label="Achievements" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {caseStudy.achievements.map((item: Achievement, idx: number) => (
                    <div
                      key={idx}
                      className="fade-in group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-7 hover:border-red-600/40 transition-colors duration-300"
                    >
                      {/* Accent corner */}
                      <div className="absolute top-0 left-0 w-10 h-10 bg-red-600 rounded-br-2xl flex items-center justify-center">
                        <span className="text-[10px] font-black text-white tabular-nums">{String(idx + 1).padStart(2, "0")}</span>
                      </div>
                      <div className="mt-6">
                        <h4 className="text-base font-black tracking-tight text-zinc-900 dark:text-zinc-100 mb-3 leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-sm font-light leading-relaxed text-zinc-500 dark:text-zinc-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ── 07 REFLECTION ── */}
            {caseStudy.reflection && (
              <section id="reflection" className="cs-section">
                <SectionLabel num="07" label="Reflection" />
                <div className="fade-in relative overflow-hidden rounded-3xl bg-zinc-900 dark:bg-zinc-100 p-10 md:p-14 group">
                  {/* Decorative blobs */}
                  <div className="absolute -top-16 -right-16 w-64 h-64 bg-red-600/8 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-red-600/5 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-1000" />
                  <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-6 relative">
                    What I&apos;d do differently
                  </p>
                  <p className="text-md md:text-lg font-medium tracking-tight leading-snug italic text-white dark:text-zinc-900 relative">
                    &ldquo;{caseStudy.reflection}&rdquo;
                  </p>
                </div>
              </section>
            )}

            {/* ── TAGS ── */}
            {caseStudy.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-10 border-t border-zinc-200 dark:border-zinc-800">
                {caseStudy.tags.map((tag: string, i: number) => (
                  <span key={i} className="px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest border border-zinc-200 dark:border-zinc-800 rounded-full text-zinc-400 hover:border-red-600/40 hover:text-red-600 transition-colors duration-200">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── GALLERY ─────────────────────────────────────────── */}
      {caseStudy.gallery?.length > 0 && (
        <section className="px-6 md:px-16 lg:px-24 py-24 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-red-600 mb-10">Project Gallery</p>
            <div className="flex flex-col gap-8 md:gap-12">
              {caseStudy.gallery.map((img: string, idx: number) => (
                <div
                  key={idx}
                  className="relative w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800"
                >
                  <MagnifiableImage
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    width={1920}
                    height={1080}
                    loading="lazy"
                    sizes="(max-width: 768px) calc(100vw - 3rem), (max-width: 1024px) calc(100vw - 8rem), (max-width: 1280px) calc(100vw - 12rem), 1280px"
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── NEXT / PREV ──────────────────────────────────────── */}
      <section className="bg-[#f8f7f5] dark:bg-[#0a0a0a] border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto grid grid-cols-2 divide-x divide-zinc-200 dark:divide-zinc-800">
          <Link href={`/case-studies/${prevStudy.slug}`} className="group px-6 md:px-16 py-16 flex flex-col gap-3 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-colors duration-300">
            <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-red-600 transition-colors">← Previous</span>
            <span className="text-xl md:text-3xl font-black tracking-tighter group-hover:italic transition-all duration-300">{prevStudy.name}</span>
          </Link>
          <Link href={`/case-studies/${nextStudy.slug}`} className="group px-6 md:px-16 py-16 flex flex-col gap-3 items-end text-right hover:bg-zinc-50 dark:hover:bg-zinc-900/30 transition-colors duration-300">
            <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-red-600 transition-colors">Next →</span>
            <span className="text-xl md:text-3xl font-black tracking-tighter group-hover:italic transition-all duration-300">{nextStudy.name}</span>
          </Link>
        </div>
      </section>

      <div className="py-16 px-6 md:px-16 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
        <LegalLinks />
      </div>
    </div>
  );
}

function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="fade-in flex items-center gap-4 mb-10">
      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-red-600">{num} —</span>
      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-400">{label}</span>
      <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
    </div>
  );
}
