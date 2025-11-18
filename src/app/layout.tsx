import type { Metadata } from "next";
import { Montserrat, Stalinist_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const stalinistOne = Stalinist_One({
  variable: "--font-stalinistOne",
  subsets: ["latin"],
  weight: "400"
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shihab",
  description: "Shihab Rahman Saleem | UI / UX Designer, Developer & Branding Specialist ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    //  crxlauncher=""
    >
      <body
        className={`${stalinistOne.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar />
        <main> {children}</main>
      </body>
    </html>
  );
}
