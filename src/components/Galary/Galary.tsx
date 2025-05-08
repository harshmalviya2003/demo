"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

// Placeholder images (replace with your actual images)
const galleryImages = [
  { src: '/image/galary/1.png', caption: 'Antrix One Launch' },
  { src: '/image/galary/2.png', caption: 'Lunar Exploration' },
  { src: '/image/galary/3.png', caption: 'Orbital Station' },
  { src: '/image/galary/4.png', caption: 'Rocket Assembly' },
  { src: '/image/galary/5.png', caption: 'Deep Space Mission' },
  { src: '/image/galary/6.png', caption: 'Mission Control' },
];

const GalleryPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scrolling effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Transform background opacity for a subtle nebula effect
  const nebulaOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.7]);

  return (
    <section ref={containerRef} className="relative min-h-screen mt-20 bg-black overflow-hidden py-16">
      {/* Starry Background Effect */}
      <div className="absolute inset-0">
        {/* Nebula Gradient Overlay with Parallax */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-transparent"
          style={{ opacity: nebulaOpacity }}
        />
        {/* Animated Stars */}
        <div className="absolute w-2 h-2 bg-blue-300 rounded-full top-10 left-20 animate-pulse" />
        <div className="absolute w-1 h-1 bg-blue-200 rounded-full top-40 left-40 animate-pulse delay-1000" />
        <div className="absolute w-2 h-2 bg-blue-300 rounded-full top-60 right-20 animate-pulse delay-500" />
        <div className="absolute w-1 h-1 bg-blue-200 rounded-full bottom-20 right-40 animate-pulse delay-1500" />
        {/* Floating Particles */}
        <div className="absolute w-3 h-3 bg-blue-400 rounded-full top-20 left-60 animate-float opacity-30" />
        <div className="absolute w-2 h-2 bg-purple-400 rounded-full bottom-40 left-80 animate-float delay-700 opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Gallery
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative w-full h-80 rounded-lg overflow-hidden bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-md border border-blue-500/30 shadow-2xl"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
              whileHover={{ scale: 1.05, rotate: 2, boxShadow: '0 0 30px rgba(59, 130, 246, 0.7)' }}
            >
              <Image
                src={image.src}
                alt={image.caption}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white text-lg font-bold drop-shadow-md">
                {image.caption}
              </div>
              {/* Glowing Effect */}
              <div className="absolute inset-0 border-2 border-blue-500/50 rounded-lg animate-pulse opacity-50" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* HUD Overlay (Futuristic Touch) */}
      <div className="absolute top-10 right-10 text-blue-400 text-sm opacity-50 hidden lg:block">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />
          <span>Images Loaded: {galleryImages.length}</span>
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;