"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProductSection: React.FC = () => {
  return (
    <section className="relative py-16 bg-black overflow-hidden">
      {/* Starry Background Effect */}
      <div className="absolute inset-0">
        {/* Nebula Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-transparent opacity-50" />
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
          Product
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Section */}
          <motion.div
            className="lg:w-1/2 space-y-16"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {/* RCS Section */}
            <div className="relative group">
              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-4 flex items-center transition-all duration-300 group-hover:from-blue-300 group-hover:to-blue-500">
                RCS
                <span className="ml-4 h-px w-24 bg-gradient-to-r from-blue-500 to-transparent" />
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                The reaction control system will guide the rocket from space to the desired landing location using a closed-loop algorithm. This system continuously adjusts the rocket’s trajectory by comparing the actual position to the desired path and making real-time corrections.
              </p>
              {/* Animated Dashed Line */}
              <motion.div
                className="absolute -right-24 top-4 w-48 h-px border border-dashed border-blue-500 hidden lg:block"
                initial={{ width: 0 }}
                animate={{ width: 192 }}
                transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
              >
                <div className="absolute right-0 w-2 h-2 bg-blue-500 rounded-full animate-ping" />
              </motion.div>
            </div>

            {/* Turbine System Section */}
            <div className="relative group">
              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-4 flex items-center transition-all duration-300 group-hover:from-blue-300 group-hover:to-blue-500">
                Electrically Powered Turbine System
                <span className="ml-4 h-px w-24 bg-gradient-to-r from-blue-500 to-transparent" />
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                The electrically powered turbine system, which uses a battery-operated BLDC motor, will provide precise control over the fuel flow to the engine, producing controlled thrust for a controlled landing.
              </p>
              {/* Animated Dashed Line */}
              <motion.div
                className="absolute -right-24 top-4 w-48 h-px border border-dashed border-blue-500 hidden lg:block"
                initial={{ width: 0 }}
                animate={{ width: 192 }}
                transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
              >
                <div className="absolute right-0 w-2 h-2 bg-blue-500 rounded-full animate-ping" />
              </motion.div>
            </div>
          </motion.div>

          {/* Rocket Image */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
          >
            <motion.div
              className="relative w-100 h-140 "
            >
              <Image
                src="/image/model.png"
                alt="Rocket"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white text-lg font-bold drop-shadow-md">
                Antrix One
              </div>
              {/* Glowing Effect */}
              <div className="absolute inset-0 border-2 border-blue-500/50 rounded-lg animate-pulse opacity-50" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* HUD Overlay (Optional Futuristic Touch) */}
      <div className="absolute top-10 right-10 text-blue-400 text-sm opacity-50 hidden lg:block">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />
          <span>Status: Operational</span>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;