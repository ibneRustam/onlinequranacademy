"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, Users, Globe, Clock, Star, Smartphone, UserCheck } from "lucide-react";
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


{/* Hero Section */}
<section className="relative min-h-[500px] flex items-center justify-center">
  <Image
    src="/quran3.jpeg"
    alt="TaallumulQuran Academy - Online Islamic Education"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute inset-0 bg-black/50"></div>
  <motion.div
    className="relative z-10 text-center text-white px-4"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
      About TaallumulQuran Academy
    </h1>
    <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
      Premier Online Islamic Academy Connecting Global Students to Authentic Quranic Knowledge Through Certified Scholars and Structured Learning
    </p>
  </motion.div>
</section>


      {/* Academy Story Section */}
<section className="py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
  <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
        Our Academic <span className="text-green-600">Heritage</span>
      </h2>
      <div className="space-y-5 text-gray-700 leading-relaxed text-base md:text-lg">
        <p className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <strong className="text-green-700">TaallumulQuran Academy</strong> represents a legacy of Islamic scholarship 
          combined with modern pedagogical approaches. Our institution brings together 
          <strong> certified Huffaz and Islamic scholars</strong> from prestigious traditional 
          Islamic universities and contemporary educational institutions.
        </p>
        <p>
          Each faculty member possesses <strong>extensive teaching experience</strong> and 
          <strong> authentic certification</strong> in their respective fields of Quranic sciences, 
          Tajweed, Tafseer, and Islamic jurisprudence. Our teachers are not just educators 
          but mentors dedicated to nurturing your spiritual and academic growth.
        </p>
      </div>
    </motion.div>
    
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
    >
      <Image 
        src="/logo.jpg" 
        alt="TaallumulQuran Academy Certification and Accreditation - Certified Islamic Scholars and Huffaz"
        fill
        className="object-cover hover:scale-105 transition duration-700"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </motion.div>
  </div>
</section>

     {/* Academic Excellence Section */}
