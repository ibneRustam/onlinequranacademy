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

<<<<<<< HEAD
      {/* Footer Note */}
      <div className="text-center mt-12 text-gray-600 text-sm">
        💡 Per Class Rate: <span className="font-semibold">$5</span> — Custom
        schedules available on request.
      </div>
    </div>
  );
}
=======
        {/* Free Trial CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Not Sure Which to Choose?</h3>
            <p className="text-gray-600 mb-6">Start with 2 free trial classes to experience our teaching quality</p>
            <Link
            href="/registration"
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105">
              Book Free Trial Class
            </button>
            </Link>
      
          </div>
      
        </motion.div>

      </section>
    </div>
  );
} 












// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Check, Clock, Users, BookOpen, Star, Zap, Calendar } from "lucide-react";

// export default function FeesPage() {
//   const [selectedCurrency, setSelectedCurrency] = useState("USD");

//   const currencies = {
//     USD: { symbol: "$", name: "US Dollar" },
//     PKR: { symbol: "₨", name: "Pakistani Rupee" },
//     SAR: { symbol: "﷼", name: "Saudi Riyal" },
//     AED: { symbol: "د.إ", name: "UAE Dirham" },
//     GBP: { symbol: "£", name: "British Pound" },
//     EUR: { symbol: "€", name: "Euro" }
//   };

//   const exchangeRates = {
//     USD: 1,
//     PKR: 280,
//     SAR: 3.75,
//     AED: 3.67,
//     GBP: 0.79,
//     EUR: 0.92
//   };

//   const courses = [
//     {
//       id: 1,
//       name: "Noorani Qaida",
//       category: "beginner",
//       description: "Basic Quran reading foundation with Arabic alphabet and pronunciation",
//       plans: [
//         { days: 1, original: 18, discounted: 18, classes: 4, hours: 2 },
//         { days: 2, original: 35, discounted: 32, classes: 8, hours: 4 },
//         { days: 3, original: 50, discounted: 45, classes: 12, hours: 6 },
//         { days: 4, original: 65, discounted: 58, classes: 16, hours: 8 },
//         { days: 5, original: 80, discounted: 70, classes: 20, hours: 10 },
//         { days: 6, original: 95, discounted: 82, classes: 24, hours: 12 }
//       ]
//     },
//     {
//       id: 2,
//       name: "Nazira with Tajweed", 
//       category: "intermediate",
//       description: "Quran reading with proper Tajweed rules and fluency development",
//       plans: [
//         { days: 1, original: 22, discounted: 22, classes: 4, hours: 2 },
//         { days: 2, original: 42, discounted: 38, classes: 8, hours: 4 },
//         { days: 3, original: 60, discounted: 54, classes: 12, hours: 6 },
//         { days: 4, original: 78, discounted: 68, classes: 16, hours: 8 },
//         { days: 5, original: 95, discounted: 82, classes: 20, hours: 10 },
//         { days: 6, original: 112, discounted: 96, classes: 24, hours: 12 }
//       ]
//     },
//     {
//       id: 3,
//       name: "Hifz with Tajweed",
//       category: "advanced",
//       description: "Complete Quran memorization with Ijazah preparation",
//       plans: [
//         { days: 1, original: 28, discounted: 28, classes: 4, hours: 2 },
//         { days: 2, original: 54, discounted: 48, classes: 8, hours: 4 },
//         { days: 3, original: 78, discounted: 68, classes: 12, hours: 6 },
//         { days: 4, original: 100, discounted: 85, classes: 16, hours: 8 },
//         { days: 5, original: 122, discounted: 102, classes: 20, hours: 10 },
//         { days: 6, original: 142, discounted: 118, classes: 24, hours: 12 }
//       ]
//     },
//     {
//       id: 4,
//       name: "Complete Tajweed",
//       category: "intermediate",
//       description: "Advanced Tajweed rules mastery with practical application", 
//       plans: [
//         { days: 1, original: 25, discounted: 25, classes: 4, hours: 2 },
//         { days: 2, original: 48, discounted: 43, classes: 8, hours: 4 },
//         { days: 3, original: 69, discounted: 60, classes: 12, hours: 6 },
//         { days: 4, original: 88, discounted: 75, classes: 16, hours: 8 },
//         { days: 5, original: 105, discounted: 88, classes: 20, hours: 10 },
//         { days: 6, original: 120, discounted: 100, classes: 24, hours: 12 }
//       ]
//     },
//     {
//       id: 5, 
//       name: "Qiraat & Lahjat",
//       category: "advanced",
//       description: "Learn different Quran recitation styles and dialects",
//       plans: [
//         { days: 1, original: 30, discounted: 30, classes: 4, hours: 2 },
//         { days: 2, original: 58, discounted: 52, classes: 8, hours: 4 },
//         { days: 3, original: 84, discounted: 72, classes: 12, hours: 6 },
//         { days: 4, original: 108, discounted: 90, classes: 16, hours: 8 },
//         { days: 5, original: 130, discounted: 108, classes: 20, hours: 10 },
//         { days: 6, original: 150, discounted: 125, classes: 24, hours: 12 }
//       ]
//     },
//     {
//       id: 6,
//       name: "Darse Nizami Books", 
//       category: "advanced",
//       description: "Comprehensive Islamic scholarship program",
//       plans: [
//         { days: 1, original: 35, discounted: 35, classes: 4, hours: 2 },
//         { days: 2, original: 68, discounted: 60, classes: 8, hours: 4 },
//         { days: 3, original: 99, discounted: 84, classes: 12, hours: 6 },
//         { days: 4, original: 128, discounted: 105, classes: 16, hours: 8 },
//         { days: 5, original: 155, discounted: 125, classes: 20, hours: 10 },
//         { days: 6, original: 180, discounted: 145, classes: 24, hours: 12 }
//       ]
//     },
//     {
//       id: 7,
//       name: "Islamic Lectures & Guidance",
//       category: "general", 
//       description: "Islamic knowledge sessions and personal counseling",
//       plans: [
//         { days: 1, original: 20, discounted: 20, classes: 4, hours: 2 },
//         { days: 2, original: 38, discounted: 35, classes: 8, hours: 4 },
//         { days: 3, original: 54, discounted: 48, classes: 12, hours: 6 },
//         { days: 4, original: 68, discounted: 60, classes: 16, hours: 8 },
//         { days: 5, original: 80, discounted: 70, classes: 20, hours: 10 },
//         { days: 6, original: 90, discounted: 78, classes: 24, hours: 12 }
//       ]
//     },
//     {
//       id: 8,
//       name: "Fiqh & Islamic Rulings",
//       category: "advanced",
//       description: "In-depth study of Islamic jurisprudence", 
//       plans: [
//         { days: 1, original: 32, discounted: 32, classes: 4, hours: 2 },
//         { days: 2, original: 62, discounted: 55, classes: 8, hours: 4 },
//         { days: 3, original: 90, discounted: 76, classes: 12, hours: 6 },
//         { days: 4, original: 116, discounted: 95, classes: 16, hours: 8 },
//         { days: 5, original: 140, discounted: 112, classes: 20, hours: 10 },
//         { days: 6, original: 162, discounted: 130, classes: 24, hours: 12 }
//       ]
//     }
//   ];

//   const convertPrice = (priceUSD: number) => {
//     const rate = exchangeRates[selectedCurrency as keyof typeof exchangeRates];
//     return Math.round(priceUSD * rate);
//   };

//   const getCurrencySymbol = () => {
//     return currencies[selectedCurrency as keyof typeof currencies]?.symbol || '$';
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Hero Section */}
//       <section
//         className="relative h-[350px] bg-cover bg-center"
//         style={{ backgroundImage: "url('/quran5.jpeg')" }}
//         aria-label="Course Fees and Pricing - TaallumulQuran Academy"
//       >
//         <div className="absolute inset-0 bg-black/70 flex items-center justify-center px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center text-white"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">
//               Course Fees & Pricing
//             </h1>
//             <p className="text-lg md:text-xl max-w-2xl mx-auto">
//               Affordable Quran learning with certified teachers. Choose from 8 specialized courses with flexible payment options.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="max-w-7xl mx-auto px-6 py-12">
        
