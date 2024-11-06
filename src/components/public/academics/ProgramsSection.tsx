"use client";

import { motion } from 'framer-motion';

const programs = [
  {
    title: 'Primary Education',
    description: 'Building strong foundations through engaging, age-appropriate learning experiences.',
    grades: 'Grades 1-5',
    features: [
      'Core Curriculum',
      'Arts & Music',
      'Physical Education',
      'Social Development'
    ]
  },
  {
    title: 'Middle School',
    description: 'Fostering critical thinking and personal growth in a supportive environment.',
    grades: 'Grades 6-8',
    features: [
      'Advanced Core Subjects',
      'STEM Programs',
      'Project-Based Learning',
      'Leadership Development'
    ]
  },
  {
    title: 'High School',
    description: 'Preparing students for higher education and future success.',
    grades: 'Grades 9-12',
    features: [
      'College Prep Curriculum',
      'AP/IB Programs',
      'Career Guidance',
      'Research Projects'
    ]
  }
];

const ProgramsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Academic Programs
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div 
              key={program.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <p className="text-primary font-medium mb-4">{program.grades}</p>
              <ul className="space-y-2">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg 
                      className="w-4 h-4 text-green-500 mr-2" 
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
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection; 