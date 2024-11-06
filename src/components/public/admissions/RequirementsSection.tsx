"use client";

import { motion } from 'framer-motion';

const requirements = [
  {
    category: 'Academic Records',
    items: [
      'Official transcripts from previous schools',
      'Standardized test scores (if applicable)',
      'Academic recommendations',
      'School reports and grade sheets'
    ]
  },
  {
    category: 'Personal Documents',
    items: [
      'Birth certificate',
      'Passport-size photographs',
      'Proof of residence',
      'Medical records and immunization history'
    ]
  },
  {
    category: 'Additional Requirements',
    items: [
      'Personal statement or essay',
      'Parent/guardian information',
      'Emergency contact details',
      'Previous extracurricular records'
    ]
  }
];

const RequirementsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Admission Requirements
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {requirements.map((category, index) => (
            <motion.div
              key={category.category}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <motion.li
                    key={item}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.1 }}
                  >
                    <svg 
                      className="w-5 h-5 text-primary mr-2 flex-shrink-0" 
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
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="mb-4">
            All documents must be submitted in English or with certified translations.
          </p>
          <p className="text-sm">
            Note: Additional documents may be required based on the program and grade level.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RequirementsSection; 