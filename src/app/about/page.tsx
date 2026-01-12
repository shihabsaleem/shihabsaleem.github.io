import React from "react";
import Hero from "@/components/hero";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Skill from "@/components/skill";
import LegalLinks from "@/components/legal";
import assetData from "@/data/asset";
import { Metadata } from "next";

const info = assetData.info[0];

export const metadata: Metadata = {
  title: `About ${info.name} | UI/UX Designer & Developer`,
  description: info.seoAboutDesc,
  openGraph: {
    title: `About ${info.name}`,
    description: info.seoAboutDesc,
    images: [info.ogImage],
  },
};

const About = () => {
  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-20 py-12">
      {/* Hero Section */}
      <h1 className="sr-only">
        {info.name} - UI/UX Designer, Developer & Branding Specialist in{" "}
        {info.location}
      </h1>
      <Hero />
      <Education />
      <Experience />
      <Skill />

      {/* Legal Links Footer */}
      <div className="mt-16">
        <LegalLinks />
      </div>
    </div>
  );
};

export default About;
