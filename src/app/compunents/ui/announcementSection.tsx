"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Quran Recitation Workshop",
    date: "15 Oct 2025",
    time: "06:00 PM PST",
    shortDesc: "Learn tajweed and proper pronunciation for beginners.",
    fullDesc: "This comprehensive workshop focuses on essential tajweed rules, correct pronunciation techniques, and developing fluency in Quran recitation. Suitable for children and adults who want to build a strong foundation in Quranic reading.",
    image: "/quran1.jpg",
  },
  {
    id: 2,
    title: "Advanced Quranic Studies Seminar",
    date: "22 Oct 2025", 
    time: "07:30 PM PST",
    shortDesc: "Deep dive into Quranic interpretation and recitation mastery.",
    fullDesc: "This advanced seminar covers in-depth tafseer methodologies, advanced tajweed applications, and practical recitation techniques. Ideal for intermediate to advanced students seeking to enhance their understanding and perfect their Quran recitation skills.",
    image: "/quran3.jpeg",
  },
];

export default function UpcomingEvents() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Upcoming Events & Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our upcoming Quran learning sessions and enhance your Islamic knowledge
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <EventCard 
              key={event.id} 
              event={event} 
              index={index}
              expandedId={expandedId}
              setExpandedId={setExpandedId}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          
        </motion.div>
      </div>
    </section>
  );
}

function EventCard({ event, index, expandedId, setExpandedId }: { 
  event: Event; 
  index: number;
  expandedId: number | null;
  setExpandedId: (id: number | null) => void;
}) {
  const isExpanded = expandedId === event.id;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-2/5 relative">
          <Image
            src={event.image}
            alt={event.title}
            width={300}
            height={200}
            className="w-full h-48 md:h-full object-cover"
          />
          {/* Date Badge */}
          <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
            <div className="flex items-center gap-1 text-sm font-semibold">
              <Calendar size={14} />
              {event.date}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-3/5 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {event.title}
            </h3>
            
            {/* Time */}
            <div className="flex items-center gap-2 text-gray-600 mb-3">
              <Clock size={16} />
              <span className="text-sm font-medium">{event.time}</span>
            </div>

            <p className="text-gray-700 mb-3 leading-relaxed">
              {event.shortDesc}
            </p>

            {isExpanded && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="text-gray-600 leading-relaxed"
              >
                {event.fullDesc}
              </motion.p>
            )}
          </div>

          {/* Read More Button */}
          <button
            onClick={() => setExpandedId(isExpanded ? null : event.id)}
            className="mt-4 flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors self-start"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp size={16} />
              </>
            ) : (
              <>
                Read More <ChevronDown size={16} />
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}