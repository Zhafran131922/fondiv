"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

// MAIN ANIMATION
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ContactUs({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert("Your message has been sent! We’ll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className={`py-20 px-4 overflow-hidden transition-colors duration-300 ${
      darkMode ? "bg-gray-900" : "bg-white"
    }`}>
      <motion.div
        variants={container}
        initial="hidden"
        animate={isClient ? "show" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        {/* Title and Description */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1f0057] to-[#b13781] dark:from-fuchsia-600 dark:to-[#b13781]">
              Contact Us
            </span>
          </h1>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            Let’s create a wedding invitation that everyone will remember.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            variants={fadeLeft} 
            className={`rounded-2xl shadow-xl p-8 md:p-10 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="mb-10">
              <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>
                <div className="w-2 h-8 bg-gradient-to-b from-[#1f0057] to-[#b13781] rounded-full"></div>
                Contact Information
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: <MapPin className="w-6 h-6" />,
                    title: "Location",
                    value: "Semarang, Indonesia",
                  },
                  {
                    icon: <Phone className="w-6 h-6" />,
                    title: "Phone",
                    value: "+62 851-3858-3134",
                  },
                  {
                    icon: <Mail className="w-6 h-6" />,
                    title: "Email",
                    value: "teamfondiv@gmail.com",
                  },
                  {
                    icon: <Clock className="w-6 h-6" />,
                    title: "Business Hours",
                    value: "Mon - Fri, 09:00 AM - 05:00 PM",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-4"
                  >
                    <div className={`p-3 rounded-lg ${
                      darkMode ? "bg-indigo-900 text-indigo-300" : "bg-indigo-100 text-indigo-600"
                    }`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className={`font-semibold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}>
                        {item.title}
                      </h3>
                      <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>
                <div className="w-2 h-8 bg-gradient-to-b from-[#1f0057] to-[#b13781] rounded-full"></div>
                Follow Us
              </h2>

              <div className="flex gap-4">
                {[
                  // {
                  //   icon: <Facebook className="w-6 h-6" />,
                  //   color: "bg-blue-600",
                  // },
                  // {
                  //   icon: <Twitter className="w-6 h-6" />,
                  //   color: "bg-sky-400",
                  // },
                  {
                    icon: <Instagram className="w-6 h-6" />,
                    color: "bg-gradient-to-r from-amber-500 to-fuchsia-600",
                  },
                  // {
                  //   icon: <Linkedin className="w-6 h-6" />,
                  //   color: "bg-blue-700",
                  // },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    className={`${social.color} text-white p-3 rounded-full`}
                    variants={fadeInUp}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={fadeRight} 
            className="bg-gradient-to-br from-[#1f0057] to-[#b13781] rounded-2xl shadow-xl p-8 md:p-10"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                {
                  id: "name",
                  label: "Name",
                  type: "text",
                  placeholder: "Enter your name",
                },
                {
                  id: "email",
                  label: "Email",
                  type: "email",
                  placeholder: "Enter your email",
                },
                {
                  id: "subject",
                  label: "Subject",
                  type: "text",
                  placeholder: "Enter the subject",
                },
              ].map((input, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <label htmlFor={input.id} className="block text-sm font-medium text-indigo-100 mb-2">
                    {input.label}
                  </label>
                  <div className="relative">
                    <input
                      type={input.type}
                      id={input.id}
                      name={input.id}
                      value={formData[input.id]}
                      onChange={handleChange}
                      placeholder={input.placeholder}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl py-4 px-5 text-white placeholder:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#1f0057] to-[#b13781] border-2 border-white"></div>
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div variants={fadeInUp}>
                <label htmlFor="message" className="block text-sm font-medium text-indigo-100 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl py-4 px-5 text-white placeholder:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-3 ${
                  isSubmitting
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-white to-indigo-100 text-[#1f0057] hover:shadow-xl"
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                variants={fadeInUp}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#1f0057]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
