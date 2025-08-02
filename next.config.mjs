/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'images.unsplash.com', // For Unsplash images
          'plus.unsplash.com',   // Sometimes used by Unsplash
          'source.unsplash.com'  // Alternative Unsplash domain
        ],
    },
};

export default nextConfig;
