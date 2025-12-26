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
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 md:px-12 lg:px-20 py-12">
      {/* Hero Section */}
      <div ref={titleRef} className="mb-12">
        <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-4">
          Privacy Policy<span className="text-red-500">.</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </div>

      {/* Content */}
      <div ref={contentRef} className="max-w-4xl space-y-8">
        <section>
          <h2 className="text-3xl font-light mb-4">Introduction</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            This Privacy Policy describes how Shihab Saleem ("I", "me", or "my") collects, uses, and protects your information when you visit my portfolio website. I am committed to ensuring that your privacy is protected and that any information collected is handled responsibly.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-light mb-4">Information Collection</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            My website is designed with privacy in mind. I do not collect, store, or process any personal information directly. However, please be aware of the following:
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span><strong>Contact Interactions:</strong> When you use the call button or WhatsApp button on my website, you will be redirected to your phone's native dialer or WhatsApp application. Any information shared through these channels is subject to your phone's privacy settings and WhatsApp's privacy policy respectively. I do not collect or store any data from these interactions.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span><strong>Third-Party Embeds:</strong> This website may contain embedded content from third-party services (such as social media feeds, maps, videos, or other interactive elements). These embeds may collect data according to their own privacy policies. I recommend reviewing the privacy policies of these third-party services.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-light mb-4">Cookies and Tracking</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            My website does not use cookies for tracking or analytics purposes. However, third-party embedded content may use their own cookies. You can control cookie settings through your browser preferences.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-light mb-4">Data Security</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Since I do not collect or store personal information on my website, there is minimal risk to your data security when visiting my site. However, I implement reasonable security measures to protect the integrity of my website.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-light mb-4">Third-Party Services</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            This website may include links to or embeds from third-party services, including but not limited to:
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>WhatsApp (for direct messaging)</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Social media platforms</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Other embedded content providers</span>
            </li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            These services operate independently and have their own privacy policies. I am not responsible for the privacy practices of these third-party services.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-light mb-4">Your Rights</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Since I do not collect or store your personal information, there is no data to access, modify, or delete from my end. If you have concerns about data collected by third-party services used on this website, please contact those services directly.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-light mb-4">Children's Privacy</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            My website is not directed to children under the age of 13, and I do not knowingly collect information from children.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-light mb-4">Changes to This Policy</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I may update this Privacy Policy from time to time to reflect changes in my practices or for legal reasons. The "Last updated" date at the top of this page indicates when the policy was last revised. I encourage you to review this policy periodically.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-light mb-4">Contact Me</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            If you have any questions or concerns about this Privacy Policy, please feel free to contact me through the contact information provided on my website.
          </p>
        </section>
      </div>

      {/* Legal Links Footer */}
      <div className="mt-16">
        <LegalLinks />
      </div>
    </div>
  );
};

export default PrivacyPolicy;