"use client";
import { motion } from "framer-motion";
import { Clock, Smartphone, Share2, Music, MapPin, Gift, Globe, Heart, Camera, Video, MessageSquare, Layers } from "lucide-react";

const features = [
  {
    title: "Countdown Timer",
    description: "Never miss your big day! Keep track with an elegant countdown.",
    icon: <Clock className="w-6 h-6" />,
  },
  {
    title: "Modern & Responsive Design",
    description: "Say goodbye to boring invites. Make it wow on any device!",
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    title: "WhatsApp Broadcast",
    description: "Share your wedding invite instantly via WhatsApp broadcast.",
    icon: <Share2 className="w-6 h-6" />,
  },
  {
    title: "Photo Gallery",
    description: "Showcase your sweetest moments in a beautiful photo slideshow.",
    icon: <Camera className="w-6 h-6" />,
  },
  {
    title: "Live Streaming",
    description: "Let your loved ones join virtually from anywhere in the world.",
    icon: <Video className="w-6 h-6" />,
  },
  {
    title: "Background Music",
    description: "Set the mood with your favorite romantic background music.",
    icon: <Music className="w-6 h-6" />,
  },
  {
    title: "Digital Envelope",
    description: "Guests can easily send digital gifts securely and quickly.",
    icon: <Gift className="w-6 h-6" />,
  },
  {
    title: "Multi-language Support",
    description: "Switch between English and Bahasa for a personalized experience.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "Love Stories",
    description: "Tell your love journey with a beautiful story section.",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: "Location Navigation",
    description: "Complete maps so your guests never get lost on the way.",
    icon: <MapPin className="w-6 h-6" />,
  },
  {
    title: "Guest Book & Wishes",
    description: "Let guests share their heartfelt messages and blessings.",
    icon: <MessageSquare className="w-6 h-6" />,
  },
  {
    title: "Unlimited Versions",
    description: "Need updates? No problem! Create as many versions as you want.",
    icon: <Layers className="w-6 h-6" />,
  },
];

export default function FeaturesSection({ darkMode }) {
  return (
    <section
      className={`py-20 transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100"
          : "bg-gradient-to-br from-[#f8f5ff] to-white text-[#1f0057]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Best Feature
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl shadow-md ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full mb-4"
                style={{
                  backgroundColor: darkMode ? "#b1378133" : "#f1e6f7",
                }}
              >
                <div className="text-[#b13781]">{feature.icon}</div>
              </div>
              <h3
                className={`text-lg font-semibold mb-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
