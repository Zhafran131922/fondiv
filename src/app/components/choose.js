"use client";
import Image from "next/image";
import { Expand, Repeat, Smile } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Skalabilitas",
    description: "Platform kami mendukung pertumbuhan bisnis Anda tanpa hambatan, dari kecil hingga besar.",
    icon: <Expand className="w-6 h-6" />,
    color: "#0b0d5eff",
  },
  {
    title: "Fleksibilitas",
    description: "Solusi kami dapat disesuaikan dengan kebutuhan unik setiap bisnis di berbagai industri.",
    icon: <Repeat className="w-6 h-6" />,
    color: "#770c4eff",
  },
  {
    title: "Kemudahan",
    description: "Desain antarmuka intuitif dan user-friendly memberikan pengalaman yang menyenangkan bagi pengguna.",
    icon: <Smile className="w-6 h-6" />,
    color: "#b538ceff",
  },
];

export default function WhyChoosingUs({ darkMode }) {
  return (
    <section className={`py-20 transition-colors duration-300 ${
      darkMode 
        ? "bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100" 
        : "bg-gradient-to-br from-[#f8f5ff] to-white text-[#1f0057]"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <div>
            <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium mb-6 ${
              darkMode 
                ? "bg-[#b13781] text-white" 
                : "bg-[#1f0057] text-white"
            }`}>
              <span>Mengapa memilih kami</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl font-bold mb-8 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}>
              Kami Bukan Sekadar Penyedia Jasa, &nbsp;
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1f0057] to-[#b13781] dark:from-fuchsia-600 dark:to-[#b13781]">
                Kami Mitra yang Siap Mengubah Arah Bisnis Anda
              </span>
            </h2>

            <p className={`mb-10 max-w-xl leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              Kami menyediakan platform yang siap mendukung pertumbuhan Anda
              dengan fleksibilitas tinggi dan kemudahan penggunaan, memungkinkan
              Anda fokus pada hal yang paling penting — bisnis Anda.
            </p>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-5">
                  {/* Icon with background */}
                  <div
                    className="relative flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ 
                      backgroundColor: darkMode 
                        ? `${feature.color}20` 
                        : `${feature.color}20`
                    }}
                  >
                    <div
                      className="text-white p-2 rounded-lg"
                      style={{ backgroundColor: feature.color }}
                    >
                      {feature.icon}
                    </div>
                  </div>

                  {/* Text content */}
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">
            <div className={`absolute inset-0 z-10 ${
              darkMode 
                ? "bg-gradient-to-t from-gray-900/80 to-transparent" 
                : "bg-gradient-to-t from-[#1f0057]/80 to-transparent"
            }`}></div>
            <div className={`absolute top-8 left-8 w-32 h-32 rounded-full blur-2xl z-0 ${
              darkMode ? "bg-purple-500/10" : "bg-purple-500/20"
            }`}></div>
            <div className={`absolute bottom-8 right-8 w-40 h-40 rounded-full blur-2xl z-0 ${
              darkMode ? "bg-indigo-500/10" : "bg-indigo-500/20"
            }`}></div>
            <Image
              src="/assets/scale.jpg"
              alt="Digital Solutions"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}