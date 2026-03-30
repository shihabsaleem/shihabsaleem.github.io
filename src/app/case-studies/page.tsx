import Link from "next/link";
import Image from "next/image";
import caseStudies from "@/data/casestudy";
import LegalLinks from "@/components/legal";

export const metadata = {
  title: "Case Studies | Shihab Saleem",
  description: "Explore in-depth design and development case studies by Shihab Saleem.",
  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white transition-colors duration-500 pt-32">

      {caseStudies.length === 0 && (
        <main className="relative z-10 pt-20">
          <div className="max-w-3xl px-6 md:px-12 lg:px-20 mb-20">
            <h2 className="text-[14vw] md:text-[10vw] leading-[0.8] font-black  tracking-tighter">
              Curating the chaos<span className="text-red-600">.</span>
            </h2>
          </div>
        </main>
      )}

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter leading-none">
          Case Studies  <span className="text-red-600">.</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
          Look into my design process.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-32 grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudies.map((study, index) => (
          <Link
            key={study.id}
            href={`/case-studies/${study.slug}`}
            className="group block cursor-pointer"
          >
            <div className="relative w-full aspect-[2/1] overflow-hidden bg-gray-100 dark:bg-zinc-900 mb-6 rounded-sm">
              <Image
                src={study.heroImage}
                alt={study.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:grayscale group-hover:grayscale transition-all duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2 transition-all duration-300">
              {study.name}
            </h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {study.tags.slice(0, 3).map((tag, i) => (
                <span key={i} className="text-xs font-mono uppercase tracking-widest text-gray-500">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <div className="py-12 px-6 md:px-12 lg:px-20">
        <LegalLinks />
      </div>
    </div>
  );
}
