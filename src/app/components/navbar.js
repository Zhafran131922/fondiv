'use client';
import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaHome, FaBriefcase, FaBox } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/logo.png";
import LogoDark from "../../../public/assets/logo-dark.png";
import { usePathname } from "next/navigation";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const pathname = usePathname();
  const activeTab = pathname === "/" ? "home" : pathname.slice(1);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState("ENG");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === "ENG" ? "IND" : "ENG");
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${darkMode
          ? "bg-gray-900 border-gray-700"
          : "bg-white border-white"
          } ${isScrolled 
            ? "shadow-md py-2"
            : "py-5"
          }`}
      >
        <div className="flex justify-between items-center px-6 max-w-6xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={darkMode ? LogoDark : Logo}
              alt="Foundiv Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <h1 className={`hidden sm:block text-2xl font-bold ${darkMode
              ? 'text-white'
              : 'bg-gradient-to-r from-[#1f0057] to-[#b13781] bg-clip-text text-transparent'
              }`}>
              Fondiv
            </h1>
          </div>

          {/* Menu Desktop */}
          <ul className="hidden md:flex gap-8 text-base font-medium">
            {[
              { name: "Home", icon: <FaHome className="inline mr-2" />, href: "/" },
              { name: "Portofolio", icon: <FaBriefcase className="inline mr-2" />, href: "/portfolio" },
              { name: "Products", icon: <FaBox className="inline mr-2" />, href: "/products" },
            ].map((item) => {
              const isActive = activeTab === item.name.toLowerCase();
              return (
                <Link key={item.name} href={item.href}>
                  <li
                    className={`relative flex items-center cursor-pointer px-3 py-2 group transition-all ${isActive
                      ? darkMode
                        ? "text-white font-semibold"
                        : "text-[#1f0057] font-semibold"
                      : darkMode
                        ? "text-gray-300 hover:text-white" // Inactive dark mode
                        : "text-gray-600 hover:text-gray-900" // Inactive light mode
                      }`}
                  >
                    <span className="inline mr-2">
                      {React.cloneElement(item.icon, {
                        className: isActive
                          ? darkMode
                            ? "text-white" // Icon active dark
                            : "text-[#1f0057]"  // Icon active light
                          : darkMode
                            ? "text-gray-300 group-hover:text-white" // Icon inactive dark
                            : "text-gray-600 group-hover:text-gray-900" // Icon inactive light
                      })}
                    </span>
                    {item.name}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 ${isActive
                      ? "bg-gradient-to-r from-[#1f0057] to-[#b13781] opacity-100 scale-x-100"
                      : "bg-gray-300 dark:bg-gray-600 opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100"
                      } transition-all duration-300`} />
                  </li>
                </Link>
              );
            })}
          </ul>

          {/* Toggle Language & Theme */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <div className="hidden sm:flex">
              <div
                className="relative w-24 h-10 rounded-full cursor-pointer overflow-hidden"
                onClick={toggleLang}
              >
                {/* Track */}
                <div className={`absolute inset-0 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'
                  }`}></div>

                {/* Text Labels */}
                <div className="absolute inset-0 flex items-center justify-between px-2 z-10">
                  <span className={`text-xs font-semibold ${lang === "ENG"
                      ? 'text-white'
                      : darkMode
                        ? 'text-gray-400'
                        : 'text-gray-500'
                    }`}>
                    ENG
                  </span>
                  <span className={`text-xs font-semibold ${lang === "IND"
                      ? 'text-white'
                      : darkMode
                        ? 'text-gray-400'
                        : 'text-gray-500'
                    }`}>
                    IND
                  </span>
                </div>

                {/* Thumb */}
                <div
                  className={`absolute top-1 left-1 w-10 h-8 bg-gradient-to-r from-[#1f0057] to-[#b13781] rounded-full shadow-md transition-all duration-300 ${lang === "IND" ? "translate-x-[56px]" : "translate-x-0"
                    }`}
                ></div>
              </div>
            </div>

            {/* Theme Toggle */}
            <button
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${darkMode
                  ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              onClick={toggleDarkMode}
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            >
              {darkMode ? (
                <FaSun className="transition-transform hover:rotate-12 duration-300" />
              ) : (
                <FaMoon className="transition-transform hover:rotate-12 duration-300" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className={`md:hidden fixed bottom-0 left-0 right-0 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        } border-t z-50 shadow-lg`}>
        <div className="flex justify-around items-center py-1">
          {[
            { label: "Home", icon: <FaHome className="text-lg" />, href: "/" },
            { label: "Portfolio", icon: <FaBriefcase className="text-lg" />, href: "/portfolio" },
            { label: "Products", icon: <FaBox className="text-lg" />, href: "/products" },
          ].map((item) => {
            const isActive = activeTab === item.label.toLowerCase();
            return (
              <Link key={item.label} href={item.href}>
                <button
                  className={`relative flex flex-col items-center justify-center w-16 py-1 rounded-xl transition-all duration-300 group ${isActive
                    ? "text-[#1f0057] dark:text-purple-300"
                    : darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-500 hover:text-gray-700"
                    }`}
                >
                  <div
                    className={`p-2 rounded-full transition-all duration-300 ${isActive
                      ? "bg-gradient-to-r from-[#1f0057] to-[#b13781] text-white scale-110"
                      : darkMode
                        ? "group-hover:bg-gray-700"
                        : "group-hover:bg-gray-100"
                      }`}
                  >
                    {React.cloneElement(item.icon, {
                      className: `text-lg transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-105"
                        }`,
                    })}
                  </div>
                  <span className="text-xs mt-0.5">{item.label}</span>
                  {isActive && (
                    <span className="absolute top-0.5 w-1.5 h-1.5 bg-gradient-to-r from-[#1f0057] to-[#b13781] rounded-full"></span>
                  )}
                </button>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}