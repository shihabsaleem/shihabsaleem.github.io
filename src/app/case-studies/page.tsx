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
        Shihab Saleem - UI/UX Designer & Product Designer based in Kerala, India.
        Specializing in SaaS design, mobile applications, branding, and user-centered digital experiences.
        Explore my portfolio of responsive web design, interactive prototyping, and frontend development projects using React and Next.js.
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
