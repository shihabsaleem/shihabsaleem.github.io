"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import LegalLinks from "@/components/legal";

const PrivacyPolicy = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0 })
      .fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0 },
        "-=0.7"
      );
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 px-6 md:px-12 lg:px-20 py-24 transition-colors duration-500">
      
      {/* Hero Section */}
      <div ref={titleRef} className="mb-16">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-zinc-900 dark:text-white">
          Privacy Policy<span className="text-red-600">.</span>
        </h1>
        <p className="text-zinc-500 dark:text-zinc-500 font-mono text-xs uppercase tracking-widest">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </div>

      {/* Content */}
      <div ref={contentRef} className="max-w-4xl space-y-12">
        <section>
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-red-600 mb-6">Introduction</h2>
          <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed text-lg font-light">
            This Privacy Policy describes how Shihab Saleem (&quot;I&quot;, &quot;me&quot;, or &quot;my&quot;) collects, uses, and protects your information. By using this website, you agree to the collection and use of information in accordance with this policy.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-red-600 mb-6">Analytics & Tracking</h2>
          <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed mb-6 font-light">
            I use <strong className="text-zinc-900 dark:text-zinc-100">Google Analytics</strong> to monitor and analyze the use of my website. Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. 
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="text-red-600 font-black tracking-tighter">—</span>
              <span className="text-zinc-700 dark:text-zinc-400 leading-relaxed font-light">
                Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-red-600 font-black tracking-tighter">—</span>
              <span className="text-zinc-700 dark:text-zinc-400 leading-relaxed font-light">
                Google may use the collected data to contextualize and personalize the ads of its own advertising network.
              </span>
            </li>
          </ul>
        </section>

        <section className="p-8 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl transition-all">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-red-600 mb-4">Cookies</h2>
          <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed font-light">
            Cookies are files with a small amount of data which may include an anonymous unique identifier. Google Analytics uses cookies to collect information and help analyze how users use the site. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-red-600 mb-6">Information Collection</h2>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="text-red-600 font-black tracking-tighter">—</span>
              <span className="text-zinc-700 dark:text-zinc-400 leading-relaxed font-light">
                <strong className="text-zinc-900 dark:text-zinc-100 font-bold">Direct Interactions:</strong> I do not store personal information directly. Contact via WhatsApp or Phone is handled through your native applications.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-red-600 font-black tracking-tighter">—</span>
              <span className="text-zinc-700 dark:text-zinc-400 leading-relaxed font-light">
                <strong className="text-zinc-900 dark:text-zinc-100 font-bold">Usage Data:</strong> Google Analytics may collect information such as your IP address, browser type, browser version, the pages of our site that you visit, and the time spent on those pages.
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-red-600 mb-6">Third-Party Disclosure</h2>
          <div className="flex flex-wrap gap-3">
            {["Google Analytics", "WhatsApp", "LinkedIn", "GitHub", "Behance", "Instagram"].map((service) => (
              <span key={service} className="px-4 py-2 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
                {service}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-red-600 mb-6">Contact Me</h2>
          <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed font-light">
            If you have any questions about this Privacy Policy, please contact me through the information provided in the portfolio.
          </p>
        </section>
      </div>

      <div className="mt-24 pt-12 border-t border-zinc-200 dark:border-zinc-800">
        <LegalLinks />
      </div>
    </div>
  );
};

export default PrivacyPolicy;