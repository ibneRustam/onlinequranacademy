"use client";

import Image from "next/image";
import Link from "next/link";
import { coursesData } from "@/app/data/coursesData";
import { motion } from "framer-motion";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-[350px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/quran5.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
         <motion.div
    className="relative z-10 text-center text-white px-4"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
        <div className="relative z-10 text-center text-white px-4">
         <h1 className="text-4xl md:text-5xl font-bold leading-tight">
  Online Quran Courses
</h1>
<p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
  Learn Quran with certified teachers through comprehensive Islamic learning programs for all levels.
</p>
        </div>
        </motion.div>
      </section>

      {/* Courses Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">
          Our Featured Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {coursesData.map((course) => (
            <article
              key={course.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition group overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                <p className="text-gray-600 text-sm mt-2 flex-grow">{course.desc}</p>
                <Link
                  href={`/courses/${course.slug}`}
                  className="mt-4 inline-block bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition self-start"
                >
                  Learn More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}




// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { coursesData } from "@/app/data/coursesData";
// import { motion } from "framer-motion";
// import { BookOpen, Users, Clock, Star } from "lucide-react";

// export default function CoursesPage() {
//   return (
//     <main className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="relative h-[400px] flex items-center justify-center">
//         <Image
//           src="/quran5.jpeg"
//           alt="Quran Courses - TaallumulQuran Academy"
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-black/60"></div>
//         <motion.div
//           className="relative z-10 text-center text-white px-4"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
//             Quran & Islamic Courses
//           </h1>
//           <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
//             Comprehensive Learning Programs Taught by Certified Islamic Scholars and Huffaz
//           </p>
//         </motion.div>
//       </section>

//       {/* Courses Introduction */}
//       <section className="py-16 bg-white">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//               Structured Islamic Education
//             </h2>
//             <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//               Our carefully designed curriculum combines traditional Islamic scholarship with modern 
//               teaching methodologies. Each course is taught by certified instructors with Ijazah 
//               in Quranic recitation and years of teaching experience.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Courses Grid Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Featured Quranic Programs
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               From Basic Qaida to Advanced Islamic Studies - Your Complete Learning Pathway
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {coursesData.map((course, index) => (
//               <CourseCard key={course.id} course={course} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Ready to Start Your Quran Journey?
//             </h2>
//             <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
//               Join thousands of students worldwide learning from certified Islamic scholars
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 href="/registration"
//                 className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
//               >
//                 <Users className="w-5 h-5" />
//                 Start Free Trial
//               </Link>
//               <Link
//                 href="/contact"
//                 className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 inline-flex items-center gap-2"
//               >
//                 <BookOpen className="w-5 h-5" />
//                 Get Course Advice
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   );
// }

// function CourseCard({ course, index }: { course: any; index: number }) {
//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       viewport={{ once: true }}
//       whileHover={{ y: -5 }}
//       className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col"
//     >
//       {/* Image */}
//       <div className="relative h-48 w-full overflow-hidden">
//         <Image
//           src={course.image}
//           alt={course.title}
//           fill
//           className="object-cover group-hover:scale-110 transition duration-500"
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//         />
//         <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-300" />
        
//         {/* Course Badge */}
//         <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
//           Featured
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-6 flex flex-col flex-grow">
//         <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
//           {course.title}
//         </h3>
        
//         <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
//           {course.desc}
//         </p>

//         {/* Course Features */}
//         <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
//           <div className="flex items-center gap-1">
//             <Clock className="w-4 h-4" />
//             <span>Flexible</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <Users className="w-4 h-4" />
//             <span>1-on-1</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <Star className="w-4 h-4 text-yellow-500" />
//             <span>Certified</span>
//           </div>
//         </div>

//         <Link
//           href={`/courses/${course.slug}`}
//           className="w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 group/link inline-flex items-center justify-center gap-2"
//         >
//           <BookOpen className="w-4 h-4" />
//           View Course Details
//           <span className="group-hover/link:translate-x-1 transition-transform">→</span>
//         </Link>
//       </div>
//     </motion.article>
//   );
// }
