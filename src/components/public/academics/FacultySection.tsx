"use client";

import { motion } from 'framer-motion';

const faculty = [
  {
    name: 'Dr. Robert Wilson',
    department: 'Mathematics',
    qualification: 'Ph.D. in Mathematics',
    experience: '15+ years teaching experience',
    specialization: 'Advanced Calculus and Number Theory',
    image: '/images/faculty/robert-wilson.jpg'
  },
  {
    name: 'Prof. Lisa Chen',
    department: 'Science',
    qualification: 'Ph.D. in Physics',
    experience: '12+ years teaching experience',
    specialization: 'Quantum Mechanics and Astrophysics',
    image: '/images/faculty/lisa-chen.jpg'
  },
  {
    name: 'Dr. Maria Garcia',
    department: 'Languages',
    qualification: 'Ph.D. in Linguistics',
    experience: '10+ years teaching experience',
    specialization: 'Comparative Literature and Spanish',
    image: '/images/faculty/maria-garcia.jpg'
  },
  {
    name: 'Prof. James Anderson',
    department: 'Social Studies',
    qualification: 'Ph.D. in History',
    experience: '18+ years teaching experience',
    specialization: 'World History and Political Science',
    image: '/images/faculty/james-anderson.jpg'
  }
];

const FacultySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Distinguished Faculty
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {faculty.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-primary font-medium">{member.department}</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-medium">Qualification:</span> {member.qualification}</p>
                <p><span className="font-medium">Experience:</span> {member.experience}</p>
                <p><span className="font-medium">Specialization:</span> {member.specialization}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection; 