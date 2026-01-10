import type { Metadata } from "next";
import { Montserrat, Sarina } from "next/font/google";
import Script from "next/script";
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
    google: "CSdXRkDwL9W7wsQUQPz9VwJY4xuD2Ni4RSnXbdqz5F4",
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
        {/* Dark mode script */}
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

        {/*  Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-901BG54SSM"
          strategy="afterInteractive"
        />

        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-901BG54SSM', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body className={`${sarina.variable} ${montserrat.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
