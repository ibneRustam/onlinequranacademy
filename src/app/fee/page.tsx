"use client";
import React from "react";
import Link from "next/link";
import { coursesData } from "@/app/data/coursesData"; // 👈 apni file ka sahi path yahan lagayein

export default function FeePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
        Course Fee Structure
      </h1>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {coursesData.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition"
          >
            {/* Course Info */}
            <div>
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {course.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{course.desc}</p>

              {/* Fee Plans */}
              <div className="space-y-3">
                {course.plans?.map((plan, i) => (
                  <div
                    key={i}
                    className={`border rounded-xl p-4 text-center ${
                      plan.popular
                        ? "border-blue-600 bg-blue-50 shadow-md scale-105"
                        : "border-gray-300 bg-gray-100"
                    } transition`}
                  >
                    <h3 className="font-bold text-gray-800 text-lg">
                      {plan.days} Days / Week
                    </h3>
                    <p className="text-gray-700 mt-1">{plan.price}</p>
                    {plan.popular && (
                      <span className="inline-block mt-2 text-xs bg-blue-600 text-white px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    )}
                    <p className="text-gray-500 text-xs mt-2">
                      💰 {plan.discount}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Book Trial Button */}
            <div className="mt-6 text-center">
              <Link href="/register">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all">
                  Book Trial Class
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="text-center mt-12 text-gray-600 text-sm">
        💡 Per Class Rate: <span className="font-semibold">$5</span> — Custom
        schedules available on request.
      </div>
    </div>
  );
}
