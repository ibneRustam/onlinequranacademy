// app/components/ui/AllNumberSection.tsx
"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  GraduationCap,
  Briefcase,
  FileText,
} from "lucide-react";

export default function AllNumberSection() {
  const stats = [
    { id: 1, label: "Total Teachers", value: 235, icon: Users },
    { id: 2, label: "Our Courses", value: 325, icon: BookOpen },
    { id: 3, label: "Students of Year", value: 968, icon: GraduationCap },
    { id: 4, label: "Office Staff", value: 867, icon: Briefcase },
    { id: 5, label: "Case Studies", value: 330, icon: FileText },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-teal-700 to-teal-900 py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12 text-center">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 mb-4">
                <Icon className="w-8 h-8 text-yellow-300" />
              </div>
              <h3 className="text-4xl font-extrabold mb-2">
                <CountUp end={stat.value} duration={3} />+
              </h3>
              <p className="text-lg font-medium">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
