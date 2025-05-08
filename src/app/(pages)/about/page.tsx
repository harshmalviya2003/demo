"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import PartnersSection from '@/components/Home/marquee';
import Image from 'next/image';
const AboutPage = () => {
  const founders = [
    { name: "Mahabaleshwar R", role: "Co-Founder & CTO",image: "/image/founder-1.jpg" },
    { name: "Raghupati G Bhat", role: "Co-Founder & CEO",image: "/image/founder-2.jpg" }
  ];

  // const supporters = [
  //   { name: "Deshpande Startups", icon: <Landmark className="w-6 h-6" /> },
  //   { name: "nasscom Startups", icon: <Users className="w-6 h-6" /> },
  //   { name: "STARTUP KARNATAKA", icon: <Award className="w-6 h-6" /> },
  //   { name: "DST MIDHI", icon: <Globe className="w-6 h-6" /> },
  //   { name: "SANYAJOR", icon: <Satellite className="w-6 h-6" /> }
  // ];

  return (
    <div className="min-h-screen mt-20 bg-black text-white overflow-hidden">
      {/* Space Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars */}
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
        
        {/* Nebula Effect */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900 rounded-full filter blur-3xl opacity-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900 rounded-full filter blur-3xl opacity-10" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 block">
              AGNHOTRI
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 block">
              AEROSPACE
            </span>
          </motion.h1>
          
          <motion.div
            className="max-w-3xl mx-auto text-xl text-blue-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Pioneering the next era of space accessibility
          </motion.div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-16 mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.h2
              className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
              whileHover={{ x: 5 }}
            >
              Our Mission
            </motion.h2>
            
            <motion.div
              className="space-y-6 text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <p>
                At <span className="text-blue-400 font-medium">Agnihotri Aerospace</span>, we&apos;re driven by a singular passion: solving the most complex challenges in space exploration.
              </p>
              
              <p>
                Our focus is on developing <span className="text-purple-400 font-medium">reusable rocket systems</span> that can land precisely where intended, dramatically reducing costs and launch delays.
              </p>
              
              <p>
                We believe space should be accessible to all humanity. Our mission is to turn this vision into reality by creating reliable, affordable launch systems that will open the cosmos to scientific discovery and commercial opportunity.
              </p>
              
              <p>
                Join us as we push the boundaries of what&apos;s possible and explore what lies beyond our atmosphere.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            className="relative h-96 rounded-2xl overflow-hidden border border-blue-500/30 shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Rocket className="w-32 h-32 text-blue-400" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <p className="text-blue-300 font-mono text-sm">
                AGNHOTRI R&D FACILITY • BENGALURU
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Founders Section */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"
            whileHover={{ scale: 1.02 }}
          >
            Founders
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
  {founders.map((founder, index) => (
    <motion.div
      key={index}
      className="bg-gray-900/50 backdrop-blur-md p-8 rounded-xl border border-blue-500/30 shadow-lg"
      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Image  
        src={founder.image}
        alt={founder.name}
        className="w-50 h-60 p-2 object-cover mb-6 mx-auto border border-blue-500/30"
      />
      <h3 className="text-2xl font-bold text-center mb-2">{founder.name}</h3>
      <div className="mt-6 flex justify-center space-x-4">
        {/* <a href={founder.linkedin} className="text-blue-400 hover:text-blue-300"> */}
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            {/* LinkedIn icon SVG */}
          </svg>
        
        {/* <a href={founder.twitter} className="text-blue-400 hover:text-blue-300"> */}
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            {/* Twitter/X icon SVG */}
          </svg>
        
      </div>
    </motion.div>
  ))}
</div>
        </motion.div>

        {/* Supporters Section */}
       <PartnersSection/>

        {/* Call to Action */}
        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
            whileHover={{ scale: 1.02 }}
          >
            Ready to Explore With Us?
          </motion.h2>
          <motion.button
            className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/20"
            whileHover={{ scale: 1.05, boxShadow: "0 5px 20px rgba(99, 102, 241, 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            Join Our Mission
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;