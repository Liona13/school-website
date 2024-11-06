"use client";

import { motion } from 'framer-motion';

const MissionSection = () => {
  const values = [
    {
      title: 'Excellence in Education',
      description: 'Committed to the highest standards of academic achievement and personal growth.'
    },
    {
      title: 'Innovation and Creativity',
      description: 'Fostering innovative thinking and creative problem-solving skills.'
    },
    {
      title: 'Integrity and Ethics',
      description: 'Building character through strong ethical principles and moral values.'
    },
    {
      title: 'Diversity and Inclusion',
      description: 'Celebrating diversity and creating an inclusive learning environment.'
    },
    {
      title: 'Community Engagement',
      description: 'Actively participating in and contributing to our local and global community.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="heading-2 text-primary text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Mission & Vision
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide exceptional education that empowers students to achieve academic excellence,
              develop critical thinking skills, and become responsible global citizens who contribute
              positively to society.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-8 rounded-xl shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be a leading educational institution that inspires lifelong learning, fosters innovation,
              and shapes future leaders who make meaningful contributions to the world.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection; 