//         {/* Currency Selector */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white shadow-lg rounded-2xl p-6 mb-8"
//         >
//           <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
//             Select Your Currency
//           </h2>
//           <div className="flex flex-wrap justify-center gap-2">
//             {Object.keys(currencies).map(currency => (
//               <button
//                 key={currency}
//                 onClick={() => setSelectedCurrency(currency)}
//                 className={`px-4 py-2 rounded-lg font-semibold transition-all ${
//                   selectedCurrency === currency 
//                     ? 'bg-green-600 text-white shadow-md' 
//                     : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                 }`}
//               >
//                 {currency} ({currencies[currency as keyof typeof currencies]?.symbol})
//               </button>
//             ))}
//           </div>
//         </motion.div>

//         {/* Features Banner */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="bg-green-600 text-white rounded-2xl p-8 mb-12"
//         >
//           <div className="grid md:grid-cols-3 gap-6 text-center">
//             <div className="flex flex-col items-center">
//               <Zap className="w-8 h-8 mb-2" />
//               <div className="font-bold text-lg">Up to 20% Discount</div>
//               <div className="text-green-100 text-sm">More classes = More savings</div>
//             </div>
//             <div className="flex flex-col items-center">
//               <Clock className="w-8 h-8 mb-2" />
//               <div className="font-bold text-lg">2 Free Trial Classes</div>
//               <div className="text-green-100 text-sm">Experience before enrollment</div>
//             </div>
//             <div className="flex flex-col items-center">
//               <Users className="w-8 h-8 mb-2" />
//               <div className="font-bold text-lg">1-on-1 Classes</div>
//               <div className="text-green-100 text-sm">Personalized attention</div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Courses Pricing */}
//         <div className="space-y-8">
//           {courses.map((course, courseIndex) => (
//             <motion.div
//               key={course.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: courseIndex * 0.1 }}
//               className="bg-white shadow-lg rounded-2xl overflow-hidden"
//             >
//               {/* Course Header */}
//               <div className={`p-6 ${
//                 course.category === 'beginner' ? 'bg-blue-600' :
//                 course.category === 'intermediate' ? 'bg-green-600' :
//                 'bg-purple-600'
//               } text-white`}>
//                 <h2 className="text-2xl font-bold mb-2">{course.name}</h2>
//                 <p className="opacity-90">{course.description}</p>
//               </div>

