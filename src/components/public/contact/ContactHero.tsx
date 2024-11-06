"use client";

import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-green-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 text-green-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-green-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have questions about admissions, academics, or campus life? 
            Our team is here to help. Reach out to us through any of our 
            contact channels or fill out the form below.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero; 