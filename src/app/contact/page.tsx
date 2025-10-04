// app/contact/page.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import countries from "@/app/data/countries";  

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
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("❌ Failed: " + (data.message || "Server error"));
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero */}
      <div
        className="relative h-[350px] bg-cover bg-center"
        style={{ backgroundImage: "url('/quran9.jpeg')" }}
      >
      
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-4">
            <motion.div
    className="relative z-10 text-center text-white px-4"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
          <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
          </motion.div>
        </div>
       
      </div>

      {/* Main */}
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        {/* Left: Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full p-3 border rounded-lg" required />
            <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full p-3 border rounded-lg" required />
            <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone Number" className="w-full p-3 border rounded-lg" required />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={4} className="w-full p-3 border rounded-lg" required />
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">Send Message</button>
          </form>
          {status && <p className="mt-4 text-center text-sm">{status}</p>}
        </div>

        {/* Right: Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-4 text-gray-600">We’d love to hear from you. Reach out through any channel below.</p>

          <ul className="space-y-3 text-lg">
            

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-red-500" />
              <a href="mailto:taallumulquranacademy@gmail.com" className="text-blue-600 hover:underline">taallumulquranacademy@gmail.com</a>
            </li>

            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-green-600" />
              <a href="https://wa.me/923142969508" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">WhatsApp Chat</a>
            </li>

            <li className="flex items-center gap-3">
              <FaPhone className="text-blue-800" />
              <a href="tel:+923142969508" className="text-blue-600 hover:underline">+92 314 2969508 (Call Now)</a>
            </li>

            <li className="flex items-center gap-3">
              <FaFacebook className="text-blue-700" />
              <a href="https://www.facebook.com/profile.php?id=61581040517143" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Facebook</a>
            </li>

            <li className="flex items-center gap-3">
              <FaLinkedin className="text-blue-700" />
              <a href="https://www.linkedin.com/in/taallum-ul-quran-academy-1a1885386/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
            </li>

            <li className="flex items-center gap-3">
              <FaInstagram className="text-pink-600" />
              <a href="https://www.instagram.com/taalumulquran/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Instagram</a>
            </li>

            <li className="flex items-center gap-3">
              <FaTwitter className="text-black" />
              <a href="https://x.com/Taallumulquran" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Twitter (X)</a>
            </li>
          </ul>

          {/* Map */}
          <div className="mt-6">
            <p className="flex items-center gap-2 text-gray-800 mb-3">
              <FaMapMarkerAlt className="text-red-600" />
              <a href="https://www.google.com/maps/place/Jamshed+Rd,+Karachi/@24.8836973,67.0471994,19z/data=!4m15!1m8!3m7!1s0x3eb33e595bbc701f:0xf8901035f404169!2sJamshed+Rd,+Karachi!3b1!8m2!3d24.8835416!4d67.0470572!16s%2Fg%2F1232njr9t!3m5!1s0x3eb33e595bbc701f:0xf8901035f404169!8m2!3d24.8835416!4d67.0470572!16s%2Fg%2F1232njr9t?entry=ttu&g_ep=EgoyMDI1MDkzMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
                Location: Jamshaid Road No 1, Karachi, Pakistan
              </a>
            </p>

            <iframe
              title="Taallumul Quran Academy - Jamshed Rd"
              src="https://www.google.com/maps?q=24.8835416,67.0470572&z=19&output=embed"
              width="100%"
              height="250"
              loading="lazy"
              className="rounded-lg border-0"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
