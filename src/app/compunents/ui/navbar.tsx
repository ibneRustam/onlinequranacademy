"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/app/compunents/ui/sheet";
import { Book, Home, Info, Menu, Phone, User, LogIn, Users, CreditCard } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    { name: "About", href: "/about", icon: <Info className="w-4 h-4" /> },
    { name: "Courses", href: "/courses", icon: <Book className="w-4 h-4" /> },
    { name: "Teachers", href: "/teachers", icon: <Users className="w-4 h-4" /> },
    { name: "Fees", href: "/fee", icon: <CreditCard className="w-4 h-4" /> },
    { name: "Contact", href: "/contact", icon: <Phone className="w-4 h-4" /> },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" 
        : "bg-white shadow-sm"
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo - Improved with better spacing */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/logo.jpg"
                alt="TaallumulQuran Online Islamic Academy Logo"
                width={55}
                height={55}
                className="rounded-full transition-transform group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-green-700 leading-tight">
                TaallumulQuran
              </h1>
              <p className="text-xs text-gray-600 hidden sm:block">
                International Islamic Online Academy
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - Improved styling */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-2 font-medium transition-all duration-200 py-2 relative group ${
                      pathname === link.href 
                        ? "text-green-600 font-semibold" 
                        : "text-gray-700 hover:text-green-600"
                    }`}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                    {/* Animated underline */}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full ${
                      pathname === link.href ? "w-full" : ""
                    }`}></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop Buttons - Improved design */}
            {/* Desktop Buttons - Improved with dual language */}
<div className="flex items-center gap-3 ml-4">
  <Link
    href="/login"
    className="flex items-center gap-2 px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 border border-gray-300 hover:border-gray-400"
  >
    <LogIn className="w-4 h-4" />
    Login
  </Link>
  <Link
    href="/registration"
    className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
  >
    <User className="w-4 h-4" />
    <span className="flex flex-col items-center leading-none">
      <span className="text-sm font-bold">Register Now</span>
      
    </span>
  </Link>
</div>
          </div>

          {/* Mobile Menu - Improved design */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Menu className="w-6 h-6 text-green-600" />
              </SheetTrigger>
              
              <SheetContent side="right" className="w-[85vw] max-w-md bg-white p-0">
                <SheetHeader className="p-6 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/logo.jpg"
                      alt="Logo"
                      width={45}
                      height={45}
                      className="rounded-full"
                    />
                    <div>
                      <h2 className="font-bold text-green-700">TaallumulQuran</h2>
                      <p className="text-xs text-gray-600">Islamic Online Academy</p>
                    </div>
                  </div>
                </SheetHeader>

                <div className="flex flex-col h-full">
                  {/* Navigation Links */}
                  <ul className="flex-1 p-4 space-y-2">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                            pathname === link.href
                              ? "bg-green-50 text-green-700 font-semibold border border-green-100"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          <span className={`p-2 rounded-lg ${
                            pathname === link.href ? "bg-green-100" : "bg-gray-100"
                          }`}>
                            {link.icon}
                          </span>
                          <span className="font-medium">{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Mobile Buttons */}
                  {/* Mobile Buttons */}
<div className="p-4 border-t border-gray-100 space-y-3">
  <Link
    href="/login"
    className="flex items-center justify-center gap-2 w-full p-3 text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
  >
    <LogIn className="w-4 h-4" />
    Login
  </Link>
  <Link
    href="/registration"
    className="flex items-center justify-center gap-2 w-full p-3.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg"
  >
    <User className="w-4 h-4" />
    <span className="flex flex-col items-center leading-none">
      <span className="text-sm font-bold">Register Now</span>
      
    </span>
  </Link>
</div></div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}