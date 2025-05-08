"use client"
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    
    const handleScroll = () => {
      setScrollProgress(Math.min(window.scrollY / window.innerHeight, 1));
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    setIsLoaded(true);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Dynamic effects based on scroll and mouse position
  const textGlowIntensity = 10 + scrollProgress * 20;
  const parallaxOffsetX = (mousePosition.x - 0.5) * 30;
  const parallaxOffsetY = (mousePosition.y - 0.5) * 30;

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/10 animate-float"
            style={{
              width: `${Math.random() * 5 + 1}px`,
              height: `${Math.random() * 5 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 30 + 20}s`,
              transform: `translate(${parallaxOffsetX * (Math.random() * 0.5 + 0.5)}px, ${parallaxOffsetY * (Math.random() * 0.5 + 0.5)}px)`
            }}
          />
        ))}
      </div>

      {/* Video Background with parallax */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-1 opacity-70"
        style={{ 
          transform: `scale(${1 + scrollProgress * 0.1}) translate(${parallaxOffsetX * 0.3}px, ${parallaxOffsetY * 0.3}px)`
        }}
        src="/video/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Advanced gradient overlay */}
      {/* <div className="absolute inset-0 z-2 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
      <div className="absolute inset-0 z-2 bg-gradient-to-r from-black/60 via-transparent to-black/60" /> */}

      {/* Animated stars */}
      <div className="absolute inset-0 z-2 overflow-hidden">
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
              transform: `translate(${parallaxOffsetX * 0.5}px, ${parallaxOffsetY * 0.5}px)`
            }}
          />
        ))}
      </div>

      {/* Satellite element */}
      <div className="absolute top-1/4 left-1/4 z-3 w-16 h-16 animate-orbit">
        {/* <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 w-4 h-4 bg-gray-300 rounded-full" />
          <div className="absolute top-1/2 left-1/2 w-8 h-1 bg-gray-400 transform -translate-y-1/2" />
        </div> */}
      </div>

      {/* Main content */}
      <div 
        className={`relative z-10 flex flex-col items-center justify-center h-full px-4 text-center select-none transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transform: `translate(${parallaxOffsetX * 0.2}px, ${parallaxOffsetY * 0.2}px)`
        }}
      >
        {/* Animated title */}
        <div className="mb-4 overflow-hidden">
          <h1 
            className="text-[clamp(2.5rem,7vw,7rem)] font-bold uppercase tracking-tighter leading-none"
            style={{
              textShadow: `0 0 ${textGlowIntensity}px rgba(59, 130, 246, ${0.3 + scrollProgress * 0.7})`,
              background: 'linear-gradient(to right, #ffffff, #c2e9fb)',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'titleEntrance 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards'
            }}
          >
            Expanding Frontiers
          </h1>
        </div>

        {/* Animated subtitle */}
        <div className="mb-8 overflow-hidden">
          <h2 
            className="text-[clamp(1.5rem,3vw,3rem)] font-medium tracking-wider"
            style={{
              textShadow: `0 0 ${textGlowIntensity * 0.7}px rgba(16, 185, 129, ${0.2 + scrollProgress * 0.5})`,
              color: '#a5b4fc',
              animation: 'subtitleEntrance 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards 0.3s',
              opacity: 0,
              animationFillMode: 'forwards'
            }}
          >
            Pioneering the Future of Space Exploration
          </h2>
        </div>

        {/* Animated CTA button */}
        <button 
          className="relative px-8 py-3 bg-transparent border-2 border-cyan-400 rounded-full text-white font-medium tracking-wider overflow-hidden group"
          style={{
            animation: 'fadeIn 2s ease-out forwards 1s',
            opacity: 0
          }}
        >
          <span className="relative z-10 flex items-center">
            Begin Journey
            <svg className="ml-2 w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
          <span className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 transition-all duration-300 rounded-full" />
        </button>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          style={{
            animation: 'bounce 2s infinite 1.5s'
          }}
        >
          <span className="text-xs text-gray-400 mb-2 tracking-widest">EXPLORE</span>
          <div className="w-px h-12 bg-gradient-to-t from-cyan-400 to-transparent" />
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes titleEntrance {
          0% { 
            opacity: 0;
            transform: translateY(40px) scale(0.9);
            letter-spacing: -0.1em;
          }
          100% { 
            opacity: 1;
            transform: translateY(0) scale(1);
            letter-spacing: -0.05em;
          }
        }
        @keyframes subtitleEntrance {
          0% { 
            opacity: 0;
            transform: translateY(20px);
          }
          100% { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-100vh) rotate(360deg); }
        }
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-20px);}
          60% {transform: translateY(-10px);}
        }
        .animate-twinkle {
          animation: twinkle 5s infinite ease-in-out;
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-orbit {
          animation: orbit 20s linear infinite;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }

        @media (max-width: 768px) {
          .animate-orbit {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;