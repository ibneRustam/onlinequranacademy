"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const courses = [
  {
    title: "Learn Quran Online",
    short: "Online Quran learning with expert teachers. Join now to start your journey of Islamic knowledge.",
    long: "Online Quran learning with expert teachers. Join now to start your journey of Islamic knowledge. This program provides structured lessons, personalized feedback, and guidance to make learning easy and effective.",
    img: "/quran.jpeg",
    bg: "/quran2.jpeg",
  },
  {
    title: "Hifz Course",
    short: "Memorize the Quran with proper guidance and structured lessons.",
    long: "Memorize the Quran with proper guidance, structured lessons, and a schedule that suits you. Our teachers provide individual attention, helping you build consistency, accuracy, and strong memorization skills.",
    img: "/quran3.jpeg",
    bg: "/quran5.jpeg",
  },
  {
    title: "Tajweed Course",
    short: "Learn to recite the Quran with correct pronunciation and rules.",
    long: "Learn to recite the Quran with correct pronunciation and rules of Tajweed. This course ensures fluency, clarity, and confidence in recitation while avoiding common mistakes.",
    img: "/tajweed.jpeg",
    bg: "/quran4.jpeg",
  },
  {
    title: "Tafseer Course",
    short: "Dive deeper into the meanings of the Quran and understand the wisdom behind each verse.",
    long: "Dive deeper into the meanings of the Quran and understand the wisdom behind each verse. This detailed Tafseer program covers word-by-word explanation, background of revelation, and practical lessons for daily life. Strengthen your faith and apply the Quran's guidance with confidence.",
    img: "/tafsir.jpeg",
    bg: "/masjid.jpeg",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        className="w-full h-full"
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <CourseSlide course={course} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function CourseSlide({ course }: { course: any }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative w-full h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pt-24">
      {/* Background Image */}
      <Image
        src={course.bg}
        alt={course.title}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text Content */}
      <div className="relative z-10 text-white max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-snug drop-shadow-lg">
          {course.title}
        </h1>

        <p className="mt-4 text-base md:text-lg leading-relaxed drop-shadow">
          {expanded ? course.long : course.short}
        </p>

        {/* Buttons Wrapper */}
        <div className="mt-4 flex flex-col sm:flex-col gap-8 items-start ">
          {/* Read More / Less */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-4 py-3 text-sm underline text-gray-200 hover:text-white"
            aria-expanded={expanded}
          >
            {expanded ? "Read Less" : "Read More"}
          </button>

          {/* Start Now Button */}
          <button className="px-6  py-3 bg-white text-black rounded-xl shadow-md hover:bg-gray-200 transition font-medium">
            Start Now
          </button>
        </div>
      </div>

      {/* Course Image */}
      <div className="relative z-10 mt-10 md:mt-0 w-full md:w-[420px] h-[280px] md:h-[420px]">
        <Image
          src={course.img}
          alt={`${course.title} illustration`}
          fill
          className="rounded-xl shadow-lg object-cover"
        />
      </div>
    </div>
  );
}