//               {/* Plans Grid */}
//               <div className="p-6">
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {course.plans.map((plan, planIndex) => (
//                     <motion.div
//                       key={plan.days}
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ delay: courseIndex * 0.1 + planIndex * 0.05 }}
//                       className="border-2 border-gray-200 rounded-xl p-6 hover:border-green-500 transition-all"
//                     >
//                       <div className="text-center mb-4">
//                         <div className="flex items-center justify-center gap-2 mb-2">
//                           <Calendar className="w-5 h-5 text-green-600" />
//                           <span className="font-semibold text-gray-900">
//                             {plan.days} day{plan.days > 1 ? 's' : ''}/week
//                           </span>
//                         </div>
                        
//                         {/* Prices */}
//                         <div className="space-y-1 mb-3">
//                           <div className="text-3xl font-bold text-green-600">
//                             {getCurrencySymbol()}{convertPrice(plan.discounted)}
//                             <span className="text-sm font-normal text-gray-600">/month</span>
//                           </div>
//                           {plan.discounted !== plan.original && (
//                             <div className="text-sm text-gray-500 line-through">
//                               {getCurrencySymbol()}{convertPrice(plan.original)}/month
//                             </div>
//                           )}
//                         </div>

//                         {/* Discount Badge */}
//                         {plan.discounted !== plan.original && (
//                           <div className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-bold inline-block">
//                             Save {getCurrencySymbol()}{convertPrice(plan.original - plan.discounted)}
//                           </div>
//                         )}
//                       </div>

//                       {/* Plan Details */}
//                       <div className="space-y-2 text-sm text-gray-600 mb-4">
//                         <div className="flex justify-between">
//                           <span className="flex items-center gap-1">
//                             <BookOpen className="w-4 h-4" />
//                             Classes:
//                           </span>
//                           <span className="font-semibold">{plan.classes}/month</span>
//                         </div>
//                         <div className="flex justify-between">
//                           <span className="flex items-center gap-1">
//                             <Clock className="w-4 h-4" />
//                             Hours:
//                           </span>
//                           <span className="font-semibold">{plan.hours} hours/month</span>
//                         </div>
//                         <div className="flex justify-between">
//                           <span>Per class:</span>
//                           <span className="font-semibold">
//                             {getCurrencySymbol()}
//                             {convertPrice(plan.discounted / plan.classes).toFixed(0)}
//                           </span>
//                         </div>
//                       </div>

//                       {/* CTA Buttons */}
//                       <div className="space-y-2">
//                         <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-colors">
//                           Subscribe Now
//                         </button>
//                         <button className="w-full border border-green-600 text-green-600 hover:bg-green-50 py-2 rounded-lg font-semibold transition-colors">
//                           Free Trial Class
//                         </button>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Consultation Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//           className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white mt-12"
//         >
//           <h3 className="text-2xl font-bold mb-4 text-center">Islamic Consultation Plans</h3>
//           <p className="text-center mb-6 opacity-90">For personal guidance and religious queries</p>
          
//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               { duration: "30 mins", price: 15, desc: "Quick question session" },
//               { duration: "1 hour", price: 25, desc: "Detailed discussion" },
//               { duration: "2 hours", price: 45, desc: "Comprehensive guidance" }
//             ].map((plan, idx) => (
//               <div key={idx} className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
//                 <div className="text-2xl font-bold mb-2">{plan.duration}</div>
//                 <div className="text-3xl font-bold mb-2">
//                   {getCurrencySymbol()}{convertPrice(plan.price)}
//                 </div>
//                 <div className="text-sm opacity-80 mb-4">{plan.desc}</div>
//                 <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full">
//                   Book Session
//                 </button>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//       </section>
//     </div>
//   );
// }
>>>>>>> 2848987ad67ccd85b2d02953735d8ed340647620
