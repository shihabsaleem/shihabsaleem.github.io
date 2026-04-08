import CaseStudy from "@/components/case-study";
import caseStudies from "@/data/casestudy";
import { notFound } from "next/navigation";

// Generate static params for all case studies at build time
export async function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: `${caseStudy.name} UX Case Study`,
    description: caseStudy.overview,
    openGraph: {
      title: `${caseStudy.name} UX Case Study`,
      description: caseStudy.overview,
      images: [
        {
          url: caseStudy.heroImage,
          width: 1200,
          height: 675,
          alt: `${caseStudy.name} Case Study Cover`,
        },
      ],
    },
    alternates: {
      canonical: `/case-studies/${slug}`,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": caseStudy.name,
            "description": caseStudy.overview,
            "image": `https://www.shihabsaleem.site${caseStudy.heroImage}`,
            "author": {
              "@type": "Person",
              "name": "Shihab Saleem"
            },
            "creator": {
              "@type": "Person",
              "name": "Shihab Saleem"
            },
            "inLanguage": "en-US",
            "datePublished": caseStudy.timeline,
            "genre": caseStudy.platform,
            "mainEntityOfPage": `https://www.shihabsaleem.site/case-studies/${slug}`
          })
        }}
      />
      <CaseStudy slug={slug} />
    </div>
  );
}