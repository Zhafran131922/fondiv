'use client';
import { useState, useEffect } from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProjectModal from '../components/projectModal';
import Image from 'next/image';
import { projects } from "./portfolioData";

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Check for user's preferred color scheme
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(isDark);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <section className="text-center py-10">
        <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Portfolio</h2>
        <p className={darkMode ? "text-gray-400" : "text-gray-600"}>Web Developer | UI Designer</p>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="relative shadow-xl overflow-hidden rounded-2xl group transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Glass Card - Adjusted for dark mode */}
              <div className={`relative ${darkMode ? 'bg-gray-800/70 border-gray-700' : 'bg-white/50 border-white/30'} backdrop-blur-lg rounded-2xl p-6 h-full border shadow-lg hover:shadow-xl transition-all duration-500`}>
                {/* Project Image */}
                <div className={`h-48 ${darkMode ? 'bg-gray-700/30' : 'bg-white/30'} rounded-xl mb-4 overflow-hidden shadow-inner relative`}>
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                {/* Project Content */}
                <div className={darkMode ? "text-gray-100" : "text-gray-800"}>
                  {/* Gradient Title (Purple Theme - works in both modes) */}
                  <h3 className={`text-xl font-bold ${
                    darkMode 
                      ? 'text-white' 
                      : 'bg-gradient-to-r from-[#1f0057] to-[#b13781] bg-clip-text text-transparent'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Client: {project.client}</p>
                  <p className={darkMode ? "text-gray-300 mb-4" : "text-gray-700 mb-4"}>{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm shadow-sm ${
                          darkMode 
                            ? 'bg-gradient-to-r from-[#1f0057]/40 to-[#b13781]/40 text-gray-100' 
                            : 'bg-gradient-to-r from-[#1f0057]/20 to-[#b13781]/20 text-gray-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Detail Button (Purple Gradient - same in both modes) */}
                  <button
                    onClick={() => openModal(project)}
                    className="w-full py-2 bg-gradient-to-r from-[#1f0057] to-[#b13781] text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer darkMode={darkMode} />
      
      {/* Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeModal}
        darkMode={darkMode}
      />
    </div>
  );
}