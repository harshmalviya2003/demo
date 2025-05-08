"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-gray-300 py-12 overflow-hidden">
      {/* Starry Background Effect */}
      <div className="absolute inset-0">
        {/* Nebula Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-transparent opacity-50" />
        {/* Animated Stars */}
        <div className="absolute w-2 h-2 bg-blue-300 rounded-full top-10 left-20 animate-pulse" />
        <div className="absolute w-1 h-1 bg-blue-200 rounded-full top-20 left-40 animate-pulse delay-1000" />
        <div className="absolute w-2 h-2 bg-blue-300 rounded-full top-16 right-20 animate-pulse delay-500" />
        <div className="absolute w-1 h-1 bg-blue-200 rounded-full bottom-10 right-40 animate-pulse delay-1500" />
        {/* Floating Particles */}
        <div className="absolute w-3 h-3 bg-blue-400 rounded-full top-14 left-60 animate-float opacity-30" />
        <div className="absolute w-2 h-2 bg-purple-400 rounded-full bottom-12 left-80 animate-float delay-700 opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Logo Section */}
          <motion.div
            className="lg:w-1/3 flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 drop-shadow-md">
              AgnHotri Aerospace
            </h2>
            <p className="text-gray-400 text-center lg:text-left">
              Pioneering the future of space exploration with innovative technology.
            </p>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            className="lg:w-1/3 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-4">
              Don’t Miss Any Updates!!
            </h3>
            <div className="flex w-full max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-3 bg-gray-800/50 border border-blue-500/50 rounded-l-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
              <motion.button
                className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-r-lg hover:from-blue-400 hover:to-purple-400 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join
              </motion.button>
            </div>
          </motion.div>

          {/* Links and Social Section */}
          <motion.div
            className="lg:w-1/3 flex flex-col items-center lg:items-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            {/* Navigation Links */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-6 text-center lg:text-right">
              <a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                About
              </a>
              <a href="/gallery" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Gallery
              </a>
              <a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Contact
              </a>
              <a href="/launch" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Launch
              </a>
              <a href="/product" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Product
              </a>
              <a href="/work-with-us" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Work With Us
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#3b82f6' }}
                transition={{ duration: 0.3 }}
              >
                <Instagram className="w-6 h-6 text-gray-300" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#3b82f6' }}
                transition={{ duration: 0.3 }}
              >
                <Linkedin className="w-6 h-6 text-gray-300" />
              </motion.a>
              <motion.a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#3b82f6' }}
                transition={{ duration: 0.3 }}
              >
                <Youtube className="w-6 h-6 text-gray-300" />
              </motion.a>
              <motion.a
                href="mailto:contact@agnhotriaerospace.com"
                whileHover={{ scale: 1.2, color: '#3b82f6' }}
                transition={{ duration: 0.3 }}
              >
                <Mail className="w-6 h-6 text-gray-300" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="mt-12 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />

        {/* Copyright */}
        <div className="text-center mt-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} AgnHotri Aerospace. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;