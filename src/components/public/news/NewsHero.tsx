"use client";

import { motion } from 'framer-motion';

const NewsHero = () => {
  return (
    <section className="relative min-h-[40vh] flex items-center bg-blue-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 py-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-blue-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            News & Updates
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-blue-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Stay informed about the latest happenings, events, and achievements
            at our school. Discover stories that showcase our community's
            excellence and growth.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsHero; 