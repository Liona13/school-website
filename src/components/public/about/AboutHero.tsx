"use client";

import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-blue-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 py-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl ml-4 md:ml-8 space-y-6"
        >
          <motion.h1 
            className="heading-1 text-primary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About Our School
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Discover our rich history, mission, and the dedicated team that makes
            our school a center of educational excellence. We are committed to
            nurturing future leaders and innovators through comprehensive education
            and holistic development.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero; 