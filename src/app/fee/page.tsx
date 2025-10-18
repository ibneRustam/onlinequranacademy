"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Clock, Users, BookOpen, Star, Zap, Calendar, Coffee, ChevronDown, Menu, X, Heart, Users2, Gift } from "lucide-react";
import Link from "next/link";
import { coursesData } from "@/app/data/coursesData";

export default function FeesPage() {
  const [selectedCourse, setSelectedCourse] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [customDays, setCustomDays] = useState(3);
  const [showCustomPlan, setShowCustomPlan] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentCourse = coursesData[selectedCourse];

  // Calculate custom plan pricing
  const calculateCustomPlan = () => {
    const baseRate = currentCourse.plans[0].price ;
    const classes = customDays * 4; // Approximate classes per month
    const price = baseRate * classes;
    
    return {
      days: customDays,
      price: Math.round(price),
      classes: classes,
      sessionTime: currentCourse.plans[0].sessionTime,
      features: [
        "Fully Flexible Schedule",
        "Personalized Curriculum",
        "Certified Teacher",
        "Progress Tracking",
        "Custom Class Timing"
      ]
    };
  };

  const customPlan = calculateCustomPlan();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] sm:h-[70vh] sm:min-h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/quran5.jpeg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center justify-center pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Course Fees & Pricing
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
                Affordable Quran Learning with Certified Teachers
              </p>
              <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto px-4">
                Choose Specialized Courses with Flexible Payment Options
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
              >
                <Link href="#pricing">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-green-700 transition-all shadow-2xl w-full sm:w-auto"
                  >
                    View Pricing Plans
                  </motion.button>
                </Link>
                <Link href="/registration">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-green-600 transition-all w-full sm:w-auto"
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
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white flex flex-col items-center"
          >
            <span className="text-xs sm:text-sm mb-1 sm:mb-2">Scroll Down</span>
            <ChevronDown size={18} className="sm:w-5 sm:h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Banner */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="bg-white/20 p-2 sm:p-3 rounded-full mb-2 sm:mb-4">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-xl font-bold mb-1 sm:mb-2">3 Days Free Trial</h3>
              <p className="text-green-100 text-xs sm:text-sm">Experience before enrollment</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="bg-white/20 p-2 sm:p-3 rounded-full mb-2 sm:mb-4">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-xl font-bold mb-1 sm:mb-2">1-on-1 Classic</h3>
              <p className="text-green-100 text-xs sm:text-sm">Personalized attention</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="bg-white/20 p-2 sm:p-3 rounded-full mb-2 sm:mb-4">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-xl font-bold mb-1 sm:mb-2">Flexible Schedule</h3>
              <p className="text-green-100 text-xs sm:text-sm">Learn at your convenience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="bg-white/20 p-2 sm:p-3 rounded-full mb-2 sm:mb-4">
                <Users2 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-xl font-bold mb-1 sm:mb-2">Family Discount</h3>
              <p className="text-green-100 text-xs sm:text-sm">Special rates for siblings</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Course Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Choose Your Course
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            Select from our specialized Quran learning programs
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto">
            {coursesData.map((course, index) => (
              <motion.button
                key={course.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedCourse(index)}
                className={`p-3 sm:p-4 rounded-xl border-2 transition-all ${
                  selectedCourse === index
                    ? 'border-green-500 bg-green-50 text-green-700 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-green-300 hover:shadow-md'
                }`}
              >
                <div className="text-center">
                  <BookOpen className={`w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2 ${
                    selectedCourse === index ? 'text-green-600' : 'text-gray-400'
                  }`} />
                  <div className="font-semibold text-xs sm:text-sm md:text-base leading-tight">{course.name}</div>
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
          className="text-center mb-8 sm:mb-12"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {currentCourse.name}
          </h3>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto px-4">
            {currentCourse.description}
          </p>
          <Link href={`/courses/${currentCourse.slug}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-3 sm:mt-4 text-green-600 hover:text-green-700 font-semibold underline text-sm sm:text-base"
            >
              View Course Details →
            </motion.button>
          </Link>
        </motion.div>

        {/* Family Discount Banner */}
        {currentCourse.familyDiscount && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 sm:mb-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white text-center"
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              <h3 className="text-lg sm:text-xl font-bold">Family Discount Available!</h3>
              <Gift className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </div>
            <p className="text-purple-100 text-sm sm:text-base max-w-2xl mx-auto mb-3 sm:mb-4">
              Enroll multiple children from the same family and get up to <strong>20% discount</strong> on each additional child's fees!
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all text-sm sm:text-base"
              >
                Get Family Discount
              </motion.button>
            </Link>
          </motion.div>
        )}

        {/* Journey Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8 bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Embark on Your Quran Learning Journey
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto flex items-center justify-center gap-2 flex-col sm:flex-row">
           
            Choose a Plan That Fits You - Stay connected every day for less than the cost of your daily coffee
          </p>
          {currentCourse.customClassNote && (
            <p className="text-green-600 font-semibold mt-3 sm:mt-4 text-sm sm:text-base">
              {currentCourse.customClassNote}
            </p>
          )}
        </motion.div>

        {/* Custom Plan Selector
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 sm:mb-8 text-center"
        >
          <button
            onClick={() => setShowCustomPlan(!showCustomPlan)}
            className="bg-white border-2 border-green-500 text-green-600 px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-green-50 transition-all text-sm sm:text-base"
          >
            {showCustomPlan ? 'Hide Custom Plan' : 'Create Custom Plan'}
          </button>
        </motion.div>

        {/* Custom Plan */}
        {/* {showCustomPlan && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mb-6 sm:mb-8 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border-2 border-green-500"
          >
            <div className="text-center mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Create Your Custom Plan</h3>
              <p className="text-gray-600 text-sm sm:text-base">Choose exactly how many days per week you want to learn</p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="mb-4 sm:mb-6">
                <label className="block text-gray-700 font-semibold mb-2 sm:mb-3 text-center text-sm sm:text-base">
                  Classes Per Week: <span className="text-green-600">{customDays}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="7"
                  value={customDays}
                  onChange={(e) => setCustomDays(parseInt(e.target.value))}
                  className="w-full h-2 sm:h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-600 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-lg"
                />
                <div className="flex justify-between text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
                  <span>1 Day</span>
                  <span>7 Days</span>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-green-50 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Your Custom Plan</h4>
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-2xl sm:text-3xl font-bold text-green-600">${customPlan.price}</span>
                    <span className="text-gray-600 text-sm sm:text-base">/month</span>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                    {customDays} days/week • {customPlan.classes} classes/month • {customPlan.sessionTime} sessions
                  </p>
                  <div className="space-y-1 sm:space-y-2">
                    {customPlan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/registration">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-green-700 transition-all shadow-lg w-full"
                  >
                    Get Custom Plan
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div> 
           )}
          */}
        

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {currentCourse.plans.map((plan, index) => (
            <motion.div
              key={plan.days}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-xl sm:rounded-2xl border-2 p-4 sm:p-6 lg:p-8 ${
                plan.popular
                  ? 'border-green-500 bg-green-50 shadow-xl lg:scale-105 lg:-mx-2 lg:z-10'
                  : 'border-gray-200 bg-white shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-2 py-1 sm:px-3 sm:py-1 lg:px-4 lg:py-2 rounded-full text-xs font-bold flex items-center">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 fill-current" />
                    <span className="hidden sm:inline">MOST POPULAR</span>
                    <span className="sm:hidden">POPULAR</span>
                  </span>
                </div>
              )}

              {plan.discount > 0 && !plan.popular && (
                <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    SAVE {plan.discount}%
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                  {plan.days} Days Per Week
                </h3>
                
                {plan.discount > 0 && (
                  <div className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-bold inline-block mb-2 sm:mb-3">
                    SAVE {plan.discount}%
                  </div>
                )}

                <div className="flex items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                  <span className="text-xs sm:text-sm text-gray-600 font-semibold">USD</span>
                </div>

                <div className="flex items-baseline justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-green-600">
                    ${plan.price}
                  </span>
                  {plan.discount > 0 && (
                    <span className="text-sm sm:text-lg text-gray-500 line-through">
                      ${plan.originalPrice}
                    </span>
                  )}
                  <span className="text-gray-600 text-sm sm:text-lg">/mo</span>
                </div>

                <p className="text-gray-600 text-xs sm:text-sm">
                  {plan.days === 5 
                    ? "Dedicated One-on-One Quran Learning"
                    : "Personalized One-on-One Quran Sessions"
                  }
                </p>
              </div>

              {/* Plan Details */}
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 mb-4 sm:mb-6">
                <div className="flex justify-between items-center py-1 sm:py-2 border-b border-gray-200">
                  {/* <span className="text-gray-600 text-xs sm:text-sm">Classes Monthly</span>
                  <span className="font-semibold text-gray-900 text-xs sm:text-sm">{plan.days} Classes</span> */}
                </div>
                
                <div className="flex justify-between items-center py-1 sm:py-2 border-b border-gray-200">
                  <span className="text-gray-600 text-xs sm:text-sm">Session Duration</span>
                  <span className="font-semibold text-gray-900 text-xs sm:text-sm">{plan.sessionTime}</span>
                </div>

                {/* <div className="flex justify-between items-center py-1 sm:py-2 border-b border-gray-200">
                  <span className="text-gray-600 text-xs sm:text-sm">Cost Per Class</span>
                  <span className="font-semibold text-green-600 text-xs sm:text-sm">
                    ${(plan.price / plan.originalPrice).toFixed(2)}
                  </span>
                </div> */}

                <div className="text-center text-xs sm:text-sm text-gray-500 mt-2 sm:mt-4">
                  Customize your course - Pay only for what you need
                </div>
              </div>

              {/* Features */}
              <div className="mb-4 sm:mb-6">
                <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-center text-sm sm:text-base">What's Included:</h4>
                <ul className="space-y-1 sm:space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
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
                  className={`w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg transition-all ${
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

        {/* Additional Discounts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Additional Discounts Available</h3>
            <p className="text-lg sm:text-xl opacity-90">Save more with our special discount programs</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/20 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <Users2 className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-3 sm:mb-4" />
              <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Family Discount</h4>
              <p className="text-blue-100 text-xs sm:text-sm">Up to 20% off for siblings</p>
              <div className="mt-2 sm:mt-3 text-xl sm:text-2xl font-bold">20% OFF</div>
            </div>

            <div className="text-center bg-white/20 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <Calendar className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-3 sm:mb-4" />
              <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Quarterly Payment</h4>
              <p className="text-blue-100 text-xs sm:text-sm">Pay for 3 months in advance</p>
              <div className="mt-2 sm:mt-3 text-xl sm:text-2xl font-bold">15% OFF</div>
            </div>

            <div className="text-center bg-white/20 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <Gift className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-3 sm:mb-4" />
              <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Annual Payment</h4>
              <p className="text-blue-100 text-xs sm:text-sm">Pay for 1 year in advance</p>
              <div className="mt-2 sm:mt-3 text-xl sm:text-2xl font-bold">25% OFF</div>
            </div>
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-gray-100 transition-all shadow-2xl"
              >
                Inquire About Discounts
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Ready to Start Your Quran Journey?
            </h3>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of students learning with certified Islamic scholars
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/registration">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-gray-100 transition-all shadow-2xl"
                >
                  Start Learning Now
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-white hover:text-green-600 transition-all"
                >
                  Get Free Guidance
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}