import LegalLinks from "@/components/legal";
import Image from "next/image";
import Link from "next/link";
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
    title: `${caseStudy.name} UX Case Study - Shihab Saleem`,
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
      canonical: `/process/${slug}`,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  const currentIndex = caseStudies.findIndex((cs) => cs.slug === slug);
  const caseStudy = caseStudies[currentIndex];

  if (!caseStudy) {
    notFound();
  }

  // Determine prev/next for navigation (circular)
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : caseStudies[caseStudies.length - 1];
  const nextStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : caseStudies[0];

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#050505] text-[#111] dark:text-[#eee] transition-colors duration-500 pt-20">
      
      {/* 1. HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-20">
        <Link href="/process" className="group inline-flex items-center text-xs font-mono uppercase tracking-widest text-gray-500 hover:text-black dark:hover:text-white transition-colors mb-16">
          <span className="mr-4 transform transition-transform group-hover:-translate-x-2">←</span> Back to Case Studies
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-16">
          <div className="lg:col-span-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
              {caseStudy.name}<span className="text-red-600">.</span>
            </h1>
            <p className="text-xl md:text-3xl font-light text-gray-600 dark:text-gray-400 leading-snug">
              {caseStudy.overview}
            </p>
          </div>
        </div>
        
        {/* Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12 border-y border-black/10 dark:border-white/10 font-mono text-sm">
          <div>
            <span className="block text-xs text-gray-400 uppercase tracking-widest mb-2">Role</span>
            <span className="font-medium">{caseStudy.role}</span>
          </div>
          <div>
            <span className="block text-xs text-gray-400 uppercase tracking-widest mb-2">Timeline</span>
            <span className="font-medium">{caseStudy.timeline}</span>
          </div>
          <div>
            <span className="block text-xs text-gray-400 uppercase tracking-widest mb-2">Platform</span>
            <span className="font-medium">{caseStudy.platform}</span>
          </div>
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <span className="block text-xs text-gray-400 uppercase tracking-widest mb-2">My Team</span>
            <div className="flex flex-wrap gap-2">
              {caseStudy.team.map((t, i) => (
                <span key={i} className="text-gray-600 dark:text-gray-300">{t}{i < caseStudy.team.length - 1 ? ',' : ''}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full relative h-[60vh] md:h-[85vh] bg-gray-200 dark:bg-zinc-900">
        <Image 
          src={caseStudy.heroImage} 
          alt={`${caseStudy.name} Hero`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* ARTICLE CONTENT */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-32 space-y-32">
        
        {/* 2. THE PROBLEM */}
        {caseStudy.theProblem && (
          <section className="space-y-8">
            <div className="flex items-center gap-4 mb-12">
              <span className="w-12 h-[1px] bg-red-600"></span>
              <h2 className="text-xs font-mono text-red-600 uppercase tracking-widest">The Problem</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold leading-tight">{caseStudy.theProblem.title}</h3>
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              {caseStudy.theProblem.description}
            </p>
            <div className="bg-white dark:bg-[#111] p-8 md:p-10 border border-black/5 dark:border-white/5 rounded-2xl shadow-sm mt-12">
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Core Objectives</h4>
              <ul className="space-y-4">
                {caseStudy.theProblem.goals.map((goal, i) => (
                  <li key={i} className="flex items-start text-lg">
                    <span className="text-red-500 mr-4 font-bold">✓</span>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* 3. RESEARCH & DISCOVERY */}
        {caseStudy.research && (
          <section className="space-y-8">
            <div className="flex items-center gap-4 mb-12">
              <span className="w-12 h-[1px] bg-red-600"></span>
              <h2 className="text-xs font-mono text-red-600 uppercase tracking-widest">Research & Discovery</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">{caseStudy.research.title}</h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-12">
              {caseStudy.research.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudy.research.insights.map((insight, idx) => (
                <div key={idx} className="bg-gray-100 dark:bg-zinc-900 p-8 rounded-xl border border-black/5 dark:border-white/5">
                  <span className="font-mono text-red-600 font-bold mb-4 block">0{idx + 1}</span>
                  <h4 className="text-xl font-bold mb-4">{insight.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{insight.text}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. PERSONAS */}
        {caseStudy.personas && caseStudy.personas.length > 0 && (
          <section className="space-y-8">
            <div className="flex items-center gap-4 mb-12">
              <span className="w-12 h-[1px] bg-red-600"></span>
              <h2 className="text-xs font-mono text-red-600 uppercase tracking-widest">User Personas</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudy.personas.map((persona, idx) => (
                <div key={idx} className="bg-white dark:bg-[#111] p-10 border border-black/5 dark:border-white/5 rounded-2xl shadow-sm">
                  <h4 className="text-2xl font-bold font-serif mb-6">{persona.name}</h4>
                  <blockquote className="text-xl italic text-gray-500 mb-8 border-l-4 border-red-600 pl-4 py-2">
                    "{persona.quote}"
                  </blockquote>
                  <h5 className="text-xs font-bold uppercase tracking-widest mb-4">Pain Points</h5>
                  <ul className="space-y-3">
                    {persona.painPoints.map((pain, i) => (
                      <li key={i} className="flex items-start text-gray-600 dark:text-gray-400">
                        <span className="text-red-500 mr-3">•</span>
                        {pain}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. IDEATION */}
        {caseStudy.ideation && (
          <section className="space-y-8">
            <div className="flex items-center gap-4 mb-12">
              <span className="w-12 h-[1px] bg-red-600"></span>
              <h2 className="text-xs font-mono text-red-600 uppercase tracking-widest">Ideation</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">{caseStudy.ideation.title}</h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {caseStudy.ideation.description}
            </p>
            {caseStudy.ideation.image && (
              <div className="relative w-full h-[40vh] md:h-[60vh] mt-12 mb-12 bg-gray-100 rounded-2xl overflow-hidden border border-black/5 dark:border-white/5">
                <Image src={caseStudy.ideation.image} alt="Ideation Process" fill className="object-cover" />
              </div>
            )}
          </section>
        )}

        {/* 6. HIGH FIDELITY DESIGN */}
        {caseStudy.design && (
          <section className="space-y-12">
            <div className="flex items-center gap-4 mb-12">
              <span className="w-12 h-[1px] bg-red-600"></span>
              <h2 className="text-xs font-mono text-red-600 uppercase tracking-widest">High Fidelity Design</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold leading-tight">{caseStudy.design.title}</h3>
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              {caseStudy.design.description}
            </p>

            {caseStudy.design.features && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 mb-16">
                {caseStudy.design.features.map((feature, idx) => (
                  <div key={idx} className="border-t border-black/10 dark:border-white/10 pt-8">
                    <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{feature.text}</p>
                  </div>
                ))}
              </div>
            )}

            {caseStudy.design.images && (
              <div className="space-y-8">
                {caseStudy.design.images.map((img, idx) => (
                  <div key={idx} className="relative w-full h-[50vh] md:h-[70vh] bg-gray-100 dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm border border-black/5 dark:border-white/5">
                     <Image src={img} alt={`High Fidelity UI ${idx + 1}`} fill sizes="100vw" className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* 7. TESTING OVERVIEW */}
        {caseStudy.testing && (
          <section className="bg-white dark:bg-[#111] p-10 md:p-16 border border-black/10 dark:border-white/10 rounded-3xl shadow-sm">
            <div className="flex items-center gap-4 mb-12">
              <span className="w-12 h-[1px] bg-red-600"></span>
              <h2 className="text-xs font-mono text-red-600 uppercase tracking-widest">Usability Testing</h2>
            </div>
            <h3 className="text-3xl font-bold mb-6">{caseStudy.testing.title}</h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-12 max-w-2xl">
              {caseStudy.testing.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-black/5 dark:border-white/5 pt-12">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center text-red-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                  What Failed
                </h4>
                <p className="text-gray-600 dark:text-gray-400">{caseStudy.testing.feedback}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center text-green-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                  The Iteration
                </h4>
                <p className="text-gray-600 dark:text-gray-400">{caseStudy.testing.iteration}</p>
              </div>
            </div>
          </section>
        )}

        {/* 8. OUTCOMES */}
        {caseStudy.outcomes && (
          <section className="space-y-12">
            <div className="flex items-center gap-4 mb-12">
              <span className="w-12 h-[1px] bg-red-600"></span>
              <h2 className="text-xs font-mono text-red-600 uppercase tracking-widest">Outcomes & Takeaways</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold">{caseStudy.outcomes.title}</h3>
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              {caseStudy.outcomes.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {caseStudy.outcomes.metrics && caseStudy.outcomes.metrics.map((metric, idx) => (
                <div key={idx} className="bg-red-600 text-white p-8 rounded-2xl">
                  <span className="text-red-300 font-mono text-sm block mb-4 uppercase tracking-widest">Metric 0{idx + 1}</span>
                  <p className="text-2xl font-bold leading-tight">{metric}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gray-100 dark:bg-zinc-900 p-10 md:p-16 rounded-3xl">
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Key Takeaways</h4>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic">
                "{caseStudy.outcomes.takeaways}"
              </p>
            </div>
          </section>
        )}
      </div>

      {/* FINAL GALLERY */}
      {caseStudy.gallery && caseStudy.gallery.length > 0 && (
        <div className="w-full bg-white dark:bg-[#111] py-32 border-t border-black/5 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudy.gallery.map((img, idx) => (
              <div key={idx} className={`relative w-full overflow-hidden bg-gray-100 dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow-sm rounded-xl ${idx === 0 || idx % 3 === 0 ? 'md:col-span-2 h-[50vh] md:h-[80vh]' : 'h-[40vh] md:h-[60vh]'}`}>
                 <Image src={img} alt={`Final Showcase ${idx + 1}`} fill sizes="100vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="border-y border-black/10 dark:border-white/10 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between w-full h-full divide-y md:divide-y-0 md:divide-x divide-black/10 dark:divide-white/10">
            
            <Link href={`/process/${prevStudy.slug}`} className="group flex-1 p-12 md:p-24 hover:bg-black/2 dark:hover:bg-white/2 transition-colors">
              <span className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-4 transform transition-transform group-hover:-translate-x-2">← Previous Case Study</span>
              <span className="text-3xl md:text-5xl font-black">{prevStudy.name}</span>
            </Link>
            
            <Link href={`/process/${nextStudy.slug}`} className="group flex-1 p-12 md:p-24 hover:bg-black/2 dark:hover:bg-white/2 transition-colors text-right">
              <span className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-4 transform transition-transform group-hover:translate-x-2">Next Case Study →</span>
              <span className="text-3xl md:text-5xl font-black">{nextStudy.name}</span>
            </Link>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-12 px-6 md:px-12 lg:px-20 bg-white dark:bg-[#050505]">
        <LegalLinks />
      </div>
    </div>
  );
}
