"use client";

import { useState } from "react";
import { Quote, User, UserCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface Feedback {
  id: number;
  gender: "male" | "female";
  name: string;
  role: string;
  country: string;
  feedback: string;
}

export default function FeedbackSection() {
  const feedbacks: Feedback[] = [
    {
      id: 1,
      gender: "male",
      name: "Ahmed Khan",
      role: "Hifz Student",
      country: "Canada",
      feedback:
        "Alhamdulillah, TaallumulQuran teachers are very supportive. Their teaching style made my Hifz journey much easier and enjoyable.",
    },
    {
      id: 2,
      gender: "female",
      name: "Sara Ali",
      role: "Tajweed Student",
      country: "Germany",
      feedback:
        "The Tajweed course helped me correct my recitation. I now feel confident while reciting Quran in front of others. I really appreciate the dedication of teachers who gave me one-on-one attention whenever I needed guidance in my Tajweed rules.",
    },
    {
      id: 3,
      gender: "male",
      name: "Bilal Ahmad",
      role: "Tafseer Student",
      country: "Dubai",
      feedback:
        "The Tafseer program opened my mind towards the deep meanings of the Quran. Highly recommend this academy. The way they connect classical Tafseer with modern-day challenges is something unique. It was an eye-opener for me and completely changed how I approach the Quran in daily life.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      {/* Title */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Students Say
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Real experiences shared by our students who have benefitted from our
          Quran and Islamic studies programs.
        </p>
      </div>

      {/* Feedback Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {feedbacks.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <FeedbackCard item={item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FeedbackCard({ item }: { item: Feedback }) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 120;

  const shortText =
    item.feedback.length > maxLength
      ? item.feedback.slice(0, maxLength) + "..."
      : item.feedback;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 relative flex flex-col justify-between min-h-[320px]">
      {/* Quote Icon */}
      <Quote className="w-10 h-10 text-blue-600 absolute -top-5 left-5 bg-white p-2 rounded-full shadow" />

      {/* Feedback Text */}
      <p className="text-gray-700 leading-relaxed mb-4 mt-4">
        &quot;{expanded ? item.feedback : shortText}&quot;
      </p>

      {/* Read More / Less */}
      {item.feedback.length > maxLength && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-600 text-sm font-medium hover:underline mb-4 self-start"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}

      {/* Student Info */}
      <div className="mt-auto flex items-center gap-4 pt-4 border-t">
        {item.gender === "male" ? (
          <User className="w-12 h-12 text-blue-500" />
        ) : (
          <UserCircle2 className="w-12 h-12 text-pink-500" />
        )}

        <div>
          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
          <p className="text-sm text-gray-500">{item.role}</p>
          <p className="text-xs text-gray-400">{item.country}</p>
        </div>
      </div>
    </div>
  );
}
