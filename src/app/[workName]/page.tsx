// src/app/[workName]/page.tsx
import ProjectPage from "@/components/workpage";
import LegalLinks from "@/components/legal";
import data from "@/data/asset";
import { notFound } from "next/navigation";

const { works } = data;

// Helper function to convert work name to slug
function nameToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

// Helper function to find work by slug
function findWorkBySlug(slug: string) {
  return works.find(work => nameToSlug(work.name) === slug);
}

// Generate static params for all works
export async function generateStaticParams() {
  return works.map((work) => ({
    workName: nameToSlug(work.name),
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ workName: string }> 
}) {
  const { workName } = await params;
  const work = findWorkBySlug(workName);
  
  if (!work) {
    return {
      title: "Project Not Found",
    };
  }
  
  return {
    title: `${work.name} - Shihab Saleem`,
    description: work.description,
  };
}

export default async function Page({ 
  params 
}: { 
  params: Promise<{ workName: string }> 
}) {
  const { workName } = await params;
  const work = findWorkBySlug(workName);
  
  // If work not found, show 404
  if (!work) {
    notFound();
  }
  
  return (
    <div>
      <ProjectPage projectId={work.id} />
      
      {/* Legal Links Footer */}
      <div className="my-4 px-6 md:px-12 lg:px-20">
        <LegalLinks />
      </div>
    </div>
  );
}