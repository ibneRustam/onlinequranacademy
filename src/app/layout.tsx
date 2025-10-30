import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./compunents/ui/navbar";
import Footer from "./compunents/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.taallumulquranacademy.com"),
  title: {
    default: "TaallumulQuran Academy | Online Quran Learning",
    template: "%s | TaallumulQuran Academy"
  },
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
  authors: [{ name: "TaallumulQuran Academy" }],
  creator: "TaallumulQuran Academy",
  publisher: "TaallumulQuran Academy",
  robots: "index, follow",
  openGraph: {
    title: "TaallumulQuran Academy",
    description:
      "Learn Quran and Arabic with certified Islamic scholars and Huffaz.",
    url: "https://www.taallumulquranacademy.com",
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
  twitter: {
    card: "summary_large_image",
    title: "TaallumulQuran Academy",
    description: "Learn Quran and Arabic with certified Islamic scholars and Huffaz.",
    images: ["/logo.jpg"],
  },
  alternates: {
    canonical: "https://www.taallumulquranacademy.com",
  },
  icons: {
    icon: [
      {
        url: "/logo.jpg",
        type: "image/jpeg",
      },
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      }
    ],
    apple: [
      {
        url: "/logo.jpg",
        type: "image/jpeg",
      }
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16a34a", // Green color for theme
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}