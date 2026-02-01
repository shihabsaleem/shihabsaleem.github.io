import type { Metadata } from "next";
import { Montserrat, Sarina } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/navbar";
import CookieBanner from "@/components/cookie-banner";
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
  title: {
    default: `${info.name} | Product Designer & UI Specialist`,
    template: `%s | Product Designer & UI Specialist`,
  },
  description: `Shihab Saleem is a Product Designer & UI Specialist based in Kerala, India. Expert in SaaS product design, mobile app UI, and user-centered digital experiences using React, Next.js, and Figma.`,
  applicationName: "Shihab Saleem",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Product Designer",
    "UI Designer",
    "UX Specialist",
    "Freelance Product Designer",
    "SaaS Product Design",
    "Mobile App UI Design",
    "Frontend Developer",
    "Shihab Saleem",
    "Kerala UI UX Designer",
    "React Developer",
    "Next.js Developer",
    "Figma Designer",
    "Branding Specialist",
    "Web Designer Kerala",
    "User Experience Design",
    "Interface Design",
    "Design Systems",
    "Responsive Design",
  ],
  authors: [{ name: info.name, url: "https://shihabsaleem.site" }],
  creator: info.name,
  publisher: info.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/assets/apple-touch-icon.png",
  },
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Kerala",
    "ICBM": "10.690639, 76.652694",
  },
  openGraph: {
    title: `${info.name} - UI/UX Designer & Developer`,
    description: `UI/UX Designer, Developer & Branding Specialist based in Kerala, India. Creating intuitive digital experiences through user-centered design and modern web technologies.`,
    url: "https://shihabsaleem.site",
    siteName: `${info.name} - Portfolio`,
    images: [
      {
        url: "/assets/og-shihab.jpg",
        width: 1200,
        height: 630,
        alt: `${info.name} - UI/UX Designer & Developer Portfolio`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${info.name} - UI/UX Designer & Developer`,
    description: `UI/UX Designer, Developer & Branding Specialist in Kerala, India. Crafting seamless digital experiences.`,
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
    google: "CSdXRkDwL9W7wsQUQPz9VwJY4xuD2Ni4RSnXbdqz5F4",
  },
  alternates: {
    canonical: "./",
  },
  category: "Design & Development",
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

        <Script
          id="gtag-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.getItem('cookie-consent') === 'accepted') {
                const script = document.createElement('script');
                script.src = "https://www.googletagmanager.com/gtag/js?id=G-901BG54SSM";
                script.async = true;
                document.head.appendChild(script);

                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-901BG54SSM', {
                  page_path: window.location.pathname,
                });
              }
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: `${info.name} - Portfolio`,
                url: "https://shihabsaleem.site",
                author: {
                  "@type": "Person",
                  name: info.name,
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: info.name,
                url: "https://shihabsaleem.site",
                image: "https://shihabsaleem.site/assets/og-shihab.jpg",
                jobTitle: "UI/UX Designer & Developer",
                worksFor: {
                  "@type": "Organization",
                  name: "Jadbery Digital",
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Kerala",
                  addressCountry: "India",
                },
                sameAs: [
                  `https://${info.linkedin}`,
                  `https://${info.github}`,
                  `https://${info.behance}`,
                  `https://${info.insta}`,
                  `https://twitter.com/${info.twitter.replace("@", "")}`,
                ],
                knowsAbout: [
                  "UI/UX Design",
                  "Product Design",
                  "Frontend Development",
                  "React",
                  "Next.js",
                  "Figma",
                  "Branding",
                  "Web Design",
                  "User Experience Design",
                  "Interface Design",
                  "Design Systems",
                  "Responsive Design",
                  "Graphic Design"
                ],
              }
            ]),
          }}
        />
      </head>

      <body
        className={`${sarina.variable} ${montserrat.variable} antialiased selection:bg-red-600 selection:text-white`}
      >
        <Navbar />
        <main>{children}</main>
        <CookieBanner />
      </body>
    </html>
  );
}
