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
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center w-full">
        
        {/* Text Content with Animations */}
        <motion.div 
          className="text-white space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {course.title}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {expanded ? course.long : course.short}
          </motion.p>

          {/* Buttons with Animations */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={() => setExpanded(!expanded)}
              className="text-white underline hover:no-underline transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {expanded ? "Read Less" : "Read More"}
            </motion.button>
          </motion.div>

          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={() => router.push("/registration")}
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image with Animation */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div 
            className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={course.img}
              alt={course.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}