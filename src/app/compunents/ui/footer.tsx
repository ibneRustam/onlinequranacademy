// components/ui/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import * as coursesData from "@/app/data/coursesData"; 
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200 mt-12">
      
      {/* Main Footer */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 px-6">
        
        {/* About Section */}
        <section aria-labelledby="footer-about">
          <Image
            src="/logo.jpg"
            alt="TaallumulQuran Online Academy Logo"
            width={80}
            height={80}
            className="rounded-full mb-3"
            priority
          />
          <h2 id="footer-about" className="sr-only">About TaallumulQuran Academy</h2>
          <p className="text-sm leading-6">
            <strong>TaallumulQuran Online Academy</strong> is an international Islamic institute offering
            <span className="font-semibold"> Quran Tajweed classes, Hifz program, Tafseer, Arabic language</span> 
            and Islamic courses for kids and adults with qualified teachers.
          </p>
        </section>

        {/* Useful Links */}
        <nav aria-label="Useful Links">
          <h2 className="font-bold text-lg mb-3 uppercase tracking-wide text-white">Useful Links</h2>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-400 transition">About Us</Link></li>
            <li><Link href="/courses" className="hover:text-blue-400 transition">Online Quran Courses</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400 transition">Contact Us</Link></li>
            <li><Link href="/faq" className="hover:text-blue-400 transition">FAQ</Link></li>
            <li><Link href="/terms" className="hover:text-blue-400 transition">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
          </ul>
        </nav>

        {/* Courses Section (Dynamic using slug) */}
        <nav aria-label="Quran and Arabic Courses">
          <h2 className="font-bold text-lg mb-3 uppercase tracking-wide text-white">Courses</h2>
          <ul className="space-y-2">
            {coursesData.coursesData.slice(0, 6).map((course: { slug: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
              <li key={course.slug}>
                <Link
                  href={`/courses/${course.slug}`}
                  className="hover:text-blue-400 transition"
                >
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact & Social */}
        <address className="not-italic" aria-label="Contact Information">
          <h2 className="font-bold text-lg mb-3 uppercase tracking-wide text-white">Contact</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://wa.me/923142969508"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-500 transition"
              >
                <Image src="/whatsapp.png" width={20} height={20} alt="WhatsApp Icon" />
                <span>+92 314 2969508</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:taallumulquranacademy@gmail.com"
                className="flex items-center gap-2 hover:text-red-500 transition"
              >
                <Image src="/email.png" width={20} height={20} alt="Email Icon" />
                <span>taallumulquranacademy@gmail.com</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61581040517143"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-500 transition"
              >
                <Image src="/facebook.png" width={20} height={20} alt="Facebook Icon" />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/taalumulquran/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-pink-500 transition"
              >
                <Image src="/instagram.png" width={20} height={20} alt="Instagram Icon" />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/Taallumulquran"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-slate-300 transition"
              >
                <Image src="/twitter.png" width={20} height={20} alt="Twitter / X Icon" />
                <span>Twitter / X</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/taallum-ul-quran-academy-1a1885386/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition"
              >
                <Image src="/linkedin.png" width={20} height={20} alt="LinkedIn Icon" />
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </address>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} TaallumulQuran Academy. All Rights Reserved.
      </div>
    </footer>
  );
}
