"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ContactPage: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center py-16">
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
          Contact Us
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Contact Form */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="bg-gray-900/50 backdrop-blur-md p-8 rounded-lg border border-blue-500/30 shadow-2xl">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-gray-800/50 border border-blue-500/50 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 bg-gray-800/50 border border-blue-500/50 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-3 bg-gray-800/50 border border-blue-500/50 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    rows={4}
                    placeholder="Your Message"
                  />
                </div>
                <motion.button
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-400 hover:to-purple-400 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Contact Info and Image */}
          <motion.div
            className="lg:w-1/2 w-full flex flex-col items-center gap-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            {/* Contact Information */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-4">
                Reach Out
              </h3>
              <p className="text-gray-300 mb-2">
                <span className="font-bold">Email:</span> contact@antrixinnovations.com
              </p>
              <p className="text-gray-300 mb-2">
                <span className="font-bold">Phone:</span> +1 (555) 123-4567
              </p>
              <p className="text-gray-300">
                <span className="font-bold">Address:</span> 123 Space Lane, Orbital City, Earth
              </p>
            </div>

            {/* Space Graphic */}
            <motion.div
              className="relative w-64 h-64 rounded-full overflow-hidden bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-md border border-blue-500/30 shadow-2xl"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.7)' }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/image/logo.png" // Placeholder for planet or spaceship
                alt="Space Graphic"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              {/* Glowing Effect */}
              <div className="absolute inset-0 border-2 border-blue-500/50 rounded-full animate-pulse opacity-50" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* HUD Overlay (Futuristic Touch) */}
      <div className="absolute top-10 right-10 text-blue-400 text-sm opacity-50 hidden lg:block">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />
          <span>Status: Online</span>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;