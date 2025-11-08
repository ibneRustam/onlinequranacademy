"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip Animation */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 20, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-2 bg-gradient-to-r from-[#c6a75b] to-[#e6c875] text-gray-900 text-sm font-semibold px-4 py-2 rounded-full shadow-lg border border-white/30"
          >
            Chat on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/923142969508"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full p-3 shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300"
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-12 h-12"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      </motion.a>
    </div>
  );
}
