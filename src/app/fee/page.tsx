"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Clock, Users, BookOpen, Star, Zap, Calendar, Coffee, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import Head from "next/head";

export default function FeesPage() {
  const [selectedCourse, setSelectedCourse] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const courses = [
    {
      id: 1,
      name: "Noorani Qaida",
      description: "Master Arabic alphabet & basic Quran reading",
      level: "Beginner",
      duration: "3-6 Months",
      plans: [
        {
          days: 2,
          price: 45,
          originalPrice: 45,
          discount: 0,
          classes: 8,
          sessionTime: "30 minutes",
          popular: false,
          features: [
            "Arabic Alphabet Mastery",
            "Basic Pronunciation", 
            "Short Surahs Practice",
            "Weekly Progress Reports"
          ]
        },
        {
          days: 5,
          price: 99,
          originalPrice: 112.50,
          discount: 12,
          classes: 20,
          sessionTime: "30 minutes",
          popular: true,
          features: [
            "Rapid Progress Track",
            "Advanced Pronunciation",
            "Quranic Foundation",
            "Priority Support"
          ]
        },
        {
          days: 3,
          price: 65,
          originalPrice: 67.50,
          discount: 4,
          classes: 12,
          sessionTime: "30 minutes",
          popular: false,
          features: [
            "Fluent Letter Recognition",
            "Tajweed Basics",
            "Daily Practice Sessions",
            "Certified Teacher"
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Nazira with Tajweed",
      description: "Perfect your Quran recitation with Tajweed rules",
      level: "Intermediate",
      duration: "6-9 Months",
      plans: [
        {
          days: 2,
          price: 55,
          originalPrice: 55,
          discount: 0,
          classes: 8,
          sessionTime: "45 minutes",
          popular: false,
          features: [
            "Tajweed Rules Application",
            "Fluency Development",
            "Quranic Phrase Practice"
          ]
        },
        {
          days: 5,
          price: 118,
          originalPrice: 134,
          discount: 12,
          classes: 20,
          sessionTime: "45 minutes",
          popular: true,
          features: [
            "Complete Tajweed Mastery",
            "Ijazah Preparation",
            "Expert Teacher"
          ]
        },
        {
          days: 3,
          price: 78,
          originalPrice: 81,
          discount: 4,
          classes: 12,
          sessionTime: "45 minutes",
          popular: false,
          features: [
            "Advanced Tajweed",
            "Recitation Practice",
            "Error Correction"
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Hifz Program",
      description: "Memorize the Holy Quran with proper revision system",
      level: "Advanced",
      duration: "2-3 Years",
      plans: [
        {
          days: 2,
          price: 75,
          originalPrice: 75,
          discount: 0,
          classes: 8,
          sessionTime: "60 minutes",
          popular: false,
          features: [
            "Memorization Techniques",
            "Daily New Lesson",
            "Revision System"
          ]
        },
        {
          days: 5,
          price: 155,
          originalPrice: 176,
          discount: 12,
          classes: 20,
          sessionTime: "60 minutes",
          popular: true,
          features: [
            "Rapid Memorization",
            "Complete Revision System",
            "Ijazah Certification"
          ]
        },
        {
          days: 3,
          price: 105,
          originalPrice: 109,
          discount: 4,
          classes: 12,
          sessionTime: "60 minutes",
          popular: false,
          features: [
            "Faster Memorization",
            "Detailed Revision",
            "Progress Tracking"
          ]
        }
      ]
    },
    {
      id: 4,
      name: "Complete Tajweed",
      description: "Master all Tajweed rules with practical implementation",
      level: "Intermediate",
      duration: "6-12 Months",
      plans: [
        {
          days: 2,
          price: 60,
          originalPrice: 60,
          discount: 0,
          classes: 8,
          sessionTime: "45 minutes",
          popular: false,
          features: [
            "Theoretical Rules",
            "Practical Application",
            "Common Mistakes"
          ]
        },
        {
          days: 5,
          price: 125,
          originalPrice: 142,
          discount: 12,
          classes: 20,
          sessionTime: "45 minutes",
          popular: true,
          features: [
            "Complete Mastery",
            "Certification Exam",
            "Expert Guidance"
          ]
        },
        {
          days: 3,
          price: 85,
          originalPrice: 88,
          discount: 4,
          classes: 12,
          sessionTime: "45 minutes",
          popular: false,
          features: [
            "Advanced Rules",
            "Quranic Examples",
            "Practice Sessions"
          ]
        }
      ]
    },
    {
      id: 5,
      name: "Qiraat & Lahjat",
      description: "Learn different Quran recitation styles",
      level: "Advanced",
      duration: "12-18 Months",
      plans: [
        {
          days: 2,
          price: 70,
          originalPrice: 70,
          discount: 0,
          classes: 8,
          sessionTime: "45 minutes",
          popular: false,
          features: [
            "Recitation Styles",
            "Dialect Variations",
            "Practical Sessions"
          ]
        },
        {
          days: 5,
          price: 145,
          originalPrice: 165,
          discount: 12,
          classes: 20,
          sessionTime: "45 minutes",
          popular: true,
          features: [
            "Complete Qiraat Course",
            "Ijazah Preparation",
            "Master Teacher"
          ]
        },
        {
          days: 3,
          price: 98,
          originalPrice: 102,
          discount: 4,
          classes: 12,
          sessionTime: "45 minutes",
          popular: false,
          features: [
            "Multiple Qiraat",
            "Style Comparison",
            "Expert Guidance"
          ]
        }
      ]
    },
    {
      id: 6,
      name: "Darse Nizami",
      description: "Comprehensive Islamic scholarship program",
      level: "Advanced",
      duration: "8 Years",
      plans: [
        {
          days: 2,
          price: 80,
          originalPrice: 80,
          discount: 0,
          classes: 8,
          sessionTime: "60 minutes",
          popular: false,
          features: [
            "Islamic Sciences",
            "Classical Texts",
            "Scholarly Approach"
          ]
        },
        {
          days: 5,
          price: 165,
          originalPrice: 187,
          discount: 12,
          classes: 20,
          sessionTime: "60 minutes",
          popular: true,
          features: [
            "Complete Curriculum",
            "Scholar Mentorship",
            "Certification"
          ]
        },
        {
          days: 3,
          price: 112,
          originalPrice: 116,
          discount: 4,
          classes: 12,
          sessionTime: "60 minutes",
          popular: false,
          features: [
            "Advanced Studies",
            "Text Analysis",
            "Research Methods"
          ]
        }
      ]
    },
    {
      id: 7,
      name: "Islamic Lectures",
      description: "Islamic knowledge and guidance sessions",
      level: "General",
      duration: "Flexible (3 month to 1 Year or choose your custome program)",
      plans: [
        {
          days: 2,
          price: 40,
          originalPrice: 40,
          discount: 0,
          classes: 8,
          sessionTime: "45 minutes",
          popular: false,
          features: [
            "Islamic Topics",
            "Q&A Sessions",
            "Guidance"
          ]
        },
        {
          days: 5,
          price: 85,
          originalPrice: 96,
          discount: 12,
          classes: 20,
          sessionTime: "45 minutes",
          popular: true,
          features: [
            "Comprehensive Program",
            "Expert Scholar",
            "Lifetime Access"
          ]
        },
        {
          days: 3,
          price: 56,
          originalPrice: 58,
          discount: 4,
          classes: 12,
          sessionTime: "45 minutes",
          popular: false,
          features: [
            "Detailed Discussions",
            "Case Studies",
            "Practical Advice"
          ]
        }
      ]
    },
    {
      id: 8,
      name: "Fiqh & Islamic Law",
      description: "In-depth study of Islamic jurisprudence",
      level: "Advanced",
      duration: "1 Year or choose custom",
      plans: [
        {
          days: 2,
          price: 65,
          originalPrice: 65,
          discount: 0,
          classes: 8,
          sessionTime: "45 minutes",
          popular: false,
          features: [
            "Basic Fiqh Principles",
            "Case Studies",
            "Practical Rulings"
          ]
        },
        {
          days: 5,
          price: 135,
          originalPrice: 153,
          discount: 12,
          classes: 20,
          sessionTime: "60 minutes",
          popular: true,
          features: [
            "Complete Fiqh Course",
            "Expert Jurist",
            "Certification"
          ]
        },
        {
          days: 3,
          price: 92,
          originalPrice: 95,
          discount: 4,
          classes: 12,
          sessionTime: "60 minutes",
          popular: false,
          features: [
            "Advanced Fiqh",
            "Comparative Study",
            "Research"
          ]
        }
      ]
    }
  ];

  const currentCourse = courses[selectedCourse];

  return (
 

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">


        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/quran5.jpeg')" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center justify-center pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Course Fees & Pricing
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto leading-relaxed">
                  Affordable Quran Learning with Certified Teachers
                </p>
                <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                  Choose Specialized Courses with Flexible Payment Options
                </p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Link href="#pricing">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-2xl"
                    >
                      View Pricing Plans
                    </motion.button>
                  </Link>
                  <Link href="/registration">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-600 transition-all"
                    >
                      Start Free Trial
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-white flex flex-col items-center"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ChevronDown size={20} />
            </motion.div>
          </motion.div>
        </section>

        {/* Features Banner */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="bg-white/20 p-3 rounded-full mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">3 Days Free Trial Class</h3>
                <p className="text-green-100 text-sm">Experience before enrollment</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="bg-white/20 p-3 rounded-full mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">1-on-1 Classic</h3>
                <p className="text-green-100 text-sm">Personalized attention</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="bg-white/20 p-3 rounded-full mb-4">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Flexible Schedule</h3>
                <p className="text-green-100 text-sm">Learn at your convenience</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Course Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Course
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
              Select from our specialized Quran learning programs
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {courses.map((course, index) => (
                <motion.button
                  key={course.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedCourse(index)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedCourse === index
                      ? 'border-green-500 bg-green-50 text-green-700 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-green-300 hover:shadow-md'
                  }`}
                >
                  <div className="text-center">
                    <BookOpen className={`w-6 h-6 mx-auto mb-2 ${
                      selectedCourse === index ? 'text-green-600' : 'text-gray-400'
                    }`} />
                    <div className="font-semibold text-sm md:text-base">{course.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{course.level}</div>
                    <div className="text-xs text-green-600 font-medium mt-1">{course.duration}</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Course Description */}
          <motion.div
            key={selectedCourse}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {currentCourse.name}
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {currentCourse.description}
            </p>
          </motion.div>

          {/* Journey Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Embark on Your Quran Learning Journey
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto flex items-center justify-center gap-2">
            
              Choose a Plan That Fits You - Stay connected every day for less than the cost of your daily coffee
            </p>
          </motion.div>

          {/* Pricing Cards - Most Popular in Middle */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentCourse.plans.map((plan, index) => (
              <motion.div
                key={plan.days}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl border-2 p-6 md:p-8 ${
                  plan.popular
                    ? 'border-green-500 bg-green-50 shadow-xl lg:scale-105 lg:-mx-2 lg:z-10'
                    : 'border-gray-200 bg-white shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {plan.discount > 0 && !plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Limited-Time Discount
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.days} Days Per Week
                  </h3>
                  
                  {plan.discount > 0 && (
                    <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold inline-block mb-3">
                      SAVE {plan.discount}%
                    </div>
                  )}

                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-sm text-gray-600 font-semibold">USD</span>
                  </div>

                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-4xl md:text-5xl font-bold text-green-600">
                      ${plan.price}
                    </span>
                    {plan.discount > 0 && (
                      <span className="text-lg text-gray-500 line-through">
                        ${plan.originalPrice}
                      </span>
                    )}
                    <span className="text-gray-600 text-lg">/mo</span>
                  </div>

                  <p className="text-gray-600 text-sm">
                    {plan.days === 5 
                      ? "Dedicated One-on-One Quran Learning"
                      : "Personalized One-on-One Quran Sessions"
                    }
                  </p>
                </div>

                {/* Plan Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Classes Monthly</span>
                    <span className="font-semibold text-gray-900">{plan.classes} Classes</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Session Duration</span>
                    <span className="font-semibold text-gray-900">{plan.sessionTime}</span>
                  </div>

                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Cost Per Class</span>
                    <span className="font-semibold text-green-600">
                      ${(plan.price / plan.classes).toFixed(2)}
                    </span>
                  </div>

                  <div className="text-center text-sm text-gray-500 mt-4">
                    Customize your course - Pay only for what you need
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-center">What's Included:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link href="/registration">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                      plan.popular
                        ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg'
                        : 'bg-gray-900 hover:bg-black text-white shadow-md'
                    }`}
                  >
                    Choose Plan
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Quran Journey?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of students learning with certified Islamic scholars
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/registration">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl"
                  >
                    Start Learning Now
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-600 transition-all"
                  >
                    Get Free Guidance
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

     </div>
  )};