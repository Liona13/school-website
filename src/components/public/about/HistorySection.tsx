"use client";

import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: '1995',
    title: 'Foundation',
    description: 'Established with a vision to provide quality education to all.',
    icon: '🏫'
  },
  {
    year: '2000',
    title: 'Campus Expansion',
    description: 'Added new facilities including science labs and sports complex.',
    icon: '🏗️'
  },
  {
    year: '2010',
    title: 'Academic Excellence',
    description: 'Achieved national recognition for academic standards and student achievements.',
    icon: '🎓'
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    description: 'Implemented cutting-edge technology in education delivery and administration.',
    icon: '💻'
  }
];

const HistorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="heading-2 text-primary text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our History
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              className="relative flex items-start mb-12 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline line */}
              <div className="absolute top-0 left-16 bottom-0 w-px bg-gray-200" />

              {/* Year bubble */}
              <div className="relative z-10 flex-shrink-0 w-32">
                <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white">
                  {event.year}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{event.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection; 