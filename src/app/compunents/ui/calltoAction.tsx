"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="relative w-full py-16 md:py-24 flex items-center">
      {/* Background Image */}
      <img
        src="/quran11.jpg"
        alt="Open Quran Background - Online Islamic Learning"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text + Button */}
       <motion.div
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
      <div
        className="
          relative z-10 
          text-left sm:text-left text-white 
          px-8 md:px-12 
          flex flex-col justify-center items-start sm:items-start
          max-w-2xl
        "
      >
       
        <h2 className="text-2xl md:text-4xl lg:text-5xl text-left font-bold leading-snug mb-6">
          Learn from Experts, Grow with Knowledge
        </h2>
        <Link
          href="/registration"
          className="inline-block px-6 py-3 bg-white text-black rounded-lg font-semibold shadow hover:bg-gray-200 transition"
        >
          Enroll Now
        </Link>
      </div>
        </motion.div>
      
    </section>
  );
}
