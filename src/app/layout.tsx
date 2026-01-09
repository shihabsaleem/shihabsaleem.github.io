import type { Metadata } from "next";
import { Montserrat, Sarina } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import data from "@/data/asset";

const sarina = Sarina({
  variable: "--font-sarina",
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
  metadataBase: new URL("https://shihabsaleem.site"),

  title: `${info.name} - ${info.title}`,
  description: `${
    info.name
  } | UI/UX Designer, Developer & Branding Specialist in ${
    info.location
  }. ${info.desc.substring(0, 150)}...`,

  keywords: [
    "UI/UX Designer",
    "Product Designer",
    "Frontend Developer",
    "Shihab Saleem",
    "Kerala UI UX Designer",
    "React Developer",
    "Figma Designer",
    "Branding Specialist",
  ],

  authors: [{ name: info.name }],
  creator: info.name,

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/assets/apple-touch-icon.png",
  },

  openGraph: {
    title: `${info.name} - ${info.title}`,
    description: `${info.name} | UI/UX Designer, Developer & Branding Specialist in ${info.location}. Crafting seamless digital experiences.`,
    url: "https://shihabsaleem.site",
    siteName: `${info.name} Portfolio`,
    images: [
      {
        url: "/assets/og-shihab.jpg",
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
    title: `${info.name} - ${info.title}`,
    description: `UI/UX Designer, Developer & Branding Specialist in ${info.location}.`,
    creator: "@shihabrsaleem",
    images: ["/assets/og-shihab.jpg"],
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  try {
    const stored = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (stored === "dark" || (!stored && systemDark)) {
      document.documentElement.classList.add("dark");
    }
  } catch {}
})();
            `,
          }}
        />
      </head>
      <body className={`${sarina.variable} ${montserrat.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
