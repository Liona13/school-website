"use client";

import { motion } from 'framer-motion';

const CampusLifeHero = () => {
  return (
    <section className="min-h-[60vh] bg-gradient-to-b from-blue-50 to-white relative flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Campus Life at SchoolMS
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience a vibrant community where learning extends beyond the classroom. 
            Discover the perfect balance of academic excellence and enriching activities.
          </motion.p>
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="#activities" 
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg 
                hover:bg-primary-dark transition-colors"
            >
              Explore Activities
            </a>
            <a 
              href="#events" 
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg 
                border-2 border-primary hover:bg-gray-50 transition-colors"
            >
              View Events
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CampusLifeHero; 