"use client";
import { useState, useEffect } from "react";
import Navbar from './components/navbar';
import Home from './components/home';
import AboutUs from './components/aboutus';
import Service from './components/service';
import Choose from './components/choose';
import Contact from './components/contact';
import Footer from './components/footer';

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check localStorage first
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode !== null) {
        setDarkMode(savedMode === "true");
      } else {
        // Fallback to system preference
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setDarkMode(isDark);
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
    }`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home darkMode={darkMode} />
      <AboutUs darkMode={darkMode} />
      <Service darkMode={darkMode} />
      <Choose darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}