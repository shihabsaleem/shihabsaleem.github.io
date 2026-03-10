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
    default: `${info.name} | UI UX Designer & Product Designer in Kerala`,
    template: `%s | ${info.name} | UI UX Designer Kerala`,
  },
  description: `Shihab Saleem is a UI UX Designer and Product Designer in Kerala, specializing in SaaS dashboard design, mobile app UI, and user-centered digital experiences. View my portfolio for expert design solutions.`,
  applicationName: "Shihab Saleem Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "UI UX Designer in Kerala",
    "Product Designer Kerala",
    "Mobile App UI Design",
    "SaaS UI Designer",
    "Digital Product Designer",
    "Web Designer Kerala",
    "Shihab Saleem",
    "User Experience Specialist",
    "Freelance Designer Kerala",
    "Modern Web Design India",
    "Figma UI Design",
    "React Frontend Designer",
    "Next.js Developer Portfolio",
    "Design Systems Kerala",
    "Interface Design Specialist",
    "Branding and UI UX",
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
    title: `UI UX Designer in Kerala | ${info.name} | Portfolio`,
    description: `Expert UI UX Designer & Product Designer in Kerala. Designing premium digital experiences for SaaS, mobile apps, and enterprise solutions.`,
    url: "https://shihabsaleem.site",
    siteName: `${info.name} - UI UX Designer Kerala`,
    images: [
      {
        url: "/assets/og-shihab.jpg",
        width: 1200,
        height: 630,
        alt: `Shihab Saleem - UI UX Designer & Product Designer Portfolio`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: ` ${info.name} | UI UX & Branding Designer in Kerala `,
    description: `Premium UI UX Designer in Kerala crafting seamless digital products and enterprise SaaS designs.`,
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
    canonical: "https://shihabsaleem.site",
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
          strategy="lazyOnload"
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
                name: `${info.name} - UI UX Designer Portfolio`,
                url: "https://shihabsaleem.site",
                description: "Shihab Saleem, a UI UX Designer and Product Designer in Kerala, India.",
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
                jobTitle: "UI UX Designer & Product Designer",
                description: info.desc,
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
                  "UI UX Design",
                  "Product Design",
                  "SaaS Design",
                  "Mobile App UI Design",
                  "Frontend Development",
                  "React",
                  "Next.js",
                  "Figma",
                  "Branding",
                  "Design Systems",
                  "User Experience Design",
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

        {/* Hidden Semantic SEO Content */}
        <footer className="sr-only">
          <p>
            Shihab Saleem is a UI UX Designer and Product Designer in Kerala, India.
            Specializing in SaaS design, mobile app interface design, and product strategy.
            Providing premium design solutions for global clients using Figma, React, and Next.js.
          </p>
        </footer>

        <CookieBanner />
      </body>
    </html>
  );
}