<section className="py-16 md:py-20 bg-gray-50 mx-auto">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-50px" }}
      className="text-center mb-12 md:mb-16"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        Academic Excellence & <span className="text-green-600">Methodology</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Blending Traditional Islamic Scholarship with Modern Teaching Methodologies
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
      >
        <Image
          src="/mission.jpeg" 
          alt="Our Qualified Islamic Teachers and Modern Classroom Setup"
          fill
          className="object-cover hover:scale-105 transition duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={85}
        />
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true, margin: "-50px" }}
        className="space-y-6 md:space-y-8"
      >
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
          Our Pedagogical <span className="text-green-600">Approach</span>
        </h3>
        
        <div className="space-y-5 md:space-y-6">
          {[
            {
              icon: <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-green-600" />,
              title: "Structured Curriculum",
              desc: "Comprehensive learning path from basic Qaida to advanced Tafseer studies"
            },
            {
              icon: <Users className="w-5 h-5 md:w-6 md:h-6 text-green-600" />, 
              title: "One-on-One Attention", 
              desc: "Personalized guidance with individual feedback and progress tracking"
            },
            {
              icon: <Globe className="w-5 h-5 md:w-6 md:h-6 text-green-600" />,
              title: "Global Standards",
              desc: "Internationally recognized teaching methodologies and certification"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-white transition-colors duration-200 border border-gray-100"
            >
              <div className="bg-green-100 p-2 rounded-lg mt-1 flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-base md:text-lg">{item.title}</h4>
                <p className="text-gray-700 text-sm md:text-base mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </div>
  </div>
</section>

      {/* Mission & Vision Section */}

<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Our Mission & Vision
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Dedicated to Preserving and Propagating Authentic Islamic Knowledge
      </p>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Mission Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-green-600 p-3 rounded-xl">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
        </div>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1 flex-shrink-0">✓</span>
            <span>Deliver <strong>authentic Quranic education</strong> through certified Islamic scholars</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1 flex-shrink-0">✓</span>
            <span>Provide <strong>comprehensive Tajweed mastery</strong> and precise Quran recitation</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1 flex-shrink-0">✓</span>
            <span>Enable <strong>deep understanding of Tafseer</strong> and Islamic principles</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1 flex-shrink-0">✓</span>
            <span>Foster <strong>practical implementation</strong> of Islamic teachings in daily life</span>
          </li>
        </ul>
      </motion.div>

      {/* Vision Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-blue-600 p-3 rounded-xl">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
        </div>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1 flex-shrink-0">✓</span>
            <span>Create a <strong>global community</strong> of confident Quran reciters and practitioners</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1 flex-shrink-0">✓</span>
            <span>Establish <strong>lifelong Islamic learning</strong> pathways for all age groups</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1 flex-shrink-0">✓</span>
            <span>Bridge <strong>traditional knowledge</strong> with <strong>modern educational excellence</strong></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1 flex-shrink-0">✓</span>
            <span>Produce <strong>qualified Huffaz and Islamic scholars</strong> for future generations</span>
          </li>
        </ul>
      </motion.div>
    </div>
  </div>
</section>
   
      {/* Final Call-to-Action Section */}
      
<section className="relative py-20 md:py-24 bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white overflow-hidden">
  {/* White Dots Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
    }}></div>
  </div>

  <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/**/}
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Ready to Transform Your <br className="hidden md:block" />
        <span className="text-white drop-shadow-lg">
          Quran Learning Journey?
        </span>
      </motion.h2>
      
      {/* */}
      <motion.p
        className="text-xl md:text-2xl lg:text-3xl mb-10 max-w-4xl mx-auto leading-relaxed opacity-95 font-light text-green-100"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Join <strong className="font-semibold text-white">TaallumulQuran Academy</strong> Today and Learn from 
        <span className="text-green-200 font-semibold"> Certified Islamic Scholars</span> with Ijazah
      </motion.p>

      {/* CTA Buttons - Secondary Button کو سبز بنایا */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {/* Primary Button - White */}
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href="/registration"
            className="inline-flex items-center gap-3 bg-white text-green-600 px-8 sm:px-12 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl"
          >
            <Users className="w-6 h-6" />
            Start Free Trial Class
          </Link>
        </motion.div>
        
        {/* Secondary Button - Light Green */}
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href="/courses"
            className="inline-flex items-center gap-3 border-2 border-green-300 text-green-300 px-8 sm:px-12 py-4 rounded-xl font-bold text-lg hover:bg-green-300 hover:text-green-800 transition-all duration-300"
          >
            <BookOpen className="w-6 h-6" />
            Explore All Courses
          </Link>
        </motion.div>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto text-sm md:text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {[
          "Certified Islamic Scholars",
          "Flexible 24/7 Schedule", 
          "Global Student Community"
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center gap-3 p-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
            <span className="opacity-90 font-medium text-white">{feature}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </div>
</section>

<section className="py-16 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-50px" }}
      className="text-center mb-12 md:mb-16"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        Comprehensive Course <span className="text-green-600">Offerings</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Structured Islamic Education Programs for All Levels - From Beginner to Advanced
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {courses.map((course, index) => (
        <motion.div
          key={course.slug}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ y: -8, scale: 1.03 }}
          className="h-full"
        >
          <Link
            href={`/courses/${course.slug}`}
            className="block bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 group h-full"
          >
            <div className="text-center">
              <div className="bg-green-500 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-green-600 transition-colors duration-300">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2 group-hover:text-green-600 transition-colors duration-300 line-clamp-2">
                {course.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                Comprehensive structured program with certified instructors
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      viewport={{ once: true }}
      className="text-center mt-10 sm:mt-12"
    >
      <Link
        href="/courses"
        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
      >
        <BookOpen className="w-5 h-5" />
        Explore All Courses
      </Link>
    </motion.div>
  </div>
</section>






{/* Why Choose Us Section */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Why Choose TaallumulQuran Academy
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Excellence in Islamic Education Backed by Qualified Scholarship and Modern Pedagogy
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
      {[
        {
          icon: <Users className="w-7 h-7" />,
          title: "Certified Teachers",
          description: "Alimiyyah graduates and certified Huffaz with Ijazah"
        },
        {
          icon: <UserCheck className="w-7 h-7" />,
          title: "Female Teachers", 
          description: "Separate female instructors for female students"
        },
        {
          icon: <Clock className="w-7 h-7" />,
          title: "Flexible 24/7",
          description: "Learn anytime from anywhere with personalized timing"
        },
        {
          icon: <Smartphone className="w-7 h-7" />,
          title: "Any Device",
          description: "Desktop, laptop, tablet or mobile access"
        },
        {
          icon: <BookOpen className="w-7 h-7" />,
          title: "Structured Curriculum",
          description: "Qaida to advanced Tafseer and Islamic sciences"
        },
        {
          icon: <Star className="w-7 h-7" />,
          title: "Free Trial", 
          description: "Experience teaching quality before enrollment"
        }
      ].map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -8, scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100 group h-full"
        >
          <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
            <div className="text-green-600 group-hover:text-green-700 transition-colors duration-300">
              {feature.icon}
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>

    {/* Additional Trust Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      viewport={{ once: true }}
      className="text-center mt-12"
    >
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
         <span className="text-green-600">100% Satisfaction Guarantee</span>
        </h3>
        <p className="text-gray-600 text-lg mb-6">
          Join thousands of satisfied students who have transformed their Quran learning journey with us
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-green-600">500+</div>
            <div className="text-sm text-gray-600">Students</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">25+</div>
            <div className="text-sm text-gray-600">Countries</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">98%</div>
            <div className="text-sm text-gray-600">Satisfaction</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">24/7</div>
            <div className="text-sm text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>








     {/* How to Join Section */}
<section className="py-16 md:py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-50px" }}
      className="text-center mb-12 md:mb-16"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        Begin Your <span className="text-green-600">Quranic Journey</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Simple 3-Step Process to Start Learning with Certified Islamic Scholars
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
      {[
        {
          step: "01",
          title: "Select Your Course",
          description: "Choose from our comprehensive range of Quranic and Islamic studies programs tailored to your learning goals and level",
          color: "from-blue-500 to-blue-600",
        
        },
        {
          step: "02", 
          title: "Book Free Trial Class",
          description: "Experience our teaching methodology with a complimentary session and meet your potential instructor",
          color: "from-green-500 to-green-600",
          
        },
        {
          step: "03",
          title: "Start Learning Journey", 
          description: "Begin structured lessons with certified teachers and join our global community of Quran learners",
          color: "from-purple-500 to-purple-600",
          
        }
      ].map((step, index) => (
        <motion.div
          key={step.step}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Step Number with Icon */}
          <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${step.color} text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10 border-4 border-white`}>
            {step.step}
          </div>
          
          {/* Content Card */}
          <motion.div 
            className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 pt-12 text-center h-full"
            whileHover={{ y: -5 }}
          >
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              {step.description}
            </p>
          </motion.div>

          {/* Connector Line */}
          {index < 2 && (
            <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0"></div>
          )}
        </motion.div>
      ))}
    </div>

    {/* Enhanced CTA Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6 }}
      viewport={{ once: true }}
      className="text-center mt-10 md:mt-12"
    >
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-10 shadow-xl max-w-2xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          🎉 Ready to Get Started?
        </h3>
        <p className="text-green-100 text-lg mb-6">
          Join <strong>500+ students</strong> already learning with us
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/registration"
              className="inline-flex items-center gap-3 bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl"
            >
              <Users className="w-5 h-5" />
              Start Free Trial Class
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              💬 Get Guidance
            </Link>
          </motion.div>
        </div>
        
        <p className="text-green-200 mt-4 text-sm">
          ⚡ No commitment required • ⭐ 4.9/5 Student Rating
        </p>
      </div>
    </motion.div>
  </div>
</section>


    </main>
  );
}
