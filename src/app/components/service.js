"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "Step 1: Choose Your Design",
    description:
      "Pick your favorite wedding website design from our stunning collection, or request a custom theme tailored to your love story.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Step 2: Chat With Us",
    description: "Send your details via WhatsApp—your names, wedding date, venue, and any special requests. Our team will assist you immediately.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
      </svg>
    ),
  },
  {
    title: "Step 3: Pay After It's Ready",
    description: "We’ll build your wedding website first. Once everything looks perfect and you approve it, then you make the payment—zero risk, total trust!",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v7.5m0 0L9 12m3 3.75L15 12m-9.75 6.75h13.5A2.25 2.25 0 0021 16.5v-9a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

export default function HowToOrder({ darkMode }) {
  return (
    <section className={`w-full py-20 px-4 sm:px-8 transition-colors duration-300 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <motion.span
            className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 ${darkMode ? "bg-[#b13781] text-white" : "bg-[#1f0057] text-white"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            How to Order
          </motion.span>
          <motion.h2
            className={`text-3xl sm:text-4xl font-bold mb-6 max-w-3xl mx-auto ${darkMode ? "text-white" : "text-gray-900"}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Just 3 Simple Steps to Your&nbsp;
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1f0057] to-[#b13781] dark:from-fuchsia-700 dark:to-[#b13781]">
              Perfect Wedding Website
            </span>
          </motion.h2>
          <motion.p
            className={`text-lg max-w-2xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            No hassle, no stress—just follow these steps and let us handle the rest.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, darkMode }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const delay = index * 0.15;

  return (
    <motion.div ref={ref} className="h-full" initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      <motion.div
        className={`h-full rounded-xl shadow-md overflow-hidden group border transition-all duration-300 relative ${darkMode ? "bg-gray-800 border-gray-700 hover:border-gray-600" : "bg-white border-gray-100 hover:border-gray-200"}`}
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 ${darkMode ? "from-gray-800 to-gray-700" : "from-white to-gray-50"}`}></div>
        <div className="p-7 h-full flex flex-col relative z-10">
          {/* Icon */}
          <div className="mb-5">
            <motion.div className={`w-14 h-14 rounded-lg flex items-center justify-center text-white group-hover:from-[#280070] group-hover:to-[#c1408a] transition-all duration-300 ${darkMode ? "bg-[#b13781]" : "bg-[#1f0057]"}`} whileHover={{ rotate: 5, scale: 1.05 }} transition={{ duration: 0.3 }}>
              {service.icon}
            </motion.div>
          </div>
          {/* Title */}
          <h3 className={`text-xl font-bold mb-3 bg-clip-text text-transparent ${darkMode ? "from-fuchsia-500 to-[#b13781]" : "from-[#1f0057] to-[#b13781]"} bg-gradient-to-r`}>
            {service.title}
          </h3>
          {/* Description */}
          <p className={`mb-6 flex-grow ${darkMode ? "text-gray-300" : "text-gray-600"}`}>{service.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
