"use client";
import Image from "next/image";
import { Expand, Repeat, Smile, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    title: "Skalabilitas",
    description:
      "Platform kami mendukung pertumbuhan bisnis Anda tanpa hambatan, dari kecil hingga besar.",
    icon: <Expand className="w-6 h-6" />,
    color: "#0b0d5eff",
  },
  {
    title: "Fleksibilitas",
    description:
      "Solusi kami dapat disesuaikan dengan kebutuhan unik setiap bisnis di berbagai industri.",
    icon: <Repeat className="w-6 h-6" />,
    color: "#770c4eff",
  },
  {
    title: "Kemudahan",
    description:
      "Desain antarmuka intuitif dan user-friendly memberikan pengalaman yang menyenangkan bagi pengguna.",
    icon: <Smile className="w-6 h-6" />,
    color: "#b538ceff",
  },
];

export default function WhyChoosingUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-br from-[#f8f5ff] to-white text-[#1f0057]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1f0057] text-white text-sm font-medium mb-6">
              <span>Mengapa memilih kami</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Kami Bukan Sekadar Penyedia Jasa, &nbsp;
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1f0057] to-[#b13781]">
                Kami Mitra yang Siap Mengubah Arah Bisnis Anda
              </span>
            </h2>

            <p className="text-gray-600 mb-10 max-w-xl leading-relaxed">
              Kami menyediakan platform yang siap mendukung pertumbuhan Anda
              dengan fleksibilitas tinggi dan kemudahan penggunaan, memungkinkan
              Anda fokus pada hal yang paling penting — bisnis Anda.
            </p>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-5 group"
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                  whileHover={{ x: 10 }}
                >
                  {/* Icon with animated background */}
                  <div
                    className="relative flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <div
                      className="text-white p-2 rounded-lg"
                      style={{ backgroundColor: feature.color }}
                    >
                      {feature.icon}
                    </div>

                    {/* Animated dot */}
                    <motion.div
                      className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                      style={{ backgroundColor: feature.color }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [1, 0.7, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  {/* Text content */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative w-full h-[500px] rounded-3xl overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f0057]/80 to-transparent z-10"></div>
            <div className="absolute top-8 left-8 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl z-0"></div>
            <div className="absolute bottom-8 right-8 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl z-0"></div>
            <Image
              src="/assets/scale.jpg"
              alt="Digital Solutions"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
