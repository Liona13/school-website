"use client";

import { motion } from 'framer-motion';

const AcademicsHero = () => {
  return (
    <section className="relative min-h-[60vh] bg-blue-50 flex items-center">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl ml-4 md:ml-8">
          <motion.h1 
            className="heading-1 text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="block">Academic</span>
            <span className="block">Excellence</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-700 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover our comprehensive academic programs designed to nurture 
            intellectual curiosity, critical thinking, and personal growth. 
            Our dedicated faculty and innovative curriculum prepare students 
            for success in higher education and beyond.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AcademicsHero; 