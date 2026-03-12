import { Metadata } from "next";
import PrivacyClient from "@/components/privacy-client";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Privacy Policy of Shihab Saleem's portfolio. Information about data collection through Google Analytics and user privacy.",
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: false,
    follow: true,
  }
};

export default function PrivacyPolicy() {
  return <PrivacyClient />;
}