"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutUs({ darkMode }) {
  // Receive darkMode as prop
  const bulletPoints = [
    "Custom Wedding Website Development",
    "Mobile-Friendly & Responsive Design",
    "Secure & Reliable Hosting",
    "Smooth and Fast Performance",
    "Elegant UI/UX Tailored for Weddings",
    "Complete Support from Start to Finish",
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      className={`w-full py-20 px-4 sm:px-6 lg:px-12 overflow-hidden transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-gray-800 to-gray-900"
          : "bg-gradient-to-br from-[#f8f5ff] to-white"
      }`}
    >
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Kiri - Gambar */}
        <motion.div variants={fadeUp} className="relative group">
          <div
            className={`relative rounded-2xl overflow-hidden shadow-2xl border-8 ${
              darkMode ? "border-gray-700" : "border-white"
            } transform group-hover:rotate-1 transition-transform duration-500`}
          >
            <Image
              src="/assets/about.png"
              alt="Tim Pengembangan Web dan Mobile"
              width={600}
              height={600}
              className="w-full h-auto object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Bola animasi */}
          <motion.div
            className={`absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20 z-0 ${
              darkMode ? "bg-blue-700" : "bg-blue-500"
            }`}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className={`absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-20 z-0 ${
              darkMode ? "bg-indigo-700" : "bg-indigo-500"
            }`}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Badge */}
          <motion.div
            className={`absolute -bottom-6 right-10 rounded-xl shadow-xl p-4 flex items-center gap-3 z-10 ${
              darkMode ? "bg-gray-700" : "bg-white"
            }`}
            variants={fadeUp}
            whileHover={{ scale: 1.1 }}
          >
            <div
              className={`p-3 rounded-lg ${
                darkMode ? "bg-blue-900 bg-opacity-30" : "bg-blue-100"
              }`}
            >
              <div
                className={`font-bold text-xl ${
                  darkMode ? "text-blue-300" : "text-blue-600"
                }`}
              >
                300+
              </div>
            </div>
            <div>
              <p
                className={`font-medium text-sm ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                App Delivered
              </p>
              <p
                className={`text-xs ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Website
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Kanan - Konten Teks */}
        <motion.div variants={fadeUp}>
          <motion.span
            className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 tracking-wide shadow-lg ${
              darkMode ? "bg-[#b13781] text-white" : "bg-[#1f0057] text-white"
            }`}
            variants={fadeUp}
          >
            Our Services
          </motion.span>

          <motion.h2
            className={`text-3xl sm:text-4xl font-bold mb-6 leading-snug ${
              darkMode ? "text-gray-100" : "text-gray-800"
            }`}
            variants={fadeUp}
          >
            Say Goodbye to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1f0057] via-[#832889] to-[#b13781] dark:from-fuchsia-600 dark:to-[#b13781] animate-gradient-x bg-[length:200%_auto] bg-no-repeat">
              Boring Invites
            </span>
            , Hello to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1f0057] via-[#832889] to-[#b13781] dark:from-fuchsia-600 dark:to-[#b13781] animate-gradient-x bg-[length:200%_auto] bg-no-repeat">
              Stunning Wedding Websites
            </span>{" "}
            crafted to impress every guest
          </motion.h2>

          <motion.p
            className={`mb-6 leading-relaxed max-w-2xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
            variants={fadeUp}
          >
            We specialize in crafting elegant wedding websites that capture your
            love story. From concept to launch, we deliver a seamless, fast, and
            unforgettable digital experience.
          </motion.p>

          <motion.p
            className={`mb-10 leading-relaxed max-w-2xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
            variants={fadeUp}
          >
            Whether you need a personalized wedding website, a custom RSVP
            system, or an interactive digital invitation our team delivers
            stunning solutions using the latest technology.
          </motion.p>

          {/* Poin-poin layanan */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
            variants={container}
          >
            {bulletPoints.map((point, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3"
                variants={fadeUp}
              >
                <CheckCircle2
                  className={`mt-1 flex-shrink-0 ${
                    darkMode ? "text-green-400" : "text-green-500"
                  }`}
                  size={20}
                />
                <p className={darkMode ? "text-gray-200" : "text-gray-700"}>
                  {point}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
