"use client";

import { motion } from 'framer-motion';

const MissionVisionSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Mission & Vision
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To provide exceptional education that empowers students to become innovative 
              thinkers, creative problem-solvers, and responsible global citizens.
            </p>
            <ul className="space-y-3">
              {[
                'Foster academic excellence',
                'Develop critical thinking skills',
                'Promote ethical behavior',
                'Encourage community engagement'
              ].map((point, index) => (
                <li key={index} className="flex items-center">
                  <svg 
                    className="w-4 h-4 text-primary mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary">Our Vision</h3>
            <p className="text-gray-600 mb-6">
              To be a leading educational institution that nurtures excellence, fosters 
              innovation, and inspires lifelong learning in a diverse and inclusive environment.
            </p>
            <ul className="space-y-3">
              {[
                'Lead in educational innovation',
                'Create inclusive learning spaces',
                'Build global partnerships',
                'Inspire lifelong learning'
              ].map((point, index) => (
                <li key={index} className="flex items-center">
                  <svg 
                    className="w-4 h-4 text-primary mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection; 