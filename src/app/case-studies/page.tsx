import CaseStudiesClient from "@/components/case-studies-client";
import assetData from "@/data/asset";

const info = assetData.info[0];

export const metadata = {
  title: "Case Studies | Shihab Saleem",
  description: "Explore in-depth design and development case studies by Shihab Saleem.",
  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <h1 className="sr-only">
        Shihab Saleem Case Studies - Expert UI/UX Design & Product Design Portfolio from Kerala, India.
        Discover in-depth case studies on SaaS platforms, engaging mobile apps, and user-centered digital experiences.
        Explore real-world examples of my responsive web design, interactive prototyping, and frontend development using Next.js and React.
        <div className="flex gap-8 mb-8 tracking-widest text-gray-400 dark:text-gray-500 z-20">
          <a href={`https://${info.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`https://${info.github}`} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={`https://${info.insta}`} target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </h1>
      <CaseStudiesClient />
    </>
  );
}
