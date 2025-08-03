"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "./navbar";

// Ikon user
const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 text-blue-500"
  >
    <path
      fillRule="evenodd"
      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
      clipRule="evenodd"
    />
  </svg>
);

// Ikon bintang
const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 text-amber-500"
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
      clipRule="evenodd"
    />
  </svg>
);

// Ikon panah untuk animasi
const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
    />
  </svg>
);

// Komponen untuk animasi mengetik
const TypingText = ({ text, darkMode }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 75); // Kecepatan mengetik

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <motion.h2
      className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.6 }}
    >
      <span className="bg-gradient-to-r from-[#1f0057] to-[#b13781] dark:from-fuchsia-600 dark:to-[#b13781] bg-clip-text text-transparent">
        {displayedText}
      </span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </motion.h2>
  );
};

export default function Home({ darkMode }) {
  const headingText = "Bisnis Anda Muncul Pertama Saat Mereka Googling";

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
    }`}
    >
      <Navbar darkMode={darkMode} />
      
      <section className={`flex items-center justify-center min-h-[calc(100vh-80px)] text-center px-4 sm:px-6 py-12 ${
        darkMode 
          ? "bg-gray-900" 
          : "bg-gradient-to-b from-gray-50 to-white"
      } overflow-hidden`}>
        
        <div className="w-full max-w-7xl mx-auto">
          {/* Background elements */}
          <motion.div
            className="absolute inset-0 -z-10 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {darkMode ? (
              <>
                <div className="absolute top-10 left-10 w-64 h-64 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
              </>
            ) : (
              <>
                <div className="absolute top-10 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
              </>
            )}
          </motion.div>

          {/* Content container - centered */}
          <div className="flex flex-col items-center justify-center w-full h-full">
            {/* Heading with typing animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-3xl mb-8 px-4"
            >
              <TypingText text={headingText} darkMode={darkMode} />

              <motion.p
                className={`text-base sm:text-lg md:text-xl mx-auto ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Kami bantu Anda tampil di halaman pertama lewat website yang
                cepat, elegan, dan SEO-friendly.
              </motion.p>
            </motion.div>

            {/* CTA & Arrow animation */}
            <motion.div
              className="flex flex-col items-center mb-10 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 10px 25px -5px rgba(59, 130, 246, 0.5), 0 10px 10px -5px rgba(59, 130, 246, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden bg-gradient-to-r from-[#1f0057] to-[#b13781] text-white font-medium px-8 py-3.5 rounded-full shadow-lg transition-all duration-300 group flex items-center gap-2"
              >
                <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0" />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  Konsultasi Gratis
                </span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative z-10"
                >
                  <ArrowIcon />
                </motion.div>
              </motion.button>

              <motion.div
                className={`mt-4 flex items-center gap-2 text-sm flex-wrap justify-center ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <span>Tidak perlu login</span>
                <div className={`w-1 h-1 rounded-full ${
                  darkMode ? "bg-gray-600" : "bg-gray-400"
                }`}></div>
                <span>Bisa diakses dari semua perangkat</span>
              </motion.div>
            </motion.div>     
          </div>
        </div>
      </section>
    </div>
  );
}