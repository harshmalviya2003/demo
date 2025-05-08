"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Replace these with your actual partner logo paths
const partnerLogos = [
  { src: '/image/partner/1.png', name: 'Deshpande Startups' },
  { src: '/image/partner/2.png', name: 'nasscom startups' },
  { src: '/image/partner/3.png', name: 'STARTUP KARNATAKA' },
  { src: '/image/partner/4.png', name: 'DST NIDHI' },
  { src: '/image/partner/5.png', name: 'INN' },
  { src: '/image/partner/6.png', name: 'inunity' },
  { src: '/image/partner/7.png', name: 'innovation for community' },
  { src: '/image/partner/8.png', name: 'Raportes deutsche Bank' },
  { src: '/image/partner/9.png', name: 'DEPARTMENT OF SCIENCE & TECHNOLOGY' },
  { src: '/image/partner/10.png', name: 'SAHYADRI COLLEGE' },
];

interface MarqueeProps {
  direction: 'left' | 'right';
  speed?: number;
  logos: typeof partnerLogos;
  onLogoClick: (logo: typeof partnerLogos[0]) => void;
}

export const Marquee: React.FC<MarqueeProps> = ({ 
  direction = 'left', 
  speed = 30,
  logos,
  onLogoClick
}) => {
  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className="flex"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <motion.div
            key={`${index}-${logo.src}`}
            className="flex-shrink-0 mx-3 w-32 h-32 p-2 bg-black rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all duration-300 flex items-center justify-center border border-gray-700"
            whileHover={{ scale: 1.05, borderColor: "#3b82f6" }}
            onClick={() => onLogoClick(logo)}
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={120}
              height={120}
              className="object-contain h-full w-full"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export const PartnersSection: React.FC = () => {
  const [selectedLogo, setSelectedLogo] = useState<typeof partnerLogos[0] | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleLogoClick = (logo: typeof partnerLogos[0]) => {
    setSelectedLogo(logo);
    setShowPopup(true);
  };

  // Split logos into two groups for two marquees
  const firstGroup = partnerLogos.slice(0, 5);
  const secondGroup = partnerLogos.slice(5);

  return (
    <section className="relative py-16 bg-black">
      {/* Popup Modal */}
      {showPopup && selectedLogo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl max-w-md w-full p-6 shadow-2xl border border-gray-800">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">{selectedLogo.name}</h3>
              <button 
                onClick={() => setShowPopup(false)}
                className="text-gray-400 hover:text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="w-full h-48 relative bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <Image
                src={selectedLogo.src}
                alt={selectedLogo.name}
                fill
                className="object-contain p-4"
              />
            </div>
            <p className="mt-4 text-gray-400">Thank you for supporting our mission</p>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
          Supported By
        </h2>
        
        <div className="mb-10">
          <Marquee 
            direction="left" 
            speed={40}
            logos={firstGroup}
            onLogoClick={handleLogoClick}
          />
        </div>
        
       
        

        <p className="text-center text-gray-400 mt-12">
          We're proud to collaborate with these innovative organizations
        </p>
      </div>
    </section>
  );
};

export default PartnersSection;