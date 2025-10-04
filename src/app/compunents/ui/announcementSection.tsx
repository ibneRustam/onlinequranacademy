"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Quran Recitation Basics",
    date: "15 Oct 2025",
    shortDesc: "Learn tajweed and proper pronunciation for beginners.",
    fullDesc:
      "This course focuses on tajweed rules, correct pronunciation, and fluency. Suitable for children and adults who want to improve their Quran recitation skills.",
    image: "/quran1.jpg",
  },
  {
    id: 2,
    title: "Advanced Quranic Studies",
    date: "22 Oct 2025",
    shortDesc: "Deep dive into Quranic interpretation and recitation.",
    fullDesc:
      "This advanced course covers tafseer, tajweed, and practical recitation techniques. Ideal for students who want to enhance their understanding and recitation of the Quran.",
    image: "/quran3.jpeg",
  },
];

export default function UpcomingEvents() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-indigo-700">Upcoming Events</h2>
        <p className="text-gray-600 mt-2 text-lg">
          Stay updated with our Quran courses and events
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {events.map((event) => {
          const isExpanded = expandedId === event.id;
          return (
            <div
              key={event.id}
              className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition relative"
            >
              {/* Left Image */}
              <div
                className="md:w-1/2 relative bg-cover bg-center"
                style={{ backgroundImage: `url(${event.image})`, minHeight: "220px" }}
              >
                
                <div className="absolute top-14 right-8 transform translate-x-1/4 -translate-y-1/2 bg-indigo-600 text-white w-24 h-24 flex items-center justify-center rounded-full text-center text-sm font-bold shadow-xl">
                  {event.date}
                </div>
              </div>

              {/* Right Content */}
              <div className="md:w-1/2 p-6 flex flex-col justify-between relative">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {event.title}
                  </h4>
                  <p className="text-gray-700 mb-2">{event.shortDesc}</p>
                  {isExpanded && (
                    <p className="text-gray-600 mt-2">{event.fullDesc}</p>
                  )}
                </div>

                <button
                  onClick={() =>
                    setExpandedId(isExpanded ? null : event.id)
                  }
                  className="mt-4 self-start flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-800 transition"
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
          );
        })}
      </div>
    </section>
  );
}
