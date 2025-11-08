"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end space-y-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip Animation */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="mb-1 bg-gray-800 text-white text-sm px-3 py-1 rounded-full shadow-md"
        >
          Chat on WhatsApp
        </motion.div>
      )}

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/923142969508"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-10 h-10"
        />
      </motion.a>
    </div>
  );
}
