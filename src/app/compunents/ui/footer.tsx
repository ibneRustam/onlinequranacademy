"use client";

import Link from "next/link";
import Image from "next/image";
import * as coursesData from "@/app/data/coursesData";
import { Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-12 px-6">
        
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="TaallumulQuran Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h3 className="text-white font-bold text-lg">TaallumulQuran</h3>
              <p className="text-green-500 text-sm">Online Islamic Academy</p>
            </div>
          </div>
          <p className="text-sm">
            Learn Quran with qualified teachers from the comfort of your home.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {['Home', 'About', 'Courses', 'Fee', 'Contact'].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase()}`} className="hover:text-green-500 transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h4 className="text-white font-semibold mb-4">Courses</h4>
          <ul className="space-y-2 text-sm">
            {coursesData.coursesData.slice(0, 5).map((course) => (
              <li key={course.slug}>
                <Link href={`/courses/${course.slug}`} className="hover:text-green-500 transition">
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <div className="space-y-3 text-sm">
            <a href="https://wa.me/923142969508" className="flex items-center gap-2 hover:text-green-500 transition">
              <Phone size={16} />
              +92 314 2969508
            </a>
            <a href="mailto:taallumulquranacademy@gmail.com" className="flex items-center gap-2 hover:text-red-600 transition">
              <Mail size={16} />
              taallumulquranacademy@gmail.com
            </a>

            {/* Social Media */}
            <div className="flex gap-3 pt-2">
              <Link href="https://www.facebook.com/profile.php?id=61581040517143" target="_blank">
                <Facebook size={18} className="hover:text-blue-600 transition cursor-pointer" />
              </Link>
              <Link href="https://x.com/Taallumulquran" target="_blank">
                <Twitter size={18} className="hover:text-sky-400 transition cursor-pointer" />
              </Link>
              <Link href="https://www.instagram.com/taalumulquran/" target="_blank">
                <Instagram size={18} className="hover:text-pink-500 transition cursor-pointer" />
              </Link>
              <Link href="https://linkedin.com/in/taallum-ul-quran-academy-1a1885386" target="_blank">
                <Linkedin size={18} className="hover:text-blue-400 transition cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm">
          © {new Date().getFullYear()} TaallumulQuran Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}





// // components/ui/Footer.tsx
// import Link from "next/link";
// import Image from "next/image";
// import * as coursesData from "@/app/data/coursesData"; 

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200 mt-12">
      
//       {/* Main Footer */}
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 px-6">
        
//         {/* About Section */}
//         <section aria-labelledby="footer-about">
//           <Image
//             src="/logo.jpg"
//             alt="TaallumulQuran Online Academy Logo"
//             width={80}
//             height={80}
//             className="rounded-full mb-3"
//             priority
//           />
//           <h2 id="footer-about" className="sr-only">About TaallumulQuran Academy</h2>
//           <p className="text-sm leading-6">
//             <strong>TaallumulQuran Online Academy</strong> is an international Islamic institute offering
//             <span className="font-semibold"> Quran Tajweed classes, Hifz program, Tafseer, Arabic language</span> 
//             and Islamic courses for kids and adults with qualified teachers.
//           </p>
//         </section>

//         {/* Useful Links */}
//         <nav aria-label="Useful Links">
//           <h2 className="font-bold text-lg mb-3 uppercase tracking-wide text-white">Useful Links</h2>
//           <ul className="space-y-2">
//             <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
//             <li><Link href="/about" className="hover:text-blue-400 transition">About Us</Link></li>
//             <li><Link href="/courses" className="hover:text-blue-400 transition">Online Quran Courses</Link></li>
//             <li><Link href="/teachers" className="hover:text-blue-400 transition">Our Teachers</Link></li>
//             <li><Link href="/fees" className="hover:text-blue-400 transition">Fee Structure</Link></li>
//             <li><Link href="/contact" className="hover:text-blue-400 transition">Contact Us</Link></li>
//             <li><Link href="/faq" className="hover:text-blue-400 transition">FAQ</Link></li>
//             <li><Link href="/terms" className="hover:text-blue-400 transition">Terms & Conditions</Link></li>
//             <li><Link href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
//           </ul>
//         </nav>

//         {/* Courses Section (Dynamic using slug) */}
//         <nav aria-label="Quran and Arabic Courses">
//           <h2 className="font-bold text-lg mb-3 uppercase tracking-wide text-white">Courses</h2>
//           <ul className="space-y-2">
//             {coursesData.coursesData.slice(0, 6).map((course) => (
//               <li key={course.slug}>
//                 <Link
//                   href={`/courses/${course.slug}`}
//                   className="hover:text-blue-400 transition"
//                 >
//                   {course.title}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Contact & Social */}
//         <address className="not-italic" aria-label="Contact Information">
//           <h2 className="font-bold text-lg mb-3 uppercase tracking-wide text-white">Contact</h2>
//           <ul className="space-y-3 text-sm">
//             <li>
//               <a
//                 href="https://wa.me/923142969508"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 hover:text-green-500 transition"
//               >
//                 <Image src="/whatsapp.png" width={20} height={20} alt="WhatsApp Icon" />
//                 <span>+92 314 2969508</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="mailto:taallumulquranacademy@gmail.com"
//                 className="flex items-center gap-2 hover:text-red-500 transition"
//               >
//                 <Image src="/email.png" width={20} height={20} alt="Email Icon" />
//                 <span>taallumulquranacademy@gmail.com</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.facebook.com/profile.php?id=61581040517143"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 hover:text-blue-500 transition"
//               >
//                 <Image src="/facebook.png" width={20} height={20} alt="Facebook Icon" />
//                 <span>Facebook</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.instagram.com/taalumulquran/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 hover:text-pink-500 transition"
//               >
//                 <Image src="/instagram.png" width={20} height={20} alt="Instagram Icon" />
//                 <span>Instagram</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://x.com/Taallumulquran"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 hover:text-slate-300 transition"
//               >
//                 <Image src="/twitter.png" width={20} height={20} alt="Twitter / X Icon" />
//                 <span>Twitter / X</span>
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://www.linkedin.com/in/taallum-ul-quran-academy-1a1885386/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 hover:text-blue-400 transition"
//               >
//                 <Image src="/linkedin.png" width={20} height={20} alt="LinkedIn Icon" />
//                 <span>LinkedIn</span>
//               </a>
//             </li>
//           </ul>
//         </address>
//       </div>

//       {/* Bottom Bar */}
//       <div className="bg-gray-800 text-center py-4 text-sm text-gray-400">
//         © {new Date().getFullYear()} TaallumulQuran Academy. All Rights Reserved.
//       </div>
//     </footer>
//   );
// }




// // // components/ui/Footer.tsx
// // import Link from "next/link";
// // import Image from "next/image";
// // import * as coursesData from "@/app/data/coursesData"; 
// // import { 
// //   MapPin, 
// //   Phone, 
// //   Mail, 
// //   MessageCircle, 
// //   Facebook, 
// //   Instagram, 
// //   Twitter, 
// //   Linkedin,
// //   BookOpen,
// //   Users,
// //   CreditCard,
// //   Home,
// //   Info,
// //   Book,
// //   Contact
// // } from "lucide-react";

// // export default function Footer() {
// //   return (
// //     <footer className="bg-gray-900 text-gray-300 mt-20 border-t border-gray-700">
      
// //       {/* Main Footer */}
// //       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 py-12 px-4 sm:px-6 lg:px-8">
        
// //         {/* Brand & About Section */}
// //         <section aria-labelledby="footer-about" className="space-y-4">
// //           <div className="flex items-center gap-3">
// //             <Image
// //               src="/logo.jpg"
// //               alt="TaallumulQuran Online Academy Logo"
// //               width={70}
// //               height={70}
// //               className="rounded-full border-2 border-green-600"
// //               priority
// //             />
// //             <div>
// //               <h2 className="text-2xl font-bold text-white">TaallumulQuran</h2>
// //               <p className="text-green-500 text-sm">Online Islamic Academy</p>
// //             </div>
// //           </div>
          
// //           <h2 id="footer-about" className="sr-only">About TaallumulQuran Academy</h2>
// //           <p className="text-sm leading-6">
// //             An international Islamic institute offering Quran Tajweed, Hifz program, 
// //             Tafseer, Arabic language and Islamic courses for kids and adults with 
// //             qualified teachers.
// //           </p>

// //           {/* Location */}
// //           <div className="flex items-center gap-2 text-sm text-gray-400">
// //             <MapPin className="w-4 h-4" />
// //             <span>International Online Academy - Available Worldwide</span>
// //           </div>
// //         </section>

// //         {/* Quick Links */}
// //         <nav aria-label="Quick Links" className="space-y-4">
// //           <h2 className="font-bold text-lg text-white">Quick Links</h2>
// //           <ul className="space-y-3">
// //             <li>
// //               <Link href="/" className="hover:text-green-500 transition-colors flex items-center gap-2">
// //                 <Home className="w-4 h-4" />
// //                 Home
// //               </Link>
// //             </li>
// //             <li>
// //               <Link href="/about" className="hover:text-green-500 transition-colors flex items-center gap-2">
// //                 <Info className="w-4 h-4" />
// //                 About Us
// //               </Link>
// //             </li>
// //             <li>
// //               <Link href="/courses" className="hover:text-green-500 transition-colors flex items-center gap-2">
// //                 <Book className="w-4 h-4" />
// //                 Courses
// //               </Link>
// //             </li>
// //             <li>
// //               <Link href="/teachers" className="hover:text-green-500 transition-colors flex items-center gap-2">
// //                 <Users className="w-4 h-4" />
// //                 Teachers
// //               </Link>
// //             </li>
// //             <li>
// //               <Link href="/fees" className="hover:text-green-500 transition-colors flex items-center gap-2">
// //                 <CreditCard className="w-4 h-4" />
// //                 Fees
// //               </Link>
// //             </li>
// //             <li>
// //               <Link href="/contact" className="hover:text-green-500 transition-colors flex items-center gap-2">
// //                 <Contact className="w-4 h-4" />
// //                 Contact
// //               </Link>
// //             </li>
// //           </ul>
// //         </nav>

// //         {/* Popular Courses */}
// //         <nav aria-label="Popular Courses" className="space-y-4">
// //           <h2 className="font-bold text-lg text-white flex items-center gap-2">
// //             <BookOpen className="w-5 h-5" />
// //             Popular Courses
// //           </h2>
// //           <ul className="space-y-2">
// //             {coursesData.coursesData.slice(0, 6).map((course) => (
// //               <li key={course.slug}>
// //                 <Link
// //                   href={`/courses/${course.slug}`}
// //                   className="hover:text-green-500 transition-colors text-sm flex items-center gap-2 py-1"
// //                 >
// //                   <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
// //                   {course.title}
// //                 </Link>
// //               </li>
// //             ))}
// //           </ul>
// //         </nav>

// //         {/* Contact & Social */}
// //         <address className="not-italic space-y-4" aria-label="Contact Information">
// //           <h2 className="font-bold text-lg text-white flex items-center gap-2">
// //             <MessageCircle className="w-5 h-5" />
// //             Contact Us
// //           </h2>
          
// //           <ul className="space-y-4">
// //             {/* WhatsApp */}
// //             <li>
// //               <a
// //                 href="https://wa.me/923142969508"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="flex items-center gap-3 hover:text-green-500 transition-colors group"
// //               >
// //                 <div className="bg-green-600 p-2 rounded-lg group-hover:bg-green-700 transition-colors">
// //                   <Phone className="w-4 h-4 text-white" />
// //                 </div>
// //                 <div>
// //                   <p className="font-medium">WhatsApp</p>
// //                   <p className="text-sm text-gray-400">+92 314 2969508</p>
// //                 </div>
// //               </a>
// //             </li>

// //             {/* Email */}
// //             <li>
// //               <a
// //                 href="mailto:taallumulquranacademy@gmail.com"
// //                 className="flex items-center gap-3 hover:text-green-500 transition-colors group"
// //               >
// //                 <div className="bg-gray-600 p-2 rounded-lg group-hover:bg-gray-700 transition-colors">
// //                   <Mail className="w-4 h-4 text-white" />
// //                 </div>
// //                 <div>
// //                   <p className="font-medium">Email</p>
// //                   <p className="text-sm text-gray-400">taallumulquranacademy@gmail.com</p>
// //                 </div>
// //               </a>
// //             </li>

// //             {/* Social Media */}
// //             <li>
// //               <div className="flex gap-3 pt-2">
// //                 <a
// //                   href="https://www.facebook.com/profile.php?id=61581040517143"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
// //                   aria-label="Facebook"
// //                 >
// //                   <Facebook className="w-5 h-5" />
// //                 </a>
// //                 <a
// //                   href="https://www.instagram.com/taalumulquran/"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
// //                   aria-label="Instagram"
// //                 >
// //                   <Instagram className="w-5 h-5" />
// //                 </a>
// //                 <a
// //                   href="https://x.com/Taallumulquran"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
// //                   aria-label="Twitter"
// //                 >
// //                   <Twitter className="w-5 h-5" />
// //                 </a>
// //                 <a
// //                   href="https://www.linkedin.com/in/taallum-ul-quran-academy-1a1885386/"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
// //                   aria-label="LinkedIn"
// //                 >
// //                   <Linkedin className="w-5 h-5" />
// //                 </a>
// //               </div>
// //             </li>
// //           </ul>
// //         </address>
// //       </div>

// //       {/* Bottom Bar */}
// //       <div className="border-t border-gray-700 bg-gray-800">
// //         <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
// //           <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
// //             <div>
// //               © {new Date().getFullYear()} TaallumulQuran Academy. All Rights Reserved.
// //             </div>
// //             <div className="flex gap-6">
// //               <Link href="/privacy" className="hover:text-green-500 transition-colors">
// //                 Privacy Policy
// //               </Link>
// //               <Link href="/terms" className="hover:text-green-500 transition-colors">
// //                 Terms & Conditions
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }