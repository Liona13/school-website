"use client";

import { motion } from 'framer-motion';

const leaders = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Principal',
    description: 'With over 20 years of experience in education, Dr. Johnson leads our institution with vision and dedication.',
    image: '/images/leaders/principal.jpg'
  },
  {
    name: 'Prof. Michael Chen',
    role: 'Academic Director',
    description: 'Prof. Chen oversees our academic programs, ensuring excellence in curriculum development and teaching standards.',
    image: '/images/leaders/academic-director.jpg'
  },
  {
    name: 'Mrs. Emily Rodriguez',
    role: 'Student Affairs Director',
    description: 'Dedicated to student welfare and development, Mrs. Rodriguez creates an enriching campus environment.',
    image: '/images/leaders/student-affairs.jpg'
  },
  {
    name: 'Mr. David Thompson',
    role: 'Administrative Head',
    description: 'Mr. Thompson ensures smooth operation of administrative functions and resource management.',
    image: '/images/leaders/admin-head.jpg'
  }
];

const LeadershipSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="heading-2 text-primary text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Leadership Team
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <div className="absolute inset-0 bg-gray-200">
                  {/* Image placeholder - in production, use next/image */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors">
                  {leader.name}
                </h3>
                <p className="text-primary font-medium mt-1 mb-3">
                  {leader.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {leader.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection; 