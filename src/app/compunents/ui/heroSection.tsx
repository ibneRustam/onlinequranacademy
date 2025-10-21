"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Learn Quran Online",
    short: "Online Quran learning with expert teachers. Join now to start your journey.",
    long: "Online Quran learning with expert teachers. Join now to start your journey of Islamic knowledge. Structured lessons, personalized feedback, and expert guidance.",
    img: "/quran.jpeg",
    bg: "/quran2.jpeg",
  },
  {
    title: "Hifz Course", 
    short: "Memorize the Quran with proper guidance and structured lessons.",
    long: "Memorize the Quran with proper guidance, structured lessons, and flexible schedule. Individual attention from certified Huffaz.",
    img: "/quran3.jpeg",
    bg: "/quran5.jpeg",
  },
  {
    title: "Tajweed Course",
    short: "Learn to recite the Quran with correct pronunciation and rules.",
    long: "Learn to recite the Quran with correct pronunciation and rules of Tajweed. Ensure fluency, clarity, and confidence in recitation.",
    img: "/tajweed.jpeg", 
    bg: "/quran4.jpeg",
  },
  {
    title: "Tafseer Course",
    short: "Understand the deep meanings of Quranic verses with explanations.",
    long: "Understand the deep meanings of Quranic verses with detailed explanations. Word-by-word analysis and practical life lessons.",
    img: "/tafsir.jpeg",
    bg: "/masjid.jpeg",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full"
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <SlideContent course={course} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

type Course = {
  title: string;
  short: string;
  long: string;
  img: string;
  bg: string;
};

function SlideContent({ course }: { course: Course }) {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  return (
    <div className="relative h-full flex items-center">
      {/* Background */}
      <Image
        src={course.bg}
        alt={course.title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        
        {/* Text Content with Animations */}
        <motion.div 
          className="text-white space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {course.title}
          </motion.h1>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl leading-relaxed tracking-wide max-w-2xl font-light">
              {expanded ? course.long : course.short}
            </p>

            {/* Read More Button */}
            <motion.button
              onClick={() => setExpanded(!expanded)}
              className="text-white/90 hover:text-white underline hover:no-underline transition-all duration-300 text-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {expanded ? "Read Less" : "Read More"}
            </motion.button>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={() => router.push("/registration")}
              className="bg-green-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all shadow-2xl min-w-[200px]"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 15px 35px rgba(0,0,0,0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
            </motion.button>
            
            <motion.button
              onClick={() => router.push("/courses")}
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-600 transition-all min-w-[200px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Courses
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image with Animation */}
        <motion.div 
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div 
            className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20"
            whileHover={{ 
              scale: 1.05,
              borderColor: "rgba(255,255,255,0.4)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={course.img}
              alt={course.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}