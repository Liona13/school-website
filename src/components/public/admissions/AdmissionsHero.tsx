"use client";

import { motion } from 'framer-motion';

const AdmissionsHero = () => {
  return (
    <section className="relative min-h-[60vh] bg-blue-50 flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Join Our School Community
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Begin your journey towards academic excellence. We welcome students who 
            are eager to learn, grow, and contribute to our diverse community.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="#apply-now" 
              className="inline-block bg-primary text-white px-8 py-3 rounded-full 
                font-medium hover:bg-primary-dark transition-colors"
            >
              Start Application
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsHero;