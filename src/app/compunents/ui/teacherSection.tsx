
"use client";

import Link from "next/link";
import { User, UserCircle2, } from "lucide-react";

export default function TeachersSection() {
  const teachers = [
    {
      id: 1,
      gender: "male",
      name: "Mufti Abdullah",
      role: "Quran & Tafseer Expert",
      tagline: "10+ years of teaching experience",
      tags: ["Quran", "Tafseer", "Fiqh"],
    },
    {
      id: 2,
      gender: "male",
      name: "Qari Saad",
      role: "Hifz Teacher",
      tagline: "Guiding Hifz students step by step",
      tags: ["Hifz", "Tajweed"],
    },
    {
      id: 3,
      gender: "female",
      name: "Teacher Fatima",
      role: "Tajweed Instructor",
      tagline: "Helping students master Tajweed",
      tags: ["Tajweed", "Recitation"],
    },
    {
      id: 4,
      gender: "male",
      name: "Qari Imran",
      role: "Islamic Studies Teacher",
      tagline: "Bringing clarity to Islamic knowledge",
      tags: ["Islamic Studies", "Hadith"],
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="teachers">
      {/* Section Title */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Quran & Islamic Studies Teachers
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Meet our dedicated and qualified teachers specializing in Quran,
          Tajweed, Tafseer, and Islamic Studies. Each one is committed to
          guiding students with excellence, patience, and care.
        </p>
      </div>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-12">
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-green-200 transition-transform duration-300 p-6 text-center group hover:-translate-y-2 hover:scale-105"
          >
            {/* Gender/Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg">
                {teacher.gender === "male" ? (
                  <User className="w-10 h-10" />
                ) : (
                  <UserCircle2 className="w-10 h-10" />
                )}
              </div>
            </div>

            {/* Teacher Info */}
            <h3 className="text-xl font-semibold text-gray-800">
              {teacher.name}
            </h3>
            <p className="text-sm text-green-600 font-medium">{teacher.role}</p>
            <p className="mt-3 text-gray-600 text-sm">{teacher.tagline}</p>

            {/* Tags */}
            <div className="flex justify-center flex-wrap gap-2 mt-4">
              {teacher.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs bg-green-50 text-green-700 rounded-full group-hover:bg-green-100 transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* See All Teachers Button */}
      <div className="text-center mt-14">
      <Link
  href="/teachers"
  className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all duration-300 hover:shadow-lg"
>
  
  View All Teachers
</Link>
      </div>
    </section>
  );
}
