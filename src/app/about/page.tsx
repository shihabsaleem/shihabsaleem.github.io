import React from "react";
import { Metadata } from "next";
import Hero from "@/components/hero";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Skill from "@/components/skill";
import LegalLinks from "@/components/legal";
import assetData from "@/data/asset";

const info = assetData.info[0];

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${info.name}, a UI/UX Designer and Frontend Developer from Kerala, India. Explore professional experience, education, skills in Figma, React, Next.js, and design systems. View work history at Jadbery Digital, Saasyway, and more.`,
  keywords: [
    "Shihab Saleem About",
    "UI/UX Designer Portfolio",
    "Frontend Developer Kerala",
    "Design Experience",
    "React Developer Portfolio",
    "Figma Expert",
    "Product Designer Background",
    "Web Developer Education",
  ],
  openGraph: {
    title: `About ${info.name} - UI/UX Designer & Developer`,
    description: `Professional UI/UX Designer and Developer from Kerala, India. Specializing in user-centered design, React development, and modern design systems. View experience, education, and skills.`,
    url: "https://shihabsaleem.site/about",
    type: "profile",
    images: [
      {
        url: "/assets/og-shihab.jpg",
        width: 1200,
        height: 630,
        alt: `${info.name} - About Page`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${info.name} - UI/UX Designer & Developer`,
    description: `Professional journey of a UI/UX Designer and Developer from Kerala. Experience in product design, frontend development, and branding.`,
    images: ["/assets/og-shihab.jpg"],
  },
  alternates: {
    canonical: "https://shihabsaleem.site/about",
  },
};

const About = () => {
  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-20 py-12">
      <h1 className="sr-only">
        About {info.name} - UI/UX Designer, Developer & Branding Specialist from{" "}
        {info.location}
      </h1>
      <Hero />
      <Education />
      <Experience />
      <Skill />

      <div className="mt-16">
        <LegalLinks />
      </div>
    </div>
  );
};

export default About;
