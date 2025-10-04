"use client";

import Image from "next/image";
import Link from "next/link";
import { coursesData } from "@/app/data/coursesData";
import { motion } from "framer-motion";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-[350px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/quran5.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
         <motion.div
    className="relative z-10 text-center text-white px-4"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Explore Our Courses
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Comprehensive Quranic and Islamic learning programs designed for all levels.
          </p>
        </div>
        </motion.div>
      </section>

      {/* Courses Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">
          Our Featured Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {coursesData.map((course) => (
            <article
              key={course.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition group overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                <p className="text-gray-600 text-sm mt-2 flex-grow">{course.desc}</p>
                <Link
                  href={`/courses/${course.slug}`}
                  className="mt-4 inline-block bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition self-start"
                >
                  Learn More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
