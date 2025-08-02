'use client';
import { useState } from 'react';
import Image from 'next/image';

const ProjectModal = ({ project, isOpen, onClose, darkMode = false }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!isOpen || !project) return null;

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === project.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? project.images.length - 1 : prev - 1
        );
    };

    // Icon components
    const ChevronLeftIcon = (props) => (
        <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
    );

    const ChevronRightIcon = (props) => (
        <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    );

    const ExternalLinkIcon = (props) => (
        <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
    );

    const CodeIcon = (props) => (
        <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
    );

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <div
                className={`relative rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className={`absolute top-4 right-4 p-2 rounded-full transition-colors z-10 ${darkMode
                            ? 'hover:bg-gray-700 text-gray-300'
                            : 'hover:bg-gray-100 text-gray-500'
                        }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Modal Content */}
                <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Project Image Slider */}
                        <div className="relative">
                            {/* Main Image Container (4:3 Aspect Ratio) */}
                            <div className={`relative w-full pb-[75%] rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'
                                }`}>
                                {project.images?.length > 0 ? (
                                    <div className="absolute inset-0">
                                        <Image
                                            src={project.images[currentImageIndex]}
                                            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            priority={currentImageIndex === 0}
                                        />
                                    </div>
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1f0057]/10 to-[#b13781]/10">
                                        <span className="text-lg font-medium text-white">No Image Available</span>
                                    </div>
                                )}

                                {/* Navigation Arrows */}
                                {project.images?.length > 1 && (
                                    <>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                prevImage();
                                            }}
                                            className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-md transition-all z-10 ${darkMode
                                                    ? 'bg-gray-600/80 hover:bg-gray-600 text-gray-200'
                                                    : 'bg-white/80 hover:bg-white text-gray-700'
                                                }`}
                                        >
                                            <ChevronLeftIcon className="h-5 w-5" />
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                nextImage();
                                            }}
                                            className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-md transition-all z-10 ${darkMode
                                                    ? 'bg-gray-600/80 hover:bg-gray-600 text-gray-200'
                                                    : 'bg-white/80 hover:bg-white text-gray-700'
                                                }`}
                                        >
                                            <ChevronRightIcon className="h-5 w-5" />
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* Dots Indicator */}
                            {project.images?.length > 1 && (
                                <div className="flex justify-center gap-2 mt-4">
                                    {project.images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setCurrentImageIndex(index);
                                            }}
                                            className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === index
                                                    ? 'bg-[#b13781] w-4'
                                                    : darkMode
                                                        ? 'bg-gray-600 hover:bg-gray-500'
                                                        : 'bg-gray-300 hover:bg-gray-400'
                                                }`}
                                            aria-label={`Go to image ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            )}

                            {/* Thumbnail Gallery */}
                            {project.images?.length > 1 && (
                                <div className="mt-6">
                                    <h4 className={`text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                                        }`}>
                                        More Screenshots:
                                    </h4>
                                    <div className="flex gap-3 overflow-x-auto py-2 px-1">
                                        {project.images.map((image, index) => (
                                            <button
                                                key={index}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setCurrentImageIndex(index);
                                                }}
                                                className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition-all ${currentImageIndex === index
                                                        ? 'border-[#b13781]'
                                                        : darkMode
                                                            ? 'border-gray-600 hover:border-gray-500'
                                                            : 'border-transparent hover:border-gray-300'
                                                    }`}
                                            >
                                                <Image
                                                    src={image}
                                                    alt={`Thumbnail ${index + 1}`}
                                                    width={80}
                                                    height={60}
                                                    className="object-cover w-full h-full"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Project Details */}
                        <div>
                            <h3 className={`text-xl font-bold ${darkMode
                                    ? 'text-white'
                                    : 'bg-gradient-to-r from-[#1f0057] to-[#b13781] bg-clip-text text-transparent'
                                }`}>
                                {project.title}
                            </h3>

                            <div className="flex flex-wrap gap-4 mb-4">
                                <div>
                                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                        <span className="font-semibold">Client:</span> {project.client}
                                    </p>
                                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                        <span className="font-semibold">Year:</span> {project.year || '2023'}
                                    </p>
                                </div>
                                <div>
                                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                        <span className="font-semibold">Category:</span> {project.category || 'Web Application'}
                                    </p>
                                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                        <span className="font-semibold">Status:</span> {project.status || 'Completed'}
                                    </p>
                                </div>
                            </div>

                            <div className="my-4">
                                <h4 className={`font-semibold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-800'
                                    }`}>
                                    Project Overview
                                </h4>
                                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                    {project.description}
                                </p>
                            </div>

                            <div className="my-4">
                                <h4 className={`font-semibold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-800'
                                    }`}>
                                    Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${darkMode
                                                    ? 'bg-gray-700 text-gray-200'
                                                    : 'bg-gradient-to-r from-[#1f0057]/10 to-[#b13781]/10 text-gray-800'
                                                }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {project.additionalDetails && (
                                <div className="my-4">
                                    <h4 className={`font-semibold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-800'
                                        }`}>
                                        Key Features
                                    </h4>
                                    <ul className={`list-disc pl-5 space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                                        }`}>
                                        {project.additionalDetails.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {project.challenges && (
                                <div className="my-4">
                                    <h4 className={`font-semibold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-800'
                                        }`}>
                                        Challenges & Solutions
                                    </h4>
                                    <ul className={`list-disc pl-5 space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                                        }`}>
                                        {project.challenges.map((challenge, i) => (
                                            <li key={i}>{challenge}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="mt-6 flex flex-wrap gap-4">
                                <a
                                    href={project.liveUrl || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2 bg-gradient-to-r from-[#1f0057] to-[#b13781] text-white rounded-lg hover:opacity-90 transition-all flex items-center gap-2"
                                >
                                    <span>Live Demo</span>
                                    <ExternalLinkIcon className="h-4 w-4" />
                                </a>
                                <a
                                    href={project.codeUrl || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`px-6 py-2 border rounded-lg hover:bg-opacity-10 transition-all flex items-center gap-2 ${darkMode
                                            ? 'border-white text-white hover:bg-white hover:text-[#1f0057]'
                                            : 'border-[#1f0057] text-[#1f0057] hover:bg-[#1f0057] hover:text-white'
                                        }`}
                                >
                                    <span>View Code</span>
                                    <CodeIcon className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;