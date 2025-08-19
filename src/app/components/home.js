"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Komponen animasi mengetik
const TypingText = ({ text, darkMode }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const lines = text.split("\n");

  useEffect(() => {
    if (currentLine < lines.length) {
      if (currentIndex < lines[currentLine].length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + lines[currentLine][currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, 75); 

        return () => clearTimeout(timeout);
      } else if (currentLine < lines.length - 1) {
        const lineBreakTimeout = setTimeout(() => {
          setDisplayedText((prev) => prev + "\n");
          setCurrentLine((prev) => prev + 1);
          setCurrentIndex(0);
        }, 150);

        return () => clearTimeout(lineBreakTimeout);
      }
    }
  }, [currentIndex, currentLine, lines]);

  return (
    <pre
      className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center whitespace-pre-line ${
        darkMode
          ? "text-gray-100"
          : "bg-gradient-to-r from-[#1f0057] to-[#b13781] bg-clip-text text-transparent"
      }`}
    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </pre>
  );
};

export default function Home({ darkMode }) {
  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
      }`}
    >
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

      {/* Content */}
      <div className="text-center">
        <TypingText
          text={
            "Turn Your Love Story Into a Beautiful Digital Experience\nYour Guests Will Never Forget"
          }
          darkMode={darkMode}
        />

        <p
          className={`mt-6 text-base sm:text-lg md:text-xl max-w-xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
         &quot;From RSVP to love story, we design wedding websites that reflect your style fast, elegant, and stress-free.&quot;
        </p>
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow:
              "0 10px 25px -5px rgba(59, 130, 246, 0.5), 0 10px 10px -5px rgba(59, 130, 246, 0.1)",
          }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 relative overflow-hidden bg-gradient-to-r from-[#1f0057] to-[#b13781] text-white font-medium px-8 py-3.5 rounded-full shadow-lg transition-all duration-300 group flex items-center gap-2 mx-auto"
        >
          <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0" />
          <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
            Free Consultation
          </span>
        </motion.button>
      </div>
    </div>
  );
}
