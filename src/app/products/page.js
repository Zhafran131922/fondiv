"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import { products } from "./product";

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
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#1f0057] to-[#b13781]">
              Exclusive Products
            </h1>
            <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Discover our premium collection of carefully crafted products
              designed for excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg 
                  transition-all duration-300 hover:shadow-xl hover:-translate-y-2
                  ${
                    darkMode
                      ? "border border-gray-700"
                      : "border border-gray-100"
                  }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 h-12 overflow-hidden">
                    {product.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-2xl font-bold">{product.price}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                      {product.oldPrice}
                    </span>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={product.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-100 dark:bg-gray-700 text-center py-3 rounded-lg 
      hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium"
                    >
                      Live Demo
                    </a>
                    <a
                      href={product.buyNowLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-[#1f0057] to-[#b13781] text-white text-center py-3 rounded-lg 
      hover:opacity-90 transition-all font-medium shadow-lg hover:shadow-xl"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
