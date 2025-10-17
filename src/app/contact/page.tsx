
"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import countries from "@/app/data/countries"; 
import dialCodes from "@/app/data/dialcode"; 
import {
  FaEnvelope,
  FaWhatsapp,
  FaPhone,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
} from "react-icons/fa";



export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  // const [selectedDial, setSelectedDial] = useState("+92"); 

  const alias = useMemo (() => ({
    USA: "United States",
    UK: "United Kingdom",
    UAE: "United Arab Emirates",
  }), []);

useEffect(() => {
  const raw = formData.country;
  const key = alias[raw as keyof typeof alias] ?? raw;
}, [formData.country, alias]);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus("⚠️ Please fill in all required fields before submitting.");
      return;
    }

    setStatus("⏳ Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message sent successfully! We will contact you soon, Insha'Allah.");
        setFormData({ name: "", email: "", country: "", phone: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (error) { 
      console.error("Contact form error:", error);
      setStatus("❌ Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section with SEO-rich content */}
      <section
        className="relative h-[350px] bg-cover bg-center"
        style={{ backgroundImage: "url('/quran9.jpeg')" }}
        aria-label="Contact TaallumulQuran Academy for Quran classes"
      >
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
           {/* SEO-rich Heading */}
<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-center sm:text-left">
  Contact Us
</h1>
<p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-center sm:text-left text-gray-600">
  Get in touch for online Quran classes, Tajweed courses, Hifz program and Islamic studies with certified teachers
</p>
</motion.div>
</div>
</section>

{/* Main Content with Semantic HTML */}
<section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
  
  {/* Contact Form */}
  <article className="bg-white shadow-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 order-2 lg:order-1">
    <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800 text-center sm:text-left">
      Send Message for Quran Classes Inquiry
    </h2>

    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name *
        </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
          required
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
          required
          aria-required="true"
        />
      </div>

      {/* Country and Phone - Stack on mobile */}
      <div className="flex flex-col gap-3">
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
            Country *
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
            required
            aria-required="true"
          >
            <option value="">Select Your Country</option>
            {countries.map((c, i) => {
              const dial = (dialCodes as Record<string, string>)[c] ?? "";
              return (
                <option key={i} value={c}>
                  {`${c} (${dial})`}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+92 300 1234567"
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
            required
            aria-required="true"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your Quran learning goals... (e.g., Tajweed course, Hifz program, Islamic studies, free trial request)"
          rows={4}
          className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base resize-vertical"
          required
          aria-required="true"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 sm:py-3 rounded-lg hover:bg-green-700 transition font-semibold shadow-md hover:shadow-lg text-sm sm:text-base"
        aria-label="Send message for Quran classes inquiry"
      >
        Send Message 
      </button>
    </form>

          {status && (
            <motion.p
              key={status}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className={`mt-4 text-center text-sm font-medium ${
                status.includes("✅")
                  ? "text-green-600"
                  : status.includes("⚠️")
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
              role="alert"
            >
              {status}
            </motion.p>
          )}
        </article>

        {/* Contact Information */}
        <aside>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Quran Academy Contact Information
          </h2>
          <p className="mb-6 text-gray-600">
            Connect with TaallumulQuran Academy for online Quran learning programs, 
            Tajweed courses, Hifz memorization, and Islamic studies with certified teachers.
          </p>

          <ul className="space-y-4 text-lg">
  <li className="flex items-center gap-3">
    <FaEnvelope className="text-red-500 text-xl" aria-hidden="true" />
    <a 
      href="mailto:taallumulquranacademy@gmail.com" 
      className="text-green-700 hover:text-blue-800 hover:underline transition-colors"
      aria-label="Send email to TaallumulQuran Academy"
    >
      taallumulquranacademy@gmail.com
    </a>
  </li>
  
  <li className="flex items-center gap-3">
    <FaWhatsapp className="text-green-600 text-xl" aria-hidden="true" />
    <a 
      href="https://wa.me/923142969508" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-green-700 hover:text-blue-800 hover:underline transition-colors"
      aria-label="Contact via WhatsApp for Quran classes"
    >
      WhatsApp: +92 314 2969508
    </a>
  </li>
  
  <li className="flex items-center gap-3">
    <FaPhone className="text-blue-600 text-xl" aria-hidden="true" />
    <a 
      href="tel:+923142969508" 
      className="text-green-700 hover:text-blue-800 hover:underline transition-colors"
      aria-label="Call TaallumulQuran Academy"
    >
      Call: +92 314 2969508
    </a>
  </li>

  {/* Social Media Links */}
  <li className="flex items-center gap-3">
    <FaLinkedin className="text-blue-700 text-xl" aria-hidden="true" />
    <a 
      href="https://www.linkedin.com/company/taallumul-quran-academy" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-green-700 hover:text-blue-800 hover:underline transition-colors"
      aria-label="Follow TaallumulQuran on Linkedin"
    >
      Linkedin
    </a>
  </li>
  
  <li className="flex items-center gap-3">
    <FaFacebook className="text-blue-700 text-xl" aria-hidden="true" />
    <a 
      href="https://www.facebook.com/profile.php?id=61581040517143" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-green-700 hover:text-blue-800 hover:underline transition-colors"
      aria-label="Follow TaallumulQuran on Facebook"
    >
      Facebook Page
    </a>
  </li>
  
  <li className="flex items-center gap-3">
    <FaInstagram className="text-pink-600 text-xl" aria-hidden="true" />
    <a 
      href="https://www.instagram.com/taalumulquran/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-green-700 hover:text-blue-800 hover:underline transition-colors"
      aria-label="Follow TaallumulQuran on Instagram"
    >
      Instagram
    </a>
  </li>
  
  
  <li className="flex items-center gap-3">
    <FaTwitter className="text-blue-400 text-xl" aria-hidden="true" />
    <a 
      href="https://x.com/Taallumulquran" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-green-700 hover:text-blue-800 hover:underline transition-colors"
      aria-label="Follow TaallumulQuran on Twitter"
    >
      Twitter / X
    </a>
  </li>
</ul>
          {/* Location */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Academy Location</h3>
            <p className="flex items-center gap-2 text-gray-800 mb-3">
              <FaMapMarkerAlt className="text-red-600 text-xl" aria-hidden="true" />
              <a
                href="https://www.google.com/maps/place/Jamshed+Rd,+Karachi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:text-blue-800 hover:underline transition-colors"
                aria-label="View academy location on Google Maps"
              >
                Jamshed Road No 1, Karachi, Pakistan
              </a>
            </p>
            <iframe
              title="Taallumul Quran Academy Location - Jamshed Road Karachi Pakistan"
              src="https://www.google.com/maps?q=24.8835416,67.0470572&z=19&output=embed"
              width="100%"
              height="250"
              loading="lazy"
              className="rounded-lg border-0 shadow-md"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Map showing TaallumulQuran Academy location in Karachi"
            ></iframe>
          </div>

          {/* SEO Content Section */}
          <div className="mt-8 p-6 bg-green-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Online Quran Learning Academy</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>TaallumulQuran Academy</strong> offers comprehensive online Quran education including 
              <strong> Tajweed courses, Hifz memorization program, Islamic studies,</strong> and 
              <strong> Quran reading classes</strong> with certified teachers. Available worldwide 
              with flexible schedules and free trial classes. Contact us for personalized Quran learning solutions.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}