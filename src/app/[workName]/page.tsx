// src/app/[workName]/page.tsx
import ProjectPage from "@/components/workpage";
import LegalLinks from "@/components/legal";
import data from "@/data/asset";
import { notFound } from "next/navigation";

// Create the sorted list (Newest/Highest ID first)
const sortedWorks = [...data.works].sort((a, b) => b.id - a.id);

// Helper function to convert work name to slug
function nameToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

// Helper function to find work by slug in the sorted list
function findWorkBySlug(slug: string) {
  return sortedWorks.find((work) => nameToSlug(work.name) === slug);
}

// Generate static params in the descending order
export async function generateStaticParams() {
  return sortedWorks.map((work) => ({
    workName: nameToSlug(work.name),
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ workName: string }>;
}) {
  const { workName } = await params;
  const work = findWorkBySlug(workName);

  if (!work) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${work.name} - Shihab Saleem`,
    description: work.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ workName: string }>;
}) {
  const { workName } = await params;
  const work = findWorkBySlug(workName);

  if (!work) {
    notFound();
  }

  return (
    <div>
      <ProjectPage projectId={work.id} />
      <div className="my-4 px-6 md:px-12 lg:px-20">
        <LegalLinks />
      </div>
    </div>
  );
}
