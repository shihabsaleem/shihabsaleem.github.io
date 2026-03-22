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
  description: `Discover the professional journey of Shihab Saleem, a UI UX Designer and Product Designer in Kerala. Over 3 years of experience in SaaS design, mobile apps, and frontend development.`,
  keywords: [
    "About Shihab Saleem",
    "UI UX Designer Kerala",
    "Product Designer Background",
    "Frontend Developer Kerala",
    "SaaS Design Expert",
    "Design Portfolio Kerala",
    "Shihab Saleem Experience",
  ],
  openGraph: {
    title: `About Shihab Saleem | UI UX Designer & Product Designer`,
    description: `Professional background and skills of Shihab Saleem, a UI UX Designer specializing in user-centered digital products in Kerala, India.`,
    url: "/about",
    type: "profile",
    images: [
      {
        url: "/assets/og.jpg",
        width: 1200,
        height: 630,
        alt: `About Shihab Saleem - UI UX Designer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About Shihab Saleem | UI UX Designer Kerala`,
    description: `Learn about Shihab Saleem's expertise in UI UX design, product strategy, and frontend development.`,
    images: ["/assets/og.jpg"],
  },
  alternates: {
    canonical: "/about",
  },
};

const About = () => {
  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-20 py-12">
      <h1 className="sr-only">
        About Shihab Saleem - UI UX Designer & Product Designer based in Kerala
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
