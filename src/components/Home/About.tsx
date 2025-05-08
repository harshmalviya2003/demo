"use client"
import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Space background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
        <div className="absolute top-0 bottom-0 left-2/3 w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Side - Logo with advanced effects */}
          <div className="lg:w-1/3 mb-16 lg:mb-0 relative">
            <div className="relative w-64 h-64 mx-auto lg:mx-0">
              <Image
                src="/image/logo.png"
                alt="AgnHotri Aerospace Logo"
                fill
                className="object-contain drop-shadow-2xl"
              />
              
              {/* Animated orbit rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-full h-full border border-cyan-400/30 rounded-full animate-spin-slow" style={{ animationDuration: '40s' }} />
                <div className="absolute w-3/4 h-3/4 border border-blue-400/30 rounded-full animate-spin-slow" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
                <div className="absolute w-1/2 h-1/2 border border-white/20 rounded-full animate-spin-slow" style={{ animationDuration: '50s' }} />
              </div>
              
              {/* Floating dots */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float" style={{ animationDuration: '15s' }} />
              <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float" style={{ animationDuration: '12s', animationDelay: '2s' }} />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-2/3 lg:pl-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              <span className="inline-block">
                About <span className="text-white">AgnHotri Aerospace</span>
              </span>
            </h2>
            
            <div className="space-y-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300" />
                <div className="relative bg-black/70 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-cyan-300 flex items-center">
                    <span className="w-3 h-3 bg-cyan-400 rounded-full mr-3 animate-pulse" />
                    Our Passion
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Locating solutions to difficult space exploration issues. We thrive on pushing boundaries and solving problems that others consider impossible.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300" />
                <div className="relative bg-black/70 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-300 flex items-center">
                    <span className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse" style={{ animationDelay: '0.3s' }} />
                    Our Priority
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Manufacturing reusable rockets that land gently where we want them to. This revolutionary approach leads to lower expenses and shorter launch delays, making space more accessible than ever before.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300" />
                <div className="relative bg-black/70 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-purple-300 flex items-center">
                    <span className="w-3 h-3 bg-purple-400 rounded-full mr-3 animate-pulse" style={{ animationDelay: '0.6s' }} />
                    Our Goal
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    To increase accessibility for all people in space. We&apos;re here to fulfill your curiosity about what lies beyond our atmosphere. Together, let&apos;s go on this extraordinary journey to the stars.
                  </p>
                </div>
              </div>
            </div>

            {/* Animated CTA */}
            <div className="mt-12">
              <button className="relative px-8 py-3 bg-transparent border-2 border-cyan-400 rounded-full text-white font-medium tracking-wider overflow-hidden group">
                <span className="relative z-10 flex items-center">
                  Join Our Mission
                  <svg className="ml-2 w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }
        .animate-spin-slow {
          animation: spin-slow linear infinite;
        }
        .animate-twinkle {
          animation: twinkle 5s infinite ease-in-out;
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;