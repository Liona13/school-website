"use client";

import { motion } from 'framer-motion';

const subjects = {
  'Core Subjects': [
    'Mathematics',
    'Science',
    'English Language Arts',
    'Social Studies'
  ],
  'Languages': [
    'Spanish',
    'French',
    'Mandarin',
    'Latin'
  ],
  'Arts & Culture': [
    'Visual Arts',
    'Music',
    'Drama',
    'Cultural Studies'
  ],
  'Technology': [
    'Computer Science',
    'Digital Media',
    'Robotics',
    'Web Development'
  ]
};

const CurriculumSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Curriculum
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(subjects).map(([category, subjectList], index) => (
            <motion.div
              key={category}
              className="bg-gray-50 rounded-xl p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category}
              </h3>
              <ul className="space-y-3">
                {subjectList.map((subject, idx) => (
                  <motion.li
                    key={subject}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.1 }}
                  >
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
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                    {subject}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p 
          className="text-center text-gray-600 mt-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Our curriculum is designed to provide a comprehensive education that prepares 
          students for success in college and beyond. Each subject area is carefully 
          structured to promote critical thinking, creativity, and practical application.
        </motion.p>
      </div>
    </section>
  );
};

export default CurriculumSection; 