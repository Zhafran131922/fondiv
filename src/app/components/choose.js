"use client";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Bot,
  Palette,
  PenTool,
  Presentation,
  Search,
  Server,
  Shuffle,
  Rocket,
  Globe,
  Heart,
  Plug,
} from "lucide-react";

const features = [
  {
    title: "Web Development",
    description:
      "Build modern, fast, and secure websites using the latest frameworks and best practices.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "Mobile App Development",
    description:
      "Create responsive, high-performance mobile apps for Android and iOS.",
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    title: "Machine Learning & AI",
    description:
      "Design ML pipelines, model training, and deployment to solve real business problems.",
    icon: <Bot className="w-6 h-6" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Craft user-centered designs, wireframes, and prototypes that convert and delight.",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    title: "Graphic Design",
    description:
      "Visual assets, social media creatives, and marketing materials with consistent branding.",
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    title: "Logo & Branding",
    description:
      "Brand identity systems—logos, color palettes, and guidelines that stand out.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "Presentation / PowerPoint Design",
    description:
      "Clean, persuasive slides that communicate ideas clearly for pitches and events.",
    icon: <Presentation className="w-6 h-6" />,
  },
  {
    title: "SEO Optimization",
    description:
      "On-page SEO, technical audits, and content strategy to improve discoverability.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: "Scalability & Performance",
    description:
      "Optimize speed, caching, and architecture so products scale smoothly.",
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: "Flexibility & Modular Architecture",
    description:
      "Composable, maintainable codebases with reusable components and clear boundaries.",
    icon: <Shuffle className="w-6 h-6" />,
  },
  {
    title: "API Integration & Back-End",
    description:
      "REST/GraphQL APIs, databases, and cloud deployment for reliable systems.",
    icon: <Server className="w-6 h-6" />,
  },
  {
    title: "Wedding Website",
    description:
      "Personalized wedding sites—gallery, RSVP, countdown, and map in one place.",
    icon: <Heart className="w-6 h-6" />,
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
          Capabilities & Services
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
