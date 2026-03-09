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
                    <p>
                        Shihab Saleem is a professional UI UX Designer and Product Designer based in Kerala, India.
                        Offering expert design services for SaaS platforms, mobile applications, and enterprise digital products.
                        Providing end-to-end design solutions from user research and wireframing to high-fidelity UI design and frontend development using React and Next.js.
                        Experience spanning branding, interface design, user experience optimization, and design systems.
                    </p>
                </div>
            </div>
        </footer>
    );
}
