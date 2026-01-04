import type { Metadata } from "next";
import { Montserrat, Stalinist_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import data from "@/data/asset";

const stalinistOne = Stalinist_One({
  variable: "--font-stalinistOne",
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "600"],
  subsets: ["latin"],
});

const info = data.info[0];

export const metadata: Metadata = {
  metadataBase: new URL(info.siteUrl), // Add this line
  title: `${info.name} - ${info.title}`,
  description: `${
    info.name
  } | UI/UX Designer, Developer & Branding Specialist in ${
    info.location
  }. ${info.desc.substring(0, 150)}...`,
  keywords:
    "UI/UX Designer, Product Designer, Frontend Developer, Shihab Rahman, Kerala Designer, React Developer, Figma Designer, Branding Specialist",
  authors: [{ name: info.name }],
  creator: info.name,
  openGraph: {
    title: `${info.name} - ${info.title}`,
    description: `${info.name} | UI/UX Designer, Developer & Branding Specialist in ${info.location}. Crafting seamless digital experiences through innovative design and development.`,
    url: "https://shihabsaleem.online/",
    siteName: `${info.name} Portfolio`,
    images: [
      {
        url: "/assets/og-shihab.jpg", // Now resolves to full URL
        width: 1200,
        height: 630,
        alt: `${info.name} - UI/UX Designer`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${info.name} - UI/UX Designer & Developer`,
    description: `UI/UX Designer, Developer & Branding Specialist in ${info.location}. Crafting seamless digital experiences.`,
    creator: "@shihabrsaleem",
    images: ["/assets/og-shihab.jpg"], // Now resolves to full URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "wXIsQDNzW9JDNg5flpQbfbez4dH1FeapT0phCbPw55k",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${stalinistOne.variable} ${montserrat.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
