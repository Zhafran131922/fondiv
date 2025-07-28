'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function AboutUs() {
  const bulletPoints = [
    "Pengembangan Web Kustom",
    "Solusi Aplikasi Mobile",
    "Arsitektur yang Aman & Skalabel",
    "Proses Pengembangan Agile",
    "Desain UI/UX yang Unggul",
    "Dukungan Proyek Menyeluruh"
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section className="bg-gradient-to-br from-[#f8f5ff] to-white w-full py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Kiri - Gambar */}
        <motion.div variants={fadeUp} className="relative group">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white transform group-hover:rotate-1 transition-transform duration-500">
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
            className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-20 z-0"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-500 rounded-full opacity-20 z-0"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Badge */}
          <motion.div
            className="absolute -bottom-6 right-10 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 z-10"
            variants={fadeUp}
            whileHover={{ scale: 1.1 }}
          >
            <div className="bg-blue-100 p-3 rounded-lg">
              <div className="text-blue-600 font-bold text-xl">300+</div>
            </div>
            <div>
              <p className="font-medium text-sm">Aplikasi Tersampaikan</p>
              <p className="text-gray-500 text-xs">Web & Mobile</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Kanan - Konten Teks */}
        <motion.div variants={fadeUp}>
          <motion.span
            className="inline-block bg-[#1f0057] text-white px-4 py-1 rounded-full text-sm font-medium mb-4 tracking-wide shadow-lg"
            variants={fadeUp}
          >
            Tentang Layanan Kami
          </motion.span>

          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800 leading-snug"
            variants={fadeUp}
          >
            Membangun <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1f0057] via-[#832889] to-[#b13781] animate-gradient-x bg-[length:200%_auto] bg-no-repeat">Aplikasi Web & Mobile Modern</span> untuk Mendukung Bisnis Anda
          </motion.h2>

          <motion.p
            className="text-gray-600 mb-6 leading-relaxed max-w-2xl"
            variants={fadeUp}
          >
            Kami ahli dalam mengembangkan website dan aplikasi mobile berkinerja tinggi yang disesuaikan dengan kebutuhan bisnis Anda. Mulai dari strategi hingga peluncuran, tim kami memastikan pengalaman digital yang skalabel, aman, dan menarik.
          </motion.p>

          <motion.p
            className="text-gray-600 mb-10 leading-relaxed max-w-2xl"
            variants={fadeUp}
          >
            Apakah Anda membutuhkan platform perusahaan, CMS kustom, atau aplikasi yang menonjol di App Store—kami siap membantu dengan metodologi terbukti dan teknologi terkini.
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
                <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
