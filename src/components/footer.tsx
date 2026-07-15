import LegalLinks from "./legal";
import assetData from "@/data/asset";

const info = assetData.info[0];

export default function GlobalFooter() {
    return (
        <footer className="w-full px-6 md:px-12 lg:px-20 py-10 border-t border-black/5 dark:border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <LegalLinks />
                    <div className="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono uppercase tracking-widest">
                        © {new Date().getFullYear()} {info.name}. All rights reserved.
                    </div>
                </div>

                {/* Hidden SEO Content */}
                <div className="sr-only">
                    <h2>Shihab Saleem - Freelance UI/UX Designer & Frontend Developer</h2>
                    <p>
                        Shihab Saleem is a top-tier professional UI/UX Designer, Product Designer, and Web Developer based in Kerala, India. 
                        Delivering expert user-centric design services for SaaS platforms, mobile applications, e-commerce, and enterprise digital products globally. 
                        Comprehensive end-to-end design solutions covering user research, wireframing, prototyping, high-fidelity UI design, and responsive frontend development utilizing React, Next.js, and Tailwind CSS. 
                        Proven expertise spanning brand identity design, intuitive interface design, user experience (UX) optimization, usability testing, and scalable design systems. Hire a dedicated UI/UX expert to elevate your digital presence.
                    </p>
                </div>
            </div>
        </footer>
    );
}
