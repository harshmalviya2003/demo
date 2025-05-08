"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Youtube, Mail, MapPin, Satellite, Rocket, Send } from 'lucide-react';
import Image from 'next/image';

const ContactPage: React.FC = () => {
  const stars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 3 + 1}px`,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 5
  }));

  const floatingElements = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 20 + 10}px`,
    delay: Math.random() * 5,
    duration: Math.random() * 15 + 10,
    opacity: Math.random() * 0.3 + 0.1,
    color: `rgba(${Math.floor(Math.random() * 56 + 100)}, ${Math.floor(Math.random() * 56 + 100)}, ${Math.floor(Math.random() * 156 + 100)}, 0.5)`
  }));

  return (
    <section className="relative mt-20 min-h-screen bg-black overflow-hidden flex items-center py-16">
      {/* Advanced Starfield Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Nebula Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-black/80" />
        
        {/* Animated Stars */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Floating Space Elements */}
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full blur-sm"
            style={{
              top: element.top,
              left: element.left,
              width: element.size,
              height: element.size,
              backgroundColor: element.color,
              opacity: element.opacity,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Pulsing Grid Effect */}
        <div className="absolute inset-0 opacity-10">
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="rgba(100, 200, 255, 0.2)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Animated Title with Space Effect */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Contact Us
          </motion.h2>
          <motion.p 
            className="text-lg text-blue-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Reach across the cosmos to connect with our team. We&apos;re always listening on all frequencies.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Contact Form - Holographic Panel */}
          <motion.div
            className="lg:w-1/3 w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="relative bg-gray-900/30 backdrop-blur-lg p-8 rounded-xl border border-blue-500/40 shadow-2xl overflow-hidden">
              {/* Holographic Effect */}
              <div className="absolute -top-1 -left-1 w-20 h-20 bg-blue-500 rounded-full filter blur-3xl opacity-20" />
              <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-purple-500 rounded-full filter blur-3xl opacity-20" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <Satellite className="w-8 h-8 text-blue-400" />
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    Transmission Panel
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="name" className="block text-blue-300 mb-2 font-medium">
                      <span className="flex items-center gap-1">
                        <span className="text-blue-500">▸</span> Your Designation
                      </span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 bg-gray-800/70 border border-blue-500/30 rounded-lg text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 placeholder-gray-500"
                      placeholder="Commander Name"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-blue-300 mb-2 font-medium">
                      <span className="flex items-center gap-1">
                        <span className="text-blue-500">▸</span> Frequency Channel
                      </span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 bg-gray-800/70 border border-blue-500/30 rounded-lg text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 placeholder-gray-500"
                      placeholder="your@signal.space"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label htmlFor="message" className="block text-blue-300 mb-2 font-medium">
                      <span className="flex items-center gap-1">
                        <span className="text-blue-500">▸</span> Message Contents
                      </span>
                    </label>
                    <textarea
                      id="message"
                      className="w-full p-3 bg-gray-800/70 border border-blue-500/30 rounded-lg text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 placeholder-gray-500"
                      rows={5}
                      placeholder="Transmit your message across the void..."
                    />
                  </motion.div>
                  
                  <motion.button
                    className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 group shadow-lg shadow-blue-500/20"
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 5px 20px rgba(99, 102, 241, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Initiate Transmission</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info - Command Center */}
          <motion.div
            className="lg:w-1/3 w-full flex flex-col items-center lg:items-start gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <div className="relative bg-gray-900/30 backdrop-blur-lg p-8 rounded-xl border border-blue-500/40 shadow-2xl w-full">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                  Command Channels
                </h3>
              </div>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 bg-blue-900/50 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-300">Primary Communication</p>
                    <p className="text-white font-medium">contact@agnhotriaerospace.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 bg-purple-900/50 rounded-lg">
                    <span className="text-lg">📡</span>
                  </div>
                  <div>
                    <p className="text-sm text-blue-300">Secure Frequency</p>
                    <p className="text-white font-medium">+1 (555) 123-4567</p>
                  </div>
                </motion.div>
                
                <div className="pt-4">
                  <p className="text-sm text-blue-300 mb-3">Alternative Channels</p>
                  <div className="flex gap-4">
                    {[
                      { icon: Instagram, color: "from-pink-500 to-purple-600", url: "https://instagram.com" },
                      { icon: Linkedin, color: "from-blue-500 to-blue-700", url: "https://linkedin.com" },
                      { icon: Youtube, color: "from-red-500 to-red-700", url: "https://youtube.com" }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-lg bg-gradient-to-br ${social.color} shadow-md`}
                        whileHover={{ 
                          scale: 1.1,
                          y: -3,
                          boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="w-5 h-5 text-white" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Space Graphic */}
            <motion.div
              className="relative w-full h-64 rounded-xl overflow-hidden border border-blue-500/40 shadow-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ 
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative w-32 h-32"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <Image
                    src="/images/satellite.png" // Replace with your image
                    alt="Satellite"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </div>
              <div className="absolute bottom-4 left-4 text-white text-sm font-medium backdrop-blur-sm bg-black/30 px-3 py-1 rounded-full">
                <span className="text-blue-400">🛰</span> Orbital Relay Active
              </div>
            </motion.div>
          </motion.div>

          {/* Location Section - Navigation Array */}
          <motion.div
            className="lg:w-1/3 w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            <div className="relative bg-gray-900/30 backdrop-blur-lg p-8 rounded-xl border border-blue-500/40 shadow-2xl h-full">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                  Coordinates
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 bg-gray-800/50 rounded-lg border border-green-500/20">
                  <p className="text-green-300 text-sm mb-1">Primary Headquarters</p>
                  <p className="text-white font-medium">123 Space Lane, Orbital City, Earth</p>
                </div>
                
                {/* Interactive Map */}
                <div className="relative w-full h-64 rounded-lg overflow-hidden border border-green-500/40 mt-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-blue-900/20" />
                  
                  {/* Grid Pattern */}
                  <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgb(74, 222, 128)" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#mapGrid)" />
                  </svg>
                  
                  {/* Map Marker */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-8 h-8 -ml-4 -mt-4"
                    animate={{
                      y: [0, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-full h-full bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-xs text-green-400 font-mono whitespace-nowrap">
                      HQ LOCATION
                    </div>
                  </motion.div>
                  
                  {/* Coordinates Display */}
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm p-2 rounded border border-green-500/30">
                    <p className="text-green-400 font-mono text-xs">
                      LAT: 34.052235°<br />
                      LONG: -118.243683°<br />
                      ALT: 0.05 AU
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Advanced HUD Elements */}
      <div className="absolute top-10 right-10 hidden lg:block">
        <motion.div
          className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-blue-500/40"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="w-2 h-2 bg-green-400 rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-sm font-mono text-green-400">COMMS ONLINE</span>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <motion.div
          className="text-xs font-mono text-blue-400/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p>AGNHOTRI AEROSPACE SYSTEMS</p>
          <p>v2.4.1 | TRANSMISSION PROTOCOL ACTIVE</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;