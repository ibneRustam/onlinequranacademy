// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./compunents/ui/navbar";
import Footer from "./compunents/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
       <Navbar />
        <main>
          {children}
        </main>
<Footer />
      </body>
    </html>
  );
}
