// app/contact/page.tsx
"use client";

import { useEffect, useState } from "react";
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
  const [selectedDial, setSelectedDial] = useState("+92"); 
  const alias: Record<string, string> = {
    USA: "United States",
    UK: "United Kingdom",
    UAE: "United Arab Emirates",
  };

  useEffect(() => {
    const raw = formData.country;
    const key = alias[raw] ?? raw;
    const code = (dialCodes as Record<string, string>)[key] ?? "+92";
    setSelectedDial(code);
  }, [formData.country]);

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
      setStatus("✅ Message sent successfully! We will contact you soon, Insha’Allah.");
     setFormData({ name: "", email: "", country: "", phone: "", message: "" });
    } else {
      setStatus("❌ Failed to send message. Please try again.");
    }
  } catch (err) {
    setStatus("❌ Something went wrong. Please try again later.");
  }
};
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero */}
      <div
        className="relative h-[350px] bg-cover bg-center"
        style={{ backgroundImage: "url('/quran9.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white text-center"
          >
            Contact Us
          </motion.h1>
        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        {/* Left: Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg"
              required
            />

            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg"
              required
            />

            {/* Unified Country + Dial Code + Phone in ONE Row */}
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <label htmlFor="country" className="sr-only">Country</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                  required
                >
                  <option value="">Select Country</option>
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

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="flex-1 p-3 border rounded-lg"
                required
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 border rounded-lg"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
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
  >
    {status}
  </motion.p>
)}

        </div>

        {/* Right: Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-4 text-gray-600">We’d love to hear from you. Reach out through any channel below.</p>

          <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-red-500" />
              <a href="mailto:taallumulquranacademy@gmail.com" className="text-blue-600 hover:underline">
                taallumulquranacademy@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-green-600" />
              <a href="https://wa.me/923142969508" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                WhatsApp Chat
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-blue-800" />
              <a href="tel:+923142969508" className="text-blue-600 hover:underline">
                +92 314 2969508 (Call Now)
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaFacebook className="text-blue-700" />
              <a href="https://www.facebook.com/profile.php?id=61581040517143" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                Facebook
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaLinkedin className="text-blue-700" />
              <a href="https://www.linkedin.com/in/taallum-ul-quran-academy-1a1885386/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaInstagram className="text-pink-600" />
              <a href="https://www.instagram.com/taalumulquran/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                Instagram
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaTwitter className="text-black" />
              <a href="https://x.com/Taallumulquran" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                Twitter (X)
              </a>
            </li>
          </ul>

          <div className="mt-6">
            <p className="flex items-center gap-2 text-gray-800 mb-3">
              <FaMapMarkerAlt className="text-red-600" />
              <a
                href="https://www.google.com/maps/place/Jamshed+Rd,+Karachi/"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:underline"
              >
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
