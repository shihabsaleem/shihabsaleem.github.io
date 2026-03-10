import { Metadata } from "next";
import ContactClient from "@/components/contact-client";

export const metadata: Metadata = {
  title: "Contact Shihab Saleem | UI UX Designer & Product Designer in Kerala",
  description: "Get in touch with Shihab Saleem, a premium UI UX Designer and Product Designer in Kerala. Available for freelance projects, SaaS design, and collaboration.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Shihab Saleem | UI UX Designer Kerala",
    description: "Ready to bring your ideas to life? Contact Shihab Saleem for expert UI UX and Product Design services.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/assets/og-shihab.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Shihab Saleem - UI UX Designer",
      },
    ],
  },
};

export default function Contact() {
  return <ContactClient />;
}
