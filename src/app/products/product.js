"use client";
import Image from "next/image";

export default function ProductCard({ imageUrl, title, description, demoLink, buyLink }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-52 w-full">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>
      <div className="p-4 flex flex-col h-56 justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{description}</p>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-indigo-700 transition"
          >
            Live Demo
          </a>
          <a
            href={buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 rounded-lg text-sm font-medium hover:from-green-600 hover:to-emerald-700 transition"
          >
            Buy
          </a>
        </div>
      </div>
    </div>
  );
}
