"use client";
import {  useState, useEffect } from "react";
import Navbar from "../components/navbar";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(isDark);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <section className="text-center py-10">
        <h2 className="text-3xl font-bold">Products</h2>
        <p className="text-gray-600">Web Developer | UI Designer</p>
      </section>
    </div>
  );
}
