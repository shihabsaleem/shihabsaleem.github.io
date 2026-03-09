import { Metadata } from "next";
import HomeClient from "@/components/home-client";

export const metadata: Metadata = {
  title: "Shihab Saleem | UI UX & Branding Designer in Kerala",
  description: "Portfolio of Shihab Saleem, a premium UI UX Designer and Product Designer in Kerala. Specializing in SaaS, mobile apps, and user-centered digital solutions.",
  alternates: {
    canonical: "https://shihabsaleem.site",
  },
  openGraph: {
    title: "UI UX Designer in Kerala | Shihab Saleem Portfolio",
    description: "Premium UI UX Designer and Product Designer in Kerala crafting seamless digital experiences for SaaS and mobile apps.",
    url: "https://shihabsaleem.site",
    siteName: "Shihab Saleem Portfolio",
    images: [
      {
        url: "/assets/og-shihab.jpg",
        width: 1200,
        height: 630,
        alt: "Shihab Saleem - UI UX Designer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return <HomeClient />;
}
