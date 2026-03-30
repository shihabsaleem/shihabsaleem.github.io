import Link from "next/link";
import Image from "next/image";
import caseStudies from "@/data/casestudy";
import LegalLinks from "@/components/legal";
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
    <div className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white overflow-x-hidden selection:bg-red-600 selection:text-white transition-colors duration-500"
    >
      {/* Hero Section */}
      <h1 className="sr-only">
        Shihab Saleem - UI/UX Designer & Product Designer based in Kerala, India.
        Specializing in SaaS design, mobile applications, branding, and user-centered digital experiences.
        Explore my portfolio of responsive web design, interactive prototyping, and frontend development projects using React and Next.js.
        <div className="flex gap-8 mb-8 tracking-widest text-gray-400 dark:text-gray-500 z-20">
          <a href={`https://${info.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white hover:underline underline-offset-8 hover:text-red-600 dark:hover:text-red-600 transition-all duration-300">LinkedIn</a>
          <a href={`https://${info.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white hover:underline underline-offset-8 hover:text-red-600 dark:hover:text-red-600 transition-all duration-300">GitHub</a>
          <a href={`https://${info.insta}`} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white hover:underline underline-offset-8 hover:text-red-600 dark:hover:text-red-600 transition-all duration-300">Instagram</a>
        </div>
      </h1>

      {/* Texture Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] dark:opacity-[0.05] bg-[url('/noise.svg')]" />



      <main className="relative z-10 pt-20">
        {/* HERO */}
        <section className=" h-[30vh] md:h-[70vh] flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-6 md:pb-10">
          <h2 className="text-[14vw] md:text-[10vw] leading-[0.8] font-black  tracking-tighter">
            Case
            <br />
            Studies<span className="text-red-600">.</span>
          </h2><p className="text-gray-600 py-4 dark:text-gray-400 leading-relaxed text-sm md:text-base">
            Look into my design process.
          </p>
        </section>

      </main>

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
    </div >
  );
}
