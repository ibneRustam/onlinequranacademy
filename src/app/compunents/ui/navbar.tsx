"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/app/compunents/ui/sheet";
import { Book, Home, Info, Menu, Phone } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: <Home className="w-5 h-5 text-green-600" /> },
    { name: "About", href: "/about", icon: <Info className="w-5 h-5 text-green-600" /> },
    { name: "Courses", href: "/courses", icon: <Book className="w-5 h-5 text-green-600" /> },
    { name: "Contact", href: "/contact", icon: <Phone className="w-5 h-5 text-green-600" /> },
  ];

  return (
    <header className="shadow-md bg-white sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="TaallumulQuran Online Islamic Academy Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <h1 className="text-xl font-bold text-green-700">TaallumulQuran</h1>
            <p className="text-sm text-gray-600">International Islamic Online Academy</p>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`flex items-center gap-1 font-semibold hover:text-green-600 transition ${
                  pathname === link.href ? "text-green-700 font-semibold" : ""
                }`}
              >
                {link.icon} {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-2">
          <Link
            href="/registration"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Register Now
          </Link>
          <Link
            href="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger aria-label="Open navigation menu">
              <Menu className="w-8 h-8 text-green-600" />
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-white to-gray-100">
                  <ul className="w-full space-y-4 text-lg font-semibold">
                    {navLinks.map((link) => (
                      <li
                        key={link.href}
                        className={`flex items-center gap-3 px-4 py-3 border-b hover:text-green-600 hover:scale-105 transition-transform ${
                          pathname === link.href ? "text-green-700" : ""
                        }`}
                      >
                        {link.icon}
                        <Link href={link.href}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>

                  {/* Buttons */}
                  <div className="mt-6 flex gap-3">
                    <Link
                      href="/registration"
                      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                    >
                      Register
                    </Link>
                    <Link
                      href="/login"
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
