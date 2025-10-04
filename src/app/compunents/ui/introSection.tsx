"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section 
      id="about"
      className="relative w-full py-20 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text with animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Who Are We?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Our academy is dedicated to spreading the light of the <strong>Quran</strong> 
            and Islamic knowledge across the globe. With qualified teachers, a 
            structured curriculum, and personalized guidance, we ensure that 
            students of all ages can learn the Quran with proper <em>Tajweed</em>, 
            memorize it with ease, and understand its meanings with clarity.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Whether you are a beginner or an advanced learner, our mission is 
            to make Quran learning accessible, flexible, and impactful for 
            everyone. Together, we aim to strengthen faith and bring the Quran 
            closer to every heart.
          </p>
        </motion.div>

        {/* Right Side - Image with animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="/quran6.jpeg"
            alt="Open Quran with pen, symbolizing learning and teaching"
            className="w-full max-w-md rounded-2xl shadow-2xl object-cover transform hover:scale-105 transition duration-500"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
