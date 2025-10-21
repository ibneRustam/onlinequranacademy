"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import * as reactIntersectionObserver from "react-intersection-observer";
import {
  Users,
  BookOpen,
  GraduationCap,
  Briefcase,
  FileText,
  LucideIcon,
} from "lucide-react";

interface Stat {
  id: number;
  label: string;
  value: number;
  icon: LucideIcon;
}

interface StatItemProps {
  stat: Stat;
  index: number;
  Icon: LucideIcon;
}

export default function AllNumberSection() {
  const stats: Stat[] = [
    { id: 1, label: "Certified Teachers", value: 20, icon: Users },
    { id: 2, label: "Quran Courses", value: 12, icon: BookOpen },
    { id: 3, label: "Active Students", value: 500, icon: GraduationCap },
    { id: 4, label: "Countries Served", value: 25, icon: Briefcase },
    { id: 5, label: "Success Stories", value: 300, icon: FileText },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-teal-700 to-teal-900 py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12 text-center">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <StatItem key={stat.id} stat={stat} index={index} Icon={Icon} />
          );
        })}
      </div>
    </section>
  );
}

function StatItem({ stat, index, Icon }: StatItemProps) {
  const [ref, inView] = reactIntersectionObserver.useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col items-center"
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 mb-4">
        <Icon className="w-8 h-8 text-yellow-300" />
      </div>
      <h3 className="text-4xl font-extrabold mb-2">
        {inView ? <CountUp end={stat.value} duration={2.5} /> : 0}+
      </h3>
      <p className="text-lg font-medium">{stat.label}</p>
    </motion.div>
  );
}
