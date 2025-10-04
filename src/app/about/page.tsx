"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, Users, Globe, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const courses = [
    { title: "Noorani Qaida", slug: "noorani-qaida" },
    { title: "Nazira with Tajweed", slug: "nazira-tajweed" },
    { title: "Hifz with Tajweed", slug: "hifz-tajweed" },
    { title: "Complete Tajweed", slug: "complete-tajweed" },
    { title: "Qiraat & Lahjat", slug: "qiraat-lahjat" },
    { title: "Darse Nizami Books", slug: "darse-nizami" },
    { title: "Islamic Lectures & Guidance", slug: "islamic-lectures" },
    { title: "Fiqh & Islamic Rulings", slug: "fiqh-masaail" },
  ];

  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}


<section
  className="relative h-[350px] flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: "url('/quran3.jpeg')" }}
>
  <div className="absolute inset-0 bg-black/50"></div>
  <motion.div
    className="relative z-10 text-center text-white px-4"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
      About Us
    </h1>
    <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
      Comprehensive Quranic and Islamic learning programs for children and adults at all levels.
    </p>
  </motion.div>
</section>


      {/* Academy Story Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Quran Learning Academy is a unified institution dedicated to providing high-quality Islamic education for children and adults. Our experienced teachers guide every student to achieve mastery in Quran recitation, tajweed, and understanding of Islamic principles.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We offer flexible schedules, modern learning methods including online and offline options, and personalized guidance. Our goal is to empower every student with Quranic knowledge and practical understanding of Islamic teachings.
          </p>
        </div>
        <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-lg">
          <Image src="/logo.jpg" alt="Our Story" fill className="object-cover" />
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-lg">
          <Image src="/mission.jpeg" alt="Our Approach" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">
            Our Approach
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our approach combines structured Quranic studies with holistic Islamic education. Students are guided step-by-step to master recitation, tajweed, tafseer, and practical application of Islamic teachings in daily life.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We also provide academic support, preparation for lectures, and guidance in various Islamic topics including Fiqh, Aqeedah, and ethics. Classes are interactive, engaging, and adapted to each student's pace.
          </p>
        </div>
      </section>

   {/* Mission Section */}
      <section className="bg-indigo-50 py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8">
          Our Mission
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow p-6">
            <BookOpen className="mx-auto text-indigo-600 mb-4" size={40} />
            <ul className="text-gray-700 text-sm leading-relaxed list-disc list-inside">
              <li>Deliver accurate Quran recitation and Tajweed mastery for all students.</li>
              <li>Provide deep understanding of Tafseer and Islamic teachings.</li>
              <li>Encourage practical implementation of Islamic principles in daily life.</li>
              <li>Offer personalized guidance with interactive and engaging learning.</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <Globe className="mx-auto text-indigo-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
            <ul className="text-gray-700 text-sm leading-relaxed list-disc list-inside">
              <li>Empower students worldwide to confidently recite and understand the Quran.</li>
              <li>Foster strong Islamic values and knowledge among all learners.</li>
              <li>Create a community of lifelong Quran learners and practitioners.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-indigo-700 text-white py-20 px-6 text-center">
         <motion.div
    className="relative z-10 text-center text-white px-4"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join Our Academy Today!
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Don’t wait! Start your Quran learning journey with experienced teachers, flexible schedules, and personalized guidance.
        </p>
        <Link
          href="/registration"
          className="bg-white text-indigo-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Enroll Now
        </Link>
</motion.div>
      </section>
    
  

      {/* Courses Offered Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-700 text-center mb-12">
          Courses We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, idx) => (
            <Link
              key={idx}
              href={`/courses/${course.slug}`}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center block"
            >
              <h3 className="font-semibold text-lg mb-2 text-gray-900">{course.title}</h3>
              <p className="text-gray-600 text-sm">Explore comprehensive learning for {course.title}.</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-700 text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <Users className="mx-auto text-indigo-600 mb-4" size={40} />
            <h3 className="text-lg font-semibold mb-2">Expert Teachers</h3>
            <p className="text-gray-600 text-sm">Learn from highly experienced and qualified teachers.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <Clock className="mx-auto text-indigo-600 mb-4" size={40} />
            <h3 className="text-lg font-semibold mb-2">Flexible Schedule</h3>
            <p className="text-gray-600 text-sm">Convenient online and offline timings for all students.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <BookOpen className="mx-auto text-indigo-600 mb-4" size={40} />
            <h3 className="text-lg font-semibold mb-2">Comprehensive Courses</h3>
            <p className="text-gray-600 text-sm">Beginner to advanced levels for every student.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <Globe className="mx-auto text-indigo-600 mb-4" size={40} />
            <h3 className="text-lg font-semibold mb-2">Global Access</h3>
            <p className="text-gray-600 text-sm">Learn anywhere with our online-friendly programs.</p>
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-700 text-center mb-12">How to Join</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">1. Choose Course</h3>
            <p className="text-gray-600 text-sm">Select the course that best fits your learning goals.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">2. Book Free Trial</h3>
            <p className="text-gray-600 text-sm">Experience a trial class to ensure the course suits your needs.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h3 className="text-xl font-semibold mb-2">3. Confirm Admission</h3>
            <p className="text-gray-600 text-sm">Complete the registration to start your Quran learning journey.</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/registration"
            className="bg-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 transition"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </main>
  );
}
