import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./compunents/ui/navbar";
import Footer from "./compunents/ui/footer";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.taallumulquran.com"),
  title: "TaallumulQuran Academy | Online Quran Learning",
  description:
    "TaallumulQuran Academy offers online Quran, Tajweed, Tafseer, and Arabic education with experienced male and female teachers for kids and adults.",
  keywords: [
    "Online Quran Academy",
    "Learn Quran Online",
    "Tajweed Classes",
    "Arabic Learning",
    "Quran Memorization",
    "Islamic Studies",
    "Quran with Tajweed",
    "Best Quran Teachers Online",
  ],
  openGraph: {
    title: "TaallumulQuran Academy",
    description:
      "Learn Quran and Arabic with certified Islamic scholars and Huffaz.",
    url: "https://www.taallumulquran.com",
    siteName: "TaallumulQuran Academy",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "TaallumulQuran Academy Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.taallumulquran.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
  <link rel="icon" href="/logo.jpg" />
</head>
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
