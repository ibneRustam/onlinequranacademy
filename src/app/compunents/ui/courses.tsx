"use client";
import Image from "next/image"
import Link from "next/link";
import { motion } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "Noorani Qaida",
    desc: "Learn the basics of Quran reading with proper pronunciation.",
    image: "/qaida1.jpeg",
    slug: "noorani-qaida",
    alt: "Nazra Quran Course - Learn to Read Quran from Basics",
  },
  {
    id: 2,
    title: "Hifz with Tajweed", 
    desc: "Memorize the Holy Quran with perfect tajweed guidance.",
    image: "/hifz.jpeg",
    slug: "hifz-tajweed",
    alt: "Tajweed Course - Improve Quran Recitation with Rules",
  },
  {
    id: 3,
    title: "Complete Tajweed Course",
    desc: "Master the rules of tajweed for accurate Quran recitation.",
    image: "/tajweed.jpeg",
    slug: "complete-tajweed", 
    alt: "Hifz-ul-Quran Course - Memorize Quran Easily",
  },
];

export default function CoursesSection() {
  return (
    <section className="py-16 bg-gray-50" id="courses">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Popular Quran Courses
          </h2>
          <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Explore our most enrolled Quran courses to start your learning journey with us.
          </p>
        </motion.div>

        {/* Course Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={course.image}
                alt={course.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {course.desc}
                </p>
                <Link
                  href={`/courses/${course.slug}`}
                  className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-700 transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Link
            href="/courses"
            className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 transition-all duration-300 hover:shadow-lg"
          >
            View All Courses
          </Link>
        </motion.div>
      </div>
    </section>
  );
}