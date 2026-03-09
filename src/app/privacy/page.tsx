import { Metadata } from "next";
import PrivacyClient from "@/components/privacy-client";

export const metadata: Metadata = {
  title: "Privacy Policy | Shihab Saleem | UI UX Designer Kerala",
  description: "Read the Privacy Policy of Shihab Saleem's portfolio. Information about data collection through Google Analytics and user privacy.",
  alternates: {
    canonical: "https://shihabsaleem.site/privacy",
  },
  robots: {
    index: false,
    follow: true,
  }
};

export default function PrivacyPolicy() {
  return <PrivacyClient />;
}